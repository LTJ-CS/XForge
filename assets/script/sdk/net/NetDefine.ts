export type ConnectParams = {
    url: string;
    connectId: number;
    onConnected?: (id: number) => void;
    onMessage: (data: Uint8Array) => void;
    onDisconnect: (event: NetCloseEvent, id: number) => void;
    onConnectErr: (event: Event, id: number) => void;
};

export type NetCloseEvent = {
    code?: number;
    reason?: string;
};

/**
 * websocket 连接适配器接口
 */
export type NetConnector = {
    connect: (params: ConnectParams) => Promise<boolean>;
    close: (obj?: { code: number; reason: string; }) => void;
    sendMsg: (data: Uint8Array) => Promise<void>;
    setNetworkChangeCallback: (cb: (status: NetStatus) => void) => void;
};

export enum NetCloseCode {
    /** 连接超时 */
    TimeOut = 1,
    /**服务器已关闭*/
    ServerClose = 4000,
    /** 服务器踢下线 */
    ServerKick = 4001,
    /** 服务器忙 */
    ServerFull = 4002,
    /** 客户端主动关闭 */
    ClientClose = 3002,
    /** 心跳超时 */
    HeartBeatTimeOut = 3001,
    /** 丢包了 */
    MessageLost = 3003,
}

export enum NetStatus {
    UnConnected, // 未连接
    Connecting, // 连接中
    Connected, // 已经连接
    Disconnect, // 已经停止运行（比如服务器重启，可以稍后重新尝试连接）
    Kicked, // 被踢下线，不应该重试（比如被自己在另一个地方登录）
    TimeOut, // 重连超时
    ClientClose, // 客户端主动断开
    ServerClose, // 服务端主动断开
    ServerFull, // 服务端队列已满
    MessageLost,// 消息包丢失
}
