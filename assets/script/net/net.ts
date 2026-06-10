

// 网络状态提示
import { DEV } from "cc/env";
import CRC32 from "crc-32"
import NetSocket, { NetCloseCode, NetStatus } from "../sdk/net/NetSocket";
import NetHeartBeat from "./net-heart-beat";
import { checkIsTest } from "../../script-load/build_config/Env";
import Log from "../log/Logger";
import CocosUtils from "../utils/CocosUtils";
import protobuf from "protobufjs";
import {common} from "db://assets/script/proto/proto_c2s.js";

const NetStatusTips = {
    [NetStatus.UnConnected]: "未连接", //no need trans
    [NetStatus.Connecting]: "正在连接", //no need trans
    [NetStatus.Connected]: "连接成功", //no need trans
    [NetStatus.Disconnect]: "断开连接", //no need trans
    [NetStatus.Kicked]: "被服务器踢下线", //no need trans
    [NetStatus.TimeOut]: "重连超时", //no need trans
    [NetStatus.ClientClose]: "客户端主动断开", //no need trans
    [NetStatus.ServerClose]: "服务器断开", //no need trans
    [NetStatus.MessageLost]: "消息包丢失", //no need trans
    [NetStatus.ServerFull]: "服务队列已满", //no need trans
};

/** 长链接标识枚举 */
export enum ENetKey {
    none = "none",
    /** 聊天 */
    chat = "chat",
}

export type ConnectParams = {
    url: string;
    connectId: number;
    onConnected?: (id: number) => void;
    onMessage: (data: Uint8Array) => void;
    onDisconnect: (event: NetCloseEvent, id: number) => void;
    onConnectErr: (evt: Event, id: number) => void;
};

export type NetCloseEvent = {
    code?: number;
    reason?: string;
};

/** 定义 PB 消息的接口 */
export type IPbMessage<T> = {
    new(): T;
    N: {
        OpCode: number;
    };
    name: string;
    encode?(m: T, w?: protobuf.Writer): protobuf.Writer;
    decode: (r?: protobuf.Reader, l?: number) => T;
};

/**
 * 定义消息的常量
 */
enum Packet {
    OpcodeIndex = 1, // OpCode 在消息包中的偏移量
    MessageIndex = 3, // 真正的消息数据在消息包中的偏移量
}

enum LoginType {
    LoginNormal = 0,
    LoginRetry = 1,
}

/**
 * 定义消息处理的信息
 */
class SDispatcherInfo {
    constructor(
        public caller: any, // 侦听函数的执行域
        private cb: Function,
        public decoder: (dataStream?: protobuf.Reader) => any, // 真正的处理函数
        public readonly once: boolean // 此消息是否只处理一次
    ) { }

    /**
     * 回调消息处理函数
     * @param dataStream 消息包数据
     */
    public call(data: any) {
        // this.handler.call(this.caller, dataStream);
        this.cb.call(this.caller, data);
    }
}

/* ---------⬇ reliable长连相关 ⬇-------- */
const MESSAGE_MAX_NO = 256;  // 消息包最大编号. 会放入一个 byte 中

/** 保存待处理的消息的信息 */
class CachedMessage {
    public constructor(public opCode: number, public pbReader: any) {
    }
}

/** 定义消息序号的类型 */
type MESSAGE_NO = number;
/* ---------⬆ reliable长连相关 ⬆-------- */

export class Net {
    private _socket: NetSocket | null = null;

    /* ---------⬇ reliable长连相关 ⬇-------- */

    /** 下一个要发送的消息包的编号 */
    private msgSendNo: MESSAGE_NO = 0;
    /** 下一个要接收的消息包的编号 */
    private msgRecvNo: MESSAGE_NO = 0;

    /** 用于缓冲颠倒顺序的消息 */
    private msgOrderMap: Map<MESSAGE_NO, CachedMessage> = new Map();

    /** 用于记录上次接收到有效消息包的时间 */
    private latestRecvValidMessageTime = 0;

    /** 消息包丢失的最大时间(毫秒) */
    private static readonly MESSAGE_LOST_MAX_DURATION = DEV ? 15 * 60 * 1000 : 3000; // 调试模式下会等待的时间更长一些

    /** 保存客户端的版本号 */
    private _clientBuilderNumber: number = 0;

    /* ---------⬆ reliable长连相关 ⬆-------- */


