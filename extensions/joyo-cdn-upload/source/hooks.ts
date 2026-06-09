import { IBuildTaskOption, BuildHook, IBuildResult } from "../@types";
import path from "path";
import { PACKAGE_NAME } from "./consts";
import {
    copyFileToDirectory,
    executeShellCommandSync,
    getDirectoryPathFromUrl,
    isFileExists,
    removeDir,
} from "./utils";

// 本插件在 UI 上可配置的参数类型声明
interface IOptions {
    cdnType: "noCDN" | "tencentCDN" | "aliyunCDN";
}

// 任务构建参数
interface ITaskOptions extends IBuildTaskOption {
    // packages 插件目录
    packages: {
        [PACKAGE_NAME]: IOptions; // 本插件在界面上显示的那些可配置参数
    };
    // 自定义参数，通过 --build 变量设置进来（用 ; 隔开的那个参数）
    myPlatform: string; // 平台环境（比如 wx 是微信正式服，wxtest 是微信测试服）
    buildNumber: number; // 构建版本号
    buildVersion: number; // 构建版本
    remoteUrl: string; // 远程 CDN 基础地址
    cdnType: "noCDN" | "tencentCDN" | "aliyunCDN"; // 上传 CDN 的类型
    exitWhenErr: boolean; // 是否在构建过程中一旦报错，就直接退出程序（打包机可在命令行时设置为true）
    skipCDN: boolean; // 是否跳过插件构建过程中的自动上传 CDN 步骤（如果跳过，需要打包机或者命令行调用者自己实现上传功能）
    outputName: string;
    server: string;
}

// 打印参数帮助信息
function printHelp() {
    log(`
    // 自定义参数，通过 --build 变量设置进来（用 ; 隔开的那个参数）
    myPlatform: string; // 平台环境（比如 wx 是微信正式服，wxtest 是微信测试服）
    buildNumber: number; // 构建版本号
    buildVersion: number; // 构建版本
    remoteUrl: string; // 远程 CDN 基础地址
    cdnType: "noCDN" | "tencentCDN" | "aliyunCDN"; // 上传 CDN 的类型
    exitWhenErr: boolean; // 是否在构建过程中一旦报错，就直接退出程序（打包机可在命令行时设置为true）
    skipCDN: boolean; // 是否跳过插件构建过程中的自动上传 CDN 步骤（如果跳过，需要打包机或者命令行调用者自己实现上传功能）
    `);
}

// 自定义日志，带有标头
function log(...arg: any[]) {
    console.log(`[${PACKAGE_NAME}] ${JSON.stringify(arg)}`);
}

// 开关，当遇到构建错误的时候直接 exit 退出程序，并提供一个 exit code
// 此操作用于打包机构建的时候触发退出操作，本地打包时默认为 false，只能通过命令行参数覆盖生效
let exitWhenErr = false;

/**
 * 遇到错误时是否退出进程
 * 配合 exitWhenErr 全局开关使用
 * @param {number} exitCode 指定进程错误
 */
function exitNow(exitCode) {
    if (!exitWhenErr) return; // 如果 exitWhenErr 是空，直接跳过
    log(`[${PACKAGE_NAME}] 遇到错误，退出进程。code: ${exitCode}`);
    process.exit(exitCode);
}


