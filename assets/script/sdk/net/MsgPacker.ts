/**
 * 消息打包工具
 */
export default class MsgPacker {
    /**
     * 压缩消息内容，加入版本号，消息索引号，消息码信息
     * TODO 增加一个服务器返回的错误码
     * @param data 需要编码的数据
     * @param ver 版本号
     * @param index 消息索引号
     * @param code 消息码
     * @returns 返回压缩后的消息内容
     */
    public static encode(data: Uint8Array, ver: number, index: number, code: number): Uint8Array {
        // 将 ver、index、code 和 data 拼接成一个新的 Uint8Array
        const buf = new ArrayBuffer(4 + 8 + 4 + data.length);
        const view = new DataView(buf);
        view.setInt32(0, ver);
        view.setBigInt64(4, BigInt(index));
        view.setInt32(12, code);
        const dataView = new Uint8Array(buf);
        dataView.set(data, 16);
        return dataView;
    }

    /**
     * 解压数据头部信息
     * @param data 需要解压的数据
     * @returns ver 版本号
     * @returns index 消息索引号
     * @returns code 消息码
     * @returns data 返回内容
     */
    public static decode(data: Uint8Array): { ver: number; index: number; code: number; data: Uint8Array } {
        // 从 data 中解析出 ver、index、code 和 body
        const view = new DataView(data.buffer);
        console.log("view", view);
        const ver = view.getInt32(0);
        const index = Number(view.getBigInt64(4));
        const code = view.getInt32(12);
        let body = new Uint8Array();
        console.log("data.length", data.length);
        // 如果没有数据部分，就不需要截取
        if (data.length >= 16) {
            body = data.slice(16);
        }
        return { ver, index, code, data: body };
    }
}