    private _heartBeat: NetHeartBeat | null = null;
    private status: NetStatus = NetStatus.UnConnected;
    private _firstConnect = true;
    private url = ""; // 连接地址
    private token = ""; // 连接地址
    private _netKey: ENetKey = ENetKey.none;
    private maxRetryTimes = 0; // 最大重试次数
    private resetRetryTimesAfterSuccess = 10; // 连接成功 N 秒后，重置重连次数到 0
    private retryDuration = [1, 2, 2, 3, 3, 4, 5, 10]; // 重试时间间隔
    private _retryTimes = 0; // 当前重试次数
    // 保存消息的分发
    private mMessageDispatcher: { [key: number]: SDispatcherInfo; } = {}; // 用于缓冲的消息头写入,减少gc分配
    /* 这个地方加1是服务于reliable长连 */
    public static readonly cachedMsgHeader = new Uint8Array(2 + 1);


    /** 用于 http 连接的缓存消息头 */
    public static readonly cachedMsgHeaderForHttp = new Uint8Array(2);


    private _retryHandler: () => void | null = null;
    private _resetTimesHandler: () => void | null = null;
    private showLog = checkIsTest();
    private _statusChangeCB: ((status: NetStatus) => void) | null = null;

    public get retryTimes(): number {
        return this._retryTimes;
    }

    private _connectId = 0;

    init(url: string, token: string, netKey: ENetKey) {
        console.log("net connector url", url);
        this.url = url;
        this.token = token;
        this._netKey = netKey;
        this.maxRetryTimes = this.retryDuration.length;
        this._socket = new NetSocket();
        this._heartBeat = new NetHeartBeat();
        this.initNetStatus();
        this._retryHandler = this.retry.bind(this);
        this._resetTimesHandler = this.resetRetryTimes.bind(this);
    }

    public resetToken(token: string) {
        this.token = token;
    }

    /** 设置网络状态回调 */
    public setStatusChangeCB(cb: (status: NetStatus) => void): void {
        this._statusChangeCB = cb;
    }

    public resetConnect(url: string, token: string): void {
        console.log("链接重置", this._netKey);
        this.url = url;
        this.token = token;
        this._retryTimes = 0;

        /* ⬇reliable长连相关⬇ */
        // 重置消息的发送与接收编号 ,于reliable长连相关
        this.msgSendNo = 0;
        this.msgRecvNo = 0;
        this.msgOrderMap.clear();
        this.latestRecvValidMessageTime = 0;
        /* ⬆reliable长连相关⬆ */
    }

    // 开始连接服务器
    private startConnect(): void {
        this._connectId++;
        console.log("开始连接", this._connectId, this._netKey);
        const loginType: LoginType = this._firstConnect ? LoginType.LoginNormal : LoginType.LoginRetry;

        /* ⬇reliable长连相关⬇ */
        const misc_type = {
            isReliable: true, // 这是 reliable 通道
        };
        const exUrlParam = `&bn=${this._clientBuilderNumber}&misc_type=${encodeURIComponent(JSON.stringify(misc_type))}`;
        /* ⬆reliable长连相关⬆ */

        const url = `${this.url}?token=${this.token}&login_type=${loginType}` + exUrlParam;

        const params: ConnectParams = {
            url: url,
            connectId: this._connectId,
            onDisconnect: this.onDisconnect.bind(this),
            onConnected: this.onConnected.bind(this),
            onMessage: this.onReceiveMsg.bind(this),
            onConnectErr: this.onConnectErr.bind(this),
        }; // 网络属性
        try {
            this._socket && this._socket.connect(params);
        } catch (err) {
            this.onDisconnect(err as NetCloseEvent, params.connectId); // 连接断开
        }
    }

    /**
     * 开始连接服务器
     * @param {number} clientBuildNumber 客户端版本号，用于reliable长连
     */
    public connect(clientBuildNumber?: number, reconnect = false): void {
        if (this.status == NetStatus.Connecting || this.status == NetStatus.Connected) {
            console.log("======重复链接", this._netKey);
            return;
        }
        if (!this.token) {
            console.log("======没有token", this._netKey);
            return;
        }

        /* ⬇reliable长连相关⬇ */
        if (clientBuildNumber) {
            this._clientBuilderNumber = clientBuildNumber;
        }
        /* ⬆reliable长连相关⬆ */

        this.onConnect(); // 开始连接回调
        this.startConnect(); // 开始连接服务器
    }

