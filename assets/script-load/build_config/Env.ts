// 打包使用的环境值
import BuildInfo from "../BuildInfo";
import PlatformUtils, { Platform } from "../PlatformUtils";
import { ENV, EnvMap, LoginPlatform } from "./EnvConf";

// 本地构建时使用的服务区环境值
// 可以手动修改，来进行本地打包和运行测试
// export const localEnv: ENV = ENV.dev2;

// let env: ENV = ENV[BuildInfo.getEnv()] || localEnv;

let env: ENV = ENV[BuildInfo.getEnv()] || ENV.dev;
// env = ENV.devK3;

console.log(`env ${env}`);

// 服务器IP
const serverIPMap = {
    Default: "192.168.31.166",
    BaiLu: "192.168.31.78",
    BaZhuaYu: "192.168.31.62",
    SongShu: "192.168.31.96",//松鼠
};

const ENV_LOCAL_IP = serverIPMap.BaiLu;

export const setGameEnv = (_env: ENV = ENV.onlineWx) => {
    env = _env || ENV[BuildInfo.getEnv()];
};

// 获取当前环境配置
export const getEnvConfig = (): EnvMap => {
    return envMap[env];
};

export const getPlatform = (): LoginPlatform => {
    let curPlatform = PlatformUtils.getPlatform();
    switch (curPlatform) {
        case Platform.tt:
            return LoginPlatform.TT;
        case Platform.wx:
            return LoginPlatform.Wx;
        case Platform.qq:
            return LoginPlatform.QQ;
        case Platform.web:
        default:
            return LoginPlatform.Test;
    }
}

// 判断当前是否是测试环境
export const checkIsTest = (): boolean => {
    return [ENV.local, ENV.dev, ENV.wxTest, ENV.ttTest, ENV.devK3].indexOf(env) > -1;
};

// 判断当前是否是测试环境
export const checkIsEnv = (e: ENV): boolean => {
    return e == env;
};

