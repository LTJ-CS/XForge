import { sys } from "cc";
import { SubContextShowType } from "../Sdk";
import 'minigame-api-typings';

// 广告标签，用于广告唯一ID和上报记录使用
export enum AdTag {
    NONE, // 没有TAG
    RewardVideo, // 激励视频
}

// 分享模拟回掉的超时时间(单位秒)
export const SHARE_CALLBACK_TIME = 3;
// 分享模拟回掉的成功概率
export const SHARE_CALLBACK_RATE = 0;

export default class WxSdk {
    static _beforeOnHideAction: number;
    public static onShowFunction: (() => void)[] = []; // onShow时执行方法
    public static onHideFunction: (() => void)[] = []; // onHide时执行方法
    public static onShowOnceFunction: (() => void)[] = []; // onShowOnce时执行方法
    public static onHideOnceFunction: (() => void)[] = []; // onHideOnce时执行方法

    private static _isWx = sys.platform == sys.Platform.WECHAT_GAME && !window["qq"];
    private static miniGameCommon = null;
    private static hasOnReadyMinigame = false;
    private static _toFriendCallBack = null;

    public static onAudioInterruptionBeginFunction: (() => void)[] = []; // onAudioInterruptionBegin时执行方法
    public static onAudioInterruptionEndFunc: (() => void)[] = []; // onAudioInterruptionEnd时执行方法
    public static setShareToFriendCallBack(callBack) {
        this._toFriendCallBack = callBack;
    }

    public static init(): void {
        if (!this._isWx) {
            return;
        }
        // 接受微信子数据域共享信息;
        if (wx.onInteractiveStorageModified) {
            wx.onInteractiveStorageModified((key: string) => {
                console.log("onInteractiveStorageModified", key);
            });
        }

        // 监听定向分享消息
        if (wx.onShareMessageToFriend) {
            wx.onShareMessageToFriend((res) => {
                const tips = res.success ? "分享成功" : "分享失败"; //TODO no need trans
                wx.showToast({
                    title: tips,
                    icon: "none",
                    duration: 2000,
                });
                // 分享失败直接返回，不增加 npc
                if (res.success) {
                    this._toFriendCallBack && this._toFriendCallBack();
                }
            });
        }

        // 创建推荐位实例，提前初始化
        // if (wx.createGameIcon) {
        //     this.gameIconAd = wx.createGameIcon(
        //         {
        //             adUnitId: "PBgAAvMtdTk_v2ho",
        //             count: 1,
        //             style: [],
        //         },
        //         {
        //             appNameHidden: false, // boolean; //游戏名称是否隐藏
        //             color: "#713A0CC8", // string; //游戏名称的颜色色值
        //             size: 60, // number; //游戏icon的宽高值
        //             borderWidth: 5, // number; //游戏icon的border尺寸
        //             borderColor: "#ffffff77", // string; //游戏icon的border颜色色值
        //             left: 0, // number; //游戏icon的X轴坐标
        //             top: 200, // number; //游戏icon的Y轴坐标
        //         }
        //     );
        // }
        // this.showGameIcon(); // 默认展示 icon 广告

        this.authorize(); // TODO 获取授权
        // 开启分享菜单
        console.info("-- 开启转发 --");
        // 注册监听onShow onHide
        this.registerShowHide();
        wx.onAudioInterruptionBegin(()=>{
            console.log("-- 音频中断开始 --")
            if (this.onAudioInterruptionBeginFunction) {
                this.onAudioInterruptionBeginFunction.forEach((i) => i());
            }
        })
        wx.onAudioInterruptionEnd(()=>{
            console.log("-- 音频中断结束 --")
            if (this.onAudioInterruptionEndFunc) {
                this.onAudioInterruptionEndFunc.forEach((i) => i());
            }
        });
    }

    public static getLaunchOptionsSync() {
        const options = wx.getLaunchOptionsSync();
        return options;
    }

