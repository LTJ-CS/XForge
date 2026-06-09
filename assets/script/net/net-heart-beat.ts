
import { Net } from "./net";
import { PREVIEW } from "cc/env";
import CocosUtils from "../utils/CocosUtils";
import Log from "../log/Logger";
import {common} from "db://assets/script/proto/proto_c2s.js";
import { NetCloseCode } from "../sdk/net/NetSocket";

const HeartInterval = 2;

// 心跳包
export default class NetHeartBeat {
    private heartBeating = false; // 心跳计时器进行中
    private connector: Net = null;
    private _timeOutHandler = null;
    private _sendNextHandler = null;

    private static _instance: NetHeartBeat = null;
    public static get instance(): NetHeartBeat {
        if (!this._instance) {
            this._instance = new NetHeartBeat();
        }

        return this._instance;
    }

    public init(connector: Net): void {
        this.stopBeat();
        this._timeOutHandler = this.sendTimeout.bind(this);
        this._sendNextHandler = this.nextSend.bind(this);
        this.connector = connector;
        this.connector.onMsg(this, this.recvAck, common.HeartBeatAckInfo);
        // this.autoSendHeartBeat();
        CocosUtils.delayCallbackOnce(this._sendNextHandler, HeartInterval);
    }

    // 自动发送心跳包
    public autoSendHeartBeat(): void {
        if (this.heartBeating) {
            return;
        }
        // 如果已经连接成功，则发送心跳包，否则直接取消，等待外边重连后重新调用
        if (!this.connector.isNetStatusEnable()) {
            return;
        }
        this.heartBeating = true;
        this.sendHeartBeat();
        // const maxDuration = this.max - this.min;
        // const nextTime = Math.random() * maxDuration + this.min; // min ~ max秒发送一次
        CocosUtils.delayCallbackOnce(this._sendNextHandler, HeartInterval);
    }

    public stopBeat(): void {
        this.connector && this.connector.offMsg(common.HeartBeatAckInfo);
        this.connector = null;
        this.heartBeating = false;
        this._sendNextHandler && CocosUtils.removeDelayCallback(this._sendNextHandler);
        this._sendNextHandler = null;
        this._timeOutHandler && CocosUtils.removeDelayCallback(this._timeOutHandler);
        this._timeOutHandler = null;
    }

    private nextSend(): void {
        this.heartBeating = false;
        CocosUtils.removeDelayCallback(this._sendNextHandler);
        this.autoSendHeartBeat();
    }

    // 发送心跳包
    private sendHeartBeat(): void {
        this.lastSendTime = Date.now();
        const data: common.HeartBeatReqInfo = new common.HeartBeatReqInfo();
        this.connector.sendMsg(data);
        CocosUtils.delayCallbackOnce(this._timeOutHandler, HeartInterval * 2);
    }

    public recvAck(data: common.HeartBeatAckInfo): void {
        CocosUtils.removeDelayCallback(this._timeOutHandler);
        CocosUtils.delayCallbackOnce(this._sendNextHandler, HeartInterval);
    }

    private sendTimeout(): void {
        Log.Info("---心跳超时---");
        if (PREVIEW) {
            console.warn("---调试版本忽略心跳超时，不做处理---");
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.connector?.close({ code: NetCloseCode.HeartBeatTimeOut, reason: "心跳超时" });
            this.stopBeat();
        }
    }
}
