
declare namespace tt {

    /** 转发内容类型 */
    export enum ShareChannel {
        /** 默认分享方式, channel 为空字符串或者不传 */
        DEFAULT = "",
        /** 拉起邀请面板分享游戏给好友 */
        INVITE = "invite",
        /** 发布视频内容 */
        VIDEO = "video",
        /** 口令分享，生成一串特定的字符串文本 */
        TOKEN = "token",
        /** 发布图文内容 */
        ARTICLE = "article",
        /** 发布图文内容，内容由接口参数直接传入 */
        PICTURE = "picture"
    }

    /** channel = video 时，可以通过 extra 设置以下附加信息 */
    export interface ChannelVideoExtraInfo {
        /** 是否支持跳转到播放页， 以及支持获取视频信息等接口 （为 true 时会在 success 回调中带上 videoId） */
        withVideoId?: boolean;
        /** 视频地址 ，分享一个本地视频。如果 videoPath 不传入会拉起摄像头拍摄界面 */
        videoPath?: string;
        /** 视频话题(仅抖音支持) ，目前由 hashtag_list 代替 (即将废弃，为保证兼容性，建议同时设置hashtag_list) */
        videoTopics?: string[];
        /** 是否分享为挑战视频 ( 仅头条支持 ) */
        createChallenge?: boolean;
        /** 生成输入的默认文案 */
        video_title?: string;
        /** 视频话题，字符串中间包含空格会取第一个空格前内容作为话题(仅抖音支持) */
        hashtag_list?: string[];
        /** 分享视频的标签，可以结合获取
         * [抖音视频排行榜](https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/operation1/ability/-open/function-get-video-list)
         * 使用
         */
        videoTag?: string;
        /** 抖音 pgc 音乐的短链(仅抖音支持，需要基础库版本大于 1.90) 。形如https://v.douyin.com/JmcxWo8/
         * 参考[抖音小游戏录屏带配乐能力](https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/operation1/ability/gain-user/record-with-bgm)
         */
        defaultBgm?: string;
        /** 抖音上可用的剪映模板 ID
         * 参考 [录屏添加剪映视频模板能力](https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/operation1/ability/gain-user/capcut-with-game)
         */
        cutTemplateId?: string;
        /** 剪映模板不可用时，是否允许继续分享 */
        abortWhenCutTemplateUnavailable?: boolean;
    }

    /** channel = picture 时，可以通过 extra 设置以下附加信息 */
    export interface ChannelPictureExtraInfo {
        /** 图片地址，仅支持本地图片路径（即游戏包内路径和ttfile://路径） */
        picturePath: string[];
        /** 作品标题 */
        contentTitle?: string;
        /** 作品描述信息 */
        contentDescription?: string;
        /** 视频话题，字符串中间包含空格会取第一个空格前内容作为话题 */
        hashtag_list?: string[];
    }

    /** 开发者最终传递给发布器的数据，可以根据约定传入部分自定义数据。 */
    export interface ShareParam {
        /** 转发内容类型 */
        channel?: ShareChannel | string;
        /** 分享素材模板 id，指定通过平台审核的 templateId 来选择分享内容，需在平台设置且通过审核。
         * 参考[拍摄视频并发布至抖音](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/open-capacity/operation/film-douyin) */
        templateId?: string;
        /** 分享文案，不传则默认使用后台配置内容或游戏简介 */
        desc?: string;
        /** 转发标题，不传则默认使用后台配置或当前小游戏的名称 */
        title?: string;
        /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径，显示图片长
         * 宽比推荐 5:4，不传则默认使用小游戏icon，当channel = video | picture时，该字段不生效 */
        imageUrl?: string;
        /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 tt.getLaunchOptionsSync
         * 或 tt.onShow 获取启动参数中的 query用来实现信息透传
         */
        query?: string;
        /** 附加信息（仅channel == video | picture 时生效） */
        extra?: ChannelVideoExtraInfo | ChannelPictureExtraInfo;
        /** 分享成功后执行的回调函数 */
        success?: Function;
        /** 分享失败或者用户取消发布器后执行的回调函数 */
        fail?: Function;
        /** 分享完成（无论成功与否）后执行的回调函数 */
        complete?: Function;
    }