// 环境配置
export const envMap: Record<ENV, EnvMap> = {
    // 本地服（独立）
    local: {
        env: ENV.local,
        reportAppId: "",
        reportServerUrl: "",
        platform: LoginPlatform.Test,
        gameId: "685bfedd9fb0e5f8b7cc241f",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: `http://${ENV_LOCAL_IP}:8080`,
        aiHost: "https://beta-block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://beta-game-account.easygame2021.com",
        rankHost: `http://${ENV_LOCAL_IP}:8080`,
        cfgHost: "https://test-static.easygame2021.com/block-puzzle/",
        socketHost: `ws://${ENV_LOCAL_IP}:7201/ws/player`,
    },

    // 开发服(内网测试)
    dev: {
        env: ENV.dev,
        reportAppId: "d7b1d77f9e39493e9a0e89c94314f199",
        reportServerUrl: "https://shu.easygame2021.com",
        platform: LoginPlatform.Test,
        gameId: "685bfedd9fb0e5f8b7cc241f",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: "https://beta-block-puzzle.easygame2021.com",
        aiHost: "https://beta-block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://beta-game-account.easygame2021.com",
        cfgHost: "https://test-static.easygame2021.com/block-puzzle/",
    },

    // 开发服(内网测试)
    devK3: {
        env: ENV.devK3,
        reportAppId: "d7b1d77f9e39493e9a0e89c94314f199",
        reportServerUrl: "",
        platform: LoginPlatform.Test,
        gameId: "685bfedd9fb0e5f8b7cc241f",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: "http://block-puzzle.local.com",
        aiHost: "https://beta-block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://beta-game-account.easygame2021.com",
        cfgHost: "https://test-static.easygame2021.com/block-puzzle/",
    },

    // 测试服
    wxTest: {
        env: ENV.wxTest,
        reportAppId: "d7b1d77f9e39493e9a0e89c94314f199",
        reportServerUrl: "https://shu.easygame2021.com",
        platform: LoginPlatform.Wx,
        gameId: "685bfedd9fb0e5f8b7cc241f",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: "https://beta-block-puzzle.easygame2021.com",//"https://game-account.easygame2021.com",
        aiHost: "https://beta-block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://beta-game-account.easygame2021.com", //"https://game-account.easygame2021.com",
        rankHost: "https://beta-block-puzzle.easygame2021.com",
        cfgHost: "https://test-static.easygame2021.com/block-puzzle/", // "https://incubator-static.easygame2021.com/block-puzzle/",
        socketHost: "wss://beta-block-puzzle.easygame2021.com/gateway/ws/player",
        user_action_set_id: 1211848916,// 数据源ID，数字，必填
    },

    // 测试服
    ttTest: {
        env: ENV.ttTest,
        reportAppId: "d7b1d77f9e39493e9a0e89c94314f199",
        reportServerUrl: "https://shu.easygame2021.com",
        platform: LoginPlatform.TT,
        gameId: "685bfedd9fb0e5f8b7cc241f",
        isSandbox: true,
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: "https://beta-block-puzzle.easygame2021.com",//"https://game-account.easygame2021.com",
        aiHost: "https://beta-block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://beta-game-account.easygame2021.com", //"https://game-account.easygame2021.com",
        rankHost: "https://beta-block-puzzle.easygame2021.com",
        cfgHost: "https://test-static.easygame2021.com/block-puzzle/", // "https://incubator-static.easygame2021.com/block-puzzle/",
        socketHost: "wss://beta-block-puzzle.easygame2021.com/gateway/ws/player",
        user_action_set_id: 1211848916,// 数据源ID，数字，必填
    },

    // 线上服（微信）
    onlineWx: {
        env: ENV.onlineWx,
        platform: LoginPlatform.Wx,
        reportAppId: "d7b1d77f9e39493e9a0e89c94314f199",
        reportServerUrl: "https://shu.easygame2021.com",
        gameId: "68940e7fc9a7d5abbc4e8afc",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: "https://block-puzzle.easygame2021.com",
        aiHost: "https://block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://game-account.easygame2021.com",
        rankHost: "https://block-puzzle.easygame2021.com",
        cfgHost: "https://incubator-static.easygame2021.com/block-puzzle/",
        socketHost: "wss://block-puzzle.easygame2021.com/gateway/ws/player",
        user_action_set_id: 1211848916,// 数据源ID，数字，必填
    },

    // 线上服（抖音）
    onlineTt: {
        env: ENV.onlineTt,
        platform: LoginPlatform.TT,
        reportAppId: "d7b1d77f9e39493e9a0e89c94314f199",
        reportServerUrl: "https://shu.easygame2021.com",
        gameId: "68940e7fc9a7d5abbc4e8afc",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: "https://block-puzzle.easygame2021.com",
        aiHost: "https://block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://game-account.easygame2021.com",
        rankHost: "https://block-puzzle.easygame2021.com",
        cfgHost: "https://incubator-static.easygame2021.com/block-puzzle/",
        socketHost: "wss://block-puzzle.easygame2021.com/gateway/ws/player",
        user_action_set_id: 1211848916,// 数据源ID，数字，必填
    },

    // 本地服（独立）
    webgl: {
        env: ENV.webgl,
        reportAppId: "",
        reportServerUrl: "",
        platform: LoginPlatform.Test,
        gameId: "68c0e02d2ebe86236325f73f",
        privacyPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy.html",
        UserPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_user_agreement.html",
        ChildPolicy: "https://universal.easygame2021.com/privacy/jianyou/joyo_privacy_policy_child_guide.html",
        host: `https://noad-block-puzzle.easygame2021.com:8080`,
        aiHost: "https://beta-block-puzzle.easygame2021.com", // AI推荐服务地址
        loginHost: "https://beta-game-account.easygame2021.com",
        rankHost: `https://noad-block-puzzle.easygame2021.com:8080`,
        cfgHost: "https://test-static.easygame2021.com/block-puzzle/",
        socketHost: `ws://${ENV_LOCAL_IP}:7201/ws/player`,
    },
};


