import PlatformUtils, { Platform } from "../../../../script/PlatformUtils";
import type { ConnectParams } from "../NetDefine";
import { NetCloseCode, NetStatus } from "../NetDefine";

/**
 * 微信长链接处理
 * @author 蜜蜂
 * @description 用来处理微信的长链接底层通讯
 */
export default class NetWx {
    private wxSocket: WechatMinigame.SocketTask;
    public async connect(params: ConnectParams): Promise<boolean> {
        this.close();
        return new Promise<boolean>((resolve, reject) => {
            let plat = null;
            if (PlatformUtils.isPlatform(Platform.wx)) {
                plat = wx;
            } else if (PlatformUtils.isPlatform(Platform.qq)) {
                //@ts-ignore
                plat = qq;
            } else if (PlatformUtils.isPlatform(Platform.tt)) {
                //@ts-ignore
                plat = tt;
            } else if (PlatformUtils.isPlatform(Platform.ks)) {
                //@ts-ignore
                plat = ks;
            }
            this.wxSocket = plat.connectSocket({
                url: params.url,
                fail: (err) => {
                    console.warn("socket 创建连接失败", params.connectId, err);
                    reject();
                },
                success: (res: { socketTaskId?: number; errMsg?: string; } = {}) => {
                    console.log("socket 创建连接成功", params.connectId, res.socketTaskId, res.errMsg);
                },
                complete: () => {
                    console.log("socket 创建连接完成", params.connectId);
                },
            });
            this.wxSocket.onOpen(() => {
                console.log("socket 服务器连接已打开", params.connectId);
                params.onConnected && params.onConnected(params.connectId);
                resolve(true);
            });
            this.wxSocket.onError((err: any) => {
                console.warn("socket --- 无法连接服务器 ---", params.connectId, err);
                params.onConnectErr(err, params.connectId);
                resolve(false);
            });
            this.wxSocket.onClose((err) => {
                console.warn(" socket ---  socket 连接关闭 ---", params.connectId, err);
                params.onDisconnect(err, params.connectId);
            });
            this.wxSocket.onMessage((res: { data: string | ArrayBuffer; }) => {
                // console.info("wx socket 接收到消息", res.data);
                const array = new Uint8Array(<ArrayBuffer>res.data);
                params.onMessage(array);
            });
        });
    }
    // 强制关闭连接
    public close(obj?: { code: number; reason: string; }): void {
        if (!this.wxSocket) {
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
            this.wxSocket.close(obj); //no need trans
        } catch (err) {
            console.error("关闭长连接失败");
        }
    }
    // 发送消息
    public sendMsg(data: Uint8Array): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            // 微信环境发送数据
            this.wxSocket.send({
                // 这里使用了 slice()。这是因为 protobufjs 转换出来的 ArrayBuffer 的缓冲区长度是 8912 字节，如果不进行处理，则会发送至少 8192 个字节给服务端
                data: data.slice().buffer, // 这个必须加 slice 否则服务器接收到消息但是不能正确处理
                success: (res) => {
                    // res: { errMsg: string }
                    // console.log("发送数据返回值：", res);
                    resolve();
                },
                fail: (err) => {
                    console.error("%c发送数据失败", "color:red", err);
                    reject(err);
                },
            });
        });
    }

    /**
     * 设置网络状态变更回调
     * @param cb 回调
     * @returns
     */
    public setNetworkChangeCallback(cb: (status: NetStatus) => void): void {
        let plat = null;
        if (PlatformUtils.isPlatform(Platform.wx)) {
            plat = wx;
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            //@ts-ignore
            plat = qq;
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            //@ts-ignore
            plat = tt;
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            //@ts-ignore
            plat = ks;
            return;
        }
        plat.onNetworkStatusChange((res) => {
            const status = res.isConnected ? NetStatus.Connected : NetStatus.Disconnect;
            cb(status);
        });
    }

    private clear(): void {
        if (this.wxSocket) {
            this.wxSocket.onOpen(() => { });
            this.wxSocket.onError(() => { });
            this.wxSocket.onClose(() => { });
            this.wxSocket.onMessage(() => { });
        }
    }
}