    /** 主动调用转发相关方法（拉起发布器、好友邀请、录屏分享等） */
    export function shareAppMessage(options: ShareParam): void;

    /** 显示当前小游戏页面的转发按钮。转发按钮位于小游戏页面右上角的“更多”中。
     * @param options
     * success  Function    接口调用成功的回调函数\
     * fail     Function    接口调用失败的回调函数\
     * complete Function    接口调用结束的回调函数（调用成功、失败都会执行）
     *
     * * success callback\
     * errMsg   string      'showShareMenu:ok'
     *
     * * fail callback\
     * errMsg   string      'showShareMenu:fail'
     */
    export function showShareMenu(options: Object): void;

    export interface createContactMessage {
        type: sring;
        image?: string; // 可选属性
        text?: string;
        style: ButtonStyle;
        success?: (res: any) => void; // 可选属性
        fail?: (res: any) => void; // 可选属性
        complete?: (res: any) => void; // 可选属性 
    }

    export function createContactButton(options: createContactMessage): void;

    export interface createGameStation {
        path?: sring;
        extraData?: object;
        envVersion?: enum;
        appId: string;
        success?: (res: any) => void; // 可选属性
        fail?: (res: any) => void; // 可选属性
        complete?: (res: any) => void; // 可选属性 
    }

    export function navigateToMiniProgram(options: createGameStation): void;

    export interface ButtonStyle {
    }
    export function openCustomerServiceConversation(options: any): void;
    /* ******** ******** ******** ******** ******** *
     * ******** ******** **录屏** ******** ******** *
     * ******** ******** ******** ******** ******** */

    /** 获取全局唯一的录屏管理器 ，该功能只能录制到小游戏全局唯一的上屏 canvas 上的内容，即开发者逻辑所绘制的内容。其他的包括客服按钮，任何类型的广告，以及 showToast 等 API 展示的 native 内容，都无法被录制到。 */
    export function getGameRecorderManager(): GameRecorderManager;

    /** 全局唯一的录屏管理器。通过tt.getGameRecorderManager获取。 */
    export interface GameRecorderManager {
        /** 开始录屏
         * @param options
         * duration     number  (10)录屏的时长，单位 s，必须大于 3s，最大值 300s（5 分钟）。\
         * isMarkOpen   boolean (true)是否添加水印，会在录制出来的视频上添加默认水印，目前不支持自定义水印图案。\
         * locTop       number  (0)水印距离屏幕上边界的位置，单位为 dp。\
         * locLeft      number  (0)水印距离屏幕左边界的位置，单位为 dp。\
         * frameRate    number  (30)设置录屏帧率，对于性能较差的手机可以调低参数以降低录屏性能消耗。
         */
        start(options: Object): void;
        /** 监听录屏开始事件*/
        onStart(callback: Function): void;
        /** 暂停录屏 */
        pause(): void;
        /** 监听录屏暂停事件 */
        onPause(callback: Function): void;
        /** 继续录屏 */
        resume(): void;
        /** 监听录屏继续事件 */
        onResume(callback: Function): void;
        /** 停止录屏*/
        stop(): void;
        /** 监听录屏停止事件
         * @param callback Object \
         * videoPath    string  录屏文件的临时路径
         */
        onStop(callback: Function): void;
        /** 记录精彩的视频片段，调用时必须是正在录屏，以调用时的录屏时刻为基准，指定前 x 秒，后 y 秒为将要裁剪的片段，
         * 可以多次调用，记录不同时刻。在结束录屏时，可以调用 clipVideo 接口剪辑并合成记录的片段。
         * @param options
         * timeRange    Array       ([3, 3])数组的值表示记录这一时刻的前后时间段内的视频，单位是 s\
         * success      Function    接口调用成功的回调函数\
         * fail         Function    接口调用失败的回调函数\
         * complete     Function    接口调用结束的回调函数（调用成功、失败都会执行）
         *
         * * success callback Object \
         * index        number      裁剪片段的唯一索引，用于 tt.clipVideo 接口调用时指定裁剪拼接顺序。
         */
        recordClip(options: Object): void;
        /** 剪辑精彩的视频片段。
         * @param options
         * path         string      [***必填***]path 的值为停止录屏拿到的视频地址\
         * timeRange    Array       裁剪的范围，用法含义与recordClip 中的timeRange，完全相同，只是记录时相对的当前时刻规定为录屏结束时刻\
         * clipRange    Array       指定要裁剪的范围，数组中每一项为调用 recordClip 得到返回值\
         * success      Function    接口调用成功的回调函数\
         * fail         Function    接口调用失败的回调函数\
         * complete     Function    接口调用结束的回调函数（调用成功、失败都会执行）
         */
        clipVideo(options: Object): void;
        /** 监听录屏错误事件
         * @param callback err\
         * errMsg   string  录屏错误的信息
         */
        onError(callback: Function): void;
        /** 监听录屏中断结束 */
        onInterruptionBegin(callback: Function): void;
        /** 监听录屏中断开始 */
        onInterruptionEnd(callback: Function): void;
        /** 获取录屏水印图像的宽高值
         * @returns
         * markWidth    number      水印的宽度\
         * markHeight   number      水印的高度
         */
        getMark(): Object;
    }

