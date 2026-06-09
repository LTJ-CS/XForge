import { game } from "cc";
import { DEV } from "cc/env";
import PlatformUtils, { Platform } from "./PlatformUtils";

// 网络请求

// 请求类型
export enum Method {
    OPTIONS = "OPTIONS",
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    TRACE = "TRACE",
    CONNECT = "CONNECT",
}

// 请求参数定义
export interface Options {
    url: string; // 地址
    host?: string; // 基础地址
    data?: Record<string, any>; // post 数据
    baseParams: object; // 基本参数，每个请求都带有（如果存在）
    params?: object; // get 数据
    method?: Method; // 方法
    encrypt?: boolean; // 是否加密
    header?: Record<string, any>; // header
    timeout?: number; // 请求超时
    contentType?: string; // 内容类型
    type?: "file"; // 是否包含文件
    file?: any; // 文件
    success?: (data: any) => void;
    fail?: (data: any) => void;
    complete?: (data: any) => void;
}

// http 请求返回值
export type HttpResp = {
    err_msg: string;
    err_code: number;
    data: any;
};

export default class Http {
    private static requestBeforeFunc: (options: Options) => Options = null; // 请求之前的拦截器方法

    // 请求前的拦截器
    public static requestBefore(func: (options: Options) => Options): void {
        this.requestBeforeFunc = func;
    }

    // 拼接 get 参数
    public static queryString(obj: any): string {
        let str = "?";
        let notFirst = false;
        for (const key in obj) {
            // 除了首次外，其他每个参数前都加上 & 符号
            if (notFirst) {
                str += "&";
            } else {
                notFirst = true;
            }
            const value = obj[key];
            str += `${key}=${value}`;
        }
        return str;
    }

    // http Get
    public static async get<T extends HttpResp>(args: {
        url: string;
        host?: string;
        header?: Record<string, string>;
        params?: any;
        baseParams?: object;
        success?: (res: T) => void;
        fail?: (err: any) => void;
    }): Promise<T> {
        const { host, url, params, baseParams, header } = args;
        const options = {
            method: Method.GET,
            url: host + url,
            params,
            baseParams,
            header,
            success: args.success,
            fail: args.fail,
        };

        return this.requestSync(options);
    }

    // http Post
    public static async post(args: {
        url: string;
        host?: string;
        params?: any; // get 参数
        baseParams: object; // 基础参数
        data?: any; // post 参数
        header?: Record<string, string>; // header字段
        type?: "file"; // 内容类型
        success?: (res: HttpResp) => void;
        fail?: (err: any) => void;
    }): Promise<HttpResp> {
        const { host, url, params, baseParams, data, header, type } = args;
        let formatData = {};
        if (type == "file") {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            formatData = formData;
        } else {
            formatData = data;
        }
        const options = {
            method: Method.POST,
            url: host + url,
            data: formatData,
            params,
            baseParams,
            header,
            type,
            success: args.success,
            fail: args.fail,
        };
        return await this.requestSync(options);
    }

    // 微信 http 请求
    private static wxRequest(options: Options): void {
        let isByte = options?.params && options.params["isByte"];
        wx.request({
            url: options.url + this.queryString(options.params),
            data: options.data,
            method: options.method,
            responseType: isByte ? "arraybuffer" : "text",
            header: {
                // "content-type": contentType, // 默认值
                // Cookie: `t=${Data.user.token}`,
                ...options.header,
            },
            success(res) {
                if (!res || res.statusCode != 200) {
                    if (res.statusCode > 200 && res.statusCode < 400) {
                        let data = res.data;
                        if (isByte) {
                            const arraybuffer: ArrayBuffer = <any>res.data;
                            const byte = new Uint8Array(arraybuffer);
                            const code = Http.getInvalidByteCode(byte);
                            if (code > 0) {
                                data = { err_code: code };
                            }
                        }
                        options.success && options.success(data);
                    } else {
                        options.fail && options.fail(res);
                    }
                    // if (isByte) {
                    //     var textDecoder = new TextDecoder();
                    //     const arraybuffer = res.data;
                    //     const byte = new Uint8Array(arraybuffer);
                    //     var decodedString = textDecoder.decode(arraybuffer);
                    //     res = `status: ${res.status}, err: ${decodedString}`
                    // }
                } else {
                    if (isByte) {
                        const arraybuffer: ArrayBuffer = <any>res.data;
                        const byte = new Uint8Array(arraybuffer);
                        options.success && options.success(byte);
                    } else {
                        options.success && options.success(res.data);
                    }
                }
            },
            fail(err) {
                options.fail && options.fail(err);
            },
        });
    }