    // 强行关闭连接
    public close(obj?: { code: number; reason: string; }): void {
        console.warn("主动关闭连接", this._netKey);
        this._heartBeat && this._heartBeat.stopBeat();
        this._retryTimes = 0;

        obj = obj || { code: NetCloseCode.ClientClose, reason: "主动关闭连接" };
        if (
            obj.code == NetCloseCode.ServerKick ||
            obj.code == NetCloseCode.ServerClose ||
            obj.code == NetCloseCode.ServerFull ||
            obj.code == NetCloseCode.ClientClose
        ) {
            this.token = "";
            this.mMessageDispatcher = {}; // 清理掉消息分发
            this._retryHandler && CocosUtils.removeDelayCallback(this._retryHandler);
            this._resetTimesHandler && CocosUtils.removeDelayCallback(this._resetTimesHandler);
        }
        this._socket?.close(obj);
    }

    /**
     * 注册指定消息的监听函数
     * @param opcode  指定要侦听的消息
     * @param caller 侦听函数的执行域
     * @param decoder 接收到消息时的回调函数
     * @param once 是否只监听一次,如果是,则在触发监听后,自动移除对消息的监听
     * 注: 重复注册会直接替换掉当前的监听函数
     */
    public onMsg<T>(caller: any, cb: (msg: T) => void, msgConstructor: IPbMessage<T>, once: boolean = false) {
        const opcode = msgConstructor.N.OpCode;
        Log.Assert(
            this.mMessageDispatcher[opcode] == undefined,
            `%c==== ${msgConstructor.name} 已经存在消息处理了`,
            "color:darkblue"
        );

        this.mMessageDispatcher[opcode] = new SDispatcherInfo(caller, cb, msgConstructor.decode, once);
    }

    /**
     * 移除掉指定的消息监听
     * @param opcode 指定要移除的消息监听
     */
    public offMsg<T>(msgConstructor: IPbMessage<T>): void {
        const opcode = msgConstructor.N.OpCode;
        delete this.mMessageDispatcher[opcode];
    }

    public offAllMsg(): void {
        this.mMessageDispatcher = {};
    }

    /**
     * 移除掉指定对象的消息监听
     * @param caller 指定要移除的消息监听者
     */
    public offMsgByCaller(caller: any): void {
        if (!(this instanceof Net)) {
            console.error("this 类型错误");
            return;
        }
        for (let key in this.mMessageDispatcher) {
            if (this.mMessageDispatcher[key].caller == caller) {
                delete this.mMessageDispatcher[key];
            }
        }
    }

    /**
     * 发送消息到服务器
     * @param msg 指定要发送的消息
     * @returns
     */
    public async sendMsg<T extends {
        constructor: {
            N: {
                OpCode: number;
            };
            encode(m: T, w?: protobuf.Writer): protobuf.Writer;
        };
    }>(msg: T): Promise<void> {
        const constructor = msg.constructor;
        const opcode = constructor.N.OpCode;

        if (DEV && opcode > 65535) {
            Log.Error("非法的消息 Id: ", opcode);
            return;
        }


        if (this.status != NetStatus.Connected) {
            console.log("网络未连接", this._netKey);
            return;
        }
        const pbWriter = protobuf.Writer.create();

        const encode = msg.constructor["encode"];

        let header = Net.cachedMsgHeader;

        // 计算当前发送消息包的编号. 值域为[0, 255], 放入一个 byte 中. 这里会跳过 ping 消息, 它的 Id 为 1001
        let msgSendNo = 0;
        if (opcode != 1001) {
            msgSendNo = this.msgSendNo;
            this.msgSendNo = (this.msgSendNo + 1) % MESSAGE_MAX_NO;
        }

        this.showLog && opcode != common.HeartBeatReqInfo.N.OpCode && Log.C2S(`ws ===> (${msgSendNo})${opcode}`, msg);


        // 写入opcode
        Net.writeUint16(header, 0, opcode);


        // 写入消息序号
        header[2] = msgSendNo;

        // 写入消息头: OpCode | MsgSendNo
        pbWriter.bytes(header);


        // 写入消息包数据对象
        const encodedData: Uint8Array = encode(msg, pbWriter).finish();
        //第0位用于协议版本号定义
        // encodedData[0] = 1;
        encodedData[0] = 2; // 增加了消息编号

        const crc32 = CRC32.buf(encodedData);
        const packedData = new Uint8Array(encodedData.length + 4);
        packedData.set(encodedData);
        Net.writeCRC32(packedData, encodedData.length, crc32);

        // 消息体内容: Version | OpCode | MsgSendNo | MsgBody | CRC32
        //             1Byte | 2Byte  | 1Byte     | ?? Byte | 4Byte
        await this._socket?.sendData(packedData);
    }