    /* ******** ******** ******** ******** ******** *
     * ******** ******** **广告** ******** ******** *
     * ******** ******** ******** ******** ******** */

    /** 创建 Banner 广告实例。
     * @param options Object \
     * adUnitId     string      [***必填***]广告位 id\
     * adIntervals  number      广告自动刷新的间隔时间，单位为秒，参数值必须大于等于 30（该参数不传入时 Banner 广告不会自动刷新）\
     * style        object      广告位区域，包括left、top、width字段
     */
    export function createBannerAd(options: Object): BannerAd;

    /** 通过tt.createBannerAd创建的广告实例。 */
    export interface BannerAd {
        /** 展现广告 */
        show(): Promise<T>;
        /** 隐藏广告 */
        hide(): void;
        /** 监听加载事件 */
        onLoad(callback: Function): void;
        /** 取消监听加载事件 */
        offLoad(callback: Function): void;
        /** 监听错误事件
         * * error callback\
         * errMsg   string      错误信息
         * errCode  number      错误码
         */
        onError(callback: Function): void;
        /** 取消监听错误事件 */
        offError(callback: Function): void;
        /** 监听 resize 事件 */
        onResize(callback: Function): void;
        /** 取消监听 resize 事件 */
        offResize(callback: Function): void;
        /** 销毁广告实例 */
        destroy(): void;
    }

    /** 创建 Video 广告实例。
     * @param options Object \
     * adUnitId             string      [***必填***]广告位 id，后续可以在平台基于广告位id看数\
     * multiton             boolean     (false)是否开启再得广告模式（只支持安卓系统的抖音和抖音极速版）\
     * multitonRewardMsg    string[]    [***multiton为true时必填***]再得广告的奖励文案，玩家每看完一个广告都会展示，如【再看1个获得xx】，xx就multitonRewardMsg中的文案，按顺序依次展示，单个文案最大长度为 7\
     * multitonRewardTimes  number      [***multiton为true时必填***]额外观看广告的次数，合法的数据范围为1-4\
     * progressTip          boolean     (false)是否开启进度提醒，开启时广告文案为【再看N个获得xx】，关闭时为【再看1个获得xx】
     */
    export function createRewardedVideoAd(options: Object): RewardedVideoAd;

    /** 创建激励视频广告的入参对象 */
    export interface CreateRewardedVideoAdOptions {
        /** 广告位 id */
        adUnitId: string;
        /** 是否开启再得广告模式 */
        multiton?: boolean;
        /** 再得广告奖励文案 */
        multitonRewardMsg?: string[];
        /** 额外观看广告次数 (1-4) */
        multitonRewardTimes?: 1 | 2 | 3 | 4;
        /** 是否开启进度提醒 */
        progressTip?: boolean;
    }

    /** 广告错误回调参数 */
    export interface RewardedAdError {
        /** 错误码：errCode */
        errCode: number;
        /** 错误信息：errMsg */
        errMsg: string;
    }

    /** 广告关闭回调参数 */
    export interface AdCloseResult {
        /** 用户是否完整观看了视频 */
        isEnded: boolean;
        /** 用户完整观看了几次视频 */
        count: number;
    }

