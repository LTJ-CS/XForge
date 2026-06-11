import NetWeb from "./platform/NetWeb";
import NetWx from "./platform/NetWx";
import PlatformUtils, { Platform } from "../../../script-load/PlatformUtils";
import type { ConnectParams, NetConnector, NetStatus } from "./NetDefine";
export type { ConnectParams, NetCloseEvent, NetConnector } from "./NetDefine";
export { NetCloseCode, NetStatus } from "./NetDefine";

/**
 * websocket 网络基础类
 * 封装各个平台的 socket 连接方法
 */
export default class NetSocket {
    private socket: NetConnector = null;

    /**
     * 构造函数，根据当前平台，创建对应的 socket
     */
    constructor() {
        if (
            PlatformUtils.isPlatform(Platform.wx) ||
            PlatformUtils.isPlatform(Platform.qq) ||
            PlatformUtils.isPlatform(Platform.tt) ||
            PlatformUtils.isPlatform(Platform.ks)
        ) {
            this.socket = new NetWx();
        } else {
            this.socket = new NetWeb();
        }
    }

    /**
     * 开始连接服务器
     * @param params
     * @returns 返回连接是否成功
     */
    public async connect(params: ConnectParams): Promise<boolean> {
        return this.socket.connect(params);
    }

    /**
     * 强行关闭连接
     * @param obj
     * @returns
     */
    public close(obj?: { code: number; reason: string; }): void {
        return this.socket.close(obj);
    }

    /**
     * 发送消息到服务端
     * @param data Uint8Array 数据
     */
    public async sendData(data: Uint8Array): Promise<void> {
        return this.socket.sendMsg(data);
    }

    /**
     * 设置网络状态变化回调
     * @param cb 回调方法
     */
    public setNetworkStatusChangeCallback(cb: (status: NetStatus) => void): void {
        this.socket.setNetworkChangeCallback(cb);
    }
}