    private initNetStatus(): void {
        // if (
        //     PlatformUtils.isPlatform(Platform.wx) ||
        //     PlatformUtils.isPlatform(Platform.qq) ||
        //     PlatformUtils.isPlatform(Platform.tt) ||
        //     PlatformUtils.isPlatform(Platform.ks)
        // ) {
        //     NetWx.setNetworkChangeCallback();
        // } else if (PlatformUtils.isPlatform(Platform.alipay)) {
        //     NetAlipay.setNetworkChangeCallback();
        // }
    }

    // 重试
    private async retry() {
        // 已经正在连接中的重试放弃掉
        if (this.status == NetStatus.Connecting) {
            console.warn("已经正在重试连接中，不能再次执行重连", this._netKey);
            return;
        }
        // 如果已经被踢掉，则不重试
        if (this.status == NetStatus.Kicked) {
            console.warn("已经被断开或踢掉，不能再次执行重连", this._netKey);
            return;
        }
        // 如果 force 为 true，跳过重试次数判断
        this._retryTimes += 1;
        if (this._retryTimes > this.maxRetryTimes) {
            return;
        }
        try {
            await this.connect();
        } catch (err) {
            console.log("长链接重试失败", err, this._netKey);
        }
    }

    // 检查是否应该重新连接服务器
    private checkRetry(): void {
        if (!this.token || this.token.length == 0) {
            return;
        }
        const nextRetryTime = this.getRetryDuration(this.retryTimes); // 下次重试时间
        const retryRemainTimes = this.maxRetryTimes - this.retryTimes; // 剩余尝试次数

        if (retryRemainTimes) {
            console.log(
                `%c${nextRetryTime} 秒后重新尝试连接服务器，剩余重试次数（${retryRemainTimes}）,${this._netKey}`,
                "color:orange"
            );
            this._retryHandler && CocosUtils.delayCallbackOnce(this._retryHandler, nextRetryTime);
        } else {
            this.onNetStatusChange(NetStatus.TimeOut);
            console.log(`%c剩余重试次数（${retryRemainTimes}）不再尝试重连，请重启游戏以重新连接, ${this._netKey}`, "color:orange");
        }
    }

    // 重置重连次数
    private resetRetryTimes(): void {
        // 连接成功 N 秒后重置次数为 0
        console.log(
            `成功连接时间超过 ${this.resetRetryTimesAfterSuccess} 秒，重置网络重连次数当前为 ${this.retryTimes} 重置为 0, ${this._netKey}`
        );
        this._retryTimes = 0;
    }

    // 根据当前重试次数，计算重试的时间间隔（重试次数越多，重试时间越长）
    // 返回秒数
    private getRetryDuration(retryTimes: number): number {
        // 根据当前重试次数，确定一个重试时间（超出最大配置，按照最大配置计算）
        let maxRetryIndex = this.retryDuration.length - 1;
        if (retryTimes <= maxRetryIndex) {
            maxRetryIndex = retryTimes;
        }
        const nextRetryTime = this.retryDuration[maxRetryIndex]; // 下次重试时间
        return nextRetryTime;
    }

    /******************* 事件回调 *******************/
    // 开始连接
    private onConnect(): void {
        this.onNetStatusChange(NetStatus.Connecting);
    }

    // 连接完成
    private onConnected(id: number): void {
        if (id != this._connectId) {
            console.log(`链接id异常,创建id：${this._connectId},回调id:${id}`, this._netKey);
            return;
        }
        this._firstConnect = false;
        this.onNetStatusChange(NetStatus.Connected);
        // 重置「重连次数」
        this._resetTimesHandler && CocosUtils.delayCallbackOnce(this._resetTimesHandler, this.resetRetryTimesAfterSuccess);

        // 重置消息的发送与接收编号
        this.msgSendNo = 0;
        this.msgRecvNo = 0;
        this.msgOrderMap.clear();
        this.latestRecvValidMessageTime = 0;
    }

