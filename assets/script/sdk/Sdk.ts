/**
 * 简游SDK cocos creator 开发扩展包
 */
import { game, Game, sys } from "cc";
import { getEnvConfig } from "../../script/build_config/Env";
import { HttpBaseParam } from "../../script/build_config/EnvConf";
import Http, { HttpResp } from "./Http";
import PlatformUtils, { Platform } from "./PlatformUtils";
import WxSdk from "./wx/WxSdk";
import TtSdk from "./tt/TTSdk";
import { DEV } from "cc/env";
import protobuf from "protobufjs";
import { app } from "../../app/app";
import BuildInfo from "../BuildInfo";
import StringUtils from "../utils/StringUtils";
import Log from "../log/Logger";
import { AckCtor, Client2ServerRequest } from "./TypeConstraints";
import User from "../../app-builtin/app-model/store.user";

/*
 *SDK 包含方法目录
 *- http request 请求：post 方法，get 方法
 *- 手机震动：长震动，短震动
 *- 复制到剪贴板
 *- 分享
 *- 激励视频广告
 *- banner 广告
 *- 插屏广告
 *- 应用生命周期事件监听
 */

/****************** 变量和类型 ******************/
// 分享模拟回掉的超时时间(单位秒)
export const SHARE_CALLBACK_TIME = 3;
// 分享模拟回掉的成功概率
export const SHARE_CALLBACK_RATE = 0;

export enum SubContextShowType {
    FriendRank = "friendRank", // 好友排行榜
    // todayRank = "todayRank", // 今日排行榜
}

// 震动类型
export enum VibrateType {
    Light = 15, // light
    Medium = 20, // medium
    Heavy = 30, // heavy
    Long = 400,
}

// SDK
export default class Sdk {
    private static Ins: Sdk = null;

    private constructor() {
        const platform = PlatformUtils.getPlatform();
        console.log("Sdk init", platform);
    }

    static get ins() {
        if (!Sdk.Ins) {
            Sdk.Ins = new Sdk();
        }

        return Sdk.Ins;
    }

    private host: string = getEnvConfig().host;

    private _isCloseVibrate = false;

    private get baseParams(): HttpBaseParam {
        let loginResponse = app.store.user.getLoginResponse();
        let token = loginResponse?.token;

        let retParam: HttpBaseParam = {
            t: token,
            b: BuildInfo.buildNumber(),
        };
        return retParam;
    }

    get(args: any, ignoreBaseParam = false): Promise<HttpResp> {
        let reqHost = (args.host) ? args.host : this.host;
        let baseParams = ignoreBaseParam ? {} : this.baseParams;
        return Http.get({
            host: reqHost,
            respType: "arraybuffer",
            baseParams: baseParams, //this.baseParams,
            ...args,
        });
    }

    post(args: any, ignoreBaseParam = false): Promise<HttpResp> {
        let reqHost = (args.host) ? args.host : this.host;
        let baseParams = ignoreBaseParam ? {} : this.baseParams;
        return Http.post({
            host: reqHost,
            respType: "arraybuffer",
            baseParams: baseParams, //this.baseParams,
            ...args,
        });
    }

    /**
     * 发送请求到 LogicServer, 并获取对应的返回
     * @param msgSend 要发送的消息包实例
     * @param msgAckConstructor 指定的消息包实例构造器, 用于反序列化返回消息
     * @param encrypt 是否加密数据包
     * @param showLoading
     */
    public async postToLogicServer<
        TReq extends Client2ServerRequest,
        TAck
    >(
        msgSend: TReq,
        msgAckConstructor: AckCtor<TAck>,
        encrypt: boolean = false,
    ): Promise<TAck | null> {
        try {
            await this.postToServer(
                // encode 之后发给后端...
                msgSend,
                msgAckConstructor,
                "/sheep/v1/game/logic_server/v1",
                encrypt
            )
        } catch (e) {
            console.error("postToLogicServer error: ", e);
        }
        return null;
    }

