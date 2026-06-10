import { sys } from "cc";

// SDK 支持的平台
export enum Platform {
    invalid = -1, // 无效值
    web, // 网页 h5
    android, // 原生安卓
    ios, // 原生 ios
    wx, // 微信小游戏
    tt, // 字节小游戏（支持不全）
    oppo, // oppo 小游戏
    vivo, // vivo 小游戏
    qq, // qq 小游戏
    ks, // 快手 小游戏
    hw, // 华为 小游戏
    alipay, // 支付宝 小游戏
    xhs, // 小红书 小游戏
}

export default class PlatformUtils {
    // 获取平台信息
    public static isPlatform(platform: Platform): boolean {
        const isKs = typeof window["KSGameGlobal"] != "undefined";
        const isQQ = typeof window["qq"] != "undefined";
        switch (platform) {
            case Platform.android:
                if (sys.isNative && sys.os == sys.OS.ANDROID) {
                    return true;
                }
                return false;
            case Platform.ios:
                if (sys.isNative && sys.platform == sys.Platform.IOS) {
                    return true;
                }
                return false;
            case Platform.tt:
                if (sys.platform == sys.Platform.BYTEDANCE_MINI_GAME) {
                    return true;
                }
                return false;
            case Platform.oppo:
                if (sys.platform == sys.Platform.OPPO_MINI_GAME) {
                    return true;
                }
                return false;
            case Platform.vivo:
                if (sys.platform == sys.Platform.VIVO_MINI_GAME) {
                    return true;
                }
                return false;
            case Platform.ks:
                if (isKs) {
                    return true;
                }
                return false;
            case Platform.qq:
                //qq平台的 sys.platform 与微信相同
                if (sys.platform == sys.Platform.WECHAT_GAME && isQQ && !isKs) {
                    return true;
                }
                return false;
            case Platform.wx:
                //qq平台的 sys.platform 与微信相同
                if (sys.platform == sys.Platform.WECHAT_GAME && !isQQ && !isKs) {
                    return true;
                }
                return false;
            case Platform.web:
                return sys.isBrowser;
            case Platform.hw:
                if (sys.platform == sys.Platform.HUAWEI_QUICK_GAME) {
                    return true;
                }
                return false;
            case Platform.alipay:
                if (sys.platform == sys.Platform.ALIPAY_MINI_GAME) {
                    return true;
                }
                return false;
        }
        return false;
    }

    // 当前的平台类型
    private static mCurrentPlatform: Platform = Platform.invalid;

    // 获取当前平台类型
    public static getPlatform(): Platform {
        if (PlatformUtils.mCurrentPlatform != Platform.invalid) return PlatformUtils.mCurrentPlatform;

        PlatformUtils.mCurrentPlatform = (function () {
            const platforms = Object.keys(Platform).filter((v) => !isNaN(Number(v)));
            for (const platformStr of platforms) {
                const platform = parseInt(platformStr);
                if (PlatformUtils.isPlatform(platform)) return platform;
            }

            console.error(`获取不到正确的平台类型, 将使用默认的值 Platform.web !!!`);
            return Platform.web;
        })();

        return PlatformUtils.mCurrentPlatform;
    }

    /** 是否需要显示隐私协议 */
    public static isPrivacyUser() {
        if (PlatformUtils.isPlatform(Platform.tt) ||
            PlatformUtils.isPlatform(Platform.oppo) ||
            PlatformUtils.isPlatform(Platform.vivo) ||
            PlatformUtils.isPlatform(Platform.qq) ||
            PlatformUtils.isPlatform(Platform.android) ||
            PlatformUtils.isPlatform(Platform.ios) ||
            PlatformUtils.isPlatform(Platform.hw) ||
            PlatformUtils.isPlatform(Platform.web)
        ) {
            return true;
        }
        return false;
    }

    public static isPrivacyUserSet() {
        return true;
    }

    public static compareVersion(v1: string, v2: string) {
        const v1s = v1.split('.');
        const v2s = v2.split('.');
        const len = Math.max(v1s.length, v2s.length);

        while (v1s.length < len) {
            v1s.push('0');
        }
        while (v2s.length < len) {
            v2s.push('0');
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1s[i]);
            const num2 = parseInt(v2s[i]);

            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }
        }

        return 0;
    }
}