    // 断开连接
    private onConnectErr(event: Event, id: number): void {
        if (id && id != this._connectId) {
            console.log(`错误id异常,链接id：${this._connectId},回调id:${id}`, this._netKey);
            return;
        }
        if (!this.token) {
            return;
        }
        console.log("链接错误", event, this._netKey);
        this.onDisconnect({}, id);
    }

    // 断开连接
    private onDisconnect(event: NetCloseEvent, id: number): void {
        if (id && id != this._connectId) {
            console.log(`断开id异常,链接id：${this._connectId},回调id:${id}`, this._netKey);
            return;
        }
        if (!this.token) {
            return;
        }
        if (event.code == NetCloseCode.ServerClose) {
            this.onNetStatusChange(NetStatus.ServerClose);
        } else if (event.code == NetCloseCode.ServerKick) {
            this.onNetStatusChange(NetStatus.Kicked);
        } else if (event.code == NetCloseCode.ServerFull) {
            this.onNetStatusChange(NetStatus.ServerFull);
        } else if (event.code == NetCloseCode.ClientClose) {
            this.onNetStatusChange(NetStatus.ClientClose);
        } else if (event.code == NetCloseCode.MessageLost) {
            this.onNetStatusChange(NetStatus.MessageLost);
        } else {
            this.onNetStatusChange(NetStatus.Disconnect);
        }
        this.setNetStatus(NetStatus.UnConnected); // 设置网络状态为未连接
        if (
            event.code != NetCloseCode.ServerKick &&
            event.code != NetCloseCode.ServerClose &&
            event.code != NetCloseCode.ServerFull &&
            event.code != NetCloseCode.ClientClose
        ) {
            this.checkRetry(); // 检查重新连接
        } else {
            this._firstConnect = true;
        }
    }

    // 设置网络状态
    private setNetStatus(status: NetStatus): void {
        // console.logLogin(`>>> ${NetStatusTips[status]}`); // console.log 字样，这个就是 console.log 加了个颜色，好区分
        this.status = status;
        // 如果是停止重连状态，则设置重试次数为最大，防止重新连接
        if (
            this.status == NetStatus.Kicked ||
            this.status == NetStatus.ServerClose ||
            this.status == NetStatus.ClientClose ||
            this.status == NetStatus.TimeOut
        ) {
            console.log("主动停止重新连接功能", this._netKey);
            this._retryTimes = this.maxRetryTimes;
        }
    }

    private onReceiveMsg(uint8Buffer: Uint8Array): void {
        if (!uint8Buffer || uint8Buffer.length < Packet.MessageIndex) {
            console.error("协议消息错误，长度小于两个字节", this._netKey);
            //TODO 打点日志
            // ReportCommon.reportTACommon(ReportKey.world_net_err, { action: 0 });
            return;
        }
        const pbReader = protobuf.Reader.create(uint8Buffer);
        // 偿试读取 pong 的 OpCode, pong 消息并不带有消息编码.
        let opcode = Net.readUint16(uint8Buffer, 0);
        if (opcode == 1002) {
            // 注: 这里是有风险的, 有可能刚好带有消息编码的消息前两个字节等于这个值, 即 3<<8 | 234 = 1002, 但目前的消息定义小于 59904
            try {
                pbReader.skip(2); // 跳过已经读取的消息头(2个)
            } catch (e) {
                console.error("协议解析失败", e, this._netKey);
                return;
            }

            this.handleMessage(-1, new CachedMessage(opcode, pbReader));

        } else {
            // 读取opcode(2字节)
            opcode = Net.readUint16(uint8Buffer, Packet.OpcodeIndex);

            // 读取消息编号
            const msgNo = uint8Buffer[0];

            try {
                pbReader.skip(Packet.MessageIndex); // 跳过已经读取的消息头(2个或3个字节)
            } catch (e) {
                console.error("协议解析失败", e, this._netKey);
                //TODO 打点日志
                // ReportCommon.reportTACommon(ReportKey.world_net_err, { action: 1 });
                return;
            }

            const now = Date.now();
            if (msgNo == this.msgRecvNo || this.msgOrderMap.size == 0) {
                this.latestRecvValidMessageTime = now;  // 新收到一个消息, 并且这个消息是期望的消息序号, 更新接收到有效消息的时间
            }

            // 压入这个消息到待处理队列中
            this.msgOrderMap.set(msgNo, new CachedMessage(opcode, pbReader));

            // 开始处理下一个序号的消息
            let msg: CachedMessage | undefined;
            while (msg = this.msgOrderMap.get(this.msgRecvNo)) {
                // 删除要处理的消息
                this.msgOrderMap.delete(this.msgRecvNo);
                this.handleMessage(this.msgRecvNo, msg);

                // 更新下一个处理的消息序号
                this.msgRecvNo = (this.msgRecvNo + 1) % MESSAGE_MAX_NO;
            }

            if (DEV && this.msgOrderMap.size > 1 && now - this.latestRecvValidMessageTime > 5000) {
                Log.Warn(`等待超过了5秒还没有收到消息包(${this.msgRecvNo}), 有可能丢失了. 因为是预览模式, 所以不会断开连接!!!`);
            }

            if (this.msgOrderMap.size > 1 && now - this.latestRecvValidMessageTime >= Net.MESSAGE_LOST_MAX_DURATION) {
                // 消息包丢失了
                Log.Error(`丢失了消息包(${this.msgRecvNo}), 断开连接!!!`);
                // 断开与服务器的连接
                this.close({ code: NetCloseCode.MessageLost, reason: "消息包丢失" });
                return;
            }
        }
    }

