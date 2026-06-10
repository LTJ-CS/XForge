import { getEnvConfig } from "../../script-load/build_config/Env";
import PlatformUtils, { Platform } from "../../script-load/PlatformUtils";
import Sdk from "./Sdk";
import WxSdk, { AdTag } from "./wx/WxSdk";

export enum ShareType {
    share = "share", // 普通分享
    addFriend = "addFriend", // 加好友
    getReward = "getReward", // 领取奖励
}

export interface IShareInfo {
    title: string;
    imageName: string;
    enable: boolean;
    templateId?: string;
}

/** 分享文案数 */
const TextNum = 3;
/** 小程序分享图片数 */
const ImgWx = 3;
/** 国内app分享图片数 */
const ImgAppCn = 8;
/** 海外app分享图片数 */
const ImgAppOs = 5;
/**分享文案 */
const shareStrArray: Array<IShareInfo> = [
    {
        title: "好友正在共享ta的工资单",
        imageName: "share_1",
        enable: false
    },
    {
        title: "查看自己的工资属于哪个段位？",
        imageName: "share_2",
        enable: false
    },
    {
        title: "你！我朋友圈最适合当颜值主播的人！",
        imageName: "share_3",
        enable: false
    },
    {
        title: "好友偷偷给你看ta的今日收入（剩1次机会）",
        imageName: "share_4",
        enable: false
    },
    {
        title: "还有谁的工资比我低！！！！！",
        imageName: "share_5",
        enable: false
    },
    {
        title: "2025各省薪资水平",
        imageName: "share_6",
        enable: true
    },
    {
        title: "某厂加班现状，内部曝光！",
        imageName: "share_7",
        enable: true
    },
    {
        title: "全国各公司工作时长表",
        imageName: "share_8",
        enable: true
    },
    {
        title: "董卓吕布锁死",
        imageName: "share_9",
        enable: true
    },
    {
        title: "那咋了？保洁也能当团宠！",
        imageName: "share_10",
        enable: true
    },
    {
        title: "这剧情离谱到我 CPU 直接干烧",
        imageName: "share_11",
        enable: true
    },
    {
        title: "清宫野史：乾隆身世大揭秘！",
        imageName: "share_12",
        enable: true
    }
];
const ttShareTemplateIdArray = [
    "16goh54k43072jx2e2",
    "11qs6hh6d4v3gowajf",
];

const wx = window["wx"];
const qq = window["qq"];
const my = window["my"];
const qg = window["qg"];
const ks = window["ks"];

export default class Share {
    private static _shareId: string = null;
    private static parsedId = "";
    public static openId: string = "";
    public static init(): void {
        // console.log("分享初始化");
        // Sdk.setOnShow(() => {
        //     // console.log("默认onShow默认执行方法执行,----share----");
        //     // this.parsing();
        // });
        // // console.log("设置默认onHide默认执行方法,----share----");
        // Sdk.setOnShow(() => {
        //     // this.parsing();
        // });
        const paramsShare = this.getRandShareParams();
        const info = {
            title: paramsShare.title,
            imageUrl: paramsShare.imageUrl,
            query: "1",
            // query: this.infoTidy(ShareType.share),
        };
        // 开起右上角分享
        Sdk.setOnShareAppMessage(info);
    }

    public static get shareId(): string {
        return this._shareId;
    }
    public static set shareId(value: string) {
        this._shareId = value;
    }

    /** 是否可分享 */
    public static get canShare(): boolean {
        return PlatformUtils.isPlatform(Platform.wx) ||
            PlatformUtils.isPlatform(Platform.qq) ||
            PlatformUtils.isPlatform(Platform.ios) ||
            PlatformUtils.isPlatform(Platform.android) ||
            PlatformUtils.isPlatform(Platform.tt) ||
            PlatformUtils.isPlatform(Platform.xhs);
    }

    /**
     * 自定义分享 只有微信qq可分享
     * @param img 分享图id
     * @param title 标题
     * @param queryKey 分享所带的参数
     * @returns
     */
    public static customCommonShare(info: {
        imgId?: string,
        title?: string,
        queryKey?: string,
    }): void {
        if (!PlatformUtils.isPlatform(Platform.wx) && !PlatformUtils.isPlatform(Platform.qq)) {
            return;
        }
        const host = getEnvConfig().cfgHost;
        const params =
        {
            title: info.title || "",
            imageUrl: `${host}images/wx_${info.imgId || 1}.jpg`,
            query: `${info.queryKey || ""}`,
            success: () => { }
        };
        this.initiativeShare(params);
    }