    // qq http 请求
    private static qqRequest(options: Options): void {
        let isByte = options?.params && options.params["isByte"];
        qq.request({
            url: options.url + this.queryString(options.params),
            data: options.data,
            method: options.method,
            responseType: isByte ? "arraybuffer" : "text",
            header: {
                // "content-type": contentType, // 默认值
                // Cookie: `t=${Data.user.token}`,
                ...options.header,
            },
            success(res) {
                if (!res || res.statusCode != 200) {
                    // if (isByte) {
                    //     var textDecoder = new TextDecoder();
                    //     const arraybuffer = res.data;
                    //     const byte = new Uint8Array(arraybuffer);
                    //     var decodedString = textDecoder.decode(arraybuffer);
                    //     res = `status: ${res.status}, err: ${decodedString}`
                    // }
                    if (res.statusCode > 200 && res.statusCode < 400) {
                        let data = res.data;
                        if (isByte) {
                            const arraybuffer: ArrayBuffer = <any>res.data;
                            const byte = new Uint8Array(arraybuffer);
                            const code = Http.getInvalidByteCode(byte);
                            if (code > 0) {
                                data = { err_code: code };
                            }
                        }
                        options.success && options.success(data);
                    } else {
                        options.fail && options.fail(res);
                    }
                } else {
                    if (isByte) {
                        const arraybuffer = res.data;
                        const byte = new Uint8Array(arraybuffer);
                        options.success && options.success(byte);
                    } else {
                        options.success && options.success(res.data);
                    }
                }
            },
            fail(err) {
                options.fail && options.fail(err);
            },
        });
    }

    // 支付宝 http 请求
    private static alipayRequest(options: Options): void {
        let isByte = options?.params && options.params["isByte"];
        my.request({
            url: options.url + this.queryString(options.params),
            data: options.data,
            method: options.method,
            //responseType: isByte ? "arraybuffer" : "text",
            dataType: isByte ? "arraybuffer" : "json",
            headers: {
                // "content-type": contentType, // 默认值
                // Cookie: `t=${Data.user.token}`,
                ...options.header,
            },
            success(res) {
                // console.log('11_success:', res);
                // console.log('11_success_1:', options);
                if (isByte) {
                    const arraybuffer = res.data;
                    const byte = new Uint8Array(arraybuffer);
                    options.success && options.success(byte);
                } else {
                    options.success && options.success(res.data);
                }
            },
            fail(err) {
                // console.log('22_fail:', err);
                // console.log('22_fail_1:', options);
                options.fail && options.fail(err);
            },
        });
    }

