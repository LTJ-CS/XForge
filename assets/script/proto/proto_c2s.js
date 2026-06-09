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

export const Client2Server = $root.Client2Server = (() => {

    /**
     * Namespace Client2Server.
     * @exports Client2Server
     * @namespace
     */
    const Client2Server = {};

    Client2Server.C2LS_PlayerInfo = (function() {

        /**
         * Properties of a C2LS_PlayerInfo.
         * @memberof Client2Server
         * @interface IC2LS_PlayerInfo
         * @property {string|null} [openId] C2LS_PlayerInfo openId
         * @property {common.EPlatform|null} [platform] C2LS_PlayerInfo platform
         * @property {common.EClientOS|null} [clientOS] C2LS_PlayerInfo clientOS
         */

        /**
         * Constructs a new C2LS_PlayerInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PlayerInfo.
         * @implements IC2LS_PlayerInfo
         * @constructor
         * @param {Client2Server.IC2LS_PlayerInfo=} [p] Properties to set
         */
        function C2LS_PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PlayerInfo openId.
         * @member {string} openId
         * @memberof Client2Server.C2LS_PlayerInfo
         * @instance
         */
        C2LS_PlayerInfo.prototype.openId = "";

        /**
         * C2LS_PlayerInfo platform.
         * @member {common.EPlatform} platform
         * @memberof Client2Server.C2LS_PlayerInfo
         * @instance
         */
        C2LS_PlayerInfo.prototype.platform = 0;

        /**
         * C2LS_PlayerInfo clientOS.
         * @member {common.EClientOS} clientOS
         * @memberof Client2Server.C2LS_PlayerInfo
         * @instance
         */
        C2LS_PlayerInfo.prototype.clientOS = 0;

        /**
         * Encodes the specified C2LS_PlayerInfo message. Does not implicitly {@link Client2Server.C2LS_PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PlayerInfo
         * @static
         * @param {Client2Server.C2LS_PlayerInfo} m C2LS_PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.openId != null && Object.hasOwnProperty.call(m, "openId"))
                w.uint32(10).string(m.openId);
            if (m.platform != null && Object.hasOwnProperty.call(m, "platform"))
                w.uint32(16).int32(m.platform);
            if (m.clientOS != null && Object.hasOwnProperty.call(m, "clientOS"))
                w.uint32(24).int32(m.clientOS);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PlayerInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10001 OpCode value
         */
        C2LS_PlayerInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10001] = "OpCode"] = 10001;
            return values;
        })();

        return C2LS_PlayerInfo;
    })();

    Client2Server.C2LS_PlayerReady = (function() {

        /**
         * Properties of a C2LS_PlayerReady.
         * @memberof Client2Server
         * @interface IC2LS_PlayerReady
         */

        /**
         * Constructs a new C2LS_PlayerReady.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PlayerReady.
         * @implements IC2LS_PlayerReady
         * @constructor
         * @param {Client2Server.IC2LS_PlayerReady=} [p] Properties to set
         */
        function C2LS_PlayerReady(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_PlayerReady message. Does not implicitly {@link Client2Server.C2LS_PlayerReady.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PlayerReady
         * @static
         * @param {Client2Server.C2LS_PlayerReady} m C2LS_PlayerReady message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PlayerReady.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PlayerReady.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10002 OpCode value
         */
        C2LS_PlayerReady.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10002] = "OpCode"] = 10002;
            return values;
        })();

        return C2LS_PlayerReady;
    })();

    Client2Server.C2LS_UpdatePlayerBaseInfo = (function() {

        /**
         * Properties of a C2LS_UpdatePlayerBaseInfo.
         * @memberof Client2Server
         * @interface IC2LS_UpdatePlayerBaseInfo
         * @property {string|null} [nickName] C2LS_UpdatePlayerBaseInfo nickName
         * @property {string|null} [avatar] C2LS_UpdatePlayerBaseInfo avatar
         * @property {string|null} [adCode] C2LS_UpdatePlayerBaseInfo adCode
         */

        /**
         * Constructs a new C2LS_UpdatePlayerBaseInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_UpdatePlayerBaseInfo.
         * @implements IC2LS_UpdatePlayerBaseInfo
         * @constructor
         * @param {Client2Server.IC2LS_UpdatePlayerBaseInfo=} [p] Properties to set
         */
        function C2LS_UpdatePlayerBaseInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_UpdatePlayerBaseInfo nickName.
         * @member {string} nickName
         * @memberof Client2Server.C2LS_UpdatePlayerBaseInfo
         * @instance
         */
        C2LS_UpdatePlayerBaseInfo.prototype.nickName = "";

        /**
         * C2LS_UpdatePlayerBaseInfo avatar.
         * @member {string} avatar
         * @memberof Client2Server.C2LS_UpdatePlayerBaseInfo
         * @instance
         */
        C2LS_UpdatePlayerBaseInfo.prototype.avatar = "";

        /**
         * C2LS_UpdatePlayerBaseInfo adCode.
         * @member {string} adCode
         * @memberof Client2Server.C2LS_UpdatePlayerBaseInfo
         * @instance
         */
        C2LS_UpdatePlayerBaseInfo.prototype.adCode = "";

        /**
         * Encodes the specified C2LS_UpdatePlayerBaseInfo message. Does not implicitly {@link Client2Server.C2LS_UpdatePlayerBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_UpdatePlayerBaseInfo
         * @static
         * @param {Client2Server.C2LS_UpdatePlayerBaseInfo} m C2LS_UpdatePlayerBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_UpdatePlayerBaseInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
                w.uint32(10).string(m.nickName);
            if (m.avatar != null && Object.hasOwnProperty.call(m, "avatar"))
                w.uint32(18).string(m.avatar);
            if (m.adCode != null && Object.hasOwnProperty.call(m, "adCode"))
                w.uint32(26).string(m.adCode);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_UpdatePlayerBaseInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10003 OpCode value
         */
        C2LS_UpdatePlayerBaseInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10003] = "OpCode"] = 10003;
            return values;
        })();

        return C2LS_UpdatePlayerBaseInfo;
    })();

    Client2Server.C2LS_SetPlayerInfo = (function() {

        /**
         * Properties of a C2LS_SetPlayerInfo.
         * @memberof Client2Server
         * @interface IC2LS_SetPlayerInfo
         * @property {common.EGender|null} [gender] C2LS_SetPlayerInfo gender
         * @property {number|null} [adCode] C2LS_SetPlayerInfo adCode
         * @property {string|null} [sign] C2LS_SetPlayerInfo sign
         */

        /**
         * Constructs a new C2LS_SetPlayerInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetPlayerInfo.
         * @implements IC2LS_SetPlayerInfo
         * @constructor
         * @param {Client2Server.IC2LS_SetPlayerInfo=} [p] Properties to set
         */
        function C2LS_SetPlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SetPlayerInfo gender.
         * @member {common.EGender} gender
         * @memberof Client2Server.C2LS_SetPlayerInfo
         * @instance
         */
        C2LS_SetPlayerInfo.prototype.gender = 0;

        /**
         * C2LS_SetPlayerInfo adCode.
         * @member {number} adCode
         * @memberof Client2Server.C2LS_SetPlayerInfo
         * @instance
         */
        C2LS_SetPlayerInfo.prototype.adCode = 0;

        /**
         * C2LS_SetPlayerInfo sign.
         * @member {string} sign
         * @memberof Client2Server.C2LS_SetPlayerInfo
         * @instance
         */
        C2LS_SetPlayerInfo.prototype.sign = "";

        /**
         * Encodes the specified C2LS_SetPlayerInfo message. Does not implicitly {@link Client2Server.C2LS_SetPlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetPlayerInfo
         * @static
         * @param {Client2Server.C2LS_SetPlayerInfo} m C2LS_SetPlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.gender != null && Object.hasOwnProperty.call(m, "gender"))
                w.uint32(8).int32(m.gender);
            if (m.adCode != null && Object.hasOwnProperty.call(m, "adCode"))
                w.uint32(16).int32(m.adCode);
            if (m.sign != null && Object.hasOwnProperty.call(m, "sign"))
                w.uint32(26).string(m.sign);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetPlayerInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10005 OpCode value
         */
        C2LS_SetPlayerInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10005] = "OpCode"] = 10005;
            return values;
        })();

        return C2LS_SetPlayerInfo;
    })();

    Client2Server.GetActivityStatus = (function() {

        /**
         * Properties of a GetActivityStatus.
         * @memberof Client2Server
         * @interface IGetActivityStatus
         */

        /**
         * Constructs a new GetActivityStatus.
         * @memberof Client2Server
         * @classdesc Represents a GetActivityStatus.
         * @implements IGetActivityStatus
         * @constructor
         * @param {Client2Server.IGetActivityStatus=} [p] Properties to set
         */
        function GetActivityStatus(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified GetActivityStatus message. Does not implicitly {@link Client2Server.GetActivityStatus.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.GetActivityStatus
         * @static
         * @param {Client2Server.GetActivityStatus} m GetActivityStatus message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetActivityStatus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.GetActivityStatus.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10006 OpCode value
         */
        GetActivityStatus.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10006] = "OpCode"] = 10006;
            return values;
        })();

        return GetActivityStatus;
    })();

    Client2Server.GetUserActivityData = (function() {

        /**
         * Properties of a GetUserActivityData.
         * @memberof Client2Server
         * @interface IGetUserActivityData
         * @property {number|null} [activityType] GetUserActivityData activityType
         */

        /**
         * Constructs a new GetUserActivityData.
         * @memberof Client2Server
         * @classdesc Represents a GetUserActivityData.
         * @implements IGetUserActivityData
         * @constructor
         * @param {Client2Server.IGetUserActivityData=} [p] Properties to set
         */
        function GetUserActivityData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetUserActivityData activityType.
         * @member {number} activityType
         * @memberof Client2Server.GetUserActivityData
         * @instance
         */
        GetUserActivityData.prototype.activityType = 0;

        /**
         * Encodes the specified GetUserActivityData message. Does not implicitly {@link Client2Server.GetUserActivityData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.GetUserActivityData
         * @static
         * @param {Client2Server.GetUserActivityData} m GetUserActivityData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserActivityData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.activityType != null && Object.hasOwnProperty.call(m, "activityType"))
                w.uint32(8).int32(m.activityType);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.GetUserActivityData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10007 OpCode value
         */
        GetUserActivityData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10007] = "OpCode"] = 10007;
            return values;
        })();

        return GetUserActivityData;
    })();

    Client2Server.C2LS_SetAdCode = (function() {

        /**
         * Properties of a C2LS_SetAdCode.
         * @memberof Client2Server
         * @interface IC2LS_SetAdCode
         * @property {string|null} [adCode] C2LS_SetAdCode adCode
         */

        /**
         * Constructs a new C2LS_SetAdCode.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetAdCode.
         * @implements IC2LS_SetAdCode
         * @constructor
         * @param {Client2Server.IC2LS_SetAdCode=} [p] Properties to set
         */
        function C2LS_SetAdCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SetAdCode adCode.
         * @member {string} adCode
         * @memberof Client2Server.C2LS_SetAdCode
         * @instance
         */
        C2LS_SetAdCode.prototype.adCode = "";

        /**
         * Encodes the specified C2LS_SetAdCode message. Does not implicitly {@link Client2Server.C2LS_SetAdCode.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetAdCode
         * @static
         * @param {Client2Server.C2LS_SetAdCode} m C2LS_SetAdCode message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetAdCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.adCode != null && Object.hasOwnProperty.call(m, "adCode"))
                w.uint32(10).string(m.adCode);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetAdCode.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10008 OpCode value
         */
        C2LS_SetAdCode.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10008] = "OpCode"] = 10008;
            return values;
        })();

        return C2LS_SetAdCode;
    })();

    Client2Server.C2LS_GetAdCode = (function() {

        /**
         * Properties of a C2LS_GetAdCode.
         * @memberof Client2Server
         * @interface IC2LS_GetAdCode
         */

        /**
         * Constructs a new C2LS_GetAdCode.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetAdCode.
         * @implements IC2LS_GetAdCode
         * @constructor
         * @param {Client2Server.IC2LS_GetAdCode=} [p] Properties to set
         */
        function C2LS_GetAdCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetAdCode message. Does not implicitly {@link Client2Server.C2LS_GetAdCode.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetAdCode
         * @static
         * @param {Client2Server.C2LS_GetAdCode} m C2LS_GetAdCode message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetAdCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetAdCode.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10009 OpCode value
         */
        C2LS_GetAdCode.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10009] = "OpCode"] = 10009;
            return values;
        })();

        return C2LS_GetAdCode;
    })();

    Client2Server.C2LS_UserBaseInfo = (function() {

        /**
         * Properties of a C2LS_UserBaseInfo.
         * @memberof Client2Server
         * @interface IC2LS_UserBaseInfo
         * @property {boolean|null} [isAdUser] C2LS_UserBaseInfo isAdUser
         */

        /**
         * Constructs a new C2LS_UserBaseInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_UserBaseInfo.
         * @implements IC2LS_UserBaseInfo
         * @constructor
         * @param {Client2Server.IC2LS_UserBaseInfo=} [p] Properties to set
         */
        function C2LS_UserBaseInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_UserBaseInfo isAdUser.
         * @member {boolean} isAdUser
         * @memberof Client2Server.C2LS_UserBaseInfo
         * @instance
         */
        C2LS_UserBaseInfo.prototype.isAdUser = false;

        /**
         * Encodes the specified C2LS_UserBaseInfo message. Does not implicitly {@link Client2Server.C2LS_UserBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_UserBaseInfo
         * @static
         * @param {Client2Server.C2LS_UserBaseInfo} m C2LS_UserBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_UserBaseInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isAdUser != null && Object.hasOwnProperty.call(m, "isAdUser"))
                w.uint32(8).bool(m.isAdUser);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_UserBaseInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10010 OpCode value
         */
        C2LS_UserBaseInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10010] = "OpCode"] = 10010;
            return values;
        })();

        return C2LS_UserBaseInfo;
    })();

    Client2Server.C2LS_StartGame = (function() {

        /**
         * Properties of a C2LS_StartGame.
         * @memberof Client2Server
         * @interface IC2LS_StartGame
         * @property {boolean|null} [startWithAd] C2LS_StartGame startWithAd
         * @property {boolean|null} [force] C2LS_StartGame force
         * @property {number|null} [levelId] C2LS_StartGame levelId
         */

        /**
         * Constructs a new C2LS_StartGame.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_StartGame.
         * @implements IC2LS_StartGame
         * @constructor
         * @param {Client2Server.IC2LS_StartGame=} [p] Properties to set
         */
        function C2LS_StartGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_StartGame startWithAd.
         * @member {boolean} startWithAd
         * @memberof Client2Server.C2LS_StartGame
         * @instance
         */
        C2LS_StartGame.prototype.startWithAd = false;

        /**
         * C2LS_StartGame force.
         * @member {boolean} force
         * @memberof Client2Server.C2LS_StartGame
         * @instance
         */
        C2LS_StartGame.prototype.force = false;

        /**
         * C2LS_StartGame levelId.
         * @member {number} levelId
         * @memberof Client2Server.C2LS_StartGame
         * @instance
         */
        C2LS_StartGame.prototype.levelId = 0;

        /**
         * Encodes the specified C2LS_StartGame message. Does not implicitly {@link Client2Server.C2LS_StartGame.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_StartGame
         * @static
         * @param {Client2Server.C2LS_StartGame} m C2LS_StartGame message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_StartGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.startWithAd != null && Object.hasOwnProperty.call(m, "startWithAd"))
                w.uint32(8).bool(m.startWithAd);
            if (m.force != null && Object.hasOwnProperty.call(m, "force"))
                w.uint32(16).bool(m.force);
            if (m.levelId != null && Object.hasOwnProperty.call(m, "levelId"))
                w.uint32(24).int32(m.levelId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_StartGame.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10011 OpCode value
         */
        C2LS_StartGame.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10011] = "OpCode"] = 10011;
            return values;
        })();

        return C2LS_StartGame;
    })();

    Client2Server.C2LS_EndGame = (function() {

        /**
         * Properties of a C2LS_EndGame.
         * @memberof Client2Server
         * @interface IC2LS_EndGame
         * @property {string|null} [matchToken] C2LS_EndGame matchToken
         */

        /**
         * Constructs a new C2LS_EndGame.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_EndGame.
         * @implements IC2LS_EndGame
         * @constructor
         * @param {Client2Server.IC2LS_EndGame=} [p] Properties to set
         */
        function C2LS_EndGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_EndGame matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_EndGame
         * @instance
         */
        C2LS_EndGame.prototype.matchToken = "";

        /**
         * Encodes the specified C2LS_EndGame message. Does not implicitly {@link Client2Server.C2LS_EndGame.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_EndGame
         * @static
         * @param {Client2Server.C2LS_EndGame} m C2LS_EndGame message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_EndGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_EndGame.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10012 OpCode value
         */
        C2LS_EndGame.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10012] = "OpCode"] = 10012;
            return values;
        })();

        return C2LS_EndGame;
    })();

    Client2Server.C2LS_SetGuide = (function() {

        /**
         * Properties of a C2LS_SetGuide.
         * @memberof Client2Server
         * @interface IC2LS_SetGuide
         * @property {number|null} [guideType] C2LS_SetGuide guideType
         * @property {boolean|null} [isFinish] C2LS_SetGuide isFinish
         */

        /**
         * Constructs a new C2LS_SetGuide.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetGuide.
         * @implements IC2LS_SetGuide
         * @constructor
         * @param {Client2Server.IC2LS_SetGuide=} [p] Properties to set
         */
        function C2LS_SetGuide(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SetGuide guideType.
         * @member {number} guideType
         * @memberof Client2Server.C2LS_SetGuide
         * @instance
         */
        C2LS_SetGuide.prototype.guideType = 0;

        /**
         * C2LS_SetGuide isFinish.
         * @member {boolean} isFinish
         * @memberof Client2Server.C2LS_SetGuide
         * @instance
         */
        C2LS_SetGuide.prototype.isFinish = false;

        /**
         * Encodes the specified C2LS_SetGuide message. Does not implicitly {@link Client2Server.C2LS_SetGuide.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetGuide
         * @static
         * @param {Client2Server.C2LS_SetGuide} m C2LS_SetGuide message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetGuide.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.guideType != null && Object.hasOwnProperty.call(m, "guideType"))
                w.uint32(8).int32(m.guideType);
            if (m.isFinish != null && Object.hasOwnProperty.call(m, "isFinish"))
                w.uint32(16).bool(m.isFinish);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetGuide.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10013 OpCode value
         */
        C2LS_SetGuide.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10013] = "OpCode"] = 10013;
            return values;
        })();

        return C2LS_SetGuide;
    })();

    Client2Server.C2LS_SetUserInfo = (function() {

        /**
         * Properties of a C2LS_SetUserInfo.
         * @memberof Client2Server
         * @interface IC2LS_SetUserInfo
         * @property {protocol.UserInfo|null} [userInfo] C2LS_SetUserInfo userInfo
         * @property {protocol.CharacterData|null} [characterData] C2LS_SetUserInfo characterData
         */

        /**
         * Constructs a new C2LS_SetUserInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetUserInfo.
         * @implements IC2LS_SetUserInfo
         * @constructor
         * @param {Client2Server.IC2LS_SetUserInfo=} [p] Properties to set
         */
        function C2LS_SetUserInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SetUserInfo userInfo.
         * @member {protocol.UserInfo|null|undefined} userInfo
         * @memberof Client2Server.C2LS_SetUserInfo
         * @instance
         */
        C2LS_SetUserInfo.prototype.userInfo = null;

        /**
         * C2LS_SetUserInfo characterData.
         * @member {protocol.CharacterData|null|undefined} characterData
         * @memberof Client2Server.C2LS_SetUserInfo
         * @instance
         */
        C2LS_SetUserInfo.prototype.characterData = null;

        /**
         * Encodes the specified C2LS_SetUserInfo message. Does not implicitly {@link Client2Server.C2LS_SetUserInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetUserInfo
         * @static
         * @param {Client2Server.C2LS_SetUserInfo} m C2LS_SetUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetUserInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.userInfo != null && Object.hasOwnProperty.call(m, "userInfo"))
                $root.protocol.UserInfo.encode(m.userInfo, w.uint32(18).fork()).ldelim();
            if (m.characterData != null && Object.hasOwnProperty.call(m, "characterData"))
                $root.protocol.CharacterData.encode(m.characterData, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetUserInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10014 OpCode value
         */
        C2LS_SetUserInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10014] = "OpCode"] = 10014;
            return values;
        })();

        return C2LS_SetUserInfo;
    })();

    Client2Server.C2LS_SetGuideFinish = (function() {

        /**
         * Properties of a C2LS_SetGuideFinish.
         * @memberof Client2Server
         * @interface IC2LS_SetGuideFinish
         * @property {number|null} [guideStageId] C2LS_SetGuideFinish guideStageId
         */

        /**
         * Constructs a new C2LS_SetGuideFinish.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetGuideFinish.
         * @implements IC2LS_SetGuideFinish
         * @constructor
         * @param {Client2Server.IC2LS_SetGuideFinish=} [p] Properties to set
         */
        function C2LS_SetGuideFinish(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SetGuideFinish guideStageId.
         * @member {number} guideStageId
         * @memberof Client2Server.C2LS_SetGuideFinish
         * @instance
         */
        C2LS_SetGuideFinish.prototype.guideStageId = 0;

        /**
         * Encodes the specified C2LS_SetGuideFinish message. Does not implicitly {@link Client2Server.C2LS_SetGuideFinish.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetGuideFinish
         * @static
         * @param {Client2Server.C2LS_SetGuideFinish} m C2LS_SetGuideFinish message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetGuideFinish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.guideStageId != null && Object.hasOwnProperty.call(m, "guideStageId"))
                w.uint32(8).int32(m.guideStageId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetGuideFinish.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10015 OpCode value
         */
        C2LS_SetGuideFinish.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10015] = "OpCode"] = 10015;
            return values;
        })();

        return C2LS_SetGuideFinish;
    })();

    Client2Server.C2LS_SetNewbieFinish = (function() {

        /**
         * Properties of a C2LS_SetNewbieFinish.
         * @memberof Client2Server
         * @interface IC2LS_SetNewbieFinish
         */

        /**
         * Constructs a new C2LS_SetNewbieFinish.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetNewbieFinish.
         * @implements IC2LS_SetNewbieFinish
         * @constructor
         * @param {Client2Server.IC2LS_SetNewbieFinish=} [p] Properties to set
         */
        function C2LS_SetNewbieFinish(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_SetNewbieFinish message. Does not implicitly {@link Client2Server.C2LS_SetNewbieFinish.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetNewbieFinish
         * @static
         * @param {Client2Server.C2LS_SetNewbieFinish} m C2LS_SetNewbieFinish message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetNewbieFinish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetNewbieFinish.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10016 OpCode value
         */
        C2LS_SetNewbieFinish.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10016] = "OpCode"] = 10016;
            return values;
        })();

        return C2LS_SetNewbieFinish;
    })();

    Client2Server.C2LS_SetAuthorize = (function() {

        /**
         * Properties of a C2LS_SetAuthorize.
         * @memberof Client2Server
         * @interface IC2LS_SetAuthorize
         * @property {boolean|null} [isAuthorized] C2LS_SetAuthorize isAuthorized
         */

        /**
         * Constructs a new C2LS_SetAuthorize.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SetAuthorize.
         * @implements IC2LS_SetAuthorize
         * @constructor
         * @param {Client2Server.IC2LS_SetAuthorize=} [p] Properties to set
         */
        function C2LS_SetAuthorize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SetAuthorize isAuthorized.
         * @member {boolean} isAuthorized
         * @memberof Client2Server.C2LS_SetAuthorize
         * @instance
         */
        C2LS_SetAuthorize.prototype.isAuthorized = false;

        /**
         * Encodes the specified C2LS_SetAuthorize message. Does not implicitly {@link Client2Server.C2LS_SetAuthorize.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SetAuthorize
         * @static
         * @param {Client2Server.C2LS_SetAuthorize} m C2LS_SetAuthorize message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SetAuthorize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.isAuthorized != null && Object.hasOwnProperty.call(m, "isAuthorized"))
                w.uint32(8).bool(m.isAuthorized);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SetAuthorize.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10017 OpCode value
         */
        C2LS_SetAuthorize.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10017] = "OpCode"] = 10017;
            return values;
        })();

        return C2LS_SetAuthorize;
    })();

    Client2Server.C2LS_UpdateFuncStage = (function() {

        /**
         * Properties of a C2LS_UpdateFuncStage.
         * @memberof Client2Server
         * @interface IC2LS_UpdateFuncStage
         * @property {number|null} [funcUnlockStageId] C2LS_UpdateFuncStage funcUnlockStageId
         */

        /**
         * Constructs a new C2LS_UpdateFuncStage.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_UpdateFuncStage.
         * @implements IC2LS_UpdateFuncStage
         * @constructor
         * @param {Client2Server.IC2LS_UpdateFuncStage=} [p] Properties to set
         */
        function C2LS_UpdateFuncStage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_UpdateFuncStage funcUnlockStageId.
         * @member {number} funcUnlockStageId
         * @memberof Client2Server.C2LS_UpdateFuncStage
         * @instance
         */
        C2LS_UpdateFuncStage.prototype.funcUnlockStageId = 0;

        /**
         * Encodes the specified C2LS_UpdateFuncStage message. Does not implicitly {@link Client2Server.C2LS_UpdateFuncStage.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_UpdateFuncStage
         * @static
         * @param {Client2Server.C2LS_UpdateFuncStage} m C2LS_UpdateFuncStage message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_UpdateFuncStage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.funcUnlockStageId != null && Object.hasOwnProperty.call(m, "funcUnlockStageId"))
                w.uint32(8).int32(m.funcUnlockStageId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_UpdateFuncStage.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10018 OpCode value
         */
        C2LS_UpdateFuncStage.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10018] = "OpCode"] = 10018;
            return values;
        })();

        return C2LS_UpdateFuncStage;
    })();

    Client2Server.C2LS_NoticeGamePassed = (function() {

        /**
         * Properties of a C2LS_NoticeGamePassed.
         * @memberof Client2Server
         * @interface IC2LS_NoticeGamePassed
         * @property {string|null} [matchToken] C2LS_NoticeGamePassed matchToken
         * @property {number|null} [score] C2LS_NoticeGamePassed score
         */

        /**
         * Constructs a new C2LS_NoticeGamePassed.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_NoticeGamePassed.
         * @implements IC2LS_NoticeGamePassed
         * @constructor
         * @param {Client2Server.IC2LS_NoticeGamePassed=} [p] Properties to set
         */
        function C2LS_NoticeGamePassed(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_NoticeGamePassed matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_NoticeGamePassed
         * @instance
         */
        C2LS_NoticeGamePassed.prototype.matchToken = "";

        /**
         * C2LS_NoticeGamePassed score.
         * @member {number} score
         * @memberof Client2Server.C2LS_NoticeGamePassed
         * @instance
         */
        C2LS_NoticeGamePassed.prototype.score = 0;

        /**
         * Encodes the specified C2LS_NoticeGamePassed message. Does not implicitly {@link Client2Server.C2LS_NoticeGamePassed.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_NoticeGamePassed
         * @static
         * @param {Client2Server.C2LS_NoticeGamePassed} m C2LS_NoticeGamePassed message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_NoticeGamePassed.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(16).int32(m.score);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_NoticeGamePassed.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10020 OpCode value
         */
        C2LS_NoticeGamePassed.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10020] = "OpCode"] = 10020;
            return values;
        })();

        return C2LS_NoticeGamePassed;
    })();

    Client2Server.C2LS_InfiniteScore = (function() {

        /**
         * Properties of a C2LS_InfiniteScore.
         * @memberof Client2Server
         * @interface IC2LS_InfiniteScore
         * @property {number|null} [score] C2LS_InfiniteScore score
         */

        /**
         * Constructs a new C2LS_InfiniteScore.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_InfiniteScore.
         * @implements IC2LS_InfiniteScore
         * @constructor
         * @param {Client2Server.IC2LS_InfiniteScore=} [p] Properties to set
         */
        function C2LS_InfiniteScore(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_InfiniteScore score.
         * @member {number} score
         * @memberof Client2Server.C2LS_InfiniteScore
         * @instance
         */
        C2LS_InfiniteScore.prototype.score = 0;

        /**
         * Encodes the specified C2LS_InfiniteScore message. Does not implicitly {@link Client2Server.C2LS_InfiniteScore.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_InfiniteScore
         * @static
         * @param {Client2Server.C2LS_InfiniteScore} m C2LS_InfiniteScore message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_InfiniteScore.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(8).int32(m.score);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_InfiniteScore.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10021 OpCode value
         */
        C2LS_InfiniteScore.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10021] = "OpCode"] = 10021;
            return values;
        })();

        return C2LS_InfiniteScore;
    })();

    Client2Server.C2LS_GetInfiniteRankList = (function() {

        /**
         * Properties of a C2LS_GetInfiniteRankList.
         * @memberof Client2Server
         * @interface IC2LS_GetInfiniteRankList
         */

        /**
         * Constructs a new C2LS_GetInfiniteRankList.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetInfiniteRankList.
         * @implements IC2LS_GetInfiniteRankList
         * @constructor
         * @param {Client2Server.IC2LS_GetInfiniteRankList=} [p] Properties to set
         */
        function C2LS_GetInfiniteRankList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetInfiniteRankList message. Does not implicitly {@link Client2Server.C2LS_GetInfiniteRankList.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetInfiniteRankList
         * @static
         * @param {Client2Server.C2LS_GetInfiniteRankList} m C2LS_GetInfiniteRankList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetInfiniteRankList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetInfiniteRankList.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10022 OpCode value
         */
        C2LS_GetInfiniteRankList.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10022] = "OpCode"] = 10022;
            return values;
        })();

        return C2LS_GetInfiniteRankList;
    })();

    Client2Server.C2LS_StatisticsAdd = (function() {

        /**
         * Properties of a C2LS_StatisticsAdd.
         * @memberof Client2Server
         * @interface IC2LS_StatisticsAdd
         * @property {Client2Server.C2LS_StatisticsAdd.Action|null} [action] C2LS_StatisticsAdd action
         * @property {number|null} [addCount] C2LS_StatisticsAdd addCount
         */

        /**
         * Constructs a new C2LS_StatisticsAdd.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_StatisticsAdd.
         * @implements IC2LS_StatisticsAdd
         * @constructor
         * @param {Client2Server.IC2LS_StatisticsAdd=} [p] Properties to set
         */
        function C2LS_StatisticsAdd(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_StatisticsAdd action.
         * @member {Client2Server.C2LS_StatisticsAdd.Action} action
         * @memberof Client2Server.C2LS_StatisticsAdd
         * @instance
         */
        C2LS_StatisticsAdd.prototype.action = 0;

        /**
         * C2LS_StatisticsAdd addCount.
         * @member {number} addCount
         * @memberof Client2Server.C2LS_StatisticsAdd
         * @instance
         */
        C2LS_StatisticsAdd.prototype.addCount = 0;

        /**
         * Encodes the specified C2LS_StatisticsAdd message. Does not implicitly {@link Client2Server.C2LS_StatisticsAdd.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_StatisticsAdd
         * @static
         * @param {Client2Server.C2LS_StatisticsAdd} m C2LS_StatisticsAdd message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_StatisticsAdd.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.action != null && Object.hasOwnProperty.call(m, "action"))
                w.uint32(8).int32(m.action);
            if (m.addCount != null && Object.hasOwnProperty.call(m, "addCount"))
                w.uint32(16).int32(m.addCount);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_StatisticsAdd.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10023 OpCode value
         */
        C2LS_StatisticsAdd.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10023] = "OpCode"] = 10023;
            return values;
        })();

        /**
         * Action enum.
         * @name Client2Server.C2LS_StatisticsAdd.Action
         * @enum {number}
         * @property {number} Default=0 Default value
         * @property {number} WatchAd=1 WatchAd value
         */
        C2LS_StatisticsAdd.Action = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Default"] = 0;
            values[valuesById[1] = "WatchAd"] = 1;
            return values;
        })();

        return C2LS_StatisticsAdd;
    })();

    Client2Server.C2LS_StatisticsGet = (function() {

        /**
         * Properties of a C2LS_StatisticsGet.
         * @memberof Client2Server
         * @interface IC2LS_StatisticsGet
         */

        /**
         * Constructs a new C2LS_StatisticsGet.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_StatisticsGet.
         * @implements IC2LS_StatisticsGet
         * @constructor
         * @param {Client2Server.IC2LS_StatisticsGet=} [p] Properties to set
         */
        function C2LS_StatisticsGet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_StatisticsGet message. Does not implicitly {@link Client2Server.C2LS_StatisticsGet.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_StatisticsGet
         * @static
         * @param {Client2Server.C2LS_StatisticsGet} m C2LS_StatisticsGet message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_StatisticsGet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_StatisticsGet.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10024 OpCode value
         */
        C2LS_StatisticsGet.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10024] = "OpCode"] = 10024;
            return values;
        })();

        return C2LS_StatisticsGet;
    })();

    Client2Server.C2LS_ShareCountGet = (function() {

        /**
         * Properties of a C2LS_ShareCountGet.
         * @memberof Client2Server
         * @interface IC2LS_ShareCountGet
         */

        /**
         * Constructs a new C2LS_ShareCountGet.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ShareCountGet.
         * @implements IC2LS_ShareCountGet
         * @constructor
         * @param {Client2Server.IC2LS_ShareCountGet=} [p] Properties to set
         */
        function C2LS_ShareCountGet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_ShareCountGet message. Does not implicitly {@link Client2Server.C2LS_ShareCountGet.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ShareCountGet
         * @static
         * @param {Client2Server.C2LS_ShareCountGet} m C2LS_ShareCountGet message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ShareCountGet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ShareCountGet.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10025 OpCode value
         */
        C2LS_ShareCountGet.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10025] = "OpCode"] = 10025;
            return values;
        })();

        return C2LS_ShareCountGet;
    })();

    /**
     * EPuzzlePropType enum.
     * @name Client2Server.EPuzzlePropType
     * @enum {number}
     * @property {number} PNone=0 PNone value
     * @property {number} Remove=1 Remove value
     * @property {number} Revoke=2 Revoke value
     * @property {number} Random=3 Random value
     * @property {number} Revive=4 Revive value
     * @property {number} Prompt=5 Prompt value
     * @property {number} ExtraTime=6 ExtraTime value
     */
    Client2Server.EPuzzlePropType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PNone"] = 0;
        values[valuesById[1] = "Remove"] = 1;
        values[valuesById[2] = "Revoke"] = 2;
        values[valuesById[3] = "Random"] = 3;
        values[valuesById[4] = "Revive"] = 4;
        values[valuesById[5] = "Prompt"] = 5;
        values[valuesById[6] = "ExtraTime"] = 6;
        return values;
    })();

    Client2Server.C2LS_ShareCountSet = (function() {

        /**
         * Properties of a C2LS_ShareCountSet.
         * @memberof Client2Server
         * @interface IC2LS_ShareCountSet
         * @property {Client2Server.EPuzzlePropType|null} [shareItemType] C2LS_ShareCountSet shareItemType
         */

        /**
         * Constructs a new C2LS_ShareCountSet.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ShareCountSet.
         * @implements IC2LS_ShareCountSet
         * @constructor
         * @param {Client2Server.IC2LS_ShareCountSet=} [p] Properties to set
         */
        function C2LS_ShareCountSet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ShareCountSet shareItemType.
         * @member {Client2Server.EPuzzlePropType} shareItemType
         * @memberof Client2Server.C2LS_ShareCountSet
         * @instance
         */
        C2LS_ShareCountSet.prototype.shareItemType = 0;

        /**
         * Encodes the specified C2LS_ShareCountSet message. Does not implicitly {@link Client2Server.C2LS_ShareCountSet.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ShareCountSet
         * @static
         * @param {Client2Server.C2LS_ShareCountSet} m C2LS_ShareCountSet message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ShareCountSet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.shareItemType != null && Object.hasOwnProperty.call(m, "shareItemType"))
                w.uint32(8).int32(m.shareItemType);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ShareCountSet.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10026 OpCode value
         */
        C2LS_ShareCountSet.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10026] = "OpCode"] = 10026;
            return values;
        })();

        return C2LS_ShareCountSet;
    })();

    Client2Server.C2LS_GetDressUpInfo = (function() {

        /**
         * Properties of a C2LS_GetDressUpInfo.
         * @memberof Client2Server
         * @interface IC2LS_GetDressUpInfo
         */

        /**
         * Constructs a new C2LS_GetDressUpInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetDressUpInfo.
         * @implements IC2LS_GetDressUpInfo
         * @constructor
         * @param {Client2Server.IC2LS_GetDressUpInfo=} [p] Properties to set
         */
        function C2LS_GetDressUpInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetDressUpInfo message. Does not implicitly {@link Client2Server.C2LS_GetDressUpInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetDressUpInfo
         * @static
         * @param {Client2Server.C2LS_GetDressUpInfo} m C2LS_GetDressUpInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetDressUpInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetDressUpInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10027 OpCode value
         */
        C2LS_GetDressUpInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10027] = "OpCode"] = 10027;
            return values;
        })();

        return C2LS_GetDressUpInfo;
    })();

    Client2Server.C2LS_ViewSkins = (function() {

        /**
         * Properties of a C2LS_ViewSkins.
         * @memberof Client2Server
         * @interface IC2LS_ViewSkins
         * @property {Array.<number>|null} [skinType] C2LS_ViewSkins skinType
         */

        /**
         * Constructs a new C2LS_ViewSkins.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ViewSkins.
         * @implements IC2LS_ViewSkins
         * @constructor
         * @param {Client2Server.IC2LS_ViewSkins=} [p] Properties to set
         */
        function C2LS_ViewSkins(p) {
            this.skinType = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ViewSkins skinType.
         * @member {Array.<number>} skinType
         * @memberof Client2Server.C2LS_ViewSkins
         * @instance
         */
        C2LS_ViewSkins.prototype.skinType = $util.emptyArray;

        /**
         * Encodes the specified C2LS_ViewSkins message. Does not implicitly {@link Client2Server.C2LS_ViewSkins.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ViewSkins
         * @static
         * @param {Client2Server.C2LS_ViewSkins} m C2LS_ViewSkins message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ViewSkins.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.skinType != null && m.skinType.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.skinType.length; ++i)
                    w.int32(m.skinType[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ViewSkins.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10028 OpCode value
         */
        C2LS_ViewSkins.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10028] = "OpCode"] = 10028;
            return values;
        })();

        return C2LS_ViewSkins;
    })();

    Client2Server.C2LS_SkinDressUp = (function() {

        /**
         * Properties of a C2LS_SkinDressUp.
         * @memberof Client2Server
         * @interface IC2LS_SkinDressUp
         * @property {Array.<number>|null} [skinIds] C2LS_SkinDressUp skinIds
         */

        /**
         * Constructs a new C2LS_SkinDressUp.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SkinDressUp.
         * @implements IC2LS_SkinDressUp
         * @constructor
         * @param {Client2Server.IC2LS_SkinDressUp=} [p] Properties to set
         */
        function C2LS_SkinDressUp(p) {
            this.skinIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SkinDressUp skinIds.
         * @member {Array.<number>} skinIds
         * @memberof Client2Server.C2LS_SkinDressUp
         * @instance
         */
        C2LS_SkinDressUp.prototype.skinIds = $util.emptyArray;

        /**
         * Encodes the specified C2LS_SkinDressUp message. Does not implicitly {@link Client2Server.C2LS_SkinDressUp.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SkinDressUp
         * @static
         * @param {Client2Server.C2LS_SkinDressUp} m C2LS_SkinDressUp message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SkinDressUp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.skinIds != null && m.skinIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.skinIds.length; ++i)
                    w.int32(m.skinIds[i]);
                w.ldelim();
            }
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SkinDressUp.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10029 OpCode value
         */
        C2LS_SkinDressUp.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10029] = "OpCode"] = 10029;
            return values;
        })();

        return C2LS_SkinDressUp;
    })();

    Client2Server.C2LS_GetDailyLevelData = (function() {

        /**
         * Properties of a C2LS_GetDailyLevelData.
         * @memberof Client2Server
         * @interface IC2LS_GetDailyLevelData
         */

        /**
         * Constructs a new C2LS_GetDailyLevelData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetDailyLevelData.
         * @implements IC2LS_GetDailyLevelData
         * @constructor
         * @param {Client2Server.IC2LS_GetDailyLevelData=} [p] Properties to set
         */
        function C2LS_GetDailyLevelData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetDailyLevelData message. Does not implicitly {@link Client2Server.C2LS_GetDailyLevelData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetDailyLevelData
         * @static
         * @param {Client2Server.C2LS_GetDailyLevelData} m C2LS_GetDailyLevelData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetDailyLevelData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetDailyLevelData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10030 OpCode value
         */
        C2LS_GetDailyLevelData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10030] = "OpCode"] = 10030;
            return values;
        })();

        return C2LS_GetDailyLevelData;
    })();

    Client2Server.C2LS_SyncGameData = (function() {

        /**
         * Properties of a C2LS_SyncGameData.
         * @memberof Client2Server
         * @interface IC2LS_SyncGameData
         * @property {string|null} [token] C2LS_SyncGameData token
         * @property {string|null} [stepData] C2LS_SyncGameData stepData
         * @property {string|null} [snapshot] C2LS_SyncGameData snapshot
         * @property {number|null} [minStep] C2LS_SyncGameData minStep
         * @property {number|null} [maxStep] C2LS_SyncGameData maxStep
         */

        /**
         * Constructs a new C2LS_SyncGameData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SyncGameData.
         * @implements IC2LS_SyncGameData
         * @constructor
         * @param {Client2Server.IC2LS_SyncGameData=} [p] Properties to set
         */
        function C2LS_SyncGameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SyncGameData token.
         * @member {string} token
         * @memberof Client2Server.C2LS_SyncGameData
         * @instance
         */
        C2LS_SyncGameData.prototype.token = "";

        /**
         * C2LS_SyncGameData stepData.
         * @member {string} stepData
         * @memberof Client2Server.C2LS_SyncGameData
         * @instance
         */
        C2LS_SyncGameData.prototype.stepData = "";

        /**
         * C2LS_SyncGameData snapshot.
         * @member {string} snapshot
         * @memberof Client2Server.C2LS_SyncGameData
         * @instance
         */
        C2LS_SyncGameData.prototype.snapshot = "";

        /**
         * C2LS_SyncGameData minStep.
         * @member {number} minStep
         * @memberof Client2Server.C2LS_SyncGameData
         * @instance
         */
        C2LS_SyncGameData.prototype.minStep = 0;

        /**
         * C2LS_SyncGameData maxStep.
         * @member {number} maxStep
         * @memberof Client2Server.C2LS_SyncGameData
         * @instance
         */
        C2LS_SyncGameData.prototype.maxStep = 0;

        /**
         * Encodes the specified C2LS_SyncGameData message. Does not implicitly {@link Client2Server.C2LS_SyncGameData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SyncGameData
         * @static
         * @param {Client2Server.C2LS_SyncGameData} m C2LS_SyncGameData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SyncGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(10).string(m.token);
            if (m.stepData != null && Object.hasOwnProperty.call(m, "stepData"))
                w.uint32(18).string(m.stepData);
            if (m.snapshot != null && Object.hasOwnProperty.call(m, "snapshot"))
                w.uint32(26).string(m.snapshot);
            if (m.minStep != null && Object.hasOwnProperty.call(m, "minStep"))
                w.uint32(32).int32(m.minStep);
            if (m.maxStep != null && Object.hasOwnProperty.call(m, "maxStep"))
                w.uint32(40).int32(m.maxStep);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SyncGameData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10031 OpCode value
         */
        C2LS_SyncGameData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10031] = "OpCode"] = 10031;
            return values;
        })();

        return C2LS_SyncGameData;
    })();

    Client2Server.C2LS_RestartGame = (function() {

        /**
         * Properties of a C2LS_RestartGame.
         * @memberof Client2Server
         * @interface IC2LS_RestartGame
         * @property {string|null} [matchToken] C2LS_RestartGame matchToken
         */

        /**
         * Constructs a new C2LS_RestartGame.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_RestartGame.
         * @implements IC2LS_RestartGame
         * @constructor
         * @param {Client2Server.IC2LS_RestartGame=} [p] Properties to set
         */
        function C2LS_RestartGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_RestartGame matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_RestartGame
         * @instance
         */
        C2LS_RestartGame.prototype.matchToken = "";

        /**
         * Encodes the specified C2LS_RestartGame message. Does not implicitly {@link Client2Server.C2LS_RestartGame.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_RestartGame
         * @static
         * @param {Client2Server.C2LS_RestartGame} m C2LS_RestartGame message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_RestartGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_RestartGame.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10032 OpCode value
         */
        C2LS_RestartGame.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10032] = "OpCode"] = 10032;
            return values;
        })();

        return C2LS_RestartGame;
    })();

    Client2Server.C2LS_StartEndless = (function() {

        /**
         * Properties of a C2LS_StartEndless.
         * @memberof Client2Server
         * @interface IC2LS_StartEndless
         * @property {boolean|null} [startWithAd] C2LS_StartEndless startWithAd
         * @property {boolean|null} [force] C2LS_StartEndless force
         */

        /**
         * Constructs a new C2LS_StartEndless.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_StartEndless.
         * @implements IC2LS_StartEndless
         * @constructor
         * @param {Client2Server.IC2LS_StartEndless=} [p] Properties to set
         */
        function C2LS_StartEndless(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_StartEndless startWithAd.
         * @member {boolean} startWithAd
         * @memberof Client2Server.C2LS_StartEndless
         * @instance
         */
        C2LS_StartEndless.prototype.startWithAd = false;

        /**
         * C2LS_StartEndless force.
         * @member {boolean} force
         * @memberof Client2Server.C2LS_StartEndless
         * @instance
         */
        C2LS_StartEndless.prototype.force = false;

        /**
         * Encodes the specified C2LS_StartEndless message. Does not implicitly {@link Client2Server.C2LS_StartEndless.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_StartEndless
         * @static
         * @param {Client2Server.C2LS_StartEndless} m C2LS_StartEndless message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_StartEndless.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.startWithAd != null && Object.hasOwnProperty.call(m, "startWithAd"))
                w.uint32(8).bool(m.startWithAd);
            if (m.force != null && Object.hasOwnProperty.call(m, "force"))
                w.uint32(16).bool(m.force);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_StartEndless.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10035 OpCode value
         */
        C2LS_StartEndless.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10035] = "OpCode"] = 10035;
            return values;
        })();

        return C2LS_StartEndless;
    })();

    Client2Server.C2LS_RestartEndless = (function() {

        /**
         * Properties of a C2LS_RestartEndless.
         * @memberof Client2Server
         * @interface IC2LS_RestartEndless
         * @property {string|null} [matchToken] C2LS_RestartEndless matchToken
         */

        /**
         * Constructs a new C2LS_RestartEndless.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_RestartEndless.
         * @implements IC2LS_RestartEndless
         * @constructor
         * @param {Client2Server.IC2LS_RestartEndless=} [p] Properties to set
         */
        function C2LS_RestartEndless(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_RestartEndless matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_RestartEndless
         * @instance
         */
        C2LS_RestartEndless.prototype.matchToken = "";

        /**
         * Encodes the specified C2LS_RestartEndless message. Does not implicitly {@link Client2Server.C2LS_RestartEndless.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_RestartEndless
         * @static
         * @param {Client2Server.C2LS_RestartEndless} m C2LS_RestartEndless message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_RestartEndless.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_RestartEndless.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10036 OpCode value
         */
        C2LS_RestartEndless.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10036] = "OpCode"] = 10036;
            return values;
        })();

        return C2LS_RestartEndless;
    })();

    Client2Server.C2LS_EndlessGameOver = (function() {

        /**
         * Properties of a C2LS_EndlessGameOver.
         * @memberof Client2Server
         * @interface IC2LS_EndlessGameOver
         * @property {string|null} [matchToken] C2LS_EndlessGameOver matchToken
         * @property {number|null} [score] C2LS_EndlessGameOver score
         * @property {number|null} [time] C2LS_EndlessGameOver time
         */

        /**
         * Constructs a new C2LS_EndlessGameOver.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_EndlessGameOver.
         * @implements IC2LS_EndlessGameOver
         * @constructor
         * @param {Client2Server.IC2LS_EndlessGameOver=} [p] Properties to set
         */
        function C2LS_EndlessGameOver(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_EndlessGameOver matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_EndlessGameOver
         * @instance
         */
        C2LS_EndlessGameOver.prototype.matchToken = "";

        /**
         * C2LS_EndlessGameOver score.
         * @member {number} score
         * @memberof Client2Server.C2LS_EndlessGameOver
         * @instance
         */
        C2LS_EndlessGameOver.prototype.score = 0;

        /**
         * C2LS_EndlessGameOver time.
         * @member {number} time
         * @memberof Client2Server.C2LS_EndlessGameOver
         * @instance
         */
        C2LS_EndlessGameOver.prototype.time = 0;

        /**
         * Encodes the specified C2LS_EndlessGameOver message. Does not implicitly {@link Client2Server.C2LS_EndlessGameOver.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_EndlessGameOver
         * @static
         * @param {Client2Server.C2LS_EndlessGameOver} m C2LS_EndlessGameOver message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_EndlessGameOver.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(16).int32(m.score);
            if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                w.uint32(24).int32(m.time);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_EndlessGameOver.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10037 OpCode value
         */
        C2LS_EndlessGameOver.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10037] = "OpCode"] = 10037;
            return values;
        })();

        return C2LS_EndlessGameOver;
    })();

    Client2Server.C2LS_SettleSalary = (function() {

        /**
         * Properties of a C2LS_SettleSalary.
         * @memberof Client2Server
         * @interface IC2LS_SettleSalary
         */

        /**
         * Constructs a new C2LS_SettleSalary.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SettleSalary.
         * @implements IC2LS_SettleSalary
         * @constructor
         * @param {Client2Server.IC2LS_SettleSalary=} [p] Properties to set
         */
        function C2LS_SettleSalary(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_SettleSalary message. Does not implicitly {@link Client2Server.C2LS_SettleSalary.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SettleSalary
         * @static
         * @param {Client2Server.C2LS_SettleSalary} m C2LS_SettleSalary message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SettleSalary.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SettleSalary.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10038 OpCode value
         */
        C2LS_SettleSalary.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10038] = "OpCode"] = 10038;
            return values;
        })();

        return C2LS_SettleSalary;
    })();

    Client2Server.C2LS_ShopInfo = (function() {

        /**
         * Properties of a C2LS_ShopInfo.
         * @memberof Client2Server
         * @interface IC2LS_ShopInfo
         */

        /**
         * Constructs a new C2LS_ShopInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ShopInfo.
         * @implements IC2LS_ShopInfo
         * @constructor
         * @param {Client2Server.IC2LS_ShopInfo=} [p] Properties to set
         */
        function C2LS_ShopInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_ShopInfo message. Does not implicitly {@link Client2Server.C2LS_ShopInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ShopInfo
         * @static
         * @param {Client2Server.C2LS_ShopInfo} m C2LS_ShopInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ShopInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10039 OpCode value
         */
        C2LS_ShopInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10039] = "OpCode"] = 10039;
            return values;
        })();

        return C2LS_ShopInfo;
    })();

    Client2Server.C2LS_ShopRefresh = (function() {

        /**
         * Properties of a C2LS_ShopRefresh.
         * @memberof Client2Server
         * @interface IC2LS_ShopRefresh
         */

        /**
         * Constructs a new C2LS_ShopRefresh.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ShopRefresh.
         * @implements IC2LS_ShopRefresh
         * @constructor
         * @param {Client2Server.IC2LS_ShopRefresh=} [p] Properties to set
         */
        function C2LS_ShopRefresh(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_ShopRefresh message. Does not implicitly {@link Client2Server.C2LS_ShopRefresh.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ShopRefresh
         * @static
         * @param {Client2Server.C2LS_ShopRefresh} m C2LS_ShopRefresh message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ShopRefresh.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ShopRefresh.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10040 OpCode value
         */
        C2LS_ShopRefresh.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10040] = "OpCode"] = 10040;
            return values;
        })();

        return C2LS_ShopRefresh;
    })();

    Client2Server.C2LS_ShopBuy = (function() {

        /**
         * Properties of a C2LS_ShopBuy.
         * @memberof Client2Server
         * @interface IC2LS_ShopBuy
         * @property {number|null} [itemId] C2LS_ShopBuy itemId
         */

        /**
         * Constructs a new C2LS_ShopBuy.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ShopBuy.
         * @implements IC2LS_ShopBuy
         * @constructor
         * @param {Client2Server.IC2LS_ShopBuy=} [p] Properties to set
         */
        function C2LS_ShopBuy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ShopBuy itemId.
         * @member {number} itemId
         * @memberof Client2Server.C2LS_ShopBuy
         * @instance
         */
        C2LS_ShopBuy.prototype.itemId = 0;

        /**
         * Encodes the specified C2LS_ShopBuy message. Does not implicitly {@link Client2Server.C2LS_ShopBuy.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ShopBuy
         * @static
         * @param {Client2Server.C2LS_ShopBuy} m C2LS_ShopBuy message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ShopBuy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.itemId != null && Object.hasOwnProperty.call(m, "itemId"))
                w.uint32(8).int32(m.itemId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ShopBuy.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10041 OpCode value
         */
        C2LS_ShopBuy.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10041] = "OpCode"] = 10041;
            return values;
        })();

        return C2LS_ShopBuy;
    })();

    Client2Server.C2LS_RequestGameData = (function() {

        /**
         * Properties of a C2LS_RequestGameData.
         * @memberof Client2Server
         * @interface IC2LS_RequestGameData
         */

        /**
         * Constructs a new C2LS_RequestGameData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_RequestGameData.
         * @implements IC2LS_RequestGameData
         * @constructor
         * @param {Client2Server.IC2LS_RequestGameData=} [p] Properties to set
         */
        function C2LS_RequestGameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_RequestGameData message. Does not implicitly {@link Client2Server.C2LS_RequestGameData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_RequestGameData
         * @static
         * @param {Client2Server.C2LS_RequestGameData} m C2LS_RequestGameData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_RequestGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_RequestGameData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10042 OpCode value
         */
        C2LS_RequestGameData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10042] = "OpCode"] = 10042;
            return values;
        })();

        return C2LS_RequestGameData;
    })();

    Client2Server.C2LS_SyncEndlessGameData = (function() {

        /**
         * Properties of a C2LS_SyncEndlessGameData.
         * @memberof Client2Server
         * @interface IC2LS_SyncEndlessGameData
         * @property {string|null} [token] C2LS_SyncEndlessGameData token
         * @property {string|null} [stepData] C2LS_SyncEndlessGameData stepData
         * @property {string|null} [snapshot] C2LS_SyncEndlessGameData snapshot
         * @property {number|null} [minStep] C2LS_SyncEndlessGameData minStep
         * @property {number|null} [maxStep] C2LS_SyncEndlessGameData maxStep
         * @property {number|null} [score] C2LS_SyncEndlessGameData score
         */

        /**
         * Constructs a new C2LS_SyncEndlessGameData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SyncEndlessGameData.
         * @implements IC2LS_SyncEndlessGameData
         * @constructor
         * @param {Client2Server.IC2LS_SyncEndlessGameData=} [p] Properties to set
         */
        function C2LS_SyncEndlessGameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SyncEndlessGameData token.
         * @member {string} token
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @instance
         */
        C2LS_SyncEndlessGameData.prototype.token = "";

        /**
         * C2LS_SyncEndlessGameData stepData.
         * @member {string} stepData
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @instance
         */
        C2LS_SyncEndlessGameData.prototype.stepData = "";

        /**
         * C2LS_SyncEndlessGameData snapshot.
         * @member {string} snapshot
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @instance
         */
        C2LS_SyncEndlessGameData.prototype.snapshot = "";

        /**
         * C2LS_SyncEndlessGameData minStep.
         * @member {number} minStep
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @instance
         */
        C2LS_SyncEndlessGameData.prototype.minStep = 0;

        /**
         * C2LS_SyncEndlessGameData maxStep.
         * @member {number} maxStep
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @instance
         */
        C2LS_SyncEndlessGameData.prototype.maxStep = 0;

        /**
         * C2LS_SyncEndlessGameData score.
         * @member {number} score
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @instance
         */
        C2LS_SyncEndlessGameData.prototype.score = 0;

        /**
         * Encodes the specified C2LS_SyncEndlessGameData message. Does not implicitly {@link Client2Server.C2LS_SyncEndlessGameData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SyncEndlessGameData
         * @static
         * @param {Client2Server.C2LS_SyncEndlessGameData} m C2LS_SyncEndlessGameData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SyncEndlessGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(10).string(m.token);
            if (m.stepData != null && Object.hasOwnProperty.call(m, "stepData"))
                w.uint32(18).string(m.stepData);
            if (m.snapshot != null && Object.hasOwnProperty.call(m, "snapshot"))
                w.uint32(26).string(m.snapshot);
            if (m.minStep != null && Object.hasOwnProperty.call(m, "minStep"))
                w.uint32(32).int32(m.minStep);
            if (m.maxStep != null && Object.hasOwnProperty.call(m, "maxStep"))
                w.uint32(40).int32(m.maxStep);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(48).int32(m.score);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SyncEndlessGameData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10043 OpCode value
         */
        C2LS_SyncEndlessGameData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10043] = "OpCode"] = 10043;
            return values;
        })();

        return C2LS_SyncEndlessGameData;
    })();

    Client2Server.C2LS_GetRoomInfo = (function() {

        /**
         * Properties of a C2LS_GetRoomInfo.
         * @memberof Client2Server
         * @interface IC2LS_GetRoomInfo
         */

        /**
         * Constructs a new C2LS_GetRoomInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetRoomInfo.
         * @implements IC2LS_GetRoomInfo
         * @constructor
         * @param {Client2Server.IC2LS_GetRoomInfo=} [p] Properties to set
         */
        function C2LS_GetRoomInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetRoomInfo message. Does not implicitly {@link Client2Server.C2LS_GetRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetRoomInfo
         * @static
         * @param {Client2Server.C2LS_GetRoomInfo} m C2LS_GetRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetRoomInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10045 OpCode value
         */
        C2LS_GetRoomInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10045] = "OpCode"] = 10045;
            return values;
        })();

        return C2LS_GetRoomInfo;
    })();

    Client2Server.C2LS_ShareJoinRoom = (function() {

        /**
         * Properties of a C2LS_ShareJoinRoom.
         * @memberof Client2Server
         * @interface IC2LS_ShareJoinRoom
         * @property {string|null} [uid] C2LS_ShareJoinRoom uid
         */

        /**
         * Constructs a new C2LS_ShareJoinRoom.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ShareJoinRoom.
         * @implements IC2LS_ShareJoinRoom
         * @constructor
         * @param {Client2Server.IC2LS_ShareJoinRoom=} [p] Properties to set
         */
        function C2LS_ShareJoinRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ShareJoinRoom uid.
         * @member {string} uid
         * @memberof Client2Server.C2LS_ShareJoinRoom
         * @instance
         */
        C2LS_ShareJoinRoom.prototype.uid = "";

        /**
         * Encodes the specified C2LS_ShareJoinRoom message. Does not implicitly {@link Client2Server.C2LS_ShareJoinRoom.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ShareJoinRoom
         * @static
         * @param {Client2Server.C2LS_ShareJoinRoom} m C2LS_ShareJoinRoom message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ShareJoinRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ShareJoinRoom.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10046 OpCode value
         */
        C2LS_ShareJoinRoom.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10046] = "OpCode"] = 10046;
            return values;
        })();

        return C2LS_ShareJoinRoom;
    })();

    Client2Server.C2LS_RemoveMember = (function() {

        /**
         * Properties of a C2LS_RemoveMember.
         * @memberof Client2Server
         * @interface IC2LS_RemoveMember
         * @property {string|null} [uid] C2LS_RemoveMember uid
         */

        /**
         * Constructs a new C2LS_RemoveMember.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_RemoveMember.
         * @implements IC2LS_RemoveMember
         * @constructor
         * @param {Client2Server.IC2LS_RemoveMember=} [p] Properties to set
         */
        function C2LS_RemoveMember(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_RemoveMember uid.
         * @member {string} uid
         * @memberof Client2Server.C2LS_RemoveMember
         * @instance
         */
        C2LS_RemoveMember.prototype.uid = "";

        /**
         * Encodes the specified C2LS_RemoveMember message. Does not implicitly {@link Client2Server.C2LS_RemoveMember.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_RemoveMember
         * @static
         * @param {Client2Server.C2LS_RemoveMember} m C2LS_RemoveMember message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_RemoveMember.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_RemoveMember.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10047 OpCode value
         */
        C2LS_RemoveMember.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10047] = "OpCode"] = 10047;
            return values;
        })();

        return C2LS_RemoveMember;
    })();

    Client2Server.C2LS_GetFriendIncome = (function() {

        /**
         * Properties of a C2LS_GetFriendIncome.
         * @memberof Client2Server
         * @interface IC2LS_GetFriendIncome
         * @property {string|null} [uid] C2LS_GetFriendIncome uid
         */

        /**
         * Constructs a new C2LS_GetFriendIncome.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetFriendIncome.
         * @implements IC2LS_GetFriendIncome
         * @constructor
         * @param {Client2Server.IC2LS_GetFriendIncome=} [p] Properties to set
         */
        function C2LS_GetFriendIncome(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_GetFriendIncome uid.
         * @member {string} uid
         * @memberof Client2Server.C2LS_GetFriendIncome
         * @instance
         */
        C2LS_GetFriendIncome.prototype.uid = "";

        /**
         * Encodes the specified C2LS_GetFriendIncome message. Does not implicitly {@link Client2Server.C2LS_GetFriendIncome.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetFriendIncome
         * @static
         * @param {Client2Server.C2LS_GetFriendIncome} m C2LS_GetFriendIncome message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetFriendIncome.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetFriendIncome.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10048 OpCode value
         */
        C2LS_GetFriendIncome.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10048] = "OpCode"] = 10048;
            return values;
        })();

        return C2LS_GetFriendIncome;
    })();

    Client2Server.C2LS_GetSettleSalary = (function() {

        /**
         * Properties of a C2LS_GetSettleSalary.
         * @memberof Client2Server
         * @interface IC2LS_GetSettleSalary
         */

        /**
         * Constructs a new C2LS_GetSettleSalary.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetSettleSalary.
         * @implements IC2LS_GetSettleSalary
         * @constructor
         * @param {Client2Server.IC2LS_GetSettleSalary=} [p] Properties to set
         */
        function C2LS_GetSettleSalary(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetSettleSalary message. Does not implicitly {@link Client2Server.C2LS_GetSettleSalary.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetSettleSalary
         * @static
         * @param {Client2Server.C2LS_GetSettleSalary} m C2LS_GetSettleSalary message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetSettleSalary.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetSettleSalary.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10049 OpCode value
         */
        C2LS_GetSettleSalary.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10049] = "OpCode"] = 10049;
            return values;
        })();

        return C2LS_GetSettleSalary;
    })();

    Client2Server.C2LS_BuyExtraGift = (function() {

        /**
         * Properties of a C2LS_BuyExtraGift.
         * @memberof Client2Server
         * @interface IC2LS_BuyExtraGift
         * @property {number|null} [price] C2LS_BuyExtraGift price
         */

        /**
         * Constructs a new C2LS_BuyExtraGift.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_BuyExtraGift.
         * @implements IC2LS_BuyExtraGift
         * @constructor
         * @param {Client2Server.IC2LS_BuyExtraGift=} [p] Properties to set
         */
        function C2LS_BuyExtraGift(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_BuyExtraGift price.
         * @member {number} price
         * @memberof Client2Server.C2LS_BuyExtraGift
         * @instance
         */
        C2LS_BuyExtraGift.prototype.price = 0;

        /**
         * Encodes the specified C2LS_BuyExtraGift message. Does not implicitly {@link Client2Server.C2LS_BuyExtraGift.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_BuyExtraGift
         * @static
         * @param {Client2Server.C2LS_BuyExtraGift} m C2LS_BuyExtraGift message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_BuyExtraGift.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(8).int32(m.price);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_BuyExtraGift.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10050 OpCode value
         */
        C2LS_BuyExtraGift.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10050] = "OpCode"] = 10050;
            return values;
        })();

        return C2LS_BuyExtraGift;
    })();

    Client2Server.C2LS_GetWeekReward = (function() {

        /**
         * Properties of a C2LS_GetWeekReward.
         * @memberof Client2Server
         * @interface IC2LS_GetWeekReward
         * @property {number|null} [dressId] C2LS_GetWeekReward dressId
         * @property {number|null} [stage] C2LS_GetWeekReward stage
         */

        /**
         * Constructs a new C2LS_GetWeekReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetWeekReward.
         * @implements IC2LS_GetWeekReward
         * @constructor
         * @param {Client2Server.IC2LS_GetWeekReward=} [p] Properties to set
         */
        function C2LS_GetWeekReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_GetWeekReward dressId.
         * @member {number} dressId
         * @memberof Client2Server.C2LS_GetWeekReward
         * @instance
         */
        C2LS_GetWeekReward.prototype.dressId = 0;

        /**
         * C2LS_GetWeekReward stage.
         * @member {number} stage
         * @memberof Client2Server.C2LS_GetWeekReward
         * @instance
         */
        C2LS_GetWeekReward.prototype.stage = 0;

        /**
         * Encodes the specified C2LS_GetWeekReward message. Does not implicitly {@link Client2Server.C2LS_GetWeekReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetWeekReward
         * @static
         * @param {Client2Server.C2LS_GetWeekReward} m C2LS_GetWeekReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetWeekReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.dressId != null && Object.hasOwnProperty.call(m, "dressId"))
                w.uint32(8).int32(m.dressId);
            if (m.stage != null && Object.hasOwnProperty.call(m, "stage"))
                w.uint32(16).int32(m.stage);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetWeekReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10051 OpCode value
         */
        C2LS_GetWeekReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10051] = "OpCode"] = 10051;
            return values;
        })();

        return C2LS_GetWeekReward;
    })();

    Client2Server.C2LS_GetWeekRewardData = (function() {

        /**
         * Properties of a C2LS_GetWeekRewardData.
         * @memberof Client2Server
         * @interface IC2LS_GetWeekRewardData
         */

        /**
         * Constructs a new C2LS_GetWeekRewardData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetWeekRewardData.
         * @implements IC2LS_GetWeekRewardData
         * @constructor
         * @param {Client2Server.IC2LS_GetWeekRewardData=} [p] Properties to set
         */
        function C2LS_GetWeekRewardData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetWeekRewardData message. Does not implicitly {@link Client2Server.C2LS_GetWeekRewardData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetWeekRewardData
         * @static
         * @param {Client2Server.C2LS_GetWeekRewardData} m C2LS_GetWeekRewardData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetWeekRewardData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetWeekRewardData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10052 OpCode value
         */
        C2LS_GetWeekRewardData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10052] = "OpCode"] = 10052;
            return values;
        })();

        return C2LS_GetWeekRewardData;
    })();

    Client2Server.C2LS_StartNewbieGame = (function() {

        /**
         * Properties of a C2LS_StartNewbieGame.
         * @memberof Client2Server
         * @interface IC2LS_StartNewbieGame
         */

        /**
         * Constructs a new C2LS_StartNewbieGame.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_StartNewbieGame.
         * @implements IC2LS_StartNewbieGame
         * @constructor
         * @param {Client2Server.IC2LS_StartNewbieGame=} [p] Properties to set
         */
        function C2LS_StartNewbieGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_StartNewbieGame message. Does not implicitly {@link Client2Server.C2LS_StartNewbieGame.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_StartNewbieGame
         * @static
         * @param {Client2Server.C2LS_StartNewbieGame} m C2LS_StartNewbieGame message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_StartNewbieGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_StartNewbieGame.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10053 OpCode value
         */
        C2LS_StartNewbieGame.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10053] = "OpCode"] = 10053;
            return values;
        })();

        return C2LS_StartNewbieGame;
    })();

    Client2Server.C2LS_EndNewbieGame = (function() {

        /**
         * Properties of a C2LS_EndNewbieGame.
         * @memberof Client2Server
         * @interface IC2LS_EndNewbieGame
         */

        /**
         * Constructs a new C2LS_EndNewbieGame.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_EndNewbieGame.
         * @implements IC2LS_EndNewbieGame
         * @constructor
         * @param {Client2Server.IC2LS_EndNewbieGame=} [p] Properties to set
         */
        function C2LS_EndNewbieGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_EndNewbieGame message. Does not implicitly {@link Client2Server.C2LS_EndNewbieGame.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_EndNewbieGame
         * @static
         * @param {Client2Server.C2LS_EndNewbieGame} m C2LS_EndNewbieGame message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_EndNewbieGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_EndNewbieGame.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10054 OpCode value
         */
        C2LS_EndNewbieGame.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10054] = "OpCode"] = 10054;
            return values;
        })();

        return C2LS_EndNewbieGame;
    })();

    Client2Server.C2LS_GetAllServerBroadcastUsers = (function() {

        /**
         * Properties of a C2LS_GetAllServerBroadcastUsers.
         * @memberof Client2Server
         * @interface IC2LS_GetAllServerBroadcastUsers
         */

        /**
         * Constructs a new C2LS_GetAllServerBroadcastUsers.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetAllServerBroadcastUsers.
         * @implements IC2LS_GetAllServerBroadcastUsers
         * @constructor
         * @param {Client2Server.IC2LS_GetAllServerBroadcastUsers=} [p] Properties to set
         */
        function C2LS_GetAllServerBroadcastUsers(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetAllServerBroadcastUsers message. Does not implicitly {@link Client2Server.C2LS_GetAllServerBroadcastUsers.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetAllServerBroadcastUsers
         * @static
         * @param {Client2Server.C2LS_GetAllServerBroadcastUsers} m C2LS_GetAllServerBroadcastUsers message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetAllServerBroadcastUsers.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetAllServerBroadcastUsers.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10055 OpCode value
         */
        C2LS_GetAllServerBroadcastUsers.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10055] = "OpCode"] = 10055;
            return values;
        })();

        return C2LS_GetAllServerBroadcastUsers;
    })();

    Client2Server.C2LS_GetDailyLevelList = (function() {

        /**
         * Properties of a C2LS_GetDailyLevelList.
         * @memberof Client2Server
         * @interface IC2LS_GetDailyLevelList
         */

        /**
         * Constructs a new C2LS_GetDailyLevelList.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetDailyLevelList.
         * @implements IC2LS_GetDailyLevelList
         * @constructor
         * @param {Client2Server.IC2LS_GetDailyLevelList=} [p] Properties to set
         */
        function C2LS_GetDailyLevelList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetDailyLevelList message. Does not implicitly {@link Client2Server.C2LS_GetDailyLevelList.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetDailyLevelList
         * @static
         * @param {Client2Server.C2LS_GetDailyLevelList} m C2LS_GetDailyLevelList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetDailyLevelList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetDailyLevelList.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10056 OpCode value
         */
        C2LS_GetDailyLevelList.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10056] = "OpCode"] = 10056;
            return values;
        })();

        return C2LS_GetDailyLevelList;
    })();

    Client2Server.C2LS_GetDailyLevelDataOrder = (function() {

        /**
         * Properties of a C2LS_GetDailyLevelDataOrder.
         * @memberof Client2Server
         * @interface IC2LS_GetDailyLevelDataOrder
         */

        /**
         * Constructs a new C2LS_GetDailyLevelDataOrder.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetDailyLevelDataOrder.
         * @implements IC2LS_GetDailyLevelDataOrder
         * @constructor
         * @param {Client2Server.IC2LS_GetDailyLevelDataOrder=} [p] Properties to set
         */
        function C2LS_GetDailyLevelDataOrder(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetDailyLevelDataOrder message. Does not implicitly {@link Client2Server.C2LS_GetDailyLevelDataOrder.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetDailyLevelDataOrder
         * @static
         * @param {Client2Server.C2LS_GetDailyLevelDataOrder} m C2LS_GetDailyLevelDataOrder message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetDailyLevelDataOrder.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetDailyLevelDataOrder.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10057 OpCode value
         */
        C2LS_GetDailyLevelDataOrder.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10057] = "OpCode"] = 10057;
            return values;
        })();

        return C2LS_GetDailyLevelDataOrder;
    })();

    Client2Server.C2LS_GetDailyMatchRoomData = (function() {

        /**
         * Properties of a C2LS_GetDailyMatchRoomData.
         * @memberof Client2Server
         * @interface IC2LS_GetDailyMatchRoomData
         */

        /**
         * Constructs a new C2LS_GetDailyMatchRoomData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetDailyMatchRoomData.
         * @implements IC2LS_GetDailyMatchRoomData
         * @constructor
         * @param {Client2Server.IC2LS_GetDailyMatchRoomData=} [p] Properties to set
         */
        function C2LS_GetDailyMatchRoomData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetDailyMatchRoomData message. Does not implicitly {@link Client2Server.C2LS_GetDailyMatchRoomData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetDailyMatchRoomData
         * @static
         * @param {Client2Server.C2LS_GetDailyMatchRoomData} m C2LS_GetDailyMatchRoomData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetDailyMatchRoomData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetDailyMatchRoomData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10058 OpCode value
         */
        C2LS_GetDailyMatchRoomData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10058] = "OpCode"] = 10058;
            return values;
        })();

        return C2LS_GetDailyMatchRoomData;
    })();

    Client2Server.C2LS_GetDailyRaceScore = (function() {

        /**
         * Properties of a C2LS_GetDailyRaceScore.
         * @memberof Client2Server
         * @interface IC2LS_GetDailyRaceScore
         */

        /**
         * Constructs a new C2LS_GetDailyRaceScore.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetDailyRaceScore.
         * @implements IC2LS_GetDailyRaceScore
         * @constructor
         * @param {Client2Server.IC2LS_GetDailyRaceScore=} [p] Properties to set
         */
        function C2LS_GetDailyRaceScore(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetDailyRaceScore message. Does not implicitly {@link Client2Server.C2LS_GetDailyRaceScore.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetDailyRaceScore
         * @static
         * @param {Client2Server.C2LS_GetDailyRaceScore} m C2LS_GetDailyRaceScore message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetDailyRaceScore.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetDailyRaceScore.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10059 OpCode value
         */
        C2LS_GetDailyRaceScore.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10059] = "OpCode"] = 10059;
            return values;
        })();

        return C2LS_GetDailyRaceScore;
    })();

    Client2Server.C2LS_JumpBind = (function() {

        /**
         * Properties of a C2LS_JumpBind.
         * @memberof Client2Server
         * @interface IC2LS_JumpBind
         * @property {string|null} [bindCode] C2LS_JumpBind bindCode
         */

        /**
         * Constructs a new C2LS_JumpBind.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_JumpBind.
         * @implements IC2LS_JumpBind
         * @constructor
         * @param {Client2Server.IC2LS_JumpBind=} [p] Properties to set
         */
        function C2LS_JumpBind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_JumpBind bindCode.
         * @member {string} bindCode
         * @memberof Client2Server.C2LS_JumpBind
         * @instance
         */
        C2LS_JumpBind.prototype.bindCode = "";

        /**
         * Encodes the specified C2LS_JumpBind message. Does not implicitly {@link Client2Server.C2LS_JumpBind.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_JumpBind
         * @static
         * @param {Client2Server.C2LS_JumpBind} m C2LS_JumpBind message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_JumpBind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.bindCode != null && Object.hasOwnProperty.call(m, "bindCode"))
                w.uint32(10).string(m.bindCode);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_JumpBind.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10060 OpCode value
         */
        C2LS_JumpBind.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10060] = "OpCode"] = 10060;
            return values;
        })();

        return C2LS_JumpBind;
    })();

    Client2Server.C2LS_GetPersonalInfo = (function() {

        /**
         * Properties of a C2LS_GetPersonalInfo.
         * @memberof Client2Server
         * @interface IC2LS_GetPersonalInfo
         * @property {string|null} [uid] C2LS_GetPersonalInfo uid
         */

        /**
         * Constructs a new C2LS_GetPersonalInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetPersonalInfo.
         * @implements IC2LS_GetPersonalInfo
         * @constructor
         * @param {Client2Server.IC2LS_GetPersonalInfo=} [p] Properties to set
         */
        function C2LS_GetPersonalInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_GetPersonalInfo uid.
         * @member {string} uid
         * @memberof Client2Server.C2LS_GetPersonalInfo
         * @instance
         */
        C2LS_GetPersonalInfo.prototype.uid = "";

        /**
         * Encodes the specified C2LS_GetPersonalInfo message. Does not implicitly {@link Client2Server.C2LS_GetPersonalInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetPersonalInfo
         * @static
         * @param {Client2Server.C2LS_GetPersonalInfo} m C2LS_GetPersonalInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetPersonalInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                w.uint32(10).string(m.uid);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetPersonalInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10061 OpCode value
         */
        C2LS_GetPersonalInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10061] = "OpCode"] = 10061;
            return values;
        })();

        return C2LS_GetPersonalInfo;
    })();

    Client2Server.C2LS_CollectMoonCake = (function() {

        /**
         * Properties of a C2LS_CollectMoonCake.
         * @memberof Client2Server
         * @interface IC2LS_CollectMoonCake
         * @property {number|null} [score] C2LS_CollectMoonCake score
         * @property {number|null} [count] C2LS_CollectMoonCake count
         */

        /**
         * Constructs a new C2LS_CollectMoonCake.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_CollectMoonCake.
         * @implements IC2LS_CollectMoonCake
         * @constructor
         * @param {Client2Server.IC2LS_CollectMoonCake=} [p] Properties to set
         */
        function C2LS_CollectMoonCake(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_CollectMoonCake score.
         * @member {number} score
         * @memberof Client2Server.C2LS_CollectMoonCake
         * @instance
         */
        C2LS_CollectMoonCake.prototype.score = 0;

        /**
         * C2LS_CollectMoonCake count.
         * @member {number} count
         * @memberof Client2Server.C2LS_CollectMoonCake
         * @instance
         */
        C2LS_CollectMoonCake.prototype.count = 0;

        /**
         * Encodes the specified C2LS_CollectMoonCake message. Does not implicitly {@link Client2Server.C2LS_CollectMoonCake.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_CollectMoonCake
         * @static
         * @param {Client2Server.C2LS_CollectMoonCake} m C2LS_CollectMoonCake message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_CollectMoonCake.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(8).int32(m.score);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(16).int32(m.count);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_CollectMoonCake.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10062 OpCode value
         */
        C2LS_CollectMoonCake.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10062] = "OpCode"] = 10062;
            return values;
        })();

        return C2LS_CollectMoonCake;
    })();

    Client2Server.C2LS_ClaimMoonCakeReward = (function() {

        /**
         * Properties of a C2LS_ClaimMoonCakeReward.
         * @memberof Client2Server
         * @interface IC2LS_ClaimMoonCakeReward
         * @property {number|null} [rewardIndex] C2LS_ClaimMoonCakeReward rewardIndex
         */

        /**
         * Constructs a new C2LS_ClaimMoonCakeReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ClaimMoonCakeReward.
         * @implements IC2LS_ClaimMoonCakeReward
         * @constructor
         * @param {Client2Server.IC2LS_ClaimMoonCakeReward=} [p] Properties to set
         */
        function C2LS_ClaimMoonCakeReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ClaimMoonCakeReward rewardIndex.
         * @member {number} rewardIndex
         * @memberof Client2Server.C2LS_ClaimMoonCakeReward
         * @instance
         */
        C2LS_ClaimMoonCakeReward.prototype.rewardIndex = 0;

        /**
         * Encodes the specified C2LS_ClaimMoonCakeReward message. Does not implicitly {@link Client2Server.C2LS_ClaimMoonCakeReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ClaimMoonCakeReward
         * @static
         * @param {Client2Server.C2LS_ClaimMoonCakeReward} m C2LS_ClaimMoonCakeReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ClaimMoonCakeReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rewardIndex != null && Object.hasOwnProperty.call(m, "rewardIndex"))
                w.uint32(8).int32(m.rewardIndex);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ClaimMoonCakeReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10063 OpCode value
         */
        C2LS_ClaimMoonCakeReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10063] = "OpCode"] = 10063;
            return values;
        })();

        return C2LS_ClaimMoonCakeReward;
    })();

    Client2Server.C2LS_GetMoonCakeEventInfo = (function() {

        /**
         * Properties of a C2LS_GetMoonCakeEventInfo.
         * @memberof Client2Server
         * @interface IC2LS_GetMoonCakeEventInfo
         */

        /**
         * Constructs a new C2LS_GetMoonCakeEventInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetMoonCakeEventInfo.
         * @implements IC2LS_GetMoonCakeEventInfo
         * @constructor
         * @param {Client2Server.IC2LS_GetMoonCakeEventInfo=} [p] Properties to set
         */
        function C2LS_GetMoonCakeEventInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetMoonCakeEventInfo message. Does not implicitly {@link Client2Server.C2LS_GetMoonCakeEventInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetMoonCakeEventInfo
         * @static
         * @param {Client2Server.C2LS_GetMoonCakeEventInfo} m C2LS_GetMoonCakeEventInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetMoonCakeEventInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetMoonCakeEventInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10064 OpCode value
         */
        C2LS_GetMoonCakeEventInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10064] = "OpCode"] = 10064;
            return values;
        })();

        return C2LS_GetMoonCakeEventInfo;
    })();

    Client2Server.C2LS_GetMissionList = (function() {

        /**
         * Properties of a C2LS_GetMissionList.
         * @memberof Client2Server
         * @interface IC2LS_GetMissionList
         */

        /**
         * Constructs a new C2LS_GetMissionList.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetMissionList.
         * @implements IC2LS_GetMissionList
         * @constructor
         * @param {Client2Server.IC2LS_GetMissionList=} [p] Properties to set
         */
        function C2LS_GetMissionList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetMissionList message. Does not implicitly {@link Client2Server.C2LS_GetMissionList.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetMissionList
         * @static
         * @param {Client2Server.C2LS_GetMissionList} m C2LS_GetMissionList message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetMissionList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetMissionList.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10065 OpCode value
         */
        C2LS_GetMissionList.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10065] = "OpCode"] = 10065;
            return values;
        })();

        return C2LS_GetMissionList;
    })();

    Client2Server.C2LS_ClaimVideoReward = (function() {

        /**
         * Properties of a C2LS_ClaimVideoReward.
         * @memberof Client2Server
         * @interface IC2LS_ClaimVideoReward
         * @property {number|null} [type] C2LS_ClaimVideoReward type
         */

        /**
         * Constructs a new C2LS_ClaimVideoReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ClaimVideoReward.
         * @implements IC2LS_ClaimVideoReward
         * @constructor
         * @param {Client2Server.IC2LS_ClaimVideoReward=} [p] Properties to set
         */
        function C2LS_ClaimVideoReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ClaimVideoReward type.
         * @member {number} type
         * @memberof Client2Server.C2LS_ClaimVideoReward
         * @instance
         */
        C2LS_ClaimVideoReward.prototype.type = 0;

        /**
         * Encodes the specified C2LS_ClaimVideoReward message. Does not implicitly {@link Client2Server.C2LS_ClaimVideoReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ClaimVideoReward
         * @static
         * @param {Client2Server.C2LS_ClaimVideoReward} m C2LS_ClaimVideoReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ClaimVideoReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ClaimVideoReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10066 OpCode value
         */
        C2LS_ClaimVideoReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10066] = "OpCode"] = 10066;
            return values;
        })();

        return C2LS_ClaimVideoReward;
    })();

    Client2Server.C2LS_GetWxChallengeReward = (function() {

        /**
         * Properties of a C2LS_GetWxChallengeReward.
         * @memberof Client2Server
         * @interface IC2LS_GetWxChallengeReward
         */

        /**
         * Constructs a new C2LS_GetWxChallengeReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetWxChallengeReward.
         * @implements IC2LS_GetWxChallengeReward
         * @constructor
         * @param {Client2Server.IC2LS_GetWxChallengeReward=} [p] Properties to set
         */
        function C2LS_GetWxChallengeReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetWxChallengeReward message. Does not implicitly {@link Client2Server.C2LS_GetWxChallengeReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetWxChallengeReward
         * @static
         * @param {Client2Server.C2LS_GetWxChallengeReward} m C2LS_GetWxChallengeReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetWxChallengeReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetWxChallengeReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10067 OpCode value
         */
        C2LS_GetWxChallengeReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10067] = "OpCode"] = 10067;
            return values;
        })();

        return C2LS_GetWxChallengeReward;
    })();

    Client2Server.C2LS_GetWxPushReward = (function() {

        /**
         * Properties of a C2LS_GetWxPushReward.
         * @memberof Client2Server
         * @interface IC2LS_GetWxPushReward
         * @property {common.EWxGiftIdType|null} [giftIdType] C2LS_GetWxPushReward giftIdType
         */

        /**
         * Constructs a new C2LS_GetWxPushReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetWxPushReward.
         * @implements IC2LS_GetWxPushReward
         * @constructor
         * @param {Client2Server.IC2LS_GetWxPushReward=} [p] Properties to set
         */
        function C2LS_GetWxPushReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_GetWxPushReward giftIdType.
         * @member {common.EWxGiftIdType} giftIdType
         * @memberof Client2Server.C2LS_GetWxPushReward
         * @instance
         */
        C2LS_GetWxPushReward.prototype.giftIdType = 0;

        /**
         * Encodes the specified C2LS_GetWxPushReward message. Does not implicitly {@link Client2Server.C2LS_GetWxPushReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetWxPushReward
         * @static
         * @param {Client2Server.C2LS_GetWxPushReward} m C2LS_GetWxPushReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetWxPushReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.giftIdType != null && Object.hasOwnProperty.call(m, "giftIdType"))
                w.uint32(8).int32(m.giftIdType);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetWxPushReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10068 OpCode value
         */
        C2LS_GetWxPushReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10068] = "OpCode"] = 10068;
            return values;
        })();

        return C2LS_GetWxPushReward;
    })();

    Client2Server.C2LS_GetStoryModeInfo = (function() {

        /**
         * Properties of a C2LS_GetStoryModeInfo.
         * @memberof Client2Server
         * @interface IC2LS_GetStoryModeInfo
         */

        /**
         * Constructs a new C2LS_GetStoryModeInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_GetStoryModeInfo.
         * @implements IC2LS_GetStoryModeInfo
         * @constructor
         * @param {Client2Server.IC2LS_GetStoryModeInfo=} [p] Properties to set
         */
        function C2LS_GetStoryModeInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_GetStoryModeInfo message. Does not implicitly {@link Client2Server.C2LS_GetStoryModeInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_GetStoryModeInfo
         * @static
         * @param {Client2Server.C2LS_GetStoryModeInfo} m C2LS_GetStoryModeInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_GetStoryModeInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_GetStoryModeInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10069 OpCode value
         */
        C2LS_GetStoryModeInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10069] = "OpCode"] = 10069;
            return values;
        })();

        return C2LS_GetStoryModeInfo;
    })();

    Client2Server.C2LS_StartStoryLevel = (function() {

        /**
         * Properties of a C2LS_StartStoryLevel.
         * @memberof Client2Server
         * @interface IC2LS_StartStoryLevel
         * @property {number|null} [chapterId] C2LS_StartStoryLevel chapterId
         * @property {number|null} [activityId] C2LS_StartStoryLevel activityId
         */

        /**
         * Constructs a new C2LS_StartStoryLevel.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_StartStoryLevel.
         * @implements IC2LS_StartStoryLevel
         * @constructor
         * @param {Client2Server.IC2LS_StartStoryLevel=} [p] Properties to set
         */
        function C2LS_StartStoryLevel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_StartStoryLevel chapterId.
         * @member {number} chapterId
         * @memberof Client2Server.C2LS_StartStoryLevel
         * @instance
         */
        C2LS_StartStoryLevel.prototype.chapterId = 0;

        /**
         * C2LS_StartStoryLevel activityId.
         * @member {number} activityId
         * @memberof Client2Server.C2LS_StartStoryLevel
         * @instance
         */
        C2LS_StartStoryLevel.prototype.activityId = 0;

        /**
         * Encodes the specified C2LS_StartStoryLevel message. Does not implicitly {@link Client2Server.C2LS_StartStoryLevel.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_StartStoryLevel
         * @static
         * @param {Client2Server.C2LS_StartStoryLevel} m C2LS_StartStoryLevel message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_StartStoryLevel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.chapterId != null && Object.hasOwnProperty.call(m, "chapterId"))
                w.uint32(8).int32(m.chapterId);
            if (m.activityId != null && Object.hasOwnProperty.call(m, "activityId"))
                w.uint32(16).int32(m.activityId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_StartStoryLevel.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10070 OpCode value
         */
        C2LS_StartStoryLevel.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10070] = "OpCode"] = 10070;
            return values;
        })();

        return C2LS_StartStoryLevel;
    })();

    Client2Server.C2LS_CompleteStoryLevel = (function() {

        /**
         * Properties of a C2LS_CompleteStoryLevel.
         * @memberof Client2Server
         * @interface IC2LS_CompleteStoryLevel
         * @property {string|null} [matchToken] C2LS_CompleteStoryLevel matchToken
         */

        /**
         * Constructs a new C2LS_CompleteStoryLevel.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_CompleteStoryLevel.
         * @implements IC2LS_CompleteStoryLevel
         * @constructor
         * @param {Client2Server.IC2LS_CompleteStoryLevel=} [p] Properties to set
         */
        function C2LS_CompleteStoryLevel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_CompleteStoryLevel matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_CompleteStoryLevel
         * @instance
         */
        C2LS_CompleteStoryLevel.prototype.matchToken = "";

        /**
         * Encodes the specified C2LS_CompleteStoryLevel message. Does not implicitly {@link Client2Server.C2LS_CompleteStoryLevel.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_CompleteStoryLevel
         * @static
         * @param {Client2Server.C2LS_CompleteStoryLevel} m C2LS_CompleteStoryLevel message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_CompleteStoryLevel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_CompleteStoryLevel.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10071 OpCode value
         */
        C2LS_CompleteStoryLevel.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10071] = "OpCode"] = 10071;
            return values;
        })();

        return C2LS_CompleteStoryLevel;
    })();

    Client2Server.C2LS_CollectStoryModeItem = (function() {

        /**
         * Properties of a C2LS_CollectStoryModeItem.
         * @memberof Client2Server
         * @interface IC2LS_CollectStoryModeItem
         * @property {number|null} [activityId] C2LS_CollectStoryModeItem activityId
         * @property {number|null} [count] C2LS_CollectStoryModeItem count
         */

        /**
         * Constructs a new C2LS_CollectStoryModeItem.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_CollectStoryModeItem.
         * @implements IC2LS_CollectStoryModeItem
         * @constructor
         * @param {Client2Server.IC2LS_CollectStoryModeItem=} [p] Properties to set
         */
        function C2LS_CollectStoryModeItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_CollectStoryModeItem activityId.
         * @member {number} activityId
         * @memberof Client2Server.C2LS_CollectStoryModeItem
         * @instance
         */
        C2LS_CollectStoryModeItem.prototype.activityId = 0;

        /**
         * C2LS_CollectStoryModeItem count.
         * @member {number} count
         * @memberof Client2Server.C2LS_CollectStoryModeItem
         * @instance
         */
        C2LS_CollectStoryModeItem.prototype.count = 0;

        /**
         * Encodes the specified C2LS_CollectStoryModeItem message. Does not implicitly {@link Client2Server.C2LS_CollectStoryModeItem.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_CollectStoryModeItem
         * @static
         * @param {Client2Server.C2LS_CollectStoryModeItem} m C2LS_CollectStoryModeItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_CollectStoryModeItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.activityId != null && Object.hasOwnProperty.call(m, "activityId"))
                w.uint32(8).int32(m.activityId);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(16).int32(m.count);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_CollectStoryModeItem.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10072 OpCode value
         */
        C2LS_CollectStoryModeItem.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10072] = "OpCode"] = 10072;
            return values;
        })();

        return C2LS_CollectStoryModeItem;
    })();

    Client2Server.C2LS_ClaimStoryReward = (function() {

        /**
         * Properties of a C2LS_ClaimStoryReward.
         * @memberof Client2Server
         * @interface IC2LS_ClaimStoryReward
         * @property {number|null} [rewardIndex] C2LS_ClaimStoryReward rewardIndex
         * @property {number|null} [activityId] C2LS_ClaimStoryReward activityId
         */

        /**
         * Constructs a new C2LS_ClaimStoryReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_ClaimStoryReward.
         * @implements IC2LS_ClaimStoryReward
         * @constructor
         * @param {Client2Server.IC2LS_ClaimStoryReward=} [p] Properties to set
         */
        function C2LS_ClaimStoryReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_ClaimStoryReward rewardIndex.
         * @member {number} rewardIndex
         * @memberof Client2Server.C2LS_ClaimStoryReward
         * @instance
         */
        C2LS_ClaimStoryReward.prototype.rewardIndex = 0;

        /**
         * C2LS_ClaimStoryReward activityId.
         * @member {number} activityId
         * @memberof Client2Server.C2LS_ClaimStoryReward
         * @instance
         */
        C2LS_ClaimStoryReward.prototype.activityId = 0;

        /**
         * Encodes the specified C2LS_ClaimStoryReward message. Does not implicitly {@link Client2Server.C2LS_ClaimStoryReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_ClaimStoryReward
         * @static
         * @param {Client2Server.C2LS_ClaimStoryReward} m C2LS_ClaimStoryReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_ClaimStoryReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rewardIndex != null && Object.hasOwnProperty.call(m, "rewardIndex"))
                w.uint32(8).int32(m.rewardIndex);
            if (m.activityId != null && Object.hasOwnProperty.call(m, "activityId"))
                w.uint32(16).int32(m.activityId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_ClaimStoryReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10073 OpCode value
         */
        C2LS_ClaimStoryReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10073] = "OpCode"] = 10073;
            return values;
        })();

        return C2LS_ClaimStoryReward;
    })();

    Client2Server.C2LS_PK_StartMatch = (function() {

        /**
         * Properties of a C2LS_PK_StartMatch.
         * @memberof Client2Server
         * @interface IC2LS_PK_StartMatch
         */

        /**
         * Constructs a new C2LS_PK_StartMatch.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_StartMatch.
         * @implements IC2LS_PK_StartMatch
         * @constructor
         * @param {Client2Server.IC2LS_PK_StartMatch=} [p] Properties to set
         */
        function C2LS_PK_StartMatch(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_PK_StartMatch message. Does not implicitly {@link Client2Server.C2LS_PK_StartMatch.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_StartMatch
         * @static
         * @param {Client2Server.C2LS_PK_StartMatch} m C2LS_PK_StartMatch message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_StartMatch.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_StartMatch.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10075 OpCode value
         */
        C2LS_PK_StartMatch.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10075] = "OpCode"] = 10075;
            return values;
        })();

        return C2LS_PK_StartMatch;
    })();

    Client2Server.C2LS_PK_GetMatchState = (function() {

        /**
         * Properties of a C2LS_PK_GetMatchState.
         * @memberof Client2Server
         * @interface IC2LS_PK_GetMatchState
         * @property {string|null} [roomId] C2LS_PK_GetMatchState roomId
         */

        /**
         * Constructs a new C2LS_PK_GetMatchState.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_GetMatchState.
         * @implements IC2LS_PK_GetMatchState
         * @constructor
         * @param {Client2Server.IC2LS_PK_GetMatchState=} [p] Properties to set
         */
        function C2LS_PK_GetMatchState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_GetMatchState roomId.
         * @member {string} roomId
         * @memberof Client2Server.C2LS_PK_GetMatchState
         * @instance
         */
        C2LS_PK_GetMatchState.prototype.roomId = "";

        /**
         * Encodes the specified C2LS_PK_GetMatchState message. Does not implicitly {@link Client2Server.C2LS_PK_GetMatchState.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_GetMatchState
         * @static
         * @param {Client2Server.C2LS_PK_GetMatchState} m C2LS_PK_GetMatchState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_GetMatchState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_GetMatchState.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10076 OpCode value
         */
        C2LS_PK_GetMatchState.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10076] = "OpCode"] = 10076;
            return values;
        })();

        return C2LS_PK_GetMatchState;
    })();

    Client2Server.C2LS_PK_ReadyComplete = (function() {

        /**
         * Properties of a C2LS_PK_ReadyComplete.
         * @memberof Client2Server
         * @interface IC2LS_PK_ReadyComplete
         * @property {string|null} [roomId] C2LS_PK_ReadyComplete roomId
         */

        /**
         * Constructs a new C2LS_PK_ReadyComplete.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_ReadyComplete.
         * @implements IC2LS_PK_ReadyComplete
         * @constructor
         * @param {Client2Server.IC2LS_PK_ReadyComplete=} [p] Properties to set
         */
        function C2LS_PK_ReadyComplete(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_ReadyComplete roomId.
         * @member {string} roomId
         * @memberof Client2Server.C2LS_PK_ReadyComplete
         * @instance
         */
        C2LS_PK_ReadyComplete.prototype.roomId = "";

        /**
         * Encodes the specified C2LS_PK_ReadyComplete message. Does not implicitly {@link Client2Server.C2LS_PK_ReadyComplete.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_ReadyComplete
         * @static
         * @param {Client2Server.C2LS_PK_ReadyComplete} m C2LS_PK_ReadyComplete message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_ReadyComplete.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_ReadyComplete.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10077 OpCode value
         */
        C2LS_PK_ReadyComplete.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10077] = "OpCode"] = 10077;
            return values;
        })();

        return C2LS_PK_ReadyComplete;
    })();

    Client2Server.C2LS_PK_GetRoomData = (function() {

        /**
         * Properties of a C2LS_PK_GetRoomData.
         * @memberof Client2Server
         * @interface IC2LS_PK_GetRoomData
         * @property {string|null} [roomId] C2LS_PK_GetRoomData roomId
         */

        /**
         * Constructs a new C2LS_PK_GetRoomData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_GetRoomData.
         * @implements IC2LS_PK_GetRoomData
         * @constructor
         * @param {Client2Server.IC2LS_PK_GetRoomData=} [p] Properties to set
         */
        function C2LS_PK_GetRoomData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_GetRoomData roomId.
         * @member {string} roomId
         * @memberof Client2Server.C2LS_PK_GetRoomData
         * @instance
         */
        C2LS_PK_GetRoomData.prototype.roomId = "";

        /**
         * Encodes the specified C2LS_PK_GetRoomData message. Does not implicitly {@link Client2Server.C2LS_PK_GetRoomData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_GetRoomData
         * @static
         * @param {Client2Server.C2LS_PK_GetRoomData} m C2LS_PK_GetRoomData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_GetRoomData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_GetRoomData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10078 OpCode value
         */
        C2LS_PK_GetRoomData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10078] = "OpCode"] = 10078;
            return values;
        })();

        return C2LS_PK_GetRoomData;
    })();

    Client2Server.C2LS_PK_ReportScore = (function() {

        /**
         * Properties of a C2LS_PK_ReportScore.
         * @memberof Client2Server
         * @interface IC2LS_PK_ReportScore
         * @property {string|null} [matchToken] C2LS_PK_ReportScore matchToken
         * @property {number|null} [score] C2LS_PK_ReportScore score
         * @property {string|null} [roomId] C2LS_PK_ReportScore roomId
         */

        /**
         * Constructs a new C2LS_PK_ReportScore.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_ReportScore.
         * @implements IC2LS_PK_ReportScore
         * @constructor
         * @param {Client2Server.IC2LS_PK_ReportScore=} [p] Properties to set
         */
        function C2LS_PK_ReportScore(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_ReportScore matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_PK_ReportScore
         * @instance
         */
        C2LS_PK_ReportScore.prototype.matchToken = "";

        /**
         * C2LS_PK_ReportScore score.
         * @member {number} score
         * @memberof Client2Server.C2LS_PK_ReportScore
         * @instance
         */
        C2LS_PK_ReportScore.prototype.score = 0;

        /**
         * C2LS_PK_ReportScore roomId.
         * @member {string} roomId
         * @memberof Client2Server.C2LS_PK_ReportScore
         * @instance
         */
        C2LS_PK_ReportScore.prototype.roomId = "";

        /**
         * Encodes the specified C2LS_PK_ReportScore message. Does not implicitly {@link Client2Server.C2LS_PK_ReportScore.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_ReportScore
         * @static
         * @param {Client2Server.C2LS_PK_ReportScore} m C2LS_PK_ReportScore message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_ReportScore.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(16).int32(m.score);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(26).string(m.roomId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_ReportScore.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10079 OpCode value
         */
        C2LS_PK_ReportScore.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10079] = "OpCode"] = 10079;
            return values;
        })();

        return C2LS_PK_ReportScore;
    })();

    Client2Server.C2LS_PK_GameOver = (function() {

        /**
         * Properties of a C2LS_PK_GameOver.
         * @memberof Client2Server
         * @interface IC2LS_PK_GameOver
         * @property {string|null} [matchToken] C2LS_PK_GameOver matchToken
         * @property {number|null} [score] C2LS_PK_GameOver score
         * @property {string|null} [roomId] C2LS_PK_GameOver roomId
         */

        /**
         * Constructs a new C2LS_PK_GameOver.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_GameOver.
         * @implements IC2LS_PK_GameOver
         * @constructor
         * @param {Client2Server.IC2LS_PK_GameOver=} [p] Properties to set
         */
        function C2LS_PK_GameOver(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_GameOver matchToken.
         * @member {string} matchToken
         * @memberof Client2Server.C2LS_PK_GameOver
         * @instance
         */
        C2LS_PK_GameOver.prototype.matchToken = "";

        /**
         * C2LS_PK_GameOver score.
         * @member {number} score
         * @memberof Client2Server.C2LS_PK_GameOver
         * @instance
         */
        C2LS_PK_GameOver.prototype.score = 0;

        /**
         * C2LS_PK_GameOver roomId.
         * @member {string} roomId
         * @memberof Client2Server.C2LS_PK_GameOver
         * @instance
         */
        C2LS_PK_GameOver.prototype.roomId = "";

        /**
         * Encodes the specified C2LS_PK_GameOver message. Does not implicitly {@link Client2Server.C2LS_PK_GameOver.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_GameOver
         * @static
         * @param {Client2Server.C2LS_PK_GameOver} m C2LS_PK_GameOver message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_GameOver.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.matchToken != null && Object.hasOwnProperty.call(m, "matchToken"))
                w.uint32(10).string(m.matchToken);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(16).int32(m.score);
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(26).string(m.roomId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_GameOver.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10080 OpCode value
         */
        C2LS_PK_GameOver.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10080] = "OpCode"] = 10080;
            return values;
        })();

        return C2LS_PK_GameOver;
    })();

    Client2Server.C2LS_PK_GetItem = (function() {

        /**
         * Properties of a C2LS_PK_GetItem.
         * @memberof Client2Server
         * @interface IC2LS_PK_GetItem
         * @property {number|null} [propId] C2LS_PK_GetItem propId
         */

        /**
         * Constructs a new C2LS_PK_GetItem.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_GetItem.
         * @implements IC2LS_PK_GetItem
         * @constructor
         * @param {Client2Server.IC2LS_PK_GetItem=} [p] Properties to set
         */
        function C2LS_PK_GetItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_GetItem propId.
         * @member {number} propId
         * @memberof Client2Server.C2LS_PK_GetItem
         * @instance
         */
        C2LS_PK_GetItem.prototype.propId = 0;

        /**
         * Encodes the specified C2LS_PK_GetItem message. Does not implicitly {@link Client2Server.C2LS_PK_GetItem.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_GetItem
         * @static
         * @param {Client2Server.C2LS_PK_GetItem} m C2LS_PK_GetItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_GetItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.propId != null && Object.hasOwnProperty.call(m, "propId"))
                w.uint32(8).int32(m.propId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_GetItem.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10081 OpCode value
         */
        C2LS_PK_GetItem.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10081] = "OpCode"] = 10081;
            return values;
        })();

        return C2LS_PK_GetItem;
    })();

    Client2Server.C2LS_PK_UseItem = (function() {

        /**
         * Properties of a C2LS_PK_UseItem.
         * @memberof Client2Server
         * @interface IC2LS_PK_UseItem
         * @property {number|null} [propId] C2LS_PK_UseItem propId
         */

        /**
         * Constructs a new C2LS_PK_UseItem.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_UseItem.
         * @implements IC2LS_PK_UseItem
         * @constructor
         * @param {Client2Server.IC2LS_PK_UseItem=} [p] Properties to set
         */
        function C2LS_PK_UseItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_UseItem propId.
         * @member {number} propId
         * @memberof Client2Server.C2LS_PK_UseItem
         * @instance
         */
        C2LS_PK_UseItem.prototype.propId = 0;

        /**
         * Encodes the specified C2LS_PK_UseItem message. Does not implicitly {@link Client2Server.C2LS_PK_UseItem.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_UseItem
         * @static
         * @param {Client2Server.C2LS_PK_UseItem} m C2LS_PK_UseItem message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_UseItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.propId != null && Object.hasOwnProperty.call(m, "propId"))
                w.uint32(8).int32(m.propId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_UseItem.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10082 OpCode value
         */
        C2LS_PK_UseItem.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10082] = "OpCode"] = 10082;
            return values;
        })();

        return C2LS_PK_UseItem;
    })();

    Client2Server.C2LS_PK_GetMatchInfo = (function() {

        /**
         * Properties of a C2LS_PK_GetMatchInfo.
         * @memberof Client2Server
         * @interface IC2LS_PK_GetMatchInfo
         */

        /**
         * Constructs a new C2LS_PK_GetMatchInfo.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_GetMatchInfo.
         * @implements IC2LS_PK_GetMatchInfo
         * @constructor
         * @param {Client2Server.IC2LS_PK_GetMatchInfo=} [p] Properties to set
         */
        function C2LS_PK_GetMatchInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * Encodes the specified C2LS_PK_GetMatchInfo message. Does not implicitly {@link Client2Server.C2LS_PK_GetMatchInfo.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_GetMatchInfo
         * @static
         * @param {Client2Server.C2LS_PK_GetMatchInfo} m C2LS_PK_GetMatchInfo message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_GetMatchInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_GetMatchInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10083 OpCode value
         */
        C2LS_PK_GetMatchInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10083] = "OpCode"] = 10083;
            return values;
        })();

        return C2LS_PK_GetMatchInfo;
    })();

    Client2Server.C2LS_PK_ClaimReward = (function() {

        /**
         * Properties of a C2LS_PK_ClaimReward.
         * @memberof Client2Server
         * @interface IC2LS_PK_ClaimReward
         * @property {number|null} [rewardIndex] C2LS_PK_ClaimReward rewardIndex
         * @property {number|null} [activityId] C2LS_PK_ClaimReward activityId
         */

        /**
         * Constructs a new C2LS_PK_ClaimReward.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_ClaimReward.
         * @implements IC2LS_PK_ClaimReward
         * @constructor
         * @param {Client2Server.IC2LS_PK_ClaimReward=} [p] Properties to set
         */
        function C2LS_PK_ClaimReward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_ClaimReward rewardIndex.
         * @member {number} rewardIndex
         * @memberof Client2Server.C2LS_PK_ClaimReward
         * @instance
         */
        C2LS_PK_ClaimReward.prototype.rewardIndex = 0;

        /**
         * C2LS_PK_ClaimReward activityId.
         * @member {number} activityId
         * @memberof Client2Server.C2LS_PK_ClaimReward
         * @instance
         */
        C2LS_PK_ClaimReward.prototype.activityId = 0;

        /**
         * Encodes the specified C2LS_PK_ClaimReward message. Does not implicitly {@link Client2Server.C2LS_PK_ClaimReward.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_ClaimReward
         * @static
         * @param {Client2Server.C2LS_PK_ClaimReward} m C2LS_PK_ClaimReward message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_ClaimReward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.rewardIndex != null && Object.hasOwnProperty.call(m, "rewardIndex"))
                w.uint32(8).int32(m.rewardIndex);
            if (m.activityId != null && Object.hasOwnProperty.call(m, "activityId"))
                w.uint32(16).int32(m.activityId);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_ClaimReward.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10085 OpCode value
         */
        C2LS_PK_ClaimReward.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10085] = "OpCode"] = 10085;
            return values;
        })();

        return C2LS_PK_ClaimReward;
    })();

    Client2Server.C2LS_PK_UpdatePlayerState = (function() {

        /**
         * Properties of a C2LS_PK_UpdatePlayerState.
         * @memberof Client2Server
         * @interface IC2LS_PK_UpdatePlayerState
         * @property {string|null} [roomId] C2LS_PK_UpdatePlayerState roomId
         * @property {common.EPlayerStatusInRoom|null} [status] C2LS_PK_UpdatePlayerState status
         */

        /**
         * Constructs a new C2LS_PK_UpdatePlayerState.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_PK_UpdatePlayerState.
         * @implements IC2LS_PK_UpdatePlayerState
         * @constructor
         * @param {Client2Server.IC2LS_PK_UpdatePlayerState=} [p] Properties to set
         */
        function C2LS_PK_UpdatePlayerState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_PK_UpdatePlayerState roomId.
         * @member {string} roomId
         * @memberof Client2Server.C2LS_PK_UpdatePlayerState
         * @instance
         */
        C2LS_PK_UpdatePlayerState.prototype.roomId = "";

        /**
         * C2LS_PK_UpdatePlayerState status.
         * @member {common.EPlayerStatusInRoom} status
         * @memberof Client2Server.C2LS_PK_UpdatePlayerState
         * @instance
         */
        C2LS_PK_UpdatePlayerState.prototype.status = 0;

        /**
         * Encodes the specified C2LS_PK_UpdatePlayerState message. Does not implicitly {@link Client2Server.C2LS_PK_UpdatePlayerState.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_PK_UpdatePlayerState
         * @static
         * @param {Client2Server.C2LS_PK_UpdatePlayerState} m C2LS_PK_UpdatePlayerState message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_PK_UpdatePlayerState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(10).string(m.roomId);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(16).int32(m.status);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_PK_UpdatePlayerState.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10086 OpCode value
         */
        C2LS_PK_UpdatePlayerState.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10086] = "OpCode"] = 10086;
            return values;
        })();

        return C2LS_PK_UpdatePlayerState;
    })();

    Client2Server.C2LS_SyncPkMatchGameData = (function() {

        /**
         * Properties of a C2LS_SyncPkMatchGameData.
         * @memberof Client2Server
         * @interface IC2LS_SyncPkMatchGameData
         * @property {string|null} [token] C2LS_SyncPkMatchGameData token
         * @property {string|null} [stepData] C2LS_SyncPkMatchGameData stepData
         * @property {string|null} [snapshot] C2LS_SyncPkMatchGameData snapshot
         * @property {number|null} [minStep] C2LS_SyncPkMatchGameData minStep
         * @property {number|null} [maxStep] C2LS_SyncPkMatchGameData maxStep
         * @property {number|null} [score] C2LS_SyncPkMatchGameData score
         */

        /**
         * Constructs a new C2LS_SyncPkMatchGameData.
         * @memberof Client2Server
         * @classdesc Represents a C2LS_SyncPkMatchGameData.
         * @implements IC2LS_SyncPkMatchGameData
         * @constructor
         * @param {Client2Server.IC2LS_SyncPkMatchGameData=} [p] Properties to set
         */
        function C2LS_SyncPkMatchGameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * C2LS_SyncPkMatchGameData token.
         * @member {string} token
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @instance
         */
        C2LS_SyncPkMatchGameData.prototype.token = "";

        /**
         * C2LS_SyncPkMatchGameData stepData.
         * @member {string} stepData
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @instance
         */
        C2LS_SyncPkMatchGameData.prototype.stepData = "";

        /**
         * C2LS_SyncPkMatchGameData snapshot.
         * @member {string} snapshot
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @instance
         */
        C2LS_SyncPkMatchGameData.prototype.snapshot = "";

        /**
         * C2LS_SyncPkMatchGameData minStep.
         * @member {number} minStep
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @instance
         */
        C2LS_SyncPkMatchGameData.prototype.minStep = 0;

        /**
         * C2LS_SyncPkMatchGameData maxStep.
         * @member {number} maxStep
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @instance
         */
        C2LS_SyncPkMatchGameData.prototype.maxStep = 0;

        /**
         * C2LS_SyncPkMatchGameData score.
         * @member {number} score
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @instance
         */
        C2LS_SyncPkMatchGameData.prototype.score = 0;

        /**
         * Encodes the specified C2LS_SyncPkMatchGameData message. Does not implicitly {@link Client2Server.C2LS_SyncPkMatchGameData.verify|verify} messages.
         * @function encode
         * @memberof Client2Server.C2LS_SyncPkMatchGameData
         * @static
         * @param {Client2Server.C2LS_SyncPkMatchGameData} m C2LS_SyncPkMatchGameData message or plain object to encode
         * @param {$protobuf.Writer} [w] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2LS_SyncPkMatchGameData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                w.uint32(10).string(m.token);
            if (m.stepData != null && Object.hasOwnProperty.call(m, "stepData"))
                w.uint32(18).string(m.stepData);
            if (m.snapshot != null && Object.hasOwnProperty.call(m, "snapshot"))
                w.uint32(26).string(m.snapshot);
            if (m.minStep != null && Object.hasOwnProperty.call(m, "minStep"))
                w.uint32(32).int32(m.minStep);
            if (m.maxStep != null && Object.hasOwnProperty.call(m, "maxStep"))
                w.uint32(40).int32(m.maxStep);
            if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                w.uint32(48).int32(m.score);
            return w;
        };

        /**
         * N enum.
         * @name Client2Server.C2LS_SyncPkMatchGameData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=10087 OpCode value
         */
        C2LS_SyncPkMatchGameData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[10087] = "OpCode"] = 10087;
            return values;
        })();

        return C2LS_SyncPkMatchGameData;
    })();

    return Client2Server;
})();

export const protocol = $root.protocol = (() => {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    const protocol = {};

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

        return EndlessGameMsg;
    })();

    return protocol;
})();

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

export { $root as default };