    /**
     * 发送请求到 指定 Url 的 Server, 并获取对应的返回
     * @param msgSend 要发送的消息包实例
     * @param msgAckConstructor 指定的消息包实例构造器, 用于反序列化返回消息
     * @param url 指定要发送消息到的服务器
     * @param encrypt 是否加密数据包
     */
    public async postToServer<
        // TReq 只能是一个 protobuf 消息实例
        TReq extends Client2ServerRequest,
        // TAckConstructor 是一个消息构造器，InstanceType<...> 就是我们的 TAck
        TAck
    >(msgSend: TReq, msgAckConstructor: AckCtor<TAck>, url: string, encrypt: boolean): Promise<TAck> {
        // @ts-ignore
        const constructor = (msgSend.constructor as any) as {
            N: {
                OpCode: number;
            };
            encode(m: TReq, w?: protobuf.Writer): protobuf.Writer;
        };

        const opCode = constructor.N.OpCode;

        if (DEV && opCode > 65535) {
            Log.Error("非法的消息 Id: ", opCode);
            throw new Error("非法的消息 Id: " + opCode);
        }

        Log.C2S(msgSend);

        const pbWriter = protobuf.Writer.create();

        // 消息格式: 版本号 | OpCode | 消息内容(PB)
        //          1字节 | 2字节   |  n字节

        const headerSize = 3;

        // 写入opcode
        Net.writeUint16(Net.cachedMsgHeaderForHttp, 0, opCode);
        pbWriter.bytes(Net.cachedMsgHeaderForHttp);

        // 写入消息包数据对象
        let encodedData: Uint8Array = constructor["encode"](msgSend, pbWriter).finish();

        // 第0位目前用于协议版本号定义, 它的本来含义是 opCode 的长度, 升级协议版本请写明原因
        encodedData[0] = 1;

        let bodyData: any = {};
        let postParams: any = { isByte: true };

        bodyData.info = StringUtils.uint8ToBase64(encodedData);

        let uint8Buffer = (await this.post({
            url: url,
            data: bodyData,
            params: postParams,
        })) as any;

        if (uint8Buffer.err_code !== undefined) {
            // 服务有错误返回
            throw new Error(uint8Buffer.err_code);
        }

        const ackMsg = msgAckConstructor.decode(uint8Buffer);
        Log.S2C(ackMsg);
        return ackMsg;
    }

    /**
     * 进行 post 请求，发送二进制数据
     * @param args
     */
    postBytes(args: any) {
        let reqHost = (args.host) ? args.host : this.host;
        return Http.post({
            host: reqHost,
            isByte: true,
            respType: "arraybuffer",
            baseParams: {}, //this.baseParams,
            ...args,
        });
    }

    /**
     * 设置是否屏蔽震动
     * @param close
     */
    public setCloseVibrate(close: boolean) {
        this._isCloseVibrate = close;
    }

    // 短震动
    vibrateShort(vibrateType = VibrateType.Light): void {
        if (this._isCloseVibrate) {
            return;
        }
        if (PlatformUtils.isPlatform(Platform.web) && navigator && navigator.vibrate) {
            navigator.vibrate(vibrateType);
        }
        if (PlatformUtils.isPlatform(Platform.wx) && wx.vibrateShort) {
            if (vibrateType == VibrateType.Light) {
                WxSdk.vibrateShort("light");
            } else if (vibrateType == VibrateType.Medium) {
                WxSdk.vibrateShort("medium");
            } else {
                WxSdk.vibrateShort("heavy");
            }
        }
        if (PlatformUtils.isPlatform(Platform.tt) && tt.vibrateShort) {
            TtSdk.vibrateShort();
        }
    }

    // 长震动
    vibrateLong(vibrateType = VibrateType.Long) {
        if (this._isCloseVibrate) {
            return;
        }
        if (PlatformUtils.isPlatform(Platform.web) && navigator && navigator.vibrate) {
            navigator.vibrate(vibrateType);
        }
        if (PlatformUtils.isPlatform(Platform.wx)) {
            WxSdk.vibrateLong();
        }
        if (PlatformUtils.isPlatform(Platform.tt)) {
            TtSdk.vibrateLong();
        }
    }