// 构建前执行的方法，用于将命令行参数覆盖默认配置参数
export const onBeforeBuild: BuildHook.onBeforeBuild = async function (options: ITaskOptions, result: IBuildResult) {
    // 打印帮助信息
    printHelp();
    // 打印当前参数
    log(`onBeforeBuild options:`, options);
    // 打印进程参数
    log(`onBeforeBuild arguments:`, process.argv);

    // 注:
    // 	由于 Cocos Creator 在触发 build-start 事件时, 已经读取了平台配置文件, 所以那时再修改已经晚了
    //	我们选择一启动就修改平台配置文件
    //	从类似 platform=wechatgame;debug=false;md5cache=true;sourceMaps=false;myPlatform=wxtest 的字符串分离 myPlatform

    const serverPath = options.server || options.remoteUrl; // 优先使用 UI 界面中的 cocos 默认配置，其次使用命令行自定义配置
    const platformAndEnvName = options.myPlatform; // 平台环境（比如 wx 是微信正式服，wxtest 是微信测试服）

    // options.buildNumber, // 构建版本号
    // options.buildVersion // 构建版本

    if (options.exitWhenErr) {
        exitWhenErr = true; // 命令行模式下如果发生错误, 会自动退出程序
    }

    // 如果有 remoteUrl 参数，则覆盖 server 参数的默认 remote url
    if (options.remoteUrl) {
        options.server = options.remoteUrl;
    }
    // 如果有 cdn 类型参数，直接覆盖插件参数
    if (options.cdnType) {
        options.packages[PACKAGE_NAME].cdnType = options.cdnType;
    }

    // 循环判断所有 options.packages[平台类型名] 下面的所有参数，如果 options 下面有同名的参数，就覆盖
    for (const pluginName in options.packages) {
        const platformOptions = options.packages[pluginName];
        if (platformOptions) {
            for (const key in platformOptions) {
                if (options[key] !== undefined) {
                    platformOptions[key] = options[key];
                }
            }
        }
    }
    log(`构建前参数:`, options);
};

export const onAfterBuild: BuildHook.onAfterBuild = async function (options: ITaskOptions, result: IBuildResult) {
    log(`onAterBuild options:`, options);
    try {
        await onBuildFinished(options);
    } catch (err) {
        log("onAfterBuild 错误：", err);
        exitNow(3);
    }
};


let postActions = [];

// 构建结束回调，执行 CDN 上传等后续操作
async function onBuildFinished(options: ITaskOptions) {
    log(`[构建结束] ==> onBuildFinished: ${JSON.stringify(options, null, 4)}`);
    const outputDir = path.join("build", options.outputName);
    log(`[构建结束] ==> outputDir: ${outputDir}`);

    {
        // 执行后处理动作
        log(`[构建结束] 恢复原始文件 ...`);
        postActions.forEach((action) => action());
        postActions = [];
    }

    let remoteCdnRootUrl = options.server;
    log(`[构建结束] onBuildFinished options.server ===> ${remoteCdnRootUrl}`);
    if (!remoteCdnRootUrl) {
        // remoteCdnRootUrl = defaultRemoteDir;
        console.error(`[构建结束] onBuildFinished use defaultRemoteDir for remoteCdnRootUrl ===> ${remoteCdnRootUrl}`);
        return;
    }

    // 拷贝 build-templates/wechatgame/first-screen.js 到 build/wechatgame/first-screen.js
    copyWechatFirstScreenFile();

    // 上传 remote 目录到远端服务器
    if (remoteCdnRootUrl) {
        // 判断构建参数是否指定 CDN 类型
        switch (options.packages[PACKAGE_NAME].cdnType) {
            case "noCDN":
                log(`[构建结束] [Remote 跳过上传CDN]`);
                break;
            case "tencentCDN":
                await tencentCosCmdUpLoad(outputDir, "./temp.cos.conf", remoteCdnRootUrl, () => {
                    log(`[构建结束] [Remote 资源上传CDN完成（腾讯云）]`);
                });
                break;
            case "aliyunCDN":
                // TODO 改成 阿里云的 cdn 上传命令
                await tencentCosCmdUpLoad(outputDir, "./temp.cos.conf", remoteCdnRootUrl, () => {
                    log(`[构建结束] [Remote 资源上传CDN完成（阿里云）]`);
                });
            default:
                log(`[构建结束] [Remote CDN类型不正确]`);
                exitNow(1);
        }
    } else {
        console.error(`[构建结束] [项目名称-build] 没有配置要上传的 CDN 路径, 这是严重的 Bug, 会导致客户端无法正常运行!!!`);
    }
}

/**
 * 腾讯云 CDN 资源上传
 */
