

import * as $protobuf from "protobufjs/minimal";
import { Client2Server } from "../proto/proto_c2s";

type Client2ServerCtors = {
    [K in keyof typeof Client2Server]:
    // 只保留 newable 的
    typeof Client2Server[K] extends new (...args: any) => any
        ? typeof Client2Server[K]
        : never
}[keyof typeof Client2Server];

///////////////////////
// 2. 得到实例类型的联合
///////////////////////
export type Client2ServerRequest = InstanceType<Client2ServerCtors>;
/**
 * 用于接收的消息构造函数（Ack），
 * - 带有静态 decode 方法，返回 TAck
 */
export type AckCtor<T> = {
    decode(reader: $protobuf.Reader | Uint8Array, length?: number): T;
};