    /** 全局唯一的视频广告实例，通过tt.createRewardedVideoAd来创建。 */
    export interface RewardedVideoAd {
        /** 展现广告 */
        show(): Promise<RewardedAdError>;
        /** 监听加载事件 */
        onLoad(callback: (err: RewardedAdError) => void): void;
        /** 取消监听加载事件 */
        offLoad(callback: (err: RewardedAdError) => void): void;
        /** 加载广告 */
        load(): Promise<RewardedAdError>;
        /** 监听错误事件 */
        onError(callback: (err: RewardedAdError) => void): void;
        /** 取消监听错误事件 */
        offError(callback: (err: RewardedAdError) => void): void;
        /** 监听关闭事件 */
        onClose(callback: (res: AdCloseResult) => void): void;
        /** 取消监听关闭事件 */
        offClose(callback: (res: AdCloseResult) => void): void;
        /** 销毁广告实例 */
        destroy(): Promise<RewardedAdError>;
    }

    /** 创建插屏广告实例。
     * @param options
     * adUnitId     string      [***必填***]广告单元 id
     */
    export function createInterstitialAd(options: Object): InterstitialAd;

    /** 插屏广告实例。通过tt.createInterstitialAd方法获取。 */
    export interface InterstitialAd {
        /** 展现广告 */
        show(): Promise<T>;
        /** 监听加载事件 */
        onLoad(callback: Function): void;
        /** 取消监听加载事件 */
        offLoad(callback: Function): void;
        /** 加载广告 */
        load(): Promise<T>;
        /** 监听错误事件
         * * error callback Object \
         * errMsg   string      错误信息\
         * errCode  number      错误码
         */
        onError(callback: Function): void;
        /** 取消监听错误事件 */
        offError(callback: Function): void;
        /** 监听关闭事件 */
        onClose(callback: Function): void;
        /** 取消监听关闭事件 */
        offClose(callback: Function): void;
        /** 销毁广告实例 */
        destroy(): void;
    }

    /* ******** ******** ******** ******** ******** *
     * ******** ******** **侧边栏* ******** ******** *
     * ******** ******** ******** ******** ******** */

    /** 确认当前宿主版本是否支持跳转某个小游戏入口场景，目前仅支持「侧边栏」场景。
     * @param options
     * scene    string      [***必填***]需要确认的入口场景（目前仅支持的入参为'sidebar'）\
     * success  Function    接口调用成功的回调函数\
     * complete Function    接口调用结束的回调函数（调用成功、失败都会执行）\
     * fail     Function    接口调用失败的回调函数
     *
     * * success callback Object \
     * isExist  boolean     仅回调成功有，用于判断入口场景是否存在。\
     * errMsg   string      恒为'checkScene:ok'
     *
     * * fail callback Object \
     * errMsg   string      以'checkScene:fail'开头\
     * errNo    number      错误码
     */
    export function checkScene(options: Object): void;

    /** 调用该API可以跳转到某个小游戏入口场景，目前仅支持跳转「侧边栏」场景。
     * @param options
     * scene    string      [***必填***]需要确认的入口场景（目前仅支持的入参为'sidebar'）\
     * success  Function    接口调用成功的回调函数\
     * complete Function    接口调用结束的回调函数（调用成功、失败都会执行）\
     * fail     Function    接口调用失败的回调函数
     *
     * * success callback Object\
     * errMsg   string      恒为'navigateToScene:ok'
     *
     * * fail callback Object\
     * errMsg   string      以'navigateToScene:fail'开头\
     * errNo    number      错误码
     */
    export function navigateToScene(options: Object): void;
    // export function navigateToScene(options: { scene: string, success?: Function, fail?: Function, complete?: Function }): void;

    /** 获取全局唯一的版本更新管理器，用于管理小游戏更新。
     * 小游戏发布新版本后不是立即生效，在个别情况会比较慢。
     * 如果想做到立即更新，可以接入该主动更新的能力。
     */
    export function getUpdateManager(): UpdateManage;

    /** 小程序版本更新管理器对象，tt.getUpdateManager方法返回值。 */
    export interface UpdateManage {
        /** 版本信息请求完成的回调
         * @param callback Object \
         * hasUpdate    boolean     是否有新的版本
         */
        onCheckForUpdate(callback: Function): void;
        /** 新版本下载成功的回调
         * @param callback Object \
         * confirm
         */
        onUpdateReady(callback: Function): void;
        /** 新版本下载失败的回调
         * @param callback string 版本更新失败原因
         */
        onUpdateFailed(callback: Function): void;
        /** 应用新版本 */
        applyUpdate(): void;
    }