async function tencentCosCmdUpLoad(buildRelativePath: string, tempConfigPath: string, remoteCdnRootUrl: string, callback: () => void) {
    const workDir = path.join(__dirname, "../../..");
    const buildPath = path.join(workDir, buildRelativePath); // absolute: ~/your_project_name/build/wechatgame
    const cosConfFile = path.join(workDir, tempConfigPath); // absolute: ~/your_project_name/temp.cos.conf
    const remoteLocalPath = path.join(buildPath, "remote"); // absolute: ~/your_project_name/build/wechatgame/remote

    log(`[上传CDN] [目录] __dirname               ===> ${__dirname}`); // absolute: ~/your_project_name/extensions/joyo-cdn-upload/dist
    log(`[上传CDN] [目录] relatePath              ===> ${buildPath}`);
    log(`[上传CDN] [目录] remoteResourceLocalPath ===> ${remoteLocalPath}`);
    log(`[上传CDN] [目录] tencentCosConfFile      ===> ${cosConfFile}`);

    // 计算远程的相对目录，远程地址必须是目录
    const remoteRelativeUrl = getDirectoryPathFromUrl(remoteCdnRootUrl.toLowerCase());

    // const cosUploadCmd = isWin32()
    //     ? `coscli cp ${wxRemoteResourceLocalPath} cos://cat-match/${remoteCdnRootUrl}remote -r`
    //     : `coscmd -s upload -r ${wxRemoteResourceLocalPath} mix-game/v1/`;

    let cosUploadCmd = `coscmd -d upload -rs ${remoteLocalPath} ${remoteRelativeUrl}`;
    // 如果有指定的配置文件，则使用指定配置文件
    // 是否存在指定的 腾讯云cos 证书配置文件
    const hasCosConfFile = isFileExists(cosConfFile);
    log(`[上传CDN] [coscmd] cosConfFile 文件${hasCosConfFile ? "存在" : "不存在"}`);
    if (hasCosConfFile) {
        cosUploadCmd = `coscmd -d -c ${cosConfFile} upload -rs ${remoteLocalPath} ${remoteRelativeUrl}`;
    }
    log(`[上传CDN] [coscmd] 开始上传资源到 CDN：${remoteLocalPath}`);
    log(`[上传CDN] [coscmd] 指令=> ${cosUploadCmd}`);

    // 执行上传 remote 文件到 CDN 服务器，并打印日志，并在错误时时间 exit
    try {
        await executeShellCommandSync(cosUploadCmd);
        log(`[上传CDN] [coscmd] close: 上传资源到 cdn 成功`);
        // 删除 remote 目录
        log(`[上传CDN] [coscmd] 删除掉不再需要的 ${remoteLocalPath} 目录`);
        removeDir(remoteLocalPath);
        callback();
    } catch (error) {
        // 处理错误
        console.error(`[上传CDN] [coscmd] Error 上传资源到 cdn 失败, 错误码: ${error}`);
        exitNow(2);
        return;
    }
    log("[上传CDN] [coscmd] 指令完成");
}

/**
 * 拷贝首屏幕的预加载背景渲染脚本到微信构建结果
 */
function copyWechatFirstScreenFile() {
    // absolute
    // let orgPath = "~/project_name/build-templates/wechatgame/first-screen.js";
    // let tarPath = "~/project_name/build/wechatgame";
    let workDir = path.join(__dirname, "../../..");
    let wxBuildPath = path.join(workDir, "/build/wechatgame");
    let wxBuildTemplatePath = path.join(workDir, "build-templates/wechatgame/first-screen.js");
    if (isFileExists(wxBuildTemplatePath)) {
        log(`[copyFirstScreen] 复制首屏模板文件 wxBuildTemplatePath ===> ${wxBuildTemplatePath}`);
        log(`[copyFirstScreen] 微信构建结果路径 wxBuildPath         ===> ${wxBuildPath}`);
        copyFileToDirectory(wxBuildTemplatePath, wxBuildPath);
    } else {
        log(`[copyFirstScreen] 路径：[${wxBuildTemplatePath}] 下模板文件不存在，跳过覆盖 first-screen.js 的流程。`);
    }
}
