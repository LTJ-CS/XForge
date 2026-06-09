// 服务器环境类型
export enum ENV {
    local = "local",
    /** 内网测试 */
    dev = "dev",
    devK3 = "devK3",
    wxTest = "wxTest",
    ttTest = "ttTest",
    onlineWx = "onlineWx",
    onlineTt = "onlineTt",
    webgl = "webgl",
}

export type EnvMap = {
    env: ENV;
    //登录地址
    loginHost: string;
    //业务逻辑地址
    host: string;
    //AI host
    aiHost?: string; // AI推荐服务地址
    gameId: string;
    hostWeb?: string;
    socketHost?: string;
    rankHost?: string;
    cfgHost?: string;
    videoID?: string;
    platform?: number;    //渠道（用户登录来源)
    pem?: string;
    reportPrefix?: string; // 渠道前缀
    reportAppId?: string; // 项目 APP ID
    reportServerUrl?: string; // 上报地址
    privacyPolicy?: string;
    UserPolicy?: string;
    ChildPolicy?: string;
    user_action_set_id?: number,// 数据源ID，数字，必填
    secret_key?: string,// 加密key，必填
    wxAppid?: string,//微信小游戏APPID，wx开头，必填
    isSandbox?: boolean,//是否沙盒模式
};

export type HttpBaseParam = {
    t: string; // token
    b: number;// client build number
};

export enum StorageKey {
    GAME_USER_LOCAL_DATA = "gameUserLocalData", // 游戏本地保存
    Beta_Open_Id = "BetaOpenId", // 记录 BetaOpenId
    LastShareCardTs = "LastShareCardTs", // 记录 BetaOpenId
}

export enum ErrorCode {
    OK = 200, // 正确
    LoginFail = 10001, // 登录失败
    VerifyTokenFail = 10002, // 验证token失败
    ParamFail = 10003, // 参数错误
}

export enum LoginPlatform {
    Test = 999,
    Wx = 1,   // 微信
    QQ = 2,   // QQ
    TT = 3,   // 抖音字节
    VIVO = 4,   // VIVO
    OPPO = 5,   // OPPO
    KS = 6,   // 快手
    Joyo = 7,   // 简游
    HW = 8,   // 华为
    Zfb = 9,   // 支付宝
    Xhs = 10  // 小红书
}