    public checkUpdateManager(): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.checkUpdateManager();
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // QQs.checkUpdateManager();
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            TtSdk.checkUpdateManager();
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            // AndroidSdk.vibrateShort(vibrateType);
        } else {
            //
        }
    }

    // 复制到剪贴板
    public static copyToClipboard(data: string) {
        // 微信
        if (PlatformUtils.isPlatform(Platform.wx)) {
            WxSdk.setClipboardData(data);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            TtSdk.setClipboardData(data);
        } else if (sys.isBrowser) {
            // H5
            const clipboardObj = navigator.clipboard;
            if (clipboardObj) {
                clipboardObj.writeText(data);
                console.log("h5 copy to clipboard success");
                app.manager.event.get("global").emit("showtoast", '复制成功');
            } else {
                console.log("h5 copy to clipboard failed");
            }
        }
    }

    public static getEnterOptions(): any {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            return WxSdk.getEnterOptions();
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            return null;
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            return null;
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            return null;
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            return null;
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            return null;
        } else {
            return null;
        }
    }

    // 设置 onShow
    public static setOnShow(func?: (res?) => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.setOnShow(func);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            game.on(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            game.on(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            game.on(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            game.on(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            game.on(Game.EVENT_SHOW, func);
        } else {
            game.on(Game.EVENT_SHOW, func);
        }
    }


    // 设置 offShow
    public static setOffShow(func?: (res?) => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.setOffShow(func);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            game.off(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            game.off(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            game.off(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            game.off(Game.EVENT_SHOW, func);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            game.off(Game.EVENT_SHOW, func);
        } else {
            game.off(Game.EVENT_SHOW, func);
        }
    }

    // 设置 onShowOnce 只执行一次
    public static setOnShowOnce(func?: () => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            return WxSdk.setOnShowOnce(func);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // return QQ.setOnShowOnce(func);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            // return KS.setOnShowOnce(func);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            // TT.onShareAppMessage();
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            // AndroidSdk.vibrateShort(vibrateType);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            // return ALIPAY.setOnShowOnce(func);
        } else {
            //
        }
    }

    // 设置 setOnHide
    public static setOnHide(func?: () => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            return WxSdk.setOnHide(func);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // return QQ.setOnHide(func);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            // return KS.setOnHide(func);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            game.on(Game.EVENT_HIDE, func);
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            // AndroidSdk.vibrateShort(vibrateType);
            game.on(Game.EVENT_HIDE, func);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            // return ALIPAY.setOnHide(func);
        } else {
            game.on(Game.EVENT_HIDE, func);
        }
    }

    // 设置 setOffHide
    public static setOffHide(func?: () => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.setOffHide(func);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // QQ.setOffHide(func);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            // KS.setOffHide(func);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            // TT.onShareAppMessage();
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            // AndroidSdk.vibrateShort(vibrateType);
            game.off(Game.EVENT_HIDE, func);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            // ALIPAY.setOffHide(func);
        } else {
            game.off(Game.EVENT_HIDE, func);
        }
    }

    // 设置 setOnHideOnce 只执行一次
    public static setOnHideOnce(func?: () => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            return WxSdk.setOnHideOnce(func);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // return QQ.setOnHideOnce(func);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            // return KS.setOnHideOnce(func);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            // TT.onShareAppMessage();
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            // AndroidSdk.vibrateShort(vibrateType);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            // return ALIPAY.setOnHideOnce(func);
        } else {
            //
        }
    }

    /************************* 子数据域 *************************/

    // 在子域中更新微信排行榜（前缀是 `update-`）(type: 暂时只有 addon 或者空)
    // type 为 addon 的时候，不判断历史最高分，直接累加数量
    public static rankScoreUpdate(rankName: SubContextShowType, scoreObjString: string) {
        if (PlatformUtils.isPlatform(Platform.wx)) {
            WxSdk.wxRankScoreUpdate(rankName, scoreObjString);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // QQ.qqRankScoreUpdate(rankName, scoreObjString, type);
        }
    }
    //展示子域排行榜
    public static ShowSubContext(message:{}) {
        if(PlatformUtils.isPlatform(Platform.tt)) {
            TtSdk.ttShowSubContext(message);
        }else if(PlatformUtils.isPlatform(Platform.wx)) {
            WxSdk.wxShowSubContext(message);
        }
    }

    /************************* 分享 *************************/
    // public static share(message: any, scene: string) {
    //     if (PlatformUtils.isPlatform(Platform.wx)) {
    //         // MMDSdk.mmdShare(message, scene);
    //     } else if (PlatformUtils.isPlatform(Platform.tt)) {
    //         // MMDSdk.mmdShare(message, scene);
    //     }
    // }



    // 设置 右上角分享分享内容
    public static setOnShareAppMessage(info: { title: string; imageUrl: string; query: string; }): void {
        //  Report.event(ReportNames.shareGame, BIShareType.st_system);
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.onShareAppMessage(info);
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            // QQ.onShareAppMessage(info);
        } else if (PlatformUtils.isPlatform(Platform.ks)) {
            // KS.onShareAppMessage(info);
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            // TTask.onShareAppMessage();
        } else if (PlatformUtils.isPlatform(Platform.android)) {
            // AndroidSdk.vibrateShort(vibrateType);
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            // ALIPAY.onShareAppMessage(info);
        } else {
            //
        }
    }

    ///////////////////启动参数///////////////////////////


    /**
     * 获取启动参数
     * @returns {
    *  // 启动小游戏的 query 参数
    *  query: IAnyObject
    *  // 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)
    *  referrerInfo: EnterOptionsGameReferrerInfo
    *  // 启动小游戏的[场景值](https://developers.weixin.qq.com/minigame/dev/devtools/interface/scene.html)
    *  scene: number
    *  // 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型
    *
    *  // 可选值：
    *  // - 1: 微信联系人单聊;
    *  // - 2: 企业微信联系人单聊;
    *  // - 3: 普通微信群聊;
    *  // - 4: 企业微信互通群聊;
    *  chatType?: 1 | 2 | 3 | 4
    *  // shareTicket，详见[获取更多转发信息](#)
    *  shareTicket?: string
    * }
    */
    public static getLaunchOptions(): WechatMinigame.LaunchOptionsGame | null {
        // 冷启动
        let options: WechatMinigame.LaunchOptionsGame | null = null;
        if (PlatformUtils.isPlatform(Platform.wx)) {
            options = WxSdk.getLaunchOptionsSync();
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            //    options = QQ.getLaunchOptionsSync();
        } else if (PlatformUtils.isPlatform(Platform.tt)) {
            // @ts-ignore
            options = TtSdk.getLaunchOptionsSync();
        } else if (PlatformUtils.isPlatform(Platform.xhs)) {
            options = WxSdk.getLaunchOptionsSync();
        }
        return options;
    }

    /**
     * 获取启动参数中的 query.scene 参数
     * @returns launch 启动参数 query.scene 值
     */
    public static getLaunchQueryScene(): string {
        let opts = this.getLaunchOptions();
        if (opts && opts.query && opts.query.scene) {
            return opts.query.scene;
        }
        return "";
    }

    /**
     * 获取启动参数中的 query.scene 参数
     * @returns launch 启动参数 query.scene 值
     */
    public static getLaunchQueryClickId(): string {
        let opts = this.getLaunchOptions();
        if (opts && opts.query && opts.query.clickid) {
            return opts.query.clickid;
        }
        if (opts && opts.query && opts.query.gdt_vid) {
            return opts.query.gdt_vid;
        }
        return "";
    }

    // 设置 onShow
    public static setOnAudioInterruptionBegin(func?: (res?) => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.setOnAudioInterruptionBegin(func);
        } else if(PlatformUtils.isPlatform(Platform.tt))
        {
            TtSdk.setOnAudioInterruptionBegin(func);
        }
    }

    public static setOnAudioInterruptionEnd(func?: (res?) => void): void {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            WxSdk.setOnAudioInterruptionEnd(func);
        } else if(PlatformUtils.isPlatform(Platform.tt))
        {
            TtSdk.setOnAudioInterruptionEnd(func);
        }
    }

    //获取菜单按钮
    public static GetMenuBottom():number
    {
        if (PlatformUtils.isPlatform(Platform.wx) || PlatformUtils.isPlatform(Platform.xhs)) {
            return WxSdk.MenuRect().bottom;
        } else if(PlatformUtils.isPlatform(Platform.tt))
        {
            return TtSdk.MenuRect().bottom;
        }
        return 0;
    }

    /** 获取操作系统信息 */
    public static GetSystemInfo():{system:string,platform:string}{
       if(PlatformUtils.isPlatform(Platform.wx))
       {
           if(wx.getDeviceInfo)
           {
               const info = wx.getDeviceInfo();
               return {system:info.system,platform:info.platform}
           }
           return {system:"0",platform:"wx"};
       }else if(PlatformUtils.isPlatform(Platform.tt))
       {
          if(tt.getSystemInfoSync)
          {
              const info = tt.getSystemInfoSync();
              return {system:info.system,platform:info.platform}
          }
          return {system:"0",platform:"tt"};
       }
       return {system:"0",platform:"web"};
    }
    /** 获取iOS16版本 */
    public static IsiOS16Version():boolean
    {
        const {system:sys,platform:plat} = this.GetSystemInfo();
        if(!plat || !sys)
            return false;
        if(plat.toLowerCase() != "ios")
            return false;
        const array:string[] = sys.split(" ");
        let version = array.length == 1 ? array[0] : (array.length > 1 ? array[1] : "0");

        if (version.startsWith("16")) {
            console.log("是 iOS 16.x 版本");
            return true;
        }
        return false;
    }

    /**
     * 下载文件
     * @param remoteUrl 远程文件路径
     * @param success 成功回调
     * @param fail 失败回调
     */
    public static downloadFile(remoteUrl:string,success:(filePath:string)=>void,fail:(err:any)=>void)
    {
        if (PlatformUtils.isPlatform(Platform.wx)) {
           wx.downloadFile({
               url: remoteUrl,
               timeout: 30000, // 30秒超时
               success: (result) => {
                   if (result.statusCode === 200) {
                       success?.(result.tempFilePath);

                   } else {
                       Log.Warn(`下载返回HTTP错误状态码: ${result.statusCode}`);
                       fail?.(result.statusCode);
                   }
               },
               fail: (res) => {
                   Log.Warn(`下载网络错误: ${res.errMsg}`);
                   fail?.(res.errMsg || '网络错误');
               }
           })
        } else if(PlatformUtils.isPlatform(Platform.tt))
        {
            tt.downloadFile({
                url: remoteUrl,
                success: (result) => {
                    if (result.statusCode === 200) {
                        success?.(result.tempFilePath);
                    } else {
                        Log.Warn(`下载返回HTTP错误状态码: ${result.statusCode}`);
                        fail?.(result.statusCode);
                    }
                },
                fail: (res) => {
                    Log.Warn(`下载网络错误: ${res.errMsg}`);
                    fail?.(res.errMsg || '网络错误');
                }
            })
        }else{
            fail?.(404);
        }
    }

    /**
     * 同步访问文件
     * @param remoteUrl 远程文件路径
     */
    public static accessFileSync(remoteUrl:string):boolean
    {
        if (PlatformUtils.isPlatform(Platform.wx)) {
            if(wx.getFileSystemManager)
            {
                try {
                    const fs = wx.getFileSystemManager();
                    fs.accessSync(remoteUrl);
                    return true;
                } catch(e) {
                    console.error(e)
                    return false;
                }
            }

        } else if(PlatformUtils.isPlatform(Platform.tt))
        {
            if(tt.getFileSystemManager)
            {
                try {
                    const fs = tt.getFileSystemManager();
                    fs.accessSync(remoteUrl);
                    return true;
                } catch(e) {
                    console.error(e)
                    return false;
                }
            }
        }
        return false;
    }
}
