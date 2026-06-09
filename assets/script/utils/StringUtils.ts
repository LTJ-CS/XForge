/**
 *
 */
export default class StringUtils {

    /**
     *
     */
    private static _largeNumberShowArr: Array<string> = ["K", "M", "B", "T"];

    private static _largeDistanceShowArr: Array<string> = ["m", "km"];

    /**
     * 字符串格式化
     * @param s
     * @param args
     * @returns
     */
    static getText(s: string, ...args: any[]): string {
        for (let i = 1; i < arguments.length; i++) {
            let reg = new RegExp("\\{" + (i - 1) + "\\}");
            s = s.replace(reg, arguments[i]);
        }
        return s;
    }

    /**
     * 字符串格式化
     * @param s
     * @param args
     * @returns
     */
    static getFormatString(s: string, args: any[]): string {
        for (let i = 0; i < args.length; i++) {
            let reg = new RegExp("\\[" + (i) + "\\]");
            s = s.replace(reg, args[i]);
        }
        return s;
    }

    public static formatStr(msg: string, ...subst: any[]): string {
        if (subst && subst.length > 0) {
            for (let i = 0; i < subst.length; i++) {
                const reg = new RegExp("\\{" + i + "\\}", "g");
                msg = msg.replace(reg, String(subst[i]));
            }
        }

        return msg;
    }