    export function showToast(options: Object): void;

    export function createGridGamePanel(options: Object): any;

    export function onKeyboardComplete(callback: (data) => void): void;
    export function offKeyboardComplete(callback: (data) => void): void;
    export function onKeyboardInput(callback: (data) => void): void;
    export function offKeyboardInput(callback: (data) => void): void;

    export function uploadFile(args: any): void;
    export function getSystemInfo(args: any): void;
    export function openCustomerServiceConversation(args: any): void;

    export interface ShowModalOption {
        /** 标题 */
        title?: string;
        /** 内容 */
        content?: string;
        /** 确定按钮的文案，最多 4 个字符 */
        confirmText?: string; // 确定
        /** 是否显示取消按钮 */
        showCancel?: boolean; // true
        /** 取消按钮的文案，最多 4 个字符 */
        cancelText?: string; // 取消
        /** 接口调用成功的回调函数 */
        success?: function;
        /** 接口调用失败的回调函数 */
        fail?: function;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: function;

    }
    export function showModal(option: ShowModalOption);

    export function vibrateShort(args: any);
    export function vibrateLong(args: any);
    /** 登录成功回调参数 */
  export interface LoginSuccessResult {
    /** 临时登录凭证, 有效期 3 分钟。用于换取 openid 和 session_key */
    code: string;
    /** 用于标识当前设备, 无论登录与否都会返回, 有效期 3 分钟 */
    anonymousCode: string;
    /** 判断在当前 APP（头条、抖音等）是否处于登录状态 */
    isLogin: boolean;
    /** 错误信息，固定为 "login:ok" */
    errMsg: "login:ok";
  }

  /** 登录失败回调参数 */
  export interface LoginFailResult {
    /** 错误信息，格式为 "login:fail " + 详细原因 */
    errMsg: string;
  }

  /** 登录接口入参对象 */
  export interface LoginOptions {
    /** 未登录时, 是否强制调起登录框。默认 true */
    force?: boolean;
    /** 接口调用成功的回调函数 */
    success?: (res: LoginSuccessResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (res: LoginFailResult) => void;
    /** 接口调用结束的回调函数 */
    complete?: (res: LoginSuccessResult | LoginFailResult) => void;
  }

  /**
   * 调用接口获取临时登录凭证（code）。
   * 1.0.0+
   */
  function login(options?: LoginOptions): void;
    export function checkSession(args: any);
    export interface AuthSetting { }
    export function openSetting(args: any);
    export function authorize(args: any);
    export function setClipboardData(args: any);
    export function getClipboardData(args: any);
    export function openAwemeUserProfile(args: any);
    export function getSystemInfoSync();
    export function addShortcut(args: any);
    export function onMoreGamesModalClose(args: any);
    export function onNavigateToMiniGameBox(args: any);
    export function getLaunchOptionsSync();
    export function showMoreGamesModal(args: any);
    export function saveImageToPhotosAlbum(args: any);
    export function setImRankData(args: any);
    export function getImRankList(args: any);
    export function checkFollowAwemeState(args: any);
    export function openAwemeCustomerService(args: any);
    export function requestGamePayment(args: any);
    export function canIUse(args: any);
    
    /** 内存不足告警事件回调参数 */
    export interface OnMemoryWarningRes {
        /** 内存告警等级 (仅 Android 有该字段)
         * 5: TRIM_MEMORY_RUNNING_MODERATE
         * 10: TRIM_MEMORY_RUNNING_LOW
         * 15: TRIM_MEMORY_RUNNING_CRITICAL
         */
        level?: number;
    }

    /** 注册监听内存不足告警事件 */
    export function onMemoryWarning(callback: (res: OnMemoryWarningRes) => void): void;

    /** 取消监听内存不足告警事件 */
    export function offMemoryWarning(callback?: (res: OnMemoryWarningRes) => void): void;


