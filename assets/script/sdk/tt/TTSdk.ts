
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// 字节跳动小游戏

import { screen } from "cc";
import { warn } from "cc";
import { sys } from "cc";
import { SubContextShowType } from "../Sdk";
import { app } from "db://assets/app/app";
import PlatformUtils, { Platform } from "../../../script-load/PlatformUtils";

const tt = window["tt"];

export default class TtSdk {
    //@ts-ignore
    private static rewardAd: tt.RewardedVideoAd = null; // 激励视频广告实例
    private static onRewardVideoAdSuccess: () => void = null; // 激励视频成功回调
    private static onRewardVideoAdFail: () => void = null; // 激励视频失败回调
    //@ts-ignore
    private static bannerAd: tt.BannerAd = null; // banner 广告
    private static onRewardBannerAdSuccess: () => void = null; // 激励视频成功回调
    private static onRewardBannerAdFail: () => void = null; // 激励视频失败回调
    //@ts-ignore
    private static interstitialAd: tt.InterstitialAd = null; // 插屏广告
    private static onRewardInterstitialAdSuccess: () => void = null; // 激励视频成功回调
    private static onRewardInterstitialAdFail: () => void = null; // 激励视频失败回调

    private static _recordStarted: boolean = false; // 录屏状态

    private static _isTT = PlatformUtils.isPlatform(Platform.tt);

    public static ttAppName: string = "";

    public static onAudioInterruptionBeginFunction: (() => void)[] = []; // onAudioInterruptionBegin时执行方法
    public static onAudioInterruptionEndFunc: (() => void)[] = []; // onAudioInterruptionEnd时执行方法

    public static get inRecordScreen(): boolean {
        return this._recordStarted;
    }

    // 初始化方法
    public static init(): void {
        // 初始化操作
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        const sysInfo = tt.getSystemInfoSync();
        this.ttAppName = sysInfo.appName;
        tt.showShareMenu({
            success() {
                console.log("[tt] 已成功显示转发按钮");
            },
            fail(err) {
                console.log("[tt] showShareMenu 调用失败", err.errMsg);
            },
            complete() {
                console.log("[tt] showShareMenu 调用完成");
            },
        });

        tt.onAudioInterruptionBegin(()=>{
            console.log("-- 音频中断开始 --")
            if (this.onAudioInterruptionBeginFunction) {
                this.onAudioInterruptionBeginFunction.forEach((i) => i());
            }
        })
        tt.onAudioInterruptionEnd(()=>{
            console.log("-- 音频中断结束 --")
            if (this.onAudioInterruptionEndFunc) {
                this.onAudioInterruptionEndFunc.forEach((i) => i());
            }
        });
    }

    public static onShow(callBack) {
        // callback: (res: {
        //     /** 场景值*/
        //     scene: string;
        //     /** 查询参数*/
        //     query: any;
        //     /** shareTicket*/
        //     shareTicket: string;
        //     /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段*/
        //     referrerInfo: ReferrerInfo;
        // }) => void

        if (!this.checkIsDouYinApp()) {
            return;
        }


        tt.onShow((res) => {
            console.log("启动参数：", res.query);
            console.log("来源信息：", res.refererInfo);
            console.log("场景值：", res.scene);
            console.log("启动场景字段：", res.launch_from, ", ", res.location);
        });
    }

