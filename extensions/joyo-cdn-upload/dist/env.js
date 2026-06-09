"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取平台和配置环境
 * @param env
 * @param projectPath
 * @param remoteUrl
 * @param buildNumber
 * @param buildVersion
 * @returns
 */
const getPlatformEnv = (env, remoteUrl
// projectPath: string,
// buildNumber: number,
// buildVersion: number
) => {
    // const iconPath = path.resolve(projectPath, `../signature/${env}/icon.png`); // icon 图标地址
    // const privatePem = path.resolve(projectPath, `../signature/${env}/private.pem`); // 私有证书
    // const certificatePem = path.resolve(projectPath, `../signature/${env}/certificate.pem`); // 证书
    // const versionName = `${buildVersion}.${buildNumber}`;
    const platformEnv = {
        wx: {
            // 微信正式服
            fileName: "wechatgame",
            settings: {
                appid: "wxbdf9b40fc0bfb7c8",
                subContext: "openDataContext",
                separate_engine: true,
                REMOTE_SERVER_ROOT: remoteUrl,
            },
        },
        wxtest: {
            // 微信测试服
            fileName: "wechatgame",
            settings: {
                appid: "wxd2962cf5ca61a99b",
                subContext: "",
                separate_engine: true,
                REMOTE_SERVER_ROOT: remoteUrl,
            },
        },
        qq: {
            // QQ正式服
            fileName: "wechatgame",
            settings: {
                appid: "1112241340",
                subContext: "",
                separate_engine: false,
                REMOTE_SERVER_ROOT: remoteUrl,
            },
        },
        ks: {
            // ks正式服
            fileName: "wechatgame",
            settings: {
                appid: "ks652458996043496430",
                subContext: "",
                separate_engine: false,
                REMOTE_SERVER_ROOT: remoteUrl,
            },
        },
        tt: {
            // 字节小游戏
            fileName: "bytedance",
            settings: {
                REMOTE_SERVER_ROOT: remoteUrl,
            },
        },
        // oppo: {
        //     // Oppo 小游戏
        //     fileName: `${env}-runtime`,
        //     settings: {
        //         icon: iconPath,
        //         versionName,
        //         versionCode: `${buildNumber}`,
        //         tinyPackageServer: remoteUrl,
        //         privatePath: privatePem,
        //         certificatePath: certificatePem,
        //     },
        // },
        // huawei: {
        //     // huawei 小游戏
        //     fileName: `${env}-runtime`,
        //     settings: {
        //         icon: iconPath,
        //         versionName,
        //         versionCode: `${buildNumber}`,
        //         tinyPackageServer: remoteUrl,
        //         privatePath: privatePem,
        //         certificatePath: certificatePem,
        //     },
        // },
        // vivo: {
        //     // vivo 小游戏
        //     fileName: `${env}-runtime`,
        //     settings: {
        //         icon: iconPath,
        //         versionName,
        //         versionCode: `${buildNumber}`,
        //         tinyPackageServer: remoteUrl,
        //         privatePath: privatePem,
        //         certificatePath: certificatePem,
        //     },
        // },
    };
    return platformEnv[env];
};
exports.default = getPlatformEnv;