    /** 插屏广告实例。通过tt.createInterstitialAd方法获取。 */
    export interface ReportSceneOption {
        // ​场景ID，登录抖音开放平台，进入「数据」-「性能分析」-「启动监控」-「启动场景配置」模块，添加游戏的自定义启动场景。 游戏每次启动只可以上报一次​
        sceneId: number;
        // 场景耗时，单位ms
        costTime: number = 0;
        /** 自定义维度数据。只支持能够通过 JSON.stringify 序列化的对象，且序列化后长度不超过 1024 个字符 ​ */
        dimension?: object;
        /** 自定义指标数据。只支持能够通过 JSON.stringify 序列化的对象，且序列化后长度不超过 1024 个字符 ​ */
        metric?: object;
        /** 接口调用成功的回调函数\
         *  data    object  开发者上报的原始数据\
         *  errMsg  string  "reportScene:ok"
         */
        success?: function;
        /** 接口调用失败的回调函数\
         *  errMsg  string  "reportScene:fail" + 详细错误信息
         * 
         *  errNo / errMsg\
         *  20001\
         *  params.${key} should be ${expect_type}, but got ${actual_value}​\
         *  参数数据类型校验，请根据「参数说明」检查对应字段传参情况\
         *  20001\
         *  report sceneId:${scene_id} repeatedly​\
         *  同一个场景 ID 重复上报，游戏每次启动只可以上报一次​\
         *  20001\
         *  params.dimension.${key} needs to be a string type and a non-empty string​\
         *  dimension 中每个字段需要为非空字符串​\
         *  20001\
         *  params.metric.${key} needs to be a numeric value of type string​\
         *  metric 中每个字段需要为非空字符串且可以 parse 为非 NaN 数字​\
         *  20001\
         *  params.${key} cannot exceed 1024 characters​\
         *  dimension / metric 字段 stringify 后字符串长度不可超过 1024​\
         *  20001\
         *  failed to serialize params.${} by JSON.stringify​\
         *  dimension / metric 对象 stringify 失败​\
         */
        fail?: function;
        /** 接口调用结束的回调函数（调用成功、失败都会执行）*/
        complete?: function;
    }
    export function reportScene(option: ReportSceneOption);

    export interface CheckFeedSubscribeStatusOption {
        /** 订阅的场景 ID（非全场景下必传）\
         * 1: 离线收益场景\
         * 2: 体力恢复场景\
         * 3: 重要事件掉落
         */
        scene?: number;
        /** 是否为全场景订阅 */
        allScene?: boolean;
        /** 订阅 Feed 流的类型，目前只支持传 'play' */
        type: 'play'; // enum;
        /** 接口调用成功的回调函数 */
        success?: function;
        /** 接口调用失败的回调函数 */
        fail?: function;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: function;
    }
    export function checkFeedSubscribeStatus(option: CheckFeedSubscribeStatusOption);

    export interface RequestFeedSubscribeOption {
        /** 订阅的场景 ID（非全场景下必传）\
         * 1: 离线收益场景\
         * 2: 体力恢复场景\
         * 3: 重要事件掉落
         */
        scene?: number;
        /** Array<string>，自定义文案 contentID 数组（非全场景下必传），contentID 在后台申请开通直玩能力后可获取 */
        contentIDs?: Arrya<string>;
        /** 是否为全场景订阅 */
        allScene?: boolean;
        /** 订阅 Feed 流的类型，目前只支持传 'play' */
        type: 'play'; // enum;
        /** 接口调用成功的回调函数 */
        success?: function;
        /** 接口调用失败的回调函数 */
        fail?: function;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: function;
    }
    export function requestFeedSubscribe(options: RequestFeedSubscribeOption);

    export interface Canvas {
        /**
         * 主动释放 canvas 的资源，释放后绑定的 context 将无法使用
         * @since 1.31.0
         */
        dispose(): void;

        /**
         * 将当前 Canvas 保存为一个临时文件，并生成相应的临时文件路径。
         * 配置开启开放数据域后，主域所有 canvas 不能调用该接口
         * @since 1.31.0
         */
        toTempFilePath(options: any, callback?: (res: { tempFilePath: string }) => void): void;

        /**
         * toTempFilePath 方法的同步版本，参数与 toTempFilePath 的参数相同，
         * 返回值为 string 类型的临时文件路径。
         * 配置开启开放数据域后，主域所有 canvas 不能调用该接口
         * @since 1.31.0
         */
        toTempFilePathSync(options: any): string;

