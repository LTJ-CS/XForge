import { DEV } from "cc/env";
import { app } from "db://assets/app/app";
import { getEnvConfig } from "db://assets/script/build_config/Env";
import BuildInfo from "db://assets/script/BuildInfo";
import PlatformUtils, { Platform } from "db://assets/script/PlatformUtils";

export enum ReportKey {
    // ========= 雷霆需求的打点 =========
    register = 0, // 注册
    login, // 登陆
    // ============= 游戏相关打点 ===========
    game_start, // 游戏开始
    // ============= 广告相关打点 ===========
    ad_start,
    ad_end,
    ad_fail,
    // ============= 关卡相关 ===========
    ai_fail,
    fatal_error, // 灾难性的错误
}

const env = getEnvConfig(); // 获取当前环境配置

export default class Report {
    private static _instance: Report = null!;
    private static _ta: ThinkingAnalyticsAPI = null!;

    public static get instance(): Report {
        if (!this._instance) {
            this._instance = new Report();
        }
        return this._instance;
    }

    public static publicInfo: Record<string, string | number> = {};
    public static userInfo: Record<string, string | number> = {};

    public static initTA(): void {
        if (Report._ta) {
            Report._ta.logout();
        }

        const data = getEnvConfig();
        if (!data.reportAppId || data.reportAppId.length == 0) {
            console.log("不需要上报");
            return;
        }

        // 保存一些全局常量
        Report.publicInfo["env"] = data.env;
        Report.publicInfo["buildNumber"] = BuildInfo.buildNumber();
        if (PlatformUtils.isPlatform(Platform.wx)) {
            const data = wx.getSystemInfoSync();
            Report.publicInfo["wxVersion"] = data.version;
            Report.publicInfo["wxSDKVersion"] = data.SDKVersion;
        }

        // 记录用户ID
        let userID = app.store.user.getUserId();

        try {
            // TA SDK 配置对象
            const config = {
                appId: data.reportAppId, // 项目 APP ID
                serverUrl: data.reportServerUrl, // 上报地址
                enableNative: true, // 允许调用 Native 代码
                showLog: false, //关闭log
                enableLog: false,
                autoTrack: {
                    appShow: true, // 自动采集 ta_mg_show
                    appHide: true, // 自动采集 ta_mg_hide
                    appClick: false, // 自动采集 点击事件（仅 native 生效）
                    appView: false, // 自动采集 浏览事件（仅 native 生效）
                    appCrash: true, // 自动采集 崩溃事件（仅 native 生效）
                    appInstall: true, // 自动采集 安装事件（仅 native 生效）
                },
            };
            // 创建 TA 实例
            Report._ta = new ThinkingAnalyticsAPI(config);
            // 初始化
            Report._ta.init();
            if (!userID || userID.length == 0) {
                userID = Math.floor(Math.random() * 10000 * (Math.random() * 10000)) + "";
            }
            Report._ta.login(userID);
            // 设置公共属性
            Report._ta.setSuperProperties(Report.publicInfo);
            var deviceId = Report._ta.getDeviceId();
            console.log("report-initTA suc = ", userID, deviceId);
        } catch (err) {
            console.log("report-initTA err = ", err);
        }
    }

    /**
     * 上报超级严重的错误到 TA, 方便定位问题
     * @param errDesc 指定错误的描述
     */
    public static reportFatalError(errDesc: { payload: string; }) {
        Report.reportTACommon(ReportKey.fatal_error, errDesc, true);
    }


    /** 上报数据监控
     * @param errorForce 用于异常上报，这个时候可能没有加载到基础配置
     */
    public static reportTACommon(
        eventName: ReportKey,
        properties: Record<string, string | number> = {},
        errorForce: boolean = false
    ): void {
        if (!Report._ta) {
            return;
        }
        const eventKey = ReportKey[eventName];

        const userProperties = {
            ...Report.userInfo,
        };

        if (DEV) {
            console.group("ThinkingAnalyticsAPI");
            console.log("%c eventKey: %s", "color: green", eventKey);
            console.log("%c properties: ", "color: green", properties);
            console.log("%c userProperties: ", "color: green", userProperties);
            console.groupEnd();
        }

        Report._ta.track(eventKey, properties);
        Report._ta.userSet(userProperties);
    }

}