    public static checkUpdateManager(): void {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        // 检查更新
        const updateManager = tt.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.info("[app update]", res.hasUpdate);
        });

        updateManager.onUpdateReady(function () {
            tt.showModal({
                title: "更新提示", //TODO no need trans
                content: "新版本已经准备好，是否重启应用？", //TODO no need trans
                success(res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    }
                },
            });
        });
    }

    // 短震动
    public static vibrateShort(): void {
        tt.vibrateShort({});
    }

    // 长震动
    public static vibrateLong(): void {
        tt.vibrateLong({});
    }

    // 检查是否登录
    public static checkSession(): void {
        tt.checkSession({
            success() {
                console.log(`[tt] session 未过期`);
            },
            fail() {
                console.log(`[tt] session 已过期，需要重新登录`);
                this.login();
            },
        });
    }

    // 获取用户当前的授权状态
    public static getSetting(): void {
        tt.checkSession({
            //@ts-ignore
            success: (res: { errMsg: string; session: tt.AuthSetting; }) => {
                console.log("[tt] -------------getSetting 获取用户当前的授权状态成功-----------", res);
                if (res.errMsg == "checkSession:ok") {
                    // 已完成授权
                } else {
                    // 未完成授权
                }
            },
            // complete: (res:any) => {
            //   //
            //   console.log("[tt] -------------check complete-----------", res);
            // },
            fail: (res: { errMsg: string; }) => {
                console.log("[tt] -------------getSetting 获取用户当前的授权状态失败-----------", res);
            },
        });
    }

    // 打开设置页面
    public static openSetting(): void {
        tt.openSetting({
            //@ts-ignore
            success: (res: { errMsg: string; authSetting: tt.AuthSetting; }) => {
                console.log("[tt] -------------openSetting success-----------", res);
            },
            complete: (res: any) => {
                console.log("[tt] -------------openSetting complete-----------", res);
            },
            fail: (res: { errMsg: string; }) => {
                console.log("[tt] -------------openSetting fail-----------", res);
            },
        });
    }

    // 提前向用户发起授权请求
    public static authorize(): void {
        tt.authorize({
            scope: "scope.userInfo",
            success: (res?: any) => {
                console.log("[tt] authorize success", res);
            },
            complete: (res?: any) => {
                console.log("[tt] authorize complete", res);
            },
            fail: (res?: any) => {
                console.log("[tt] authorize fail", res);
            },
        });
    }

    // 录屏开始
    public static recorderStart(callback): void {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }

        this._recordStarted = true;

        //
        tt.getGameRecorderManager().onStart((res) => {
            // console.log("录屏开始 = ", res);
            callback && callback(res);
        });

        //
        tt.getGameRecorderManager().start({ duration: 300 });
    }

    // 录屏结束
    public static recorderStop(callback): void {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        this._recordStarted = false;
        tt.getGameRecorderManager().onStop((res) => {
            // console.log("录屏结束 = ", res);
            callback && callback(res);
        });
        tt.getGameRecorderManager().stop();
    }

    // 录屏结束
    public static recorderPause(): void {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        tt.getGameRecorderManager().pause();
    }

    // 录屏结束
    public static recorderResume(): void {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        tt.getGameRecorderManager().resume();
    }


    public static navigateToVideoView(videoPath: string, callback) {
        tt.shareAppMessage({
            title: "123123",
            channel: "video",
            extra: {
                videoTopics: [],
                hashtag_list: [],
                videoPath: videoPath,
                withVideoId: true,
            },
            success() {
                console.log("shareAppMessage 分享成功");
                // cb(true);
            },
            fail(e) {
                console.log("shareAppMessage 分享失败 = ", e);
                // cb(false);
            },
        });

    }

    /**
     *
     * @param second 截取最后多少秒的视频
     * @param cb 回调，返回视频路径
     */
    public static recorderClipLast(path: string, second: number, cb: (clipUrl: string) => void): void {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        tt.getGameRecorderManager().clipVideo({
            path: path,
            timeRange: [second, 0],
            success(res) {
                let clipUrl = res.videoPath;
                console.log("[tt] 录屏裁剪成功", clipUrl);
                cb?.(clipUrl);
            },
            fail(res) {
                cb?.(null);
            },
        });
    }

    public static shareTemplate(cb) {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        tt.shareAppMessage({
            channel: "invite",
            templateId: "gf33jlfc0h1k415a7o", // 替换成通过审核的分享ID
            title: "",
            desc: "",
            query: "",
            success() {
                console.log("shareAppMessage 分享成功");
                cb(true);
            },
            fail(e) {
                console.log("shareAppMessage 分享失败");
                cb(false);
            },
        });
    }

    // 录屏分享
    public static shareAppMessage(params: { url?: string; success?: () => void; fail?: () => void; }): void {
        const { success, fail } = params;
        let { url } = params;
        console.log("[tt] [sdk][tt] share app message", url);
        // 视频分享
        tt.shareAppMessage({
            channel: "video",
            query: "",
            // templateId: "hf65b3ga3e7a38r9y7", // 替换成通过审核的分享ID
            templateId: "",
            title: "干了个饭", // no need trans
            desc: "寻找第一个干到100000分的人！", // no need trans
            extra: {
                videoPath: url, // "ttfile://temp/test.mp4", // 可用录屏得到的本地文件路径
                videoTopics: ["干了个饭"], // no need trans
            },
            success() {
                success && success();
                console.log("[tt] 分享视频成功回调");
            },
            fail(err) {
                fail && fail();
                console.log("[tt] 分享视频失败回调", err);
                if (err && err.errNo == 21105) {
                    // TODO cc.game.emit(EMITKEY.SHOWMAINTIPS, "录屏小于3s，无法分享");
                }
            },
        });
    }

    // 观看激励视频（仅支持一个广告位）
    public static rewardVideoAd(params: { id: string; success: () => void; fail: () => void; }): void {
        // 注册回调
        this.onRewardVideoAdSuccess = params.success;
        this.onRewardVideoAdFail = params.fail;

        if (!this.rewardAd) {
            this.rewardAd = tt.createRewardedVideoAd({
                adUnitId: params.id,
            });

            this.rewardAd.onLoad(() => {
                this.rewardAd.show();
            });
            this.rewardAd.onError((err) => {
                this.onRewardVideoAdFail && this.onRewardVideoAdFail();
                warn("tt reward video ad error", err);
            });
            this.rewardAd.onClose((res: { isEnded: boolean; }) => {
                if (res.isEnded) {
                    this.onRewardVideoAdSuccess && this.onRewardVideoAdSuccess();
                }
                this.onRewardVideoAdFail && this.onRewardVideoAdFail();
            });
        } else {
            this.rewardAd.show();
        }
    }
    /*********** 设备 ***********/
    // 复制字符串到剪贴板
    public static setClipboardData(data: string): void {
        tt.setClipboardData({
            data: data,
            success() {
                app.manager.event.get("global").emit("showtoast", '复制成功');
            },
        });
    }

    /*********** 广告 ***********/
    // 开启 banner 广告（仅支持一个广告位）
    public static showBannerAd(params?: { id: string; success: () => void; fail: () => void; }): void {
        // 注册回调
        this.onRewardBannerAdSuccess = params.success;
        this.onRewardBannerAdFail = params.fail;

        if (!this.bannerAd) {
            this.bannerAd = tt.createBannerAd({
                adUnitId: params.id,
                adIntervals: 30,
                style: {
                    left: 0,
                    top: screen.windowSize.height,
                    width: 300,
                },
            });

            this.bannerAd.onLoad(() => {
                this.bannerAd.show();
            });
            this.bannerAd.onError((err) => {
                this.onRewardBannerAdFail && this.onRewardBannerAdFail();
                warn("tt reward video ad error", err);
            });
        } else {
            this.bannerAd.show();
        }
    }
    // 隐藏 banner 广告
    public static hideBannerAd(): void {
        if (this.bannerAd) {
            this.bannerAd.hide();
        }
    }
    // 显示插屏广告
    public static showInterstitialAd(): void {
        return;
    }
    // 显示激励视频广告
    public static showRewardVideoAd(adID: string, success?: () => void, fail?: (err: any) => void): void {
        return;
    }

    public static focusDouYin() {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }

        tt.openAwemeUserProfile({
            success: (res) => {
                console.log(res);
            },
        });
    }

    public static isSupportFocusDouYin() {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return false;
        }

        const sysInfo = tt.getSystemInfoSync();
        const { system, SDKVersion, version, appName } = sysInfo;
        const sysVersion = system.split(" ");
        const verArr = version.split(".");
        for (let i = 0; i < verArr.length; i++) {
            if (verArr[i].length < 2) verArr[i] = "0" + verArr[i];
        }

        // 基础库 1.84.0 开始支持本方法。
        if (this.versionCompare(SDKVersion, "1.84.0") < 0)
            return false;

        if (appName != "Douyin") {
            // 只有抖音平台支持
            return false;
        }

        return true;
    }

    /**
     * 版本比较
     * @param versionA
     * @param versionB
     * @returns <0 versionA < versionB; =0 versionA == versionB; >0 versionA > versionB
     */
    public static versionCompare(versionA: string, versionB: string): number {
        const vA = versionA.split(".");
        const vB = versionB.split(".");
        for (let i = 0; i < vA.length; ++i) {
            const a = parseInt(vA[i]);
            const b = parseInt(vB[i] || "0");
            if (a === b) {
                continue;
            } else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        } else {
            return 0;
        }
    }

    public static addShortcut(callback?) {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        tt.addShortcut({
            success() {
                console.log("添加桌面成功");
                if (callback) {
                    callback(true);
                }
            },
            fail(err) {
                console.log("添加桌面失败", err.errMsg);
                if (callback) {
                    callback(false);
                }
            },
        });
    }

    public static isSupportShortcut() {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return false;
        }

        const sysInfo = tt.getSystemInfoSync();
        // console.log("sdkversion = " + JSON.stringify(sysInfo));
        const { system, SDKVersion, version } = sysInfo;
        const sysVersion = system.split(" ");
        const verArr = version.split(".");
        for (let i = 0; i < verArr.length; i++) {
            if (verArr[i].length < 2) verArr[i] = "0" + verArr[i];
        }

        // 基础库 2.46.0 开始支持本方法。
        if (this.versionCompare(SDKVersion, "2.46.0") < 0) return false;

        return true;
    }

    public static getSystemInfo(cb?, failCb?) {
        tt.getSystemInfo({
            success(res) {
                cb && cb(res);
            },
            fail(res) {
                failCb && failCb(res);
            },
        });
    }

    public static gameBox() {
        if (sys.platform != sys.Platform.BYTEDANCE_MINI_GAME) {
            return;
        }
        // tt.onNavigateToMiniGameBox(function (res) {
        //   console.log("跳转到小游戏盒子", res);
        // });
        // 监听弹窗关闭
        tt.onMoreGamesModalClose(function (res) {
            console.log("modal closed", res);
        });
        // 监听小游戏盒子跳转
        tt.onNavigateToMiniGameBox(function (res) {
            console.log("box = " + res.errCode);
            console.log("box = " + res.errMsg);
        });

        const systemInfo = tt.getSystemInfoSync();
        // iOS 不支持，建议先检测再使用
        if (systemInfo.platform !== "ios") {
            // 打开小游戏盒子
            const options = tt.getLaunchOptionsSync();
            // console.log("options = ", JSON.stringify(options));
            tt.showMoreGamesModal({
                appLaunchOptions: [
                    {
                        appId: "ttb06fc6d22f51b12b02",
                        query: "foo=bar&baz=qux",
                        extraData: {},
                    },
                    {
                        appId: "tte3e995547cd7daab02",
                        query: "foo=bar&baz=qux",
                        extraData: {},
                    },
                    // {...}
                ],
                success(res) {
                    console.log("success", res.errMsg);
                },
                fail(res) {
                    console.log("fail", res.errMsg);
                },
            });
        }
    }

    /**
     * 权限认证保存
     * 目前支持保存图片到相册
     */
    public static saveImage(filePath: string, callback) {
        tt.authorize({
            scope: "scope.album",
            success: (res) => {
                this.saveImageFunc(filePath, callback);
            },
            fail: function () {
                //没有授权过，我们调用showModal弹出弹窗，告诉用户请求给予我们授权。
                var alertParam = {
                    title: "授权",
                    content: "保存到相册需要您的授权，请给予我们授权",
                    showCancel: true,
                    confirmText: "去授权",
                    success: function (res) {
                        //打开设置界面，设置界面只会出现小程序已经向用户请求过的权限。我们请求过保存图片的权限，所以里面会有相册的按钮，允许后点返回。则执行下面的success方法。调用保存图片的接口
                        if (res.confirm) {
                            tt.openSetting({
                                success: (res) => {
                                    if (res.authSetting && res.authSetting["scope.album"]) {
                                        this.saveImageFunc(filePath, callback);
                                    } else {
                                        callback && callback();
                                    }
                                },
                                fail: function (res) {
                                    callback && callback();
                                },
                            });
                        } else {
                            callback && callback();
                        }
                    },
                    fail: function (res) {
                        callback && callback();
                        console.log("tt showModal 调用失败");
                    },
                };
                //这里调用弹窗。
                tt.showModal(alertParam);
            },
        });
    }

    public static getLaunchOptionsSync() {
        if (!tt) {
            return null;
        }
        const options = tt.getLaunchOptionsSync();
        return options;
    }

    public static saveImageFunc(filePath, callback) {
        tt.saveImageToPhotosAlbum({
            filePath: filePath,
            success(res): void {
                tt.showToast({
                    title: "截图已保存至相册,快快分享吧",
                    icon: "none",
                    image: "",
                    duration: 1500,
                });
                callback && callback();
            },
            fail(res): void {
                //失败暂时定为同样是弹窗
                console.log(`tt saveImageToPhotosAlbum调用失败`);
                tt.showToast({
                    title: "截图保存失败",
                    icon: "none",
                    image: "",
                    duration: 1000,
                });
                callback && callback();
            },
        });
    }

    //获取cavas临时地址，同步的
    public static getTempFilePath() {
        //@ts-ignore
        let tempFilePath = canvas.toTempFilePathSync({
            x: 0,
            y: 0,
            // width: cc.winSize.width,
            // height: cc.winSize.height,
            // destWidth: cc.winSize.width,
            // destHeight: cc.winSize.height,
            fileType: "jpg",
            quality: 1, //仅当fileType为jpg的时候生效
        });
        return tempFilePath;
    }

    public static savePng(callback) {
        let tempFilePath = this.getTempFilePath();
        this.saveImage(tempFilePath, callback);
    }

    public static isTTIpad() {
        let sysInfo = tt.getSystemInfoSync();
        if (sysInfo && sysInfo.model && sysInfo.model.indexOf("iPad") != -1) {
            return true;
        } else {
            return false;
        }
    }

    /** 判断是否是抖音app */
    public static checkIsDouYinApp(): boolean {
        const info = tt.getSystemInfoSync();
        enum ttKey {
            // 抖音
            Douyin = "Douyin",
            // 抖音极速版
            douyin_lite = "douyin_lite",
            // 抖音火山版
            aweme_hotsoon = "aweme_hotsoon",
            // 抖音预览
            devtools = "devtools"
        }
        if (ttKey[info.appName]) {
            return true;
        }
        return false;
    }

    /** 判断是否支持指定场景 */
    public static checkSceneSupport(scene: string, cb: (b: boolean) => void): void {
        if (!this._isTT || !tt.checkScene) {
            cb(false);
            return;
        }
        tt.checkScene({
            scene: scene,
            success: (res) => {
                console.log("check scene success: ", res);
                cb(true);
            },
            fail: (res) => {
                console.log("check scene fail:", res);
                cb(false);
            }
        });
    }

    public static jumpSidebar(success, fail) {
        if (!this._isTT) {
            return;
        }
        tt.navigateToScene({
            scene: "sidebar",
            success: (res) => {
                success && success(res);
            },
            fail: (res) => {
                fail && fail(res);
            },
        });
    }

    public static jumpService(type: number = 2): void {
        if (!this.checkIsDouYinApp()) {
            return;
        }
        tt.openCustomerServiceConversation({
            type: type,
            success: (obj) => {
                console.log("进入客服成功", obj);
            },
            fail: (obj) => {
                console.log("进入客服失败", obj);
            },
        });
    }

    public static checkIsDouyin(): boolean {
        if (!this.ttAppName) {
            return false;
        }
        enum ttKey {
            // 抖音
            Douyin = "Douyin",
            // 抖音极速版
            douyin_lite = "douyin_lite",
            // 抖音火山版
            aweme_hotsoon = "aweme_hotsoon",
            // 抖音预览
            devtools = "devtools"
        }
        if (ttKey[this.ttAppName]) {
            return true;
        }
        return false;
    }

    /**
     * 安卓充值流程
     * @param param
     * @param callBack
     */
    public static pay(param: PayParam, callBack: CallBackFun1<boolean>) {
        // 使用 canIUse 判断是否支持使用道具直购功能
        if (tt.canIUse('requestGamePayment.object.goodType')) {
            tt.requestGamePayment({
                goodType: 2, // 商品类型为道具直购
                orderAmount: param.money, // 订单金额，单位人民币分
                goodName: "道具名称",
                currencyType: "CNY",
                zoneId: "1",
                customId: param.billNo, // 开发者自定义单号
                mode: "game", // 支付类型
                env: 0, // 支付环境
                platform: param.platform,
                extraInfo: "extraInfo",  // extraInfo为字符串格式，用户自定义额外信息,支付结果回调信息包含此字段，基础库版本低于1.55.0没有此字段
                success(res) {
                    console.log("调用函数成功 = ", res);
                    callBack && callBack(true);
                },
                fail(res) {
                    console.log("调用函数失败 = ", res);
                    callBack && callBack(false);
                },
                complete(res) {
                    console.log("调用完成 = ", res);
                },
            });
        } else {
            // 游戏币
            tt.requestGamePayment({
                mode: "game", // 支付类型
                env: 0, // 支付环境
                platform: "android",
                currencyType: "CNY", // 币种：目前仅为 "CNY"
                buyQuantity: param.money, // 购买数量，必须满足：金币数量*金币单价 = 限定价格等级（详见金币限定等级）
                zoneId: "1",
                customId: param.billNo, // 开发者自定义唯一订单号。如不填，支付结果回调将不包含此字段，将导致游戏开发者无法发放游戏道具, 基础库版本低于1.55.0没有此字段
                extraInfo: "extraInfo", // extraInfo为字符串类型
                success(res) {
                    console.log("调用函数成功");
                    callBack && callBack(true);
                },
                fail(res) {
                    console.log("调用函数失败");
                    callBack && callBack(false);
                },
                complete(res) {
                    console.log("调用完成");
                },
            });
        }
    }


    public static payIosCustomer(param: PayParam, callBack: CallBackFun1<boolean>) {

        if (tt.canIUse('openAwemeCustomerService.object.goodType')) {
            // 道具直购场景
            tt.openAwemeCustomerService({
                goodType: 2, // 道具直购
                orderAmount: param.money, // 道具现金价值，单位分
                goodName: "道具名称", // 道具名称
                currencyType: "CNY", // 币种：目前仅为"DIAMOND"
                zoneId: "1",
                customId: param.billNo, //开发者自定义唯一订单号。如不填，支付结果回调将不包含此字段，将导致游戏开发者无法发放游戏道具, 基础库版本低于1.55.0没有此字段
                extraInfo: ``,
                success(res) {
                    console.log("调用函数成功");
                    callBack && callBack(true);
                },
                fail(res) {
                    console.log("调用函数失败");
                    callBack && callBack(false);
                },
                complete(res) {
                    console.log("调用完成");
                },
            });
        } else {
            // 游戏币
            tt.openAwemeCustomerService({
                currencyType: "CNY", // 币种：目前仅为"DIAMOND"
                buyQuantity: param.money, // 购买游戏币数量
                zoneId: "1",
                customId: param.billNo, //开发者自定义唯一订单号。如不填，支付结果回调将不包含此字段，将导致游戏开发者无法发放游戏道具, 基础库版本低于1.55.0没有此字段
                extraInfo: ``,
                success(res) {
                    console.log("调用函数成功");
                    callBack && callBack(true);
                },
                fail(res) {
                    console.log("调用函数失败");
                    callBack && callBack(false);
                },
                complete(res) {
                    console.log("调用完成");
                },
            });
        }
    }

    public static jumpToOther(appId: string, path?: string): Promise<void> {
        if (!appId) {
            return Promise.resolve(); // 不需要处理失败，暂时
        }
        return new Promise((resolve, reject) => {
            tt.navigateToMiniProgram({
                appId: appId,
                path: path,
                envVersion: "current",
                complete() {
                    resolve();
                },
            });
        });
    }

    
    ///////////////////////子域排行榜，目前不用/////////////////////////////

    /** 判断是否需要显示好友排行 */
    public static checkShowFriendRank(): boolean {
        return this._isTT && tt.getOpenDataContext != undefined;
    }

    // 在子域中更新抖音排行榜（前缀是 `update-`）(type: 暂时只有 addon 或者空)
    // type 为 addon 的时候，不判断历史最高分，直接累加数量
    public static ttRankScoreUpdate(rankName: SubContextShowType, scoreObjString: string): void {
        if (!this._isTT) {
            return;
        }

        const openData = tt.getOpenDataContext();
        openData.postMessage({
            event: `update-${rankName}`,
            scoreObjString: scoreObjString,
        });
    }

    // 在子域中清除抖音排行榜（前缀是 `update-`）
    public static ttRankScoreRemove(rankName: string): void {
        if (!this._isTT) {
            return;
        }
        const openData = tt.getOpenDataContext();
        openData.postMessage({
            cmd: `remove-${rankName}`,
            score: 0,
        });
    }

    public static ttRankReset(rankName: string): void {
        if (!this._isTT) {
            return;
        }
        const openData = tt.getOpenDataContext();
        openData.postMessage({
            cmd: `reset-${rankName}`,
            score: 0,
        });
    }

    // 在子域中显示对应的内容（前缀是 `show-`）
    // width height 用来更新子域设计分辨率
    public static ttShowSubContext(message:{}): void {
        if (!this._isTT) {
            return;
        }
        const openData = tt.getOpenDataContext();
        openData.postMessage(message);
    }
    ////////////////////////////////////////////////////

    // 设置 监听声音被打断
    public static setOnAudioInterruptionBegin(func?: () => void): void {

        if (func) {
            this.onAudioInterruptionBeginFunction.push(func);
        }
    }

    // 设置 监听声音被打断
    public static setOnAudioInterruptionEnd(func?: () => void): void {
        if (func) {
            this.onAudioInterruptionEndFunc.push(func);
        }
    }
    // 获取菜单按钮的坐标
    public static MenuRect()
    {
        return tt.getMenuButtonBoundingClientRect();
    }


    //////////////////////抖音排行榜//////////////////////////////
    /** 判断是否需要显示好友排行 */
    public static checkShowTTFriendRank(): boolean {
        const appName = this.ttAppName?.toLowerCase() ?? "";
        return this._isTT && tt.getImRankList !== undefined && (appName == "douyin" || appName == "douyin_lite");
    }

    public static setScore(score: number): void {
        if (!this._isTT || !tt.setImRankData || score == 0) {
            return;
        }
        tt.setImRankData({
            dataType: 0, //成绩为数字类型
            value: score + "",
            priority: 0, //dataType为数字类型，不需要权重，直接传0
            extra: "extra",
            zoneId: "default",
            success(res) {
                console.log(`setImRankData success res:`, JSON.stringify(res));
            },
            fail(res) {
                console.log(`setImRankData fail res:`, JSON.stringify(res));
            },
        });
    }

    public static showScoreRank(): void {
        if (!this._isTT || !tt.getImRankList) {
            return;
        }
        tt.getImRankList({
            relationType: "default", //好友榜、总榜都展示
            dataType: 0, //只圈选type为枚举类型的数据进行排序
            rankType: "all", //总榜
            suffix: "", //为空或不填，一般枚举类型不需要填后缀
            rankTitle: "排行榜", //标题
            zoneId: "default",
            success(res) {
                console.log(`getImRankData success res: ${res}`);
            },
            fail(res) {
                console.log(`getImRankData fail res: ${res.errMsg}`);
            },
        });
    }

    ////////////////////////////////////////////////////

}

TtSdk.init();