    /**
     * 处理给定的消息
     * @param msgNo 要处理的消息的序号
     * @param msg 要处理的消息信息
     */
    private handleMessage(msgNo: MESSAGE_NO, msg: CachedMessage): void {
        try {
            const opcode = msg.opCode;
            const pbReader = msg.pbReader;
            let messageHandler = this.mMessageDispatcher[opcode];
            if (messageHandler) {
                const data = messageHandler.decoder(pbReader);

                this.showLog && opcode != common.HeartBeatAckInfo.N.OpCode && Log.S2C(`ws <=== (${msgNo})${opcode}`, data);

                messageHandler.call(data);
                if (messageHandler.once) {
                    delete this.mMessageDispatcher[opcode];
                }
            } else {
                console.error(`来自服务器的消息没有处理(opcode = ${opcode})`, this._netKey);
                if (opcode == 0) {
                    console.log(pbReader);
                }
            }
        }
        catch (e) {
            Log.Error("消息处理失败", e, this._netKey);
        }
    }

    // 连接状态改变回调
    private onNetStatusChange(status: NetStatus): void {
        const changed = this.status != status;
        this.status = status; // 更新连接状态
        if (status == NetStatus.Connected) {
            this._heartBeat && this._heartBeat.init(this);
        } else {
            this._heartBeat && this._heartBeat.stopBeat();
        }
        if (changed) {
            this._statusChangeCB && this._statusChangeCB(status);
        }
    }

    // 获取当前连接状态
    public getNetStatus(): NetStatus {
        return this.status;
    }

    // 获取当前连接的状态是否为可用
    public isNetStatusEnable(): boolean {
        return this.status == NetStatus.Connected;
    }

    /**
     * 读取uint16(short)类型的数据
     * @param uint8Buffer 指定从中读取数据的buffer
     * @param startIndex 指定数据在Buffer中的偏移量
     */
    public static readUint16(uint8Buffer: Uint8Array, startIndex: number): number {
        return (uint8Buffer[startIndex] << 8) | uint8Buffer[startIndex + 1];
    }

    /**
     * 写入uint16(short)类型的数据
     * @param uint8Buffer 指定要写入数据的Buffer
     * @param startIndex 指定写入数据在Buffer中的偏移量
     * @param num 指定要写入数值
     */
    public static writeUint16(uint8Buffer: Uint8Array, startIndex: number, num: number): void {
        uint8Buffer[startIndex] = (num & 0xff00) >> 8;
        uint8Buffer[startIndex + 1] = num & 0xff;
    }

    /**
     * crc32整型值转成字节码
     * @param uint8Buffer 指定要写入数据的Buffer
     * @param startIndex 指定写入数据在Buffer中的偏移量
     * @param num 指定要写入crc32数值
     */
    public static writeCRC32(uint8Buffer: Uint8Array, startIndex: number, num: number): void {
        uint8Buffer[startIndex + 3] = (num & 0xff000000) >> 24;
        uint8Buffer[startIndex + 2] = (num & 0xff0000) >> 16;
        uint8Buffer[startIndex + 1] = (num & 0xff00) >> 8;
        uint8Buffer[startIndex] = num & 0xff;
    }
}