        /**
         * 画布的宽度
         * @since 1.31.0
         */
        width: number;

        /**
         * 画布的高度
         * @since 1.31.0
         */
        height: number;

        /**
         * 获取画布对象的绘图上下文
         * @since 1.31.0
         */
        getContext(type: string): any;

        /**
         * 把画布上的绘制内容以一个 string 的格式返回。
         * 配置开启开放数据域后，主域所有 canvas 不能调用该接口
         * @since 1.31.0
         */
        toDataURL(): string;
    }


    /**** 抖音开放数据域相关的数据和接口 start  ****/

    export type PostMessageParams = Record<string | number, number | string | boolean | undefined | null>;

    export interface OpenDataContext {
        canvas: Canvas
        postMessage: (param: PostMessageParams) => void;
    }

    export function getOpenDataContext(): OpenDataContext;

    interface SetImRankDataOptions {
        /**
         * 预留字段
         * @since 2.70.0
         */
        extra?: string;

        /**
         * 用于判断权重，仅当 dataType 为 1 时需要，不传则使用默认值 0。
         * 如传入 value 为 '白银'，priority 为 2，则白银的权重为 2；
         * 传入 value 为 '黄金'，priority 为 3，则黄金的权重为 3，高于白银。
         * @since 2.70.0
         */
        priority?: number;

        /**
         * 排行榜分区标识，取值可以是 'default' 或 'test' 或其他开发者自定义的分区标识。
         * 'default' 表示为默认的线上分区，'test' 表示测试分区。
         * 不同分区的排行榜数据存在数据隔离。
         * 目前每个小游戏除了 default 和 test，最多可支持 10 个分区。
         * @since 3.5.0
         */
        zoneId?: string;

        /**
         * 展示出来的数值。
         * - 当 dataType 为 0 时，只能传正数的字符串（如 '103', '105'），且取值范围为 [0, int32_MAX)。
         * - 当 dataType 为 1 时，则可传入任意字符串（如 '青铜', '白银'）。
         * @since 2.70.0
         */
        value: string;

        /**
         * 数据类型，可选值为 0 或 1。
         * - 0 表示数据为数字类型，适用于游戏的通关分数。
         * - 1 表示数据为字符串类型，适用于段位信息。
         * @since 2.70.0
         */
        dataType: 0 | 1;

        /**
         * 接口调用成功的回调函数
         * @since 2.70.0
         */
        success?: (res: { errMsg: "setImRankData:ok" }) => void;

        /**
         * 接口调用失败的回调函数
         * @since 2.70.0
         */
        fail?: (err: { errMsg: string }) => void;

        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）
         * @since 2.70.0
         */
        complete?: (res: { errMsg: string }) => void;
    }

    /**
     * 设置即时排行榜数据
     * @since 2.70.0
     */
    function setImRankData(options: SetImRankDataOptions): void;

    interface SetImRankDataErrorCodes {
        20001: "invalid param"; // 参数错误
        20000: "暂不支持该能力";
        21104: "zone num exceeds limit"; // 分区数量超出限制
        21101: "user not login"; // 用户未登录
        21102: "小游戏框架内部错误，有需要请创建工单咨询";
        21103: "小游戏框架内部错误，有需要请创建工单咨询";
        10301: "feature is not supported in app setRankData"; // 不支持在 app 中调用 setRankData
        10601: "not login"; // 用户未登录
    }

    // RankResItem 类型定义
    interface RankResItem {
        /**
         * 数据类型，可选值：0 或 1。
         * - 0 代表 value 为数字类型。
         * - 1 代表 value 为枚举名称。
         * @since 2.70.0
         */
        data_type: 0 | 1;

        /**
         * 分数值或枚举名称，代表分数值时只能传正数。
         * @since 2.70.0
         */
        value: string;

        /**
         * data_type === 1 时有意义，返回值为正整数，表示枚举名称对应的权重。
         * @since 2.70.0
         */
        priority?: number;

        /**
         * 传入的附加字段，小游戏只负责透传。
         * @since 2.70.0
         */
        extra?: string;

        /**
         * 用户头像。
         * @since 2.70.0
         */
        user_img: string;

        /**
         * 用户昵称。
         * @since 2.70.0
         */
        nick_name: string;

        /**
         * 用户的 openid。
         * @since 2.70.0
         */
        openid: string;