    /**
    * 自定义分享 分享图全量
    * @param img 分享图id
    * @param title 标题
    * @param queryKey 分享所带的参数
    * @returns
    */
    public static customCommonShare2(info: {
        imgId?: string,
        title?: string,
        queryKey?: string,
    }): void {
        if (!Share.canShare) {
            // 不能分享
            return;
        }
        const host = getEnvConfig().cfgHost;
        const params =
        {
            title: info.title || "",
            imageUrl: `${host}images/${info.imgId || "wx_1"}.jpg`,
            query: `${info.queryKey || ""}`,
            success: () => { }
        };
        this.initiativeShare(params);
    }



    // 分享领奖励
    public static getRewardShare(info: { success: () => void; fail?: () => void; }): void {
        const paramsShare = this.getRandShareParams();
        const params = {
            title: paramsShare.title,
            imageUrl: paramsShare.imageUrl,
            success: (res: boolean) => {
                console.log("Share", "success", res);
                if (res) {
                    // 分享成功
                    info.success();
                    console.log("分享成功");
                    // Report.event(ReportNames.shareGame, BIShareType.st_shop);
                }
            },
            fail: (res: boolean) => {
                console.log("Share", "success", res);
                if (res) {
                    // 分享失败
                    info.fail();
                    console.log("分享失败");
                }
            },
            query: "2",
            validate: true, // 时间限制
        };
        this.initiativeShare(params, true);
    }

    public static shareMethod({
        success,
        fail,
        complete,
    }: {
        success: (suc: any) => void;
        fail: (fail: any) => void;
        complete: (com: any) => void;
    }) {
        WxSdk.setShareToFriendCallBack(() => {
            if (success) {
                success(null);
            }
            success = null;
        });
        const params = this.getRandShareParams();
        this.initiativeShare(
            {
                title: params.title,
                imageUrl: params.imageUrl,
                templateId: params.templateId,
                success(res) {
                    console.log("分享 success = ", res);
                    WxSdk.setShareToFriendCallBack(null);
                    if (success) {
                        success(res);
                    }
                },
                fail(res) {
                    console.log("分享 fail = ", res);
                    WxSdk.setShareToFriendCallBack(null);
                    if (fail) {
                        fail(res);
                    }
                },
                complete(res) {
                    console.log("分享 complete = ", res);
                    WxSdk.setShareToFriendCallBack(null);
                    if (complete) {
                        complete(res);
                    }
                },
                validate: true,
            },
            true
        );
    }

