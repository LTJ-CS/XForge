/* eslint-disable @typescript-eslint/no-explicit-any */
// 让网络打印更新鲜
export default class NetLog {
    // 网络日志打印
    public static log = (msg: string, ...msgOrColor: (string | number | boolean | any)[]): void => {
        const prefix = `%c[ws] ${msg}`;
        console.log("NetLog:", prefix, msgOrColor);
    };

    // 网络日志打印
    public static debug = (msg: string, ...msgOrColor: (string | number | boolean)[]): void => {
        const prefix = `%c[ws] ${msg}`;
        console.debug("NetLog:", prefix, msgOrColor);
    };

    // 网络日志打印（登录流程）
    public static warn = (msg: string): void => {
        const prefix = `%c[ws] %c${msg}`;
        console.warn("NetLog:", prefix);
    };
}
