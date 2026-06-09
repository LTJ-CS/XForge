/* eslint-disable @typescript-eslint/init-declarations */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable curly */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal.js";
import Long from "long";
$protobuf.default.util.Long = Long;
$protobuf.default.configure();

const $Reader = $protobuf.default.Reader, $Writer = $protobuf.default.Writer, $util = $protobuf.default.util;

const $root = {};

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    common.HeartBeatReqInfo = (function() {

        /**
         * Properties of a HeartBeatReqInfo.
         * @memberof common
         * @interface IHeartBeatReqInfo
         * @property {Long|null} [clientTime] HeartBeatReqInfo clientTime
         */

        /**
         * Constructs a new HeartBeatReqInfo.
         * @memberof common
         * @classdesc Represents a HeartBeatReqInfo.
         * @implements IHeartBeatReqInfo
         * @constructor
         * @param {common.IHeartBeatReqInfo=} [p] Properties to set
         */
        function HeartBeatReqInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * HeartBeatReqInfo clientTime.
         * @member {Long} clientTime
         * @memberof common.HeartBeatReqInfo
         * @instance
         */
        HeartBeatReqInfo.prototype.clientTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified HeartBeatReqInfo message. Does not implicitly {@link common.HeartBeatReqInfo.verify|verify} messages.
         * @function encode
         * @memberof common.HeartBeatReqInfo
         * @static
         * @param {common.HeartBeatReqInfo} m HeartBeatReqInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReqInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.clientTime != null && Object.hasOwnProperty.call(m, "clientTime"))
                w.uint32(8).int64(m.clientTime);
            return w;
        };

        /**
         * Decodes a HeartBeatReqInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.HeartBeatReqInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.HeartBeatReqInfo} HeartBeatReqInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReqInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.HeartBeatReqInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.clientTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name common.HeartBeatReqInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=1001 OpCode value
         */
        HeartBeatReqInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1001] = "OpCode"] = 1001;
            return values;
        })();

        return HeartBeatReqInfo;
    })();

    common.HeartBeatAckInfo = (function() {

        /**
         * Properties of a HeartBeatAckInfo.
         * @memberof common
         * @interface IHeartBeatAckInfo
         * @property {Long|null} [serverTime] HeartBeatAckInfo serverTime
         */

        /**
         * Constructs a new HeartBeatAckInfo.
         * @memberof common
         * @classdesc Represents a HeartBeatAckInfo.
         * @implements IHeartBeatAckInfo
         * @constructor
         * @param {common.IHeartBeatAckInfo=} [p] Properties to set
         */
        function HeartBeatAckInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * HeartBeatAckInfo serverTime.
         * @member {Long} serverTime
         * @memberof common.HeartBeatAckInfo
         * @instance
         */
        HeartBeatAckInfo.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified HeartBeatAckInfo message. Does not implicitly {@link common.HeartBeatAckInfo.verify|verify} messages.
         * @function encode
         * @memberof common.HeartBeatAckInfo
         * @static
         * @param {common.HeartBeatAckInfo} m HeartBeatAckInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatAckInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.serverTime != null && Object.hasOwnProperty.call(m, "serverTime"))
                w.uint32(8).int64(m.serverTime);
            return w;
        };

        /**
         * Decodes a HeartBeatAckInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.HeartBeatAckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.HeartBeatAckInfo} HeartBeatAckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatAckInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.HeartBeatAckInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.serverTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name common.HeartBeatAckInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=1002 OpCode value
         */
        HeartBeatAckInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1002] = "OpCode"] = 1002;
            return values;
        })();

        return HeartBeatAckInfo;
    })();

    common.UserLoginNtfInfo = (function() {

        /**
         * Properties of a UserLoginNtfInfo.
         * @memberof common
         * @interface IUserLoginNtfInfo
         * @property {string|null} [reConnectToken] UserLoginNtfInfo reConnectToken
         */

        /**
         * Constructs a new UserLoginNtfInfo.
         * @memberof common
         * @classdesc Represents a UserLoginNtfInfo.
         * @implements IUserLoginNtfInfo
         * @constructor
         * @param {common.IUserLoginNtfInfo=} [p] Properties to set
         */
        function UserLoginNtfInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserLoginNtfInfo reConnectToken.
         * @member {string} reConnectToken
         * @memberof common.UserLoginNtfInfo
         * @instance
         */
        UserLoginNtfInfo.prototype.reConnectToken = "";

        /**
         * Encodes the specified UserLoginNtfInfo message. Does not implicitly {@link common.UserLoginNtfInfo.verify|verify} messages.
         * @function encode
         * @memberof common.UserLoginNtfInfo
         * @static
         * @param {common.UserLoginNtfInfo} m UserLoginNtfInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginNtfInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.reConnectToken != null && Object.hasOwnProperty.call(m, "reConnectToken"))
                w.uint32(10).string(m.reConnectToken);
            return w;
        };

        /**
         * Decodes a UserLoginNtfInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.UserLoginNtfInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.UserLoginNtfInfo} UserLoginNtfInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginNtfInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.UserLoginNtfInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.reConnectToken = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name common.UserLoginNtfInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=1003 OpCode value
         */
        UserLoginNtfInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1003] = "OpCode"] = 1003;
            return values;
        })();

        return UserLoginNtfInfo;
    })();

    common.UserCloseConnectNtfInfo = (function() {

        /**
         * Properties of a UserCloseConnectNtfInfo.
         * @memberof common
         * @interface IUserCloseConnectNtfInfo
         * @property {common.UserCloseConnectNtfInfo.CloseType|null} [closeType] UserCloseConnectNtfInfo closeType
         */

        /**
         * Constructs a new UserCloseConnectNtfInfo.
         * @memberof common
         * @classdesc Represents a UserCloseConnectNtfInfo.
         * @implements IUserCloseConnectNtfInfo
         * @constructor
         * @param {common.IUserCloseConnectNtfInfo=} [p] Properties to set
         */
        function UserCloseConnectNtfInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserCloseConnectNtfInfo closeType.
         * @member {common.UserCloseConnectNtfInfo.CloseType} closeType
         * @memberof common.UserCloseConnectNtfInfo
         * @instance
         */
        UserCloseConnectNtfInfo.prototype.closeType = 0;

        /**
         * Encodes the specified UserCloseConnectNtfInfo message. Does not implicitly {@link common.UserCloseConnectNtfInfo.verify|verify} messages.
         * @function encode
         * @memberof common.UserCloseConnectNtfInfo
         * @static
         * @param {common.UserCloseConnectNtfInfo} m UserCloseConnectNtfInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserCloseConnectNtfInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.closeType != null && Object.hasOwnProperty.call(m, "closeType"))
                w.uint32(8).int32(m.closeType);
            return w;
        };

        /**
         * Decodes a UserCloseConnectNtfInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.UserCloseConnectNtfInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.UserCloseConnectNtfInfo} UserCloseConnectNtfInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserCloseConnectNtfInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.UserCloseConnectNtfInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.closeType = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name common.UserCloseConnectNtfInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=1004 OpCode value
         */
        UserCloseConnectNtfInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1004] = "OpCode"] = 1004;
            return values;
        })();

        /**
         * CloseType enum.
         * @name common.UserCloseConnectNtfInfo.CloseType
         * @enum {number}
         * @property {number} Invalid=0 Invalid value
         * @property {number} CloseByKick=1 CloseByKick value
         * @property {number} CloseByNewConnect=2 CloseByNewConnect value
         */
        UserCloseConnectNtfInfo.CloseType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invalid"] = 0;
            values[valuesById[1] = "CloseByKick"] = 1;
            values[valuesById[2] = "CloseByNewConnect"] = 2;
            return values;
        })();

        return UserCloseConnectNtfInfo;
    })();

    common.ClientPrepared = (function() {

        /**
         * Properties of a ClientPrepared.
         * @memberof common
         * @interface IClientPrepared
         */

        /**
         * Constructs a new ClientPrepared.
         * @memberof common
         * @classdesc Represents a ClientPrepared.
         * @implements IClientPrepared
         * @constructor
         * @param {common.IClientPrepared=} [p] Properties to set
         */
        function ClientPrepared(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified ClientPrepared message. Does not implicitly {@link common.ClientPrepared.verify|verify} messages.
         * @function encode
         * @memberof common.ClientPrepared
         * @static
         * @param {common.ClientPrepared} m ClientPrepared message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPrepared.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a ClientPrepared message from the specified reader or buffer.
         * @function decode
         * @memberof common.ClientPrepared
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.ClientPrepared} ClientPrepared
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPrepared.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.ClientPrepared();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name common.ClientPrepared.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=1005 OpCode value
         */
        ClientPrepared.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1005] = "OpCode"] = 1005;
            return values;
        })();

        return ClientPrepared;
    })();

    /**
     * EPlatform enum.
     * @name common.EPlatform
     * @enum {number}
     * @property {number} PlatformUnknown=0 PlatformUnknown value
     * @property {number} PlatformWx=1 PlatformWx value
     * @property {number} PlatformQQ=2 PlatformQQ value
     * @property {number} PlatformTT=3 PlatformTT value
     * @property {number} PlatformVIVO=4 PlatformVIVO value
     * @property {number} PlatformOPPO=5 PlatformOPPO value
     * @property {number} PlatformKS=6 PlatformKS value
     * @property {number} PlatformJoyo=7 PlatformJoyo value
     * @property {number} PlatformTTFree=8 PlatformTTFree value
     * @property {number} PlatformHW=9 PlatformHW value
     * @property {number} PlatformAli=10 PlatformAli value
     * @property {number} PlatformXHS=11 PlatformXHS value
     * @property {number} PlatformBeta=999 PlatformBeta value
     */
    common.EPlatform = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PlatformUnknown"] = 0;
        values[valuesById[1] = "PlatformWx"] = 1;
        values[valuesById[2] = "PlatformQQ"] = 2;
        values[valuesById[3] = "PlatformTT"] = 3;
        values[valuesById[4] = "PlatformVIVO"] = 4;
        values[valuesById[5] = "PlatformOPPO"] = 5;
        values[valuesById[6] = "PlatformKS"] = 6;
        values[valuesById[7] = "PlatformJoyo"] = 7;
        values[valuesById[8] = "PlatformTTFree"] = 8;
        values[valuesById[9] = "PlatformHW"] = 9;
        values[valuesById[10] = "PlatformAli"] = 10;
        values[valuesById[11] = "PlatformXHS"] = 11;
        values[valuesById[999] = "PlatformBeta"] = 999;
        return values;
    })();

    /**
     * EClientOS enum.
     * @name common.EClientOS
     * @enum {number}
     * @property {number} UnknownOS=0 UnknownOS value
     * @property {number} Android=1 Android value
     * @property {number} IOS=2 IOS value
     */
    common.EClientOS = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UnknownOS"] = 0;
        values[valuesById[1] = "Android"] = 1;
        values[valuesById[2] = "IOS"] = 2;
        return values;
    })();

    common.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof common
         * @interface ILogin
         * @property {string|null} [code] Login code
         * @property {common.Login.Platform|null} [platform] Login platform
         * @property {string|null} [channel] Login channel
         */

        /**
         * Constructs a new Login.
         * @memberof common
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {common.ILogin=} [p] Properties to set
         */
        function Login(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Login code.
         * @member {string} code
         * @memberof common.Login
         * @instance
         */
        Login.prototype.code = "";

        /**
         * Login platform.
         * @member {common.Login.Platform} platform
         * @memberof common.Login
         * @instance
         */
        Login.prototype.platform = 0;

        /**
         * Login channel.
         * @member {string} channel
         * @memberof common.Login
         * @instance
         */
        Login.prototype.channel = "";

        /**
         * Encodes the specified Login message. Does not implicitly {@link common.Login.verify|verify} messages.
         * @function encode
         * @memberof common.Login
         * @static
         * @param {common.Login} m Login message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(10).string(m.code);
            if (m.platform != null && Object.hasOwnProperty.call(m, "platform"))
                w.uint32(16).int32(m.platform);
            if (m.channel != null && Object.hasOwnProperty.call(m, "channel"))
                w.uint32(26).string(m.channel);
            return w;
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof common.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.Login();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.string();
                        break;
                    }
                case 2: {
                        m.platform = r.int32();
                        break;
                    }
                case 3: {
                        m.channel = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name common.Login.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=1101 OpCode value
         */
        Login.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1101] = "OpCode"] = 1101;
            return values;
        })();

        /**
         * Platform enum.
         * @name common.Login.Platform
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} WX=1 WX value
         * @property {number} QQ=2 QQ value
         * @property {number} TT=3 TT value
         * @property {number} VIVO=4 VIVO value
         * @property {number} OPPO=5 OPPO value
         * @property {number} KS=6 KS value
         * @property {number} JOYO=7 JOYO value
         * @property {number} HW=8 HW value
         * @property {number} Zfb=9 Zfb value
         * @property {number} Xhs=10 Xhs value
         * @property {number} BETA=999 BETA value
         */
        Login.Platform = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "WX"] = 1;
            values[valuesById[2] = "QQ"] = 2;
            values[valuesById[3] = "TT"] = 3;
            values[valuesById[4] = "VIVO"] = 4;
            values[valuesById[5] = "OPPO"] = 5;
            values[valuesById[6] = "KS"] = 6;
            values[valuesById[7] = "JOYO"] = 7;
            values[valuesById[8] = "HW"] = 8;
            values[valuesById[9] = "Zfb"] = 9;
            values[valuesById[10] = "Xhs"] = 10;
            values[valuesById[999] = "BETA"] = 999;
            return values;
        })();

        return Login;
    })();

    common.LoginAck = (function() {

        /**
         * Properties of a LoginAck.
         * @memberof common
         * @interface ILoginAck
         * @property {string|null} [uid] LoginAck uid
         * @property {string|null} [token] LoginAck token
         * @property {Long|null} [time] LoginAck time
         * @property {number|null} [platform] LoginAck platform
         * @property {string|null} [avatar] LoginAck avatar
         * @property {string|null} [nickName] LoginAck nickName
         */

        /**
         * Constructs a new LoginAck.
         * @memberof common
         * @classdesc Represents a LoginAck.
         * @implements ILoginAck
         * @constructor
         * @param {common.ILoginAck=} [p] Properties to set
         */
        function LoginAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LoginAck uid.
         * @member {string} uid
         * @memberof common.LoginAck
         * @instance
         */
        LoginAck.prototype.uid = "";

        /**
         * LoginAck token.
         * @member {string} token
         * @memberof common.LoginAck
         * @instance
         */
        LoginAck.prototype.token = "";

        /**
         * LoginAck time.
         * @member {Long} time
         * @memberof common.LoginAck
         * @instance
         */
        LoginAck.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LoginAck platform.
         * @member {number} platform
         * @memberof common.LoginAck
         * @instance
         */
        LoginAck.prototype.platform = 0;

        /**
         * LoginAck avatar.
         * @member {string} avatar
         * @memberof common.LoginAck
         * @instance
         */
        LoginAck.prototype.avatar = "";

        /**
         * LoginAck nickName.
         * @member {string} nickName
         * @memberof common.LoginAck
         * @instance
         */
        LoginAck.prototype.nickName = "";

        /**
         * Encodes the specified LoginAck message. Does not implicitly {@link common.LoginAck.verify|verify} messages.
         * @function encode
         * @memberof common.LoginAck
         * @static
         * @param {common.LoginAck} m LoginAck message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginAck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(18).string(m.token);
            if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                w.uint32(24).int64(m.time);
            if (m.platform != null && Object.hasOwnProperty.call(m, "platform"))
                w.uint32(32).int32(m.platform);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(42).string(m.avatar);
            if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
                w.uint32(50).string(m.nickName);
            return w;
        };

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @function decode
         * @memberof common.LoginAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.LoginAck} LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.LoginAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.token = r.string();
                        break;
                    }
                case 3: {
                        m.time = r.int64();
                        break;
                    }
                case 4: {
                        m.platform = r.int32();
                        break;
                    }
                case 5: {
                        m.avatar = r.string();
                        break;
                    }
                case 6: {
                        m.nickName = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LoginAck;
    })();

    /**
     * ERecommendTag enum.
     * @name common.ERecommendTag
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} SameCity=1 SameCity value
     * @property {number} OppositeSex=2 OppositeSex value
     * @property {number} SameFriend=3 SameFriend value
     */
    common.ERecommendTag = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "SameCity"] = 1;
        values[valuesById[2] = "OppositeSex"] = 2;
        values[valuesById[3] = "SameFriend"] = 3;
        return values;
    })();

    /**
     * EGender enum.
     * @name common.EGender
     * @enum {number}
     * @property {number} DefaultGender=0 DefaultGender value
     * @property {number} Female=1 Female value
     * @property {number} Male=2 Male value
     */
    common.EGender = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DefaultGender"] = 0;
        values[valuesById[1] = "Female"] = 1;
        values[valuesById[2] = "Male"] = 2;
        return values;
    })();

    common.FriendUserInfo = (function() {

        /**
         * Properties of a FriendUserInfo.
         * @memberof common
         * @interface IFriendUserInfo
         * @property {string|null} [uid] FriendUserInfo uid
         * @property {string|null} [liteId] FriendUserInfo liteId
         * @property {string|null} [name] FriendUserInfo name
         * @property {string|null} [avatar] FriendUserInfo avatar
         * @property {number|null} [gender] FriendUserInfo gender
         * @property {number|null} [loginTs] FriendUserInfo loginTs
         * @property {number|null} [logoffTs] FriendUserInfo logoffTs
         * @property {number|null} [adCode] FriendUserInfo adCode
         * @property {string|null} [sign] FriendUserInfo sign
         * @property {common.ERecommendTag|null} [recommendTag] FriendUserInfo recommendTag
         * @property {boolean|null} [isCanSend] FriendUserInfo isCanSend
         * @property {boolean|null} [isOnline] FriendUserInfo isOnline
         * @property {number|null} [characterSkin] FriendUserInfo characterSkin
         * @property {boolean|null} [isCanOpen] FriendUserInfo isCanOpen
         * @property {boolean|null} [isClaimed] FriendUserInfo isClaimed
         */

        /**
         * Constructs a new FriendUserInfo.
         * @memberof common
         * @classdesc Represents a FriendUserInfo.
         * @implements IFriendUserInfo
         * @constructor
         * @param {common.IFriendUserInfo=} [p] Properties to set
         */
        function FriendUserInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FriendUserInfo uid.
         * @member {string} uid
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.uid = "";

        /**
         * FriendUserInfo liteId.
         * @member {string} liteId
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.liteId = "";

        /**
         * FriendUserInfo name.
         * @member {string} name
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.name = "";

        /**
         * FriendUserInfo avatar.
         * @member {string} avatar
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.avatar = "";

        /**
         * FriendUserInfo gender.
         * @member {number} gender
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.gender = 0;

        /**
         * FriendUserInfo loginTs.
         * @member {number} loginTs
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.loginTs = 0;

        /**
         * FriendUserInfo logoffTs.
         * @member {number} logoffTs
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.logoffTs = 0;

        /**
         * FriendUserInfo adCode.
         * @member {number} adCode
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.adCode = 0;

        /**
         * FriendUserInfo sign.
         * @member {string} sign
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.sign = "";

        /**
         * FriendUserInfo recommendTag.
         * @member {common.ERecommendTag} recommendTag
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.recommendTag = 0;

        /**
         * FriendUserInfo isCanSend.
         * @member {boolean} isCanSend
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.isCanSend = false;

        /**
         * FriendUserInfo isOnline.
         * @member {boolean} isOnline
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.isOnline = false;

        /**
         * FriendUserInfo characterSkin.
         * @member {number} characterSkin
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.characterSkin = 0;

        /**
         * FriendUserInfo isCanOpen.
         * @member {boolean} isCanOpen
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.isCanOpen = false;

        /**
         * FriendUserInfo isClaimed.
         * @member {boolean} isClaimed
         * @memberof common.FriendUserInfo
         * @instance
         */
        FriendUserInfo.prototype.isClaimed = false;

        /**
         * Encodes the specified FriendUserInfo message. Does not implicitly {@link common.FriendUserInfo.verify|verify} messages.
         * @function encode
         * @memberof common.FriendUserInfo
         * @static
         * @param {common.FriendUserInfo} m FriendUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendUserInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(18).string(m.liteId);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(26).string(m.name);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(34).string(m.avatar);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(40).int32(m.gender);
            if (m.loginTs != null && Object.hasOwnProperty.call(m, "loginTs"))
                w.uint32(48).int32(m.loginTs);
            if (m.logoffTs != null && Object.hasOwnProperty.call(m, "logoffTs"))
                w.uint32(56).int32(m.logoffTs);
            if (m.adCode != null && Object.hasOwnProperty.call(m, "adCode"))
                w.uint32(64).int32(m.adCode);
            if (m.sign != null && Object.hasOwnProperty.call(m, "sign"))
                w.uint32(74).string(m.sign);
            if (m.recommendTag != null && Object.hasOwnProperty.call(m, "recommendTag"))
                w.uint32(80).int32(m.recommendTag);
            if (m.isCanSend != null && Object.hasOwnProperty.call(m, "isCanSend"))
                w.uint32(88).bool(m.isCanSend);
            if (m.isOnline != null && Object.hasOwnProperty.call(m, "isOnline"))
                w.uint32(96).bool(m.isOnline);
            if (m.characterSkin != null && Object.hasOwnProperty.call(m, "characterSkin"))
                w.uint32(104).int32(m.characterSkin);
            if (m.isCanOpen != null && Object.hasOwnProperty.call(m, "isCanOpen"))
                w.uint32(112).bool(m.isCanOpen);
            if (m.isClaimed != null && Object.hasOwnProperty.call(m, "isClaimed"))
                w.uint32(120).bool(m.isClaimed);
            return w;
        };

        /**
         * Decodes a FriendUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.FriendUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.FriendUserInfo} FriendUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendUserInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.FriendUserInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.liteId = r.string();
                        break;
                    }
                case 3: {
                        m.name = r.string();
                        break;
                    }
                case 4: {
                        m.avatar = r.string();
                        break;
                    }
                case 5: {
                        m.gender = r.int32();
                        break;
                    }
                case 6: {
                        m.loginTs = r.int32();
                        break;
                    }
                case 7: {
                        m.logoffTs = r.int32();
                        break;
                    }
                case 8: {
                        m.adCode = r.int32();
                        break;
                    }
                case 9: {
                        m.sign = r.string();
                        break;
                    }
                case 10: {
                        m.recommendTag = r.int32();
                        break;
                    }
                case 11: {
                        m.isCanSend = r.bool();
                        break;
                    }
                case 12: {
                        m.isOnline = r.bool();
                        break;
                    }
                case 13: {
                        m.characterSkin = r.int32();
                        break;
                    }
                case 14: {
                        m.isCanOpen = r.bool();
                        break;
                    }
                case 15: {
                        m.isClaimed = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FriendUserInfo;
    })();

    common.Item = (function() {

        /**
         * Properties of an Item.
         * @memberof common
         * @interface IItem
         * @property {string|null} [ItemUid] Item ItemUid
         * @property {number|null} [ItemId] Item ItemId
         * @property {number|null} [ItemCount] Item ItemCount
         * @property {Long|null} [CreateTime] Item CreateTime
         * @property {string|null} [Reason] Item Reason
         * @property {number|null} [ItemType] Item ItemType
         * @property {boolean|null} [IsNew] Item IsNew
         */

        /**
         * Constructs a new Item.
         * @memberof common
         * @classdesc Represents an Item.
         * @implements IItem
         * @constructor
         * @param {common.IItem=} [p] Properties to set
         */
        function Item(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Item ItemUid.
         * @member {string} ItemUid
         * @memberof common.Item
         * @instance
         */
        Item.prototype.ItemUid = "";

        /**
         * Item ItemId.
         * @member {number} ItemId
         * @memberof common.Item
         * @instance
         */
        Item.prototype.ItemId = 0;

        /**
         * Item ItemCount.
         * @member {number} ItemCount
         * @memberof common.Item
         * @instance
         */
        Item.prototype.ItemCount = 0;

        /**
         * Item CreateTime.
         * @member {Long} CreateTime
         * @memberof common.Item
         * @instance
         */
        Item.prototype.CreateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Item Reason.
         * @member {string} Reason
         * @memberof common.Item
         * @instance
         */
        Item.prototype.Reason = "";

        /**
         * Item ItemType.
         * @member {number} ItemType
         * @memberof common.Item
         * @instance
         */
        Item.prototype.ItemType = 0;

        /**
         * Item IsNew.
         * @member {boolean} IsNew
         * @memberof common.Item
         * @instance
         */
        Item.prototype.IsNew = false;

        /**
         * Encodes the specified Item message. Does not implicitly {@link common.Item.verify|verify} messages.
         * @function encode
         * @memberof common.Item
         * @static
         * @param {common.Item} m Item message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Item.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemUid != null && Object.hasOwnProperty.call(m, "ItemUid"))
                w.uint32(10).string(m.ItemUid);
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(16).int32(m.ItemId);
            if (m.ItemCount != null && Object.hasOwnProperty.call(m, "ItemCount"))
                w.uint32(24).int32(m.ItemCount);
            if (m.CreateTime != null && Object.hasOwnProperty.call(m, "CreateTime"))
                w.uint32(32).int64(m.CreateTime);
            if (m.Reason != null && Object.hasOwnProperty.call(m, "Reason"))
                w.uint32(42).string(m.Reason);
            if (m.ItemType != null && Object.hasOwnProperty.call(m, "ItemType"))
                w.uint32(48).int32(m.ItemType);
            if (m.IsNew != null && Object.hasOwnProperty.call(m, "IsNew"))
                w.uint32(56).bool(m.IsNew);
            return w;
        };

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @function decode
         * @memberof common.Item
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.Item} Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Item.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.Item();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ItemUid = r.string();
                        break;
                    }
                case 2: {
                        m.ItemId = r.int32();
                        break;
                    }
                case 3: {
                        m.ItemCount = r.int32();
                        break;
                    }
                case 4: {
                        m.CreateTime = r.int64();
                        break;
                    }
                case 5: {
                        m.Reason = r.string();
                        break;
                    }
                case 6: {
                        m.ItemType = r.int32();
                        break;
                    }
                case 7: {
                        m.IsNew = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Item;
    })();

    common.PlatformGift = (function() {

        /**
         * Properties of a PlatformGift.
         * @memberof common
         * @interface IPlatformGift
         * @property {string|null} [GiftId] PlatformGift GiftId
         * @property {number|null} [GiftType] PlatformGift GiftType
         * @property {string|null} [GiftDesc] PlatformGift GiftDesc
         * @property {Long|null} [CreateTime] PlatformGift CreateTime
         * @property {Array.<common.Item>|null} [Items] PlatformGift Items
         */

        /**
         * Constructs a new PlatformGift.
         * @memberof common
         * @classdesc Represents a PlatformGift.
         * @implements IPlatformGift
         * @constructor
         * @param {common.IPlatformGift=} [p] Properties to set
         */
        function PlatformGift(p) {
            this.Items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlatformGift GiftId.
         * @member {string} GiftId
         * @memberof common.PlatformGift
         * @instance
         */
        PlatformGift.prototype.GiftId = "";

        /**
         * PlatformGift GiftType.
         * @member {number} GiftType
         * @memberof common.PlatformGift
         * @instance
         */
        PlatformGift.prototype.GiftType = 0;

        /**
         * PlatformGift GiftDesc.
         * @member {string} GiftDesc
         * @memberof common.PlatformGift
         * @instance
         */
        PlatformGift.prototype.GiftDesc = "";

        /**
         * PlatformGift CreateTime.
         * @member {Long} CreateTime
         * @memberof common.PlatformGift
         * @instance
         */
        PlatformGift.prototype.CreateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlatformGift Items.
         * @member {Array.<common.Item>} Items
         * @memberof common.PlatformGift
         * @instance
         */
        PlatformGift.prototype.Items = $util.emptyArray;

        /**
         * Encodes the specified PlatformGift message. Does not implicitly {@link common.PlatformGift.verify|verify} messages.
         * @function encode
         * @memberof common.PlatformGift
         * @static
         * @param {common.PlatformGift} m PlatformGift message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlatformGift.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GiftId != null && Object.hasOwnProperty.call(m, "GiftId"))
                w.uint32(10).string(m.GiftId);
            if (m.GiftType != null && Object.hasOwnProperty.call(m, "GiftType"))
                w.uint32(16).int32(m.GiftType);
            if (m.GiftDesc != null && Object.hasOwnProperty.call(m, "GiftDesc"))
                w.uint32(26).string(m.GiftDesc);
            if (m.CreateTime != null && Object.hasOwnProperty.call(m, "CreateTime"))
                w.uint32(32).int64(m.CreateTime);
            if (m.Items != null && m.Items.length) {
                for (var i = 0; i < m.Items.length; ++i)
                    $root.common.Item.encode(m.Items[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a PlatformGift message from the specified reader or buffer.
         * @function decode
         * @memberof common.PlatformGift
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.PlatformGift} PlatformGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlatformGift.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.PlatformGift();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.GiftId = r.string();
                        break;
                    }
                case 2: {
                        m.GiftType = r.int32();
                        break;
                    }
                case 3: {
                        m.GiftDesc = r.string();
                        break;
                    }
                case 4: {
                        m.CreateTime = r.int64();
                        break;
                    }
                case 5: {
                        if (!(m.Items && m.Items.length))
                            m.Items = [];
                        m.Items.push($root.common.Item.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlatformGift;
    })();

    /**
     * EWxGiftIdType enum.
     * @name common.EWxGiftIdType
     * @enum {number}
     * @property {number} NoneGift=0 NoneGift value
     * @property {number} DailyLogin=1 DailyLogin value
     * @property {number} WeekendGift=2 WeekendGift value
     */
    common.EWxGiftIdType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NoneGift"] = 0;
        values[valuesById[1] = "DailyLogin"] = 1;
        values[valuesById[2] = "WeekendGift"] = 2;
        return values;
    })();

    common.MatchRoomPlayerInfo = (function() {

        /**
         * Properties of a MatchRoomPlayerInfo.
         * @memberof common
         * @interface IMatchRoomPlayerInfo
         * @property {string|null} [userId] MatchRoomPlayerInfo userId
         * @property {string|null} [avatar] MatchRoomPlayerInfo avatar
         * @property {string|null} [name] MatchRoomPlayerInfo name
         * @property {Object.<string,number>|null} [usingSkin] MatchRoomPlayerInfo usingSkin
         * @property {number|null} [area] MatchRoomPlayerInfo area
         * @property {Long|null} [reachTime] MatchRoomPlayerInfo reachTime
         * @property {number|null} [maxScore] MatchRoomPlayerInfo maxScore
         * @property {number|null} [bonus] MatchRoomPlayerInfo bonus
         * @property {number|null} [highestScore] MatchRoomPlayerInfo highestScore
         */

        /**
         * Constructs a new MatchRoomPlayerInfo.
         * @memberof common
         * @classdesc Represents a MatchRoomPlayerInfo.
         * @implements IMatchRoomPlayerInfo
         * @constructor
         * @param {common.IMatchRoomPlayerInfo=} [p] Properties to set
         */
        function MatchRoomPlayerInfo(p) {
            this.usingSkin = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MatchRoomPlayerInfo userId.
         * @member {string} userId
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.userId = "";

        /**
         * MatchRoomPlayerInfo avatar.
         * @member {string} avatar
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.avatar = "";

        /**
         * MatchRoomPlayerInfo name.
         * @member {string} name
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.name = "";

        /**
         * MatchRoomPlayerInfo usingSkin.
         * @member {Object.<string,number>} usingSkin
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.usingSkin = $util.emptyObject;

        /**
         * MatchRoomPlayerInfo area.
         * @member {number} area
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.area = 0;

        /**
         * MatchRoomPlayerInfo reachTime.
         * @member {Long} reachTime
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.reachTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MatchRoomPlayerInfo maxScore.
         * @member {number} maxScore
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.maxScore = 0;

        /**
         * MatchRoomPlayerInfo bonus.
         * @member {number} bonus
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.bonus = 0;

        /**
         * MatchRoomPlayerInfo highestScore.
         * @member {number} highestScore
         * @memberof common.MatchRoomPlayerInfo
         * @instance
         */
        MatchRoomPlayerInfo.prototype.highestScore = 0;

        /**
         * Encodes the specified MatchRoomPlayerInfo message. Does not implicitly {@link common.MatchRoomPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof common.MatchRoomPlayerInfo
         * @static
         * @param {common.MatchRoomPlayerInfo} m MatchRoomPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchRoomPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(10).string(m.userId);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(18).string(m.avatar);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(26).string(m.name);
            if (m.usingSkin != null && Object.hasOwnProperty.call(m, "usingSkin")) {
                for (var ks = Object.keys(m.usingSkin), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.usingSkin[ks[i]]).ldelim();
                }
            }
            if (m.area != null && Object.hasOwnProperty.call(m, "area"))
                w.uint32(40).int32(m.area);
            if (m.reachTime != null && Object.hasOwnProperty.call(m, "reachTime"))
                w.uint32(48).int64(m.reachTime);
            if (m.maxScore != null && Object.hasOwnProperty.call(m, "maxScore"))
                w.uint32(56).int32(m.maxScore);
            if (m.bonus != null && Object.hasOwnProperty.call(m, "bonus"))
                w.uint32(64).int32(m.bonus);
            if (m.highestScore != null && Object.hasOwnProperty.call(m, "highestScore"))
                w.uint32(72).int32(m.highestScore);
            return w;
        };

        /**
         * Decodes a MatchRoomPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.MatchRoomPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.MatchRoomPlayerInfo} MatchRoomPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchRoomPlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.MatchRoomPlayerInfo(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.userId = r.string();
                        break;
                    }
                case 2: {
                        m.avatar = r.string();
                        break;
                    }
                case 3: {
                        m.name = r.string();
                        break;
                    }
                case 4: {
                        if (m.usingSkin === $util.emptyObject)
                            m.usingSkin = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = 0;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.int32();
                                break;
                            case 2:
                                value = r.int32();
                                break;
                            default:
                                r.skipType(tag2 & 7);
                                break;
                            }
                        }
                        m.usingSkin[k] = value;
                        break;
                    }
                case 5: {
                        m.area = r.int32();
                        break;
                    }
                case 6: {
                        m.reachTime = r.int64();
                        break;
                    }
                case 7: {
                        m.maxScore = r.int32();
                        break;
                    }
                case 8: {
                        m.bonus = r.int32();
                        break;
                    }
                case 9: {
                        m.highestScore = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MatchRoomPlayerInfo;
    })();

    common.MissionDataMsg = (function() {

        /**
         * Properties of a MissionDataMsg.
         * @memberof common
         * @interface IMissionDataMsg
         * @property {number|null} [missionId] MissionDataMsg missionId
         * @property {number|null} [missionType] MissionDataMsg missionType
         * @property {number|null} [functionType] MissionDataMsg functionType
         * @property {number|null} [maxProgress] MissionDataMsg maxProgress
         * @property {number|null} [curProgress] MissionDataMsg curProgress
         * @property {string|null} [desc] MissionDataMsg desc
         * @property {Long|null} [deadlineTime] MissionDataMsg deadlineTime
         * @property {number|null} [order] MissionDataMsg order
         * @property {number|null} [icon] MissionDataMsg icon
         */

        /**
         * Constructs a new MissionDataMsg.
         * @memberof common
         * @classdesc Represents a MissionDataMsg.
         * @implements IMissionDataMsg
         * @constructor
         * @param {common.IMissionDataMsg=} [p] Properties to set
         */
        function MissionDataMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MissionDataMsg missionId.
         * @member {number} missionId
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.missionId = 0;

        /**
         * MissionDataMsg missionType.
         * @member {number} missionType
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.missionType = 0;

        /**
         * MissionDataMsg functionType.
         * @member {number} functionType
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.functionType = 0;

        /**
         * MissionDataMsg maxProgress.
         * @member {number} maxProgress
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.maxProgress = 0;

        /**
         * MissionDataMsg curProgress.
         * @member {number} curProgress
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.curProgress = 0;

        /**
         * MissionDataMsg desc.
         * @member {string} desc
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.desc = "";

        /**
         * MissionDataMsg deadlineTime.
         * @member {Long} deadlineTime
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.deadlineTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MissionDataMsg order.
         * @member {number} order
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.order = 0;

        /**
         * MissionDataMsg icon.
         * @member {number} icon
         * @memberof common.MissionDataMsg
         * @instance
         */
        MissionDataMsg.prototype.icon = 0;

        /**
         * Encodes the specified MissionDataMsg message. Does not implicitly {@link common.MissionDataMsg.verify|verify} messages.
         * @function encode
         * @memberof common.MissionDataMsg
         * @static
         * @param {common.MissionDataMsg} m MissionDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MissionDataMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.missionId != null && Object.hasOwnProperty.call(m, "missionId"))
                w.uint32(8).int32(m.missionId);
            if (m.missionType != null && Object.hasOwnProperty.call(m, "missionType"))
                w.uint32(24).int32(m.missionType);
            if (m.functionType != null && Object.hasOwnProperty.call(m, "functionType"))
                w.uint32(32).int32(m.functionType);
            if (m.maxProgress != null && Object.hasOwnProperty.call(m, "maxProgress"))
                w.uint32(40).int32(m.maxProgress);
            if (m.curProgress != null && Object.hasOwnProperty.call(m, "curProgress"))
                w.uint32(48).int32(m.curProgress);
            if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                w.uint32(58).string(m.desc);
            if (m.deadlineTime != null && Object.hasOwnProperty.call(m, "deadlineTime"))
                w.uint32(64).int64(m.deadlineTime);
            if (m.order != null && Object.hasOwnProperty.call(m, "order"))
                w.uint32(72).int32(m.order);
            if (m.icon != null && Object.hasOwnProperty.call(m, "icon"))
                w.uint32(80).int32(m.icon);
            return w;
        };

        /**
         * Decodes a MissionDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof common.MissionDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.MissionDataMsg} MissionDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MissionDataMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.MissionDataMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.missionId = r.int32();
                        break;
                    }
                case 3: {
                        m.missionType = r.int32();
                        break;
                    }
                case 4: {
                        m.functionType = r.int32();
                        break;
                    }
                case 5: {
                        m.maxProgress = r.int32();
                        break;
                    }
                case 6: {
                        m.curProgress = r.int32();
                        break;
                    }
                case 7: {
                        m.desc = r.string();
                        break;
                    }
                case 8: {
                        m.deadlineTime = r.int64();
                        break;
                    }
                case 9: {
                        m.order = r.int32();
                        break;
                    }
                case 10: {
                        m.icon = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MissionDataMsg;
    })();

    common.MissionTypeReward = (function() {

        /**
         * Properties of a MissionTypeReward.
         * @memberof common
         * @interface IMissionTypeReward
         * @property {number|null} [missionType] MissionTypeReward missionType
         * @property {number|null} [rewardId] MissionTypeReward rewardId
         * @property {number|null} [rewardCnt] MissionTypeReward rewardCnt
         * @property {boolean|null} [isReceived] MissionTypeReward isReceived
         */

        /**
         * Constructs a new MissionTypeReward.
         * @memberof common
         * @classdesc Represents a MissionTypeReward.
         * @implements IMissionTypeReward
         * @constructor
         * @param {common.IMissionTypeReward=} [p] Properties to set
         */
        function MissionTypeReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MissionTypeReward missionType.
         * @member {number} missionType
         * @memberof common.MissionTypeReward
         * @instance
         */
        MissionTypeReward.prototype.missionType = 0;

        /**
         * MissionTypeReward rewardId.
         * @member {number} rewardId
         * @memberof common.MissionTypeReward
         * @instance
         */
        MissionTypeReward.prototype.rewardId = 0;

        /**
         * MissionTypeReward rewardCnt.
         * @member {number} rewardCnt
         * @memberof common.MissionTypeReward
         * @instance
         */
        MissionTypeReward.prototype.rewardCnt = 0;

        /**
         * MissionTypeReward isReceived.
         * @member {boolean} isReceived
         * @memberof common.MissionTypeReward
         * @instance
         */
        MissionTypeReward.prototype.isReceived = false;

        /**
         * Encodes the specified MissionTypeReward message. Does not implicitly {@link common.MissionTypeReward.verify|verify} messages.
         * @function encode
         * @memberof common.MissionTypeReward
         * @static
         * @param {common.MissionTypeReward} m MissionTypeReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MissionTypeReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.missionType != null && Object.hasOwnProperty.call(m, "missionType"))
                w.uint32(8).int32(m.missionType);
            if (m.rewardId != null && Object.hasOwnProperty.call(m, "rewardId"))
                w.uint32(16).int32(m.rewardId);
            if (m.rewardCnt != null && Object.hasOwnProperty.call(m, "rewardCnt"))
                w.uint32(24).int32(m.rewardCnt);
            if (m.isReceived != null && Object.hasOwnProperty.call(m, "isReceived"))
                w.uint32(32).bool(m.isReceived);
            return w;
        };

        /**
         * Decodes a MissionTypeReward message from the specified reader or buffer.
         * @function decode
         * @memberof common.MissionTypeReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.MissionTypeReward} MissionTypeReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MissionTypeReward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.MissionTypeReward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.missionType = r.int32();
                        break;
                    }
                case 2: {
                        m.rewardId = r.int32();
                        break;
                    }
                case 3: {
                        m.rewardCnt = r.int32();
                        break;
                    }
                case 4: {
                        m.isReceived = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MissionTypeReward;
    })();

    common.ChapterDataMsg = (function() {

        /**
         * Properties of a ChapterDataMsg.
         * @memberof common
         * @interface IChapterDataMsg
         * @property {number|null} [chapterId] ChapterDataMsg chapterId
         * @property {string|null} [name] ChapterDataMsg name
         * @property {number|null} [setLevel] ChapterDataMsg setLevel
         * @property {boolean|null} [isUnlock] ChapterDataMsg isUnlock
         * @property {number|null} [chapterOrder] ChapterDataMsg chapterOrder
         */

        /**
         * Constructs a new ChapterDataMsg.
         * @memberof common
         * @classdesc Represents a ChapterDataMsg.
         * @implements IChapterDataMsg
         * @constructor
         * @param {common.IChapterDataMsg=} [p] Properties to set
         */
        function ChapterDataMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ChapterDataMsg chapterId.
         * @member {number} chapterId
         * @memberof common.ChapterDataMsg
         * @instance
         */
        ChapterDataMsg.prototype.chapterId = 0;

        /**
         * ChapterDataMsg name.
         * @member {string} name
         * @memberof common.ChapterDataMsg
         * @instance
         */
        ChapterDataMsg.prototype.name = "";

        /**
         * ChapterDataMsg setLevel.
         * @member {number} setLevel
         * @memberof common.ChapterDataMsg
         * @instance
         */
        ChapterDataMsg.prototype.setLevel = 0;

        /**
         * ChapterDataMsg isUnlock.
         * @member {boolean} isUnlock
         * @memberof common.ChapterDataMsg
         * @instance
         */
        ChapterDataMsg.prototype.isUnlock = false;

        /**
         * ChapterDataMsg chapterOrder.
         * @member {number} chapterOrder
         * @memberof common.ChapterDataMsg
         * @instance
         */
        ChapterDataMsg.prototype.chapterOrder = 0;

        /**
         * Encodes the specified ChapterDataMsg message. Does not implicitly {@link common.ChapterDataMsg.verify|verify} messages.
         * @function encode
         * @memberof common.ChapterDataMsg
         * @static
         * @param {common.ChapterDataMsg} m ChapterDataMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChapterDataMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chapterId != null && Object.hasOwnProperty.call(m, "chapterId"))
                w.uint32(8).int32(m.chapterId);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.setLevel != null && Object.hasOwnProperty.call(m, "setLevel"))
                w.uint32(24).int32(m.setLevel);
            if (m.isUnlock != null && Object.hasOwnProperty.call(m, "isUnlock"))
                w.uint32(32).bool(m.isUnlock);
            if (m.chapterOrder != null && Object.hasOwnProperty.call(m, "chapterOrder"))
                w.uint32(40).int32(m.chapterOrder);
            return w;
        };

        /**
         * Decodes a ChapterDataMsg message from the specified reader or buffer.
         * @function decode
         * @memberof common.ChapterDataMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.ChapterDataMsg} ChapterDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChapterDataMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.ChapterDataMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.chapterId = r.int32();
                        break;
                    }
                case 2: {
                        m.name = r.string();
                        break;
                    }
                case 3: {
                        m.setLevel = r.int32();
                        break;
                    }
                case 4: {
                        m.isUnlock = r.bool();
                        break;
                    }
                case 5: {
                        m.chapterOrder = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ChapterDataMsg;
    })();

    common.StoryModeRewardMsg = (function() {

        /**
         * Properties of a StoryModeRewardMsg.
         * @memberof common
         * @interface IStoryModeRewardMsg
         * @property {number|null} [rewardId] StoryModeRewardMsg rewardId
         * @property {number|null} [rewardCnt] StoryModeRewardMsg rewardCnt
         * @property {boolean|null} [isReceived] StoryModeRewardMsg isReceived
         * @property {number|null} [requireCount] StoryModeRewardMsg requireCount
         */

        /**
         * Constructs a new StoryModeRewardMsg.
         * @memberof common
         * @classdesc Represents a StoryModeRewardMsg.
         * @implements IStoryModeRewardMsg
         * @constructor
         * @param {common.IStoryModeRewardMsg=} [p] Properties to set
         */
        function StoryModeRewardMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * StoryModeRewardMsg rewardId.
         * @member {number} rewardId
         * @memberof common.StoryModeRewardMsg
         * @instance
         */
        StoryModeRewardMsg.prototype.rewardId = 0;

        /**
         * StoryModeRewardMsg rewardCnt.
         * @member {number} rewardCnt
         * @memberof common.StoryModeRewardMsg
         * @instance
         */
        StoryModeRewardMsg.prototype.rewardCnt = 0;

        /**
         * StoryModeRewardMsg isReceived.
         * @member {boolean} isReceived
         * @memberof common.StoryModeRewardMsg
         * @instance
         */
        StoryModeRewardMsg.prototype.isReceived = false;

        /**
         * StoryModeRewardMsg requireCount.
         * @member {number} requireCount
         * @memberof common.StoryModeRewardMsg
         * @instance
         */
        StoryModeRewardMsg.prototype.requireCount = 0;

        /**
         * Encodes the specified StoryModeRewardMsg message. Does not implicitly {@link common.StoryModeRewardMsg.verify|verify} messages.
         * @function encode
         * @memberof common.StoryModeRewardMsg
         * @static
         * @param {common.StoryModeRewardMsg} m StoryModeRewardMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StoryModeRewardMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rewardId != null && Object.hasOwnProperty.call(m, "rewardId"))
                w.uint32(8).int32(m.rewardId);
            if (m.rewardCnt != null && Object.hasOwnProperty.call(m, "rewardCnt"))
                w.uint32(16).int32(m.rewardCnt);
            if (m.isReceived != null && Object.hasOwnProperty.call(m, "isReceived"))
                w.uint32(24).bool(m.isReceived);
            if (m.requireCount != null && Object.hasOwnProperty.call(m, "requireCount"))
                w.uint32(32).int32(m.requireCount);
            return w;
        };

        /**
         * Decodes a StoryModeRewardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof common.StoryModeRewardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.StoryModeRewardMsg} StoryModeRewardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StoryModeRewardMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.StoryModeRewardMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.rewardId = r.int32();
                        break;
                    }
                case 2: {
                        m.rewardCnt = r.int32();
                        break;
                    }
                case 3: {
                        m.isReceived = r.bool();
                        break;
                    }
                case 4: {
                        m.requireCount = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return StoryModeRewardMsg;
    })();

    common.PKPlayerInfo = (function() {

        /**
         * Properties of a PKPlayerInfo.
         * @memberof common
         * @interface IPKPlayerInfo
         * @property {string|null} [userId] PKPlayerInfo userId
         * @property {string|null} [avatar] PKPlayerInfo avatar
         * @property {string|null} [name] PKPlayerInfo name
         * @property {Object.<string,number>|null} [usingSkin] PKPlayerInfo usingSkin
         * @property {number|null} [area] PKPlayerInfo area
         * @property {Long|null} [reachTime] PKPlayerInfo reachTime
         * @property {Array.<number>|null} [score] PKPlayerInfo score
         * @property {number|null} [totalScore] PKPlayerInfo totalScore
         * @property {number|null} [giftCount] PKPlayerInfo giftCount
         * @property {Array.<common.Item>|null} [items] PKPlayerInfo items
         * @property {common.EPlayerStatusInRoom|null} [status] PKPlayerInfo status
         * @property {number|null} [highestScore] PKPlayerInfo highestScore
         */

        /**
         * Constructs a new PKPlayerInfo.
         * @memberof common
         * @classdesc Represents a PKPlayerInfo.
         * @implements IPKPlayerInfo
         * @constructor
         * @param {common.IPKPlayerInfo=} [p] Properties to set
         */
        function PKPlayerInfo(p) {
            this.usingSkin = {};
            this.score = [];
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PKPlayerInfo userId.
         * @member {string} userId
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.userId = "";

        /**
         * PKPlayerInfo avatar.
         * @member {string} avatar
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.avatar = "";

        /**
         * PKPlayerInfo name.
         * @member {string} name
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.name = "";

        /**
         * PKPlayerInfo usingSkin.
         * @member {Object.<string,number>} usingSkin
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.usingSkin = $util.emptyObject;

        /**
         * PKPlayerInfo area.
         * @member {number} area
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.area = 0;

        /**
         * PKPlayerInfo reachTime.
         * @member {Long} reachTime
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.reachTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PKPlayerInfo score.
         * @member {Array.<number>} score
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.score = $util.emptyArray;

        /**
         * PKPlayerInfo totalScore.
         * @member {number} totalScore
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.totalScore = 0;

        /**
         * PKPlayerInfo giftCount.
         * @member {number} giftCount
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.giftCount = 0;

        /**
         * PKPlayerInfo items.
         * @member {Array.<common.Item>} items
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.items = $util.emptyArray;

        /**
         * PKPlayerInfo status.
         * @member {common.EPlayerStatusInRoom} status
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.status = 0;

        /**
         * PKPlayerInfo highestScore.
         * @member {number} highestScore
         * @memberof common.PKPlayerInfo
         * @instance
         */
        PKPlayerInfo.prototype.highestScore = 0;

        /**
         * Encodes the specified PKPlayerInfo message. Does not implicitly {@link common.PKPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof common.PKPlayerInfo
         * @static
         * @param {common.PKPlayerInfo} m PKPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PKPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(10).string(m.userId);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(18).string(m.avatar);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(26).string(m.name);
            if (m.usingSkin != null && Object.hasOwnProperty.call(m, "usingSkin")) {
                for (var ks = Object.keys(m.usingSkin), i = 0; i < ks.length; ++i) {
                    w.uint32(34).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.usingSkin[ks[i]]).ldelim();
                }
            }
            if (m.area != null && Object.hasOwnProperty.call(m, "area"))
                w.uint32(40).int32(m.area);
            if (m.reachTime != null && Object.hasOwnProperty.call(m, "reachTime"))
                w.uint32(48).int64(m.reachTime);
            if (m.score != null && m.score.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.score.length; ++i)
                    w.int32(m.score[i]);
                w.ldelim();
            }
            if (m.totalScore != null && Object.hasOwnProperty.call(m, "totalScore"))
                w.uint32(64).int32(m.totalScore);
            if (m.giftCount != null && Object.hasOwnProperty.call(m, "giftCount"))
                w.uint32(72).int32(m.giftCount);
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.common.Item.encode(m.items[i], w.uint32(82).fork()).ldelim();
            }
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(88).int32(m.status);
            if (m.highestScore != null && Object.hasOwnProperty.call(m, "highestScore"))
                w.uint32(96).int32(m.highestScore);
            return w;
        };

        /**
         * Decodes a PKPlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.PKPlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.PKPlayerInfo} PKPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PKPlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.PKPlayerInfo(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.userId = r.string();
                        break;
                    }
                case 2: {
                        m.avatar = r.string();
                        break;
                    }
                case 3: {
                        m.name = r.string();
                        break;
                    }
                case 4: {
                        if (m.usingSkin === $util.emptyObject)
                            m.usingSkin = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = 0;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.int32();
                                break;
                            case 2:
                                value = r.int32();
                                break;
                            default:
                                r.skipType(tag2 & 7);
                                break;
                            }
                        }
                        m.usingSkin[k] = value;
                        break;
                    }
                case 5: {
                        m.area = r.int32();
                        break;
                    }
                case 6: {
                        m.reachTime = r.int64();
                        break;
                    }
                case 7: {
                        if (!(m.score && m.score.length))
                            m.score = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.score.push(r.int32());
                        } else
                            m.score.push(r.int32());
                        break;
                    }
                case 8: {
                        m.totalScore = r.int32();
                        break;
                    }
                case 9: {
                        m.giftCount = r.int32();
                        break;
                    }
                case 10: {
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.common.Item.decode(r, r.uint32()));
                        break;
                    }
                case 11: {
                        m.status = r.int32();
                        break;
                    }
                case 12: {
                        m.highestScore = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PKPlayerInfo;
    })();

    common.PlayerReadyState = (function() {

        /**
         * Properties of a PlayerReadyState.
         * @memberof common
         * @interface IPlayerReadyState
         * @property {string|null} [userId] PlayerReadyState userId
         * @property {boolean|null} [isReady] PlayerReadyState isReady
         */

        /**
         * Constructs a new PlayerReadyState.
         * @memberof common
         * @classdesc Represents a PlayerReadyState.
         * @implements IPlayerReadyState
         * @constructor
         * @param {common.IPlayerReadyState=} [p] Properties to set
         */
        function PlayerReadyState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerReadyState userId.
         * @member {string} userId
         * @memberof common.PlayerReadyState
         * @instance
         */
        PlayerReadyState.prototype.userId = "";

        /**
         * PlayerReadyState isReady.
         * @member {boolean} isReady
         * @memberof common.PlayerReadyState
         * @instance
         */
        PlayerReadyState.prototype.isReady = false;

        /**
         * Encodes the specified PlayerReadyState message. Does not implicitly {@link common.PlayerReadyState.verify|verify} messages.
         * @function encode
         * @memberof common.PlayerReadyState
         * @static
         * @param {common.PlayerReadyState} m PlayerReadyState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerReadyState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(10).string(m.userId);
            if (m.isReady != null && Object.hasOwnProperty.call(m, "isReady"))
                w.uint32(16).bool(m.isReady);
            return w;
        };

        /**
         * Decodes a PlayerReadyState message from the specified reader or buffer.
         * @function decode
         * @memberof common.PlayerReadyState
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.PlayerReadyState} PlayerReadyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerReadyState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.PlayerReadyState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.userId = r.string();
                        break;
                    }
                case 2: {
                        m.isReady = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerReadyState;
    })();

    /**
     * ERoomStatus enum.
     * @name common.ERoomStatus
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} Matching=1 Matching value
     * @property {number} MatchComplete=2 MatchComplete value
     * @property {number} Playing=4 Playing value
     * @property {number} Settlement=5 Settlement value
     */
    common.ERoomStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "Matching"] = 1;
        values[valuesById[2] = "MatchComplete"] = 2;
        values[valuesById[4] = "Playing"] = 4;
        values[valuesById[5] = "Settlement"] = 5;
        return values;
    })();

    common.RoomMatchStatus = (function() {

        /**
         * Properties of a RoomMatchStatus.
         * @memberof common
         * @interface IRoomMatchStatus
         * @property {string|null} [roomId] RoomMatchStatus roomId
         * @property {number|null} [pkType] RoomMatchStatus pkType
         * @property {common.ERoomStatus|null} [status] RoomMatchStatus status
         * @property {Long|null} [startTime] RoomMatchStatus startTime
         * @property {Array.<common.PlayerReadyState>|null} [players] RoomMatchStatus players
         */

        /**
         * Constructs a new RoomMatchStatus.
         * @memberof common
         * @classdesc Represents a RoomMatchStatus.
         * @implements IRoomMatchStatus
         * @constructor
         * @param {common.IRoomMatchStatus=} [p] Properties to set
         */
        function RoomMatchStatus(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomMatchStatus roomId.
         * @member {string} roomId
         * @memberof common.RoomMatchStatus
         * @instance
         */
        RoomMatchStatus.prototype.roomId = "";

        /**
         * RoomMatchStatus pkType.
         * @member {number} pkType
         * @memberof common.RoomMatchStatus
         * @instance
         */
        RoomMatchStatus.prototype.pkType = 0;

        /**
         * RoomMatchStatus status.
         * @member {common.ERoomStatus} status
         * @memberof common.RoomMatchStatus
         * @instance
         */
        RoomMatchStatus.prototype.status = 0;

        /**
         * RoomMatchStatus startTime.
         * @member {Long} startTime
         * @memberof common.RoomMatchStatus
         * @instance
         */
        RoomMatchStatus.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomMatchStatus players.
         * @member {Array.<common.PlayerReadyState>} players
         * @memberof common.RoomMatchStatus
         * @instance
         */
        RoomMatchStatus.prototype.players = $util.emptyArray;

        /**
         * Encodes the specified RoomMatchStatus message. Does not implicitly {@link common.RoomMatchStatus.verify|verify} messages.
         * @function encode
         * @memberof common.RoomMatchStatus
         * @static
         * @param {common.RoomMatchStatus} m RoomMatchStatus message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMatchStatus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            if (m.pkType != null && Object.hasOwnProperty.call(m, "pkType"))
                w.uint32(16).int32(m.pkType);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(24).int32(m.status);
            if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
                w.uint32(40).int64(m.startTime);
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.common.PlayerReadyState.encode(m.players[i], w.uint32(50).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RoomMatchStatus message from the specified reader or buffer.
         * @function decode
         * @memberof common.RoomMatchStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.RoomMatchStatus} RoomMatchStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMatchStatus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.RoomMatchStatus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.roomId = r.string();
                        break;
                    }
                case 2: {
                        m.pkType = r.int32();
                        break;
                    }
                case 3: {
                        m.status = r.int32();
                        break;
                    }
                case 5: {
                        m.startTime = r.int64();
                        break;
                    }
                case 6: {
                        if (!(m.players && m.players.length))
                            m.players = [];
                        m.players.push($root.common.PlayerReadyState.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomMatchStatus;
    })();

    common.RoomMatchData = (function() {

        /**
         * Properties of a RoomMatchData.
         * @memberof common
         * @interface IRoomMatchData
         * @property {string|null} [roomId] RoomMatchData roomId
         * @property {number|null} [pkType] RoomMatchData pkType
         * @property {common.ERoomStatus|null} [status] RoomMatchData status
         * @property {Long|null} [matchTime] RoomMatchData matchTime
         * @property {Long|null} [startTime] RoomMatchData startTime
         * @property {Long|null} [endTime] RoomMatchData endTime
         * @property {Array.<common.PKPlayerInfo>|null} [players] RoomMatchData players
         */

        /**
         * Constructs a new RoomMatchData.
         * @memberof common
         * @classdesc Represents a RoomMatchData.
         * @implements IRoomMatchData
         * @constructor
         * @param {common.IRoomMatchData=} [p] Properties to set
         */
        function RoomMatchData(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomMatchData roomId.
         * @member {string} roomId
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.roomId = "";

        /**
         * RoomMatchData pkType.
         * @member {number} pkType
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.pkType = 0;

        /**
         * RoomMatchData status.
         * @member {common.ERoomStatus} status
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.status = 0;

        /**
         * RoomMatchData matchTime.
         * @member {Long} matchTime
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.matchTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomMatchData startTime.
         * @member {Long} startTime
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomMatchData endTime.
         * @member {Long} endTime
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomMatchData players.
         * @member {Array.<common.PKPlayerInfo>} players
         * @memberof common.RoomMatchData
         * @instance
         */
        RoomMatchData.prototype.players = $util.emptyArray;

        /**
         * Encodes the specified RoomMatchData message. Does not implicitly {@link common.RoomMatchData.verify|verify} messages.
         * @function encode
         * @memberof common.RoomMatchData
         * @static
         * @param {common.RoomMatchData} m RoomMatchData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomMatchData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            if (m.pkType != null && Object.hasOwnProperty.call(m, "pkType"))
                w.uint32(16).int32(m.pkType);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(24).int32(m.status);
            if (m.matchTime != null && Object.hasOwnProperty.call(m, "matchTime"))
                w.uint32(32).int64(m.matchTime);
            if (m.startTime != null && Object.hasOwnProperty.call(m, "startTime"))
                w.uint32(40).int64(m.startTime);
            if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                w.uint32(48).int64(m.endTime);
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.common.PKPlayerInfo.encode(m.players[i], w.uint32(58).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a RoomMatchData message from the specified reader or buffer.
         * @function decode
         * @memberof common.RoomMatchData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.RoomMatchData} RoomMatchData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomMatchData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.RoomMatchData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.roomId = r.string();
                        break;
                    }
                case 2: {
                        m.pkType = r.int32();
                        break;
                    }
                case 3: {
                        m.status = r.int32();
                        break;
                    }
                case 4: {
                        m.matchTime = r.int64();
                        break;
                    }
                case 5: {
                        m.startTime = r.int64();
                        break;
                    }
                case 6: {
                        m.endTime = r.int64();
                        break;
                    }
                case 7: {
                        if (!(m.players && m.players.length))
                            m.players = [];
                        m.players.push($root.common.PKPlayerInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomMatchData;
    })();

    common.PkMatchRewardMsg = (function() {

        /**
         * Properties of a PkMatchRewardMsg.
         * @memberof common
         * @interface IPkMatchRewardMsg
         * @property {number|null} [rewardId] PkMatchRewardMsg rewardId
         * @property {number|null} [rewardCnt] PkMatchRewardMsg rewardCnt
         * @property {boolean|null} [isReceived] PkMatchRewardMsg isReceived
         * @property {number|null} [requireCount] PkMatchRewardMsg requireCount
         * @property {number|null} [titleId] PkMatchRewardMsg titleId
         */

        /**
         * Constructs a new PkMatchRewardMsg.
         * @memberof common
         * @classdesc Represents a PkMatchRewardMsg.
         * @implements IPkMatchRewardMsg
         * @constructor
         * @param {common.IPkMatchRewardMsg=} [p] Properties to set
         */
        function PkMatchRewardMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PkMatchRewardMsg rewardId.
         * @member {number} rewardId
         * @memberof common.PkMatchRewardMsg
         * @instance
         */
        PkMatchRewardMsg.prototype.rewardId = 0;

        /**
         * PkMatchRewardMsg rewardCnt.
         * @member {number} rewardCnt
         * @memberof common.PkMatchRewardMsg
         * @instance
         */
        PkMatchRewardMsg.prototype.rewardCnt = 0;

        /**
         * PkMatchRewardMsg isReceived.
         * @member {boolean} isReceived
         * @memberof common.PkMatchRewardMsg
         * @instance
         */
        PkMatchRewardMsg.prototype.isReceived = false;

        /**
         * PkMatchRewardMsg requireCount.
         * @member {number} requireCount
         * @memberof common.PkMatchRewardMsg
         * @instance
         */
        PkMatchRewardMsg.prototype.requireCount = 0;

        /**
         * PkMatchRewardMsg titleId.
         * @member {number} titleId
         * @memberof common.PkMatchRewardMsg
         * @instance
         */
        PkMatchRewardMsg.prototype.titleId = 0;

        /**
         * Encodes the specified PkMatchRewardMsg message. Does not implicitly {@link common.PkMatchRewardMsg.verify|verify} messages.
         * @function encode
         * @memberof common.PkMatchRewardMsg
         * @static
         * @param {common.PkMatchRewardMsg} m PkMatchRewardMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PkMatchRewardMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rewardId != null && Object.hasOwnProperty.call(m, "rewardId"))
                w.uint32(8).int32(m.rewardId);
            if (m.rewardCnt != null && Object.hasOwnProperty.call(m, "rewardCnt"))
                w.uint32(16).int32(m.rewardCnt);
            if (m.isReceived != null && Object.hasOwnProperty.call(m, "isReceived"))
                w.uint32(24).bool(m.isReceived);
            if (m.requireCount != null && Object.hasOwnProperty.call(m, "requireCount"))
                w.uint32(32).int32(m.requireCount);
            if (m.titleId != null && Object.hasOwnProperty.call(m, "titleId"))
                w.uint32(40).int32(m.titleId);
            return w;
        };

        /**
         * Decodes a PkMatchRewardMsg message from the specified reader or buffer.
         * @function decode
         * @memberof common.PkMatchRewardMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {common.PkMatchRewardMsg} PkMatchRewardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PkMatchRewardMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.common.PkMatchRewardMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.rewardId = r.int32();
                        break;
                    }
                case 2: {
                        m.rewardCnt = r.int32();
                        break;
                    }
                case 3: {
                        m.isReceived = r.bool();
                        break;
                    }
                case 4: {
                        m.requireCount = r.int32();
                        break;
                    }
                case 5: {
                        m.titleId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PkMatchRewardMsg;
    })();

    /**
     * EPlayerStatusInRoom enum.
     * @name common.EPlayerStatusInRoom
     * @enum {number}
     * @property {number} Waiting=0 Waiting value
     * @property {number} Pk=1 Pk value
     * @property {number} Death=2 Death value
     * @property {number} WatchAd=3 WatchAd value
     */
    common.EPlayerStatusInRoom = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Waiting"] = 0;
        values[valuesById[1] = "Pk"] = 1;
        values[valuesById[2] = "Death"] = 2;
        values[valuesById[3] = "WatchAd"] = 3;
        return values;
    })();

    /**
     * </summary>
     * @name common.AckCode
     * @enum {number}
     * @property {number} Fail=0 Fail value
     * @property {number} Success=1 Success value
     */
    common.AckCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Fail"] = 0;
        values[valuesById[1] = "Success"] = 1;
        return values;
    })();

    return common;
})();

export const protocol = $root.protocol = (() => {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    const protocol = {};

    protocol.PlayerData = (function() {

        /**
         * Properties of a PlayerData.
         * @memberof protocol
         * @interface IPlayerData
         * @property {string|null} [uid] PlayerData uid
         * @property {string|null} [nickname] PlayerData nickname
         * @property {string|null} [photoUri] PlayerData photoUri
         */

        /**
         * Constructs a new PlayerData.
         * @memberof protocol
         * @classdesc Represents a PlayerData.
         * @implements IPlayerData
         * @constructor
         * @param {protocol.IPlayerData=} [p] Properties to set
         */
        function PlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerData uid.
         * @member {string} uid
         * @memberof protocol.PlayerData
         * @instance
         */
        PlayerData.prototype.uid = "";

        /**
         * PlayerData nickname.
         * @member {string} nickname
         * @memberof protocol.PlayerData
         * @instance
         */
        PlayerData.prototype.nickname = "";

        /**
         * PlayerData photoUri.
         * @member {string} photoUri
         * @memberof protocol.PlayerData
         * @instance
         */
        PlayerData.prototype.photoUri = "";

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link protocol.PlayerData.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerData
         * @static
         * @param {protocol.PlayerData} m PlayerData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.photoUri != null && Object.hasOwnProperty.call(m, "photoUri"))
                w.uint32(26).string(m.photoUri);
            return w;
        };

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.PlayerData} PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.PlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.nickname = r.string();
                        break;
                    }
                case 3: {
                        m.photoUri = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerData;
    })();

    protocol.PlayerBasicInfo = (function() {

        /**
         * Properties of a PlayerBasicInfo.
         * @memberof protocol
         * @interface IPlayerBasicInfo
         * @property {string|null} [uid] PlayerBasicInfo uid
         * @property {string|null} [nickName] PlayerBasicInfo nickName
         * @property {string|null} [photoUri] PlayerBasicInfo photoUri
         * @property {common.EGender|null} [gender] PlayerBasicInfo gender
         * @property {number|null} [adCode] PlayerBasicInfo adCode
         * @property {number|null} [star] PlayerBasicInfo star
         * @property {string|null} [liteId] PlayerBasicInfo liteId
         * @property {boolean|null} [isOnline] PlayerBasicInfo isOnline
         * @property {number|null} [characterSkin] PlayerBasicInfo characterSkin
         */

        /**
         * Constructs a new PlayerBasicInfo.
         * @memberof protocol
         * @classdesc Represents a PlayerBasicInfo.
         * @implements IPlayerBasicInfo
         * @constructor
         * @param {protocol.IPlayerBasicInfo=} [p] Properties to set
         */
        function PlayerBasicInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerBasicInfo uid.
         * @member {string} uid
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.uid = "";

        /**
         * PlayerBasicInfo nickName.
         * @member {string} nickName
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.nickName = "";

        /**
         * PlayerBasicInfo photoUri.
         * @member {string} photoUri
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.photoUri = "";

        /**
         * PlayerBasicInfo gender.
         * @member {common.EGender} gender
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.gender = 0;

        /**
         * PlayerBasicInfo adCode.
         * @member {number} adCode
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.adCode = 0;

        /**
         * PlayerBasicInfo star.
         * @member {number} star
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.star = 0;

        /**
         * PlayerBasicInfo liteId.
         * @member {string} liteId
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.liteId = "";

        /**
         * PlayerBasicInfo isOnline.
         * @member {boolean} isOnline
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.isOnline = false;

        /**
         * PlayerBasicInfo characterSkin.
         * @member {number} characterSkin
         * @memberof protocol.PlayerBasicInfo
         * @instance
         */
        PlayerBasicInfo.prototype.characterSkin = 0;

        /**
         * Encodes the specified PlayerBasicInfo message. Does not implicitly {@link protocol.PlayerBasicInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.PlayerBasicInfo
         * @static
         * @param {protocol.PlayerBasicInfo} m PlayerBasicInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerBasicInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
                w.uint32(18).string(m.nickName);
            if (m.photoUri != null && Object.hasOwnProperty.call(m, "photoUri"))
                w.uint32(26).string(m.photoUri);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(32).int32(m.gender);
            if (m.adCode != null && Object.hasOwnProperty.call(m, "adCode"))
                w.uint32(40).int32(m.adCode);
            if (m.star != null && Object.hasOwnProperty.call(m, "star"))
                w.uint32(48).int32(m.star);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(58).string(m.liteId);
            if (m.isOnline != null && Object.hasOwnProperty.call(m, "isOnline"))
                w.uint32(64).bool(m.isOnline);
            if (m.characterSkin != null && Object.hasOwnProperty.call(m, "characterSkin"))
                w.uint32(72).int32(m.characterSkin);
            return w;
        };

        /**
         * Decodes a PlayerBasicInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PlayerBasicInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.PlayerBasicInfo} PlayerBasicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerBasicInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.PlayerBasicInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.nickName = r.string();
                        break;
                    }
                case 3: {
                        m.photoUri = r.string();
                        break;
                    }
                case 4: {
                        m.gender = r.int32();
                        break;
                    }
                case 5: {
                        m.adCode = r.int32();
                        break;
                    }
                case 6: {
                        m.star = r.int32();
                        break;
                    }
                case 7: {
                        m.liteId = r.string();
                        break;
                    }
                case 8: {
                        m.isOnline = r.bool();
                        break;
                    }
                case 9: {
                        m.characterSkin = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerBasicInfo;
    })();

    protocol.LS2FS_CreatePlayerLiteId = (function() {

        /**
         * Properties of a LS2FS_CreatePlayerLiteId.
         * @memberof protocol
         * @interface ILS2FS_CreatePlayerLiteId
         */

        /**
         * Constructs a new LS2FS_CreatePlayerLiteId.
         * @memberof protocol
         * @classdesc Represents a LS2FS_CreatePlayerLiteId.
         * @implements ILS2FS_CreatePlayerLiteId
         * @constructor
         * @param {protocol.ILS2FS_CreatePlayerLiteId=} [p] Properties to set
         */
        function LS2FS_CreatePlayerLiteId(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified LS2FS_CreatePlayerLiteId message. Does not implicitly {@link protocol.LS2FS_CreatePlayerLiteId.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2FS_CreatePlayerLiteId
         * @static
         * @param {protocol.LS2FS_CreatePlayerLiteId} m LS2FS_CreatePlayerLiteId message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2FS_CreatePlayerLiteId.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a LS2FS_CreatePlayerLiteId message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2FS_CreatePlayerLiteId
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2FS_CreatePlayerLiteId} LS2FS_CreatePlayerLiteId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2FS_CreatePlayerLiteId.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2FS_CreatePlayerLiteId();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.LS2FS_CreatePlayerLiteId.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50000 OpCode value
         */
        LS2FS_CreatePlayerLiteId.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50000] = "OpCode"] = 50000;
            return values;
        })();

        return LS2FS_CreatePlayerLiteId;
    })();

    protocol.FS2LS_CreatePlayerLiteId_Ack = (function() {

        /**
         * Properties of a FS2LS_CreatePlayerLiteId_Ack.
         * @memberof protocol
         * @interface IFS2LS_CreatePlayerLiteId_Ack
         * @property {protocol.FS2LS_CreatePlayerLiteId_Ack.AckCode|null} [code] FS2LS_CreatePlayerLiteId_Ack code
         * @property {string|null} [liteId] FS2LS_CreatePlayerLiteId_Ack liteId
         */

        /**
         * Constructs a new FS2LS_CreatePlayerLiteId_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2LS_CreatePlayerLiteId_Ack.
         * @implements IFS2LS_CreatePlayerLiteId_Ack
         * @constructor
         * @param {protocol.IFS2LS_CreatePlayerLiteId_Ack=} [p] Properties to set
         */
        function FS2LS_CreatePlayerLiteId_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2LS_CreatePlayerLiteId_Ack code.
         * @member {protocol.FS2LS_CreatePlayerLiteId_Ack.AckCode} code
         * @memberof protocol.FS2LS_CreatePlayerLiteId_Ack
         * @instance
         */
        FS2LS_CreatePlayerLiteId_Ack.prototype.code = 0;

        /**
         * FS2LS_CreatePlayerLiteId_Ack liteId.
         * @member {string} liteId
         * @memberof protocol.FS2LS_CreatePlayerLiteId_Ack
         * @instance
         */
        FS2LS_CreatePlayerLiteId_Ack.prototype.liteId = "";

        /**
         * Encodes the specified FS2LS_CreatePlayerLiteId_Ack message. Does not implicitly {@link protocol.FS2LS_CreatePlayerLiteId_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2LS_CreatePlayerLiteId_Ack
         * @static
         * @param {protocol.FS2LS_CreatePlayerLiteId_Ack} m FS2LS_CreatePlayerLiteId_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2LS_CreatePlayerLiteId_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(18).string(m.liteId);
            return w;
        };

        /**
         * Decodes a FS2LS_CreatePlayerLiteId_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2LS_CreatePlayerLiteId_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2LS_CreatePlayerLiteId_Ack} FS2LS_CreatePlayerLiteId_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2LS_CreatePlayerLiteId_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2LS_CreatePlayerLiteId_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.FS2LS_CreatePlayerLiteId_Ack.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Fail=1 Fail value
         */
        FS2LS_CreatePlayerLiteId_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            return values;
        })();

        return FS2LS_CreatePlayerLiteId_Ack;
    })();

    protocol.FriendUserInfoWithUID = (function() {

        /**
         * Properties of a FriendUserInfoWithUID.
         * @memberof protocol
         * @interface IFriendUserInfoWithUID
         * @property {string|null} [uid] FriendUserInfoWithUID uid
         */

        /**
         * Constructs a new FriendUserInfoWithUID.
         * @memberof protocol
         * @classdesc Represents a FriendUserInfoWithUID.
         * @implements IFriendUserInfoWithUID
         * @constructor
         * @param {protocol.IFriendUserInfoWithUID=} [p] Properties to set
         */
        function FriendUserInfoWithUID(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FriendUserInfoWithUID uid.
         * @member {string} uid
         * @memberof protocol.FriendUserInfoWithUID
         * @instance
         */
        FriendUserInfoWithUID.prototype.uid = "";

        /**
         * Encodes the specified FriendUserInfoWithUID message. Does not implicitly {@link protocol.FriendUserInfoWithUID.verify|verify} messages.
         * @function encode
         * @memberof protocol.FriendUserInfoWithUID
         * @static
         * @param {protocol.FriendUserInfoWithUID} m FriendUserInfoWithUID message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendUserInfoWithUID.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            return w;
        };

        /**
         * Decodes a FriendUserInfoWithUID message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FriendUserInfoWithUID
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FriendUserInfoWithUID} FriendUserInfoWithUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendUserInfoWithUID.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FriendUserInfoWithUID();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FriendUserInfoWithUID;
    })();

    protocol.FS2RS_FriendListWithUID = (function() {

        /**
         * Properties of a FS2RS_FriendListWithUID.
         * @memberof protocol
         * @interface IFS2RS_FriendListWithUID
         * @property {protocol.FS2RS_FriendListWithUID.AckCode|null} [code] FS2RS_FriendListWithUID code
         * @property {number|null} [pageNo] FS2RS_FriendListWithUID pageNo
         * @property {number|null} [pageSize] FS2RS_FriendListWithUID pageSize
         * @property {Array.<protocol.FriendUserInfoWithUID>|null} [list] FS2RS_FriendListWithUID list
         */

        /**
         * Constructs a new FS2RS_FriendListWithUID.
         * @memberof protocol
         * @classdesc Represents a FS2RS_FriendListWithUID.
         * @implements IFS2RS_FriendListWithUID
         * @constructor
         * @param {protocol.IFS2RS_FriendListWithUID=} [p] Properties to set
         */
        function FS2RS_FriendListWithUID(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2RS_FriendListWithUID code.
         * @member {protocol.FS2RS_FriendListWithUID.AckCode} code
         * @memberof protocol.FS2RS_FriendListWithUID
         * @instance
         */
        FS2RS_FriendListWithUID.prototype.code = 0;

        /**
         * FS2RS_FriendListWithUID pageNo.
         * @member {number} pageNo
         * @memberof protocol.FS2RS_FriendListWithUID
         * @instance
         */
        FS2RS_FriendListWithUID.prototype.pageNo = 0;

        /**
         * FS2RS_FriendListWithUID pageSize.
         * @member {number} pageSize
         * @memberof protocol.FS2RS_FriendListWithUID
         * @instance
         */
        FS2RS_FriendListWithUID.prototype.pageSize = 0;

        /**
         * FS2RS_FriendListWithUID list.
         * @member {Array.<protocol.FriendUserInfoWithUID>} list
         * @memberof protocol.FS2RS_FriendListWithUID
         * @instance
         */
        FS2RS_FriendListWithUID.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified FS2RS_FriendListWithUID message. Does not implicitly {@link protocol.FS2RS_FriendListWithUID.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2RS_FriendListWithUID
         * @static
         * @param {protocol.FS2RS_FriendListWithUID} m FS2RS_FriendListWithUID message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2RS_FriendListWithUID.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.pageNo != null && Object.hasOwnProperty.call(m, "pageNo"))
                w.uint32(16).int32(m.pageNo);
            if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                w.uint32(24).int32(m.pageSize);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.protocol.FriendUserInfoWithUID.encode(m.list[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a FS2RS_FriendListWithUID message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2RS_FriendListWithUID
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2RS_FriendListWithUID} FS2RS_FriendListWithUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2RS_FriendListWithUID.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2RS_FriendListWithUID();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.pageNo = r.int32();
                        break;
                    }
                case 3: {
                        m.pageSize = r.int32();
                        break;
                    }
                case 4: {
                        if (!(m.list && m.list.length))
                            m.list = [];
                        m.list.push($root.protocol.FriendUserInfoWithUID.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2RS_FriendListWithUID.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50001 OpCode value
         */
        FS2RS_FriendListWithUID.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50001] = "OpCode"] = 50001;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2RS_FriendListWithUID.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Fail=1 Fail value
         */
        FS2RS_FriendListWithUID.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            return values;
        })();

        return FS2RS_FriendListWithUID;
    })();

    protocol.FS2RS_FriendListWithUID_Ack = (function() {

        /**
         * Properties of a FS2RS_FriendListWithUID_Ack.
         * @memberof protocol
         * @interface IFS2RS_FriendListWithUID_Ack
         * @property {protocol.FS2RS_FriendListWithUID_Ack.AckCode|null} [code] FS2RS_FriendListWithUID_Ack code
         * @property {number|null} [pageNo] FS2RS_FriendListWithUID_Ack pageNo
         * @property {number|null} [pageSize] FS2RS_FriendListWithUID_Ack pageSize
         * @property {number|null} [totalCount] FS2RS_FriendListWithUID_Ack totalCount
         * @property {Array.<protocol.FriendUserInfoWithUID>|null} [list] FS2RS_FriendListWithUID_Ack list
         */

        /**
         * Constructs a new FS2RS_FriendListWithUID_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2RS_FriendListWithUID_Ack.
         * @implements IFS2RS_FriendListWithUID_Ack
         * @constructor
         * @param {protocol.IFS2RS_FriendListWithUID_Ack=} [p] Properties to set
         */
        function FS2RS_FriendListWithUID_Ack(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2RS_FriendListWithUID_Ack code.
         * @member {protocol.FS2RS_FriendListWithUID_Ack.AckCode} code
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @instance
         */
        FS2RS_FriendListWithUID_Ack.prototype.code = 0;

        /**
         * FS2RS_FriendListWithUID_Ack pageNo.
         * @member {number} pageNo
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @instance
         */
        FS2RS_FriendListWithUID_Ack.prototype.pageNo = 0;

        /**
         * FS2RS_FriendListWithUID_Ack pageSize.
         * @member {number} pageSize
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @instance
         */
        FS2RS_FriendListWithUID_Ack.prototype.pageSize = 0;

        /**
         * FS2RS_FriendListWithUID_Ack totalCount.
         * @member {number} totalCount
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @instance
         */
        FS2RS_FriendListWithUID_Ack.prototype.totalCount = 0;

        /**
         * FS2RS_FriendListWithUID_Ack list.
         * @member {Array.<protocol.FriendUserInfoWithUID>} list
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @instance
         */
        FS2RS_FriendListWithUID_Ack.prototype.list = $util.emptyArray;

        /**
         * Encodes the specified FS2RS_FriendListWithUID_Ack message. Does not implicitly {@link protocol.FS2RS_FriendListWithUID_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @static
         * @param {protocol.FS2RS_FriendListWithUID_Ack} m FS2RS_FriendListWithUID_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2RS_FriendListWithUID_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.pageNo != null && Object.hasOwnProperty.call(m, "pageNo"))
                w.uint32(16).int32(m.pageNo);
            if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                w.uint32(24).int32(m.pageSize);
            if (m.totalCount != null && Object.hasOwnProperty.call(m, "totalCount"))
                w.uint32(32).int32(m.totalCount);
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.protocol.FriendUserInfoWithUID.encode(m.list[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a FS2RS_FriendListWithUID_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2RS_FriendListWithUID_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2RS_FriendListWithUID_Ack} FS2RS_FriendListWithUID_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2RS_FriendListWithUID_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2RS_FriendListWithUID_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.pageNo = r.int32();
                        break;
                    }
                case 3: {
                        m.pageSize = r.int32();
                        break;
                    }
                case 4: {
                        m.totalCount = r.int32();
                        break;
                    }
                case 5: {
                        if (!(m.list && m.list.length))
                            m.list = [];
                        m.list.push($root.protocol.FriendUserInfoWithUID.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.FS2RS_FriendListWithUID_Ack.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Fail=1 Fail value
         */
        FS2RS_FriendListWithUID_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            return values;
        })();

        return FS2RS_FriendListWithUID_Ack;
    })();

    protocol.C2FS_RemoveFriend = (function() {

        /**
         * Properties of a C2FS_RemoveFriend.
         * @memberof protocol
         * @interface IC2FS_RemoveFriend
         * @property {string|null} [liteId] C2FS_RemoveFriend liteId
         */

        /**
         * Constructs a new C2FS_RemoveFriend.
         * @memberof protocol
         * @classdesc Represents a C2FS_RemoveFriend.
         * @implements IC2FS_RemoveFriend
         * @constructor
         * @param {protocol.IC2FS_RemoveFriend=} [p] Properties to set
         */
        function C2FS_RemoveFriend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_RemoveFriend liteId.
         * @member {string} liteId
         * @memberof protocol.C2FS_RemoveFriend
         * @instance
         */
        C2FS_RemoveFriend.prototype.liteId = "";

        /**
         * Encodes the specified C2FS_RemoveFriend message. Does not implicitly {@link protocol.C2FS_RemoveFriend.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_RemoveFriend
         * @static
         * @param {protocol.C2FS_RemoveFriend} m C2FS_RemoveFriend message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_RemoveFriend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(10).string(m.liteId);
            return w;
        };

        /**
         * Decodes a C2FS_RemoveFriend message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_RemoveFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_RemoveFriend} C2FS_RemoveFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_RemoveFriend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_RemoveFriend();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_RemoveFriend.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50002 OpCode value
         */
        C2FS_RemoveFriend.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50002] = "OpCode"] = 50002;
            return values;
        })();

        return C2FS_RemoveFriend;
    })();

    protocol.FS2C_RemoveFriend_Ack = (function() {

        /**
         * Properties of a FS2C_RemoveFriend_Ack.
         * @memberof protocol
         * @interface IFS2C_RemoveFriend_Ack
         * @property {protocol.FS2C_RemoveFriend_Ack.AckCode|null} [ackCode] FS2C_RemoveFriend_Ack ackCode
         * @property {string|null} [liteId] FS2C_RemoveFriend_Ack liteId
         */

        /**
         * Constructs a new FS2C_RemoveFriend_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2C_RemoveFriend_Ack.
         * @implements IFS2C_RemoveFriend_Ack
         * @constructor
         * @param {protocol.IFS2C_RemoveFriend_Ack=} [p] Properties to set
         */
        function FS2C_RemoveFriend_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_RemoveFriend_Ack ackCode.
         * @member {protocol.FS2C_RemoveFriend_Ack.AckCode} ackCode
         * @memberof protocol.FS2C_RemoveFriend_Ack
         * @instance
         */
        FS2C_RemoveFriend_Ack.prototype.ackCode = 0;

        /**
         * FS2C_RemoveFriend_Ack liteId.
         * @member {string} liteId
         * @memberof protocol.FS2C_RemoveFriend_Ack
         * @instance
         */
        FS2C_RemoveFriend_Ack.prototype.liteId = "";

        /**
         * Encodes the specified FS2C_RemoveFriend_Ack message. Does not implicitly {@link protocol.FS2C_RemoveFriend_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_RemoveFriend_Ack
         * @static
         * @param {protocol.FS2C_RemoveFriend_Ack} m FS2C_RemoveFriend_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_RemoveFriend_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(18).string(m.liteId);
            return w;
        };

        /**
         * Decodes a FS2C_RemoveFriend_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_RemoveFriend_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_RemoveFriend_Ack} FS2C_RemoveFriend_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_RemoveFriend_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_RemoveFriend_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_RemoveFriend_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50003 OpCode value
         */
        FS2C_RemoveFriend_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50003] = "OpCode"] = 50003;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_RemoveFriend_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Repeated=2 Repeated value
         * @property {number} FriendLiteIdNull=3 FriendLiteIdNull value
         * @property {number} FriendLiteIdErr=4 FriendLiteIdErr value
         */
        FS2C_RemoveFriend_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Repeated"] = 2;
            values[valuesById[3] = "FriendLiteIdNull"] = 3;
            values[valuesById[4] = "FriendLiteIdErr"] = 4;
            return values;
        })();

        return FS2C_RemoveFriend_Ack;
    })();

    protocol.C2FS_SearchFriends = (function() {

        /**
         * Properties of a C2FS_SearchFriends.
         * @memberof protocol
         * @interface IC2FS_SearchFriends
         * @property {string|null} [liteId] C2FS_SearchFriends liteId
         */

        /**
         * Constructs a new C2FS_SearchFriends.
         * @memberof protocol
         * @classdesc Represents a C2FS_SearchFriends.
         * @implements IC2FS_SearchFriends
         * @constructor
         * @param {protocol.IC2FS_SearchFriends=} [p] Properties to set
         */
        function C2FS_SearchFriends(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_SearchFriends liteId.
         * @member {string} liteId
         * @memberof protocol.C2FS_SearchFriends
         * @instance
         */
        C2FS_SearchFriends.prototype.liteId = "";

        /**
         * Encodes the specified C2FS_SearchFriends message. Does not implicitly {@link protocol.C2FS_SearchFriends.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_SearchFriends
         * @static
         * @param {protocol.C2FS_SearchFriends} m C2FS_SearchFriends message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_SearchFriends.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(10).string(m.liteId);
            return w;
        };

        /**
         * Decodes a C2FS_SearchFriends message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_SearchFriends
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_SearchFriends} C2FS_SearchFriends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_SearchFriends.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_SearchFriends();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_SearchFriends.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50004 OpCode value
         */
        C2FS_SearchFriends.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50004] = "OpCode"] = 50004;
            return values;
        })();

        return C2FS_SearchFriends;
    })();

    protocol.FS2C_SearchFriends_Ack = (function() {

        /**
         * Properties of a FS2C_SearchFriends_Ack.
         * @memberof protocol
         * @interface IFS2C_SearchFriends_Ack
         * @property {protocol.FS2C_SearchFriends_Ack.AckCode|null} [ackCode] FS2C_SearchFriends_Ack ackCode
         * @property {protocol.RecommendFriendInfo|null} [userInfo] FS2C_SearchFriends_Ack userInfo
         */

        /**
         * Constructs a new FS2C_SearchFriends_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2C_SearchFriends_Ack.
         * @implements IFS2C_SearchFriends_Ack
         * @constructor
         * @param {protocol.IFS2C_SearchFriends_Ack=} [p] Properties to set
         */
        function FS2C_SearchFriends_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_SearchFriends_Ack ackCode.
         * @member {protocol.FS2C_SearchFriends_Ack.AckCode} ackCode
         * @memberof protocol.FS2C_SearchFriends_Ack
         * @instance
         */
        FS2C_SearchFriends_Ack.prototype.ackCode = 0;

        /**
         * FS2C_SearchFriends_Ack userInfo.
         * @member {protocol.RecommendFriendInfo|null|undefined} userInfo
         * @memberof protocol.FS2C_SearchFriends_Ack
         * @instance
         */
        FS2C_SearchFriends_Ack.prototype.userInfo = null;

        /**
         * Encodes the specified FS2C_SearchFriends_Ack message. Does not implicitly {@link protocol.FS2C_SearchFriends_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_SearchFriends_Ack
         * @static
         * @param {protocol.FS2C_SearchFriends_Ack} m FS2C_SearchFriends_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_SearchFriends_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
                $root.protocol.RecommendFriendInfo.encode(m.userInfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a FS2C_SearchFriends_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_SearchFriends_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_SearchFriends_Ack} FS2C_SearchFriends_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_SearchFriends_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_SearchFriends_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.userInfo = $root.protocol.RecommendFriendInfo.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_SearchFriends_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50005 OpCode value
         */
        FS2C_SearchFriends_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50005] = "OpCode"] = 50005;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_SearchFriends_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Repeated=2 Repeated value
         * @property {number} NoExists=3 NoExists value
         * @property {number} Oneself=4 Oneself value
         * @property {number} SerialInvalid=5 SerialInvalid value
         */
        FS2C_SearchFriends_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Repeated"] = 2;
            values[valuesById[3] = "NoExists"] = 3;
            values[valuesById[4] = "Oneself"] = 4;
            values[valuesById[5] = "SerialInvalid"] = 5;
            return values;
        })();

        return FS2C_SearchFriends_Ack;
    })();

    protocol.C2FS_TopSettingFriend = (function() {

        /**
         * Properties of a C2FS_TopSettingFriend.
         * @memberof protocol
         * @interface IC2FS_TopSettingFriend
         * @property {string|null} [liteId] C2FS_TopSettingFriend liteId
         */

        /**
         * Constructs a new C2FS_TopSettingFriend.
         * @memberof protocol
         * @classdesc Represents a C2FS_TopSettingFriend.
         * @implements IC2FS_TopSettingFriend
         * @constructor
         * @param {protocol.IC2FS_TopSettingFriend=} [p] Properties to set
         */
        function C2FS_TopSettingFriend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_TopSettingFriend liteId.
         * @member {string} liteId
         * @memberof protocol.C2FS_TopSettingFriend
         * @instance
         */
        C2FS_TopSettingFriend.prototype.liteId = "";

        /**
         * Encodes the specified C2FS_TopSettingFriend message. Does not implicitly {@link protocol.C2FS_TopSettingFriend.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_TopSettingFriend
         * @static
         * @param {protocol.C2FS_TopSettingFriend} m C2FS_TopSettingFriend message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_TopSettingFriend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(10).string(m.liteId);
            return w;
        };

        /**
         * Decodes a C2FS_TopSettingFriend message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_TopSettingFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_TopSettingFriend} C2FS_TopSettingFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_TopSettingFriend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_TopSettingFriend();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_TopSettingFriend.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50006 OpCode value
         */
        C2FS_TopSettingFriend.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50006] = "OpCode"] = 50006;
            return values;
        })();

        return C2FS_TopSettingFriend;
    })();

    protocol.FS2C_TopSettingFriend_Ack = (function() {

        /**
         * Properties of a FS2C_TopSettingFriend_Ack.
         * @memberof protocol
         * @interface IFS2C_TopSettingFriend_Ack
         * @property {protocol.FS2C_TopSettingFriend_Ack.AckCode|null} [ackCode] FS2C_TopSettingFriend_Ack ackCode
         */

        /**
         * Constructs a new FS2C_TopSettingFriend_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2C_TopSettingFriend_Ack.
         * @implements IFS2C_TopSettingFriend_Ack
         * @constructor
         * @param {protocol.IFS2C_TopSettingFriend_Ack=} [p] Properties to set
         */
        function FS2C_TopSettingFriend_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_TopSettingFriend_Ack ackCode.
         * @member {protocol.FS2C_TopSettingFriend_Ack.AckCode} ackCode
         * @memberof protocol.FS2C_TopSettingFriend_Ack
         * @instance
         */
        FS2C_TopSettingFriend_Ack.prototype.ackCode = 0;

        /**
         * Encodes the specified FS2C_TopSettingFriend_Ack message. Does not implicitly {@link protocol.FS2C_TopSettingFriend_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_TopSettingFriend_Ack
         * @static
         * @param {protocol.FS2C_TopSettingFriend_Ack} m FS2C_TopSettingFriend_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_TopSettingFriend_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            return w;
        };

        /**
         * Decodes a FS2C_TopSettingFriend_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_TopSettingFriend_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_TopSettingFriend_Ack} FS2C_TopSettingFriend_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_TopSettingFriend_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_TopSettingFriend_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_TopSettingFriend_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50007 OpCode value
         */
        FS2C_TopSettingFriend_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50007] = "OpCode"] = 50007;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_TopSettingFriend_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} FriendLiteIdNull=2 FriendLiteIdNull value
         * @property {number} FriendLiteIdErr=3 FriendLiteIdErr value
         */
        FS2C_TopSettingFriend_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "FriendLiteIdNull"] = 2;
            values[valuesById[3] = "FriendLiteIdErr"] = 3;
            return values;
        })();

        return FS2C_TopSettingFriend_Ack;
    })();

    protocol.C2FS_GetApplyList = (function() {

        /**
         * Properties of a C2FS_GetApplyList.
         * @memberof protocol
         * @interface IC2FS_GetApplyList
         */

        /**
         * Constructs a new C2FS_GetApplyList.
         * @memberof protocol
         * @classdesc Represents a C2FS_GetApplyList.
         * @implements IC2FS_GetApplyList
         * @constructor
         * @param {protocol.IC2FS_GetApplyList=} [p] Properties to set
         */
        function C2FS_GetApplyList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2FS_GetApplyList message. Does not implicitly {@link protocol.C2FS_GetApplyList.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_GetApplyList
         * @static
         * @param {protocol.C2FS_GetApplyList} m C2FS_GetApplyList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_GetApplyList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a C2FS_GetApplyList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_GetApplyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_GetApplyList} C2FS_GetApplyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_GetApplyList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_GetApplyList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_GetApplyList.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50008 OpCode value
         */
        C2FS_GetApplyList.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50008] = "OpCode"] = 50008;
            return values;
        })();

        return C2FS_GetApplyList;
    })();

    protocol.FS2C_ApplyListSync = (function() {

        /**
         * Properties of a FS2C_ApplyListSync.
         * @memberof protocol
         * @interface IFS2C_ApplyListSync
         * @property {protocol.FS2C_ApplyListSync.AckCode|null} [ackCode] FS2C_ApplyListSync ackCode
         * @property {Array.<common.FriendUserInfo>|null} [friendList] FS2C_ApplyListSync friendList
         */

        /**
         * Constructs a new FS2C_ApplyListSync.
         * @memberof protocol
         * @classdesc Represents a FS2C_ApplyListSync.
         * @implements IFS2C_ApplyListSync
         * @constructor
         * @param {protocol.IFS2C_ApplyListSync=} [p] Properties to set
         */
        function FS2C_ApplyListSync(p) {
            this.friendList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_ApplyListSync ackCode.
         * @member {protocol.FS2C_ApplyListSync.AckCode} ackCode
         * @memberof protocol.FS2C_ApplyListSync
         * @instance
         */
        FS2C_ApplyListSync.prototype.ackCode = 0;

        /**
         * FS2C_ApplyListSync friendList.
         * @member {Array.<common.FriendUserInfo>} friendList
         * @memberof protocol.FS2C_ApplyListSync
         * @instance
         */
        FS2C_ApplyListSync.prototype.friendList = $util.emptyArray;

        /**
         * Encodes the specified FS2C_ApplyListSync message. Does not implicitly {@link protocol.FS2C_ApplyListSync.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_ApplyListSync
         * @static
         * @param {protocol.FS2C_ApplyListSync} m FS2C_ApplyListSync message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_ApplyListSync.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.friendList != null && m.friendList.length) {
                for (var i = 0; i < m.friendList.length; ++i)
                    $root.common.FriendUserInfo.encode(m.friendList[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a FS2C_ApplyListSync message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_ApplyListSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_ApplyListSync} FS2C_ApplyListSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_ApplyListSync.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_ApplyListSync();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.friendList && m.friendList.length))
                            m.friendList = [];
                        m.friendList.push($root.common.FriendUserInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_ApplyListSync.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50009 OpCode value
         */
        FS2C_ApplyListSync.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50009] = "OpCode"] = 50009;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_ApplyListSync.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        FS2C_ApplyListSync.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return FS2C_ApplyListSync;
    })();

    protocol.C2FS_HandleApply = (function() {

        /**
         * Properties of a C2FS_HandleApply.
         * @memberof protocol
         * @interface IC2FS_HandleApply
         * @property {protocol.C2FS_HandleApply.ApproveEnum|null} [approvalStatus] C2FS_HandleApply approvalStatus
         * @property {Array.<string>|null} [liteIds] C2FS_HandleApply liteIds
         */

        /**
         * Constructs a new C2FS_HandleApply.
         * @memberof protocol
         * @classdesc Represents a C2FS_HandleApply.
         * @implements IC2FS_HandleApply
         * @constructor
         * @param {protocol.IC2FS_HandleApply=} [p] Properties to set
         */
        function C2FS_HandleApply(p) {
            this.liteIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_HandleApply approvalStatus.
         * @member {protocol.C2FS_HandleApply.ApproveEnum} approvalStatus
         * @memberof protocol.C2FS_HandleApply
         * @instance
         */
        C2FS_HandleApply.prototype.approvalStatus = 0;

        /**
         * C2FS_HandleApply liteIds.
         * @member {Array.<string>} liteIds
         * @memberof protocol.C2FS_HandleApply
         * @instance
         */
        C2FS_HandleApply.prototype.liteIds = $util.emptyArray;

        /**
         * Encodes the specified C2FS_HandleApply message. Does not implicitly {@link protocol.C2FS_HandleApply.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_HandleApply
         * @static
         * @param {protocol.C2FS_HandleApply} m C2FS_HandleApply message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_HandleApply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.approvalStatus != null && Object.hasOwnProperty.call(m, "approvalStatus"))
                w.uint32(8).int32(m.approvalStatus);
            if (m.liteIds != null && m.liteIds.length) {
                for (var i = 0; i < m.liteIds.length; ++i)
                    w.uint32(18).string(m.liteIds[i]);
            }
            return w;
        };

        /**
         * Decodes a C2FS_HandleApply message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_HandleApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_HandleApply} C2FS_HandleApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_HandleApply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_HandleApply();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.approvalStatus = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.liteIds && m.liteIds.length))
                            m.liteIds = [];
                        m.liteIds.push(r.string());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_HandleApply.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50010 OpCode value
         */
        C2FS_HandleApply.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50010] = "OpCode"] = 50010;
            return values;
        })();

        /**
         * ApproveEnum enum.
         * @name protocol.C2FS_HandleApply.ApproveEnum
         * @enum {number}
         * @property {number} Default=0 Default value
         * @property {number} Agree=1 Agree value
         * @property {number} DisAgree=2 DisAgree value
         */
        C2FS_HandleApply.ApproveEnum = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "Agree"] = 1;
            values[valuesById[2] = "DisAgree"] = 2;
            return values;
        })();

        return C2FS_HandleApply;
    })();

    protocol.FS2C_HandleApply_Ack = (function() {

        /**
         * Properties of a FS2C_HandleApply_Ack.
         * @memberof protocol
         * @interface IFS2C_HandleApply_Ack
         * @property {protocol.FS2C_HandleApply_Ack.AckCode|null} [ackCode] FS2C_HandleApply_Ack ackCode
         * @property {protocol.FS2C_HandleApply_Ack.ApproveEnum|null} [approvalStatus] FS2C_HandleApply_Ack approvalStatus
         * @property {Array.<string>|null} [liteIds] FS2C_HandleApply_Ack liteIds
         * @property {Array.<common.FriendUserInfo>|null} [approvedFriendList] FS2C_HandleApply_Ack approvedFriendList
         */

        /**
         * Constructs a new FS2C_HandleApply_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2C_HandleApply_Ack.
         * @implements IFS2C_HandleApply_Ack
         * @constructor
         * @param {protocol.IFS2C_HandleApply_Ack=} [p] Properties to set
         */
        function FS2C_HandleApply_Ack(p) {
            this.liteIds = [];
            this.approvedFriendList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_HandleApply_Ack ackCode.
         * @member {protocol.FS2C_HandleApply_Ack.AckCode} ackCode
         * @memberof protocol.FS2C_HandleApply_Ack
         * @instance
         */
        FS2C_HandleApply_Ack.prototype.ackCode = 0;

        /**
         * FS2C_HandleApply_Ack approvalStatus.
         * @member {protocol.FS2C_HandleApply_Ack.ApproveEnum} approvalStatus
         * @memberof protocol.FS2C_HandleApply_Ack
         * @instance
         */
        FS2C_HandleApply_Ack.prototype.approvalStatus = 0;

        /**
         * FS2C_HandleApply_Ack liteIds.
         * @member {Array.<string>} liteIds
         * @memberof protocol.FS2C_HandleApply_Ack
         * @instance
         */
        FS2C_HandleApply_Ack.prototype.liteIds = $util.emptyArray;

        /**
         * FS2C_HandleApply_Ack approvedFriendList.
         * @member {Array.<common.FriendUserInfo>} approvedFriendList
         * @memberof protocol.FS2C_HandleApply_Ack
         * @instance
         */
        FS2C_HandleApply_Ack.prototype.approvedFriendList = $util.emptyArray;

        /**
         * Encodes the specified FS2C_HandleApply_Ack message. Does not implicitly {@link protocol.FS2C_HandleApply_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_HandleApply_Ack
         * @static
         * @param {protocol.FS2C_HandleApply_Ack} m FS2C_HandleApply_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_HandleApply_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.approvalStatus != null && Object.hasOwnProperty.call(m, "approvalStatus"))
                w.uint32(16).int32(m.approvalStatus);
            if (m.liteIds != null && m.liteIds.length) {
                for (var i = 0; i < m.liteIds.length; ++i)
                    w.uint32(26).string(m.liteIds[i]);
            }
            if (m.approvedFriendList != null && m.approvedFriendList.length) {
                for (var i = 0; i < m.approvedFriendList.length; ++i)
                    $root.common.FriendUserInfo.encode(m.approvedFriendList[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a FS2C_HandleApply_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_HandleApply_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_HandleApply_Ack} FS2C_HandleApply_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_HandleApply_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_HandleApply_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.approvalStatus = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.liteIds && m.liteIds.length))
                            m.liteIds = [];
                        m.liteIds.push(r.string());
                        break;
                    }
                case 4: {
                        if (!(m.approvedFriendList && m.approvedFriendList.length))
                            m.approvedFriendList = [];
                        m.approvedFriendList.push($root.common.FriendUserInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_HandleApply_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50011 OpCode value
         */
        FS2C_HandleApply_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50011] = "OpCode"] = 50011;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_HandleApply_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Limit=2 Limit value
         * @property {number} FriendLiteIdNull=3 FriendLiteIdNull value
         * @property {number} FriendLiteIdErr=4 FriendLiteIdErr value
         * @property {number} OwnFriendFull=5 OwnFriendFull value
         */
        FS2C_HandleApply_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Limit"] = 2;
            values[valuesById[3] = "FriendLiteIdNull"] = 3;
            values[valuesById[4] = "FriendLiteIdErr"] = 4;
            values[valuesById[5] = "OwnFriendFull"] = 5;
            return values;
        })();

        /**
         * ApproveEnum enum.
         * @name protocol.FS2C_HandleApply_Ack.ApproveEnum
         * @enum {number}
         * @property {number} Default=0 Default value
         * @property {number} Agree=1 Agree value
         * @property {number} DisAgree=2 DisAgree value
         */
        FS2C_HandleApply_Ack.ApproveEnum = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "Agree"] = 1;
            values[valuesById[2] = "DisAgree"] = 2;
            return values;
        })();

        return FS2C_HandleApply_Ack;
    })();

    protocol.C2FS_RecommendFriends = (function() {

        /**
         * Properties of a C2FS_RecommendFriends.
         * @memberof protocol
         * @interface IC2FS_RecommendFriends
         * @property {boolean|null} [refresh] C2FS_RecommendFriends refresh
         */

        /**
         * Constructs a new C2FS_RecommendFriends.
         * @memberof protocol
         * @classdesc Represents a C2FS_RecommendFriends.
         * @implements IC2FS_RecommendFriends
         * @constructor
         * @param {protocol.IC2FS_RecommendFriends=} [p] Properties to set
         */
        function C2FS_RecommendFriends(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_RecommendFriends refresh.
         * @member {boolean} refresh
         * @memberof protocol.C2FS_RecommendFriends
         * @instance
         */
        C2FS_RecommendFriends.prototype.refresh = false;

        /**
         * Encodes the specified C2FS_RecommendFriends message. Does not implicitly {@link protocol.C2FS_RecommendFriends.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_RecommendFriends
         * @static
         * @param {protocol.C2FS_RecommendFriends} m C2FS_RecommendFriends message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_RecommendFriends.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.refresh != null && Object.hasOwnProperty.call(m, "refresh"))
                w.uint32(8).bool(m.refresh);
            return w;
        };

        /**
         * Decodes a C2FS_RecommendFriends message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_RecommendFriends
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_RecommendFriends} C2FS_RecommendFriends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_RecommendFriends.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_RecommendFriends();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.refresh = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_RecommendFriends.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50012 OpCode value
         */
        C2FS_RecommendFriends.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50012] = "OpCode"] = 50012;
            return values;
        })();

        return C2FS_RecommendFriends;
    })();

    protocol.FS2C_RecommendFriends_Ack = (function() {

        /**
         * Properties of a FS2C_RecommendFriends_Ack.
         * @memberof protocol
         * @interface IFS2C_RecommendFriends_Ack
         * @property {protocol.FS2C_RecommendFriends_Ack.AckCode|null} [ackCode] FS2C_RecommendFriends_Ack ackCode
         * @property {number|null} [refreshTs] FS2C_RecommendFriends_Ack refreshTs
         * @property {Array.<protocol.RecommendFriendInfo>|null} [userInfo] FS2C_RecommendFriends_Ack userInfo
         */

        /**
         * Constructs a new FS2C_RecommendFriends_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2C_RecommendFriends_Ack.
         * @implements IFS2C_RecommendFriends_Ack
         * @constructor
         * @param {protocol.IFS2C_RecommendFriends_Ack=} [p] Properties to set
         */
        function FS2C_RecommendFriends_Ack(p) {
            this.userInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_RecommendFriends_Ack ackCode.
         * @member {protocol.FS2C_RecommendFriends_Ack.AckCode} ackCode
         * @memberof protocol.FS2C_RecommendFriends_Ack
         * @instance
         */
        FS2C_RecommendFriends_Ack.prototype.ackCode = 0;

        /**
         * FS2C_RecommendFriends_Ack refreshTs.
         * @member {number} refreshTs
         * @memberof protocol.FS2C_RecommendFriends_Ack
         * @instance
         */
        FS2C_RecommendFriends_Ack.prototype.refreshTs = 0;

        /**
         * FS2C_RecommendFriends_Ack userInfo.
         * @member {Array.<protocol.RecommendFriendInfo>} userInfo
         * @memberof protocol.FS2C_RecommendFriends_Ack
         * @instance
         */
        FS2C_RecommendFriends_Ack.prototype.userInfo = $util.emptyArray;

        /**
         * Encodes the specified FS2C_RecommendFriends_Ack message. Does not implicitly {@link protocol.FS2C_RecommendFriends_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_RecommendFriends_Ack
         * @static
         * @param {protocol.FS2C_RecommendFriends_Ack} m FS2C_RecommendFriends_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_RecommendFriends_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.refreshTs != null && Object.hasOwnProperty.call(m, "refreshTs"))
                w.uint32(16).int32(m.refreshTs);
            if (m.userInfo != null && m.userInfo.length) {
                for (var i = 0; i < m.userInfo.length; ++i)
                    $root.protocol.RecommendFriendInfo.encode(m.userInfo[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a FS2C_RecommendFriends_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_RecommendFriends_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_RecommendFriends_Ack} FS2C_RecommendFriends_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_RecommendFriends_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_RecommendFriends_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.refreshTs = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.userInfo && m.userInfo.length))
                            m.userInfo = [];
                        m.userInfo.push($root.protocol.RecommendFriendInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_RecommendFriends_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50013 OpCode value
         */
        FS2C_RecommendFriends_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50013] = "OpCode"] = 50013;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_RecommendFriends_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} RefreshErr=2 RefreshErr value
         */
        FS2C_RecommendFriends_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "RefreshErr"] = 2;
            return values;
        })();

        return FS2C_RecommendFriends_Ack;
    })();

    protocol.C2FS_GetFriendList = (function() {

        /**
         * Properties of a C2FS_GetFriendList.
         * @memberof protocol
         * @interface IC2FS_GetFriendList
         * @property {number|null} [page] C2FS_GetFriendList page
         */

        /**
         * Constructs a new C2FS_GetFriendList.
         * @memberof protocol
         * @classdesc Represents a C2FS_GetFriendList.
         * @implements IC2FS_GetFriendList
         * @constructor
         * @param {protocol.IC2FS_GetFriendList=} [p] Properties to set
         */
        function C2FS_GetFriendList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_GetFriendList page.
         * @member {number} page
         * @memberof protocol.C2FS_GetFriendList
         * @instance
         */
        C2FS_GetFriendList.prototype.page = 0;

        /**
         * Encodes the specified C2FS_GetFriendList message. Does not implicitly {@link protocol.C2FS_GetFriendList.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_GetFriendList
         * @static
         * @param {protocol.C2FS_GetFriendList} m C2FS_GetFriendList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_GetFriendList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                w.uint32(8).int32(m.page);
            return w;
        };

        /**
         * Decodes a C2FS_GetFriendList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_GetFriendList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_GetFriendList} C2FS_GetFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_GetFriendList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_GetFriendList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.page = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_GetFriendList.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50014 OpCode value
         */
        C2FS_GetFriendList.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50014] = "OpCode"] = 50014;
            return values;
        })();

        return C2FS_GetFriendList;
    })();

    protocol.FS2C_FriendListSync = (function() {

        /**
         * Properties of a FS2C_FriendListSync.
         * @memberof protocol
         * @interface IFS2C_FriendListSync
         * @property {protocol.FS2C_FriendListSync.AckCode|null} [ackCode] FS2C_FriendListSync ackCode
         * @property {number|null} [page] FS2C_FriendListSync page
         * @property {number|null} [total] FS2C_FriendListSync total
         * @property {number|null} [friendLimit] FS2C_FriendListSync friendLimit
         * @property {Array.<common.FriendUserInfo>|null} [friendList] FS2C_FriendListSync friendList
         */

        /**
         * Constructs a new FS2C_FriendListSync.
         * @memberof protocol
         * @classdesc Represents a FS2C_FriendListSync.
         * @implements IFS2C_FriendListSync
         * @constructor
         * @param {protocol.IFS2C_FriendListSync=} [p] Properties to set
         */
        function FS2C_FriendListSync(p) {
            this.friendList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_FriendListSync ackCode.
         * @member {protocol.FS2C_FriendListSync.AckCode} ackCode
         * @memberof protocol.FS2C_FriendListSync
         * @instance
         */
        FS2C_FriendListSync.prototype.ackCode = 0;

        /**
         * FS2C_FriendListSync page.
         * @member {number} page
         * @memberof protocol.FS2C_FriendListSync
         * @instance
         */
        FS2C_FriendListSync.prototype.page = 0;

        /**
         * FS2C_FriendListSync total.
         * @member {number} total
         * @memberof protocol.FS2C_FriendListSync
         * @instance
         */
        FS2C_FriendListSync.prototype.total = 0;

        /**
         * FS2C_FriendListSync friendLimit.
         * @member {number} friendLimit
         * @memberof protocol.FS2C_FriendListSync
         * @instance
         */
        FS2C_FriendListSync.prototype.friendLimit = 0;

        /**
         * FS2C_FriendListSync friendList.
         * @member {Array.<common.FriendUserInfo>} friendList
         * @memberof protocol.FS2C_FriendListSync
         * @instance
         */
        FS2C_FriendListSync.prototype.friendList = $util.emptyArray;

        /**
         * Encodes the specified FS2C_FriendListSync message. Does not implicitly {@link protocol.FS2C_FriendListSync.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_FriendListSync
         * @static
         * @param {protocol.FS2C_FriendListSync} m FS2C_FriendListSync message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_FriendListSync.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                w.uint32(16).int32(m.page);
            if (m.total != null && Object.hasOwnProperty.call(m, "total"))
                w.uint32(24).int32(m.total);
            if (m.friendLimit != null && Object.hasOwnProperty.call(m, "friendLimit"))
                w.uint32(32).int32(m.friendLimit);
            if (m.friendList != null && m.friendList.length) {
                for (var i = 0; i < m.friendList.length; ++i)
                    $root.common.FriendUserInfo.encode(m.friendList[i], w.uint32(50).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a FS2C_FriendListSync message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_FriendListSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_FriendListSync} FS2C_FriendListSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_FriendListSync.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_FriendListSync();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.page = r.int32();
                        break;
                    }
                case 3: {
                        m.total = r.int32();
                        break;
                    }
                case 4: {
                        m.friendLimit = r.int32();
                        break;
                    }
                case 6: {
                        if (!(m.friendList && m.friendList.length))
                            m.friendList = [];
                        m.friendList.push($root.common.FriendUserInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_FriendListSync.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50015 OpCode value
         */
        FS2C_FriendListSync.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50015] = "OpCode"] = 50015;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_FriendListSync.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        FS2C_FriendListSync.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return FS2C_FriendListSync;
    })();

    protocol.C2FS_AddFriend = (function() {

        /**
         * Properties of a C2FS_AddFriend.
         * @memberof protocol
         * @interface IC2FS_AddFriend
         * @property {string|null} [liteId] C2FS_AddFriend liteId
         */

        /**
         * Constructs a new C2FS_AddFriend.
         * @memberof protocol
         * @classdesc Represents a C2FS_AddFriend.
         * @implements IC2FS_AddFriend
         * @constructor
         * @param {protocol.IC2FS_AddFriend=} [p] Properties to set
         */
        function C2FS_AddFriend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2FS_AddFriend liteId.
         * @member {string} liteId
         * @memberof protocol.C2FS_AddFriend
         * @instance
         */
        C2FS_AddFriend.prototype.liteId = "";

        /**
         * Encodes the specified C2FS_AddFriend message. Does not implicitly {@link protocol.C2FS_AddFriend.verify|verify} messages.
         * @function encode
         * @memberof protocol.C2FS_AddFriend
         * @static
         * @param {protocol.C2FS_AddFriend} m C2FS_AddFriend message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2FS_AddFriend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(10).string(m.liteId);
            return w;
        };

        /**
         * Decodes a C2FS_AddFriend message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.C2FS_AddFriend
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.C2FS_AddFriend} C2FS_AddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2FS_AddFriend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.C2FS_AddFriend();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.C2FS_AddFriend.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50016 OpCode value
         */
        C2FS_AddFriend.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50016] = "OpCode"] = 50016;
            return values;
        })();

        return C2FS_AddFriend;
    })();

    protocol.FS2C_AddFriend_Ack = (function() {

        /**
         * Properties of a FS2C_AddFriend_Ack.
         * @memberof protocol
         * @interface IFS2C_AddFriend_Ack
         * @property {protocol.FS2C_AddFriend_Ack.AckCode|null} [ackCode] FS2C_AddFriend_Ack ackCode
         * @property {string|null} [liteId] FS2C_AddFriend_Ack liteId
         */

        /**
         * Constructs a new FS2C_AddFriend_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2C_AddFriend_Ack.
         * @implements IFS2C_AddFriend_Ack
         * @constructor
         * @param {protocol.IFS2C_AddFriend_Ack=} [p] Properties to set
         */
        function FS2C_AddFriend_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_AddFriend_Ack ackCode.
         * @member {protocol.FS2C_AddFriend_Ack.AckCode} ackCode
         * @memberof protocol.FS2C_AddFriend_Ack
         * @instance
         */
        FS2C_AddFriend_Ack.prototype.ackCode = 0;

        /**
         * FS2C_AddFriend_Ack liteId.
         * @member {string} liteId
         * @memberof protocol.FS2C_AddFriend_Ack
         * @instance
         */
        FS2C_AddFriend_Ack.prototype.liteId = "";

        /**
         * Encodes the specified FS2C_AddFriend_Ack message. Does not implicitly {@link protocol.FS2C_AddFriend_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_AddFriend_Ack
         * @static
         * @param {protocol.FS2C_AddFriend_Ack} m FS2C_AddFriend_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_AddFriend_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(18).string(m.liteId);
            return w;
        };

        /**
         * Decodes a FS2C_AddFriend_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_AddFriend_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_AddFriend_Ack} FS2C_AddFriend_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_AddFriend_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_AddFriend_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.liteId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_AddFriend_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50017 OpCode value
         */
        FS2C_AddFriend_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50017] = "OpCode"] = 50017;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2C_AddFriend_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Repeated=2 Repeated value
         * @property {number} OwnFriendFull=3 OwnFriendFull value
         * @property {number} ApplyLimit=4 ApplyLimit value
         * @property {number} FriendLiteIdNull=5 FriendLiteIdNull value
         * @property {number} FriendLiteIdErr=6 FriendLiteIdErr value
         * @property {number} FriendCountLimit=7 FriendCountLimit value
         * @property {number} AlreadyFriends=8 AlreadyFriends value
         */
        FS2C_AddFriend_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Repeated"] = 2;
            values[valuesById[3] = "OwnFriendFull"] = 3;
            values[valuesById[4] = "ApplyLimit"] = 4;
            values[valuesById[5] = "FriendLiteIdNull"] = 5;
            values[valuesById[6] = "FriendLiteIdErr"] = 6;
            values[valuesById[7] = "FriendCountLimit"] = 7;
            values[valuesById[8] = "AlreadyFriends"] = 8;
            return values;
        })();

        return FS2C_AddFriend_Ack;
    })();

    protocol.FS2C_FriendInfoSync = (function() {

        /**
         * Properties of a FS2C_FriendInfoSync.
         * @memberof protocol
         * @interface IFS2C_FriendInfoSync
         * @property {protocol.FS2C_FriendInfoSync.ESyncType|null} [syncType] FS2C_FriendInfoSync syncType
         * @property {string|null} [uid] FS2C_FriendInfoSync uid
         * @property {string|null} [liteId] FS2C_FriendInfoSync liteId
         * @property {common.FriendUserInfo|null} [friendInfo] FS2C_FriendInfoSync friendInfo
         */

        /**
         * Constructs a new FS2C_FriendInfoSync.
         * @memberof protocol
         * @classdesc Represents a FS2C_FriendInfoSync.
         * @implements IFS2C_FriendInfoSync
         * @constructor
         * @param {protocol.IFS2C_FriendInfoSync=} [p] Properties to set
         */
        function FS2C_FriendInfoSync(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2C_FriendInfoSync syncType.
         * @member {protocol.FS2C_FriendInfoSync.ESyncType} syncType
         * @memberof protocol.FS2C_FriendInfoSync
         * @instance
         */
        FS2C_FriendInfoSync.prototype.syncType = 0;

        /**
         * FS2C_FriendInfoSync uid.
         * @member {string} uid
         * @memberof protocol.FS2C_FriendInfoSync
         * @instance
         */
        FS2C_FriendInfoSync.prototype.uid = "";

        /**
         * FS2C_FriendInfoSync liteId.
         * @member {string} liteId
         * @memberof protocol.FS2C_FriendInfoSync
         * @instance
         */
        FS2C_FriendInfoSync.prototype.liteId = "";

        /**
         * FS2C_FriendInfoSync friendInfo.
         * @member {common.FriendUserInfo|null|undefined} friendInfo
         * @memberof protocol.FS2C_FriendInfoSync
         * @instance
         */
        FS2C_FriendInfoSync.prototype.friendInfo = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * FS2C_FriendInfoSync _friendInfo.
         * @member {"friendInfo"|undefined} _friendInfo
         * @memberof protocol.FS2C_FriendInfoSync
         * @instance
         */
        Object.defineProperty(FS2C_FriendInfoSync.prototype, "_friendInfo", {
            get: $util.oneOfGetter($oneOfFields = ["friendInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified FS2C_FriendInfoSync message. Does not implicitly {@link protocol.FS2C_FriendInfoSync.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2C_FriendInfoSync
         * @static
         * @param {protocol.FS2C_FriendInfoSync} m FS2C_FriendInfoSync message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2C_FriendInfoSync.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.syncType != null && Object.hasOwnProperty.call(m, "syncType"))
                w.uint32(8).int32(m.syncType);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(18).string(m.uid);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(26).string(m.liteId);
            if (m.friendInfo != null && Object.hasOwnProperty.call(m, "friendInfo"))
                $root.common.FriendUserInfo.encode(m.friendInfo, w.uint32(34).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a FS2C_FriendInfoSync message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2C_FriendInfoSync
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2C_FriendInfoSync} FS2C_FriendInfoSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2C_FriendInfoSync.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2C_FriendInfoSync();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.syncType = r.int32();
                        break;
                    }
                case 2: {
                        m.uid = r.string();
                        break;
                    }
                case 3: {
                        m.liteId = r.string();
                        break;
                    }
                case 4: {
                        m.friendInfo = $root.common.FriendUserInfo.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2C_FriendInfoSync.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50018 OpCode value
         */
        FS2C_FriendInfoSync.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50018] = "OpCode"] = 50018;
            return values;
        })();

        /**
         * ESyncType enum.
         * @name protocol.FS2C_FriendInfoSync.ESyncType
         * @enum {number}
         * @property {number} None=0 None value
         * @property {number} Add=1 Add value
         * @property {number} Remove=2 Remove value
         * @property {number} StateChange=3 StateChange value
         */
        FS2C_FriendInfoSync.ESyncType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "None"] = 0;
            values[valuesById[1] = "Add"] = 1;
            values[valuesById[2] = "Remove"] = 2;
            values[valuesById[3] = "StateChange"] = 3;
            return values;
        })();

        return FS2C_FriendInfoSync;
    })();

    protocol.RecommendFriendInfo = (function() {

        /**
         * Properties of a RecommendFriendInfo.
         * @memberof protocol
         * @interface IRecommendFriendInfo
         * @property {common.FriendUserInfo|null} [userInfo] RecommendFriendInfo userInfo
         * @property {protocol.RecommendFriendInfo.State|null} [state] RecommendFriendInfo state
         */

        /**
         * Constructs a new RecommendFriendInfo.
         * @memberof protocol
         * @classdesc Represents a RecommendFriendInfo.
         * @implements IRecommendFriendInfo
         * @constructor
         * @param {protocol.IRecommendFriendInfo=} [p] Properties to set
         */
        function RecommendFriendInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RecommendFriendInfo userInfo.
         * @member {common.FriendUserInfo|null|undefined} userInfo
         * @memberof protocol.RecommendFriendInfo
         * @instance
         */
        RecommendFriendInfo.prototype.userInfo = null;

        /**
         * RecommendFriendInfo state.
         * @member {protocol.RecommendFriendInfo.State} state
         * @memberof protocol.RecommendFriendInfo
         * @instance
         */
        RecommendFriendInfo.prototype.state = 0;

        /**
         * Encodes the specified RecommendFriendInfo message. Does not implicitly {@link protocol.RecommendFriendInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.RecommendFriendInfo
         * @static
         * @param {protocol.RecommendFriendInfo} m RecommendFriendInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecommendFriendInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
                $root.common.FriendUserInfo.encode(m.userInfo, w.uint32(10).fork()).ldelim();
            if (m.state != null && Object.hasOwnProperty.call(m, "state"))
                w.uint32(16).int32(m.state);
            return w;
        };

        /**
         * Decodes a RecommendFriendInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RecommendFriendInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.RecommendFriendInfo} RecommendFriendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecommendFriendInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.RecommendFriendInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.userInfo = $root.common.FriendUserInfo.decode(r, r.uint32());
                        break;
                    }
                case 2: {
                        m.state = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * State enum.
         * @name protocol.RecommendFriendInfo.State
         * @enum {number}
         * @property {number} Normal=0 Normal value
         * @property {number} AlreadyFriend=1 AlreadyFriend value
         * @property {number} AlreadyApply=2 AlreadyApply value
         */
        RecommendFriendInfo.State = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Normal"] = 0;
            values[valuesById[1] = "AlreadyFriend"] = 1;
            values[valuesById[2] = "AlreadyApply"] = 2;
            return values;
        })();

        return RecommendFriendInfo;
    })();

    protocol.FS2LS_GetLitePlayerInfo = (function() {

        /**
         * Properties of a FS2LS_GetLitePlayerInfo.
         * @memberof protocol
         * @interface IFS2LS_GetLitePlayerInfo
         * @property {string|null} [uid] FS2LS_GetLitePlayerInfo uid
         * @property {string|null} [liteId] FS2LS_GetLitePlayerInfo liteId
         * @property {string|null} [nickname] FS2LS_GetLitePlayerInfo nickname
         * @property {string|null} [photoUri] FS2LS_GetLitePlayerInfo photoUri
         * @property {number|null} [loginTs] FS2LS_GetLitePlayerInfo loginTs
         * @property {number|null} [logoffTs] FS2LS_GetLitePlayerInfo logoffTs
         * @property {Long|null} [star] FS2LS_GetLitePlayerInfo star
         * @property {string|null} [sign] FS2LS_GetLitePlayerInfo sign
         * @property {Long|null} [coin] FS2LS_GetLitePlayerInfo coin
         * @property {Long|null} [piggyCoin] FS2LS_GetLitePlayerInfo piggyCoin
         * @property {number|null} [adCode] FS2LS_GetLitePlayerInfo adCode
         * @property {number|null} [gender] FS2LS_GetLitePlayerInfo gender
         * @property {number|null} [CharacterSkin] FS2LS_GetLitePlayerInfo CharacterSkin
         * @property {number|null} [cityStar] FS2LS_GetLitePlayerInfo cityStar
         */

        /**
         * Constructs a new FS2LS_GetLitePlayerInfo.
         * @memberof protocol
         * @classdesc Represents a FS2LS_GetLitePlayerInfo.
         * @implements IFS2LS_GetLitePlayerInfo
         * @constructor
         * @param {protocol.IFS2LS_GetLitePlayerInfo=} [p] Properties to set
         */
        function FS2LS_GetLitePlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2LS_GetLitePlayerInfo uid.
         * @member {string} uid
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.uid = "";

        /**
         * FS2LS_GetLitePlayerInfo liteId.
         * @member {string} liteId
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.liteId = "";

        /**
         * FS2LS_GetLitePlayerInfo nickname.
         * @member {string} nickname
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.nickname = "";

        /**
         * FS2LS_GetLitePlayerInfo photoUri.
         * @member {string} photoUri
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.photoUri = "";

        /**
         * FS2LS_GetLitePlayerInfo loginTs.
         * @member {number} loginTs
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.loginTs = 0;

        /**
         * FS2LS_GetLitePlayerInfo logoffTs.
         * @member {number} logoffTs
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.logoffTs = 0;

        /**
         * FS2LS_GetLitePlayerInfo star.
         * @member {Long} star
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.star = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FS2LS_GetLitePlayerInfo sign.
         * @member {string} sign
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.sign = "";

        /**
         * FS2LS_GetLitePlayerInfo coin.
         * @member {Long} coin
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FS2LS_GetLitePlayerInfo piggyCoin.
         * @member {Long} piggyCoin
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.piggyCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FS2LS_GetLitePlayerInfo adCode.
         * @member {number} adCode
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.adCode = 0;

        /**
         * FS2LS_GetLitePlayerInfo gender.
         * @member {number} gender
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.gender = 0;

        /**
         * FS2LS_GetLitePlayerInfo CharacterSkin.
         * @member {number} CharacterSkin
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.CharacterSkin = 0;

        /**
         * FS2LS_GetLitePlayerInfo cityStar.
         * @member {number} cityStar
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @instance
         */
        FS2LS_GetLitePlayerInfo.prototype.cityStar = 0;

        /**
         * Encodes the specified FS2LS_GetLitePlayerInfo message. Does not implicitly {@link protocol.FS2LS_GetLitePlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @static
         * @param {protocol.FS2LS_GetLitePlayerInfo} m FS2LS_GetLitePlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2LS_GetLitePlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.liteId != null && Object.hasOwnProperty.call(m, "liteId"))
                w.uint32(18).string(m.liteId);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(26).string(m.nickname);
            if (m.photoUri != null && Object.hasOwnProperty.call(m, "photoUri"))
                w.uint32(34).string(m.photoUri);
            if (m.loginTs != null && Object.hasOwnProperty.call(m, "loginTs"))
                w.uint32(40).int32(m.loginTs);
            if (m.logoffTs != null && Object.hasOwnProperty.call(m, "logoffTs"))
                w.uint32(48).int32(m.logoffTs);
            if (m.star != null && Object.hasOwnProperty.call(m, "star"))
                w.uint32(56).int64(m.star);
            if (m.sign != null && Object.hasOwnProperty.call(m, "sign"))
                w.uint32(66).string(m.sign);
            if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
                w.uint32(72).int64(m.coin);
            if (m.piggyCoin != null && Object.hasOwnProperty.call(m, "piggyCoin"))
                w.uint32(80).int64(m.piggyCoin);
            if (m.adCode != null && Object.hasOwnProperty.call(m, "adCode"))
                w.uint32(88).int32(m.adCode);
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(96).int32(m.gender);
            if (m.CharacterSkin != null && Object.hasOwnProperty.call(m, "CharacterSkin"))
                w.uint32(104).int32(m.CharacterSkin);
            if (m.cityStar != null && Object.hasOwnProperty.call(m, "cityStar"))
                w.uint32(112).int32(m.cityStar);
            return w;
        };

        /**
         * Decodes a FS2LS_GetLitePlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2LS_GetLitePlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2LS_GetLitePlayerInfo} FS2LS_GetLitePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2LS_GetLitePlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2LS_GetLitePlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.liteId = r.string();
                        break;
                    }
                case 3: {
                        m.nickname = r.string();
                        break;
                    }
                case 4: {
                        m.photoUri = r.string();
                        break;
                    }
                case 5: {
                        m.loginTs = r.int32();
                        break;
                    }
                case 6: {
                        m.logoffTs = r.int32();
                        break;
                    }
                case 7: {
                        m.star = r.int64();
                        break;
                    }
                case 8: {
                        m.sign = r.string();
                        break;
                    }
                case 9: {
                        m.coin = r.int64();
                        break;
                    }
                case 10: {
                        m.piggyCoin = r.int64();
                        break;
                    }
                case 11: {
                        m.adCode = r.int32();
                        break;
                    }
                case 12: {
                        m.gender = r.int32();
                        break;
                    }
                case 13: {
                        m.CharacterSkin = r.int32();
                        break;
                    }
                case 14: {
                        m.cityStar = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2LS_GetLitePlayerInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50019 OpCode value
         */
        FS2LS_GetLitePlayerInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50019] = "OpCode"] = 50019;
            return values;
        })();

        return FS2LS_GetLitePlayerInfo;
    })();

    protocol.LS2FS_UpdateRecommendList = (function() {

        /**
         * Properties of a LS2FS_UpdateRecommendList.
         * @memberof protocol
         * @interface ILS2FS_UpdateRecommendList
         */

        /**
         * Constructs a new LS2FS_UpdateRecommendList.
         * @memberof protocol
         * @classdesc Represents a LS2FS_UpdateRecommendList.
         * @implements ILS2FS_UpdateRecommendList
         * @constructor
         * @param {protocol.ILS2FS_UpdateRecommendList=} [p] Properties to set
         */
        function LS2FS_UpdateRecommendList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified LS2FS_UpdateRecommendList message. Does not implicitly {@link protocol.LS2FS_UpdateRecommendList.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2FS_UpdateRecommendList
         * @static
         * @param {protocol.LS2FS_UpdateRecommendList} m LS2FS_UpdateRecommendList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2FS_UpdateRecommendList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a LS2FS_UpdateRecommendList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2FS_UpdateRecommendList
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2FS_UpdateRecommendList} LS2FS_UpdateRecommendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2FS_UpdateRecommendList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2FS_UpdateRecommendList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.LS2FS_UpdateRecommendList.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50020 OpCode value
         */
        LS2FS_UpdateRecommendList.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50020] = "OpCode"] = 50020;
            return values;
        })();

        return LS2FS_UpdateRecommendList;
    })();

    protocol.FS2LS_UpdateRecommendList_Ack = (function() {

        /**
         * Properties of a FS2LS_UpdateRecommendList_Ack.
         * @memberof protocol
         * @interface IFS2LS_UpdateRecommendList_Ack
         * @property {protocol.FS2LS_UpdateRecommendList_Ack.AckCode|null} [ackCode] FS2LS_UpdateRecommendList_Ack ackCode
         */

        /**
         * Constructs a new FS2LS_UpdateRecommendList_Ack.
         * @memberof protocol
         * @classdesc Represents a FS2LS_UpdateRecommendList_Ack.
         * @implements IFS2LS_UpdateRecommendList_Ack
         * @constructor
         * @param {protocol.IFS2LS_UpdateRecommendList_Ack=} [p] Properties to set
         */
        function FS2LS_UpdateRecommendList_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * FS2LS_UpdateRecommendList_Ack ackCode.
         * @member {protocol.FS2LS_UpdateRecommendList_Ack.AckCode} ackCode
         * @memberof protocol.FS2LS_UpdateRecommendList_Ack
         * @instance
         */
        FS2LS_UpdateRecommendList_Ack.prototype.ackCode = 0;

        /**
         * Encodes the specified FS2LS_UpdateRecommendList_Ack message. Does not implicitly {@link protocol.FS2LS_UpdateRecommendList_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.FS2LS_UpdateRecommendList_Ack
         * @static
         * @param {protocol.FS2LS_UpdateRecommendList_Ack} m FS2LS_UpdateRecommendList_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FS2LS_UpdateRecommendList_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            return w;
        };

        /**
         * Decodes a FS2LS_UpdateRecommendList_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FS2LS_UpdateRecommendList_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.FS2LS_UpdateRecommendList_Ack} FS2LS_UpdateRecommendList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FS2LS_UpdateRecommendList_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.FS2LS_UpdateRecommendList_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.FS2LS_UpdateRecommendList_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=50021 OpCode value
         */
        FS2LS_UpdateRecommendList_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[50021] = "OpCode"] = 50021;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.FS2LS_UpdateRecommendList_Ack.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Fail=1 Fail value
         */
        FS2LS_UpdateRecommendList_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            return values;
        })();

        return FS2LS_UpdateRecommendList_Ack;
    })();

    protocol.UserDataResponse = (function() {

        /**
         * Properties of a UserDataResponse.
         * @memberof protocol
         * @interface IUserDataResponse
         * @property {number|null} [id] UserDataResponse id
         * @property {string|null} [userId] UserDataResponse userId
         * @property {string|null} [payload] UserDataResponse payload
         * @property {protocol.UserDataResponse.AckCode|null} [errCode] UserDataResponse errCode
         */

        /**
         * Constructs a new UserDataResponse.
         * @memberof protocol
         * @classdesc Represents a UserDataResponse.
         * @implements IUserDataResponse
         * @constructor
         * @param {protocol.IUserDataResponse=} [p] Properties to set
         */
        function UserDataResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserDataResponse id.
         * @member {number} id
         * @memberof protocol.UserDataResponse
         * @instance
         */
        UserDataResponse.prototype.id = 0;

        /**
         * UserDataResponse userId.
         * @member {string} userId
         * @memberof protocol.UserDataResponse
         * @instance
         */
        UserDataResponse.prototype.userId = "";

        /**
         * UserDataResponse payload.
         * @member {string} payload
         * @memberof protocol.UserDataResponse
         * @instance
         */
        UserDataResponse.prototype.payload = "";

        /**
         * UserDataResponse errCode.
         * @member {protocol.UserDataResponse.AckCode} errCode
         * @memberof protocol.UserDataResponse
         * @instance
         */
        UserDataResponse.prototype.errCode = 0;

        /**
         * Encodes the specified UserDataResponse message. Does not implicitly {@link protocol.UserDataResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.UserDataResponse
         * @static
         * @param {protocol.UserDataResponse} m UserDataResponse message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDataResponse.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                w.uint32(18).string(m.userId);
            if (m.payload != null && Object.hasOwnProperty.call(m, "payload"))
                w.uint32(26).string(m.payload);
            if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                w.uint32(32).int32(m.errCode);
            return w;
        };

        /**
         * Decodes a UserDataResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UserDataResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.UserDataResponse} UserDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDataResponse.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.UserDataResponse();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.id = r.int32();
                        break;
                    }
                case 2: {
                        m.userId = r.string();
                        break;
                    }
                case 3: {
                        m.payload = r.string();
                        break;
                    }
                case 4: {
                        m.errCode = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.UserDataResponse.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} GetBagInfo=1 GetBagInfo value
         * @property {number} CostItem=2 CostItem value
         * @property {number} AddItem=3 AddItem value
         */
        UserDataResponse.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[1] = "GetBagInfo"] = 1;
            values[valuesById[2] = "CostItem"] = 2;
            values[valuesById[3] = "AddItem"] = 3;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.UserDataResponse.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} NoDate=1 NoDate value
         * @property {number} ErrCount=2 ErrCount value
         * @property {number} InvalidItem=3 InvalidItem value
         * @property {number} DuplicateItemUid=4 DuplicateItemUid value
         */
        UserDataResponse.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "NoDate"] = 1;
            values[valuesById[2] = "ErrCount"] = 2;
            values[valuesById[3] = "InvalidItem"] = 3;
            values[valuesById[4] = "DuplicateItemUid"] = 4;
            return values;
        })();

        return UserDataResponse;
    })();

    protocol.Logic2OrleansReq = (function() {

        /**
         * Properties of a Logic2OrleansReq.
         * @memberof protocol
         * @interface ILogic2OrleansReq
         * @property {number|null} [opCode] Logic2OrleansReq opCode
         * @property {string|null} [uid] Logic2OrleansReq uid
         * @property {Uint8Array|null} [msgData] Logic2OrleansReq msgData
         */

        /**
         * Constructs a new Logic2OrleansReq.
         * @memberof protocol
         * @classdesc Represents a Logic2OrleansReq.
         * @implements ILogic2OrleansReq
         * @constructor
         * @param {protocol.ILogic2OrleansReq=} [p] Properties to set
         */
        function Logic2OrleansReq(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Logic2OrleansReq opCode.
         * @member {number} opCode
         * @memberof protocol.Logic2OrleansReq
         * @instance
         */
        Logic2OrleansReq.prototype.opCode = 0;

        /**
         * Logic2OrleansReq uid.
         * @member {string} uid
         * @memberof protocol.Logic2OrleansReq
         * @instance
         */
        Logic2OrleansReq.prototype.uid = "";

        /**
         * Logic2OrleansReq msgData.
         * @member {Uint8Array} msgData
         * @memberof protocol.Logic2OrleansReq
         * @instance
         */
        Logic2OrleansReq.prototype.msgData = $util.newBuffer([]);

        /**
         * Encodes the specified Logic2OrleansReq message. Does not implicitly {@link protocol.Logic2OrleansReq.verify|verify} messages.
         * @function encode
         * @memberof protocol.Logic2OrleansReq
         * @static
         * @param {protocol.Logic2OrleansReq} m Logic2OrleansReq message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Logic2OrleansReq.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.opCode != null && Object.hasOwnProperty.call(m, "opCode"))
                w.uint32(8).int32(m.opCode);
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(18).string(m.uid);
            if (m.msgData != null && Object.hasOwnProperty.call(m, "msgData"))
                w.uint32(26).bytes(m.msgData);
            return w;
        };

        /**
         * Decodes a Logic2OrleansReq message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Logic2OrleansReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.Logic2OrleansReq} Logic2OrleansReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Logic2OrleansReq.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.Logic2OrleansReq();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.opCode = r.int32();
                        break;
                    }
                case 2: {
                        m.uid = r.string();
                        break;
                    }
                case 3: {
                        m.msgData = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Logic2OrleansReq;
    })();

    protocol.Logic2GameServerNotify = (function() {

        /**
         * Properties of a Logic2GameServerNotify.
         * @memberof protocol
         * @interface ILogic2GameServerNotify
         * @property {string|null} [Uid] Logic2GameServerNotify Uid
         * @property {Uint8Array|null} [msgData] Logic2GameServerNotify msgData
         */

        /**
         * Constructs a new Logic2GameServerNotify.
         * @memberof protocol
         * @classdesc Represents a Logic2GameServerNotify.
         * @implements ILogic2GameServerNotify
         * @constructor
         * @param {protocol.ILogic2GameServerNotify=} [p] Properties to set
         */
        function Logic2GameServerNotify(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Logic2GameServerNotify Uid.
         * @member {string|null|undefined} Uid
         * @memberof protocol.Logic2GameServerNotify
         * @instance
         */
        Logic2GameServerNotify.prototype.Uid = null;

        /**
         * Logic2GameServerNotify msgData.
         * @member {Uint8Array|null|undefined} msgData
         * @memberof protocol.Logic2GameServerNotify
         * @instance
         */
        Logic2GameServerNotify.prototype.msgData = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Logic2GameServerNotify _Uid.
         * @member {"Uid"|undefined} _Uid
         * @memberof protocol.Logic2GameServerNotify
         * @instance
         */
        Object.defineProperty(Logic2GameServerNotify.prototype, "_Uid", {
            get: $util.oneOfGetter($oneOfFields = ["Uid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Logic2GameServerNotify _msgData.
         * @member {"msgData"|undefined} _msgData
         * @memberof protocol.Logic2GameServerNotify
         * @instance
         */
        Object.defineProperty(Logic2GameServerNotify.prototype, "_msgData", {
            get: $util.oneOfGetter($oneOfFields = ["msgData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified Logic2GameServerNotify message. Does not implicitly {@link protocol.Logic2GameServerNotify.verify|verify} messages.
         * @function encode
         * @memberof protocol.Logic2GameServerNotify
         * @static
         * @param {protocol.Logic2GameServerNotify} m Logic2GameServerNotify message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Logic2GameServerNotify.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Uid != null && Object.hasOwnProperty.call(m, "Uid"))
                w.uint32(10).string(m.Uid);
            if (m.msgData != null && Object.hasOwnProperty.call(m, "msgData"))
                w.uint32(18).bytes(m.msgData);
            return w;
        };

        /**
         * Decodes a Logic2GameServerNotify message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Logic2GameServerNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.Logic2GameServerNotify} Logic2GameServerNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Logic2GameServerNotify.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.Logic2GameServerNotify();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.Uid = r.string();
                        break;
                    }
                case 2: {
                        m.msgData = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Logic2GameServerNotify;
    })();

    protocol.NatsPublishMsg = (function() {

        /**
         * Properties of a NatsPublishMsg.
         * @memberof protocol
         * @interface INatsPublishMsg
         * @property {number|null} [opCode] NatsPublishMsg opCode
         * @property {Uint8Array|null} [msgData] NatsPublishMsg msgData
         */

        /**
         * Constructs a new NatsPublishMsg.
         * @memberof protocol
         * @classdesc Represents a NatsPublishMsg.
         * @implements INatsPublishMsg
         * @constructor
         * @param {protocol.INatsPublishMsg=} [p] Properties to set
         */
        function NatsPublishMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * NatsPublishMsg opCode.
         * @member {number} opCode
         * @memberof protocol.NatsPublishMsg
         * @instance
         */
        NatsPublishMsg.prototype.opCode = 0;

        /**
         * NatsPublishMsg msgData.
         * @member {Uint8Array} msgData
         * @memberof protocol.NatsPublishMsg
         * @instance
         */
        NatsPublishMsg.prototype.msgData = $util.newBuffer([]);

        /**
         * Encodes the specified NatsPublishMsg message. Does not implicitly {@link protocol.NatsPublishMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.NatsPublishMsg
         * @static
         * @param {protocol.NatsPublishMsg} m NatsPublishMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NatsPublishMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.opCode != null && Object.hasOwnProperty.call(m, "opCode"))
                w.uint32(8).int32(m.opCode);
            if (m.msgData != null && Object.hasOwnProperty.call(m, "msgData"))
                w.uint32(18).bytes(m.msgData);
            return w;
        };

        /**
         * Decodes a NatsPublishMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NatsPublishMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.NatsPublishMsg} NatsPublishMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NatsPublishMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.NatsPublishMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.opCode = r.int32();
                        break;
                    }
                case 2: {
                        m.msgData = r.bytes();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return NatsPublishMsg;
    })();

    protocol.SS2LS_SetGMLevel = (function() {

        /**
         * Properties of a SS2LS_SetGMLevel.
         * @memberof protocol
         * @interface ISS2LS_SetGMLevel
         * @property {protocol.SS2LS_SetGMLevel.AckCode|null} [code] SS2LS_SetGMLevel code
         * @property {number|null} [gmLevel] SS2LS_SetGMLevel gmLevel
         */

        /**
         * Constructs a new SS2LS_SetGMLevel.
         * @memberof protocol
         * @classdesc Represents a SS2LS_SetGMLevel.
         * @implements ISS2LS_SetGMLevel
         * @constructor
         * @param {protocol.ISS2LS_SetGMLevel=} [p] Properties to set
         */
        function SS2LS_SetGMLevel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_SetGMLevel code.
         * @member {protocol.SS2LS_SetGMLevel.AckCode} code
         * @memberof protocol.SS2LS_SetGMLevel
         * @instance
         */
        SS2LS_SetGMLevel.prototype.code = 0;

        /**
         * SS2LS_SetGMLevel gmLevel.
         * @member {number} gmLevel
         * @memberof protocol.SS2LS_SetGMLevel
         * @instance
         */
        SS2LS_SetGMLevel.prototype.gmLevel = 0;

        /**
         * Encodes the specified SS2LS_SetGMLevel message. Does not implicitly {@link protocol.SS2LS_SetGMLevel.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_SetGMLevel
         * @static
         * @param {protocol.SS2LS_SetGMLevel} m SS2LS_SetGMLevel message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_SetGMLevel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.gmLevel != null && Object.hasOwnProperty.call(m, "gmLevel"))
                w.uint32(16).int32(m.gmLevel);
            return w;
        };

        /**
         * Decodes a SS2LS_SetGMLevel message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_SetGMLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_SetGMLevel} SS2LS_SetGMLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_SetGMLevel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_SetGMLevel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.gmLevel = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_SetGMLevel.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30000 OpCode value
         */
        SS2LS_SetGMLevel.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30000] = "OpCode"] = 30000;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.SS2LS_SetGMLevel.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Fail=1 Fail value
         */
        SS2LS_SetGMLevel.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            return values;
        })();

        return SS2LS_SetGMLevel;
    })();

    protocol.LS2SS_SetGMLevel_Ack = (function() {

        /**
         * Properties of a LS2SS_SetGMLevel_Ack.
         * @memberof protocol
         * @interface ILS2SS_SetGMLevel_Ack
         * @property {protocol.LS2SS_SetGMLevel_Ack.AckCode|null} [code] LS2SS_SetGMLevel_Ack code
         * @property {Array.<number>|null} [gmLevels] LS2SS_SetGMLevel_Ack gmLevels
         */

        /**
         * Constructs a new LS2SS_SetGMLevel_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_SetGMLevel_Ack.
         * @implements ILS2SS_SetGMLevel_Ack
         * @constructor
         * @param {protocol.ILS2SS_SetGMLevel_Ack=} [p] Properties to set
         */
        function LS2SS_SetGMLevel_Ack(p) {
            this.gmLevels = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_SetGMLevel_Ack code.
         * @member {protocol.LS2SS_SetGMLevel_Ack.AckCode} code
         * @memberof protocol.LS2SS_SetGMLevel_Ack
         * @instance
         */
        LS2SS_SetGMLevel_Ack.prototype.code = 0;

        /**
         * LS2SS_SetGMLevel_Ack gmLevels.
         * @member {Array.<number>} gmLevels
         * @memberof protocol.LS2SS_SetGMLevel_Ack
         * @instance
         */
        LS2SS_SetGMLevel_Ack.prototype.gmLevels = $util.emptyArray;

        /**
         * Encodes the specified LS2SS_SetGMLevel_Ack message. Does not implicitly {@link protocol.LS2SS_SetGMLevel_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_SetGMLevel_Ack
         * @static
         * @param {protocol.LS2SS_SetGMLevel_Ack} m LS2SS_SetGMLevel_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_SetGMLevel_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.gmLevels != null && m.gmLevels.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.gmLevels.length; ++i)
                    w.int32(m.gmLevels[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a LS2SS_SetGMLevel_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_SetGMLevel_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_SetGMLevel_Ack} LS2SS_SetGMLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_SetGMLevel_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_SetGMLevel_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.gmLevels && m.gmLevels.length))
                            m.gmLevels = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.gmLevels.push(r.int32());
                        } else
                            m.gmLevels.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_SetGMLevel_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_SetGMLevel_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_SetGMLevel_Ack;
    })();

    protocol.SS2LS_GetGMLevel = (function() {

        /**
         * Properties of a SS2LS_GetGMLevel.
         * @memberof protocol
         * @interface ISS2LS_GetGMLevel
         * @property {protocol.SS2LS_GetGMLevel.AckCode|null} [code] SS2LS_GetGMLevel code
         */

        /**
         * Constructs a new SS2LS_GetGMLevel.
         * @memberof protocol
         * @classdesc Represents a SS2LS_GetGMLevel.
         * @implements ISS2LS_GetGMLevel
         * @constructor
         * @param {protocol.ISS2LS_GetGMLevel=} [p] Properties to set
         */
        function SS2LS_GetGMLevel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_GetGMLevel code.
         * @member {protocol.SS2LS_GetGMLevel.AckCode} code
         * @memberof protocol.SS2LS_GetGMLevel
         * @instance
         */
        SS2LS_GetGMLevel.prototype.code = 0;

        /**
         * Encodes the specified SS2LS_GetGMLevel message. Does not implicitly {@link protocol.SS2LS_GetGMLevel.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_GetGMLevel
         * @static
         * @param {protocol.SS2LS_GetGMLevel} m SS2LS_GetGMLevel message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_GetGMLevel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            return w;
        };

        /**
         * Decodes a SS2LS_GetGMLevel message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_GetGMLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_GetGMLevel} SS2LS_GetGMLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_GetGMLevel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_GetGMLevel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_GetGMLevel.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30001 OpCode value
         */
        SS2LS_GetGMLevel.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30001] = "OpCode"] = 30001;
            return values;
        })();

        /**
         * AckCode enum.
         * @name protocol.SS2LS_GetGMLevel.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} Fail=1 Fail value
         */
        SS2LS_GetGMLevel.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Fail"] = 1;
            return values;
        })();

        return SS2LS_GetGMLevel;
    })();

    protocol.LS2SS_GetGMLevel_Ack = (function() {

        /**
         * Properties of a LS2SS_GetGMLevel_Ack.
         * @memberof protocol
         * @interface ILS2SS_GetGMLevel_Ack
         * @property {protocol.LS2SS_GetGMLevel_Ack.AckCode|null} [code] LS2SS_GetGMLevel_Ack code
         * @property {Array.<number>|null} [gmLevels] LS2SS_GetGMLevel_Ack gmLevels
         */

        /**
         * Constructs a new LS2SS_GetGMLevel_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_GetGMLevel_Ack.
         * @implements ILS2SS_GetGMLevel_Ack
         * @constructor
         * @param {protocol.ILS2SS_GetGMLevel_Ack=} [p] Properties to set
         */
        function LS2SS_GetGMLevel_Ack(p) {
            this.gmLevels = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_GetGMLevel_Ack code.
         * @member {protocol.LS2SS_GetGMLevel_Ack.AckCode} code
         * @memberof protocol.LS2SS_GetGMLevel_Ack
         * @instance
         */
        LS2SS_GetGMLevel_Ack.prototype.code = 0;

        /**
         * LS2SS_GetGMLevel_Ack gmLevels.
         * @member {Array.<number>} gmLevels
         * @memberof protocol.LS2SS_GetGMLevel_Ack
         * @instance
         */
        LS2SS_GetGMLevel_Ack.prototype.gmLevels = $util.emptyArray;

        /**
         * Encodes the specified LS2SS_GetGMLevel_Ack message. Does not implicitly {@link protocol.LS2SS_GetGMLevel_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_GetGMLevel_Ack
         * @static
         * @param {protocol.LS2SS_GetGMLevel_Ack} m LS2SS_GetGMLevel_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_GetGMLevel_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.gmLevels != null && m.gmLevels.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.gmLevels.length; ++i)
                    w.int32(m.gmLevels[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a LS2SS_GetGMLevel_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_GetGMLevel_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_GetGMLevel_Ack} LS2SS_GetGMLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_GetGMLevel_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_GetGMLevel_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.gmLevels && m.gmLevels.length))
                            m.gmLevels = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.gmLevels.push(r.int32());
                        } else
                            m.gmLevels.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_GetGMLevel_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_GetGMLevel_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_GetGMLevel_Ack;
    })();

    protocol.SS2LS_AddCoin = (function() {

        /**
         * Properties of a SS2LS_AddCoin.
         * @memberof protocol
         * @interface ISS2LS_AddCoin
         * @property {string|null} [uid] SS2LS_AddCoin uid
         * @property {Long|null} [coin] SS2LS_AddCoin coin
         */

        /**
         * Constructs a new SS2LS_AddCoin.
         * @memberof protocol
         * @classdesc Represents a SS2LS_AddCoin.
         * @implements ISS2LS_AddCoin
         * @constructor
         * @param {protocol.ISS2LS_AddCoin=} [p] Properties to set
         */
        function SS2LS_AddCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_AddCoin uid.
         * @member {string} uid
         * @memberof protocol.SS2LS_AddCoin
         * @instance
         */
        SS2LS_AddCoin.prototype.uid = "";

        /**
         * SS2LS_AddCoin coin.
         * @member {Long} coin
         * @memberof protocol.SS2LS_AddCoin
         * @instance
         */
        SS2LS_AddCoin.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified SS2LS_AddCoin message. Does not implicitly {@link protocol.SS2LS_AddCoin.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_AddCoin
         * @static
         * @param {protocol.SS2LS_AddCoin} m SS2LS_AddCoin message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_AddCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
                w.uint32(16).int64(m.coin);
            return w;
        };

        /**
         * Decodes a SS2LS_AddCoin message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_AddCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_AddCoin} SS2LS_AddCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_AddCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_AddCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.coin = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_AddCoin.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30003 OpCode value
         */
        SS2LS_AddCoin.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30003] = "OpCode"] = 30003;
            return values;
        })();

        return SS2LS_AddCoin;
    })();

    protocol.LS2SS_AddCoin_Ack = (function() {

        /**
         * Properties of a LS2SS_AddCoin_Ack.
         * @memberof protocol
         * @interface ILS2SS_AddCoin_Ack
         * @property {protocol.LS2SS_AddCoin_Ack.AckCode|null} [code] LS2SS_AddCoin_Ack code
         */

        /**
         * Constructs a new LS2SS_AddCoin_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_AddCoin_Ack.
         * @implements ILS2SS_AddCoin_Ack
         * @constructor
         * @param {protocol.ILS2SS_AddCoin_Ack=} [p] Properties to set
         */
        function LS2SS_AddCoin_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_AddCoin_Ack code.
         * @member {protocol.LS2SS_AddCoin_Ack.AckCode} code
         * @memberof protocol.LS2SS_AddCoin_Ack
         * @instance
         */
        LS2SS_AddCoin_Ack.prototype.code = 0;

        /**
         * Encodes the specified LS2SS_AddCoin_Ack message. Does not implicitly {@link protocol.LS2SS_AddCoin_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_AddCoin_Ack
         * @static
         * @param {protocol.LS2SS_AddCoin_Ack} m LS2SS_AddCoin_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_AddCoin_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            return w;
        };

        /**
         * Decodes a LS2SS_AddCoin_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_AddCoin_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_AddCoin_Ack} LS2SS_AddCoin_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_AddCoin_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_AddCoin_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_AddCoin_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_AddCoin_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_AddCoin_Ack;
    })();

    protocol.SS2LS_GMUpdatePlayerBaseInfo = (function() {

        /**
         * Properties of a SS2LS_GMUpdatePlayerBaseInfo.
         * @memberof protocol
         * @interface ISS2LS_GMUpdatePlayerBaseInfo
         * @property {string|null} [nickName] SS2LS_GMUpdatePlayerBaseInfo nickName
         * @property {string|null} [avatar] SS2LS_GMUpdatePlayerBaseInfo avatar
         */

        /**
         * Constructs a new SS2LS_GMUpdatePlayerBaseInfo.
         * @memberof protocol
         * @classdesc Represents a SS2LS_GMUpdatePlayerBaseInfo.
         * @implements ISS2LS_GMUpdatePlayerBaseInfo
         * @constructor
         * @param {protocol.ISS2LS_GMUpdatePlayerBaseInfo=} [p] Properties to set
         */
        function SS2LS_GMUpdatePlayerBaseInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_GMUpdatePlayerBaseInfo nickName.
         * @member {string} nickName
         * @memberof protocol.SS2LS_GMUpdatePlayerBaseInfo
         * @instance
         */
        SS2LS_GMUpdatePlayerBaseInfo.prototype.nickName = "";

        /**
         * SS2LS_GMUpdatePlayerBaseInfo avatar.
         * @member {string} avatar
         * @memberof protocol.SS2LS_GMUpdatePlayerBaseInfo
         * @instance
         */
        SS2LS_GMUpdatePlayerBaseInfo.prototype.avatar = "";

        /**
         * Encodes the specified SS2LS_GMUpdatePlayerBaseInfo message. Does not implicitly {@link protocol.SS2LS_GMUpdatePlayerBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_GMUpdatePlayerBaseInfo
         * @static
         * @param {protocol.SS2LS_GMUpdatePlayerBaseInfo} m SS2LS_GMUpdatePlayerBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_GMUpdatePlayerBaseInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
                w.uint32(10).string(m.nickName);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(18).string(m.avatar);
            return w;
        };

        /**
         * Decodes a SS2LS_GMUpdatePlayerBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_GMUpdatePlayerBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_GMUpdatePlayerBaseInfo} SS2LS_GMUpdatePlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_GMUpdatePlayerBaseInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_GMUpdatePlayerBaseInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.nickName = r.string();
                        break;
                    }
                case 2: {
                        m.avatar = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_GMUpdatePlayerBaseInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30005 OpCode value
         */
        SS2LS_GMUpdatePlayerBaseInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30005] = "OpCode"] = 30005;
            return values;
        })();

        return SS2LS_GMUpdatePlayerBaseInfo;
    })();

    protocol.LS2SS_GMUpdatePlayerBaseInfoAck = (function() {

        /**
         * Properties of a LS2SS_GMUpdatePlayerBaseInfoAck.
         * @memberof protocol
         * @interface ILS2SS_GMUpdatePlayerBaseInfoAck
         * @property {protocol.LS2SS_GMUpdatePlayerBaseInfoAck.AckCode|null} [code] LS2SS_GMUpdatePlayerBaseInfoAck code
         */

        /**
         * Constructs a new LS2SS_GMUpdatePlayerBaseInfoAck.
         * @memberof protocol
         * @classdesc Represents a LS2SS_GMUpdatePlayerBaseInfoAck.
         * @implements ILS2SS_GMUpdatePlayerBaseInfoAck
         * @constructor
         * @param {protocol.ILS2SS_GMUpdatePlayerBaseInfoAck=} [p] Properties to set
         */
        function LS2SS_GMUpdatePlayerBaseInfoAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_GMUpdatePlayerBaseInfoAck code.
         * @member {protocol.LS2SS_GMUpdatePlayerBaseInfoAck.AckCode} code
         * @memberof protocol.LS2SS_GMUpdatePlayerBaseInfoAck
         * @instance
         */
        LS2SS_GMUpdatePlayerBaseInfoAck.prototype.code = 0;

        /**
         * Encodes the specified LS2SS_GMUpdatePlayerBaseInfoAck message. Does not implicitly {@link protocol.LS2SS_GMUpdatePlayerBaseInfoAck.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_GMUpdatePlayerBaseInfoAck
         * @static
         * @param {protocol.LS2SS_GMUpdatePlayerBaseInfoAck} m LS2SS_GMUpdatePlayerBaseInfoAck message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_GMUpdatePlayerBaseInfoAck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            return w;
        };

        /**
         * Decodes a LS2SS_GMUpdatePlayerBaseInfoAck message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_GMUpdatePlayerBaseInfoAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_GMUpdatePlayerBaseInfoAck} LS2SS_GMUpdatePlayerBaseInfoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_GMUpdatePlayerBaseInfoAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_GMUpdatePlayerBaseInfoAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_GMUpdatePlayerBaseInfoAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_GMUpdatePlayerBaseInfoAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_GMUpdatePlayerBaseInfoAck;
    })();

    protocol.UseItem = (function() {

        /**
         * Properties of a UseItem.
         * @memberof protocol
         * @interface IUseItem
         * @property {string|null} [itemUId] UseItem itemUId
         * @property {number|null} [count] UseItem count
         */

        /**
         * Constructs a new UseItem.
         * @memberof protocol
         * @classdesc Represents a UseItem.
         * @implements IUseItem
         * @constructor
         * @param {protocol.IUseItem=} [p] Properties to set
         */
        function UseItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UseItem itemUId.
         * @member {string} itemUId
         * @memberof protocol.UseItem
         * @instance
         */
        UseItem.prototype.itemUId = "";

        /**
         * UseItem count.
         * @member {number} count
         * @memberof protocol.UseItem
         * @instance
         */
        UseItem.prototype.count = 0;

        /**
         * Encodes the specified UseItem message. Does not implicitly {@link protocol.UseItem.verify|verify} messages.
         * @function encode
         * @memberof protocol.UseItem
         * @static
         * @param {protocol.UseItem} m UseItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemUId != null && Object.hasOwnProperty.call(m, "itemUId"))
                w.uint32(10).string(m.itemUId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(16).int32(m.count);
            return w;
        };

        /**
         * Decodes a UseItem message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.UseItem} UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.UseItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.itemUId = r.string();
                        break;
                    }
                case 2: {
                        m.count = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.UseItem.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30006 OpCode value
         */
        UseItem.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30006] = "OpCode"] = 30006;
            return values;
        })();

        return UseItem;
    })();

    protocol.UseItemAck = (function() {

        /**
         * Properties of a UseItemAck.
         * @memberof protocol
         * @interface IUseItemAck
         * @property {Array.<common.Item>|null} [items] UseItemAck items
         */

        /**
         * Constructs a new UseItemAck.
         * @memberof protocol
         * @classdesc Represents a UseItemAck.
         * @implements IUseItemAck
         * @constructor
         * @param {protocol.IUseItemAck=} [p] Properties to set
         */
        function UseItemAck(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UseItemAck items.
         * @member {Array.<common.Item>} items
         * @memberof protocol.UseItemAck
         * @instance
         */
        UseItemAck.prototype.items = $util.emptyArray;

        /**
         * Encodes the specified UseItemAck message. Does not implicitly {@link protocol.UseItemAck.verify|verify} messages.
         * @function encode
         * @memberof protocol.UseItemAck
         * @static
         * @param {protocol.UseItemAck} m UseItemAck message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemAck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.items != null && m.items.length) {
                for (var i = 0; i < m.items.length; ++i)
                    $root.common.Item.encode(m.items[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a UseItemAck message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UseItemAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.UseItemAck} UseItemAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.UseItemAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.common.Item.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.UseItemAck.AckCode
         * @enum {number}
         * @property {number} Success=0 Success value
         * @property {number} NoDate=1 NoDate value
         */
        UseItemAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "NoDate"] = 1;
            return values;
        })();

        return UseItemAck;
    })();

    protocol.SS2LS_AddItem = (function() {

        /**
         * Properties of a SS2LS_AddItem.
         * @memberof protocol
         * @interface ISS2LS_AddItem
         * @property {string|null} [uid] SS2LS_AddItem uid
         * @property {number|null} [itemId] SS2LS_AddItem itemId
         * @property {number|null} [count] SS2LS_AddItem count
         */

        /**
         * Constructs a new SS2LS_AddItem.
         * @memberof protocol
         * @classdesc Represents a SS2LS_AddItem.
         * @implements ISS2LS_AddItem
         * @constructor
         * @param {protocol.ISS2LS_AddItem=} [p] Properties to set
         */
        function SS2LS_AddItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_AddItem uid.
         * @member {string} uid
         * @memberof protocol.SS2LS_AddItem
         * @instance
         */
        SS2LS_AddItem.prototype.uid = "";

        /**
         * SS2LS_AddItem itemId.
         * @member {number} itemId
         * @memberof protocol.SS2LS_AddItem
         * @instance
         */
        SS2LS_AddItem.prototype.itemId = 0;

        /**
         * SS2LS_AddItem count.
         * @member {number} count
         * @memberof protocol.SS2LS_AddItem
         * @instance
         */
        SS2LS_AddItem.prototype.count = 0;

        /**
         * Encodes the specified SS2LS_AddItem message. Does not implicitly {@link protocol.SS2LS_AddItem.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_AddItem
         * @static
         * @param {protocol.SS2LS_AddItem} m SS2LS_AddItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_AddItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(16).int32(m.itemId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(24).int32(m.count);
            return w;
        };

        /**
         * Decodes a SS2LS_AddItem message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_AddItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_AddItem} SS2LS_AddItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_AddItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_AddItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.itemId = r.int32();
                        break;
                    }
                case 3: {
                        m.count = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_AddItem.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30007 OpCode value
         */
        SS2LS_AddItem.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30007] = "OpCode"] = 30007;
            return values;
        })();

        return SS2LS_AddItem;
    })();

    protocol.LS2SS_AddItem_Ack = (function() {

        /**
         * Properties of a LS2SS_AddItem_Ack.
         * @memberof protocol
         * @interface ILS2SS_AddItem_Ack
         * @property {protocol.LS2SS_AddItem_Ack.AckCode|null} [code] LS2SS_AddItem_Ack code
         * @property {string|null} [message] LS2SS_AddItem_Ack message
         */

        /**
         * Constructs a new LS2SS_AddItem_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_AddItem_Ack.
         * @implements ILS2SS_AddItem_Ack
         * @constructor
         * @param {protocol.ILS2SS_AddItem_Ack=} [p] Properties to set
         */
        function LS2SS_AddItem_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_AddItem_Ack code.
         * @member {protocol.LS2SS_AddItem_Ack.AckCode} code
         * @memberof protocol.LS2SS_AddItem_Ack
         * @instance
         */
        LS2SS_AddItem_Ack.prototype.code = 0;

        /**
         * LS2SS_AddItem_Ack message.
         * @member {string} message
         * @memberof protocol.LS2SS_AddItem_Ack
         * @instance
         */
        LS2SS_AddItem_Ack.prototype.message = "";

        /**
         * Encodes the specified LS2SS_AddItem_Ack message. Does not implicitly {@link protocol.LS2SS_AddItem_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_AddItem_Ack
         * @static
         * @param {protocol.LS2SS_AddItem_Ack} m LS2SS_AddItem_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_AddItem_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(18).string(m.message);
            return w;
        };

        /**
         * Decodes a LS2SS_AddItem_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_AddItem_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_AddItem_Ack} LS2SS_AddItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_AddItem_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_AddItem_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.message = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_AddItem_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_AddItem_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_AddItem_Ack;
    })();

    protocol.SS2LS_AddAllSkins = (function() {

        /**
         * Properties of a SS2LS_AddAllSkins.
         * @memberof protocol
         * @interface ISS2LS_AddAllSkins
         * @property {string|null} [uid] SS2LS_AddAllSkins uid
         * @property {number|null} [dressId] SS2LS_AddAllSkins dressId
         */

        /**
         * Constructs a new SS2LS_AddAllSkins.
         * @memberof protocol
         * @classdesc Represents a SS2LS_AddAllSkins.
         * @implements ISS2LS_AddAllSkins
         * @constructor
         * @param {protocol.ISS2LS_AddAllSkins=} [p] Properties to set
         */
        function SS2LS_AddAllSkins(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_AddAllSkins uid.
         * @member {string} uid
         * @memberof protocol.SS2LS_AddAllSkins
         * @instance
         */
        SS2LS_AddAllSkins.prototype.uid = "";

        /**
         * SS2LS_AddAllSkins dressId.
         * @member {number} dressId
         * @memberof protocol.SS2LS_AddAllSkins
         * @instance
         */
        SS2LS_AddAllSkins.prototype.dressId = 0;

        /**
         * Encodes the specified SS2LS_AddAllSkins message. Does not implicitly {@link protocol.SS2LS_AddAllSkins.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_AddAllSkins
         * @static
         * @param {protocol.SS2LS_AddAllSkins} m SS2LS_AddAllSkins message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_AddAllSkins.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.dressId != null && Object.hasOwnProperty.call(m, "dressId"))
                w.uint32(16).int32(m.dressId);
            return w;
        };

        /**
         * Decodes a SS2LS_AddAllSkins message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_AddAllSkins
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_AddAllSkins} SS2LS_AddAllSkins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_AddAllSkins.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_AddAllSkins();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.dressId = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_AddAllSkins.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30008 OpCode value
         */
        SS2LS_AddAllSkins.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30008] = "OpCode"] = 30008;
            return values;
        })();

        return SS2LS_AddAllSkins;
    })();

    protocol.LS2SS_AddAllSkins_Ack = (function() {

        /**
         * Properties of a LS2SS_AddAllSkins_Ack.
         * @memberof protocol
         * @interface ILS2SS_AddAllSkins_Ack
         * @property {protocol.LS2SS_AddAllSkins_Ack.AckCode|null} [code] LS2SS_AddAllSkins_Ack code
         * @property {string|null} [message] LS2SS_AddAllSkins_Ack message
         */

        /**
         * Constructs a new LS2SS_AddAllSkins_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_AddAllSkins_Ack.
         * @implements ILS2SS_AddAllSkins_Ack
         * @constructor
         * @param {protocol.ILS2SS_AddAllSkins_Ack=} [p] Properties to set
         */
        function LS2SS_AddAllSkins_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_AddAllSkins_Ack code.
         * @member {protocol.LS2SS_AddAllSkins_Ack.AckCode} code
         * @memberof protocol.LS2SS_AddAllSkins_Ack
         * @instance
         */
        LS2SS_AddAllSkins_Ack.prototype.code = 0;

        /**
         * LS2SS_AddAllSkins_Ack message.
         * @member {string} message
         * @memberof protocol.LS2SS_AddAllSkins_Ack
         * @instance
         */
        LS2SS_AddAllSkins_Ack.prototype.message = "";

        /**
         * Encodes the specified LS2SS_AddAllSkins_Ack message. Does not implicitly {@link protocol.LS2SS_AddAllSkins_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_AddAllSkins_Ack
         * @static
         * @param {protocol.LS2SS_AddAllSkins_Ack} m LS2SS_AddAllSkins_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_AddAllSkins_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(18).string(m.message);
            return w;
        };

        /**
         * Decodes a LS2SS_AddAllSkins_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_AddAllSkins_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_AddAllSkins_Ack} LS2SS_AddAllSkins_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_AddAllSkins_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_AddAllSkins_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.message = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_AddAllSkins_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_AddAllSkins_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_AddAllSkins_Ack;
    })();

    protocol.SS2LS_SetInfiniteModeScore = (function() {

        /**
         * Properties of a SS2LS_SetInfiniteModeScore.
         * @memberof protocol
         * @interface ISS2LS_SetInfiniteModeScore
         * @property {string|null} [uid] SS2LS_SetInfiniteModeScore uid
         * @property {number|null} [score] SS2LS_SetInfiniteModeScore score
         */

        /**
         * Constructs a new SS2LS_SetInfiniteModeScore.
         * @memberof protocol
         * @classdesc Represents a SS2LS_SetInfiniteModeScore.
         * @implements ISS2LS_SetInfiniteModeScore
         * @constructor
         * @param {protocol.ISS2LS_SetInfiniteModeScore=} [p] Properties to set
         */
        function SS2LS_SetInfiniteModeScore(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_SetInfiniteModeScore uid.
         * @member {string} uid
         * @memberof protocol.SS2LS_SetInfiniteModeScore
         * @instance
         */
        SS2LS_SetInfiniteModeScore.prototype.uid = "";

        /**
         * SS2LS_SetInfiniteModeScore score.
         * @member {number} score
         * @memberof protocol.SS2LS_SetInfiniteModeScore
         * @instance
         */
        SS2LS_SetInfiniteModeScore.prototype.score = 0;

        /**
         * Encodes the specified SS2LS_SetInfiniteModeScore message. Does not implicitly {@link protocol.SS2LS_SetInfiniteModeScore.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_SetInfiniteModeScore
         * @static
         * @param {protocol.SS2LS_SetInfiniteModeScore} m SS2LS_SetInfiniteModeScore message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_SetInfiniteModeScore.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(16).int32(m.score);
            return w;
        };

        /**
         * Decodes a SS2LS_SetInfiniteModeScore message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_SetInfiniteModeScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_SetInfiniteModeScore} SS2LS_SetInfiniteModeScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_SetInfiniteModeScore.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_SetInfiniteModeScore();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.score = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_SetInfiniteModeScore.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30009 OpCode value
         */
        SS2LS_SetInfiniteModeScore.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30009] = "OpCode"] = 30009;
            return values;
        })();

        return SS2LS_SetInfiniteModeScore;
    })();

    protocol.LS2SS_SetInfiniteModeScore_Ack = (function() {

        /**
         * Properties of a LS2SS_SetInfiniteModeScore_Ack.
         * @memberof protocol
         * @interface ILS2SS_SetInfiniteModeScore_Ack
         * @property {protocol.LS2SS_SetInfiniteModeScore_Ack.AckCode|null} [code] LS2SS_SetInfiniteModeScore_Ack code
         * @property {string|null} [message] LS2SS_SetInfiniteModeScore_Ack message
         */

        /**
         * Constructs a new LS2SS_SetInfiniteModeScore_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_SetInfiniteModeScore_Ack.
         * @implements ILS2SS_SetInfiniteModeScore_Ack
         * @constructor
         * @param {protocol.ILS2SS_SetInfiniteModeScore_Ack=} [p] Properties to set
         */
        function LS2SS_SetInfiniteModeScore_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_SetInfiniteModeScore_Ack code.
         * @member {protocol.LS2SS_SetInfiniteModeScore_Ack.AckCode} code
         * @memberof protocol.LS2SS_SetInfiniteModeScore_Ack
         * @instance
         */
        LS2SS_SetInfiniteModeScore_Ack.prototype.code = 0;

        /**
         * LS2SS_SetInfiniteModeScore_Ack message.
         * @member {string} message
         * @memberof protocol.LS2SS_SetInfiniteModeScore_Ack
         * @instance
         */
        LS2SS_SetInfiniteModeScore_Ack.prototype.message = "";

        /**
         * Encodes the specified LS2SS_SetInfiniteModeScore_Ack message. Does not implicitly {@link protocol.LS2SS_SetInfiniteModeScore_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_SetInfiniteModeScore_Ack
         * @static
         * @param {protocol.LS2SS_SetInfiniteModeScore_Ack} m LS2SS_SetInfiniteModeScore_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_SetInfiniteModeScore_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            if (m.message != null && Object.hasOwnProperty.call(m, "message"))
                w.uint32(18).string(m.message);
            return w;
        };

        /**
         * Decodes a LS2SS_SetInfiniteModeScore_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_SetInfiniteModeScore_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_SetInfiniteModeScore_Ack} LS2SS_SetInfiniteModeScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_SetInfiniteModeScore_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_SetInfiniteModeScore_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.message = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_SetInfiniteModeScore_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_SetInfiniteModeScore_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_SetInfiniteModeScore_Ack;
    })();

    protocol.SS2LS_GmGetRaceRoom = (function() {

        /**
         * Properties of a SS2LS_GmGetRaceRoom.
         * @memberof protocol
         * @interface ISS2LS_GmGetRaceRoom
         * @property {string|null} [roomId] SS2LS_GmGetRaceRoom roomId
         */

        /**
         * Constructs a new SS2LS_GmGetRaceRoom.
         * @memberof protocol
         * @classdesc Represents a SS2LS_GmGetRaceRoom.
         * @implements ISS2LS_GmGetRaceRoom
         * @constructor
         * @param {protocol.ISS2LS_GmGetRaceRoom=} [p] Properties to set
         */
        function SS2LS_GmGetRaceRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_GmGetRaceRoom roomId.
         * @member {string} roomId
         * @memberof protocol.SS2LS_GmGetRaceRoom
         * @instance
         */
        SS2LS_GmGetRaceRoom.prototype.roomId = "";

        /**
         * Encodes the specified SS2LS_GmGetRaceRoom message. Does not implicitly {@link protocol.SS2LS_GmGetRaceRoom.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_GmGetRaceRoom
         * @static
         * @param {protocol.SS2LS_GmGetRaceRoom} m SS2LS_GmGetRaceRoom message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_GmGetRaceRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            return w;
        };

        /**
         * Decodes a SS2LS_GmGetRaceRoom message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_GmGetRaceRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_GmGetRaceRoom} SS2LS_GmGetRaceRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_GmGetRaceRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_GmGetRaceRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.roomId = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_GmGetRaceRoom.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30010 OpCode value
         */
        SS2LS_GmGetRaceRoom.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30010] = "OpCode"] = 30010;
            return values;
        })();

        return SS2LS_GmGetRaceRoom;
    })();

    protocol.LS2SS_GmGetRaceRoom_Ack = (function() {

        /**
         * Properties of a LS2SS_GmGetRaceRoom_Ack.
         * @memberof protocol
         * @interface ILS2SS_GmGetRaceRoom_Ack
         * @property {protocol.LS2SS_GmGetRaceRoom_Ack.AckCode|null} [ackCode] LS2SS_GmGetRaceRoom_Ack ackCode
         * @property {string|null} [roomId] LS2SS_GmGetRaceRoom_Ack roomId
         * @property {boolean|null} [isSettle] LS2SS_GmGetRaceRoom_Ack isSettle
         * @property {number|null} [bonusPool] LS2SS_GmGetRaceRoom_Ack bonusPool
         * @property {Array.<common.MatchRoomPlayerInfo>|null} [players] LS2SS_GmGetRaceRoom_Ack players
         */

        /**
         * Constructs a new LS2SS_GmGetRaceRoom_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_GmGetRaceRoom_Ack.
         * @implements ILS2SS_GmGetRaceRoom_Ack
         * @constructor
         * @param {protocol.ILS2SS_GmGetRaceRoom_Ack=} [p] Properties to set
         */
        function LS2SS_GmGetRaceRoom_Ack(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_GmGetRaceRoom_Ack ackCode.
         * @member {protocol.LS2SS_GmGetRaceRoom_Ack.AckCode} ackCode
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @instance
         */
        LS2SS_GmGetRaceRoom_Ack.prototype.ackCode = 0;

        /**
         * LS2SS_GmGetRaceRoom_Ack roomId.
         * @member {string} roomId
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @instance
         */
        LS2SS_GmGetRaceRoom_Ack.prototype.roomId = "";

        /**
         * LS2SS_GmGetRaceRoom_Ack isSettle.
         * @member {boolean} isSettle
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @instance
         */
        LS2SS_GmGetRaceRoom_Ack.prototype.isSettle = false;

        /**
         * LS2SS_GmGetRaceRoom_Ack bonusPool.
         * @member {number} bonusPool
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @instance
         */
        LS2SS_GmGetRaceRoom_Ack.prototype.bonusPool = 0;

        /**
         * LS2SS_GmGetRaceRoom_Ack players.
         * @member {Array.<common.MatchRoomPlayerInfo>} players
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @instance
         */
        LS2SS_GmGetRaceRoom_Ack.prototype.players = $util.emptyArray;

        /**
         * Encodes the specified LS2SS_GmGetRaceRoom_Ack message. Does not implicitly {@link protocol.LS2SS_GmGetRaceRoom_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @static
         * @param {protocol.LS2SS_GmGetRaceRoom_Ack} m LS2SS_GmGetRaceRoom_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_GmGetRaceRoom_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(18).string(m.roomId);
            if (m.isSettle != null && Object.hasOwnProperty.call(m, "isSettle"))
                w.uint32(24).bool(m.isSettle);
            if (m.bonusPool != null && Object.hasOwnProperty.call(m, "bonusPool"))
                w.uint32(32).int32(m.bonusPool);
            if (m.players != null && m.players.length) {
                for (var i = 0; i < m.players.length; ++i)
                    $root.common.MatchRoomPlayerInfo.encode(m.players[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a LS2SS_GmGetRaceRoom_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_GmGetRaceRoom_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_GmGetRaceRoom_Ack} LS2SS_GmGetRaceRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_GmGetRaceRoom_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_GmGetRaceRoom_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.roomId = r.string();
                        break;
                    }
                case 3: {
                        m.isSettle = r.bool();
                        break;
                    }
                case 4: {
                        m.bonusPool = r.int32();
                        break;
                    }
                case 5: {
                        if (!(m.players && m.players.length))
                            m.players = [];
                        m.players.push($root.common.MatchRoomPlayerInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_GmGetRaceRoom_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         * @property {number} NotInRoom=3 NotInRoom value
         */
        LS2SS_GmGetRaceRoom_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            values[valuesById[3] = "NotInRoom"] = 3;
            return values;
        })();

        return LS2SS_GmGetRaceRoom_Ack;
    })();

    protocol.SS2LS_HandleBanPlayer = (function() {

        /**
         * Properties of a SS2LS_HandleBanPlayer.
         * @memberof protocol
         * @interface ISS2LS_HandleBanPlayer
         */

        /**
         * Constructs a new SS2LS_HandleBanPlayer.
         * @memberof protocol
         * @classdesc Represents a SS2LS_HandleBanPlayer.
         * @implements ISS2LS_HandleBanPlayer
         * @constructor
         * @param {protocol.ISS2LS_HandleBanPlayer=} [p] Properties to set
         */
        function SS2LS_HandleBanPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified SS2LS_HandleBanPlayer message. Does not implicitly {@link protocol.SS2LS_HandleBanPlayer.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_HandleBanPlayer
         * @static
         * @param {protocol.SS2LS_HandleBanPlayer} m SS2LS_HandleBanPlayer message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_HandleBanPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * Decodes a SS2LS_HandleBanPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_HandleBanPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_HandleBanPlayer} SS2LS_HandleBanPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_HandleBanPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_HandleBanPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_HandleBanPlayer.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30011 OpCode value
         */
        SS2LS_HandleBanPlayer.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30011] = "OpCode"] = 30011;
            return values;
        })();

        return SS2LS_HandleBanPlayer;
    })();

    protocol.LS2SS_HandleBanPlayer_Ack = (function() {

        /**
         * Properties of a LS2SS_HandleBanPlayer_Ack.
         * @memberof protocol
         * @interface ILS2SS_HandleBanPlayer_Ack
         * @property {protocol.LS2SS_HandleBanPlayer_Ack.AckCode|null} [ackCode] LS2SS_HandleBanPlayer_Ack ackCode
         */

        /**
         * Constructs a new LS2SS_HandleBanPlayer_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_HandleBanPlayer_Ack.
         * @implements ILS2SS_HandleBanPlayer_Ack
         * @constructor
         * @param {protocol.ILS2SS_HandleBanPlayer_Ack=} [p] Properties to set
         */
        function LS2SS_HandleBanPlayer_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_HandleBanPlayer_Ack ackCode.
         * @member {protocol.LS2SS_HandleBanPlayer_Ack.AckCode} ackCode
         * @memberof protocol.LS2SS_HandleBanPlayer_Ack
         * @instance
         */
        LS2SS_HandleBanPlayer_Ack.prototype.ackCode = 0;

        /**
         * Encodes the specified LS2SS_HandleBanPlayer_Ack message. Does not implicitly {@link protocol.LS2SS_HandleBanPlayer_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_HandleBanPlayer_Ack
         * @static
         * @param {protocol.LS2SS_HandleBanPlayer_Ack} m LS2SS_HandleBanPlayer_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_HandleBanPlayer_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ackCode != null && Object.hasOwnProperty.call(m, "ackCode"))
                w.uint32(8).int32(m.ackCode);
            return w;
        };

        /**
         * Decodes a LS2SS_HandleBanPlayer_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_HandleBanPlayer_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_HandleBanPlayer_Ack} LS2SS_HandleBanPlayer_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_HandleBanPlayer_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_HandleBanPlayer_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_HandleBanPlayer_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         */
        LS2SS_HandleBanPlayer_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            return values;
        })();

        return LS2SS_HandleBanPlayer_Ack;
    })();

    protocol.SS2LS_SetUserTag = (function() {

        /**
         * Properties of a SS2LS_SetUserTag.
         * @memberof protocol
         * @interface ISS2LS_SetUserTag
         * @property {string|null} [uid] SS2LS_SetUserTag uid
         * @property {number|null} [tagId] SS2LS_SetUserTag tagId
         * @property {number|null} [tagValue] SS2LS_SetUserTag tagValue
         */

        /**
         * Constructs a new SS2LS_SetUserTag.
         * @memberof protocol
         * @classdesc Represents a SS2LS_SetUserTag.
         * @implements ISS2LS_SetUserTag
         * @constructor
         * @param {protocol.ISS2LS_SetUserTag=} [p] Properties to set
         */
        function SS2LS_SetUserTag(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SS2LS_SetUserTag uid.
         * @member {string} uid
         * @memberof protocol.SS2LS_SetUserTag
         * @instance
         */
        SS2LS_SetUserTag.prototype.uid = "";

        /**
         * SS2LS_SetUserTag tagId.
         * @member {number} tagId
         * @memberof protocol.SS2LS_SetUserTag
         * @instance
         */
        SS2LS_SetUserTag.prototype.tagId = 0;

        /**
         * SS2LS_SetUserTag tagValue.
         * @member {number} tagValue
         * @memberof protocol.SS2LS_SetUserTag
         * @instance
         */
        SS2LS_SetUserTag.prototype.tagValue = 0;

        /**
         * Encodes the specified SS2LS_SetUserTag message. Does not implicitly {@link protocol.SS2LS_SetUserTag.verify|verify} messages.
         * @function encode
         * @memberof protocol.SS2LS_SetUserTag
         * @static
         * @param {protocol.SS2LS_SetUserTag} m SS2LS_SetUserTag message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SS2LS_SetUserTag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.tagId != null && Object.hasOwnProperty.call(m, "tagId"))
                w.uint32(16).int32(m.tagId);
            if (m.tagValue != null && Object.hasOwnProperty.call(m, "tagValue"))
                w.uint32(24).int32(m.tagValue);
            return w;
        };

        /**
         * Decodes a SS2LS_SetUserTag message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SS2LS_SetUserTag
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.SS2LS_SetUserTag} SS2LS_SetUserTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SS2LS_SetUserTag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.SS2LS_SetUserTag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.tagId = r.int32();
                        break;
                    }
                case 3: {
                        m.tagValue = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * N enum.
         * @name protocol.SS2LS_SetUserTag.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=30012 OpCode value
         */
        SS2LS_SetUserTag.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[30012] = "OpCode"] = 30012;
            return values;
        })();

        return SS2LS_SetUserTag;
    })();

    protocol.LS2SS_SetUserTag_Ack = (function() {

        /**
         * Properties of a LS2SS_SetUserTag_Ack.
         * @memberof protocol
         * @interface ILS2SS_SetUserTag_Ack
         * @property {protocol.LS2SS_SetUserTag_Ack.AckCode|null} [code] LS2SS_SetUserTag_Ack code
         */

        /**
         * Constructs a new LS2SS_SetUserTag_Ack.
         * @memberof protocol
         * @classdesc Represents a LS2SS_SetUserTag_Ack.
         * @implements ILS2SS_SetUserTag_Ack
         * @constructor
         * @param {protocol.ILS2SS_SetUserTag_Ack=} [p] Properties to set
         */
        function LS2SS_SetUserTag_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2SS_SetUserTag_Ack code.
         * @member {protocol.LS2SS_SetUserTag_Ack.AckCode} code
         * @memberof protocol.LS2SS_SetUserTag_Ack
         * @instance
         */
        LS2SS_SetUserTag_Ack.prototype.code = 0;

        /**
         * Encodes the specified LS2SS_SetUserTag_Ack message. Does not implicitly {@link protocol.LS2SS_SetUserTag_Ack.verify|verify} messages.
         * @function encode
         * @memberof protocol.LS2SS_SetUserTag_Ack
         * @static
         * @param {protocol.LS2SS_SetUserTag_Ack} m LS2SS_SetUserTag_Ack message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LS2SS_SetUserTag_Ack.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).int32(m.code);
            return w;
        };

        /**
         * Decodes a LS2SS_SetUserTag_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LS2SS_SetUserTag_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.LS2SS_SetUserTag_Ack} LS2SS_SetUserTag_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2SS_SetUserTag_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.LS2SS_SetUserTag_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name protocol.LS2SS_SetUserTag_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2SS_SetUserTag_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2SS_SetUserTag_Ack;
    })();

    /**
     * EActivityStatus enum.
     * @name protocol.EActivityStatus
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} Pre=1 Pre value
     * @property {number} Effective=2 Effective value
     * @property {number} Settle=3 Settle value
     */
    protocol.EActivityStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "Pre"] = 1;
        values[valuesById[2] = "Effective"] = 2;
        values[valuesById[3] = "Settle"] = 3;
        return values;
    })();

    /**
     * ECrushModeItemType enum.
     * @name protocol.ECrushModeItemType
     * @enum {number}
     * @property {number} Invalid=0 Invalid value
     * @property {number} RemoveBlock=-1 RemoveBlock value
     * @property {number} CancelBlock=-2 CancelBlock value
     * @property {number} RandomBlocks=-3 RandomBlocks value
     * @property {number} Relive=-4 Relive value
     * @property {number} Alien=-5 Alien value
     */
    protocol.ECrushModeItemType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Invalid"] = 0;
        values[valuesById[-1] = "RemoveBlock"] = -1;
        values[valuesById[-2] = "CancelBlock"] = -2;
        values[valuesById[-3] = "RandomBlocks"] = -3;
        values[valuesById[-4] = "Relive"] = -4;
        values[valuesById[-5] = "Alien"] = -5;
        return values;
    })();

    /**
     * EAccountPlatform enum.
     * @name protocol.EAccountPlatform
     * @enum {number}
     * @property {number} PlatformInvalid=0 PlatformInvalid value
     * @property {number} PlatformWx=1 PlatformWx value
     * @property {number} PlatformQQ=2 PlatformQQ value
     * @property {number} PlatformTT=3 PlatformTT value
     * @property {number} PlatformVIVO=4 PlatformVIVO value
     * @property {number} PlatformOPPO=5 PlatformOPPO value
     * @property {number} PlatformKS=6 PlatformKS value
     * @property {number} PlatformLt=7 PlatformLt value
     * @property {number} PlatformTTFree=8 PlatformTTFree value
     * @property {number} PlatformHW=9 PlatformHW value
     * @property {number} PlatformAli=10 PlatformAli value
     * @property {number} PlatformXhs=11 PlatformXhs value
     * @property {number} PlatformBeta=999 PlatformBeta value
     */
    protocol.EAccountPlatform = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PlatformInvalid"] = 0;
        values[valuesById[1] = "PlatformWx"] = 1;
        values[valuesById[2] = "PlatformQQ"] = 2;
        values[valuesById[3] = "PlatformTT"] = 3;
        values[valuesById[4] = "PlatformVIVO"] = 4;
        values[valuesById[5] = "PlatformOPPO"] = 5;
        values[valuesById[6] = "PlatformKS"] = 6;
        values[valuesById[7] = "PlatformLt"] = 7;
        values[valuesById[8] = "PlatformTTFree"] = 8;
        values[valuesById[9] = "PlatformHW"] = 9;
        values[valuesById[10] = "PlatformAli"] = 10;
        values[valuesById[11] = "PlatformXhs"] = 11;
        values[valuesById[999] = "PlatformBeta"] = 999;
        return values;
    })();

    /**
     * EHttpErrorCode enum.
     * @name protocol.EHttpErrorCode
     * @enum {number}
     * @property {number} Nil=0 Nil value
     * @property {number} ParamsInvalid=10001 ParamsInvalid value
     * @property {number} SystemErr=10002 SystemErr value
     * @property {number} Unauthorized=10003 Unauthorized value
     * @property {number} DatabaseErr=10004 DatabaseErr value
     * @property {number} UserNotLogin=10005 UserNotLogin value
     * @property {number} UserSignErr=10006 UserSignErr value
     * @property {number} UserNotExistErr=10007 UserNotExistErr value
     * @property {number} UserAlreadyExistErr=10008 UserAlreadyExistErr value
     * @property {number} JsonUnmarshalErr=10009 JsonUnmarshalErr value
     * @property {number} DecryptErr=10010 DecryptErr value
     * @property {number} SocketNotExistErr=10011 SocketNotExistErr value
     * @property {number} AdVideoOutOfMaxTimesErr=10012 AdVideoOutOfMaxTimesErr value
     * @property {number} SystemUnlockErr=10013 SystemUnlockErr value
     * @property {number} ConfigErr=10014 ConfigErr value
     * @property {number} ContentSecErr=10015 ContentSecErr value
     * @property {number} ServerNotServeErr=10016 ServerNotServeErr value
     * @property {number} NoData=10017 NoData value
     * @property {number} LoginVersionErr=10018 LoginVersionErr value
     * @property {number} NoMatchPlayInfo=10019 NoMatchPlayInfo value
     * @property {number} JWTTokenErr=10020 JWTTokenErr value
     * @property {number} JWTTokenOutOfDateErr=10021 JWTTokenOutOfDateErr value
     * @property {number} JWTTokenUIDDecodeErr=10022 JWTTokenUIDDecodeErr value
     * @property {number} JWTTokenModifiedErr=10023 JWTTokenModifiedErr value
     * @property {number} TooManyReqErr=10024 TooManyReqErr value
     * @property {number} SameAsCacheErr=10025 SameAsCacheErr value
     * @property {number} InternalErr=10026 InternalErr value
     * @property {number} PlatformNotRightErr=10027 PlatformNotRightErr value
     * @property {number} AccountErr=10028 AccountErr value
     * @property {number} ClientVersionLowErr=10029 ClientVersionLowErr value
     * @property {number} WxSessionKeyInvalid=10030 WxSessionKeyInvalid value
     * @property {number} WxSessionKeyNotFind=10031 WxSessionKeyNotFind value
     * @property {number} RespDataErr=10032 RespDataErr value
     * @property {number} PlatformNotExistErr=10033 PlatformNotExistErr value
     */
    protocol.EHttpErrorCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Nil"] = 0;
        values[valuesById[10001] = "ParamsInvalid"] = 10001;
        values[valuesById[10002] = "SystemErr"] = 10002;
        values[valuesById[10003] = "Unauthorized"] = 10003;
        values[valuesById[10004] = "DatabaseErr"] = 10004;
        values[valuesById[10005] = "UserNotLogin"] = 10005;
        values[valuesById[10006] = "UserSignErr"] = 10006;
        values[valuesById[10007] = "UserNotExistErr"] = 10007;
        values[valuesById[10008] = "UserAlreadyExistErr"] = 10008;
        values[valuesById[10009] = "JsonUnmarshalErr"] = 10009;
        values[valuesById[10010] = "DecryptErr"] = 10010;
        values[valuesById[10011] = "SocketNotExistErr"] = 10011;
        values[valuesById[10012] = "AdVideoOutOfMaxTimesErr"] = 10012;
        values[valuesById[10013] = "SystemUnlockErr"] = 10013;
        values[valuesById[10014] = "ConfigErr"] = 10014;
        values[valuesById[10015] = "ContentSecErr"] = 10015;
        values[valuesById[10016] = "ServerNotServeErr"] = 10016;
        values[valuesById[10017] = "NoData"] = 10017;
        values[valuesById[10018] = "LoginVersionErr"] = 10018;
        values[valuesById[10019] = "NoMatchPlayInfo"] = 10019;
        values[valuesById[10020] = "JWTTokenErr"] = 10020;
        values[valuesById[10021] = "JWTTokenOutOfDateErr"] = 10021;
        values[valuesById[10022] = "JWTTokenUIDDecodeErr"] = 10022;
        values[valuesById[10023] = "JWTTokenModifiedErr"] = 10023;
        values[valuesById[10024] = "TooManyReqErr"] = 10024;
        values[valuesById[10025] = "SameAsCacheErr"] = 10025;
        values[valuesById[10026] = "InternalErr"] = 10026;
        values[valuesById[10027] = "PlatformNotRightErr"] = 10027;
        values[valuesById[10028] = "AccountErr"] = 10028;
        values[valuesById[10029] = "ClientVersionLowErr"] = 10029;
        values[valuesById[10030] = "WxSessionKeyInvalid"] = 10030;
        values[valuesById[10031] = "WxSessionKeyNotFind"] = 10031;
        values[valuesById[10032] = "RespDataErr"] = 10032;
        values[valuesById[10033] = "PlatformNotExistErr"] = 10033;
        return values;
    })();

    /**
     * EDesignerType enum.
     * @name protocol.EDesignerType
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Official=1 Official value
     * @property {number} Player=2 Player value
     */
    protocol.EDesignerType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[1] = "Official"] = 1;
        values[valuesById[2] = "Player"] = 2;
        return values;
    })();

    protocol.AwardInfo = (function() {

        /**
         * Properties of an AwardInfo.
         * @memberof protocol
         * @interface IAwardInfo
         * @property {number|null} [awardId] AwardInfo awardId
         * @property {number|null} [awardType] AwardInfo awardType
         * @property {number|null} [awardCnt] AwardInfo awardCnt
         * @property {string|null} [reason] AwardInfo reason
         */

        /**
         * Constructs a new AwardInfo.
         * @memberof protocol
         * @classdesc Represents an AwardInfo.
         * @implements IAwardInfo
         * @constructor
         * @param {protocol.IAwardInfo=} [p] Properties to set
         */
        function AwardInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * AwardInfo awardId.
         * @member {number} awardId
         * @memberof protocol.AwardInfo
         * @instance
         */
        AwardInfo.prototype.awardId = 0;

        /**
         * AwardInfo awardType.
         * @member {number} awardType
         * @memberof protocol.AwardInfo
         * @instance
         */
        AwardInfo.prototype.awardType = 0;

        /**
         * AwardInfo awardCnt.
         * @member {number} awardCnt
         * @memberof protocol.AwardInfo
         * @instance
         */
        AwardInfo.prototype.awardCnt = 0;

        /**
         * AwardInfo reason.
         * @member {string} reason
         * @memberof protocol.AwardInfo
         * @instance
         */
        AwardInfo.prototype.reason = "";

        /**
         * Encodes the specified AwardInfo message. Does not implicitly {@link protocol.AwardInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.AwardInfo
         * @static
         * @param {protocol.AwardInfo} m AwardInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AwardInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.awardId != null && Object.hasOwnProperty.call(m, "awardId"))
                w.uint32(8).int32(m.awardId);
            if (m.awardType != null && Object.hasOwnProperty.call(m, "awardType"))
                w.uint32(16).int32(m.awardType);
            if (m.awardCnt != null && Object.hasOwnProperty.call(m, "awardCnt"))
                w.uint32(24).int32(m.awardCnt);
            if (m.reason != null && Object.hasOwnProperty.call(m, "reason"))
                w.uint32(34).string(m.reason);
            return w;
        };

        /**
         * Decodes an AwardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AwardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.AwardInfo} AwardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AwardInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.AwardInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.awardId = r.int32();
                        break;
                    }
                case 2: {
                        m.awardType = r.int32();
                        break;
                    }
                case 3: {
                        m.awardCnt = r.int32();
                        break;
                    }
                case 4: {
                        m.reason = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AwardInfo;
    })();

    protocol.BlockData = (function() {

        /**
         * Properties of a BlockData.
         * @memberof protocol
         * @interface IBlockData
         * @property {Long|null} [blockId] BlockData blockId
         * @property {Long|null} [createTime] BlockData createTime
         */

        /**
         * Constructs a new BlockData.
         * @memberof protocol
         * @classdesc Represents a BlockData.
         * @implements IBlockData
         * @constructor
         * @param {protocol.IBlockData=} [p] Properties to set
         */
        function BlockData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BlockData blockId.
         * @member {Long} blockId
         * @memberof protocol.BlockData
         * @instance
         */
        BlockData.prototype.blockId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BlockData createTime.
         * @member {Long} createTime
         * @memberof protocol.BlockData
         * @instance
         */
        BlockData.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified BlockData message. Does not implicitly {@link protocol.BlockData.verify|verify} messages.
         * @function encode
         * @memberof protocol.BlockData
         * @static
         * @param {protocol.BlockData} m BlockData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.blockId != null && Object.hasOwnProperty.call(m, "blockId"))
                w.uint32(8).int64(m.blockId);
            if (m.createTime != null && Object.hasOwnProperty.call(m, "createTime"))
                w.uint32(16).int64(m.createTime);
            return w;
        };

        /**
         * Decodes a BlockData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.BlockData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.BlockData} BlockData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.BlockData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.blockId = r.int64();
                        break;
                    }
                case 2: {
                        m.createTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BlockData;
    })();

    protocol.GameTag = (function() {

        /**
         * Properties of a GameTag.
         * @memberof protocol
         * @interface IGameTag
         * @property {string|null} [name] GameTag name
         * @property {Long|null} [count] GameTag count
         * @property {string|null} [id] GameTag id
         */

        /**
         * Constructs a new GameTag.
         * @memberof protocol
         * @classdesc Represents a GameTag.
         * @implements IGameTag
         * @constructor
         * @param {protocol.IGameTag=} [p] Properties to set
         */
        function GameTag(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameTag name.
         * @member {string} name
         * @memberof protocol.GameTag
         * @instance
         */
        GameTag.prototype.name = "";

        /**
         * GameTag count.
         * @member {Long} count
         * @memberof protocol.GameTag
         * @instance
         */
        GameTag.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameTag id.
         * @member {string} id
         * @memberof protocol.GameTag
         * @instance
         */
        GameTag.prototype.id = "";

        /**
         * Encodes the specified GameTag message. Does not implicitly {@link protocol.GameTag.verify|verify} messages.
         * @function encode
         * @memberof protocol.GameTag
         * @static
         * @param {protocol.GameTag} m GameTag message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(10).string(m.name);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(16).int64(m.count);
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(26).string(m.id);
            return w;
        };

        /**
         * Decodes a GameTag message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GameTag
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.GameTag} GameTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.GameTag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.name = r.string();
                        break;
                    }
                case 2: {
                        m.count = r.int64();
                        break;
                    }
                case 3: {
                        m.id = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameTag;
    })();

    protocol.GameTagInfo = (function() {

        /**
         * Properties of a GameTagInfo.
         * @memberof protocol
         * @interface IGameTagInfo
         * @property {Array.<protocol.GameTag>|null} [list] GameTagInfo list
         * @property {number|null} [ver] GameTagInfo ver
         * @property {number|null} [pageNo] GameTagInfo pageNo
         * @property {number|null} [pageSize] GameTagInfo pageSize
         * @property {Long|null} [ex] GameTagInfo ex
         */

        /**
         * Constructs a new GameTagInfo.
         * @memberof protocol
         * @classdesc Represents a GameTagInfo.
         * @implements IGameTagInfo
         * @constructor
         * @param {protocol.IGameTagInfo=} [p] Properties to set
         */
        function GameTagInfo(p) {
            this.list = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameTagInfo list.
         * @member {Array.<protocol.GameTag>} list
         * @memberof protocol.GameTagInfo
         * @instance
         */
        GameTagInfo.prototype.list = $util.emptyArray;

        /**
         * GameTagInfo ver.
         * @member {number} ver
         * @memberof protocol.GameTagInfo
         * @instance
         */
        GameTagInfo.prototype.ver = 0;

        /**
         * GameTagInfo pageNo.
         * @member {number} pageNo
         * @memberof protocol.GameTagInfo
         * @instance
         */
        GameTagInfo.prototype.pageNo = 0;

        /**
         * GameTagInfo pageSize.
         * @member {number} pageSize
         * @memberof protocol.GameTagInfo
         * @instance
         */
        GameTagInfo.prototype.pageSize = 0;

        /**
         * GameTagInfo ex.
         * @member {Long} ex
         * @memberof protocol.GameTagInfo
         * @instance
         */
        GameTagInfo.prototype.ex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified GameTagInfo message. Does not implicitly {@link protocol.GameTagInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.GameTagInfo
         * @static
         * @param {protocol.GameTagInfo} m GameTagInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameTagInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.list != null && m.list.length) {
                for (var i = 0; i < m.list.length; ++i)
                    $root.protocol.GameTag.encode(m.list[i], w.uint32(10).fork()).ldelim();
            }
            if (m.ver != null && Object.hasOwnProperty.call(m, "ver"))
                w.uint32(16).int32(m.ver);
            if (m.pageNo != null && Object.hasOwnProperty.call(m, "pageNo"))
                w.uint32(24).int32(m.pageNo);
            if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                w.uint32(32).int32(m.pageSize);
            if (m.ex != null && Object.hasOwnProperty.call(m, "ex"))
                w.uint32(40).int64(m.ex);
            return w;
        };

        /**
         * Decodes a GameTagInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GameTagInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.GameTagInfo} GameTagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameTagInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.GameTagInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        if (!(m.list && m.list.length))
                            m.list = [];
                        m.list.push($root.protocol.GameTag.decode(r, r.uint32()));
                        break;
                    }
                case 2: {
                        m.ver = r.int32();
                        break;
                    }
                case 3: {
                        m.pageNo = r.int32();
                        break;
                    }
                case 4: {
                        m.pageSize = r.int32();
                        break;
                    }
                case 5: {
                        m.ex = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameTagInfo;
    })();

    protocol.UserBaseInfo = (function() {

        /**
         * Properties of a UserBaseInfo.
         * @memberof protocol
         * @interface IUserBaseInfo
         * @property {string|null} [uid] UserBaseInfo uid
         * @property {string|null} [name] UserBaseInfo name
         * @property {string|null} [avatar] UserBaseInfo avatar
         * @property {number|null} [areaId] UserBaseInfo areaId
         * @property {number|null} [highestScore] UserBaseInfo highestScore
         * @property {Object.<string,number>|null} [usingSkin] UserBaseInfo usingSkin
         */

        /**
         * Constructs a new UserBaseInfo.
         * @memberof protocol
         * @classdesc Represents a UserBaseInfo.
         * @implements IUserBaseInfo
         * @constructor
         * @param {protocol.IUserBaseInfo=} [p] Properties to set
         */
        function UserBaseInfo(p) {
            this.usingSkin = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserBaseInfo uid.
         * @member {string} uid
         * @memberof protocol.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.uid = "";

        /**
         * UserBaseInfo name.
         * @member {string} name
         * @memberof protocol.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.name = "";

        /**
         * UserBaseInfo avatar.
         * @member {string} avatar
         * @memberof protocol.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.avatar = "";

        /**
         * UserBaseInfo areaId.
         * @member {number} areaId
         * @memberof protocol.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.areaId = 0;

        /**
         * UserBaseInfo highestScore.
         * @member {number} highestScore
         * @memberof protocol.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.highestScore = 0;

        /**
         * UserBaseInfo usingSkin.
         * @member {Object.<string,number>} usingSkin
         * @memberof protocol.UserBaseInfo
         * @instance
         */
        UserBaseInfo.prototype.usingSkin = $util.emptyObject;

        /**
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link protocol.UserBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.UserBaseInfo
         * @static
         * @param {protocol.UserBaseInfo} m UserBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBaseInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                w.uint32(18).string(m.name);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(26).string(m.avatar);
            if (m.areaId != null && Object.hasOwnProperty.call(m, "areaId"))
                w.uint32(32).int32(m.areaId);
            if (m.highestScore != null && Object.hasOwnProperty.call(m, "highestScore"))
                w.uint32(40).int32(m.highestScore);
            if (m.usingSkin != null && Object.hasOwnProperty.call(m, "usingSkin")) {
                for (var ks = Object.keys(m.usingSkin), i = 0; i < ks.length; ++i) {
                    w.uint32(50).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.usingSkin[ks[i]]).ldelim();
                }
            }
            return w;
        };

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UserBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.UserBaseInfo} UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBaseInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.UserBaseInfo(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.name = r.string();
                        break;
                    }
                case 3: {
                        m.avatar = r.string();
                        break;
                    }
                case 4: {
                        m.areaId = r.int32();
                        break;
                    }
                case 5: {
                        m.highestScore = r.int32();
                        break;
                    }
                case 6: {
                        if (m.usingSkin === $util.emptyObject)
                            m.usingSkin = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = 0;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.int32();
                                break;
                            case 2:
                                value = r.int32();
                                break;
                            default:
                                r.skipType(tag2 & 7);
                                break;
                            }
                        }
                        m.usingSkin[k] = value;
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserBaseInfo;
    })();

    protocol.MatchStepInfo = (function() {

        /**
         * Properties of a MatchStepInfo.
         * @memberof protocol
         * @interface IMatchStepInfo
         * @property {number|null} [chessIndex] MatchStepInfo chessIndex
         * @property {number|null} [timeTag] MatchStepInfo timeTag
         * @property {number|null} [deltaTime] MatchStepInfo deltaTime
         */

        /**
         * Constructs a new MatchStepInfo.
         * @memberof protocol
         * @classdesc Represents a MatchStepInfo.
         * @implements IMatchStepInfo
         * @constructor
         * @param {protocol.IMatchStepInfo=} [p] Properties to set
         */
        function MatchStepInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MatchStepInfo chessIndex.
         * @member {number} chessIndex
         * @memberof protocol.MatchStepInfo
         * @instance
         */
        MatchStepInfo.prototype.chessIndex = 0;

        /**
         * MatchStepInfo timeTag.
         * @member {number} timeTag
         * @memberof protocol.MatchStepInfo
         * @instance
         */
        MatchStepInfo.prototype.timeTag = 0;

        /**
         * MatchStepInfo deltaTime.
         * @member {number} deltaTime
         * @memberof protocol.MatchStepInfo
         * @instance
         */
        MatchStepInfo.prototype.deltaTime = 0;

        /**
         * Encodes the specified MatchStepInfo message. Does not implicitly {@link protocol.MatchStepInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.MatchStepInfo
         * @static
         * @param {protocol.MatchStepInfo} m MatchStepInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchStepInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chessIndex != null && Object.hasOwnProperty.call(m, "chessIndex"))
                w.uint32(8).int32(m.chessIndex);
            if (m.timeTag != null && Object.hasOwnProperty.call(m, "timeTag"))
                w.uint32(16).int32(m.timeTag);
            if (m.deltaTime != null && Object.hasOwnProperty.call(m, "deltaTime"))
                w.uint32(24).int32(m.deltaTime);
            return w;
        };

        /**
         * Decodes a MatchStepInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MatchStepInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.MatchStepInfo} MatchStepInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchStepInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.MatchStepInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.chessIndex = r.int32();
                        break;
                    }
                case 2: {
                        m.timeTag = r.int32();
                        break;
                    }
                case 3: {
                        m.deltaTime = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MatchStepInfo;
    })();

    protocol.MatchPlayInfo = (function() {

        /**
         * Properties of a MatchPlayInfo.
         * @memberof protocol
         * @interface IMatchPlayInfo
         * @property {number|null} [gameType] MatchPlayInfo gameType
         * @property {Array.<number>|null} [mapSeed] MatchPlayInfo mapSeed
         * @property {Array.<protocol.MatchStepInfo>|null} [stepInfoList] MatchPlayInfo stepInfoList
         */

        /**
         * Constructs a new MatchPlayInfo.
         * @memberof protocol
         * @classdesc Represents a MatchPlayInfo.
         * @implements IMatchPlayInfo
         * @constructor
         * @param {protocol.IMatchPlayInfo=} [p] Properties to set
         */
        function MatchPlayInfo(p) {
            this.mapSeed = [];
            this.stepInfoList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MatchPlayInfo gameType.
         * @member {number} gameType
         * @memberof protocol.MatchPlayInfo
         * @instance
         */
        MatchPlayInfo.prototype.gameType = 0;

        /**
         * MatchPlayInfo mapSeed.
         * @member {Array.<number>} mapSeed
         * @memberof protocol.MatchPlayInfo
         * @instance
         */
        MatchPlayInfo.prototype.mapSeed = $util.emptyArray;

        /**
         * MatchPlayInfo stepInfoList.
         * @member {Array.<protocol.MatchStepInfo>} stepInfoList
         * @memberof protocol.MatchPlayInfo
         * @instance
         */
        MatchPlayInfo.prototype.stepInfoList = $util.emptyArray;

        /**
         * Encodes the specified MatchPlayInfo message. Does not implicitly {@link protocol.MatchPlayInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.MatchPlayInfo
         * @static
         * @param {protocol.MatchPlayInfo} m MatchPlayInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchPlayInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                w.uint32(8).int32(m.gameType);
            if (m.mapSeed != null && m.mapSeed.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.mapSeed.length; ++i)
                    w.int32(m.mapSeed[i]);
                w.ldelim();
            }
            if (m.stepInfoList != null && m.stepInfoList.length) {
                for (var i = 0; i < m.stepInfoList.length; ++i)
                    $root.protocol.MatchStepInfo.encode(m.stepInfoList[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a MatchPlayInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MatchPlayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.MatchPlayInfo} MatchPlayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchPlayInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.MatchPlayInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.gameType = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.mapSeed && m.mapSeed.length))
                            m.mapSeed = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.mapSeed.push(r.int32());
                        } else
                            m.mapSeed.push(r.int32());
                        break;
                    }
                case 4: {
                        if (!(m.stepInfoList && m.stepInfoList.length))
                            m.stepInfoList = [];
                        m.stepInfoList.push($root.protocol.MatchStepInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MatchPlayInfo;
    })();

    protocol.MailAwardItem = (function() {

        /**
         * Properties of a MailAwardItem.
         * @memberof protocol
         * @interface IMailAwardItem
         * @property {number|null} [ItemId] MailAwardItem ItemId
         * @property {number|null} [ItemType] MailAwardItem ItemType
         * @property {number|null} [ItemCount] MailAwardItem ItemCount
         * @property {boolean|null} [ItemState] MailAwardItem ItemState
         * @property {number|null} [index] MailAwardItem index
         */

        /**
         * Constructs a new MailAwardItem.
         * @memberof protocol
         * @classdesc Represents a MailAwardItem.
         * @implements IMailAwardItem
         * @constructor
         * @param {protocol.IMailAwardItem=} [p] Properties to set
         */
        function MailAwardItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MailAwardItem ItemId.
         * @member {number} ItemId
         * @memberof protocol.MailAwardItem
         * @instance
         */
        MailAwardItem.prototype.ItemId = 0;

        /**
         * MailAwardItem ItemType.
         * @member {number} ItemType
         * @memberof protocol.MailAwardItem
         * @instance
         */
        MailAwardItem.prototype.ItemType = 0;

        /**
         * MailAwardItem ItemCount.
         * @member {number} ItemCount
         * @memberof protocol.MailAwardItem
         * @instance
         */
        MailAwardItem.prototype.ItemCount = 0;

        /**
         * MailAwardItem ItemState.
         * @member {boolean} ItemState
         * @memberof protocol.MailAwardItem
         * @instance
         */
        MailAwardItem.prototype.ItemState = false;

        /**
         * MailAwardItem index.
         * @member {number} index
         * @memberof protocol.MailAwardItem
         * @instance
         */
        MailAwardItem.prototype.index = 0;

        /**
         * Encodes the specified MailAwardItem message. Does not implicitly {@link protocol.MailAwardItem.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailAwardItem
         * @static
         * @param {protocol.MailAwardItem} m MailAwardItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailAwardItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(8).int32(m.ItemId);
            if (m.ItemType != null && Object.hasOwnProperty.call(m, "ItemType"))
                w.uint32(16).int32(m.ItemType);
            if (m.ItemCount != null && Object.hasOwnProperty.call(m, "ItemCount"))
                w.uint32(24).int32(m.ItemCount);
            if (m.ItemState != null && Object.hasOwnProperty.call(m, "ItemState"))
                w.uint32(32).bool(m.ItemState);
            if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                w.uint32(40).int32(m.index);
            return w;
        };

        /**
         * Decodes a MailAwardItem message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailAwardItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.MailAwardItem} MailAwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailAwardItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.MailAwardItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ItemId = r.int32();
                        break;
                    }
                case 2: {
                        m.ItemType = r.int32();
                        break;
                    }
                case 3: {
                        m.ItemCount = r.int32();
                        break;
                    }
                case 4: {
                        m.ItemState = r.bool();
                        break;
                    }
                case 5: {
                        m.index = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MailAwardItem;
    })();

    protocol.MailData = (function() {

        /**
         * Properties of a MailData.
         * @memberof protocol
         * @interface IMailData
         * @property {string|null} [mailId] MailData mailId
         * @property {number|null} [mailType] MailData mailType
         * @property {string|null} [title] MailData title
         * @property {string|null} [content] MailData content
         * @property {string|null} [fromId] MailData fromId
         * @property {Array.<protocol.MailAwardItem>|null} [attachments] MailData attachments
         * @property {boolean|null} [extracted] MailData extracted
         * @property {boolean|null} [haveRead] MailData haveRead
         * @property {boolean|null} [skinState] MailData skinState
         * @property {Long|null} [expireTime] MailData expireTime
         * @property {Long|null} [sendTime] MailData sendTime
         */

        /**
         * Constructs a new MailData.
         * @memberof protocol
         * @classdesc Represents a MailData.
         * @implements IMailData
         * @constructor
         * @param {protocol.IMailData=} [p] Properties to set
         */
        function MailData(p) {
            this.attachments = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MailData mailId.
         * @member {string} mailId
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.mailId = "";

        /**
         * MailData mailType.
         * @member {number} mailType
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.mailType = 0;

        /**
         * MailData title.
         * @member {string} title
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.title = "";

        /**
         * MailData content.
         * @member {string} content
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.content = "";

        /**
         * MailData fromId.
         * @member {string} fromId
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.fromId = "";

        /**
         * MailData attachments.
         * @member {Array.<protocol.MailAwardItem>} attachments
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.attachments = $util.emptyArray;

        /**
         * MailData extracted.
         * @member {boolean} extracted
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.extracted = false;

        /**
         * MailData haveRead.
         * @member {boolean} haveRead
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.haveRead = false;

        /**
         * MailData skinState.
         * @member {boolean} skinState
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.skinState = false;

        /**
         * MailData expireTime.
         * @member {Long} expireTime
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.expireTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailData sendTime.
         * @member {Long} sendTime
         * @memberof protocol.MailData
         * @instance
         */
        MailData.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified MailData message. Does not implicitly {@link protocol.MailData.verify|verify} messages.
         * @function encode
         * @memberof protocol.MailData
         * @static
         * @param {protocol.MailData} m MailData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mailId != null && Object.hasOwnProperty.call(m, "mailId"))
                w.uint32(10).string(m.mailId);
            if (m.mailType != null && Object.hasOwnProperty.call(m, "mailType"))
                w.uint32(16).int32(m.mailType);
            if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                w.uint32(26).string(m.title);
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(34).string(m.content);
            if (m.fromId != null && Object.hasOwnProperty.call(m, "fromId"))
                w.uint32(42).string(m.fromId);
            if (m.attachments != null && m.attachments.length) {
                for (var i = 0; i < m.attachments.length; ++i)
                    $root.protocol.MailAwardItem.encode(m.attachments[i], w.uint32(50).fork()).ldelim();
            }
            if (m.extracted != null && Object.hasOwnProperty.call(m, "extracted"))
                w.uint32(56).bool(m.extracted);
            if (m.haveRead != null && Object.hasOwnProperty.call(m, "haveRead"))
                w.uint32(64).bool(m.haveRead);
            if (m.skinState != null && Object.hasOwnProperty.call(m, "skinState"))
                w.uint32(72).bool(m.skinState);
            if (m.expireTime != null && Object.hasOwnProperty.call(m, "expireTime"))
                w.uint32(80).int64(m.expireTime);
            if (m.sendTime != null && Object.hasOwnProperty.call(m, "sendTime"))
                w.uint32(88).int64(m.sendTime);
            return w;
        };

        /**
         * Decodes a MailData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MailData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.MailData} MailData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.MailData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.mailId = r.string();
                        break;
                    }
                case 2: {
                        m.mailType = r.int32();
                        break;
                    }
                case 3: {
                        m.title = r.string();
                        break;
                    }
                case 4: {
                        m.content = r.string();
                        break;
                    }
                case 5: {
                        m.fromId = r.string();
                        break;
                    }
                case 6: {
                        if (!(m.attachments && m.attachments.length))
                            m.attachments = [];
                        m.attachments.push($root.protocol.MailAwardItem.decode(r, r.uint32()));
                        break;
                    }
                case 7: {
                        m.extracted = r.bool();
                        break;
                    }
                case 8: {
                        m.haveRead = r.bool();
                        break;
                    }
                case 9: {
                        m.skinState = r.bool();
                        break;
                    }
                case 10: {
                        m.expireTime = r.int64();
                        break;
                    }
                case 11: {
                        m.sendTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MailData;
    })();

    protocol.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof protocol
         * @interface IUserInfo
         * @property {string|null} [uid] UserInfo uid
         * @property {string|null} [nickname] UserInfo nickname
         * @property {string|null} [avatar] UserInfo avatar
         * @property {boolean|null} [isPassedGuideLevel] UserInfo isPassedGuideLevel
         * @property {boolean|null} [isPassedNewPlayerLevel] UserInfo isPassedNewPlayerLevel
         * @property {boolean|null} [isAuthorized] UserInfo isAuthorized
         * @property {Long|null} [coins] UserInfo coins
         * @property {number|null} [type] UserInfo type
         * @property {number|null} [userType] UserInfo userType
         * @property {Object.<string,number>|null} [tags] UserInfo tags
         * @property {number|null} [areaId] UserInfo areaId
         * @property {boolean|null} [isAdUser] UserInfo isAdUser
         * @property {Long|null} [passedNewPlayerTime] UserInfo passedNewPlayerTime
         */

        /**
         * Constructs a new UserInfo.
         * @memberof protocol
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {protocol.IUserInfo=} [p] Properties to set
         */
        function UserInfo(p) {
            this.tags = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserInfo uid.
         * @member {string} uid
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.uid = "";

        /**
         * UserInfo nickname.
         * @member {string} nickname
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.nickname = "";

        /**
         * UserInfo avatar.
         * @member {string} avatar
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.avatar = "";

        /**
         * UserInfo isPassedGuideLevel.
         * @member {boolean} isPassedGuideLevel
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.isPassedGuideLevel = false;

        /**
         * UserInfo isPassedNewPlayerLevel.
         * @member {boolean} isPassedNewPlayerLevel
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.isPassedNewPlayerLevel = false;

        /**
         * UserInfo isAuthorized.
         * @member {boolean} isAuthorized
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.isAuthorized = false;

        /**
         * UserInfo coins.
         * @member {Long} coins
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.coins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo type.
         * @member {number} type
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.type = 0;

        /**
         * UserInfo userType.
         * @member {number} userType
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.userType = 0;

        /**
         * UserInfo tags.
         * @member {Object.<string,number>} tags
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.tags = $util.emptyObject;

        /**
         * UserInfo areaId.
         * @member {number} areaId
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.areaId = 0;

        /**
         * UserInfo isAdUser.
         * @member {boolean} isAdUser
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.isAdUser = false;

        /**
         * UserInfo passedNewPlayerTime.
         * @member {Long} passedNewPlayerTime
         * @memberof protocol.UserInfo
         * @instance
         */
        UserInfo.prototype.passedNewPlayerTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link protocol.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.UserInfo
         * @static
         * @param {protocol.UserInfo} m UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(18).string(m.nickname);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(26).string(m.avatar);
            if (m.isPassedGuideLevel != null && Object.hasOwnProperty.call(m, "isPassedGuideLevel"))
                w.uint32(32).bool(m.isPassedGuideLevel);
            if (m.isPassedNewPlayerLevel != null && Object.hasOwnProperty.call(m, "isPassedNewPlayerLevel"))
                w.uint32(40).bool(m.isPassedNewPlayerLevel);
            if (m.isAuthorized != null && Object.hasOwnProperty.call(m, "isAuthorized"))
                w.uint32(48).bool(m.isAuthorized);
            if (m.coins != null && Object.hasOwnProperty.call(m, "coins"))
                w.uint32(56).int64(m.coins);
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(64).int32(m.type);
            if (m.userType != null && Object.hasOwnProperty.call(m, "userType"))
                w.uint32(72).int32(m.userType);
            if (m.tags != null && Object.hasOwnProperty.call(m, "tags")) {
                for (var ks = Object.keys(m.tags), i = 0; i < ks.length; ++i) {
                    w.uint32(82).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.tags[ks[i]]).ldelim();
                }
            }
            if (m.areaId != null && Object.hasOwnProperty.call(m, "areaId"))
                w.uint32(88).int32(m.areaId);
            if (m.isAdUser != null && Object.hasOwnProperty.call(m, "isAdUser"))
                w.uint32(96).bool(m.isAdUser);
            if (m.passedNewPlayerTime != null && Object.hasOwnProperty.call(m, "passedNewPlayerTime"))
                w.uint32(104).int64(m.passedNewPlayerTime);
            return w;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.UserInfo(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.uid = r.string();
                        break;
                    }
                case 2: {
                        m.nickname = r.string();
                        break;
                    }
                case 3: {
                        m.avatar = r.string();
                        break;
                    }
                case 4: {
                        m.isPassedGuideLevel = r.bool();
                        break;
                    }
                case 5: {
                        m.isPassedNewPlayerLevel = r.bool();
                        break;
                    }
                case 6: {
                        m.isAuthorized = r.bool();
                        break;
                    }
                case 7: {
                        m.coins = r.int64();
                        break;
                    }
                case 8: {
                        m.type = r.int32();
                        break;
                    }
                case 9: {
                        m.userType = r.int32();
                        break;
                    }
                case 10: {
                        if (m.tags === $util.emptyObject)
                            m.tags = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = 0;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.int32();
                                break;
                            case 2:
                                value = r.int32();
                                break;
                            default:
                                r.skipType(tag2 & 7);
                                break;
                            }
                        }
                        m.tags[k] = value;
                        break;
                    }
                case 11: {
                        m.areaId = r.int32();
                        break;
                    }
                case 12: {
                        m.isAdUser = r.bool();
                        break;
                    }
                case 13: {
                        m.passedNewPlayerTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserInfo;
    })();

    protocol.Payslip = (function() {

        /**
         * Properties of a Payslip.
         * @memberof protocol
         * @interface IPayslip
         * @property {string|null} [nickname] Payslip nickname
         * @property {Long|null} [startDate] Payslip startDate
         * @property {number|null} [loginDays] Payslip loginDays
         * @property {number|null} [rawScore] Payslip rawScore
         * @property {number|null} [platformCut] Payslip platformCut
         * @property {number|null} [preTaxSalary] Payslip preTaxSalary
         * @property {number|null} [personalTax] Payslip personalTax
         * @property {number|null} [afterTaxIncome] Payslip afterTaxIncome
         * @property {boolean|null} [isReceived] Payslip isReceived
         * @property {number|null} [liveTime] Payslip liveTime
         */

        /**
         * Constructs a new Payslip.
         * @memberof protocol
         * @classdesc Represents a Payslip.
         * @implements IPayslip
         * @constructor
         * @param {protocol.IPayslip=} [p] Properties to set
         */
        function Payslip(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Payslip nickname.
         * @member {string} nickname
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.nickname = "";

        /**
         * Payslip startDate.
         * @member {Long} startDate
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.startDate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Payslip loginDays.
         * @member {number} loginDays
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.loginDays = 0;

        /**
         * Payslip rawScore.
         * @member {number} rawScore
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.rawScore = 0;

        /**
         * Payslip platformCut.
         * @member {number} platformCut
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.platformCut = 0;

        /**
         * Payslip preTaxSalary.
         * @member {number} preTaxSalary
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.preTaxSalary = 0;

        /**
         * Payslip personalTax.
         * @member {number} personalTax
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.personalTax = 0;

        /**
         * Payslip afterTaxIncome.
         * @member {number} afterTaxIncome
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.afterTaxIncome = 0;

        /**
         * Payslip isReceived.
         * @member {boolean} isReceived
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.isReceived = false;

        /**
         * Payslip liveTime.
         * @member {number} liveTime
         * @memberof protocol.Payslip
         * @instance
         */
        Payslip.prototype.liveTime = 0;

        /**
         * Encodes the specified Payslip message. Does not implicitly {@link protocol.Payslip.verify|verify} messages.
         * @function encode
         * @memberof protocol.Payslip
         * @static
         * @param {protocol.Payslip} m Payslip message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Payslip.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(10).string(m.nickname);
            if (m.startDate != null && Object.hasOwnProperty.call(m, "startDate"))
                w.uint32(16).int64(m.startDate);
            if (m.loginDays != null && Object.hasOwnProperty.call(m, "loginDays"))
                w.uint32(24).int32(m.loginDays);
            if (m.rawScore != null && Object.hasOwnProperty.call(m, "rawScore"))
                w.uint32(32).int32(m.rawScore);
            if (m.platformCut != null && Object.hasOwnProperty.call(m, "platformCut"))
                w.uint32(40).int32(m.platformCut);
            if (m.preTaxSalary != null && Object.hasOwnProperty.call(m, "preTaxSalary"))
                w.uint32(48).int32(m.preTaxSalary);
            if (m.personalTax != null && Object.hasOwnProperty.call(m, "personalTax"))
                w.uint32(56).int32(m.personalTax);
            if (m.afterTaxIncome != null && Object.hasOwnProperty.call(m, "afterTaxIncome"))
                w.uint32(64).int32(m.afterTaxIncome);
            if (m.isReceived != null && Object.hasOwnProperty.call(m, "isReceived"))
                w.uint32(72).bool(m.isReceived);
            if (m.liveTime != null && Object.hasOwnProperty.call(m, "liveTime"))
                w.uint32(80).int32(m.liveTime);
            return w;
        };

        /**
         * Decodes a Payslip message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Payslip
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.Payslip} Payslip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Payslip.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.Payslip();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.nickname = r.string();
                        break;
                    }
                case 2: {
                        m.startDate = r.int64();
                        break;
                    }
                case 3: {
                        m.loginDays = r.int32();
                        break;
                    }
                case 4: {
                        m.rawScore = r.int32();
                        break;
                    }
                case 5: {
                        m.platformCut = r.int32();
                        break;
                    }
                case 6: {
                        m.preTaxSalary = r.int32();
                        break;
                    }
                case 7: {
                        m.personalTax = r.int32();
                        break;
                    }
                case 8: {
                        m.afterTaxIncome = r.int32();
                        break;
                    }
                case 9: {
                        m.isReceived = r.bool();
                        break;
                    }
                case 10: {
                        m.liveTime = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Payslip;
    })();

    protocol.CharacterData = (function() {

        /**
         * Properties of a CharacterData.
         * @memberof protocol
         * @interface ICharacterData
         * @property {string|null} [nickname] CharacterData nickname
         * @property {boolean|null} [isPassedGuideLevel] CharacterData isPassedGuideLevel
         * @property {boolean|null} [isPassedNewPlayerLevel] CharacterData isPassedNewPlayerLevel
         * @property {boolean|null} [isAuthorized] CharacterData isAuthorized
         * @property {string|null} [avatar] CharacterData avatar
         */

        /**
         * Constructs a new CharacterData.
         * @memberof protocol
         * @classdesc Represents a CharacterData.
         * @implements ICharacterData
         * @constructor
         * @param {protocol.ICharacterData=} [p] Properties to set
         */
        function CharacterData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CharacterData nickname.
         * @member {string} nickname
         * @memberof protocol.CharacterData
         * @instance
         */
        CharacterData.prototype.nickname = "";

        /**
         * CharacterData isPassedGuideLevel.
         * @member {boolean} isPassedGuideLevel
         * @memberof protocol.CharacterData
         * @instance
         */
        CharacterData.prototype.isPassedGuideLevel = false;

        /**
         * CharacterData isPassedNewPlayerLevel.
         * @member {boolean} isPassedNewPlayerLevel
         * @memberof protocol.CharacterData
         * @instance
         */
        CharacterData.prototype.isPassedNewPlayerLevel = false;

        /**
         * CharacterData isAuthorized.
         * @member {boolean} isAuthorized
         * @memberof protocol.CharacterData
         * @instance
         */
        CharacterData.prototype.isAuthorized = false;

        /**
         * CharacterData avatar.
         * @member {string} avatar
         * @memberof protocol.CharacterData
         * @instance
         */
        CharacterData.prototype.avatar = "";

        /**
         * Encodes the specified CharacterData message. Does not implicitly {@link protocol.CharacterData.verify|verify} messages.
         * @function encode
         * @memberof protocol.CharacterData
         * @static
         * @param {protocol.CharacterData} m CharacterData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CharacterData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(10).string(m.nickname);
            if (m.isPassedGuideLevel != null && Object.hasOwnProperty.call(m, "isPassedGuideLevel"))
                w.uint32(16).bool(m.isPassedGuideLevel);
            if (m.isPassedNewPlayerLevel != null && Object.hasOwnProperty.call(m, "isPassedNewPlayerLevel"))
                w.uint32(24).bool(m.isPassedNewPlayerLevel);
            if (m.isAuthorized != null && Object.hasOwnProperty.call(m, "isAuthorized"))
                w.uint32(32).bool(m.isAuthorized);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(42).string(m.avatar);
            return w;
        };

        /**
         * Decodes a CharacterData message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CharacterData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.CharacterData} CharacterData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CharacterData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.CharacterData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.nickname = r.string();
                        break;
                    }
                case 2: {
                        m.isPassedGuideLevel = r.bool();
                        break;
                    }
                case 3: {
                        m.isPassedNewPlayerLevel = r.bool();
                        break;
                    }
                case 4: {
                        m.isAuthorized = r.bool();
                        break;
                    }
                case 5: {
                        m.avatar = r.string();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CharacterData;
    })();

    protocol.DailyGameMsg = (function() {

        /**
         * Properties of a DailyGameMsg.
         * @memberof protocol
         * @interface IDailyGameMsg
         * @property {string|null} [dailyMatchToken] DailyGameMsg dailyMatchToken
         * @property {number|null} [dailyPassCount] DailyGameMsg dailyPassCount
         * @property {number|null} [dailyGameCount] DailyGameMsg dailyGameCount
         * @property {number|null} [freeCount] DailyGameMsg freeCount
         * @property {Array.<number>|null} [passedLevelIds] DailyGameMsg passedLevelIds
         */

        /**
         * Constructs a new DailyGameMsg.
         * @memberof protocol
         * @classdesc Represents a DailyGameMsg.
         * @implements IDailyGameMsg
         * @constructor
         * @param {protocol.IDailyGameMsg=} [p] Properties to set
         */
        function DailyGameMsg(p) {
            this.passedLevelIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * DailyGameMsg dailyMatchToken.
         * @member {string} dailyMatchToken
         * @memberof protocol.DailyGameMsg
         * @instance
         */
        DailyGameMsg.prototype.dailyMatchToken = "";

        /**
         * DailyGameMsg dailyPassCount.
         * @member {number} dailyPassCount
         * @memberof protocol.DailyGameMsg
         * @instance
         */
        DailyGameMsg.prototype.dailyPassCount = 0;

        /**
         * DailyGameMsg dailyGameCount.
         * @member {number} dailyGameCount
         * @memberof protocol.DailyGameMsg
         * @instance
         */
        DailyGameMsg.prototype.dailyGameCount = 0;

        /**
         * DailyGameMsg freeCount.
         * @member {number} freeCount
         * @memberof protocol.DailyGameMsg
         * @instance
         */
        DailyGameMsg.prototype.freeCount = 0;

        /**
         * DailyGameMsg passedLevelIds.
         * @member {Array.<number>} passedLevelIds
         * @memberof protocol.DailyGameMsg
         * @instance
         */
        DailyGameMsg.prototype.passedLevelIds = $util.emptyArray;

        /**
         * Encodes the specified DailyGameMsg message. Does not implicitly {@link protocol.DailyGameMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.DailyGameMsg
         * @static
         * @param {protocol.DailyGameMsg} m DailyGameMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyGameMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.dailyMatchToken != null && Object.hasOwnProperty.call(m, "dailyMatchToken"))
                w.uint32(10).string(m.dailyMatchToken);
            if (m.dailyPassCount != null && Object.hasOwnProperty.call(m, "dailyPassCount"))
                w.uint32(16).int32(m.dailyPassCount);
            if (m.dailyGameCount != null && Object.hasOwnProperty.call(m, "dailyGameCount"))
                w.uint32(24).int32(m.dailyGameCount);
            if (m.freeCount != null && Object.hasOwnProperty.call(m, "freeCount"))
                w.uint32(32).int32(m.freeCount);
            if (m.passedLevelIds != null && m.passedLevelIds.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.passedLevelIds.length; ++i)
                    w.int32(m.passedLevelIds[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * Decodes a DailyGameMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DailyGameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.DailyGameMsg} DailyGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyGameMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.DailyGameMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.dailyMatchToken = r.string();
                        break;
                    }
                case 2: {
                        m.dailyPassCount = r.int32();
                        break;
                    }
                case 3: {
                        m.dailyGameCount = r.int32();
                        break;
                    }
                case 4: {
                        m.freeCount = r.int32();
                        break;
                    }
                case 5: {
                        if (!(m.passedLevelIds && m.passedLevelIds.length))
                            m.passedLevelIds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.passedLevelIds.push(r.int32());
                        } else
                            m.passedLevelIds.push(r.int32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DailyGameMsg;
    })();

    protocol.EndlessGameMsg = (function() {

        /**
         * Properties of an EndlessGameMsg.
         * @memberof protocol
         * @interface IEndlessGameMsg
         * @property {string|null} [matchToken] EndlessGameMsg matchToken
         * @property {number|null} [highestScore] EndlessGameMsg highestScore
         * @property {boolean|null} [needSettle] EndlessGameMsg needSettle
         * @property {number|null} [freeCount] EndlessGameMsg freeCount
         * @property {number|null} [todayEndlessCount] EndlessGameMsg todayEndlessCount
         * @property {number|null} [dailyMaxScore] EndlessGameMsg dailyMaxScore
         * @property {number|null} [income] EndlessGameMsg income
         * @property {number|null} [activityMaxScore] EndlessGameMsg activityMaxScore
         * @property {boolean|null} [canClaimVideoReward] EndlessGameMsg canClaimVideoReward
         */

        /**
         * Constructs a new EndlessGameMsg.
         * @memberof protocol
         * @classdesc Represents an EndlessGameMsg.
         * @implements IEndlessGameMsg
         * @constructor
         * @param {protocol.IEndlessGameMsg=} [p] Properties to set
         */
        function EndlessGameMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EndlessGameMsg matchToken.
         * @member {string} matchToken
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.matchToken = "";

        /**
         * EndlessGameMsg highestScore.
         * @member {number} highestScore
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.highestScore = 0;

        /**
         * EndlessGameMsg needSettle.
         * @member {boolean} needSettle
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.needSettle = false;

        /**
         * EndlessGameMsg freeCount.
         * @member {number} freeCount
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.freeCount = 0;

        /**
         * EndlessGameMsg todayEndlessCount.
         * @member {number} todayEndlessCount
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.todayEndlessCount = 0;

        /**
         * EndlessGameMsg dailyMaxScore.
         * @member {number} dailyMaxScore
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.dailyMaxScore = 0;

        /**
         * EndlessGameMsg income.
         * @member {number} income
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.income = 0;

        /**
         * EndlessGameMsg activityMaxScore.
         * @member {number} activityMaxScore
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.activityMaxScore = 0;

        /**
         * EndlessGameMsg canClaimVideoReward.
         * @member {boolean} canClaimVideoReward
         * @memberof protocol.EndlessGameMsg
         * @instance
         */
        EndlessGameMsg.prototype.canClaimVideoReward = false;

        /**
         * Encodes the specified EndlessGameMsg message. Does not implicitly {@link protocol.EndlessGameMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.EndlessGameMsg
         * @static
         * @param {protocol.EndlessGameMsg} m EndlessGameMsg message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EndlessGameMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            if (m.highestScore != null && Object.hasOwnProperty.call(m, "highestScore"))
                w.uint32(16).int32(m.highestScore);
            if (m.needSettle != null && Object.hasOwnProperty.call(m, "needSettle"))
                w.uint32(24).bool(m.needSettle);
            if (m.freeCount != null && Object.hasOwnProperty.call(m, "freeCount"))
                w.uint32(32).int32(m.freeCount);
            if (m.todayEndlessCount != null && Object.hasOwnProperty.call(m, "todayEndlessCount"))
                w.uint32(40).int32(m.todayEndlessCount);
            if (m.dailyMaxScore != null && Object.hasOwnProperty.call(m, "dailyMaxScore"))
                w.uint32(48).int32(m.dailyMaxScore);
            if (m.income != null && Object.hasOwnProperty.call(m, "income"))
                w.uint32(64).int32(m.income);
            if (m.activityMaxScore != null && Object.hasOwnProperty.call(m, "activityMaxScore"))
                w.uint32(72).int32(m.activityMaxScore);
            if (m.canClaimVideoReward != null && Object.hasOwnProperty.call(m, "canClaimVideoReward"))
                w.uint32(80).bool(m.canClaimVideoReward);
            return w;
        };

        /**
         * Decodes an EndlessGameMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.EndlessGameMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {protocol.EndlessGameMsg} EndlessGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EndlessGameMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.protocol.EndlessGameMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.matchToken = r.string();
                        break;
                    }
                case 2: {
                        m.highestScore = r.int32();
                        break;
                    }
                case 3: {
                        m.needSettle = r.bool();
                        break;
                    }
                case 4: {
                        m.freeCount = r.int32();
                        break;
                    }
                case 5: {
                        m.todayEndlessCount = r.int32();
                        break;
                    }
                case 6: {
                        m.dailyMaxScore = r.int32();
                        break;
                    }
                case 8: {
                        m.income = r.int32();
                        break;
                    }
                case 9: {
                        m.activityMaxScore = r.int32();
                        break;
                    }
                case 10: {
                        m.canClaimVideoReward = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EndlessGameMsg;
    })();

    return protocol;
})();

export const redisPb = $root.redisPb = (() => {

    /**
     * Namespace redisPb.
     * @exports redisPb
     * @namespace
     */
    const redisPb = {};

    redisPb.ClusterIps = (function() {

        /**
         * Properties of a ClusterIps.
         * @memberof redisPb
         * @interface IClusterIps
         * @property {Array.<string>|null} [Ip] ClusterIps Ip
         * @property {Long|null} [UpdateTime] ClusterIps UpdateTime
         */

        /**
         * Constructs a new ClusterIps.
         * @memberof redisPb
         * @classdesc Represents a ClusterIps.
         * @implements IClusterIps
         * @constructor
         * @param {redisPb.IClusterIps=} [p] Properties to set
         */
        function ClusterIps(p) {
            this.Ip = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ClusterIps Ip.
         * @member {Array.<string>} Ip
         * @memberof redisPb.ClusterIps
         * @instance
         */
        ClusterIps.prototype.Ip = $util.emptyArray;

        /**
         * ClusterIps UpdateTime.
         * @member {Long} UpdateTime
         * @memberof redisPb.ClusterIps
         * @instance
         */
        ClusterIps.prototype.UpdateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ClusterIps message. Does not implicitly {@link redisPb.ClusterIps.verify|verify} messages.
         * @function encode
         * @memberof redisPb.ClusterIps
         * @static
         * @param {redisPb.ClusterIps} m ClusterIps message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClusterIps.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ip != null && m.Ip.length) {
                for (var i = 0; i < m.Ip.length; ++i)
                    w.uint32(10).string(m.Ip[i]);
            }
            if (m.UpdateTime != null && Object.hasOwnProperty.call(m, "UpdateTime"))
                w.uint32(16).int64(m.UpdateTime);
            return w;
        };

        /**
         * Decodes a ClusterIps message from the specified reader or buffer.
         * @function decode
         * @memberof redisPb.ClusterIps
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {redisPb.ClusterIps} ClusterIps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClusterIps.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.redisPb.ClusterIps();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        if (!(m.Ip && m.Ip.length))
                            m.Ip = [];
                        m.Ip.push(r.string());
                        break;
                    }
                case 2: {
                        m.UpdateTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ClusterIps;
    })();

    return redisPb;
})();

export { $root as default };
