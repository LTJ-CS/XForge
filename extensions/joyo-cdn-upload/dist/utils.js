"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFileExists = exports.removeDir = exports.getDirectoryPathFromUrl = exports.copyFileToDirectory = exports.executeShellCommandSync = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
/**
 * 将spawn操作封装为Promise，以处理包含多个连续空格的命令字符串。
 * @param commandString 完整的命令行命令字符串，包括命令和参数。
 * @param options spawn的额外选项。
 * @returns Promise，解析后包含执行结果的对象。
 */
const promisifiedSpawnFromString = function (commandString) {
    // 使用正则表达式去除前后空白并分割命令和参数，\s+匹配一个或多个空格
    const [command, ...args] = commandString.trim().split(/\s+/);
    return new Promise((resolve, reject) => {
        const child = (0, child_process_1.spawn)(command, args);
        let stdout = '';
        let stderr = '';
        child.stdout.on('data', (data) => {
            stdout += data.toString();
            process.stdout.write(data); // 实时打印stdout
        });
        child.stderr.on('data', (data) => {
            stderr += data.toString();
            process.stderr.write(data); // 实时打印stderr
        });
        child.on('close', (code) => {
            if (code === 0) {
                resolve({ code, stdout, stderr });
            }
            else {
                reject(new Error(`Command failed with exit code ${code}: ${stderr}`));
            }
        });
        child.on('error', (err) => {
            reject(err);
        });
    });
};
/**
 * 异步执行命令字符串。
 * @param commandString 包含命令和参数的字符串。
 * @returns Promise，执行完成后解析。
 */
function executeShellCommandSync(commandString) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 示例命令字符串，支持多空格
            const fullCommand = commandString;
            const result = yield promisifiedSpawnFromString(fullCommand);
            console.log('命令执行完毕');
            console.log('stdout:', result.stdout.trim());
            console.log('stderr:', result.stderr.trim());
        }
        catch (error) {
            console.error('执行命令时发生错误:', error);
            return;
        }
    });
}
exports.executeShellCommandSync = executeShellCommandSync;
/**
 * 同步执行命令
 */
// export function executeShellCommandSync(command: string) {
//     const childProcess = spawnSync(command, { stdio: "inherit", shell: true });
//     // console.log("childProcess:", childProcess)
//     if (childProcess.error) {
//         console.error(childProcess.error);
//     } else {
//         console.log("命令执行完成");
//     }
// }
/**
 * 同步执行命令，这个打包机执行有点问题
 */
// export function executeShellCommandSync(command: string) {
//     const output = execSync(command); // 执行命令
//     console.log(output.toString()); // 打印命令输出
// }
/**
 * 执行 shell 命令，并打印输出到标准输出
 * 如果异常退出，需要 catch exception
 */
// export function executeShellCommand(command: string): Promise<number> {
//     return new Promise((resolve, reject) => {
//         const childProcess = exec(command);
//         childProcess.stdout?.on("data", (data) => {
//             console.log(data);
//         });
//         childProcess.stderr?.on("data", (data) => {
//             console.error(data);
//         });
//         childProcess.on("error", (error) => {
//             console.error(`Command execution failed: ${error}`);
//             reject(error);
//         });
//         childProcess.on("exit", (code) => {
//             console.error(`Command execution exit: ${code}`);
//             resolve(code || 0);
//         });
//     });
// }
/**
 * 拷贝文件
 * @param sourceFilePath 源文件地址
 * @param destinationDir 目标文件地址
 */
function copyFileToDirectory(sourceFilePath, destinationDir) {
    // 确保目标目录存在
    if (!fs_1.default.existsSync(destinationDir)) {
        fs_1.default.mkdirSync(destinationDir, { recursive: true });
    }
    // 获取源文件名
    const fileName = path_1.default.basename(sourceFilePath);
    // 构造目标文件路径
    const destinationFilePath = path_1.default.join(destinationDir, fileName);
    // 拷贝文件
    fs_1.default.copyFile(sourceFilePath, destinationFilePath, (err) => {
        if (err) {
            console.error(`copyFileToDirectory 拷贝文件失败, sourceFilePath is ${sourceFilePath}`, err);
        }
        else {
            console.log(`copyFileToDirectory 文件拷贝成功!, sourceFilePath is ${sourceFilePath}, destinationDir is ${destinationDir}`);
        }
    });
}
exports.copyFileToDirectory = copyFileToDirectory;
/**
 * 去除 http 请求的 host 域名部分
 * 返回相对路径的目录
 */
function getDirectoryPathFromUrl(url) {
    const parsedUrl = new URL(url); // 创建一个URL对象来解析URL
    const pathName = parsedUrl.pathname; // 原始目录
    return path_1.default.join(pathName, "/"); // 返回URL对象的路径目录部分
}
exports.getDirectoryPathFromUrl = getDirectoryPathFromUrl;
/**
 * 删除指定的目录及子目录, 文件等
 * @param dir
 */
function removeDir(dir) {
    let files = fs_1.default.readdirSync(dir);
    for (let i = 0; i < files.length; i++) {
        let newPath = path_1.default.join(dir, files[i]);
        let stat = fs_1.default.statSync(newPath);
        if (stat.isDirectory()) {
            //如果是文件夹就递归下去
            removeDir(newPath);
        }
        else {
            //删除文件
            fs_1.default.unlinkSync(newPath);
        }
    }
    fs_1.default.rmdirSync(dir); //如果文件夹是空的，就将自己删除掉
}
exports.removeDir = removeDir;
/**
 * 判断文件是否存在
 * @param filePath 文件路径
 * @returns
 */
function isFileExists(filePath) {
    try {
        fs_1.default.accessSync(filePath, fs_1.default.constants.F_OK);
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.isFileExists = isFileExists;
