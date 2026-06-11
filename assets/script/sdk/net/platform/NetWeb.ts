import { sys } from "cc";
import type { ConnectParams, NetStatus } from "../NetDefine";
import { NetCloseCode } from "../NetDefine";

// 原生应用在 cocos creator 2.4（包含）以前打包，需要在原生（安卓）平台使用 pem 证书，这里提供一个固定的加载地址，防止打破通用组件的依赖关系
const nativePemFilePath = "resources/ssl/cacert.pem";

/**
 * 浏览器长链接处理
 * @author 蜜蜂
 * @description 用来处理微信的长链接底层通讯
 */
export default class NetWeb {
    private socket: WebSocket = null;
    public async connect(params: ConnectParams): Promise<boolean> {
        this.close();
        return new Promise<boolean>((resolve) => {
            try {
                const connectUrl = params.url;
                if (sys.isNative) {
                    // 计算证书地址
                    // const wssCacert = url.raw(nativePemFilePath);
                    //@ts-ignore 禁止检查下一行的报错
                    this.socket = new WebSocket(connectUrl, null, wssCacert); // url + 证书
                } else {
                    this.socket = new WebSocket(connectUrl); // url
                }
                this.socket.binaryType = "arraybuffer"; // 强制使用 arraybuffer 类型, fix: 免得依赖 blob 的异步函数, 减少异步可能带来的消息处理顺序颠倒问题
                this.socket.onopen = () => {
                    params.onConnected && params.onConnected(params.connectId);
                    resolve(true);
                };
                this.socket.onerror = (err: any) => {
                    console.warn("--- 无法连接服务器 ---", params.connectId, err);
                    params.onConnectErr(err, params.connectId);
                };
                this.socket.onclose = (err) => {
                    console.warn(" socket ---  socket 连接关闭 ---", params.connectId, err);
                    params.onDisconnect(err, params.connectId);
                };
                this.socket.onmessage = (event: MessageEvent) => {
                    const msgData: ArrayBuffer = event.data;
                    const uint8Buffer = new Uint8Array(msgData);
                    params.onMessage(uint8Buffer);
                };
            } catch (err) {
                console.log("socket connect err", err);
            }
        });
    }
    // 强制关闭连接
    public close(obj?: { code: number; reason: string; }): void {
        if (!this.socket) {
            return;
        }
        obj = obj || { code: NetCloseCode.ClientClose, reason: "客户端强制关闭" };
        if (
            obj.code == NetCloseCode.ServerKick ||
            obj.code == NetCloseCode.ServerClose ||
            obj.code == NetCloseCode.ServerFull ||
            obj.code == NetCloseCode.ClientClose
        ) {
            this.clear();
        }
        try {
            if (this.socket.readyState == WebSocket.OPEN) {
                this.socket.close(obj.code, obj.reason); // 手动关闭
            }
        } catch (err) {
            console.error("关闭长连接失败", err);
        }
    }

    // 发送消息
    public sendMsg(data: Uint8Array): Promise<void> {
        this.socket.send(data);
        return;
    }

    /**
     * 设置网络状态变更回调
     * @param cb 回调
     * @returns
     */
    public setNetworkChangeCallback(cb: (status: NetStatus) => void): void { }

    private clear(): void {
        if (this.socket) {
            this.socket.onopen = () => { };
            this.socket.onerror = () => { };
            this.socket.onclose = () => { };
            this.socket.onmessage = () => { };
        }
    }
}