    // H5 执行 http 请求
    private static h5Request(options: Options): void {
        const { success, fail } = options;
        const type = options.type;
        let contentType = options.contentType || options.header["Content-type"] || "";
        try {
            // return;
            const method = options.method;
            let url = "";
            let data = null;
            const query = { ...options.baseParams, ...options.params };
            if (method === "POST") {
                // post 请求
                if (type == "file") {
                    // 文件类型，不改
                    url = options.url + this.queryString(query);
                    data = options.data;
                } else {
                    // json 类型，格式化
                    url = options.url + this.queryString(query);
                    if (contentType == "") {
                        contentType = "application/x-www-form-urlencoded";
                    }
                    data = this.stringifyQuery(options.data);
                }
            } else {
                // get 请求
                url = options.url + this.queryString({ ...options.data, ...query });
            }
            // console.log("url:", url);
            const timeout = options.timeout || 0;
            let isByte = options?.params && options.params["isByte"];
            const xhr = new XMLHttpRequest();
            xhr.responseType = "json";
            isByte && (xhr.responseType = "arraybuffer");
            timeout > 0 && (xhr.timeout = timeout);
            xhr.onreadystatechange = () => {
                if (xhr.responseType == "arraybuffer") {
                    return;
                }
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 400) {
                        success && success(xhr.response);
                    } else {
                        fail && fail("status: " + xhr.status);
                    }
                }
            };
            xhr.onload = () => {
                if (xhr.responseType != "arraybuffer") {
                    return;
                }
                const arraybuffer = xhr.response;
                const byte = new Uint8Array(arraybuffer);

                if (xhr.status === 201) {
                    const code = Http.getInvalidByteCode(byte);
                    if (code > 0) {
                        success && success({ err_code: code });
                        return;
                    }
                }
                success && success(byte);
            };
            xhr.open(method, url, true);
            if (contentType) {
                xhr.setRequestHeader("Content-Type", contentType);
            }
            // xhr.addEventListener(
            //   "progress",
            //   function (event) {
            //     console.log("[sdk request] post progress", event); // 上传进度
            //   },
            //   false
            // );
            xhr.send(data);
            xhr.ontimeout = function () {
                fail && fail("request timeout");
                console.log("%c>> %c连接超时 %c<<", "color:red", "color:purple", "color:red");
            };
            xhr.onerror = function (err) {
                console.warn("request error", err);
                fail && fail(err);
            };
        } catch (err) {
            console.warn("request err", err);
            fail && fail(err);
        }
    }

    // 统一 http 请求方法
    private static request(options: Options) {
        // 如果有拦截器，则重新设置 options 对象内容
        if (this.requestBeforeFunc) {
            options = this.requestBeforeFunc(options);
        }
        options.header = options.header ? { ...options.baseParams, ...options.header } : options.baseParams;
        if (PlatformUtils.isPlatform(Platform.wx)) {
            this.wxRequest(options); // 微信
        } else if (PlatformUtils.isPlatform(Platform.qq)) {
            this.qqRequest(options); // qq
        } else if (PlatformUtils.isPlatform(Platform.alipay)) {
            this.alipayRequest(options); // alipay
        } else {
            this.h5Request(options); // H5
        }
    }

    // 同步请求
    private static requestSync<T extends HttpResp>(options: Options) {
        return new Promise<T>((resolve, reject) => {
            const { success, fail } = options;
            try {
                this.request({
                    ...options,
                    success: (data: T) => {
                        DEV && console.log("requestSync suc", options, data);

                        success && success(data);
                        resolve(data);
                    },
                    fail: (err: any) => {
                        // CC_DEBUG && console.log("requestSync fail", options, err);
                        fail && fail(err);
                        reject(err);
                    },
                });
            } catch (err) {
                fail && fail(err);
                reject(err);
            }
        });
    }

    private static stringifyQuery(obj: Record<string, string | number | boolean>): string {
        return Object.entries(obj)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
            .join('&');
    }

    private static parseQuery(query: string): Record<string, string> {
        const result: Record<string, string> = {};
        if (query.startsWith('?')) query = query.slice(1);
        for (const pair of query.split('&')) {
            if (!pair) continue;
            const [key, value = ''] = pair.split('=');
            result[decodeURIComponent(key)] = decodeURIComponent(value);
        }
        return result;
    }

    private static getInvalidByteCode(uint8Array: Uint8Array): number {
        let str = '';
        for (let i = 0; i < uint8Array.length; i++) {
            const charCode = uint8Array[i];
            if (charCode > 0x00FF) {
                // The character is outside the basic multilingual plane (BMP).
                // Use a surrogate pair to represent it.
                const highSurrogate = 0xD800 + Math.floor((charCode - 0x1000) / 0x400);
                const lowSurrogate = 0xDC00 + (charCode & 0x3FF);
                str += String.fromCharCode(highSurrogate, lowSurrogate);
            } else {
                // The character is in the basic multilingual plane (BMP).
                str += String.fromCharCode(charCode);
            }
        }
        const regex = /"err_code":(\d+)/;
        const match = str.match(regex);
        if (match) {
            const errCode = match[1];
            return +errCode;
        }
        return -1;
    }
}