    public static checkUpdateManager(): void {
        /******************* 微信事件初始化 *********************/
        if (this._isWx && wx.getUpdateManager) {
            // 检查更新
            const updateManager = wx.getUpdateManager();
            updateManager.onCheckForUpdate(function (res) {
                // 请求完新版本信息的回调
                console.info("[app update]", res.hasUpdate);
            });

            updateManager.onUpdateReady(function () {
                wx.showModal({
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
    }

    // 注册监听onShow onHide
    // 获取访问精确位置的权限（系统自动弹窗）（已经授权的不会弹窗）
    public static async registerShowHide(): Promise<void> {
        wx.onShow(() => {
            if (this.onShowFunction) {
                this.onShowFunction.forEach((i) => i());
            }
            if (this.onShowOnceFunction) {
                this.onShowOnceFunction.forEach((i) => {
                    i();
                });
                this.onShowOnceFunction.length = 0;
            }
        });
        wx.onHide(() => {
            if (this.onHideFunction) {
                this.onHideFunction.forEach((i) => i());
            }

            if (this.onHideOnceFunction) {
                this.onHideOnceFunction.forEach((i) => {
                    i();
                });
                this.onHideOnceFunction.length = 0;
            }
        });
    }

    // 显示游戏推荐图标
    public static showGameIcon(): void {
        // if (this.gameIconAd) {
        //     // 正在展示，不重复调用
        //     if (this.gameIconAdShown) {
        //         return;
        //     }
        //     this.gameIconAd
        //         .load()
        //         .then(() => {
        //             this.gameIconAd.show();
        //             this.gameIconAdShown = true;
        //         })
        //         .catch((err: any) => {
        //             console.error("wx-sdk show game icon", err);
        //             this.gameIconAd.hide(); // 异常情况，不显示广告
        //         });
        // }
    }

    // 隐藏游戏推荐图标
    public static hideGameIcon(): void {
        // if (this.gameIconAd) {
        //     this.gameIconAd.hide();
        //     this.gameIconAdShown = false;
        // }
    }

    /****************** 权限 ******************/

    // 获取访问精确位置的权限（系统自动弹窗）（已经授权的不会弹窗）
    public static async authorizeLocation(): Promise<void> {
        wx.authorize({
            scope: "scope.userLocation",
            success: (data) => {
                console.log("authorize success:", data);
            },
            fail: (err) => {
                console.log("authorize fail:", err);
            },
        });
    }

    public static getPlaform() {
        const deviceInfo = wx.getDeviceInfo()
        return deviceInfo.platform;
    }

    // 微博跳转
    public static weiBoJump(): void {
        wx.navigateToMiniProgram({
            appId: "wx9074de28009e1111",
            path: "pages/profile/profile?nickname=羊了个羊",
            // extraData: {
            //   foo: "bar",
            // },
            // envVersion: "develop",
            success(res) {
                // 打开成功
                console.log("成功跳转微博小程序");
            },
        });
    }

    public static CPSJump(appId: string, path: string, uid: string): void {
        wx.navigateToMiniProgram({
            appId: appId,
            path: path,
            extraData: {
                uid: uid,
            },
            // envVersion: "develop",
            success(res) { },
        });
    }

    public static jumpToOther(appId: string, path?: string): Promise<void> {
        if (!appId) {
            return Promise.resolve();// 不需要处理失败，暂时
        }
        return new Promise((resolve, reject) => {
            wx.navigateToMiniProgram({
                appId: appId,
                path: path,
                envVersion: 'release',
                complete() {
                    resolve();
                }
            });
        });
    }

    public static wxOpenPage() {
        if (!this._isWx) {
            return;
        }
        try {
            window["wx"].openPage({
                openlink:
                    "Lg2A3Tnj9pY0gW2ARxbwzuYxIZ4JfgUSv4vIWCi7V29WTct59cquQ3dKDj_tN9-W2UwAR5JgLHHDbvvV_EpNgJpUhReRFWi-vGluDEqTXpiM",
                success: console.log,
                fail: console.error,
                complete: console.log,
            });
        } catch (error) { }
    }

    /****************** 设备 ******************/

    // 短震动
    public static vibrateShort(type: "light" | "medium" | "heavy" = "light"): void {
        wx.vibrateShort({ type, style: type }); // style 是兼容，将来可能根据微信 api 去掉
    }

    // 长震动
    public static vibrateLong(): void {
        wx.vibrateLong({});
    }

    static wxAppLogin(): void {
        throw new Error("Method not implemented.");
    }

    /****************** 网络 ******************/

    // public static connect() {
    //   wx.connectSocket
    // }

    /****************** 常用工具 ******************/

    // 获取字符串版本号的子版本数字
    // 字符串必须是 1.2.3 格式
    public static getSubVersion(version: string): {
        first: number;
        second: number;
        third: number;
    } {
        const list = version.split(".");
        return {
            first: parseInt(list[0].trim()),
            second: parseInt(list[1].trim()),
            third: parseInt(list[2].trim()),
        };
    }

    /**
     * 判断版本是否低于指定版本
     * @param version 需要判断的版本号 ("1.0.1")
     * @param targetVersion 对比的版本号 ("1.0.2")
     * return true
     */
    public static isVersionLower(version: string, targetVersion: string): boolean {
        const firstVersion = this.getSubVersion(version);
        const secondVersion = this.getSubVersion(targetVersion);
        if (firstVersion.first > secondVersion.first) {
            return false;
        }
        if (firstVersion.second > secondVersion.second) {
            return false;
        }
        if (firstVersion.third > secondVersion.third) {
            return false;
        }
        return true;
    }

    /****************** 微信 ******************/

    // 判断微信版本是否低于指定版本
    public static isWxVersionLower(targetVersion: string): boolean {
        if (!this._isWx && sys.platform != sys.Platform.WECHAT_GAME) {
            return true;
        }
        const wxSystemInfo = wx.getSystemInfoSync();
        const version = wxSystemInfo.SDKVersion;
        let result = false;
        if (this.isVersionLower(version, targetVersion)) {
            // 小于指定版本（不包含等于）返回 false
            result = true;
        }
        console.log("[sdk] is wx version lower", version, targetVersion, result);
        return result;
    }

    // 检查版本是否高于指定版本
    public static isWxVersionHigher(targetVersion: string): boolean {
        return !this.isWxVersionLower(targetVersion);
    }

    // 在子域中更新微信排行榜（前缀是 `update-`）(type: 暂时只有 addon 或者空)
    // type 为 addon 的时候，不判断历史最高分，直接累加数量
    public static wxRankScoreUpdate(rankName: SubContextShowType, scoreObjString: string): void {
        if (!this._isWx) {
            return;
        }

        const openData = wx.getOpenDataContext();
        openData.postMessage({
            event: `update-${rankName}`,
            scoreObjString: scoreObjString,
        });
    }

    // 在子域中清除微信排行榜（前缀是 `update-`）
    public static wxRankScoreRemove(rankName: string): void {
        if (!this._isWx) {
            return;
        }
        const openData = wx.getOpenDataContext();
        openData.postMessage({
            cmd: `remove-${rankName}`,
            score: 0,
        });
    }

    public static wxRankReset(rankName: string): void {
        if (!this._isWx) {
            return;
        }
        const openData = wx.getOpenDataContext();
        openData.postMessage({
            cmd: `reset-${rankName}`,
            score: 0,
        });
    }

    // 在子域中显示对应的内容（前缀是 `show-`）
    // width height 用来更新子域设计分辨率
    public static wxShowSubContext(message:{}): void {
        if (!this._isWx) {
            return;
        }
        const openData = wx.getOpenDataContext();
        openData.postMessage(message);
    }

    // 微信右上角分享
    public static onShareAppMessage(info: { title: string; imageUrl: string; query: string; }): void {
        if (!wx.showShareMenu) {
            return;
        }
        //右上角分享功能
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline'],
        });
        // const size = cc.winSize;
        // 监听分享菜单按钮点击后的分享内容
        wx.onShareAppMessage(function () {
            return {
                title: info.title,
                imageUrl: info.imageUrl,
                query: info.query,
            };
        });

        // 绑定分享参数
        wx.onShareTimeline(() => {
            return {
                title: "干了个饭",
                imageUrl: "", // 图片 URL
                query: "a=1&b=2",
            };
        });
    }

    // 被动分享（右上角分享） 监听
    public static onShareAppMessageQuery(): WechatMinigame.IAnyObject {
        // 当其他玩家从分享卡片上点击进入时，获取query参数
        const object = wx.getEnterOptionsSync();
        const query = object.query;
        return query;
    }

    /**
     * 分享消息（带 hack 回调的分享）
     * @param {*} params
     * @param {*} validate false的情况下只要分享就会success, true的情况下会对分享做严格判断success和fail都会返回
     */
    public static wxShareWithCallBack(params: {
        title?: string;
        imageUrl?: string;
        tag?: AdTag;
        success: (res: any) => void;
        fail?: (res: any) => void;
        complete?: (res: any) => void;
        validate?: boolean;
        query?: string;
    }): void {
        // 如果有 tag 字段，则优先使用 sdk 根据标签配置的设置
        if (params.tag) {
            // let shareInfo = getAdByTag(params.tag);
            // params.title = shareInfo.title;
            // params.imageUrl = shareInfo.url;
        }
        // 浏览器，直接返回成功
        if (sys.isBrowser) {
            params.success && params.success("local");
            params.complete && params.complete("local");
            return;
        }
        if (!this._isWx) {
            params.success && params.success("local");
            params.complete && params.complete("local");
            return;
        }
        if (params.validate == undefined) {
            params.validate = true;
        }
        // 标记onHide之前的操作
        this._beforeOnHideAction = 1;
        let isValid = false;
        let isCall = false;
        let isCall2 = false;

        const success = (res?: any) => {
            if (isCall) {
                return;
            }
            // 增加成功分享数
            // this._shareNum++;、
            console.log("构建 success");
            params.success && params.success(res);
            isCall = true;
        };

        const fail = (res?: any) => {
            if (isCall2) {
                return;
            }
            console.log("构建 fail");
            params.fail && params.fail(res);
            isCall2 = true;
        };

        const complete = (res?: any) => {
            params.complete && params.complete(res);
        };

        // let cancel = (res) => {
        // };
        let onShowCallback1: () => void;
        let onShowCallback2: () => void;
        // 模拟分享回掉，从点击分享到返回游戏，超过2秒算成功
        const nowTime = Date.now();

        // 保存回调函数引用
        onShowCallback1 = () => {
            if (Date.now() - nowTime < SHARE_CALLBACK_TIME * 1e3) {
                isValid = true;
            }
        };
        onShowCallback2 = () => {
            if (!isValid || isCall) {
                return false;
            }
            // 验证分享
            if (!params.validate) {
                success();
                complete();
                // 清理回调
                this.setOffShow(onShowCallback1);
                this.setOffShow(onShowCallback2);
                return;
            }
            // 验证是否可以强制分享（默认是）
            // 验证是否分享成功
            if (Date.now() - nowTime < SHARE_CALLBACK_TIME * 1e3) {
                // 验证是否分享成功
                if (Math.random() < SHARE_CALLBACK_RATE) {
                    // 分享成功计数+1
                    success();
                    complete();
                } else {
                    wx.showModal({
                        title: "提示",
                        content: "分享失败，请分享到群！",
                        confirmText: "重试",
                        showCancel: false,
                        // 完整
                        complete: () => {
                            // this.wxShareWithCallBack(params);
                            console.log("执行 complete");
                        },
                        success: () => {
                            console.log("执行 success");
                            success();
                        },
                        fail: () => {
                            console.log("执行 fail");
                            fail();
                        },
                    });
                }
                // 清理回调
                this.setOffShow(onShowCallback1);
                this.setOffShow(onShowCallback2);
                return;
            } else {
                success();
                complete();
                // 清理回调
                this.setOffShow(onShowCallback1);
                this.setOffShow(onShowCallback2);
                return;
            }
        };
        this.setOnShow(onShowCallback1);
        // 等待分享返回游戏之后再开启定时器
        this.setOnShow(onShowCallback2);

        const timer = setInterval(() => {
            success();
            complete();
        }, 2000);
        clearInterval(timer);

        let query = "";
        if (params.query) {
            query = params.query;
        }

        wx.shareAppMessage({
            title: params.title,
            imageUrl: params.imageUrl,
            query: query,
        });
    }

    public static getEnterOptions(): any {
        return wx.getEnterOptionsSync();
    }

    // 设置 onShow
    public static setOnShow(func?: () => void): void {
        if (func) {
            this.onShowFunction.push(func);
        }
    }

    // 设置 offShow
    public static setOffShow(func?: () => void): void {
        const idx = this.onShowFunction.indexOf(func);
        if (idx > -1) {
            this.onShowFunction.splice(idx, 1);
        }
    }

    // 设置 onShowOnce
    public static setOnShowOnce(func?: () => void): void {
        if (func) {
            this.onShowOnceFunction.push(func);
        }
    }

    // 设置 offShow
    public static setOffShowOnce(func?: () => void): void {
        const idx = this.onShowOnceFunction.indexOf(func);
        if (idx > -1) {
            this.onShowOnceFunction.splice(idx, 1);
        }
    }

    // 设置 onHide
    public static setOnHide(func?: () => void): void {
        if (func) {
            this.onHideFunction.push(func);
        }
    }

    // 设置 offHide
    public static setOffHide(func?: () => void): void {
        const idx = this.onHideFunction.indexOf(func);
        if (idx > -1) {
            this.onHideFunction.splice(idx, 1);
        }
    }

    // 设置 onHideOnce
    public static setOnHideOnce(func?: () => void): void {
        if (func) {
            this.onHideOnceFunction.push(func);
        }
    }

    // 设置 offHideOnce
    public static setOffHideOnce(func?: () => void): void {
        const idx = this.onHideOnceFunction.indexOf(func);
        if (idx > -1) {
            this.onHideOnceFunction.splice(idx, 1);
        }
    }

    // 获取应用版本号
    public static getAppVersion(): string {
        const version = "";
        if (this._isWx && wx.getAccountInfoSync) {
            // if (this.isWxVersionLower("2.11.2")) {
            //   // 低版本不支持此接口，直接返回空
            //   return "";
            // }
            const accountInfo = wx.getAccountInfoSync();
            console.log("[sdk] accountInfo:", accountInfo);
            return accountInfo.miniProgram.version || version;
        }
        return version;
    }

    /****************** 设备 ******************/
    // 复制字符串到剪贴板
    public static setClipboardData(data: string): void {
        wx.setClipboardData({
            data: data,
            success() {
                wx.getClipboardData({
                    success(res) {
                        console.log("wx get clipboard data:", res.data); // data
                    },
                });
            },
        });
    }

    /****************** UI界面 ******************/
    // 提示信息，传递常用参数
    public static showToast(params: {
        title: string;
        duration?: number;
        icon?: "success" | "error" | "loading" | "none";
    }): void {
        wx.showToast(params);
    }

    /****************** 广告 ******************/
    // 显示 banner 广告
    public static showBannerAd(): void {
        return;
    }

    // 隐藏 banner 广告
    public static hideBannerAd(): void {
        return;
    }

    // 显示插屏广告
    public static showInterstitialAd(): void {
        return;
    }

    // 显示激励视频广告
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static showRewardVideoAd(
        adID: string,
        success?: () => void,
        fail?: (err: any, title?: string) => void
    ): void {
        if (!wx) {
            fail(false, "wx undefined");
            return;
        }
        let p = false;
        // // 创建激励视频广告实例，提前初始化
        const videoAd = wx.createRewardedVideoAd({
            adUnitId: adID,
        });
        // 增加 监听
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        videoAd.onClose((res: any) => {
            if (p == false) {
                p = true;
                if ((res && res.isEnded) || res === undefined) {
                    // 正常播放结束，可以下发游戏奖励
                    // console.log("正常播放结束，可以下发游戏奖励 ++++");
                    success();
                } else {
                    // 播放中途退出，不下发游戏奖励
                    // console.log("播放中途退出，不下发游戏奖励 ----");
                    // fail && fail("quit", "中途退出"); // 失败回调
                    fail(false, "观看失败");
                }
            }
        });
        videoAd.onError((err) => {
            if (p == false) {
                p = true;
                fail(false, err.errMsg);
            }
        });
        // 用户触发广告后，显示激励视频广告
        videoAd
            .load()
            .then(() => {
                // console.log("播放广告成功");
                videoAd.show();
            })
            .catch(() => {
                // 失败重试
                // console.log("失败重试");
                fail(false, "广告拉取失败");
                // videoAd
                //   .load()
                //   .then(() => {
                //     videoAd.show();
                //   })
                //   .catch((err) => {
                //     console.log("激励视频 广告显示失败", err);
                //     resolve(false);
                //   });
            });
    }

    //保存图片到系统相册，需要用户授权 scope.writePhotosAlbum
    public static saveImage(tempFilePath: string, callback) {
        wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: (data) => {
                wx.saveImageToPhotosAlbum({
                    filePath: tempFilePath,
                    success: function (res): void {
                        wx.showToast({ title: "截图已保存至相册,快快分享到朋友圈吧", icon: "none", duration: 1500 });
                        callback && callback();
                    },
                    fail: function (): void {
                        callback && callback();
                    },
                });
            },
            fail: (err) => {
                //没有授权过，我们调用showModal弹出弹窗，告诉用户请求给予我们授权。
                var alertParam = {
                    title: "微信授权",
                    content: "保存到相册需要您的授权，请给予我们授权",
                    showCancel: true,
                    cancelColor: "#666",
                    confirmText: "去授权",
                    confirmColor: "#666",
                    success: function (ssa) {
                        //打开设置界面，设置界面只会出现小程序已经向用户请求过的权限。我们请求过保存图片的权限，所以里面会有相册的按钮，允许后点返回。则执行下面的success方法。调用保存图片的接口
                        if (ssa.confirm == true) {
                            wx.openSetting({
                                success: function (res) {
                                    if (res.authSetting && res.authSetting["scope.writePhotosAlbum"]) {
                                        wx.saveImageToPhotosAlbum({
                                            filePath: tempFilePath,
                                            success: function (res): void {
                                                wx.showToast({
                                                    title: "截图已保存至相册,快快分享到朋友圈吧",
                                                    icon: "none",
                                                    image: "",
                                                    duration: 1500,
                                                });
                                                callback && callback();
                                            },
                                            fail: function (): void {
                                                callback && callback();
                                            },
                                        });
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
                    fail: function () {
                        callback && callback();
                    },
                };
                //这里调用弹窗。
                wx.showModal(alertParam);
            },
        });
    }

    public static getMiniGame() {
        return this.miniGameCommon;
    }

    public static miniGamePushFeed(eventId: number, query: string): Promise<any> {
        return new Promise((reslove, reject) => {
            if (!this.miniGameCommon || (this.miniGameCommon && !this.miniGameCommon.createGameTimeLine)) {
                reject(1);
                return;
            }

            const gameTimeLine = this.miniGameCommon.createGameTimeLine();
            if (!gameTimeLine) {
                reject(2);
                return;
            }

            const pushFeed = () => {
                gameTimeLine.pushFeed({
                    eventId: eventId,
                    query: query,
                    success: () => {
                        reslove(0);
                    },
                    fail: (error) => {
                        reject(error);
                    },
                });
            };

            if (this.hasOnReadyMinigame) {
                pushFeed();
            } else {
                gameTimeLine.on("error", () => {
                    reject(3);
                });
                gameTimeLine.on("ready", () => {
                    this.hasOnReadyMinigame = true;
                    pushFeed();
                });
            }
        });
    }

    public static checkFileCache(cb: (obj: { fileCount: any; totalSize: number; }) => void): void {
        wx.getFileSystemManager().getSavedFileList({
            success: (res) => {
                console.log("getSavedFileList", true);
                const list = res.fileList;
                const obj = { fileCount: list.length, totalSize: 0 };
                list.forEach((item) => {
                    obj.totalSize += item.size;
                });
                cb(obj);
            },
            fail: (err) => {
                console.log("getSavedFileList", err);
            }
        });
    }


    /**
     * 安卓充值流程
     * @param param
     * @param callBack
     */
    public static pay(param: PayParam, callBack: CallBackFun1<boolean>) {

        wx.requestMidasPayment({
            mode: "game",
            env: 0, //checkIsTest() ? 1 : 0,//env为0 是 正式；env为1 是 沙盒
            currencyType: "CNY",
            //@ts-ignore
            platform: param.platform,
            zoneId: "1",
            buyQuantity: param.money, //购买数量
            offerId: param.billNo,    //业务订单号
            outTradeNo: param.billNo, //业务订单号
            success: (res) => {
                console.log("支付成功", res);
                callBack && callBack(true);
            },
            fail: function (res) {
                console.log("支付失败", res);
                callBack && callBack(false);
            },
        });
    }


    /**
     * ios充值
     * @param param
     * @param callBack
     */
    public static payIosCustomer(param: PayParam, callBack: CallBackFun1<boolean>) {
        let sessionFrom = {
            params: `{"pushType":"iosPay","uid":"${param.uid}","billNo":"${param.billNo}"}`,
        };

        let customerData = {
            sessionFrom: JSON.stringify(sessionFrom),
            showMessageCard: true,
            sendMessageTitle: `充值${param.money / 100}元`,
            sendMessageImg:
                "https://incubator-static.easygame2021.com/moon-village/images/share/payBanner.png",
            success: () => {
                console.log("客服消息回调成功");
                callBack && callBack(true);
            },
            fail: () => {
                console.log("客服消息回调失败");
                callBack && callBack(false);
            },
            complete: () => {
                console.log("执行回调");
            }
        };
        wx.openCustomerServiceConversation(customerData);
    }


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
        return wx.getMenuButtonBoundingClientRect();
    }
}

WxSdk.init();