    /**
     *
     * @param money
     * @returns
     */
    public static formatMoney1(money: number | string) {
        var str = `${money}`;
        return str.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    /**
     *  钱转换单位(K M B T)
     * @param money 数值
     * @param fix 小数点位数
     * @param max 最大值位数
     * @returns
     */
    public static formatMoney2(money: number, fix = 2, max = 0): string {
        let str = money + "";
        let unit = "";
        if (money >= 1000000000) {
            unit = "B";
            str = (money / 1000000000).toFixed(fix);
        } else if (money >= 1000000) {
            unit = "M";
            str = (money / 1000000).toFixed(fix);
        } else if (money >= 1000) {
            unit = "K";
            str = (money / 1000).toFixed(fix);
        }

        //取最大位数
        if (max > 0) {
            const dotIdx = str.indexOf(".");
            if (dotIdx > max) {//有小数，整数部分大于最大位数，取整数部分
                str = str.substring(0, dotIdx);
            } else if (dotIdx > -1) {//有小数，整数部分小于最大位数，取最大位数
                str = str.substring(0, max + 1);
            }
        }
        //去除小数点后面的尾数
        str = str.replace(/\.?0+$/, "");
        if (str.indexOf(".") > -1) {
            str = str.replace(/\0+$/, "");
        }
        return str + unit;
    }

    public static formatLargeDistance(value: number): string {
        if (value <= 0) {
            return "0m";
        }
        let show: string = "";
        if (value < 1000) {
            show = `${value}${this._largeDistanceShowArr[0]}`;
        } else {
            show = (value / 1000).toFixed(1) + this._largeDistanceShowArr[1];
        }
        return show;
    }

    /**
     * 格式化数字显示 (例：大于1000显示k)
     * @param value
     * @returns
     */
    public static formatLargeNumber(value: number): string {
        if (value <= 0) {
            return "0";
        }
        let show: string = "";
        for (let i = 0; i < this._largeNumberShowArr.length; i++) {
            let data = 1000;
            for (let j = i + 1; j < this._largeNumberShowArr.length; j++) {
                data = data * 1000;
            }
            if (value >= data) {
                let fixNum = 2;
                if (value > data * 100) {
                    fixNum = 0;
                } else if (value > data * 10) {
                    fixNum = 1;
                }
                //去掉纯0小数尾数
                let str = (value / data).toFixed(fixNum).replace(/\.0*$/, "");
                //去掉小数0尾数
                if (str.indexOf(".") > -1) {
                    str = str.replace(/0+$/, "");
                }
                show = str + this._largeNumberShowArr[this._largeNumberShowArr.length - i - 1];
                break;
            }
        }
        if (show == "") {
            show = value.toString();
        }
        return show;
    }

    /**
     * 判断是否是富文本
     * @param str
     * @returns
     */
    public static isRichText(str: string): boolean {
        const htmlTagRegex = /<([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>/i;
        return htmlTagRegex.test(str);
    }

    /**
     * 随机生成字符串
     * 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
     * @param len
     * @param chars
     * @returns
     */
    static randomString(len: number, chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678") {
        len = len || 32;
        const maxPos = chars.length;
        let pwd = "";
        for (let i = 0; i < len; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    /**
     *
     * @param str
     * @returns
     */
    static uint8ToBase64(str: string | Uint8Array): string {
        var c1: number, c2: number, c3: number;
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var i = 0,
            len = str.length,
            string = "";

        let codeAt = function (_str: any, index: number) {
            return _str.charCodeAt(index);
        };
        if (typeof str !== "string") {
            codeAt = function (_str: any, index: number) {
                return _str[index];
            };
        }

        while (i < len) {
            c1 = codeAt(str, i++) & 0xff;
            if (i == len) {
                string += base64EncodeChars.charAt(c1 >> 2);
                string += base64EncodeChars.charAt((c1 & 0x3) << 4);
                string += "==";
                break;
            }
            c2 = codeAt(str, i++);
            if (i == len) {
                string += base64EncodeChars.charAt(c1 >> 2);
                string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
                string += base64EncodeChars.charAt((c2 & 0xf) << 2);
                string += "=";
                break;
            }
            c3 = codeAt(str, i++);
            string += base64EncodeChars.charAt(c1 >> 2);
            string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            string += base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
            string += base64EncodeChars.charAt(c3 & 0x3f);
        }
        return string;
    }

    /**
     *
     * @param base64
     * @returns
     */
    static base64ToUint8(base64: string): Uint8Array {
        const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        let uint8ArrayLength = (base64.length / 4) * 3;
        if (base64[base64.length - 1] === "=") {
            uint8ArrayLength--;
            if (base64[base64.length - 2] === "=") {
                uint8ArrayLength--;
            }
        }

        const uint8Array = new Uint8Array(uint8ArrayLength);

        let uint8ArrayIndex = 0;
        for (let i = 0; i < base64.length; i += 4) {
            const index1 = base64Chars.indexOf(base64[i]);
            const index2 = base64Chars.indexOf(base64[i + 1]);
            const index3 = base64Chars.indexOf(base64[i + 2]);
            const index4 = base64Chars.indexOf(base64[i + 3]);

            const a = (index1 << 2) | (index2 >> 4);
            const b = ((index2 & 15) << 4) | (index3 >> 2);
            const c = ((index3 & 3) << 6) | index4;

            uint8Array[uint8ArrayIndex++] = a;
            if (index3 !== -1) {
                uint8Array[uint8ArrayIndex++] = b;
            }
            if (index4 !== -1) {
                uint8Array[uint8ArrayIndex++] = c;
            }
        }

        return uint8Array;
    }

    /**
     * 将 JS 字符串编码为 UTF‑8 的 Uint8Array
     */
    static utf8Encode(str: string): Uint8Array {
        const buf: number[] = [];
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);

            if (code < 0x80) {
                buf.push(code);
            } else if (code < 0x800) {
                buf.push(0xc0 | (code >> 6));
                buf.push(0x80 | (code & 0x3f));
            } else if (code < 0xd800 || code >= 0xe000) {
                buf.push(0xe0 | (code >> 12));
                buf.push(0x80 | ((code >> 6) & 0x3f));
                buf.push(0x80 | (code & 0x3f));
            } else {
                // surrogate pair
                i++;
                // high surrogate
                const hi = code;
                // low surrogate
                const lo = str.charCodeAt(i);
                // compute code point
                code = 0x10000 + (((hi & 0x3ff) << 10) | (lo & 0x3ff));
                buf.push(0xf0 | (code >> 18));
                buf.push(0x80 | ((code >> 12) & 0x3f));
                buf.push(0x80 | ((code >> 6) & 0x3f));
                buf.push(0x80 | (code & 0x3f));
            }
        }
        return new Uint8Array(buf);
    }

    /**
     * 将 UTF‑8 编码的 Uint8Array 解码为 JS 字符串
     */
    static utf8Decode(bytes: Uint8Array): string {
        let out = '', i = 0;
        while (i < bytes.length) {
            const b1 = bytes[i++];
            if (b1 < 0x80) {
                out += String.fromCharCode(b1);
            } else if (b1 < 0xe0) {
                const b2 = bytes[i++] & 0x3f;
                out += String.fromCharCode(((b1 & 0x1f) << 6) | b2);
            } else if (b1 < 0xf0) {
                const b2 = bytes[i++] & 0x3f;
                const b3 = bytes[i++] & 0x3f;
                out += String.fromCharCode(((b1 & 0x0f) << 12) | (b2 << 6) | b3);
            } else {
                const b2 = bytes[i++] & 0x3f;
                const b3 = bytes[i++] & 0x3f;
                const b4 = bytes[i++] & 0x3f;
                let codePoint = ((b1 & 0x07) << 18) | (b2 << 12) | (b3 << 6) | b4;
                codePoint -= 0x10000;
                out += String.fromCharCode(
                    0xD800 | (codePoint >> 10),
                    0xDC00 | (codePoint & 0x3FF)
                );
            }
        }
        return out;
    }

    public static toUint8ArrayList(arr: Float32Array): number[] {
        return Array.from(new Uint8Array(arr.buffer));
    }


    /** 截取指定长度字符串 str字符串 length指定长度
     * @param str 截取的字符串
     * @param length 截取的长度, 中文1个字符宽度，英文0.5个宽度
     */
    public static truncateChineseCharacters(str: string, length: number): string {
        if (!str || str === "") return "";
        let count = 0;
        let truncated = "";

        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);
            const charCode = str.charCodeAt(i);

            // 判断字符是否为中文字符
            if (charCode >= 0x4e00 && charCode <= 0x9fff) {
                count += 1;
            } else {
                count += 0.5; // 非中文字符算半个字符长度
            }

            if (count > length) {
                break;
            }

            truncated += char;
        }

        if (str.length > truncated.length) {
            truncated += "...";
        }
        return truncated;
    }


    /**
     * 微信比较版本的函数, 见: https://developers.weixin.qq.com/minigame/dev/guide/runtime/client-lib/compatibility.html
     * @param v1 {string} 指定参与比较的版本号, 字符串
     * @param v2 {string} 指定参与比较的版本号, 字符串
     * @returns 如果 v1 >= v2, 则返回一个大于等于0的值
     */
    public static compareVersion(v1: string, v2: string): number {
        const v1Arr = v1.split(".");
        const v2Arr = v2.split(".");
        const len = Math.max(v1.length, v2.length);

        while (v1Arr.length < len) {
            v1Arr.push("0");
        }
        while (v2Arr.length < len) {
            v2Arr.push("0");
        }

        for (let i = 0; i < len; i++) {
            const num1 = parseInt(v1Arr[i]);
            const num2 = parseInt(v2Arr[i]);

            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }
        }

        return 0;
    }

}