    //
    /**
     *  主动分享
     * @param {*} params
     * @param {*} validate false的情况下只要分享就会success, true的情况下会对分享做严格判断success和fail都会返回
     */
    public static initiativeShare(
        params: {
            title?: string;
            imageUrl?: string;
            tag?: AdTag;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            success: (res: any) => void;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            fail?: (res: any) => void;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            complete?: (res: any) => void;
            validate?: boolean;
            // validate == true 带有严格的时间检测
            query?: string;
            templateId?: string;
        },
        once?: boolean
    ): void {
        if (PlatformUtils.isPlatform(Platform.web)) {
            let query = "";
            if (params.query) {
                query = params.query;
            }
            query += `${query.length ? '&' : ''}ts=` + Date.now();
            if (this._shareId) {
                query += query.length > 0 ? `&shareId=${this._shareId}` : `shareId=${this._shareId}`;
            }
            console.log("share query", query);
            params.success && params.success(true);
            params.complete && params.complete(false);
            return;
        }
        let result = true;
        //QQ、快手是真分享
        if (PlatformUtils.isPlatform(Platform.qq) || PlatformUtils.isPlatform(Platform.ks)) {
            result = false;
        }
        let startTime = new Date().getTime();
        // if (PlatformUtils.isPlatform(Platform.android) || PlatformUtils.isPlatform(Platform.ios)) {
        //     const param: {
        //         manner: string;
        //         param: shareReqParam;
        //         success: (res) => void;
        //         fail?: (res) => void;
        //         complete?: (res) => void;
        //     } = {
        //         manner: sharePlatform.ltshare,
        //         param: {
        //             type: shareType.photo,
        //             title: params.title,
        //             photoUri: params.imageUrl,
        //         },
        //         success: params.success,
        //         // fail: params.fail,
        //         fail: params.success,
        //     };
        //     //海外安卓type值特殊
        //     if (isNativeOS() && PlatformUtils.isPlatform(Platform.android)) {
        //         param.param.type = shareType.netPhoto;
        //     }
        //     NativeBridge.NativeShareReq(param);
        //     return;
        // }
        let isFirst = true;
        if (params.validate == true) {
            if (PlatformUtils.isPlatform(Platform.qq) || PlatformUtils.isPlatform(Platform.ks)) {
                result = false;
            }
            // Utils.delayCallbackOnce(func, 3);
            if (once) {
                console.log("分享 111");
                Sdk.setOnShowOnce(() => {
                    //QQ、快手是真分享
                    if (PlatformUtils.isPlatform(Platform.qq) || PlatformUtils.isPlatform(Platform.ks)) {
                        return;
                    }
                    if (isFirst) {
                        // result = new Date().getTime() - startTime >= 2500;
                        console.log("分享 222 result = ", result, "startTime = ", startTime);
                        if (result == false) {
                            // 还没到时间
                            // 清空计时器
                            // Utils.removeDelayCallback(func);
                            // 失败了
                            if (params.fail) {
                                params.fail(true);
                            }
                            if (params.complete) {
                                params.complete(false);
                            }
                            console.log("分享 333");
                        } else {
                            startTime = new Date().getTime();
                            console.log("分享 444 result = ", result, "startTime = ", startTime);
                            isFirst = false;
                            // 时间到了 成功
                            if (params.success) {
                                params.success(true);
                            }
                            if (params.complete) {
                                params.complete(true);
                            }
                        }
                    } else {
                        console.log("多次进入后台 ###### ");
                    }
                });
            } else {
                console.log("分享 555");
                Sdk.setOnShow(() => {
                    // result = new Date().getTime() - startTime >= 2500;
                    if (result == false) {
                        // 还没到时间
                        // 清空计时器
                        // Utils.removeDelayCallback(func);
                        // 失败了
                        if (params.fail) {
                            params.fail(true);
                        }
                        if (params.complete) {
                            params.complete(false);
                        }
                    } else {
                        // 时间到了 成功
                        if (params.success) {
                            params.success(true);
                        }
                        if (params.complete) {
                            params.complete(true);
                        }
                    }
                });
            }
        } else {
            params.success(true);
            if (params.complete) {
                params.complete(true);
            }
        }
        let query = "";
        if (params.query) {
            query = params.query;
        }
        query += `${query.length ? '&' : ''}ts=` + Date.now();
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            let openId = this.openId;
            if (query.length == 0) {
                query = "openId=" + openId;
            } else {
                query += "&openId=" + openId;
            }
            if (this._shareId) {
                query += query.length > 0 ? `&shareId=${this._shareId}` : `shareId=${this._shareId}`;
            }
            console.log("query", query);
            const path = PlatformUtils.isPlatform(Platform.xhs) ? `/?ts=${Date.now()}&shareId=${this._shareId}` : undefined;
            const dataObj = {
                title: params.title,
                imageUrl: params.imageUrl,
                query: query,
                path
            };
            if (PlatformUtils.isPlatform(Platform.xhs)) {
                wx.shareWeChatMessage ? wx.shareWeChatMessage(dataObj) : wx.shareAppMessage(dataObj);
            } else {
                wx.shareAppMessage(dataObj);
            }
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            if (this._shareId) {
                query += query.length > 0 ? `&shareId=${this._shareId}` : `shareId=${this._shareId}`;
            }
            qq.shareAppMessage({
                title: params.title,
                imageUrl: params.imageUrl,
                query: query,
                success: () => {
                    params.success(true);
                },
                fail: (aa) => {
                    params.fail(false);
                    console.log("qq分享失败", aa);
                },
                complete: (aa) => {
                    console.log("qq分享完成", aa);
                },
            });
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            if (this._shareId) {
                query += query.length > 0 ? `&shareId=${this._shareId}` : `shareId=${this._shareId}`;
            }
            console.log(" query ", query);
            //有模版就用模版图片分享
            if (params.templateId) {
                tt.shareAppMessage({
                    templateId: params.templateId,
                    query: query,
                    success: () => {
                        params.success(true);
                    },
                    fail: (aa) => {
                        params.fail(false);
                        console.log("tt分享失败", aa);
                    },
                    complete: (aa) => {
                        console.log("tt分享完成", aa);
                        params.complete && params.complete(aa);
                    },
                });
            }
            else{
                tt.shareAppMessage({
                    title: params.title,
                    imageUrl: params.imageUrl,
                    query: query,
                    success: () => {
                        params.success(true);
                    },
                    fail: (aa) => {
                        params.fail(false);
                        console.log("tt分享失败", aa);
                    },
                    complete: (aa) => {
                        console.log("tt分享完成", aa);
                        params.complete && params.complete(aa);
                    },
                });
            }
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            ks.shareAppMessage({
                title: params.title,
                imageUrl: params.imageUrl,
                query: query,
            });
        } else if (PlatformUtils.isPlatform(Platform.hw)) {
            qg.serviceShare({
                shareType: 0,
                title: params.title,
                targetUrl: "https://hapjs.org/app/com.easygame2021.catmatch",
                imagePath: params.imageUrl,
                fail: function (data, code) {
                    console.log("service share fail:" + code + data);
                },
                cancel: function () {
                    console.log("cancel");
                },
            });
            // qg.systemShare({
            //   type: "text/html",
            //   data: params.title,
            //   success: function () {
            //     console.log("share success");
            //   },
            //   fail: function (erromsg, errorcode) {
            //     console.log("share fail --- " + errorcode + ":" + erromsg);
            //   },
            //   cancel: function (data) {
            //     console.log("share cancel:" + data);
            //   },
            //   complete: function () {
            //     console.log("share complete");
            //   },
            // });
        } else if (PlatformUtils.isPlatform(Platform.oppo)) {
        } else if (PlatformUtils.isPlatform(Platform.vivo)) {
            qg.share();
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            my.showSharePanel({
                title: params.title,
                imageUrl: params.imageUrl,
                bgImgUrl: params.imageUrl,
                query: query,
                // 虽然支付宝有对应的 success 和 fail回调，但是时机并不准确，暂且使用假回调
                //*******************************//
                // success: () => {
                //     params.success(true);
                // },
                // fail: (aa) => {
                //     params.fail(false);
                //     console.log("alipay分享失败", aa);
                // },
                // complete: (aa) => {
                //     console.log("alipay分享完成", aa);
                // },
                //*******************************//
            });
        }
    }

    public static shareMahjong(roomId: string): void {
        if (!PlatformUtils.isPlatform(Platform.wx) && !PlatformUtils.isPlatform(Platform.qq)) {
            return;
        }
        const host = getEnvConfig().cfgHost;
        const params =
        {
            title: "谁来和我大战三百回合？",
            imageUrl: `${host}images/share/wx_mj.jpg`,
            query: `mahjongRId=${roomId}`,
            success: () => { }
        };
        this.initiativeShare(params);
    }

    /** 分享添加好友 */
    public static shareAddFriend(friendId: string): void {
        if (!PlatformUtils.isPlatform(Platform.wx) && !PlatformUtils.isPlatform(Platform.qq)) {
            return;
        }
        let info = this.getShowShareInfo();
        const params = {
            title: info?.title || "原来赚钱这么容易",
            imageUrl: `${getEnvConfig().cfgHost}images/share/${info.imageName}.jpg`,
            query: `friendId=${friendId}`,
            templateId: info?.templateId,
            success: () => { }
        };
        this.initiativeShare(params);
    }

    /** 获取分享随机参数 */
    public static getRandShareParams(): any {

        let info = this.getShowShareInfo();

        const params = {
            title: info?.title || "原来赚钱这么容易",
            imageUrl: `${getEnvConfig().cfgHost}images/share/${info?.imageName}.jpg`,
            templateId: info?.templateId,
        };

        return params;
    }

    public static buildShareParams(title: string, jpgPath: string): { title: string, imageUrl: string; } {
        const host = getEnvConfig().cfgHost;
        const params = {
            title: title,
            imageUrl: `${host}images/share/${jpgPath}.jpg`,
        };
        // TODO: 原生平台分享路径？？
        // if (PlatformUtils.isPlatform(Platform.android) || PlatformUtils.isPlatform(Platform.ios)) {
        //     if (isNativeCN()) {
        //         const id = Math.floor(Math.random() * ImgAppCn) + 1;
        //         const idx = NativeBridge.officialChannels.findIndex((ch) => {
        //             return NativeBridge.loginInfo && NativeBridge.loginInfo.channelNo == ch;
        //         });
        //         if (idx > -1) {
        //             params.imageUrl = `${host}images/app_${id}.jpg`;
        //         } else {
        //             params.imageUrl = `${host}images/app_0_${id}.jpg`;
        //         }
        //     } else if (isNativeOS()) {
        //         const id = Math.floor(Math.random() * ImgAppOs) + 1;
        //         params.imageUrl = `${host}images/os_${id}.png`;
        //     }
        // }

        return params;
    }

    public static getShowShareInfo() {
        let enabledInfoes = shareStrArray.filter(info => info.enable);
        let idx = Math.floor(Math.random() * enabledInfoes.length);
        let info = enabledInfoes[idx];
        idx = Math.floor(Math.random() * ttShareTemplateIdArray.length);
        info.templateId = ttShareTemplateIdArray[idx];
        return info;
    }
}
