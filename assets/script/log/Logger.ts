import { game } from "cc";
import { getEnvConfig, checkIsTest } from "../../script-load/build_config/Env";

/**
 * @desc 定义错误等级
 */
export enum LogLevel {
    Info = 0, // 信息
    Warn = 1, // 警告
    Error = 2, // 一般错误
    FatalError = 3, // 致命错误
}

/**
 * @desc 游戏日志上报接口定义
 */
interface IGameLogInfo {
    level: 'info' | 'warn' | 'error' | 'fatal';
    key: string;
    value?: any;
}

/**
 * @desc 微信小游戏日志适配器
 */
class GameLogAdaptor {
    private logger: any = null;

    constructor() {
        this.initLogger();
    }

    private initLogger(): void {
        // 兼容旧版本基础库
        if (typeof wx !== 'undefined' && (wx as any).getGameLogManager) {
            try {
                this.logger = (wx as any).getGameLogManager({
                    commonInfo: {
                        version: BuildInfo.buildNumber(),
                        env: getEnvConfig().env
                    }
                });
            } catch (error) {
                console.warn('初始化游戏日志管理器失败:', error);
            }
        }
    }

    /**
     * 直接上报日志
     */
    public log(logInfo: IGameLogInfo): void {
        try {
            this.logger.log(logInfo);
        } catch (error) {
            console.error('游戏日志上报失败:', error);
        }
    }
}

// 创建全局实例
const gameLogAdaptor = new GameLogAdaptor();

/**
 * @desc 抖音平台日志适配器
 */
class DouyinLogAdaptor {
    private realtimeLogger: any = null;

    constructor() {
        this.initLogger();
    }

    private initLogger(): void {
        // 兼容抖音平台
        if (typeof tt !== 'undefined' && (tt as any).getRealtimeLogManager) {
            try {
                this.realtimeLogger = (tt as any).getRealtimeLogManager({
                    syncToConsole: true
                });
            } catch (error) {
                console.warn('初始化抖音实时日志管理器失败:', error);
            }
        }
    }

    /**
     * 输出log日志 (等同于info)
     */
    public log(logInfo: IGameLogInfo): void {
        try {
            this.realtimeLogger.log(logInfo);
        } catch (error) {
            console.error('抖音log日志上报失败:', error);
        }
    }
}

// 创建抖音日志适配器全局实例
const douyinLogAdaptor = new DouyinLogAdaptor();

/**
 * @desc 封装与日志输出相关的功能,方便以后扩展
 */
export default class Log {
    // private static logLevel: LogLevel = LogLevel.Error;   // 输出的日志等级
    private static logLevel: LogLevel = checkIsTest && checkIsTest() ? LogLevel.Info : LogLevel.Warn; // 输出的日志等级

    private static emptyFunc = function () { };
    
    // 设置日志的输出等级
    public static set LogLevel(level: LogLevel) {
        Log.logLevel = level;
    }

    private static Time(): string {
        return new Date().toLocaleTimeString();
    }

    public static get S2C() {
        if (Log.logLevel > LogLevel.Info)
            return this.emptyFunc;
        let prefix = Log.Time();
        prefix += " | S2C  | ";
        return console.log.bind(null, '%c' + prefix, 'color:green');
    }

    public static get C2S() {
        if (Log.logLevel > LogLevel.Info)
            return this.emptyFunc;
        let prefix = Log.Time();
        prefix += " | C2S  | ";
        return console.log.bind(null, '%c' + prefix, 'color:blue');
    }
    
    /**
     * 输出Info
     */
    public static Info(message?: any, ...optionalParams: any[]): void {
        if (Log.logLevel > LogLevel.Info) return;
        let prefix = Log.Time();
        prefix += " | Info  | ";
        console.log(prefix + message, ...optionalParams);
    }

    /**
     * 输出警告日志
     * @param message
     * @param optionalParams
     */
    public static Warn(message?: any, ...optionalParams: any[]): void {
        if (Log.logLevel > LogLevel.Warn) return;

        let prefix = Log.Time();
        prefix += " | Warn  | ";
        console.warn(prefix + message, ...optionalParams);
    }

    /**
     * 输出错误日志
     * @param message
     * @param optionalParams
     */
    public static Error(message?: any, ...optionalParams: any[]): void {
        if (Log.logLevel > LogLevel.Error) return;

        let prefix = Log.Time();
        prefix += " | Error | ";
        console.error(prefix + message, ...optionalParams);
    }

    /**
     * 输出致命错误日志
     * @param message
     * @param optionalParams
     */
    public static Fatal(message?: any, ...optionalParams: any[]): void {
        if (Log.logLevel > LogLevel.FatalError) return;

        let prefix = Log.Time();
        prefix += " | Fatal | ";
        console.error(prefix + message, ...optionalParams);
    }

    /**
     * 输出一个Assert.
     * @param test
     * @param message
     * @param optionalParams
     */
    public static Assert(test?: boolean, message?: string, ...optionalParams: any[]): void {
        console.assert(test, message, optionalParams);
    }

    public static LogPlatformInfo(key:string,value?:any){
        if(PlatformUtils.isPlatform(Platform.wx)){
            gameLogAdaptor.log({ level: 'info', key: key, value: value });
        }
        else if(PlatformUtils.isPlatform(Platform.tt)){
            douyinLogAdaptor.log({ level: 'info', key: key, value: value });
        }
    }
}