        /**
         * Unix 秒级时间戳。
         * @since 2.70.0
         */
        utime: number;

        /**
         * 加密后的 uid。
         * @since 2.70.0
         */
        sec_uid: string;
    }

    // self_item 类型定义
    interface SelfItem {
        /**
         * RankResItem 类型。
         * @since 2.70.0
         */
        item: RankResItem;

        /**
         * 从 1 开始的排序，返回 0 表示不在排行榜内。
         * @since 2.70.0
         */
        rank: number;

        /**
         * 隐私设置，0：所有人可见，1：仅好友可见，2：仅自己可见。
         * @since 2.70.0
         */
        private_setting: 0 | 1 | 2;
    }

    // self_user_info 类型定义
    interface SelfUserInfo {
        /**
         * 用户 openid。
         * @since 2.70.0
         */
        openid: string;

        /**
         * 加密后的 sec_uid。
         * @since 2.70.0
         */
        sec_uid: string;

        /**
         * 用户头像。
         * @since 2.70.0
         */
        user_img: string;

        /**
         * 用户昵称。
         * @since 2.70.0
         */
        nick_name: string;
    }

    // getImRankData 的返回数据类型定义
    interface GetImRankDataResponse {
        /**
         * 接口调用结果。
         * @since 2.70.0
         */
        data: {
            /**
             * 获取的榜单数据，Array<RankResItem> 类型。
             * @since 2.70.0
             */
            items: RankResItem[];

            /**
             * 用户个人信息。
             * @since 2.70.0
             */
            self_user_info: SelfUserInfo;

            /**
             * 请求者自己的数据。
             * @since 2.70.0
             */
            self_item: SelfItem;

            /**
             * 页码，从 1 开始。
             * @since 2.70.0
             */
            page_num: number;

            /**
             * 总条数。
             * @since 2.70.0
             */
            total_num: number;
        };

        /**
         * 错误信息。
         * @since 2.70.0
         */
        errMsg: "getImRankData:ok";
    }

    // getImRankData 的参数类型定义
    interface GetImRankDataOptions {
        /**
         * 排行榜分区标识，取值可以是 'default' 或 'test' 或其他开发者自定义字符串。
         * 'default' 表示为默认的线上分区，不同分区的排行榜数据存在数据隔离。
         * @since 2.70.0
         */
        zoneId?: string;

        /**
         * 数据类型，可选值：0 或 1。
         * - 0 表示返回数据被解析为 number。
         * - 1 表示返回数据被解析为 string。
         * @since 2.70.0
         */
        dataType: 0 | 1;

        /**
         * 排行榜类型。
         * @since 2.70.0
         */
        relationType: "friend" | "all";

        /**
         * 每页长度，大于 0 小于 40。
         * @since 2.70.0
         */
        pageSize: number;

        /**
         * 可选值：day、week、month、all。
         * @since 2.70.0
         */
        rankType: "day" | "week" | "month" | "all";

        /**
         * 页码，从 1 开始。
         * @since 2.70.0
         */
        pageNum: number;

        /**
         * 接口调用成功的回调函数。
         * @since 2.70.0
         */
        success?: (res: GetImRankDataResponse) => void;

        /**
         * 接口调用失败的回调函数。
         * @since 2.70.0
         */
        fail?: (err: { errMsg: string }) => void;

        /**
         * 接口调用结束的回调函数（调用成功、失败都会执行）。
         * @since 2.70.0
         */
        complete?: (res: { errMsg: string }) => void;
    }

    /**
     * 获取即时排行榜数据。
     * @since 2.70.0
     */
    function getImRankData(options: GetImRankDataOptions): void;

    // 错误码声明
    interface GetImRankDataErrorCodes {
        20000: "暂不支持该能力";
        20001: "invalid param"; // 参数错误
        21101: "user not login"; // 用户未登录
        21103: "internal error"; // 小游戏框架内部错误
        21102: "小游戏框架内部错误，有需要请创建工单咨询";
        21104: "zone num exceeds limit"; // 分区数量超出限制
        10301: "feature is not supported in app xxx"; // 不支持在 app 中调用
        10601: "not login"; // 用户未登录
    }


    /**** 抖音开放数据域相关的数据和接口 end  ****/

}
