import { common } from "protobufjs";
import BuildInfo from "../../script/BuildInfo";
import Log from "../log/Logger";
import { NetCloseCode, NetStatus } from "../sdk/net/NetSocket";
import { ENetKey, Net } from "./net";

/**
 * 需要长链接的网络管理基类，包含网络状态控制
 */
export class NetManagerBase {
    protected _net: Net = null;

    /** 当前使用的地址 */
    protected _url: string = undefined;
    /** 长链接标识 */
    protected _netKey: ENetKey = ENetKey.none;
    /** 身份验证标识 */
    protected _token: string = undefined;
    /** 连接会话标识 */
    protected _sessionId: string = undefined;

    protected _errTimes: number = 0;

    /**网络状态回调列表，由于现在事件的回调无法继承与覆盖，也调不到父类方法，所以增加额外注册回调*/
    protected _netStatusChangeCbs: ((status: NetStatus) => void)[] = [];
    /**网络消息注册回调列表，用于一个网络连接关联多个数据接收管理器*/
    protected _netMsgRegisterFuncs: (() => void)[] = [];

    public get net(): Net {
        return this._net;
    }

    // 初始化网络连接
    public initNet(userToken: string) {
        this.closeNet();
        this._net = new Net();
        this._token = userToken;
        this._net.init(this._url, this._token, this._netKey);
        this._net.setStatusChangeCB(this.onNetStatusChange);
        this._net.connect(BuildInfo.buildNumber());
    }

    public updateSession(sessionId: string, keepState: boolean = false, msgNo: number = 0) {
        this._sessionId = sessionId;
        this._net.updateSession(this._sessionId, keepState, msgNo);
    }

    /** 关闭长链接 */
    public closeNet(): void {
        if (!this._net) {
            return;
        }
        this._net.setStatusChangeCB(null);
        this._net.offAllMsg();
        this._net.close();
        this._net = null;
    }

    public sendMsg<T = typeof common>(msg: T): void {
        if (!this._net) {
            Log.Error("网络未初始化");
            return;
        }
        this._net.sendMsg(msg);
    }

    /** 网络状态变更监听 */
    protected onNetStatusChange = (status: NetStatus): void => {
        switch (status) {
            case NetStatus.Connecting:
            case NetStatus.Disconnect: {
                // if (status == NetStatus.Disconnect) {
                //     this._errTimes++;
                //     if (this._errTimes > 2) {
                //         this._net.resetConnect(this._url, this._token);
                //     }
                // }
                this.showConnecting();
                break;
            }
            case NetStatus.Connected: {
                this.showConnected();
                break;
            }
            case NetStatus.ServerClose:
                this.showKick(NetCloseCode.ServerClose);
                break;
            case NetStatus.TimeOut: {
                this.showKick(NetCloseCode.TimeOut);
                break;
            }
            case NetStatus.Kicked:
                this.showKick(NetCloseCode.ServerKick);
                break;
            case NetStatus.ServerFull:
                this.showServerFull();
                break;
        }
        this._netStatusChangeCbs.forEach((cb) => cb(status));
    };

    // 正在连接 转菊花逻辑
    protected showConnecting(): void { }

    // 连接完成 停转菊花逻辑
    protected showConnected(): void { }

    // 显示服务器已满
    protected showServerFull(): void { }

    // 网络连接提示
    protected showKick(code: number): void {
        this._net.setStatusChangeCB(null);
    }
}
