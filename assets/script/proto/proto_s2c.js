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

export const Server2Client = $root.Server2Client = (() => {

    /**
     * Namespace Server2Client.
     * @exports Server2Client
     * @namespace
     */
    const Server2Client = {};

    Server2Client.LS2C_LoginSuccess = (function() {

        /**
         * Properties of a LS2C_LoginSuccess.
         * @memberof Server2Client
         * @interface ILS2C_LoginSuccess
         * @property {Server2Client.LS2C_LoginSuccess.AckCode|null} [ackCode] LS2C_LoginSuccess ackCode
         * @property {boolean|null} [isOnlyNetRestore] LS2C_LoginSuccess isOnlyNetRestore
         * @property {string|null} [sessionId] LS2C_LoginSuccess sessionId
         * @property {number|null} [msgNo] LS2C_LoginSuccess msgNo
         */

        /**
         * Constructs a new LS2C_LoginSuccess.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_LoginSuccess.
         * @implements ILS2C_LoginSuccess
         * @constructor
         * @param {Server2Client.ILS2C_LoginSuccess=} [p] Properties to set
         */
        function LS2C_LoginSuccess(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_LoginSuccess ackCode.
         * @member {Server2Client.LS2C_LoginSuccess.AckCode} ackCode
         * @memberof Server2Client.LS2C_LoginSuccess
         * @instance
         */
        LS2C_LoginSuccess.prototype.ackCode = 0;

        /**
         * LS2C_LoginSuccess isOnlyNetRestore.
         * @member {boolean} isOnlyNetRestore
         * @memberof Server2Client.LS2C_LoginSuccess
         * @instance
         */
        LS2C_LoginSuccess.prototype.isOnlyNetRestore = false;

        /**
         * LS2C_LoginSuccess sessionId.
         * @member {string} sessionId
         * @memberof Server2Client.LS2C_LoginSuccess
         * @instance
         */
        LS2C_LoginSuccess.prototype.sessionId = "";

        /**
         * LS2C_LoginSuccess msgNo.
         * @member {number} msgNo
         * @memberof Server2Client.LS2C_LoginSuccess
         * @instance
         */
        LS2C_LoginSuccess.prototype.msgNo = 0;

        /**
         * Decodes a LS2C_LoginSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_LoginSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_LoginSuccess} LS2C_LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_LoginSuccess.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_LoginSuccess();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.isOnlyNetRestore = r.bool();
                        break;
                    }
                case 3: {
                        m.sessionId = r.string();
                        break;
                    }
                case 4: {
                        m.msgNo = r.int32();
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
         * @name Server2Client.LS2C_LoginSuccess.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20000 OpCode value
         */
        LS2C_LoginSuccess.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20000] = "OpCode"] = 20000;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_LoginSuccess.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_LoginSuccess.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_LoginSuccess;
    })();

    Server2Client.LS2C_PlayerInfo = (function() {

        /**
         * Properties of a LS2C_PlayerInfo.
         * @memberof Server2Client
         * @interface ILS2C_PlayerInfo
         * @property {string|null} [name] LS2C_PlayerInfo name
         * @property {string|null} [avatar] LS2C_PlayerInfo avatar
         * @property {number|null} [adCode] LS2C_PlayerInfo adCode
         * @property {common.EGender|null} [gender] LS2C_PlayerInfo gender
         * @property {string|null} [liteId] LS2C_PlayerInfo liteId
         * @property {number|null} [guideId] LS2C_PlayerInfo guideId
         * @property {boolean|null} [isShowBeginnerTask] LS2C_PlayerInfo isShowBeginnerTask
         * @property {number|null} [status] LS2C_PlayerInfo status
         * @property {string|null} [sign] LS2C_PlayerInfo sign
         * @property {Server2Client.GameData|null} [gameData] LS2C_PlayerInfo gameData
         */

        /**
         * Constructs a new LS2C_PlayerInfo.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PlayerInfo.
         * @implements ILS2C_PlayerInfo
         * @constructor
         * @param {Server2Client.ILS2C_PlayerInfo=} [p] Properties to set
         */
        function LS2C_PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PlayerInfo name.
         * @member {string} name
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.name = "";

        /**
         * LS2C_PlayerInfo avatar.
         * @member {string} avatar
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.avatar = "";

        /**
         * LS2C_PlayerInfo adCode.
         * @member {number} adCode
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.adCode = 0;

        /**
         * LS2C_PlayerInfo gender.
         * @member {common.EGender} gender
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.gender = 0;

        /**
         * LS2C_PlayerInfo liteId.
         * @member {string} liteId
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.liteId = "";

        /**
         * LS2C_PlayerInfo guideId.
         * @member {number} guideId
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.guideId = 0;

        /**
         * LS2C_PlayerInfo isShowBeginnerTask.
         * @member {boolean} isShowBeginnerTask
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.isShowBeginnerTask = false;

        /**
         * LS2C_PlayerInfo status.
         * @member {number} status
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.status = 0;

        /**
         * LS2C_PlayerInfo sign.
         * @member {string} sign
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.sign = "";

        /**
         * LS2C_PlayerInfo gameData.
         * @member {Server2Client.GameData|null|undefined} gameData
         * @memberof Server2Client.LS2C_PlayerInfo
         * @instance
         */
        LS2C_PlayerInfo.prototype.gameData = null;

        /**
         * Decodes a LS2C_PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PlayerInfo} LS2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.name = r.string();
                        break;
                    }
                case 2: {
                        m.avatar = r.string();
                        break;
                    }
                case 3: {
                        m.adCode = r.int32();
                        break;
                    }
                case 4: {
                        m.gender = r.int32();
                        break;
                    }
                case 5: {
                        m.liteId = r.string();
                        break;
                    }
                case 6: {
                        m.guideId = r.int32();
                        break;
                    }
                case 7: {
                        m.isShowBeginnerTask = r.bool();
                        break;
                    }
                case 8: {
                        m.status = r.int32();
                        break;
                    }
                case 9: {
                        m.sign = r.string();
                        break;
                    }
                case 10: {
                        m.gameData = $root.Server2Client.GameData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PlayerInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20001 OpCode value
         */
        LS2C_PlayerInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20001] = "OpCode"] = 20001;
            return values;
        })();

        return LS2C_PlayerInfo;
    })();

    Server2Client.LS2C_PlayerReadyAckInfo = (function() {

        /**
         * Properties of a LS2C_PlayerReadyAckInfo.
         * @memberof Server2Client
         * @interface ILS2C_PlayerReadyAckInfo
         * @property {Server2Client.LS2C_PlayerReadyAckInfo.AckCode|null} [ackCode] LS2C_PlayerReadyAckInfo ackCode
         * @property {Long|null} [serverTimeMs] LS2C_PlayerReadyAckInfo serverTimeMs
         */

        /**
         * Constructs a new LS2C_PlayerReadyAckInfo.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PlayerReadyAckInfo.
         * @implements ILS2C_PlayerReadyAckInfo
         * @constructor
         * @param {Server2Client.ILS2C_PlayerReadyAckInfo=} [p] Properties to set
         */
        function LS2C_PlayerReadyAckInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PlayerReadyAckInfo ackCode.
         * @member {Server2Client.LS2C_PlayerReadyAckInfo.AckCode} ackCode
         * @memberof Server2Client.LS2C_PlayerReadyAckInfo
         * @instance
         */
        LS2C_PlayerReadyAckInfo.prototype.ackCode = 0;

        /**
         * LS2C_PlayerReadyAckInfo serverTimeMs.
         * @member {Long} serverTimeMs
         * @memberof Server2Client.LS2C_PlayerReadyAckInfo
         * @instance
         */
        LS2C_PlayerReadyAckInfo.prototype.serverTimeMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a LS2C_PlayerReadyAckInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PlayerReadyAckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PlayerReadyAckInfo} LS2C_PlayerReadyAckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PlayerReadyAckInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PlayerReadyAckInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.serverTimeMs = r.int64();
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
         * @name Server2Client.LS2C_PlayerReadyAckInfo.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20002 OpCode value
         */
        LS2C_PlayerReadyAckInfo.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20002] = "OpCode"] = 20002;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_PlayerReadyAckInfo.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_PlayerReadyAckInfo.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_PlayerReadyAckInfo;
    })();

    Server2Client.LS2C_UpdatePlayerBaseInfoAck = (function() {

        /**
         * Properties of a LS2C_UpdatePlayerBaseInfoAck.
         * @memberof Server2Client
         * @interface ILS2C_UpdatePlayerBaseInfoAck
         * @property {Server2Client.LS2C_UpdatePlayerBaseInfoAck.AckCode|null} [code] LS2C_UpdatePlayerBaseInfoAck code
         */

        /**
         * Constructs a new LS2C_UpdatePlayerBaseInfoAck.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_UpdatePlayerBaseInfoAck.
         * @implements ILS2C_UpdatePlayerBaseInfoAck
         * @constructor
         * @param {Server2Client.ILS2C_UpdatePlayerBaseInfoAck=} [p] Properties to set
         */
        function LS2C_UpdatePlayerBaseInfoAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_UpdatePlayerBaseInfoAck code.
         * @member {Server2Client.LS2C_UpdatePlayerBaseInfoAck.AckCode} code
         * @memberof Server2Client.LS2C_UpdatePlayerBaseInfoAck
         * @instance
         */
        LS2C_UpdatePlayerBaseInfoAck.prototype.code = 0;

        /**
         * Decodes a LS2C_UpdatePlayerBaseInfoAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_UpdatePlayerBaseInfoAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_UpdatePlayerBaseInfoAck} LS2C_UpdatePlayerBaseInfoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_UpdatePlayerBaseInfoAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_UpdatePlayerBaseInfoAck();
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
         * @name Server2Client.LS2C_UpdatePlayerBaseInfoAck.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20003 OpCode value
         */
        LS2C_UpdatePlayerBaseInfoAck.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20003] = "OpCode"] = 20003;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_UpdatePlayerBaseInfoAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_UpdatePlayerBaseInfoAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_UpdatePlayerBaseInfoAck;
    })();

    Server2Client.LS2C_SetPlayerInfoAck = (function() {

        /**
         * Properties of a LS2C_SetPlayerInfoAck.
         * @memberof Server2Client
         * @interface ILS2C_SetPlayerInfoAck
         * @property {Server2Client.LS2C_SetPlayerInfoAck.AckCode|null} [ackCode] LS2C_SetPlayerInfoAck ackCode
         */

        /**
         * Constructs a new LS2C_SetPlayerInfoAck.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetPlayerInfoAck.
         * @implements ILS2C_SetPlayerInfoAck
         * @constructor
         * @param {Server2Client.ILS2C_SetPlayerInfoAck=} [p] Properties to set
         */
        function LS2C_SetPlayerInfoAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetPlayerInfoAck ackCode.
         * @member {Server2Client.LS2C_SetPlayerInfoAck.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetPlayerInfoAck
         * @instance
         */
        LS2C_SetPlayerInfoAck.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_SetPlayerInfoAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetPlayerInfoAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetPlayerInfoAck} LS2C_SetPlayerInfoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetPlayerInfoAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetPlayerInfoAck();
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
         * @name Server2Client.LS2C_SetPlayerInfoAck.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20005 OpCode value
         */
        LS2C_SetPlayerInfoAck.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20005] = "OpCode"] = 20005;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_SetPlayerInfoAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetPlayerInfoAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetPlayerInfoAck;
    })();

    Server2Client.GameData = (function() {

        /**
         * Properties of a GameData.
         * @memberof Server2Client
         * @interface IGameData
         * @property {number|null} [coin] GameData coin
         * @property {number|null} [star] GameData star
         * @property {number|null} [mushroomCapacity] GameData mushroomCapacity
         * @property {number|null} [coinAdLeftCount] GameData coinAdLeftCount
         * @property {number|null} [speedAdCount] GameData speedAdCount
         * @property {number|null} [randMushroomAdCount] GameData randMushroomAdCount
         * @property {number|null} [freeExtractCount] GameData freeExtractCount
         * @property {number|null} [waterCoin] GameData waterCoin
         * @property {number|null} [recommendAdCountToday] GameData recommendAdCountToday
         * @property {number|null} [refreshOrderCountToday] GameData refreshOrderCountToday
         */

        /**
         * Constructs a new GameData.
         * @memberof Server2Client
         * @classdesc Represents a GameData.
         * @implements IGameData
         * @constructor
         * @param {Server2Client.IGameData=} [p] Properties to set
         */
        function GameData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GameData coin.
         * @member {number} coin
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.coin = 0;

        /**
         * GameData star.
         * @member {number} star
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.star = 0;

        /**
         * GameData mushroomCapacity.
         * @member {number} mushroomCapacity
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.mushroomCapacity = 0;

        /**
         * GameData coinAdLeftCount.
         * @member {number} coinAdLeftCount
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.coinAdLeftCount = 0;

        /**
         * GameData speedAdCount.
         * @member {number} speedAdCount
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.speedAdCount = 0;

        /**
         * GameData randMushroomAdCount.
         * @member {number} randMushroomAdCount
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.randMushroomAdCount = 0;

        /**
         * GameData freeExtractCount.
         * @member {number} freeExtractCount
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.freeExtractCount = 0;

        /**
         * GameData waterCoin.
         * @member {number} waterCoin
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.waterCoin = 0;

        /**
         * GameData recommendAdCountToday.
         * @member {number} recommendAdCountToday
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.recommendAdCountToday = 0;

        /**
         * GameData refreshOrderCountToday.
         * @member {number} refreshOrderCountToday
         * @memberof Server2Client.GameData
         * @instance
         */
        GameData.prototype.refreshOrderCountToday = 0;

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.GameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.GameData} GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.GameData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.coin = r.int32();
                        break;
                    }
                case 2: {
                        m.star = r.int32();
                        break;
                    }
                case 3: {
                        m.mushroomCapacity = r.int32();
                        break;
                    }
                case 4: {
                        m.coinAdLeftCount = r.int32();
                        break;
                    }
                case 5: {
                        m.speedAdCount = r.int32();
                        break;
                    }
                case 6: {
                        m.randMushroomAdCount = r.int32();
                        break;
                    }
                case 7: {
                        m.freeExtractCount = r.int32();
                        break;
                    }
                case 8: {
                        m.waterCoin = r.int32();
                        break;
                    }
                case 9: {
                        m.recommendAdCountToday = r.int32();
                        break;
                    }
                case 10: {
                        m.refreshOrderCountToday = r.int32();
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
         * @name Server2Client.GameData.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20006 OpCode value
         */
        GameData.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20006] = "OpCode"] = 20006;
            return values;
        })();

        return GameData;
    })();

    Server2Client.GetActivityStatusAck = (function() {

        /**
         * Properties of a GetActivityStatusAck.
         * @memberof Server2Client
         * @interface IGetActivityStatusAck
         * @property {Server2Client.GetActivityStatusAck.AckCode|null} [code] GetActivityStatusAck code
         * @property {Array.<Server2Client.ActivityStatusInfo>|null} [activityStatusInfo] GetActivityStatusAck activityStatusInfo
         * @property {number|null} [gmLevel] GetActivityStatusAck gmLevel
         */

        /**
         * Constructs a new GetActivityStatusAck.
         * @memberof Server2Client
         * @classdesc Represents a GetActivityStatusAck.
         * @implements IGetActivityStatusAck
         * @constructor
         * @param {Server2Client.IGetActivityStatusAck=} [p] Properties to set
         */
        function GetActivityStatusAck(p) {
            this.activityStatusInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetActivityStatusAck code.
         * @member {Server2Client.GetActivityStatusAck.AckCode} code
         * @memberof Server2Client.GetActivityStatusAck
         * @instance
         */
        GetActivityStatusAck.prototype.code = 0;

        /**
         * GetActivityStatusAck activityStatusInfo.
         * @member {Array.<Server2Client.ActivityStatusInfo>} activityStatusInfo
         * @memberof Server2Client.GetActivityStatusAck
         * @instance
         */
        GetActivityStatusAck.prototype.activityStatusInfo = $util.emptyArray;

        /**
         * GetActivityStatusAck gmLevel.
         * @member {number} gmLevel
         * @memberof Server2Client.GetActivityStatusAck
         * @instance
         */
        GetActivityStatusAck.prototype.gmLevel = 0;

        /**
         * Decodes a GetActivityStatusAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.GetActivityStatusAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.GetActivityStatusAck} GetActivityStatusAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetActivityStatusAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.GetActivityStatusAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.activityStatusInfo && m.activityStatusInfo.length))
                            m.activityStatusInfo = [];
                        m.activityStatusInfo.push($root.Server2Client.ActivityStatusInfo.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
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
         * AckCode enum.
         * @name Server2Client.GetActivityStatusAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        GetActivityStatusAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return GetActivityStatusAck;
    })();

    Server2Client.ActivityStatusInfo = (function() {

        /**
         * Properties of an ActivityStatusInfo.
         * @memberof Server2Client
         * @interface IActivityStatusInfo
         * @property {number|null} [activityType] ActivityStatusInfo activityType
         * @property {number|null} [activityId] ActivityStatusInfo activityId
         * @property {protocol.EActivityStatus|null} [status] ActivityStatusInfo status
         * @property {Long|null} [startTime] ActivityStatusInfo startTime
         * @property {Long|null} [endTime] ActivityStatusInfo endTime
         * @property {number|null} [gmLevelCondition] ActivityStatusInfo gmLevelCondition
         * @property {boolean|null} [isOpen] ActivityStatusInfo isOpen
         */

        /**
         * Constructs a new ActivityStatusInfo.
         * @memberof Server2Client
         * @classdesc Represents an ActivityStatusInfo.
         * @implements IActivityStatusInfo
         * @constructor
         * @param {Server2Client.IActivityStatusInfo=} [p] Properties to set
         */
        function ActivityStatusInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ActivityStatusInfo activityType.
         * @member {number} activityType
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.activityType = 0;

        /**
         * ActivityStatusInfo activityId.
         * @member {number} activityId
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.activityId = 0;

        /**
         * ActivityStatusInfo status.
         * @member {protocol.EActivityStatus} status
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.status = 0;

        /**
         * ActivityStatusInfo startTime.
         * @member {Long} startTime
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityStatusInfo endTime.
         * @member {Long} endTime
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ActivityStatusInfo gmLevelCondition.
         * @member {number} gmLevelCondition
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.gmLevelCondition = 0;

        /**
         * ActivityStatusInfo isOpen.
         * @member {boolean} isOpen
         * @memberof Server2Client.ActivityStatusInfo
         * @instance
         */
        ActivityStatusInfo.prototype.isOpen = false;

        /**
         * Decodes an ActivityStatusInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ActivityStatusInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ActivityStatusInfo} ActivityStatusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityStatusInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ActivityStatusInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.activityType = r.int32();
                        break;
                    }
                case 2: {
                        m.activityId = r.int32();
                        break;
                    }
                case 3: {
                        m.status = r.int32();
                        break;
                    }
                case 4: {
                        m.startTime = r.int64();
                        break;
                    }
                case 5: {
                        m.endTime = r.int64();
                        break;
                    }
                case 6: {
                        m.gmLevelCondition = r.int32();
                        break;
                    }
                case 7: {
                        m.isOpen = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActivityStatusInfo;
    })();

    Server2Client.GetUserActivityDataAck = (function() {

        /**
         * Properties of a GetUserActivityDataAck.
         * @memberof Server2Client
         * @interface IGetUserActivityDataAck
         * @property {Server2Client.GetUserActivityDataAck.AckCode|null} [code] GetUserActivityDataAck code
         * @property {Array.<Server2Client.UserActivityInfo>|null} [activityData] GetUserActivityDataAck activityData
         */

        /**
         * Constructs a new GetUserActivityDataAck.
         * @memberof Server2Client
         * @classdesc Represents a GetUserActivityDataAck.
         * @implements IGetUserActivityDataAck
         * @constructor
         * @param {Server2Client.IGetUserActivityDataAck=} [p] Properties to set
         */
        function GetUserActivityDataAck(p) {
            this.activityData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetUserActivityDataAck code.
         * @member {Server2Client.GetUserActivityDataAck.AckCode} code
         * @memberof Server2Client.GetUserActivityDataAck
         * @instance
         */
        GetUserActivityDataAck.prototype.code = 0;

        /**
         * GetUserActivityDataAck activityData.
         * @member {Array.<Server2Client.UserActivityInfo>} activityData
         * @memberof Server2Client.GetUserActivityDataAck
         * @instance
         */
        GetUserActivityDataAck.prototype.activityData = $util.emptyArray;

        /**
         * Decodes a GetUserActivityDataAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.GetUserActivityDataAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.GetUserActivityDataAck} GetUserActivityDataAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserActivityDataAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.GetUserActivityDataAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.activityData && m.activityData.length))
                            m.activityData = [];
                        m.activityData.push($root.Server2Client.UserActivityInfo.decode(r, r.uint32()));
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
         * @name Server2Client.GetUserActivityDataAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         */
        GetUserActivityDataAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            return values;
        })();

        return GetUserActivityDataAck;
    })();

    Server2Client.ActivityConfig = (function() {

        /**
         * Properties of an ActivityConfig.
         * @memberof Server2Client
         * @interface IActivityConfig
         * @property {number|null} [activityId] ActivityConfig activityId
         * @property {number|null} [activityType] ActivityConfig activityType
         * @property {number|null} [endTime] ActivityConfig endTime
         * @property {Array.<Server2Client.ActivityProgress>|null} [activityConf] ActivityConfig activityConf
         */

        /**
         * Constructs a new ActivityConfig.
         * @memberof Server2Client
         * @classdesc Represents an ActivityConfig.
         * @implements IActivityConfig
         * @constructor
         * @param {Server2Client.IActivityConfig=} [p] Properties to set
         */
        function ActivityConfig(p) {
            this.activityConf = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ActivityConfig activityId.
         * @member {number} activityId
         * @memberof Server2Client.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.activityId = 0;

        /**
         * ActivityConfig activityType.
         * @member {number} activityType
         * @memberof Server2Client.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.activityType = 0;

        /**
         * ActivityConfig endTime.
         * @member {number} endTime
         * @memberof Server2Client.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.endTime = 0;

        /**
         * ActivityConfig activityConf.
         * @member {Array.<Server2Client.ActivityProgress>} activityConf
         * @memberof Server2Client.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.activityConf = $util.emptyArray;

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ActivityConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ActivityConfig} ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ActivityConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.activityId = r.int32();
                        break;
                    }
                case 2: {
                        m.activityType = r.int32();
                        break;
                    }
                case 3: {
                        m.endTime = r.int32();
                        break;
                    }
                case 4: {
                        if (!(m.activityConf && m.activityConf.length))
                            m.activityConf = [];
                        m.activityConf.push($root.Server2Client.ActivityProgress.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActivityConfig;
    })();

    Server2Client.ActivityProgress = (function() {

        /**
         * Properties of an ActivityProgress.
         * @memberof Server2Client
         * @interface IActivityProgress
         * @property {number|null} [conditionType] ActivityProgress conditionType
         * @property {number|null} [conditionValue] ActivityProgress conditionValue
         * @property {Array.<protocol.AwardInfo>|null} [awardList] ActivityProgress awardList
         */

        /**
         * Constructs a new ActivityProgress.
         * @memberof Server2Client
         * @classdesc Represents an ActivityProgress.
         * @implements IActivityProgress
         * @constructor
         * @param {Server2Client.IActivityProgress=} [p] Properties to set
         */
        function ActivityProgress(p) {
            this.awardList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ActivityProgress conditionType.
         * @member {number} conditionType
         * @memberof Server2Client.ActivityProgress
         * @instance
         */
        ActivityProgress.prototype.conditionType = 0;

        /**
         * ActivityProgress conditionValue.
         * @member {number} conditionValue
         * @memberof Server2Client.ActivityProgress
         * @instance
         */
        ActivityProgress.prototype.conditionValue = 0;

        /**
         * ActivityProgress awardList.
         * @member {Array.<protocol.AwardInfo>} awardList
         * @memberof Server2Client.ActivityProgress
         * @instance
         */
        ActivityProgress.prototype.awardList = $util.emptyArray;

        /**
         * Decodes an ActivityProgress message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ActivityProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ActivityProgress} ActivityProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityProgress.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ActivityProgress();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.conditionType = r.int32();
                        break;
                    }
                case 2: {
                        m.conditionValue = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.awardList && m.awardList.length))
                            m.awardList = [];
                        m.awardList.push($root.protocol.AwardInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActivityProgress;
    })();

    Server2Client.UserActivityInfo = (function() {

        /**
         * Properties of a UserActivityInfo.
         * @memberof Server2Client
         * @interface IUserActivityInfo
         * @property {number|null} [activityIndex] UserActivityInfo activityIndex
         * @property {number|null} [progress] UserActivityInfo progress
         * @property {number|null} [awardProgress] UserActivityInfo awardProgress
         * @property {number|null} [refreshMark] UserActivityInfo refreshMark
         * @property {number|null} [indexEndTime] UserActivityInfo indexEndTime
         * @property {Server2Client.ActivityConfig|null} [activityConfig] UserActivityInfo activityConfig
         * @property {Long|null} [realStartTime] UserActivityInfo realStartTime
         */

        /**
         * Constructs a new UserActivityInfo.
         * @memberof Server2Client
         * @classdesc Represents a UserActivityInfo.
         * @implements IUserActivityInfo
         * @constructor
         * @param {Server2Client.IUserActivityInfo=} [p] Properties to set
         */
        function UserActivityInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserActivityInfo activityIndex.
         * @member {number} activityIndex
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.activityIndex = 0;

        /**
         * UserActivityInfo progress.
         * @member {number} progress
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.progress = 0;

        /**
         * UserActivityInfo awardProgress.
         * @member {number} awardProgress
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.awardProgress = 0;

        /**
         * UserActivityInfo refreshMark.
         * @member {number} refreshMark
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.refreshMark = 0;

        /**
         * UserActivityInfo indexEndTime.
         * @member {number} indexEndTime
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.indexEndTime = 0;

        /**
         * UserActivityInfo activityConfig.
         * @member {Server2Client.ActivityConfig|null|undefined} activityConfig
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.activityConfig = null;

        /**
         * UserActivityInfo realStartTime.
         * @member {Long} realStartTime
         * @memberof Server2Client.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.realStartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.UserActivityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.UserActivityInfo} UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActivityInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.UserActivityInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.activityIndex = r.int32();
                        break;
                    }
                case 2: {
                        m.progress = r.int32();
                        break;
                    }
                case 3: {
                        m.awardProgress = r.int32();
                        break;
                    }
                case 4: {
                        m.refreshMark = r.int32();
                        break;
                    }
                case 5: {
                        m.indexEndTime = r.int32();
                        break;
                    }
                case 6: {
                        m.activityConfig = $root.Server2Client.ActivityConfig.decode(r, r.uint32());
                        break;
                    }
                case 7: {
                        m.realStartTime = r.int64();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return UserActivityInfo;
    })();

    Server2Client.UserUnlockBlockListAck = (function() {

        /**
         * Properties of a UserUnlockBlockListAck.
         * @memberof Server2Client
         * @interface IUserUnlockBlockListAck
         * @property {Server2Client.UserUnlockBlockListAck.AckCode|null} [code] UserUnlockBlockListAck code
         * @property {Array.<protocol.BlockData>|null} [blockList] UserUnlockBlockListAck blockList
         */

        /**
         * Constructs a new UserUnlockBlockListAck.
         * @memberof Server2Client
         * @classdesc Represents a UserUnlockBlockListAck.
         * @implements IUserUnlockBlockListAck
         * @constructor
         * @param {Server2Client.IUserUnlockBlockListAck=} [p] Properties to set
         */
        function UserUnlockBlockListAck(p) {
            this.blockList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserUnlockBlockListAck code.
         * @member {Server2Client.UserUnlockBlockListAck.AckCode} code
         * @memberof Server2Client.UserUnlockBlockListAck
         * @instance
         */
        UserUnlockBlockListAck.prototype.code = 0;

        /**
         * UserUnlockBlockListAck blockList.
         * @member {Array.<protocol.BlockData>} blockList
         * @memberof Server2Client.UserUnlockBlockListAck
         * @instance
         */
        UserUnlockBlockListAck.prototype.blockList = $util.emptyArray;

        /**
         * Decodes a UserUnlockBlockListAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.UserUnlockBlockListAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.UserUnlockBlockListAck} UserUnlockBlockListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserUnlockBlockListAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.UserUnlockBlockListAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.blockList && m.blockList.length))
                            m.blockList = [];
                        m.blockList.push($root.protocol.BlockData.decode(r, r.uint32()));
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
         * @name Server2Client.UserUnlockBlockListAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         * @property {number} NoDate=3 NoDate value
         * @property {number} Orleans_Fail=4 Orleans_Fail value
         */
        UserUnlockBlockListAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            values[valuesById[3] = "NoDate"] = 3;
            values[valuesById[4] = "Orleans_Fail"] = 4;
            return values;
        })();

        return UserUnlockBlockListAck;
    })();

    Server2Client.UserBlockSlotsAck = (function() {

        /**
         * Properties of a UserBlockSlotsAck.
         * @memberof Server2Client
         * @interface IUserBlockSlotsAck
         * @property {Server2Client.UserBlockSlotsAck.AckCode|null} [code] UserBlockSlotsAck code
         * @property {Array.<Long>|null} [blockIdList] UserBlockSlotsAck blockIdList
         * @property {number|null} [topicId] UserBlockSlotsAck topicId
         */

        /**
         * Constructs a new UserBlockSlotsAck.
         * @memberof Server2Client
         * @classdesc Represents a UserBlockSlotsAck.
         * @implements IUserBlockSlotsAck
         * @constructor
         * @param {Server2Client.IUserBlockSlotsAck=} [p] Properties to set
         */
        function UserBlockSlotsAck(p) {
            this.blockIdList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UserBlockSlotsAck code.
         * @member {Server2Client.UserBlockSlotsAck.AckCode} code
         * @memberof Server2Client.UserBlockSlotsAck
         * @instance
         */
        UserBlockSlotsAck.prototype.code = 0;

        /**
         * UserBlockSlotsAck blockIdList.
         * @member {Array.<Long>} blockIdList
         * @memberof Server2Client.UserBlockSlotsAck
         * @instance
         */
        UserBlockSlotsAck.prototype.blockIdList = $util.emptyArray;

        /**
         * UserBlockSlotsAck topicId.
         * @member {number} topicId
         * @memberof Server2Client.UserBlockSlotsAck
         * @instance
         */
        UserBlockSlotsAck.prototype.topicId = 0;

        /**
         * Decodes a UserBlockSlotsAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.UserBlockSlotsAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.UserBlockSlotsAck} UserBlockSlotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBlockSlotsAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.UserBlockSlotsAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.blockIdList && m.blockIdList.length))
                            m.blockIdList = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.blockIdList.push(r.int64());
                        } else
                            m.blockIdList.push(r.int64());
                        break;
                    }
                case 3: {
                        m.topicId = r.int32();
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
         * @name Server2Client.UserBlockSlotsAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         * @property {number} NoDate=3 NoDate value
         * @property {number} Orleans_Fail=4 Orleans_Fail value
         */
        UserBlockSlotsAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            values[valuesById[3] = "NoDate"] = 3;
            values[valuesById[4] = "Orleans_Fail"] = 4;
            return values;
        })();

        return UserBlockSlotsAck;
    })();

    Server2Client.ReqEquipBlockSlotAck = (function() {

        /**
         * Properties of a ReqEquipBlockSlotAck.
         * @memberof Server2Client
         * @interface IReqEquipBlockSlotAck
         * @property {Server2Client.ReqEquipBlockSlotAck.AckCode|null} [code] ReqEquipBlockSlotAck code
         */

        /**
         * Constructs a new ReqEquipBlockSlotAck.
         * @memberof Server2Client
         * @classdesc Represents a ReqEquipBlockSlotAck.
         * @implements IReqEquipBlockSlotAck
         * @constructor
         * @param {Server2Client.IReqEquipBlockSlotAck=} [p] Properties to set
         */
        function ReqEquipBlockSlotAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqEquipBlockSlotAck code.
         * @member {Server2Client.ReqEquipBlockSlotAck.AckCode} code
         * @memberof Server2Client.ReqEquipBlockSlotAck
         * @instance
         */
        ReqEquipBlockSlotAck.prototype.code = 0;

        /**
         * Decodes a ReqEquipBlockSlotAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ReqEquipBlockSlotAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ReqEquipBlockSlotAck} ReqEquipBlockSlotAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEquipBlockSlotAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ReqEquipBlockSlotAck();
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
         * @name Server2Client.ReqEquipBlockSlotAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         * @property {number} Repeated=3 Repeated value
         * @property {number} Locked=4 Locked value
         * @property {number} NoDate=5 NoDate value
         * @property {number} Orleans_Fail=6 Orleans_Fail value
         */
        ReqEquipBlockSlotAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            values[valuesById[3] = "Repeated"] = 3;
            values[valuesById[4] = "Locked"] = 4;
            values[valuesById[5] = "NoDate"] = 5;
            values[valuesById[6] = "Orleans_Fail"] = 6;
            return values;
        })();

        return ReqEquipBlockSlotAck;
    })();

    Server2Client.ResetBlockSlotAck = (function() {

        /**
         * Properties of a ResetBlockSlotAck.
         * @memberof Server2Client
         * @interface IResetBlockSlotAck
         * @property {Server2Client.ResetBlockSlotAck.AckCode|null} [code] ResetBlockSlotAck code
         * @property {Array.<Long>|null} [blockIdList] ResetBlockSlotAck blockIdList
         * @property {number|null} [topicId] ResetBlockSlotAck topicId
         */

        /**
         * Constructs a new ResetBlockSlotAck.
         * @memberof Server2Client
         * @classdesc Represents a ResetBlockSlotAck.
         * @implements IResetBlockSlotAck
         * @constructor
         * @param {Server2Client.IResetBlockSlotAck=} [p] Properties to set
         */
        function ResetBlockSlotAck(p) {
            this.blockIdList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResetBlockSlotAck code.
         * @member {Server2Client.ResetBlockSlotAck.AckCode} code
         * @memberof Server2Client.ResetBlockSlotAck
         * @instance
         */
        ResetBlockSlotAck.prototype.code = 0;

        /**
         * ResetBlockSlotAck blockIdList.
         * @member {Array.<Long>} blockIdList
         * @memberof Server2Client.ResetBlockSlotAck
         * @instance
         */
        ResetBlockSlotAck.prototype.blockIdList = $util.emptyArray;

        /**
         * ResetBlockSlotAck topicId.
         * @member {number} topicId
         * @memberof Server2Client.ResetBlockSlotAck
         * @instance
         */
        ResetBlockSlotAck.prototype.topicId = 0;

        /**
         * Decodes a ResetBlockSlotAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ResetBlockSlotAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ResetBlockSlotAck} ResetBlockSlotAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResetBlockSlotAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ResetBlockSlotAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.blockIdList && m.blockIdList.length))
                            m.blockIdList = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.blockIdList.push(r.int64());
                        } else
                            m.blockIdList.push(r.int64());
                        break;
                    }
                case 3: {
                        m.topicId = r.int32();
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
         * @name Server2Client.ResetBlockSlotAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         * @property {number} NoDate=3 NoDate value
         * @property {number} Orleans_Fail=4 Orleans_Fail value
         */
        ResetBlockSlotAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            values[valuesById[3] = "NoDate"] = 3;
            values[valuesById[4] = "Orleans_Fail"] = 4;
            return values;
        })();

        return ResetBlockSlotAck;
    })();

    Server2Client.UnlockBlockListNewAck = (function() {

        /**
         * Properties of an UnlockBlockListNewAck.
         * @memberof Server2Client
         * @interface IUnlockBlockListNewAck
         * @property {Server2Client.UnlockBlockListNewAck.AckCode|null} [code] UnlockBlockListNewAck code
         * @property {Array.<protocol.BlockData>|null} [blockList] UnlockBlockListNewAck blockList
         */

        /**
         * Constructs a new UnlockBlockListNewAck.
         * @memberof Server2Client
         * @classdesc Represents an UnlockBlockListNewAck.
         * @implements IUnlockBlockListNewAck
         * @constructor
         * @param {Server2Client.IUnlockBlockListNewAck=} [p] Properties to set
         */
        function UnlockBlockListNewAck(p) {
            this.blockList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * UnlockBlockListNewAck code.
         * @member {Server2Client.UnlockBlockListNewAck.AckCode} code
         * @memberof Server2Client.UnlockBlockListNewAck
         * @instance
         */
        UnlockBlockListNewAck.prototype.code = 0;

        /**
         * UnlockBlockListNewAck blockList.
         * @member {Array.<protocol.BlockData>} blockList
         * @memberof Server2Client.UnlockBlockListNewAck
         * @instance
         */
        UnlockBlockListNewAck.prototype.blockList = $util.emptyArray;

        /**
         * Decodes an UnlockBlockListNewAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.UnlockBlockListNewAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.UnlockBlockListNewAck} UnlockBlockListNewAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnlockBlockListNewAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.UnlockBlockListNewAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.blockList && m.blockList.length))
                            m.blockList = [];
                        m.blockList.push($root.protocol.BlockData.decode(r, r.uint32()));
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
         * @name Server2Client.UnlockBlockListNewAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         * @property {number} NoDate=3 NoDate value
         * @property {number} Orleans_Fail=4 Orleans_Fail value
         */
        UnlockBlockListNewAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            values[valuesById[3] = "NoDate"] = 3;
            values[valuesById[4] = "Orleans_Fail"] = 4;
            return values;
        })();

        return UnlockBlockListNewAck;
    })();

    Server2Client.EquipTopicBlockSlotsAck = (function() {

        /**
         * Properties of an EquipTopicBlockSlotsAck.
         * @memberof Server2Client
         * @interface IEquipTopicBlockSlotsAck
         * @property {Server2Client.EquipTopicBlockSlotsAck.AckCode|null} [code] EquipTopicBlockSlotsAck code
         * @property {Array.<Long>|null} [blockIdList] EquipTopicBlockSlotsAck blockIdList
         * @property {number|null} [topicId] EquipTopicBlockSlotsAck topicId
         */

        /**
         * Constructs a new EquipTopicBlockSlotsAck.
         * @memberof Server2Client
         * @classdesc Represents an EquipTopicBlockSlotsAck.
         * @implements IEquipTopicBlockSlotsAck
         * @constructor
         * @param {Server2Client.IEquipTopicBlockSlotsAck=} [p] Properties to set
         */
        function EquipTopicBlockSlotsAck(p) {
            this.blockIdList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * EquipTopicBlockSlotsAck code.
         * @member {Server2Client.EquipTopicBlockSlotsAck.AckCode} code
         * @memberof Server2Client.EquipTopicBlockSlotsAck
         * @instance
         */
        EquipTopicBlockSlotsAck.prototype.code = 0;

        /**
         * EquipTopicBlockSlotsAck blockIdList.
         * @member {Array.<Long>} blockIdList
         * @memberof Server2Client.EquipTopicBlockSlotsAck
         * @instance
         */
        EquipTopicBlockSlotsAck.prototype.blockIdList = $util.emptyArray;

        /**
         * EquipTopicBlockSlotsAck topicId.
         * @member {number} topicId
         * @memberof Server2Client.EquipTopicBlockSlotsAck
         * @instance
         */
        EquipTopicBlockSlotsAck.prototype.topicId = 0;

        /**
         * Decodes an EquipTopicBlockSlotsAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.EquipTopicBlockSlotsAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.EquipTopicBlockSlotsAck} EquipTopicBlockSlotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EquipTopicBlockSlotsAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.EquipTopicBlockSlotsAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.blockIdList && m.blockIdList.length))
                            m.blockIdList = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.blockIdList.push(r.int64());
                        } else
                            m.blockIdList.push(r.int64());
                        break;
                    }
                case 3: {
                        m.topicId = r.int32();
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
         * @name Server2Client.EquipTopicBlockSlotsAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ParamsErr=2 ParamsErr value
         * @property {number} NoDate=3 NoDate value
         * @property {number} Locked=4 Locked value
         * @property {number} Orleans_Fail=5 Orleans_Fail value
         */
        EquipTopicBlockSlotsAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ParamsErr"] = 2;
            values[valuesById[3] = "NoDate"] = 3;
            values[valuesById[4] = "Locked"] = 4;
            values[valuesById[5] = "Orleans_Fail"] = 5;
            return values;
        })();

        return EquipTopicBlockSlotsAck;
    })();

    Server2Client.ExtractedAwardAck = (function() {

        /**
         * Properties of an ExtractedAwardAck.
         * @memberof Server2Client
         * @interface IExtractedAwardAck
         * @property {Server2Client.ExtractedAwardAck.AckCode|null} [code] ExtractedAwardAck code
         * @property {string|null} [mailId] ExtractedAwardAck mailId
         * @property {Array.<protocol.MailAwardItem>|null} [skinIdList] ExtractedAwardAck skinIdList
         * @property {Array.<common.Item>|null} [Item] ExtractedAwardAck Item
         */

        /**
         * Constructs a new ExtractedAwardAck.
         * @memberof Server2Client
         * @classdesc Represents an ExtractedAwardAck.
         * @implements IExtractedAwardAck
         * @constructor
         * @param {Server2Client.IExtractedAwardAck=} [p] Properties to set
         */
        function ExtractedAwardAck(p) {
            this.skinIdList = [];
            this.Item = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ExtractedAwardAck code.
         * @member {Server2Client.ExtractedAwardAck.AckCode} code
         * @memberof Server2Client.ExtractedAwardAck
         * @instance
         */
        ExtractedAwardAck.prototype.code = 0;

        /**
         * ExtractedAwardAck mailId.
         * @member {string} mailId
         * @memberof Server2Client.ExtractedAwardAck
         * @instance
         */
        ExtractedAwardAck.prototype.mailId = "";

        /**
         * ExtractedAwardAck skinIdList.
         * @member {Array.<protocol.MailAwardItem>} skinIdList
         * @memberof Server2Client.ExtractedAwardAck
         * @instance
         */
        ExtractedAwardAck.prototype.skinIdList = $util.emptyArray;

        /**
         * ExtractedAwardAck Item.
         * @member {Array.<common.Item>} Item
         * @memberof Server2Client.ExtractedAwardAck
         * @instance
         */
        ExtractedAwardAck.prototype.Item = $util.emptyArray;

        /**
         * Decodes an ExtractedAwardAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ExtractedAwardAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ExtractedAwardAck} ExtractedAwardAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExtractedAwardAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ExtractedAwardAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.mailId = r.string();
                        break;
                    }
                case 3: {
                        if (!(m.skinIdList && m.skinIdList.length))
                            m.skinIdList = [];
                        m.skinIdList.push($root.protocol.MailAwardItem.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        if (!(m.Item && m.Item.length))
                            m.Item = [];
                        m.Item.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.ExtractedAwardAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         * @property {number} Partial_Success=3 Partial_Success value
         */
        ExtractedAwardAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            values[valuesById[3] = "Partial_Success"] = 3;
            return values;
        })();

        return ExtractedAwardAck;
    })();

    Server2Client.MarkReadAck = (function() {

        /**
         * Properties of a MarkReadAck.
         * @memberof Server2Client
         * @interface IMarkReadAck
         * @property {Server2Client.MarkReadAck.AckCode|null} [code] MarkReadAck code
         * @property {string|null} [mailId] MarkReadAck mailId
         */

        /**
         * Constructs a new MarkReadAck.
         * @memberof Server2Client
         * @classdesc Represents a MarkReadAck.
         * @implements IMarkReadAck
         * @constructor
         * @param {Server2Client.IMarkReadAck=} [p] Properties to set
         */
        function MarkReadAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MarkReadAck code.
         * @member {Server2Client.MarkReadAck.AckCode} code
         * @memberof Server2Client.MarkReadAck
         * @instance
         */
        MarkReadAck.prototype.code = 0;

        /**
         * MarkReadAck mailId.
         * @member {string} mailId
         * @memberof Server2Client.MarkReadAck
         * @instance
         */
        MarkReadAck.prototype.mailId = "";

        /**
         * Decodes a MarkReadAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.MarkReadAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.MarkReadAck} MarkReadAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarkReadAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.MarkReadAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.mailId = r.string();
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
         * @name Server2Client.MarkReadAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         */
        MarkReadAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            return values;
        })();

        return MarkReadAck;
    })();

    Server2Client.MarkDeletedAck = (function() {

        /**
         * Properties of a MarkDeletedAck.
         * @memberof Server2Client
         * @interface IMarkDeletedAck
         * @property {Server2Client.MarkDeletedAck.AckCode|null} [code] MarkDeletedAck code
         * @property {string|null} [mailId] MarkDeletedAck mailId
         */

        /**
         * Constructs a new MarkDeletedAck.
         * @memberof Server2Client
         * @classdesc Represents a MarkDeletedAck.
         * @implements IMarkDeletedAck
         * @constructor
         * @param {Server2Client.IMarkDeletedAck=} [p] Properties to set
         */
        function MarkDeletedAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MarkDeletedAck code.
         * @member {Server2Client.MarkDeletedAck.AckCode} code
         * @memberof Server2Client.MarkDeletedAck
         * @instance
         */
        MarkDeletedAck.prototype.code = 0;

        /**
         * MarkDeletedAck mailId.
         * @member {string} mailId
         * @memberof Server2Client.MarkDeletedAck
         * @instance
         */
        MarkDeletedAck.prototype.mailId = "";

        /**
         * Decodes a MarkDeletedAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.MarkDeletedAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.MarkDeletedAck} MarkDeletedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarkDeletedAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.MarkDeletedAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.mailId = r.string();
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
         * @name Server2Client.MarkDeletedAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         */
        MarkDeletedAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            return values;
        })();

        return MarkDeletedAck;
    })();

    Server2Client.MarkSkinExtractedAck = (function() {

        /**
         * Properties of a MarkSkinExtractedAck.
         * @memberof Server2Client
         * @interface IMarkSkinExtractedAck
         * @property {Server2Client.MarkSkinExtractedAck.AckCode|null} [code] MarkSkinExtractedAck code
         */

        /**
         * Constructs a new MarkSkinExtractedAck.
         * @memberof Server2Client
         * @classdesc Represents a MarkSkinExtractedAck.
         * @implements IMarkSkinExtractedAck
         * @constructor
         * @param {Server2Client.IMarkSkinExtractedAck=} [p] Properties to set
         */
        function MarkSkinExtractedAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MarkSkinExtractedAck code.
         * @member {Server2Client.MarkSkinExtractedAck.AckCode} code
         * @memberof Server2Client.MarkSkinExtractedAck
         * @instance
         */
        MarkSkinExtractedAck.prototype.code = 0;

        /**
         * Decodes a MarkSkinExtractedAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.MarkSkinExtractedAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.MarkSkinExtractedAck} MarkSkinExtractedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarkSkinExtractedAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.MarkSkinExtractedAck();
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
         * @name Server2Client.MarkSkinExtractedAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         */
        MarkSkinExtractedAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            return values;
        })();

        return MarkSkinExtractedAck;
    })();

    Server2Client.SendMailAck = (function() {

        /**
         * Properties of a SendMailAck.
         * @memberof Server2Client
         * @interface ISendMailAck
         * @property {Server2Client.SendMailAck.AckCode|null} [code] SendMailAck code
         */

        /**
         * Constructs a new SendMailAck.
         * @memberof Server2Client
         * @classdesc Represents a SendMailAck.
         * @implements ISendMailAck
         * @constructor
         * @param {Server2Client.ISendMailAck=} [p] Properties to set
         */
        function SendMailAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SendMailAck code.
         * @member {Server2Client.SendMailAck.AckCode} code
         * @memberof Server2Client.SendMailAck
         * @instance
         */
        SendMailAck.prototype.code = 0;

        /**
         * Decodes a SendMailAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.SendMailAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.SendMailAck} SendMailAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMailAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.SendMailAck();
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
         * @name Server2Client.SendMailAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         */
        SendMailAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            return values;
        })();

        return SendMailAck;
    })();

    Server2Client.GetMailListAck = (function() {

        /**
         * Properties of a GetMailListAck.
         * @memberof Server2Client
         * @interface IGetMailListAck
         * @property {Server2Client.GetMailListAck.AckCode|null} [code] GetMailListAck code
         * @property {Array.<protocol.MailData>|null} [mailList] GetMailListAck mailList
         */

        /**
         * Constructs a new GetMailListAck.
         * @memberof Server2Client
         * @classdesc Represents a GetMailListAck.
         * @implements IGetMailListAck
         * @constructor
         * @param {Server2Client.IGetMailListAck=} [p] Properties to set
         */
        function GetMailListAck(p) {
            this.mailList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetMailListAck code.
         * @member {Server2Client.GetMailListAck.AckCode} code
         * @memberof Server2Client.GetMailListAck
         * @instance
         */
        GetMailListAck.prototype.code = 0;

        /**
         * GetMailListAck mailList.
         * @member {Array.<protocol.MailData>} mailList
         * @memberof Server2Client.GetMailListAck
         * @instance
         */
        GetMailListAck.prototype.mailList = $util.emptyArray;

        /**
         * Decodes a GetMailListAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.GetMailListAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.GetMailListAck} GetMailListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailListAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.GetMailListAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.mailList && m.mailList.length))
                            m.mailList = [];
                        m.mailList.push($root.protocol.MailData.decode(r, r.uint32()));
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
         * @name Server2Client.GetMailListAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         */
        GetMailListAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            return values;
        })();

        return GetMailListAck;
    })();

    Server2Client.SendAwardAck = (function() {

        /**
         * Properties of a SendAwardAck.
         * @memberof Server2Client
         * @interface ISendAwardAck
         * @property {Server2Client.SendAwardAck.AckCode|null} [code] SendAwardAck code
         * @property {Array.<common.Item>|null} [itemList] SendAwardAck itemList
         */

        /**
         * Constructs a new SendAwardAck.
         * @memberof Server2Client
         * @classdesc Represents a SendAwardAck.
         * @implements ISendAwardAck
         * @constructor
         * @param {Server2Client.ISendAwardAck=} [p] Properties to set
         */
        function SendAwardAck(p) {
            this.itemList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SendAwardAck code.
         * @member {Server2Client.SendAwardAck.AckCode} code
         * @memberof Server2Client.SendAwardAck
         * @instance
         */
        SendAwardAck.prototype.code = 0;

        /**
         * SendAwardAck itemList.
         * @member {Array.<common.Item>} itemList
         * @memberof Server2Client.SendAwardAck
         * @instance
         */
        SendAwardAck.prototype.itemList = $util.emptyArray;

        /**
         * Decodes a SendAwardAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.SendAwardAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.SendAwardAck} SendAwardAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendAwardAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.SendAwardAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.itemList && m.itemList.length))
                            m.itemList = [];
                        m.itemList.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.SendAwardAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoDate=2 NoDate value
         */
        SendAwardAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoDate"] = 2;
            return values;
        })();

        return SendAwardAck;
    })();

    Server2Client.MailStateData = (function() {

        /**
         * Properties of a MailStateData.
         * @memberof Server2Client
         * @interface IMailStateData
         * @property {string|null} [mailId] MailStateData mailId
         * @property {boolean|null} [haveRead] MailStateData haveRead
         */

        /**
         * Constructs a new MailStateData.
         * @memberof Server2Client
         * @classdesc Represents a MailStateData.
         * @implements IMailStateData
         * @constructor
         * @param {Server2Client.IMailStateData=} [p] Properties to set
         */
        function MailStateData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MailStateData mailId.
         * @member {string} mailId
         * @memberof Server2Client.MailStateData
         * @instance
         */
        MailStateData.prototype.mailId = "";

        /**
         * MailStateData haveRead.
         * @member {boolean} haveRead
         * @memberof Server2Client.MailStateData
         * @instance
         */
        MailStateData.prototype.haveRead = false;

        /**
         * Decodes a MailStateData message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.MailStateData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.MailStateData} MailStateData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailStateData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.MailStateData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.mailId = r.string();
                        break;
                    }
                case 2: {
                        m.haveRead = r.bool();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MailStateData;
    })();

    Server2Client.GetMailStateListAck = (function() {

        /**
         * Properties of a GetMailStateListAck.
         * @memberof Server2Client
         * @interface IGetMailStateListAck
         * @property {Server2Client.GetMailStateListAck.AckCode|null} [code] GetMailStateListAck code
         * @property {Array.<Server2Client.MailStateData>|null} [mailState] GetMailStateListAck mailState
         */

        /**
         * Constructs a new GetMailStateListAck.
         * @memberof Server2Client
         * @classdesc Represents a GetMailStateListAck.
         * @implements IGetMailStateListAck
         * @constructor
         * @param {Server2Client.IGetMailStateListAck=} [p] Properties to set
         */
        function GetMailStateListAck(p) {
            this.mailState = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GetMailStateListAck code.
         * @member {Server2Client.GetMailStateListAck.AckCode} code
         * @memberof Server2Client.GetMailStateListAck
         * @instance
         */
        GetMailStateListAck.prototype.code = 0;

        /**
         * GetMailStateListAck mailState.
         * @member {Array.<Server2Client.MailStateData>} mailState
         * @memberof Server2Client.GetMailStateListAck
         * @instance
         */
        GetMailStateListAck.prototype.mailState = $util.emptyArray;

        /**
         * Decodes a GetMailStateListAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.GetMailStateListAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.GetMailStateListAck} GetMailStateListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailStateListAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.GetMailStateListAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.mailState && m.mailState.length))
                            m.mailState = [];
                        m.mailState.push($root.Server2Client.MailStateData.decode(r, r.uint32()));
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
         * @name Server2Client.GetMailStateListAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Orleans_Fail=2 Orleans_Fail value
         */
        GetMailStateListAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Orleans_Fail"] = 2;
            return values;
        })();

        return GetMailStateListAck;
    })();

    Server2Client.LS2C_DailyMatch_UseItem = (function() {

        /**
         * Properties of a LS2C_DailyMatch_UseItem.
         * @memberof Server2Client
         * @interface ILS2C_DailyMatch_UseItem
         * @property {Server2Client.LS2C_DailyMatch_UseItem.AckCode|null} [ackCode] LS2C_DailyMatch_UseItem ackCode
         * @property {string|null} [matchData] LS2C_DailyMatch_UseItem matchData
         */

        /**
         * Constructs a new LS2C_DailyMatch_UseItem.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_DailyMatch_UseItem.
         * @implements ILS2C_DailyMatch_UseItem
         * @constructor
         * @param {Server2Client.ILS2C_DailyMatch_UseItem=} [p] Properties to set
         */
        function LS2C_DailyMatch_UseItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_DailyMatch_UseItem ackCode.
         * @member {Server2Client.LS2C_DailyMatch_UseItem.AckCode} ackCode
         * @memberof Server2Client.LS2C_DailyMatch_UseItem
         * @instance
         */
        LS2C_DailyMatch_UseItem.prototype.ackCode = 0;

        /**
         * LS2C_DailyMatch_UseItem matchData.
         * @member {string} matchData
         * @memberof Server2Client.LS2C_DailyMatch_UseItem
         * @instance
         */
        LS2C_DailyMatch_UseItem.prototype.matchData = "";

        /**
         * Decodes a LS2C_DailyMatch_UseItem message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_DailyMatch_UseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_DailyMatch_UseItem} LS2C_DailyMatch_UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_DailyMatch_UseItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_DailyMatch_UseItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.matchData = r.string();
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
         * @name Server2Client.LS2C_DailyMatch_UseItem.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} InvalidToken=3 InvalidToken value
         */
        LS2C_DailyMatch_UseItem.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[3] = "InvalidToken"] = 3;
            return values;
        })();

        return LS2C_DailyMatch_UseItem;
    })();

    Server2Client.LS2C_SetAdCodeAck = (function() {

        /**
         * Properties of a LS2C_SetAdCodeAck.
         * @memberof Server2Client
         * @interface ILS2C_SetAdCodeAck
         * @property {Server2Client.LS2C_SetAdCodeAck.AckCode|null} [code] LS2C_SetAdCodeAck code
         * @property {string|null} [adCode] LS2C_SetAdCodeAck adCode
         */

        /**
         * Constructs a new LS2C_SetAdCodeAck.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetAdCodeAck.
         * @implements ILS2C_SetAdCodeAck
         * @constructor
         * @param {Server2Client.ILS2C_SetAdCodeAck=} [p] Properties to set
         */
        function LS2C_SetAdCodeAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetAdCodeAck code.
         * @member {Server2Client.LS2C_SetAdCodeAck.AckCode} code
         * @memberof Server2Client.LS2C_SetAdCodeAck
         * @instance
         */
        LS2C_SetAdCodeAck.prototype.code = 0;

        /**
         * LS2C_SetAdCodeAck adCode.
         * @member {string} adCode
         * @memberof Server2Client.LS2C_SetAdCodeAck
         * @instance
         */
        LS2C_SetAdCodeAck.prototype.adCode = "";

        /**
         * Decodes a LS2C_SetAdCodeAck message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetAdCodeAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetAdCodeAck} LS2C_SetAdCodeAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetAdCodeAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetAdCodeAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.adCode = r.string();
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
         * @name Server2Client.LS2C_SetAdCodeAck.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetAdCodeAck.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetAdCodeAck;
    })();

    Server2Client.LS2C_GetAdCode = (function() {

        /**
         * Properties of a LS2C_GetAdCode.
         * @memberof Server2Client
         * @interface ILS2C_GetAdCode
         * @property {Server2Client.LS2C_GetAdCode.AckCode|null} [code] LS2C_GetAdCode code
         * @property {string|null} [adCode] LS2C_GetAdCode adCode
         */

        /**
         * Constructs a new LS2C_GetAdCode.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetAdCode.
         * @implements ILS2C_GetAdCode
         * @constructor
         * @param {Server2Client.ILS2C_GetAdCode=} [p] Properties to set
         */
        function LS2C_GetAdCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetAdCode code.
         * @member {Server2Client.LS2C_GetAdCode.AckCode} code
         * @memberof Server2Client.LS2C_GetAdCode
         * @instance
         */
        LS2C_GetAdCode.prototype.code = 0;

        /**
         * LS2C_GetAdCode adCode.
         * @member {string} adCode
         * @memberof Server2Client.LS2C_GetAdCode
         * @instance
         */
        LS2C_GetAdCode.prototype.adCode = "";

        /**
         * Decodes a LS2C_GetAdCode message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetAdCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetAdCode} LS2C_GetAdCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetAdCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetAdCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.adCode = r.string();
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
         * @name Server2Client.LS2C_GetAdCode.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetAdCode.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetAdCode;
    })();

    Server2Client.LS2C_UserBaseInfo_Ack = (function() {

        /**
         * Properties of a LS2C_UserBaseInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_UserBaseInfo_Ack
         * @property {Server2Client.LS2C_UserBaseInfo_Ack.AckCode|null} [ackCode] LS2C_UserBaseInfo_Ack ackCode
         * @property {protocol.UserInfo|null} [userInfo] LS2C_UserBaseInfo_Ack userInfo
         * @property {Array.<number>|null} [functions] LS2C_UserBaseInfo_Ack functions
         */

        /**
         * Constructs a new LS2C_UserBaseInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_UserBaseInfo_Ack.
         * @implements ILS2C_UserBaseInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_UserBaseInfo_Ack=} [p] Properties to set
         */
        function LS2C_UserBaseInfo_Ack(p) {
            this.functions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_UserBaseInfo_Ack ackCode.
         * @member {Server2Client.LS2C_UserBaseInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_UserBaseInfo_Ack
         * @instance
         */
        LS2C_UserBaseInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_UserBaseInfo_Ack userInfo.
         * @member {protocol.UserInfo|null|undefined} userInfo
         * @memberof Server2Client.LS2C_UserBaseInfo_Ack
         * @instance
         */
        LS2C_UserBaseInfo_Ack.prototype.userInfo = null;

        /**
         * LS2C_UserBaseInfo_Ack functions.
         * @member {Array.<number>} functions
         * @memberof Server2Client.LS2C_UserBaseInfo_Ack
         * @instance
         */
        LS2C_UserBaseInfo_Ack.prototype.functions = $util.emptyArray;

        /**
         * Decodes a LS2C_UserBaseInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_UserBaseInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_UserBaseInfo_Ack} LS2C_UserBaseInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_UserBaseInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_UserBaseInfo_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.userInfo = $root.protocol.UserInfo.decode(r, r.uint32());
                        break;
                    }
                case 3: {
                        if (!(m.functions && m.functions.length))
                            m.functions = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.functions.push(r.int32());
                        } else
                            m.functions.push(r.int32());
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
         * @name Server2Client.LS2C_UserBaseInfo_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20010 OpCode value
         */
        LS2C_UserBaseInfo_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20010] = "OpCode"] = 20010;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_UserBaseInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_UserBaseInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_UserBaseInfo_Ack;
    })();

    Server2Client.LS2C_StartGame_Ack = (function() {

        /**
         * Properties of a LS2C_StartGame_Ack.
         * @memberof Server2Client
         * @interface ILS2C_StartGame_Ack
         * @property {Server2Client.LS2C_StartGame_Ack.AckCode|null} [ackCode] LS2C_StartGame_Ack ackCode
         * @property {string|null} [gameToken] LS2C_StartGame_Ack gameToken
         * @property {Array.<number>|null} [seeds] LS2C_StartGame_Ack seeds
         */

        /**
         * Constructs a new LS2C_StartGame_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_StartGame_Ack.
         * @implements ILS2C_StartGame_Ack
         * @constructor
         * @param {Server2Client.ILS2C_StartGame_Ack=} [p] Properties to set
         */
        function LS2C_StartGame_Ack(p) {
            this.seeds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_StartGame_Ack ackCode.
         * @member {Server2Client.LS2C_StartGame_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_StartGame_Ack
         * @instance
         */
        LS2C_StartGame_Ack.prototype.ackCode = 0;

        /**
         * LS2C_StartGame_Ack gameToken.
         * @member {string} gameToken
         * @memberof Server2Client.LS2C_StartGame_Ack
         * @instance
         */
        LS2C_StartGame_Ack.prototype.gameToken = "";

        /**
         * LS2C_StartGame_Ack seeds.
         * @member {Array.<number>} seeds
         * @memberof Server2Client.LS2C_StartGame_Ack
         * @instance
         */
        LS2C_StartGame_Ack.prototype.seeds = $util.emptyArray;

        /**
         * Decodes a LS2C_StartGame_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_StartGame_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_StartGame_Ack} LS2C_StartGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_StartGame_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_StartGame_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.gameToken = r.string();
                        break;
                    }
                case 3: {
                        if (!(m.seeds && m.seeds.length))
                            m.seeds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.seeds.push(r.uint32());
                        } else
                            m.seeds.push(r.uint32());
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
         * @name Server2Client.LS2C_StartGame_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyStart=2 AlreadyStart value
         * @property {number} CountLimit=3 CountLimit value
         * @property {number} Passed=4 Passed value
         * @property {number} LevelError=5 LevelError value
         */
        LS2C_StartGame_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyStart"] = 2;
            values[valuesById[3] = "CountLimit"] = 3;
            values[valuesById[4] = "Passed"] = 4;
            values[valuesById[5] = "LevelError"] = 5;
            return values;
        })();

        return LS2C_StartGame_Ack;
    })();

    Server2Client.LS2C_EndGame_Ack = (function() {

        /**
         * Properties of a LS2C_EndGame_Ack.
         * @memberof Server2Client
         * @interface ILS2C_EndGame_Ack
         * @property {Server2Client.LS2C_EndGame_Ack.AckCode|null} [ackCode] LS2C_EndGame_Ack ackCode
         * @property {number|null} [dailyPassCount] LS2C_EndGame_Ack dailyPassCount
         * @property {number|null} [dailyGameCount] LS2C_EndGame_Ack dailyGameCount
         */

        /**
         * Constructs a new LS2C_EndGame_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_EndGame_Ack.
         * @implements ILS2C_EndGame_Ack
         * @constructor
         * @param {Server2Client.ILS2C_EndGame_Ack=} [p] Properties to set
         */
        function LS2C_EndGame_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_EndGame_Ack ackCode.
         * @member {Server2Client.LS2C_EndGame_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_EndGame_Ack
         * @instance
         */
        LS2C_EndGame_Ack.prototype.ackCode = 0;

        /**
         * LS2C_EndGame_Ack dailyPassCount.
         * @member {number} dailyPassCount
         * @memberof Server2Client.LS2C_EndGame_Ack
         * @instance
         */
        LS2C_EndGame_Ack.prototype.dailyPassCount = 0;

        /**
         * LS2C_EndGame_Ack dailyGameCount.
         * @member {number} dailyGameCount
         * @memberof Server2Client.LS2C_EndGame_Ack
         * @instance
         */
        LS2C_EndGame_Ack.prototype.dailyGameCount = 0;

        /**
         * Decodes a LS2C_EndGame_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_EndGame_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_EndGame_Ack} LS2C_EndGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_EndGame_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_EndGame_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_EndGame_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_EndGame_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_EndGame_Ack;
    })();

    Server2Client.LS2C_SetGuide_Ack = (function() {

        /**
         * Properties of a LS2C_SetGuide_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SetGuide_Ack
         * @property {Server2Client.LS2C_SetGuide_Ack.AckCode|null} [ackCode] LS2C_SetGuide_Ack ackCode
         * @property {number|null} [currGuide] LS2C_SetGuide_Ack currGuide
         */

        /**
         * Constructs a new LS2C_SetGuide_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetGuide_Ack.
         * @implements ILS2C_SetGuide_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SetGuide_Ack=} [p] Properties to set
         */
        function LS2C_SetGuide_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetGuide_Ack ackCode.
         * @member {Server2Client.LS2C_SetGuide_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetGuide_Ack
         * @instance
         */
        LS2C_SetGuide_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SetGuide_Ack currGuide.
         * @member {number} currGuide
         * @memberof Server2Client.LS2C_SetGuide_Ack
         * @instance
         */
        LS2C_SetGuide_Ack.prototype.currGuide = 0;

        /**
         * Decodes a LS2C_SetGuide_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetGuide_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetGuide_Ack} LS2C_SetGuide_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetGuide_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetGuide_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.currGuide = r.int32();
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
         * @name Server2Client.LS2C_SetGuide_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20013 OpCode value
         */
        LS2C_SetGuide_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20013] = "OpCode"] = 20013;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_SetGuide_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetGuide_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetGuide_Ack;
    })();

    Server2Client.LS2C_SetUserInfo_Ack = (function() {

        /**
         * Properties of a LS2C_SetUserInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SetUserInfo_Ack
         * @property {Server2Client.LS2C_SetUserInfo_Ack.AckCode|null} [ackCode] LS2C_SetUserInfo_Ack ackCode
         */

        /**
         * Constructs a new LS2C_SetUserInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetUserInfo_Ack.
         * @implements ILS2C_SetUserInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SetUserInfo_Ack=} [p] Properties to set
         */
        function LS2C_SetUserInfo_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetUserInfo_Ack ackCode.
         * @member {Server2Client.LS2C_SetUserInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetUserInfo_Ack
         * @instance
         */
        LS2C_SetUserInfo_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_SetUserInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetUserInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetUserInfo_Ack} LS2C_SetUserInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetUserInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetUserInfo_Ack();
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
         * @name Server2Client.LS2C_SetUserInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetUserInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetUserInfo_Ack;
    })();

    Server2Client.LS2C_SetGuideFinish_Ack = (function() {

        /**
         * Properties of a LS2C_SetGuideFinish_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SetGuideFinish_Ack
         * @property {Server2Client.LS2C_SetGuideFinish_Ack.AckCode|null} [ackCode] LS2C_SetGuideFinish_Ack ackCode
         * @property {number|null} [guideStageId] LS2C_SetGuideFinish_Ack guideStageId
         */

        /**
         * Constructs a new LS2C_SetGuideFinish_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetGuideFinish_Ack.
         * @implements ILS2C_SetGuideFinish_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SetGuideFinish_Ack=} [p] Properties to set
         */
        function LS2C_SetGuideFinish_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetGuideFinish_Ack ackCode.
         * @member {Server2Client.LS2C_SetGuideFinish_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetGuideFinish_Ack
         * @instance
         */
        LS2C_SetGuideFinish_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SetGuideFinish_Ack guideStageId.
         * @member {number} guideStageId
         * @memberof Server2Client.LS2C_SetGuideFinish_Ack
         * @instance
         */
        LS2C_SetGuideFinish_Ack.prototype.guideStageId = 0;

        /**
         * Decodes a LS2C_SetGuideFinish_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetGuideFinish_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetGuideFinish_Ack} LS2C_SetGuideFinish_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetGuideFinish_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetGuideFinish_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.guideStageId = r.int32();
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
         * @name Server2Client.LS2C_SetGuideFinish_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20015 OpCode value
         */
        LS2C_SetGuideFinish_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20015] = "OpCode"] = 20015;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_SetGuideFinish_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetGuideFinish_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetGuideFinish_Ack;
    })();

    Server2Client.LS2C_SetNewbieFinish_Ack = (function() {

        /**
         * Properties of a LS2C_SetNewbieFinish_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SetNewbieFinish_Ack
         * @property {Server2Client.LS2C_SetNewbieFinish_Ack.AckCode|null} [ackCode] LS2C_SetNewbieFinish_Ack ackCode
         */

        /**
         * Constructs a new LS2C_SetNewbieFinish_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetNewbieFinish_Ack.
         * @implements ILS2C_SetNewbieFinish_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SetNewbieFinish_Ack=} [p] Properties to set
         */
        function LS2C_SetNewbieFinish_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetNewbieFinish_Ack ackCode.
         * @member {Server2Client.LS2C_SetNewbieFinish_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetNewbieFinish_Ack
         * @instance
         */
        LS2C_SetNewbieFinish_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_SetNewbieFinish_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetNewbieFinish_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetNewbieFinish_Ack} LS2C_SetNewbieFinish_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetNewbieFinish_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetNewbieFinish_Ack();
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
         * @name Server2Client.LS2C_SetNewbieFinish_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetNewbieFinish_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetNewbieFinish_Ack;
    })();

    Server2Client.LS2C_ExtractAward_Ack = (function() {

        /**
         * Properties of a LS2C_ExtractAward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ExtractAward_Ack
         * @property {Server2Client.LS2C_ExtractAward_Ack.AckCode|null} [ackCode] LS2C_ExtractAward_Ack ackCode
         * @property {number|null} [rewardId] LS2C_ExtractAward_Ack rewardId
         * @property {Array.<number>|null} [rewards] LS2C_ExtractAward_Ack rewards
         */

        /**
         * Constructs a new LS2C_ExtractAward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ExtractAward_Ack.
         * @implements ILS2C_ExtractAward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ExtractAward_Ack=} [p] Properties to set
         */
        function LS2C_ExtractAward_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ExtractAward_Ack ackCode.
         * @member {Server2Client.LS2C_ExtractAward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ExtractAward_Ack
         * @instance
         */
        LS2C_ExtractAward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_ExtractAward_Ack rewardId.
         * @member {number} rewardId
         * @memberof Server2Client.LS2C_ExtractAward_Ack
         * @instance
         */
        LS2C_ExtractAward_Ack.prototype.rewardId = 0;

        /**
         * LS2C_ExtractAward_Ack rewards.
         * @member {Array.<number>} rewards
         * @memberof Server2Client.LS2C_ExtractAward_Ack
         * @instance
         */
        LS2C_ExtractAward_Ack.prototype.rewards = $util.emptyArray;

        /**
         * Decodes a LS2C_ExtractAward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ExtractAward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ExtractAward_Ack} LS2C_ExtractAward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ExtractAward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ExtractAward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.rewardId = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.rewards.push(r.int32());
                        } else
                            m.rewards.push(r.int32());
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
         * @name Server2Client.LS2C_ExtractAward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         */
        LS2C_ExtractAward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            return values;
        })();

        return LS2C_ExtractAward_Ack;
    })();

    Server2Client.LS2C_SetUsedCollect_Ack = (function() {

        /**
         * Properties of a LS2C_SetUsedCollect_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SetUsedCollect_Ack
         * @property {Server2Client.LS2C_SetUsedCollect_Ack.AckCode|null} [ackCode] LS2C_SetUsedCollect_Ack ackCode
         * @property {number|null} [usedCollectId] LS2C_SetUsedCollect_Ack usedCollectId
         */

        /**
         * Constructs a new LS2C_SetUsedCollect_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetUsedCollect_Ack.
         * @implements ILS2C_SetUsedCollect_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SetUsedCollect_Ack=} [p] Properties to set
         */
        function LS2C_SetUsedCollect_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetUsedCollect_Ack ackCode.
         * @member {Server2Client.LS2C_SetUsedCollect_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetUsedCollect_Ack
         * @instance
         */
        LS2C_SetUsedCollect_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SetUsedCollect_Ack usedCollectId.
         * @member {number} usedCollectId
         * @memberof Server2Client.LS2C_SetUsedCollect_Ack
         * @instance
         */
        LS2C_SetUsedCollect_Ack.prototype.usedCollectId = 0;

        /**
         * Decodes a LS2C_SetUsedCollect_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetUsedCollect_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetUsedCollect_Ack} LS2C_SetUsedCollect_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetUsedCollect_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetUsedCollect_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.usedCollectId = r.int32();
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
         * @name Server2Client.LS2C_SetUsedCollect_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetUsedCollect_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetUsedCollect_Ack;
    })();

    Server2Client.LS2C_SetAuthorize_Ack = (function() {

        /**
         * Properties of a LS2C_SetAuthorize_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SetAuthorize_Ack
         * @property {Server2Client.LS2C_SetAuthorize_Ack.AckCode|null} [ackCode] LS2C_SetAuthorize_Ack ackCode
         * @property {boolean|null} [isAuthorized] LS2C_SetAuthorize_Ack isAuthorized
         */

        /**
         * Constructs a new LS2C_SetAuthorize_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SetAuthorize_Ack.
         * @implements ILS2C_SetAuthorize_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SetAuthorize_Ack=} [p] Properties to set
         */
        function LS2C_SetAuthorize_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SetAuthorize_Ack ackCode.
         * @member {Server2Client.LS2C_SetAuthorize_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SetAuthorize_Ack
         * @instance
         */
        LS2C_SetAuthorize_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SetAuthorize_Ack isAuthorized.
         * @member {boolean} isAuthorized
         * @memberof Server2Client.LS2C_SetAuthorize_Ack
         * @instance
         */
        LS2C_SetAuthorize_Ack.prototype.isAuthorized = false;

        /**
         * Decodes a LS2C_SetAuthorize_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SetAuthorize_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SetAuthorize_Ack} LS2C_SetAuthorize_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SetAuthorize_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SetAuthorize_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.isAuthorized = r.bool();
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
         * @name Server2Client.LS2C_SetAuthorize_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SetAuthorize_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SetAuthorize_Ack;
    })();

    Server2Client.LS2C_UpdateFuncStage_Ack = (function() {

        /**
         * Properties of a LS2C_UpdateFuncStage_Ack.
         * @memberof Server2Client
         * @interface ILS2C_UpdateFuncStage_Ack
         * @property {Server2Client.LS2C_UpdateFuncStage_Ack.AckCode|null} [ackCode] LS2C_UpdateFuncStage_Ack ackCode
         * @property {number|null} [funcUnlockStageId] LS2C_UpdateFuncStage_Ack funcUnlockStageId
         */

        /**
         * Constructs a new LS2C_UpdateFuncStage_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_UpdateFuncStage_Ack.
         * @implements ILS2C_UpdateFuncStage_Ack
         * @constructor
         * @param {Server2Client.ILS2C_UpdateFuncStage_Ack=} [p] Properties to set
         */
        function LS2C_UpdateFuncStage_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_UpdateFuncStage_Ack ackCode.
         * @member {Server2Client.LS2C_UpdateFuncStage_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_UpdateFuncStage_Ack
         * @instance
         */
        LS2C_UpdateFuncStage_Ack.prototype.ackCode = 0;

        /**
         * LS2C_UpdateFuncStage_Ack funcUnlockStageId.
         * @member {number} funcUnlockStageId
         * @memberof Server2Client.LS2C_UpdateFuncStage_Ack
         * @instance
         */
        LS2C_UpdateFuncStage_Ack.prototype.funcUnlockStageId = 0;

        /**
         * Decodes a LS2C_UpdateFuncStage_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_UpdateFuncStage_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_UpdateFuncStage_Ack} LS2C_UpdateFuncStage_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_UpdateFuncStage_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_UpdateFuncStage_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.funcUnlockStageId = r.int32();
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
         * @name Server2Client.LS2C_UpdateFuncStage_Ack.N
         * @enum {number}
         * @property {number} zero=0 zero value
         * @property {number} OpCode=20018 OpCode value
         */
        LS2C_UpdateFuncStage_Ack.N = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "zero"] = 0;
            values[valuesById[20018] = "OpCode"] = 20018;
            return values;
        })();

        /**
         * AckCode enum.
         * @name Server2Client.LS2C_UpdateFuncStage_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_UpdateFuncStage_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_UpdateFuncStage_Ack;
    })();

    Server2Client.LS2C_NoticeGamePassed_Ack = (function() {

        /**
         * Properties of a LS2C_NoticeGamePassed_Ack.
         * @memberof Server2Client
         * @interface ILS2C_NoticeGamePassed_Ack
         * @property {Server2Client.LS2C_NoticeGamePassed_Ack.AckCode|null} [ackCode] LS2C_NoticeGamePassed_Ack ackCode
         * @property {Array.<common.Item>|null} [items] LS2C_NoticeGamePassed_Ack items
         * @property {number|null} [dailyPassCount] LS2C_NoticeGamePassed_Ack dailyPassCount
         * @property {number|null} [dailyGameCount] LS2C_NoticeGamePassed_Ack dailyGameCount
         * @property {number|null} [giftPrice] LS2C_NoticeGamePassed_Ack giftPrice
         */

        /**
         * Constructs a new LS2C_NoticeGamePassed_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_NoticeGamePassed_Ack.
         * @implements ILS2C_NoticeGamePassed_Ack
         * @constructor
         * @param {Server2Client.ILS2C_NoticeGamePassed_Ack=} [p] Properties to set
         */
        function LS2C_NoticeGamePassed_Ack(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_NoticeGamePassed_Ack ackCode.
         * @member {Server2Client.LS2C_NoticeGamePassed_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_NoticeGamePassed_Ack
         * @instance
         */
        LS2C_NoticeGamePassed_Ack.prototype.ackCode = 0;

        /**
         * LS2C_NoticeGamePassed_Ack items.
         * @member {Array.<common.Item>} items
         * @memberof Server2Client.LS2C_NoticeGamePassed_Ack
         * @instance
         */
        LS2C_NoticeGamePassed_Ack.prototype.items = $util.emptyArray;

        /**
         * LS2C_NoticeGamePassed_Ack dailyPassCount.
         * @member {number} dailyPassCount
         * @memberof Server2Client.LS2C_NoticeGamePassed_Ack
         * @instance
         */
        LS2C_NoticeGamePassed_Ack.prototype.dailyPassCount = 0;

        /**
         * LS2C_NoticeGamePassed_Ack dailyGameCount.
         * @member {number} dailyGameCount
         * @memberof Server2Client.LS2C_NoticeGamePassed_Ack
         * @instance
         */
        LS2C_NoticeGamePassed_Ack.prototype.dailyGameCount = 0;

        /**
         * LS2C_NoticeGamePassed_Ack giftPrice.
         * @member {number} giftPrice
         * @memberof Server2Client.LS2C_NoticeGamePassed_Ack
         * @instance
         */
        LS2C_NoticeGamePassed_Ack.prototype.giftPrice = 0;

        /**
         * Decodes a LS2C_NoticeGamePassed_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_NoticeGamePassed_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_NoticeGamePassed_Ack} LS2C_NoticeGamePassed_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_NoticeGamePassed_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_NoticeGamePassed_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.common.Item.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        m.dailyPassCount = r.int32();
                        break;
                    }
                case 4: {
                        m.dailyGameCount = r.int32();
                        break;
                    }
                case 5: {
                        m.giftPrice = r.int32();
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
         * @name Server2Client.LS2C_NoticeGamePassed_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} VerifyFail=2 VerifyFail value
         * @property {number} RepeatPass=3 RepeatPass value
         */
        LS2C_NoticeGamePassed_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "VerifyFail"] = 2;
            values[valuesById[3] = "RepeatPass"] = 3;
            return values;
        })();

        return LS2C_NoticeGamePassed_Ack;
    })();

    Server2Client.LS2C_InfiniteScore_Ack = (function() {

        /**
         * Properties of a LS2C_InfiniteScore_Ack.
         * @memberof Server2Client
         * @interface ILS2C_InfiniteScore_Ack
         * @property {Server2Client.LS2C_InfiniteScore_Ack.AckCode|null} [ackCode] LS2C_InfiniteScore_Ack ackCode
         */

        /**
         * Constructs a new LS2C_InfiniteScore_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_InfiniteScore_Ack.
         * @implements ILS2C_InfiniteScore_Ack
         * @constructor
         * @param {Server2Client.ILS2C_InfiniteScore_Ack=} [p] Properties to set
         */
        function LS2C_InfiniteScore_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_InfiniteScore_Ack ackCode.
         * @member {Server2Client.LS2C_InfiniteScore_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_InfiniteScore_Ack
         * @instance
         */
        LS2C_InfiniteScore_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_InfiniteScore_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_InfiniteScore_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_InfiniteScore_Ack} LS2C_InfiniteScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_InfiniteScore_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_InfiniteScore_Ack();
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
         * @name Server2Client.LS2C_InfiniteScore_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_InfiniteScore_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_InfiniteScore_Ack;
    })();

    Server2Client.LS2C_GetInfiniteRankList_Ack = (function() {

        /**
         * Properties of a LS2C_GetInfiniteRankList_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetInfiniteRankList_Ack
         * @property {Server2Client.LS2C_GetInfiniteRankList_Ack.AckCode|null} [ackCode] LS2C_GetInfiniteRankList_Ack ackCode
         * @property {Array.<Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo>|null} [rankInfoList] LS2C_GetInfiniteRankList_Ack rankInfoList
         */

        /**
         * Constructs a new LS2C_GetInfiniteRankList_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetInfiniteRankList_Ack.
         * @implements ILS2C_GetInfiniteRankList_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetInfiniteRankList_Ack=} [p] Properties to set
         */
        function LS2C_GetInfiniteRankList_Ack(p) {
            this.rankInfoList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetInfiniteRankList_Ack ackCode.
         * @member {Server2Client.LS2C_GetInfiniteRankList_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack
         * @instance
         */
        LS2C_GetInfiniteRankList_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetInfiniteRankList_Ack rankInfoList.
         * @member {Array.<Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo>} rankInfoList
         * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack
         * @instance
         */
        LS2C_GetInfiniteRankList_Ack.prototype.rankInfoList = $util.emptyArray;

        /**
         * Decodes a LS2C_GetInfiniteRankList_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetInfiniteRankList_Ack} LS2C_GetInfiniteRankList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetInfiniteRankList_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetInfiniteRankList_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.rankInfoList && m.rankInfoList.length))
                            m.rankInfoList = [];
                        m.rankInfoList.push($root.Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetInfiniteRankList_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetInfiniteRankList_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        LS2C_GetInfiniteRankList_Ack.RankInfo = (function() {

            /**
             * Properties of a RankInfo.
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack
             * @interface IRankInfo
             * @property {string|null} [Uid] RankInfo Uid
             * @property {string|null} [Name] RankInfo Name
             * @property {string|null} [Avatar] RankInfo Avatar
             * @property {number|null} [Score] RankInfo Score
             * @property {number|null} [Rank] RankInfo Rank
             */

            /**
             * Constructs a new RankInfo.
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack
             * @classdesc Represents a RankInfo.
             * @implements IRankInfo
             * @constructor
             * @param {Server2Client.LS2C_GetInfiniteRankList_Ack.IRankInfo=} [p] Properties to set
             */
            function RankInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * RankInfo Uid.
             * @member {string} Uid
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo
             * @instance
             */
            RankInfo.prototype.Uid = "";

            /**
             * RankInfo Name.
             * @member {string} Name
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo
             * @instance
             */
            RankInfo.prototype.Name = "";

            /**
             * RankInfo Avatar.
             * @member {string} Avatar
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo
             * @instance
             */
            RankInfo.prototype.Avatar = "";

            /**
             * RankInfo Score.
             * @member {number} Score
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo
             * @instance
             */
            RankInfo.prototype.Score = 0;

            /**
             * RankInfo Rank.
             * @member {number} Rank
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo
             * @instance
             */
            RankInfo.prototype.Rank = 0;

            /**
             * Decodes a RankInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo} RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankInfo.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1: {
                            m.Uid = r.string();
                            break;
                        }
                    case 2: {
                            m.Name = r.string();
                            break;
                        }
                    case 3: {
                            m.Avatar = r.string();
                            break;
                        }
                    case 4: {
                            m.Score = r.int32();
                            break;
                        }
                    case 5: {
                            m.Rank = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return RankInfo;
        })();

        return LS2C_GetInfiniteRankList_Ack;
    })();

    Server2Client.LS2C_StatisticsAdd_Ack = (function() {

        /**
         * Properties of a LS2C_StatisticsAdd_Ack.
         * @memberof Server2Client
         * @interface ILS2C_StatisticsAdd_Ack
         * @property {Server2Client.LS2C_StatisticsAdd_Ack.AckCode|null} [code] LS2C_StatisticsAdd_Ack code
         */

        /**
         * Constructs a new LS2C_StatisticsAdd_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_StatisticsAdd_Ack.
         * @implements ILS2C_StatisticsAdd_Ack
         * @constructor
         * @param {Server2Client.ILS2C_StatisticsAdd_Ack=} [p] Properties to set
         */
        function LS2C_StatisticsAdd_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_StatisticsAdd_Ack code.
         * @member {Server2Client.LS2C_StatisticsAdd_Ack.AckCode} code
         * @memberof Server2Client.LS2C_StatisticsAdd_Ack
         * @instance
         */
        LS2C_StatisticsAdd_Ack.prototype.code = 0;

        /**
         * Decodes a LS2C_StatisticsAdd_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_StatisticsAdd_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_StatisticsAdd_Ack} LS2C_StatisticsAdd_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_StatisticsAdd_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_StatisticsAdd_Ack();
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
         * @name Server2Client.LS2C_StatisticsAdd_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_StatisticsAdd_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_StatisticsAdd_Ack;
    })();

    Server2Client.LS2C_StatisticsGet_Ack = (function() {

        /**
         * Properties of a LS2C_StatisticsGet_Ack.
         * @memberof Server2Client
         * @interface ILS2C_StatisticsGet_Ack
         * @property {Server2Client.LS2C_StatisticsGet_Ack.AckCode|null} [code] LS2C_StatisticsGet_Ack code
         * @property {number|null} [totalAdNum] LS2C_StatisticsGet_Ack totalAdNum
         */

        /**
         * Constructs a new LS2C_StatisticsGet_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_StatisticsGet_Ack.
         * @implements ILS2C_StatisticsGet_Ack
         * @constructor
         * @param {Server2Client.ILS2C_StatisticsGet_Ack=} [p] Properties to set
         */
        function LS2C_StatisticsGet_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_StatisticsGet_Ack code.
         * @member {Server2Client.LS2C_StatisticsGet_Ack.AckCode} code
         * @memberof Server2Client.LS2C_StatisticsGet_Ack
         * @instance
         */
        LS2C_StatisticsGet_Ack.prototype.code = 0;

        /**
         * LS2C_StatisticsGet_Ack totalAdNum.
         * @member {number} totalAdNum
         * @memberof Server2Client.LS2C_StatisticsGet_Ack
         * @instance
         */
        LS2C_StatisticsGet_Ack.prototype.totalAdNum = 0;

        /**
         * Decodes a LS2C_StatisticsGet_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_StatisticsGet_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_StatisticsGet_Ack} LS2C_StatisticsGet_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_StatisticsGet_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_StatisticsGet_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        m.totalAdNum = r.int32();
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
         * @name Server2Client.LS2C_StatisticsGet_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_StatisticsGet_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_StatisticsGet_Ack;
    })();

    Server2Client.LS2C_ShareCountGet_Ack = (function() {

        /**
         * Properties of a LS2C_ShareCountGet_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ShareCountGet_Ack
         * @property {Server2Client.LS2C_ShareCountGet_Ack.AckCode|null} [code] LS2C_ShareCountGet_Ack code
         * @property {Object.<string,number>|null} [itemCountMap] LS2C_ShareCountGet_Ack itemCountMap
         */

        /**
         * Constructs a new LS2C_ShareCountGet_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ShareCountGet_Ack.
         * @implements ILS2C_ShareCountGet_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ShareCountGet_Ack=} [p] Properties to set
         */
        function LS2C_ShareCountGet_Ack(p) {
            this.itemCountMap = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ShareCountGet_Ack code.
         * @member {Server2Client.LS2C_ShareCountGet_Ack.AckCode} code
         * @memberof Server2Client.LS2C_ShareCountGet_Ack
         * @instance
         */
        LS2C_ShareCountGet_Ack.prototype.code = 0;

        /**
         * LS2C_ShareCountGet_Ack itemCountMap.
         * @member {Object.<string,number>} itemCountMap
         * @memberof Server2Client.LS2C_ShareCountGet_Ack
         * @instance
         */
        LS2C_ShareCountGet_Ack.prototype.itemCountMap = $util.emptyObject;

        /**
         * Decodes a LS2C_ShareCountGet_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ShareCountGet_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ShareCountGet_Ack} LS2C_ShareCountGet_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ShareCountGet_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShareCountGet_Ack(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.code = r.int32();
                        break;
                    }
                case 2: {
                        if (m.itemCountMap === $util.emptyObject)
                            m.itemCountMap = {};
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
                        m.itemCountMap[k] = value;
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
         * @name Server2Client.LS2C_ShareCountGet_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_ShareCountGet_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_ShareCountGet_Ack;
    })();

    Server2Client.LS2C_ShareCountSet_Ack = (function() {

        /**
         * Properties of a LS2C_ShareCountSet_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ShareCountSet_Ack
         * @property {Server2Client.LS2C_ShareCountSet_Ack.AckCode|null} [code] LS2C_ShareCountSet_Ack code
         */

        /**
         * Constructs a new LS2C_ShareCountSet_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ShareCountSet_Ack.
         * @implements ILS2C_ShareCountSet_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ShareCountSet_Ack=} [p] Properties to set
         */
        function LS2C_ShareCountSet_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ShareCountSet_Ack code.
         * @member {Server2Client.LS2C_ShareCountSet_Ack.AckCode} code
         * @memberof Server2Client.LS2C_ShareCountSet_Ack
         * @instance
         */
        LS2C_ShareCountSet_Ack.prototype.code = 0;

        /**
         * Decodes a LS2C_ShareCountSet_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ShareCountSet_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ShareCountSet_Ack} LS2C_ShareCountSet_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ShareCountSet_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShareCountSet_Ack();
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
         * @name Server2Client.LS2C_ShareCountSet_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_ShareCountSet_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_ShareCountSet_Ack;
    })();

    Server2Client.ItemInfo = (function() {

        /**
         * Properties of an ItemInfo.
         * @memberof Server2Client
         * @interface IItemInfo
         * @property {number|null} [itemId] ItemInfo itemId
         * @property {Long|null} [createTime] ItemInfo createTime
         * @property {boolean|null} [isNew] ItemInfo isNew
         * @property {string|null} [reason] ItemInfo reason
         * @property {string|null} [uid] ItemInfo uid
         */

        /**
         * Constructs a new ItemInfo.
         * @memberof Server2Client
         * @classdesc Represents an ItemInfo.
         * @implements IItemInfo
         * @constructor
         * @param {Server2Client.IItemInfo=} [p] Properties to set
         */
        function ItemInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ItemInfo itemId.
         * @member {number} itemId
         * @memberof Server2Client.ItemInfo
         * @instance
         */
        ItemInfo.prototype.itemId = 0;

        /**
         * ItemInfo createTime.
         * @member {Long} createTime
         * @memberof Server2Client.ItemInfo
         * @instance
         */
        ItemInfo.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ItemInfo isNew.
         * @member {boolean} isNew
         * @memberof Server2Client.ItemInfo
         * @instance
         */
        ItemInfo.prototype.isNew = false;

        /**
         * ItemInfo reason.
         * @member {string} reason
         * @memberof Server2Client.ItemInfo
         * @instance
         */
        ItemInfo.prototype.reason = "";

        /**
         * ItemInfo uid.
         * @member {string} uid
         * @memberof Server2Client.ItemInfo
         * @instance
         */
        ItemInfo.prototype.uid = "";

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.ItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.ItemInfo} ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.ItemInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.itemId = r.int32();
                        break;
                    }
                case 2: {
                        m.createTime = r.int64();
                        break;
                    }
                case 3: {
                        m.isNew = r.bool();
                        break;
                    }
                case 4: {
                        m.reason = r.string();
                        break;
                    }
                case 5: {
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

        return ItemInfo;
    })();

    Server2Client.SkinCollection = (function() {

        /**
         * Properties of a SkinCollection.
         * @memberof Server2Client
         * @interface ISkinCollection
         * @property {Array.<Server2Client.ItemInfo>|null} [skins] SkinCollection skins
         */

        /**
         * Constructs a new SkinCollection.
         * @memberof Server2Client
         * @classdesc Represents a SkinCollection.
         * @implements ISkinCollection
         * @constructor
         * @param {Server2Client.ISkinCollection=} [p] Properties to set
         */
        function SkinCollection(p) {
            this.skins = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SkinCollection skins.
         * @member {Array.<Server2Client.ItemInfo>} skins
         * @memberof Server2Client.SkinCollection
         * @instance
         */
        SkinCollection.prototype.skins = $util.emptyArray;

        /**
         * Decodes a SkinCollection message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.SkinCollection
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.SkinCollection} SkinCollection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkinCollection.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.SkinCollection();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        if (!(m.skins && m.skins.length))
                            m.skins = [];
                        m.skins.push($root.Server2Client.ItemInfo.decode(r, r.uint32()));
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SkinCollection;
    })();

    Server2Client.LS2C_GetDressUpInfo_Ack = (function() {

        /**
         * Properties of a LS2C_GetDressUpInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetDressUpInfo_Ack
         * @property {Server2Client.LS2C_GetDressUpInfo_Ack.AckCode|null} [ackCode] LS2C_GetDressUpInfo_Ack ackCode
         * @property {Object.<string,number>|null} [usingSkin] LS2C_GetDressUpInfo_Ack usingSkin
         * @property {Object.<string,Server2Client.SkinCollection>|null} [skinCollection] LS2C_GetDressUpInfo_Ack skinCollection
         */

        /**
         * Constructs a new LS2C_GetDressUpInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetDressUpInfo_Ack.
         * @implements ILS2C_GetDressUpInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetDressUpInfo_Ack=} [p] Properties to set
         */
        function LS2C_GetDressUpInfo_Ack(p) {
            this.usingSkin = {};
            this.skinCollection = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetDressUpInfo_Ack ackCode.
         * @member {Server2Client.LS2C_GetDressUpInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetDressUpInfo_Ack
         * @instance
         */
        LS2C_GetDressUpInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetDressUpInfo_Ack usingSkin.
         * @member {Object.<string,number>} usingSkin
         * @memberof Server2Client.LS2C_GetDressUpInfo_Ack
         * @instance
         */
        LS2C_GetDressUpInfo_Ack.prototype.usingSkin = $util.emptyObject;

        /**
         * LS2C_GetDressUpInfo_Ack skinCollection.
         * @member {Object.<string,Server2Client.SkinCollection>} skinCollection
         * @memberof Server2Client.LS2C_GetDressUpInfo_Ack
         * @instance
         */
        LS2C_GetDressUpInfo_Ack.prototype.skinCollection = $util.emptyObject;

        /**
         * Decodes a LS2C_GetDressUpInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetDressUpInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetDressUpInfo_Ack} LS2C_GetDressUpInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetDressUpInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDressUpInfo_Ack(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
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
                case 3: {
                        if (m.skinCollection === $util.emptyObject)
                            m.skinCollection = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        value = null;
                        while (r.pos < c2) {
                            var tag2 = r.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                k = r.int32();
                                break;
                            case 2:
                                value = $root.Server2Client.SkinCollection.decode(r, r.uint32());
                                break;
                            default:
                                r.skipType(tag2 & 7);
                                break;
                            }
                        }
                        m.skinCollection[k] = value;
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
         * @name Server2Client.LS2C_GetDressUpInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetDressUpInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetDressUpInfo_Ack;
    })();

    Server2Client.LS2C_ViewSkins_Ack = (function() {

        /**
         * Properties of a LS2C_ViewSkins_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ViewSkins_Ack
         * @property {Server2Client.LS2C_ViewSkins_Ack.AckCode|null} [ackCode] LS2C_ViewSkins_Ack ackCode
         */

        /**
         * Constructs a new LS2C_ViewSkins_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ViewSkins_Ack.
         * @implements ILS2C_ViewSkins_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ViewSkins_Ack=} [p] Properties to set
         */
        function LS2C_ViewSkins_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ViewSkins_Ack ackCode.
         * @member {Server2Client.LS2C_ViewSkins_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ViewSkins_Ack
         * @instance
         */
        LS2C_ViewSkins_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_ViewSkins_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ViewSkins_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ViewSkins_Ack} LS2C_ViewSkins_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ViewSkins_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ViewSkins_Ack();
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
         * @name Server2Client.LS2C_ViewSkins_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_ViewSkins_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_ViewSkins_Ack;
    })();

    Server2Client.LS2C_SkinDressUp_Ack = (function() {

        /**
         * Properties of a LS2C_SkinDressUp_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SkinDressUp_Ack
         * @property {Server2Client.LS2C_SkinDressUp_Ack.AckCode|null} [ackCode] LS2C_SkinDressUp_Ack ackCode
         */

        /**
         * Constructs a new LS2C_SkinDressUp_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SkinDressUp_Ack.
         * @implements ILS2C_SkinDressUp_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SkinDressUp_Ack=} [p] Properties to set
         */
        function LS2C_SkinDressUp_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SkinDressUp_Ack ackCode.
         * @member {Server2Client.LS2C_SkinDressUp_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SkinDressUp_Ack
         * @instance
         */
        LS2C_SkinDressUp_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_SkinDressUp_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SkinDressUp_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SkinDressUp_Ack} LS2C_SkinDressUp_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SkinDressUp_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SkinDressUp_Ack();
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
         * @name Server2Client.LS2C_SkinDressUp_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} WrongPos=2 WrongPos value
         */
        LS2C_SkinDressUp_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "WrongPos"] = 2;
            return values;
        })();

        return LS2C_SkinDressUp_Ack;
    })();

    Server2Client.LS2C_GetDailyLevelData_Ack = (function() {

        /**
         * Properties of a LS2C_GetDailyLevelData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetDailyLevelData_Ack
         * @property {Server2Client.LS2C_GetDailyLevelData_Ack.AckCode|null} [ackCode] LS2C_GetDailyLevelData_Ack ackCode
         * @property {number|null} [levelId] LS2C_GetDailyLevelData_Ack levelId
         * @property {Array.<Server2Client.LS2C_GetDailyLevelData_Ack.LevelData>|null} [levelData] LS2C_GetDailyLevelData_Ack levelData
         * @property {number|null} [displayMode] LS2C_GetDailyLevelData_Ack displayMode
         */

        /**
         * Constructs a new LS2C_GetDailyLevelData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetDailyLevelData_Ack.
         * @implements ILS2C_GetDailyLevelData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetDailyLevelData_Ack=} [p] Properties to set
         */
        function LS2C_GetDailyLevelData_Ack(p) {
            this.levelData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetDailyLevelData_Ack ackCode.
         * @member {Server2Client.LS2C_GetDailyLevelData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
         * @instance
         */
        LS2C_GetDailyLevelData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetDailyLevelData_Ack levelId.
         * @member {number} levelId
         * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
         * @instance
         */
        LS2C_GetDailyLevelData_Ack.prototype.levelId = 0;

        /**
         * LS2C_GetDailyLevelData_Ack levelData.
         * @member {Array.<Server2Client.LS2C_GetDailyLevelData_Ack.LevelData>} levelData
         * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
         * @instance
         */
        LS2C_GetDailyLevelData_Ack.prototype.levelData = $util.emptyArray;

        /**
         * LS2C_GetDailyLevelData_Ack displayMode.
         * @member {number} displayMode
         * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
         * @instance
         */
        LS2C_GetDailyLevelData_Ack.prototype.displayMode = 0;

        /**
         * Decodes a LS2C_GetDailyLevelData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetDailyLevelData_Ack} LS2C_GetDailyLevelData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetDailyLevelData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDailyLevelData_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.levelId = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.levelData && m.levelData.length))
                            m.levelData = [];
                        m.levelData.push($root.Server2Client.LS2C_GetDailyLevelData_Ack.LevelData.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        m.displayMode = r.int32();
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
         * @name Server2Client.LS2C_GetDailyLevelData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         */
        LS2C_GetDailyLevelData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            return values;
        })();

        LS2C_GetDailyLevelData_Ack.LevelData = (function() {

            /**
             * Properties of a LevelData.
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
             * @interface ILevelData
             * @property {number|null} [progressId] LevelData progressId
             * @property {number|null} [stageId] LevelData stageId
             * @property {number|null} [stepId] LevelData stepId
             * @property {number|null} [score] LevelData score
             * @property {string|null} [iconId] LevelData iconId
             * @property {number|null} [audioStep] LevelData audioStep
             */

            /**
             * Constructs a new LevelData.
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack
             * @classdesc Represents a LevelData.
             * @implements ILevelData
             * @constructor
             * @param {Server2Client.LS2C_GetDailyLevelData_Ack.ILevelData=} [p] Properties to set
             */
            function LevelData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * LevelData progressId.
             * @member {number} progressId
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @instance
             */
            LevelData.prototype.progressId = 0;

            /**
             * LevelData stageId.
             * @member {number} stageId
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @instance
             */
            LevelData.prototype.stageId = 0;

            /**
             * LevelData stepId.
             * @member {number} stepId
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @instance
             */
            LevelData.prototype.stepId = 0;

            /**
             * LevelData score.
             * @member {number} score
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @instance
             */
            LevelData.prototype.score = 0;

            /**
             * LevelData iconId.
             * @member {string} iconId
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @instance
             */
            LevelData.prototype.iconId = "";

            /**
             * LevelData audioStep.
             * @member {number} audioStep
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @instance
             */
            LevelData.prototype.audioStep = 0;

            /**
             * Decodes a LevelData message from the specified reader or buffer.
             * @function decode
             * @memberof Server2Client.LS2C_GetDailyLevelData_Ack.LevelData
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {Server2Client.LS2C_GetDailyLevelData_Ack.LevelData} LevelData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LevelData.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDailyLevelData_Ack.LevelData();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1: {
                            m.progressId = r.int32();
                            break;
                        }
                    case 2: {
                            m.stageId = r.int32();
                            break;
                        }
                    case 3: {
                            m.stepId = r.int32();
                            break;
                        }
                    case 4: {
                            m.score = r.int32();
                            break;
                        }
                    case 5: {
                            m.iconId = r.string();
                            break;
                        }
                    case 6: {
                            m.audioStep = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return LevelData;
        })();

        return LS2C_GetDailyLevelData_Ack;
    })();

    Server2Client.LS2C_GetDailyLevelList_Ack = (function() {

        /**
         * Properties of a LS2C_GetDailyLevelList_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetDailyLevelList_Ack
         * @property {Server2Client.LS2C_GetDailyLevelList_Ack.AckCode|null} [ackCode] LS2C_GetDailyLevelList_Ack ackCode
         * @property {Array.<Server2Client.DailyLevelData>|null} [levelData] LS2C_GetDailyLevelList_Ack levelData
         */

        /**
         * Constructs a new LS2C_GetDailyLevelList_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetDailyLevelList_Ack.
         * @implements ILS2C_GetDailyLevelList_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetDailyLevelList_Ack=} [p] Properties to set
         */
        function LS2C_GetDailyLevelList_Ack(p) {
            this.levelData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetDailyLevelList_Ack ackCode.
         * @member {Server2Client.LS2C_GetDailyLevelList_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetDailyLevelList_Ack
         * @instance
         */
        LS2C_GetDailyLevelList_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetDailyLevelList_Ack levelData.
         * @member {Array.<Server2Client.DailyLevelData>} levelData
         * @memberof Server2Client.LS2C_GetDailyLevelList_Ack
         * @instance
         */
        LS2C_GetDailyLevelList_Ack.prototype.levelData = $util.emptyArray;

        /**
         * Decodes a LS2C_GetDailyLevelList_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetDailyLevelList_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetDailyLevelList_Ack} LS2C_GetDailyLevelList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetDailyLevelList_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDailyLevelList_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.levelData && m.levelData.length))
                            m.levelData = [];
                        m.levelData.push($root.Server2Client.DailyLevelData.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetDailyLevelList_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         */
        LS2C_GetDailyLevelList_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            return values;
        })();

        return LS2C_GetDailyLevelList_Ack;
    })();

    Server2Client.DailyLevelData = (function() {

        /**
         * Properties of a DailyLevelData.
         * @memberof Server2Client
         * @interface IDailyLevelData
         * @property {number|null} [levelId] DailyLevelData levelId
         * @property {number|null} [displayMode] DailyLevelData displayMode
         * @property {Array.<Server2Client.DailyLevelData.LevelBaseData>|null} [levelData] DailyLevelData levelData
         * @property {number|null} [designer] DailyLevelData designer
         * @property {number|null} [score] DailyLevelData score
         * @property {number|null} [type] DailyLevelData type
         */

        /**
         * Constructs a new DailyLevelData.
         * @memberof Server2Client
         * @classdesc Represents a DailyLevelData.
         * @implements IDailyLevelData
         * @constructor
         * @param {Server2Client.IDailyLevelData=} [p] Properties to set
         */
        function DailyLevelData(p) {
            this.levelData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * DailyLevelData levelId.
         * @member {number} levelId
         * @memberof Server2Client.DailyLevelData
         * @instance
         */
        DailyLevelData.prototype.levelId = 0;

        /**
         * DailyLevelData displayMode.
         * @member {number} displayMode
         * @memberof Server2Client.DailyLevelData
         * @instance
         */
        DailyLevelData.prototype.displayMode = 0;

        /**
         * DailyLevelData levelData.
         * @member {Array.<Server2Client.DailyLevelData.LevelBaseData>} levelData
         * @memberof Server2Client.DailyLevelData
         * @instance
         */
        DailyLevelData.prototype.levelData = $util.emptyArray;

        /**
         * DailyLevelData designer.
         * @member {number} designer
         * @memberof Server2Client.DailyLevelData
         * @instance
         */
        DailyLevelData.prototype.designer = 0;

        /**
         * DailyLevelData score.
         * @member {number} score
         * @memberof Server2Client.DailyLevelData
         * @instance
         */
        DailyLevelData.prototype.score = 0;

        /**
         * DailyLevelData type.
         * @member {number} type
         * @memberof Server2Client.DailyLevelData
         * @instance
         */
        DailyLevelData.prototype.type = 0;

        /**
         * Decodes a DailyLevelData message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.DailyLevelData
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.DailyLevelData} DailyLevelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyLevelData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.DailyLevelData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.levelId = r.int32();
                        break;
                    }
                case 2: {
                        m.displayMode = r.int32();
                        break;
                    }
                case 3: {
                        if (!(m.levelData && m.levelData.length))
                            m.levelData = [];
                        m.levelData.push($root.Server2Client.DailyLevelData.LevelBaseData.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        m.designer = r.int32();
                        break;
                    }
                case 5: {
                        m.score = r.int32();
                        break;
                    }
                case 6: {
                        m.type = r.int32();
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        DailyLevelData.LevelBaseData = (function() {

            /**
             * Properties of a LevelBaseData.
             * @memberof Server2Client.DailyLevelData
             * @interface ILevelBaseData
             * @property {number|null} [progressId] LevelBaseData progressId
             * @property {number|null} [stageId] LevelBaseData stageId
             * @property {number|null} [stepId] LevelBaseData stepId
             * @property {number|null} [score] LevelBaseData score
             * @property {string|null} [iconId] LevelBaseData iconId
             * @property {number|null} [audioStep] LevelBaseData audioStep
             * @property {Array.<number>|null} [stageWeights] LevelBaseData stageWeights
             */

            /**
             * Constructs a new LevelBaseData.
             * @memberof Server2Client.DailyLevelData
             * @classdesc Represents a LevelBaseData.
             * @implements ILevelBaseData
             * @constructor
             * @param {Server2Client.DailyLevelData.ILevelBaseData=} [p] Properties to set
             */
            function LevelBaseData(p) {
                this.stageWeights = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * LevelBaseData progressId.
             * @member {number} progressId
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.progressId = 0;

            /**
             * LevelBaseData stageId.
             * @member {number} stageId
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.stageId = 0;

            /**
             * LevelBaseData stepId.
             * @member {number} stepId
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.stepId = 0;

            /**
             * LevelBaseData score.
             * @member {number} score
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.score = 0;

            /**
             * LevelBaseData iconId.
             * @member {string} iconId
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.iconId = "";

            /**
             * LevelBaseData audioStep.
             * @member {number} audioStep
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.audioStep = 0;

            /**
             * LevelBaseData stageWeights.
             * @member {Array.<number>} stageWeights
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @instance
             */
            LevelBaseData.prototype.stageWeights = $util.emptyArray;

            /**
             * Decodes a LevelBaseData message from the specified reader or buffer.
             * @function decode
             * @memberof Server2Client.DailyLevelData.LevelBaseData
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {Server2Client.DailyLevelData.LevelBaseData} LevelBaseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LevelBaseData.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.DailyLevelData.LevelBaseData();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1: {
                            m.progressId = r.int32();
                            break;
                        }
                    case 2: {
                            m.stageId = r.int32();
                            break;
                        }
                    case 3: {
                            m.stepId = r.int32();
                            break;
                        }
                    case 4: {
                            m.score = r.int32();
                            break;
                        }
                    case 5: {
                            m.iconId = r.string();
                            break;
                        }
                    case 6: {
                            m.audioStep = r.int32();
                            break;
                        }
                    case 7: {
                            if (!(m.stageWeights && m.stageWeights.length))
                                m.stageWeights = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.stageWeights.push(r.int32());
                            } else
                                m.stageWeights.push(r.int32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return LevelBaseData;
        })();

        return DailyLevelData;
    })();

    Server2Client.LS2C_SyncGameData_Ack = (function() {

        /**
         * Properties of a LS2C_SyncGameData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SyncGameData_Ack
         * @property {Server2Client.LS2C_SyncGameData_Ack.AckCode|null} [ackCode] LS2C_SyncGameData_Ack ackCode
         * @property {number|null} [maxStep] LS2C_SyncGameData_Ack maxStep
         */

        /**
         * Constructs a new LS2C_SyncGameData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SyncGameData_Ack.
         * @implements ILS2C_SyncGameData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SyncGameData_Ack=} [p] Properties to set
         */
        function LS2C_SyncGameData_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SyncGameData_Ack ackCode.
         * @member {Server2Client.LS2C_SyncGameData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SyncGameData_Ack
         * @instance
         */
        LS2C_SyncGameData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SyncGameData_Ack maxStep.
         * @member {number} maxStep
         * @memberof Server2Client.LS2C_SyncGameData_Ack
         * @instance
         */
        LS2C_SyncGameData_Ack.prototype.maxStep = 0;

        /**
         * Decodes a LS2C_SyncGameData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SyncGameData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SyncGameData_Ack} LS2C_SyncGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SyncGameData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SyncGameData_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.maxStep = r.int32();
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
         * @name Server2Client.LS2C_SyncGameData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoMatch=2 NoMatch value
         * @property {number} StepError=3 StepError value
         * @property {number} StepExist=4 StepExist value
         */
        LS2C_SyncGameData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoMatch"] = 2;
            values[valuesById[3] = "StepError"] = 3;
            values[valuesById[4] = "StepExist"] = 4;
            return values;
        })();

        return LS2C_SyncGameData_Ack;
    })();

    Server2Client.LS2C_RestartGame_Ack = (function() {

        /**
         * Properties of a LS2C_RestartGame_Ack.
         * @memberof Server2Client
         * @interface ILS2C_RestartGame_Ack
         * @property {Server2Client.LS2C_RestartGame_Ack.AckCode|null} [ackCode] LS2C_RestartGame_Ack ackCode
         * @property {string|null} [matchInfo] LS2C_RestartGame_Ack matchInfo
         * @property {Array.<number>|null} [seeds] LS2C_RestartGame_Ack seeds
         */

        /**
         * Constructs a new LS2C_RestartGame_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_RestartGame_Ack.
         * @implements ILS2C_RestartGame_Ack
         * @constructor
         * @param {Server2Client.ILS2C_RestartGame_Ack=} [p] Properties to set
         */
        function LS2C_RestartGame_Ack(p) {
            this.seeds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_RestartGame_Ack ackCode.
         * @member {Server2Client.LS2C_RestartGame_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_RestartGame_Ack
         * @instance
         */
        LS2C_RestartGame_Ack.prototype.ackCode = 0;

        /**
         * LS2C_RestartGame_Ack matchInfo.
         * @member {string} matchInfo
         * @memberof Server2Client.LS2C_RestartGame_Ack
         * @instance
         */
        LS2C_RestartGame_Ack.prototype.matchInfo = "";

        /**
         * LS2C_RestartGame_Ack seeds.
         * @member {Array.<number>} seeds
         * @memberof Server2Client.LS2C_RestartGame_Ack
         * @instance
         */
        LS2C_RestartGame_Ack.prototype.seeds = $util.emptyArray;

        /**
         * Decodes a LS2C_RestartGame_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_RestartGame_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_RestartGame_Ack} LS2C_RestartGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_RestartGame_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_RestartGame_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.matchInfo = r.string();
                        break;
                    }
                case 3: {
                        if (!(m.seeds && m.seeds.length))
                            m.seeds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.seeds.push(r.uint32());
                        } else
                            m.seeds.push(r.uint32());
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
         * @name Server2Client.LS2C_RestartGame_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoExist=2 NoExist value
         */
        LS2C_RestartGame_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoExist"] = 2;
            return values;
        })();

        return LS2C_RestartGame_Ack;
    })();

    Server2Client.LS2C_StartEndless_Ack = (function() {

        /**
         * Properties of a LS2C_StartEndless_Ack.
         * @memberof Server2Client
         * @interface ILS2C_StartEndless_Ack
         * @property {Server2Client.LS2C_StartEndless_Ack.AckCode|null} [ackCode] LS2C_StartEndless_Ack ackCode
         * @property {string|null} [gameToken] LS2C_StartEndless_Ack gameToken
         * @property {Array.<number>|null} [seeds] LS2C_StartEndless_Ack seeds
         * @property {Object.<string,number>|null} [scores] LS2C_StartEndless_Ack scores
         */

        /**
         * Constructs a new LS2C_StartEndless_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_StartEndless_Ack.
         * @implements ILS2C_StartEndless_Ack
         * @constructor
         * @param {Server2Client.ILS2C_StartEndless_Ack=} [p] Properties to set
         */
        function LS2C_StartEndless_Ack(p) {
            this.seeds = [];
            this.scores = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_StartEndless_Ack ackCode.
         * @member {Server2Client.LS2C_StartEndless_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_StartEndless_Ack
         * @instance
         */
        LS2C_StartEndless_Ack.prototype.ackCode = 0;

        /**
         * LS2C_StartEndless_Ack gameToken.
         * @member {string} gameToken
         * @memberof Server2Client.LS2C_StartEndless_Ack
         * @instance
         */
        LS2C_StartEndless_Ack.prototype.gameToken = "";

        /**
         * LS2C_StartEndless_Ack seeds.
         * @member {Array.<number>} seeds
         * @memberof Server2Client.LS2C_StartEndless_Ack
         * @instance
         */
        LS2C_StartEndless_Ack.prototype.seeds = $util.emptyArray;

        /**
         * LS2C_StartEndless_Ack scores.
         * @member {Object.<string,number>} scores
         * @memberof Server2Client.LS2C_StartEndless_Ack
         * @instance
         */
        LS2C_StartEndless_Ack.prototype.scores = $util.emptyObject;

        /**
         * Decodes a LS2C_StartEndless_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_StartEndless_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_StartEndless_Ack} LS2C_StartEndless_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_StartEndless_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_StartEndless_Ack(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.gameToken = r.string();
                        break;
                    }
                case 3: {
                        if (!(m.seeds && m.seeds.length))
                            m.seeds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.seeds.push(r.uint32());
                        } else
                            m.seeds.push(r.uint32());
                        break;
                    }
                case 4: {
                        if (m.scores === $util.emptyObject)
                            m.scores = {};
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
                        m.scores[k] = value;
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
         * @name Server2Client.LS2C_StartEndless_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyStart=2 AlreadyStart value
         * @property {number} CountLimit=3 CountLimit value
         */
        LS2C_StartEndless_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyStart"] = 2;
            values[valuesById[3] = "CountLimit"] = 3;
            return values;
        })();

        return LS2C_StartEndless_Ack;
    })();

    Server2Client.LS2C_RestartEndless_Ack = (function() {

        /**
         * Properties of a LS2C_RestartEndless_Ack.
         * @memberof Server2Client
         * @interface ILS2C_RestartEndless_Ack
         * @property {Server2Client.LS2C_RestartEndless_Ack.AckCode|null} [ackCode] LS2C_RestartEndless_Ack ackCode
         * @property {string|null} [matchInfo] LS2C_RestartEndless_Ack matchInfo
         * @property {string|null} [gameToken] LS2C_RestartEndless_Ack gameToken
         * @property {Array.<number>|null} [seeds] LS2C_RestartEndless_Ack seeds
         * @property {boolean|null} [isCrossActivity] LS2C_RestartEndless_Ack isCrossActivity
         * @property {Object.<string,number>|null} [scores] LS2C_RestartEndless_Ack scores
         */

        /**
         * Constructs a new LS2C_RestartEndless_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_RestartEndless_Ack.
         * @implements ILS2C_RestartEndless_Ack
         * @constructor
         * @param {Server2Client.ILS2C_RestartEndless_Ack=} [p] Properties to set
         */
        function LS2C_RestartEndless_Ack(p) {
            this.seeds = [];
            this.scores = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_RestartEndless_Ack ackCode.
         * @member {Server2Client.LS2C_RestartEndless_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @instance
         */
        LS2C_RestartEndless_Ack.prototype.ackCode = 0;

        /**
         * LS2C_RestartEndless_Ack matchInfo.
         * @member {string} matchInfo
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @instance
         */
        LS2C_RestartEndless_Ack.prototype.matchInfo = "";

        /**
         * LS2C_RestartEndless_Ack gameToken.
         * @member {string} gameToken
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @instance
         */
        LS2C_RestartEndless_Ack.prototype.gameToken = "";

        /**
         * LS2C_RestartEndless_Ack seeds.
         * @member {Array.<number>} seeds
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @instance
         */
        LS2C_RestartEndless_Ack.prototype.seeds = $util.emptyArray;

        /**
         * LS2C_RestartEndless_Ack isCrossActivity.
         * @member {boolean} isCrossActivity
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @instance
         */
        LS2C_RestartEndless_Ack.prototype.isCrossActivity = false;

        /**
         * LS2C_RestartEndless_Ack scores.
         * @member {Object.<string,number>} scores
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @instance
         */
        LS2C_RestartEndless_Ack.prototype.scores = $util.emptyObject;

        /**
         * Decodes a LS2C_RestartEndless_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_RestartEndless_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_RestartEndless_Ack} LS2C_RestartEndless_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_RestartEndless_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_RestartEndless_Ack(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.matchInfo = r.string();
                        break;
                    }
                case 3: {
                        m.gameToken = r.string();
                        break;
                    }
                case 4: {
                        if (!(m.seeds && m.seeds.length))
                            m.seeds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.seeds.push(r.uint32());
                        } else
                            m.seeds.push(r.uint32());
                        break;
                    }
                case 5: {
                        m.isCrossActivity = r.bool();
                        break;
                    }
                case 6: {
                        if (m.scores === $util.emptyObject)
                            m.scores = {};
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
                        m.scores[k] = value;
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
         * @name Server2Client.LS2C_RestartEndless_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoExist=2 NoExist value
         * @property {number} Expired=3 Expired value
         */
        LS2C_RestartEndless_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoExist"] = 2;
            values[valuesById[3] = "Expired"] = 3;
            return values;
        })();

        return LS2C_RestartEndless_Ack;
    })();

    Server2Client.LS2C_EndlessGameOver_Ack = (function() {

        /**
         * Properties of a LS2C_EndlessGameOver_Ack.
         * @memberof Server2Client
         * @interface ILS2C_EndlessGameOver_Ack
         * @property {Server2Client.LS2C_EndlessGameOver_Ack.AckCode|null} [ackCode] LS2C_EndlessGameOver_Ack ackCode
         * @property {number|null} [score] LS2C_EndlessGameOver_Ack score
         * @property {number|null} [maxScore] LS2C_EndlessGameOver_Ack maxScore
         * @property {Long|null} [startTime] LS2C_EndlessGameOver_Ack startTime
         * @property {protocol.Payslip|null} [payslip] LS2C_EndlessGameOver_Ack payslip
         * @property {number|null} [beyond] LS2C_EndlessGameOver_Ack beyond
         */

        /**
         * Constructs a new LS2C_EndlessGameOver_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_EndlessGameOver_Ack.
         * @implements ILS2C_EndlessGameOver_Ack
         * @constructor
         * @param {Server2Client.ILS2C_EndlessGameOver_Ack=} [p] Properties to set
         */
        function LS2C_EndlessGameOver_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_EndlessGameOver_Ack ackCode.
         * @member {Server2Client.LS2C_EndlessGameOver_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @instance
         */
        LS2C_EndlessGameOver_Ack.prototype.ackCode = 0;

        /**
         * LS2C_EndlessGameOver_Ack score.
         * @member {number} score
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @instance
         */
        LS2C_EndlessGameOver_Ack.prototype.score = 0;

        /**
         * LS2C_EndlessGameOver_Ack maxScore.
         * @member {number} maxScore
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @instance
         */
        LS2C_EndlessGameOver_Ack.prototype.maxScore = 0;

        /**
         * LS2C_EndlessGameOver_Ack startTime.
         * @member {Long} startTime
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @instance
         */
        LS2C_EndlessGameOver_Ack.prototype.startTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LS2C_EndlessGameOver_Ack payslip.
         * @member {protocol.Payslip|null|undefined} payslip
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @instance
         */
        LS2C_EndlessGameOver_Ack.prototype.payslip = null;

        /**
         * LS2C_EndlessGameOver_Ack beyond.
         * @member {number} beyond
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @instance
         */
        LS2C_EndlessGameOver_Ack.prototype.beyond = 0;

        /**
         * Decodes a LS2C_EndlessGameOver_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_EndlessGameOver_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_EndlessGameOver_Ack} LS2C_EndlessGameOver_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_EndlessGameOver_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_EndlessGameOver_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.score = r.int32();
                        break;
                    }
                case 3: {
                        m.maxScore = r.int32();
                        break;
                    }
                case 4: {
                        m.startTime = r.int64();
                        break;
                    }
                case 5: {
                        m.payslip = $root.protocol.Payslip.decode(r, r.uint32());
                        break;
                    }
                case 6: {
                        m.beyond = r.int32();
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
         * @name Server2Client.LS2C_EndlessGameOver_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} VerifyFail=2 VerifyFail value
         */
        LS2C_EndlessGameOver_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "VerifyFail"] = 2;
            return values;
        })();

        return LS2C_EndlessGameOver_Ack;
    })();

    Server2Client.LS2C_SettleSalary_Ack = (function() {

        /**
         * Properties of a LS2C_SettleSalary_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SettleSalary_Ack
         * @property {Server2Client.LS2C_SettleSalary_Ack.AckCode|null} [ackCode] LS2C_SettleSalary_Ack ackCode
         * @property {protocol.Payslip|null} [payslip] LS2C_SettleSalary_Ack payslip
         */

        /**
         * Constructs a new LS2C_SettleSalary_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SettleSalary_Ack.
         * @implements ILS2C_SettleSalary_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SettleSalary_Ack=} [p] Properties to set
         */
        function LS2C_SettleSalary_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SettleSalary_Ack ackCode.
         * @member {Server2Client.LS2C_SettleSalary_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SettleSalary_Ack
         * @instance
         */
        LS2C_SettleSalary_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SettleSalary_Ack payslip.
         * @member {protocol.Payslip|null|undefined} payslip
         * @memberof Server2Client.LS2C_SettleSalary_Ack
         * @instance
         */
        LS2C_SettleSalary_Ack.prototype.payslip = null;

        /**
         * Decodes a LS2C_SettleSalary_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SettleSalary_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SettleSalary_Ack} LS2C_SettleSalary_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SettleSalary_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SettleSalary_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.payslip = $root.protocol.Payslip.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_SettleSalary_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_SettleSalary_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_SettleSalary_Ack;
    })();

    Server2Client.LS2C_ShopInfo_Ack = (function() {

        /**
         * Properties of a LS2C_ShopInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ShopInfo_Ack
         * @property {Server2Client.LS2C_ShopInfo_Ack.AckCode|null} [ackCode] LS2C_ShopInfo_Ack ackCode
         * @property {number|null} [buyCount] LS2C_ShopInfo_Ack buyCount
         * @property {number|null} [maxBuyCount] LS2C_ShopInfo_Ack maxBuyCount
         * @property {number|null} [refreshCount] LS2C_ShopInfo_Ack refreshCount
         * @property {number|null} [maxRefreshCount] LS2C_ShopInfo_Ack maxRefreshCount
         * @property {Array.<Server2Client.LS2C_ShopInfo_Ack.ShopItem>|null} [shopItemList] LS2C_ShopInfo_Ack shopItemList
         */

        /**
         * Constructs a new LS2C_ShopInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ShopInfo_Ack.
         * @implements ILS2C_ShopInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ShopInfo_Ack=} [p] Properties to set
         */
        function LS2C_ShopInfo_Ack(p) {
            this.shopItemList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ShopInfo_Ack ackCode.
         * @member {Server2Client.LS2C_ShopInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @instance
         */
        LS2C_ShopInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_ShopInfo_Ack buyCount.
         * @member {number} buyCount
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @instance
         */
        LS2C_ShopInfo_Ack.prototype.buyCount = 0;

        /**
         * LS2C_ShopInfo_Ack maxBuyCount.
         * @member {number} maxBuyCount
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @instance
         */
        LS2C_ShopInfo_Ack.prototype.maxBuyCount = 0;

        /**
         * LS2C_ShopInfo_Ack refreshCount.
         * @member {number} refreshCount
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @instance
         */
        LS2C_ShopInfo_Ack.prototype.refreshCount = 0;

        /**
         * LS2C_ShopInfo_Ack maxRefreshCount.
         * @member {number} maxRefreshCount
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @instance
         */
        LS2C_ShopInfo_Ack.prototype.maxRefreshCount = 0;

        /**
         * LS2C_ShopInfo_Ack shopItemList.
         * @member {Array.<Server2Client.LS2C_ShopInfo_Ack.ShopItem>} shopItemList
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @instance
         */
        LS2C_ShopInfo_Ack.prototype.shopItemList = $util.emptyArray;

        /**
         * Decodes a LS2C_ShopInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ShopInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ShopInfo_Ack} LS2C_ShopInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ShopInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShopInfo_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.buyCount = r.int32();
                        break;
                    }
                case 3: {
                        m.maxBuyCount = r.int32();
                        break;
                    }
                case 4: {
                        m.refreshCount = r.int32();
                        break;
                    }
                case 5: {
                        m.maxRefreshCount = r.int32();
                        break;
                    }
                case 6: {
                        if (!(m.shopItemList && m.shopItemList.length))
                            m.shopItemList = [];
                        m.shopItemList.push($root.Server2Client.LS2C_ShopInfo_Ack.ShopItem.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_ShopInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} SoldOut=2 SoldOut value
         */
        LS2C_ShopInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "SoldOut"] = 2;
            return values;
        })();

        LS2C_ShopInfo_Ack.ShopItem = (function() {

            /**
             * Properties of a ShopItem.
             * @memberof Server2Client.LS2C_ShopInfo_Ack
             * @interface IShopItem
             * @property {number|null} [itemId] ShopItem itemId
             * @property {number|null} [price] ShopItem price
             * @property {boolean|null} [isBought] ShopItem isBought
             */

            /**
             * Constructs a new ShopItem.
             * @memberof Server2Client.LS2C_ShopInfo_Ack
             * @classdesc Represents a ShopItem.
             * @implements IShopItem
             * @constructor
             * @param {Server2Client.LS2C_ShopInfo_Ack.IShopItem=} [p] Properties to set
             */
            function ShopItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * ShopItem itemId.
             * @member {number} itemId
             * @memberof Server2Client.LS2C_ShopInfo_Ack.ShopItem
             * @instance
             */
            ShopItem.prototype.itemId = 0;

            /**
             * ShopItem price.
             * @member {number} price
             * @memberof Server2Client.LS2C_ShopInfo_Ack.ShopItem
             * @instance
             */
            ShopItem.prototype.price = 0;

            /**
             * ShopItem isBought.
             * @member {boolean} isBought
             * @memberof Server2Client.LS2C_ShopInfo_Ack.ShopItem
             * @instance
             */
            ShopItem.prototype.isBought = false;

            /**
             * Decodes a ShopItem message from the specified reader or buffer.
             * @function decode
             * @memberof Server2Client.LS2C_ShopInfo_Ack.ShopItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {Server2Client.LS2C_ShopInfo_Ack.ShopItem} ShopItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ShopItem.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShopInfo_Ack.ShopItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1: {
                            m.itemId = r.int32();
                            break;
                        }
                    case 2: {
                            m.price = r.int32();
                            break;
                        }
                    case 3: {
                            m.isBought = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return ShopItem;
        })();

        return LS2C_ShopInfo_Ack;
    })();

    Server2Client.LS2C_ShopRefresh_Ack = (function() {

        /**
         * Properties of a LS2C_ShopRefresh_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ShopRefresh_Ack
         * @property {Server2Client.LS2C_ShopRefresh_Ack.AckCode|null} [ackCode] LS2C_ShopRefresh_Ack ackCode
         */

        /**
         * Constructs a new LS2C_ShopRefresh_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ShopRefresh_Ack.
         * @implements ILS2C_ShopRefresh_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ShopRefresh_Ack=} [p] Properties to set
         */
        function LS2C_ShopRefresh_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ShopRefresh_Ack ackCode.
         * @member {Server2Client.LS2C_ShopRefresh_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ShopRefresh_Ack
         * @instance
         */
        LS2C_ShopRefresh_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_ShopRefresh_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ShopRefresh_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ShopRefresh_Ack} LS2C_ShopRefresh_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ShopRefresh_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShopRefresh_Ack();
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
         * @name Server2Client.LS2C_ShopRefresh_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} LessRefreshCount=2 LessRefreshCount value
         */
        LS2C_ShopRefresh_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "LessRefreshCount"] = 2;
            return values;
        })();

        return LS2C_ShopRefresh_Ack;
    })();

    Server2Client.LS2C_ShopBuy_Ack = (function() {

        /**
         * Properties of a LS2C_ShopBuy_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ShopBuy_Ack
         * @property {Server2Client.LS2C_ShopBuy_Ack.AckCode|null} [ackCode] LS2C_ShopBuy_Ack ackCode
         * @property {Server2Client.ItemInfo|null} [itemInfo] LS2C_ShopBuy_Ack itemInfo
         * @property {Long|null} [coin] LS2C_ShopBuy_Ack coin
         */

        /**
         * Constructs a new LS2C_ShopBuy_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ShopBuy_Ack.
         * @implements ILS2C_ShopBuy_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ShopBuy_Ack=} [p] Properties to set
         */
        function LS2C_ShopBuy_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ShopBuy_Ack ackCode.
         * @member {Server2Client.LS2C_ShopBuy_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ShopBuy_Ack
         * @instance
         */
        LS2C_ShopBuy_Ack.prototype.ackCode = 0;

        /**
         * LS2C_ShopBuy_Ack itemInfo.
         * @member {Server2Client.ItemInfo|null|undefined} itemInfo
         * @memberof Server2Client.LS2C_ShopBuy_Ack
         * @instance
         */
        LS2C_ShopBuy_Ack.prototype.itemInfo = null;

        /**
         * LS2C_ShopBuy_Ack coin.
         * @member {Long} coin
         * @memberof Server2Client.LS2C_ShopBuy_Ack
         * @instance
         */
        LS2C_ShopBuy_Ack.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a LS2C_ShopBuy_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ShopBuy_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ShopBuy_Ack} LS2C_ShopBuy_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ShopBuy_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShopBuy_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.itemInfo = $root.Server2Client.ItemInfo.decode(r, r.uint32());
                        break;
                    }
                case 3: {
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
         * AckCode enum.
         * @name Server2Client.LS2C_ShopBuy_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} LessBuyCount=2 LessBuyCount value
         * @property {number} LessCoin=3 LessCoin value
         * @property {number} LessItem=4 LessItem value
         */
        LS2C_ShopBuy_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "LessBuyCount"] = 2;
            values[valuesById[3] = "LessCoin"] = 3;
            values[valuesById[4] = "LessItem"] = 4;
            return values;
        })();

        return LS2C_ShopBuy_Ack;
    })();

    Server2Client.LS2C_RequestGameData_Ack = (function() {

        /**
         * Properties of a LS2C_RequestGameData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_RequestGameData_Ack
         * @property {Server2Client.LS2C_RequestGameData_Ack.AckCode|null} [ackCode] LS2C_RequestGameData_Ack ackCode
         * @property {protocol.DailyGameMsg|null} [dailyGameInfo] LS2C_RequestGameData_Ack dailyGameInfo
         * @property {protocol.EndlessGameMsg|null} [endlessGameInfo] LS2C_RequestGameData_Ack endlessGameInfo
         * @property {number|null} [syncStep] LS2C_RequestGameData_Ack syncStep
         */

        /**
         * Constructs a new LS2C_RequestGameData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_RequestGameData_Ack.
         * @implements ILS2C_RequestGameData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_RequestGameData_Ack=} [p] Properties to set
         */
        function LS2C_RequestGameData_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_RequestGameData_Ack ackCode.
         * @member {Server2Client.LS2C_RequestGameData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_RequestGameData_Ack
         * @instance
         */
        LS2C_RequestGameData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_RequestGameData_Ack dailyGameInfo.
         * @member {protocol.DailyGameMsg|null|undefined} dailyGameInfo
         * @memberof Server2Client.LS2C_RequestGameData_Ack
         * @instance
         */
        LS2C_RequestGameData_Ack.prototype.dailyGameInfo = null;

        /**
         * LS2C_RequestGameData_Ack endlessGameInfo.
         * @member {protocol.EndlessGameMsg|null|undefined} endlessGameInfo
         * @memberof Server2Client.LS2C_RequestGameData_Ack
         * @instance
         */
        LS2C_RequestGameData_Ack.prototype.endlessGameInfo = null;

        /**
         * LS2C_RequestGameData_Ack syncStep.
         * @member {number} syncStep
         * @memberof Server2Client.LS2C_RequestGameData_Ack
         * @instance
         */
        LS2C_RequestGameData_Ack.prototype.syncStep = 0;

        /**
         * Decodes a LS2C_RequestGameData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_RequestGameData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_RequestGameData_Ack} LS2C_RequestGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_RequestGameData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_RequestGameData_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.dailyGameInfo = $root.protocol.DailyGameMsg.decode(r, r.uint32());
                        break;
                    }
                case 3: {
                        m.endlessGameInfo = $root.protocol.EndlessGameMsg.decode(r, r.uint32());
                        break;
                    }
                case 4: {
                        m.syncStep = r.int32();
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
         * @name Server2Client.LS2C_RequestGameData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_RequestGameData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_RequestGameData_Ack;
    })();

    Server2Client.LS2C_SyncEndlessGameData_Ack = (function() {

        /**
         * Properties of a LS2C_SyncEndlessGameData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SyncEndlessGameData_Ack
         * @property {Server2Client.LS2C_SyncEndlessGameData_Ack.AckCode|null} [ackCode] LS2C_SyncEndlessGameData_Ack ackCode
         * @property {number|null} [maxStep] LS2C_SyncEndlessGameData_Ack maxStep
         */

        /**
         * Constructs a new LS2C_SyncEndlessGameData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SyncEndlessGameData_Ack.
         * @implements ILS2C_SyncEndlessGameData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SyncEndlessGameData_Ack=} [p] Properties to set
         */
        function LS2C_SyncEndlessGameData_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SyncEndlessGameData_Ack ackCode.
         * @member {Server2Client.LS2C_SyncEndlessGameData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SyncEndlessGameData_Ack
         * @instance
         */
        LS2C_SyncEndlessGameData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SyncEndlessGameData_Ack maxStep.
         * @member {number} maxStep
         * @memberof Server2Client.LS2C_SyncEndlessGameData_Ack
         * @instance
         */
        LS2C_SyncEndlessGameData_Ack.prototype.maxStep = 0;

        /**
         * Decodes a LS2C_SyncEndlessGameData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SyncEndlessGameData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SyncEndlessGameData_Ack} LS2C_SyncEndlessGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SyncEndlessGameData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SyncEndlessGameData_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.maxStep = r.int32();
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
         * @name Server2Client.LS2C_SyncEndlessGameData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoMatch=2 NoMatch value
         * @property {number} StepError=3 StepError value
         * @property {number} StepExist=4 StepExist value
         * @property {number} VerifyFail=5 VerifyFail value
         * @property {number} NotTodayGame=6 NotTodayGame value
         */
        LS2C_SyncEndlessGameData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoMatch"] = 2;
            values[valuesById[3] = "StepError"] = 3;
            values[valuesById[4] = "StepExist"] = 4;
            values[valuesById[5] = "VerifyFail"] = 5;
            values[valuesById[6] = "NotTodayGame"] = 6;
            return values;
        })();

        return LS2C_SyncEndlessGameData_Ack;
    })();

    Server2Client.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof Server2Client
         * @interface IRoomInfo
         * @property {protocol.UserBaseInfo|null} [userBaseInfo] RoomInfo userBaseInfo
         * @property {protocol.Payslip|null} [payslip] RoomInfo payslip
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof Server2Client
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {Server2Client.IRoomInfo=} [p] Properties to set
         */
        function RoomInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RoomInfo userBaseInfo.
         * @member {protocol.UserBaseInfo|null|undefined} userBaseInfo
         * @memberof Server2Client.RoomInfo
         * @instance
         */
        RoomInfo.prototype.userBaseInfo = null;

        /**
         * RoomInfo payslip.
         * @member {protocol.Payslip|null|undefined} payslip
         * @memberof Server2Client.RoomInfo
         * @instance
         */
        RoomInfo.prototype.payslip = null;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.RoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.userBaseInfo = $root.protocol.UserBaseInfo.decode(r, r.uint32());
                        break;
                    }
                case 2: {
                        m.payslip = $root.protocol.Payslip.decode(r, r.uint32());
                        break;
                    }
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomInfo;
    })();

    Server2Client.LS2C_GetRoomInfo_Ack = (function() {

        /**
         * Properties of a LS2C_GetRoomInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetRoomInfo_Ack
         * @property {Server2Client.LS2C_GetRoomInfo_Ack.AckCode|null} [ackCode] LS2C_GetRoomInfo_Ack ackCode
         * @property {Array.<Server2Client.RoomInfo>|null} [romeList] LS2C_GetRoomInfo_Ack romeList
         * @property {number|null} [newUnlockRoomCount] LS2C_GetRoomInfo_Ack newUnlockRoomCount
         */

        /**
         * Constructs a new LS2C_GetRoomInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetRoomInfo_Ack.
         * @implements ILS2C_GetRoomInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetRoomInfo_Ack=} [p] Properties to set
         */
        function LS2C_GetRoomInfo_Ack(p) {
            this.romeList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetRoomInfo_Ack ackCode.
         * @member {Server2Client.LS2C_GetRoomInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetRoomInfo_Ack
         * @instance
         */
        LS2C_GetRoomInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetRoomInfo_Ack romeList.
         * @member {Array.<Server2Client.RoomInfo>} romeList
         * @memberof Server2Client.LS2C_GetRoomInfo_Ack
         * @instance
         */
        LS2C_GetRoomInfo_Ack.prototype.romeList = $util.emptyArray;

        /**
         * LS2C_GetRoomInfo_Ack newUnlockRoomCount.
         * @member {number} newUnlockRoomCount
         * @memberof Server2Client.LS2C_GetRoomInfo_Ack
         * @instance
         */
        LS2C_GetRoomInfo_Ack.prototype.newUnlockRoomCount = 0;

        /**
         * Decodes a LS2C_GetRoomInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetRoomInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetRoomInfo_Ack} LS2C_GetRoomInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetRoomInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetRoomInfo_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.romeList && m.romeList.length))
                            m.romeList = [];
                        m.romeList.push($root.Server2Client.RoomInfo.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        m.newUnlockRoomCount = r.int32();
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
         * @name Server2Client.LS2C_GetRoomInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetRoomInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetRoomInfo_Ack;
    })();

    Server2Client.LS2C_ShareJoinRoom_Ack = (function() {

        /**
         * Properties of a LS2C_ShareJoinRoom_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ShareJoinRoom_Ack
         * @property {Server2Client.LS2C_ShareJoinRoom_Ack.AckCode|null} [ackCode] LS2C_ShareJoinRoom_Ack ackCode
         */

        /**
         * Constructs a new LS2C_ShareJoinRoom_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ShareJoinRoom_Ack.
         * @implements ILS2C_ShareJoinRoom_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ShareJoinRoom_Ack=} [p] Properties to set
         */
        function LS2C_ShareJoinRoom_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ShareJoinRoom_Ack ackCode.
         * @member {Server2Client.LS2C_ShareJoinRoom_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ShareJoinRoom_Ack
         * @instance
         */
        LS2C_ShareJoinRoom_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_ShareJoinRoom_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ShareJoinRoom_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ShareJoinRoom_Ack} LS2C_ShareJoinRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ShareJoinRoom_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ShareJoinRoom_Ack();
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
         * @name Server2Client.LS2C_ShareJoinRoom_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_ShareJoinRoom_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_ShareJoinRoom_Ack;
    })();

    Server2Client.LS2C_RemoveMember_Ack = (function() {

        /**
         * Properties of a LS2C_RemoveMember_Ack.
         * @memberof Server2Client
         * @interface ILS2C_RemoveMember_Ack
         * @property {Server2Client.LS2C_RemoveMember_Ack.AckCode|null} [ackCode] LS2C_RemoveMember_Ack ackCode
         */

        /**
         * Constructs a new LS2C_RemoveMember_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_RemoveMember_Ack.
         * @implements ILS2C_RemoveMember_Ack
         * @constructor
         * @param {Server2Client.ILS2C_RemoveMember_Ack=} [p] Properties to set
         */
        function LS2C_RemoveMember_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_RemoveMember_Ack ackCode.
         * @member {Server2Client.LS2C_RemoveMember_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_RemoveMember_Ack
         * @instance
         */
        LS2C_RemoveMember_Ack.prototype.ackCode = 0;

        /**
         * Decodes a LS2C_RemoveMember_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_RemoveMember_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_RemoveMember_Ack} LS2C_RemoveMember_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_RemoveMember_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_RemoveMember_Ack();
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
         * @name Server2Client.LS2C_RemoveMember_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_RemoveMember_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_RemoveMember_Ack;
    })();

    Server2Client.LS2C_GetFriendIncome_Ack = (function() {

        /**
         * Properties of a LS2C_GetFriendIncome_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetFriendIncome_Ack
         * @property {Server2Client.LS2C_GetFriendIncome_Ack.AckCode|null} [ackCode] LS2C_GetFriendIncome_Ack ackCode
         * @property {number|null} [coins] LS2C_GetFriendIncome_Ack coins
         * @property {Long|null} [totalCoins] LS2C_GetFriendIncome_Ack totalCoins
         */

        /**
         * Constructs a new LS2C_GetFriendIncome_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetFriendIncome_Ack.
         * @implements ILS2C_GetFriendIncome_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetFriendIncome_Ack=} [p] Properties to set
         */
        function LS2C_GetFriendIncome_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetFriendIncome_Ack ackCode.
         * @member {Server2Client.LS2C_GetFriendIncome_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetFriendIncome_Ack
         * @instance
         */
        LS2C_GetFriendIncome_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetFriendIncome_Ack coins.
         * @member {number} coins
         * @memberof Server2Client.LS2C_GetFriendIncome_Ack
         * @instance
         */
        LS2C_GetFriendIncome_Ack.prototype.coins = 0;

        /**
         * LS2C_GetFriendIncome_Ack totalCoins.
         * @member {Long} totalCoins
         * @memberof Server2Client.LS2C_GetFriendIncome_Ack
         * @instance
         */
        LS2C_GetFriendIncome_Ack.prototype.totalCoins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a LS2C_GetFriendIncome_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetFriendIncome_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetFriendIncome_Ack} LS2C_GetFriendIncome_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetFriendIncome_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetFriendIncome_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.coins = r.int32();
                        break;
                    }
                case 3: {
                        m.totalCoins = r.int64();
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
         * @name Server2Client.LS2C_GetFriendIncome_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetFriendIncome_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetFriendIncome_Ack;
    })();

    Server2Client.LS2C_GetSettleSalary_Ack = (function() {

        /**
         * Properties of a LS2C_GetSettleSalary_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetSettleSalary_Ack
         * @property {Server2Client.LS2C_GetSettleSalary_Ack.AckCode|null} [ackCode] LS2C_GetSettleSalary_Ack ackCode
         * @property {number|null} [coins] LS2C_GetSettleSalary_Ack coins
         * @property {Long|null} [totalCoins] LS2C_GetSettleSalary_Ack totalCoins
         */

        /**
         * Constructs a new LS2C_GetSettleSalary_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetSettleSalary_Ack.
         * @implements ILS2C_GetSettleSalary_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetSettleSalary_Ack=} [p] Properties to set
         */
        function LS2C_GetSettleSalary_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetSettleSalary_Ack ackCode.
         * @member {Server2Client.LS2C_GetSettleSalary_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetSettleSalary_Ack
         * @instance
         */
        LS2C_GetSettleSalary_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetSettleSalary_Ack coins.
         * @member {number} coins
         * @memberof Server2Client.LS2C_GetSettleSalary_Ack
         * @instance
         */
        LS2C_GetSettleSalary_Ack.prototype.coins = 0;

        /**
         * LS2C_GetSettleSalary_Ack totalCoins.
         * @member {Long} totalCoins
         * @memberof Server2Client.LS2C_GetSettleSalary_Ack
         * @instance
         */
        LS2C_GetSettleSalary_Ack.prototype.totalCoins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a LS2C_GetSettleSalary_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetSettleSalary_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetSettleSalary_Ack} LS2C_GetSettleSalary_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetSettleSalary_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetSettleSalary_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.coins = r.int32();
                        break;
                    }
                case 3: {
                        m.totalCoins = r.int64();
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
         * @name Server2Client.LS2C_GetSettleSalary_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetSettleSalary_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetSettleSalary_Ack;
    })();

    Server2Client.LS2C_BuyExtraGift_Ack = (function() {

        /**
         * Properties of a LS2C_BuyExtraGift_Ack.
         * @memberof Server2Client
         * @interface ILS2C_BuyExtraGift_Ack
         * @property {Server2Client.LS2C_BuyExtraGift_Ack.AckCode|null} [ackCode] LS2C_BuyExtraGift_Ack ackCode
         * @property {Array.<Server2Client.ItemInfo>|null} [items] LS2C_BuyExtraGift_Ack items
         * @property {Long|null} [totalCoins] LS2C_BuyExtraGift_Ack totalCoins
         */

        /**
         * Constructs a new LS2C_BuyExtraGift_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_BuyExtraGift_Ack.
         * @implements ILS2C_BuyExtraGift_Ack
         * @constructor
         * @param {Server2Client.ILS2C_BuyExtraGift_Ack=} [p] Properties to set
         */
        function LS2C_BuyExtraGift_Ack(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_BuyExtraGift_Ack ackCode.
         * @member {Server2Client.LS2C_BuyExtraGift_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_BuyExtraGift_Ack
         * @instance
         */
        LS2C_BuyExtraGift_Ack.prototype.ackCode = 0;

        /**
         * LS2C_BuyExtraGift_Ack items.
         * @member {Array.<Server2Client.ItemInfo>} items
         * @memberof Server2Client.LS2C_BuyExtraGift_Ack
         * @instance
         */
        LS2C_BuyExtraGift_Ack.prototype.items = $util.emptyArray;

        /**
         * LS2C_BuyExtraGift_Ack totalCoins.
         * @member {Long} totalCoins
         * @memberof Server2Client.LS2C_BuyExtraGift_Ack
         * @instance
         */
        LS2C_BuyExtraGift_Ack.prototype.totalCoins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a LS2C_BuyExtraGift_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_BuyExtraGift_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_BuyExtraGift_Ack} LS2C_BuyExtraGift_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_BuyExtraGift_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_BuyExtraGift_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.Server2Client.ItemInfo.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        m.totalCoins = r.int64();
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
         * @name Server2Client.LS2C_BuyExtraGift_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotEnough=2 NotEnough value
         * @property {number} NoHaveGift=3 NoHaveGift value
         * @property {number} PriceErr=4 PriceErr value
         */
        LS2C_BuyExtraGift_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotEnough"] = 2;
            values[valuesById[3] = "NoHaveGift"] = 3;
            values[valuesById[4] = "PriceErr"] = 4;
            return values;
        })();

        return LS2C_BuyExtraGift_Ack;
    })();

    Server2Client.LS2C_GetWeekReward_Ack = (function() {

        /**
         * Properties of a LS2C_GetWeekReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetWeekReward_Ack
         * @property {Server2Client.LS2C_GetWeekReward_Ack.AckCode|null} [ackCode] LS2C_GetWeekReward_Ack ackCode
         * @property {Array.<Server2Client.ItemInfo>|null} [items] LS2C_GetWeekReward_Ack items
         * @property {Array.<common.Item>|null} [awards] LS2C_GetWeekReward_Ack awards
         */

        /**
         * Constructs a new LS2C_GetWeekReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetWeekReward_Ack.
         * @implements ILS2C_GetWeekReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetWeekReward_Ack=} [p] Properties to set
         */
        function LS2C_GetWeekReward_Ack(p) {
            this.items = [];
            this.awards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetWeekReward_Ack ackCode.
         * @member {Server2Client.LS2C_GetWeekReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetWeekReward_Ack
         * @instance
         */
        LS2C_GetWeekReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetWeekReward_Ack items.
         * @member {Array.<Server2Client.ItemInfo>} items
         * @memberof Server2Client.LS2C_GetWeekReward_Ack
         * @instance
         */
        LS2C_GetWeekReward_Ack.prototype.items = $util.emptyArray;

        /**
         * LS2C_GetWeekReward_Ack awards.
         * @member {Array.<common.Item>} awards
         * @memberof Server2Client.LS2C_GetWeekReward_Ack
         * @instance
         */
        LS2C_GetWeekReward_Ack.prototype.awards = $util.emptyArray;

        /**
         * Decodes a LS2C_GetWeekReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetWeekReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetWeekReward_Ack} LS2C_GetWeekReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetWeekReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetWeekReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.items && m.items.length))
                            m.items = [];
                        m.items.push($root.Server2Client.ItemInfo.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        if (!(m.awards && m.awards.length))
                            m.awards = [];
                        m.awards.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetWeekReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyGot=2 AlreadyGot value
         * @property {number} NotInActivity=3 NotInActivity value
         * @property {number} InvalidScore=4 InvalidScore value
         */
        LS2C_GetWeekReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyGot"] = 2;
            values[valuesById[3] = "NotInActivity"] = 3;
            values[valuesById[4] = "InvalidScore"] = 4;
            return values;
        })();

        return LS2C_GetWeekReward_Ack;
    })();

    Server2Client.LS2C_GetWeekRewardData_Ack = (function() {

        /**
         * Properties of a LS2C_GetWeekRewardData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetWeekRewardData_Ack
         * @property {Server2Client.LS2C_GetWeekRewardData_Ack.AckCode|null} [ackCode] LS2C_GetWeekRewardData_Ack ackCode
         * @property {Array.<Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward>|null} [stageAward] LS2C_GetWeekRewardData_Ack stageAward
         * @property {Array.<Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward>|null} [lastStageAward] LS2C_GetWeekRewardData_Ack lastStageAward
         * @property {number|null} [designer] LS2C_GetWeekRewardData_Ack designer
         * @property {Object.<string,number>|null} [scores] LS2C_GetWeekRewardData_Ack scores
         * @property {boolean|null} [isCrossActivity] LS2C_GetWeekRewardData_Ack isCrossActivity
         */

        /**
         * Constructs a new LS2C_GetWeekRewardData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetWeekRewardData_Ack.
         * @implements ILS2C_GetWeekRewardData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetWeekRewardData_Ack=} [p] Properties to set
         */
        function LS2C_GetWeekRewardData_Ack(p) {
            this.stageAward = [];
            this.lastStageAward = [];
            this.scores = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetWeekRewardData_Ack ackCode.
         * @member {Server2Client.LS2C_GetWeekRewardData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @instance
         */
        LS2C_GetWeekRewardData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetWeekRewardData_Ack stageAward.
         * @member {Array.<Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward>} stageAward
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @instance
         */
        LS2C_GetWeekRewardData_Ack.prototype.stageAward = $util.emptyArray;

        /**
         * LS2C_GetWeekRewardData_Ack lastStageAward.
         * @member {Array.<Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward>} lastStageAward
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @instance
         */
        LS2C_GetWeekRewardData_Ack.prototype.lastStageAward = $util.emptyArray;

        /**
         * LS2C_GetWeekRewardData_Ack designer.
         * @member {number} designer
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @instance
         */
        LS2C_GetWeekRewardData_Ack.prototype.designer = 0;

        /**
         * LS2C_GetWeekRewardData_Ack scores.
         * @member {Object.<string,number>} scores
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @instance
         */
        LS2C_GetWeekRewardData_Ack.prototype.scores = $util.emptyObject;

        /**
         * LS2C_GetWeekRewardData_Ack isCrossActivity.
         * @member {boolean} isCrossActivity
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @instance
         */
        LS2C_GetWeekRewardData_Ack.prototype.isCrossActivity = false;

        /**
         * Decodes a LS2C_GetWeekRewardData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetWeekRewardData_Ack} LS2C_GetWeekRewardData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetWeekRewardData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetWeekRewardData_Ack(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.stageAward && m.stageAward.length))
                            m.stageAward = [];
                        m.stageAward.push($root.Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        if (!(m.lastStageAward && m.lastStageAward.length))
                            m.lastStageAward = [];
                        m.lastStageAward.push($root.Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        m.designer = r.int32();
                        break;
                    }
                case 5: {
                        if (m.scores === $util.emptyObject)
                            m.scores = {};
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
                        m.scores[k] = value;
                        break;
                    }
                case 6: {
                        m.isCrossActivity = r.bool();
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
         * @name Server2Client.LS2C_GetWeekRewardData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         */
        LS2C_GetWeekRewardData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            return values;
        })();

        LS2C_GetWeekRewardData_Ack.EndlessStageAward = (function() {

            /**
             * Properties of an EndlessStageAward.
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
             * @interface IEndlessStageAward
             * @property {number|null} [score] EndlessStageAward score
             * @property {number|null} [awardId] EndlessStageAward awardId
             * @property {boolean|null} [isReceived] EndlessStageAward isReceived
             * @property {number|null} [count] EndlessStageAward count
             */

            /**
             * Constructs a new EndlessStageAward.
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack
             * @classdesc Represents an EndlessStageAward.
             * @implements IEndlessStageAward
             * @constructor
             * @param {Server2Client.LS2C_GetWeekRewardData_Ack.IEndlessStageAward=} [p] Properties to set
             */
            function EndlessStageAward(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * EndlessStageAward score.
             * @member {number} score
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward
             * @instance
             */
            EndlessStageAward.prototype.score = 0;

            /**
             * EndlessStageAward awardId.
             * @member {number} awardId
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward
             * @instance
             */
            EndlessStageAward.prototype.awardId = 0;

            /**
             * EndlessStageAward isReceived.
             * @member {boolean} isReceived
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward
             * @instance
             */
            EndlessStageAward.prototype.isReceived = false;

            /**
             * EndlessStageAward count.
             * @member {number} count
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward
             * @instance
             */
            EndlessStageAward.prototype.count = 0;

            /**
             * Decodes an EndlessStageAward message from the specified reader or buffer.
             * @function decode
             * @memberof Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward} EndlessStageAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            EndlessStageAward.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1: {
                            m.score = r.int32();
                            break;
                        }
                    case 2: {
                            m.awardId = r.int32();
                            break;
                        }
                    case 3: {
                            m.isReceived = r.bool();
                            break;
                        }
                    case 4: {
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

            return EndlessStageAward;
        })();

        return LS2C_GetWeekRewardData_Ack;
    })();

    Server2Client.LS2C_StartNewbieGame_Ack = (function() {

        /**
         * Properties of a LS2C_StartNewbieGame_Ack.
         * @memberof Server2Client
         * @interface ILS2C_StartNewbieGame_Ack
         * @property {Server2Client.LS2C_StartNewbieGame_Ack.AckCode|null} [ackCode] LS2C_StartNewbieGame_Ack ackCode
         * @property {Array.<number>|null} [seeds] LS2C_StartNewbieGame_Ack seeds
         */

        /**
         * Constructs a new LS2C_StartNewbieGame_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_StartNewbieGame_Ack.
         * @implements ILS2C_StartNewbieGame_Ack
         * @constructor
         * @param {Server2Client.ILS2C_StartNewbieGame_Ack=} [p] Properties to set
         */
        function LS2C_StartNewbieGame_Ack(p) {
            this.seeds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_StartNewbieGame_Ack ackCode.
         * @member {Server2Client.LS2C_StartNewbieGame_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_StartNewbieGame_Ack
         * @instance
         */
        LS2C_StartNewbieGame_Ack.prototype.ackCode = 0;

        /**
         * LS2C_StartNewbieGame_Ack seeds.
         * @member {Array.<number>} seeds
         * @memberof Server2Client.LS2C_StartNewbieGame_Ack
         * @instance
         */
        LS2C_StartNewbieGame_Ack.prototype.seeds = $util.emptyArray;

        /**
         * Decodes a LS2C_StartNewbieGame_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_StartNewbieGame_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_StartNewbieGame_Ack} LS2C_StartNewbieGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_StartNewbieGame_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_StartNewbieGame_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.seeds && m.seeds.length))
                            m.seeds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.seeds.push(r.uint32());
                        } else
                            m.seeds.push(r.uint32());
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
         * @name Server2Client.LS2C_StartNewbieGame_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Passed=2 Passed value
         */
        LS2C_StartNewbieGame_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Passed"] = 2;
            return values;
        })();

        return LS2C_StartNewbieGame_Ack;
    })();

    Server2Client.LS2C_EndNewbieGame_Ack = (function() {

        /**
         * Properties of a LS2C_EndNewbieGame_Ack.
         * @memberof Server2Client
         * @interface ILS2C_EndNewbieGame_Ack
         * @property {Server2Client.LS2C_EndNewbieGame_Ack.AckCode|null} [ackCode] LS2C_EndNewbieGame_Ack ackCode
         * @property {Array.<common.Item>|null} [items] LS2C_EndNewbieGame_Ack items
         */

        /**
         * Constructs a new LS2C_EndNewbieGame_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_EndNewbieGame_Ack.
         * @implements ILS2C_EndNewbieGame_Ack
         * @constructor
         * @param {Server2Client.ILS2C_EndNewbieGame_Ack=} [p] Properties to set
         */
        function LS2C_EndNewbieGame_Ack(p) {
            this.items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_EndNewbieGame_Ack ackCode.
         * @member {Server2Client.LS2C_EndNewbieGame_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_EndNewbieGame_Ack
         * @instance
         */
        LS2C_EndNewbieGame_Ack.prototype.ackCode = 0;

        /**
         * LS2C_EndNewbieGame_Ack items.
         * @member {Array.<common.Item>} items
         * @memberof Server2Client.LS2C_EndNewbieGame_Ack
         * @instance
         */
        LS2C_EndNewbieGame_Ack.prototype.items = $util.emptyArray;

        /**
         * Decodes a LS2C_EndNewbieGame_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_EndNewbieGame_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_EndNewbieGame_Ack} LS2C_EndNewbieGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_EndNewbieGame_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_EndNewbieGame_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
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
         * @name Server2Client.LS2C_EndNewbieGame_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_EndNewbieGame_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_EndNewbieGame_Ack;
    })();

    Server2Client.LS2C_GetAllServerBroadcastUsers_Ack = (function() {

        /**
         * Properties of a LS2C_GetAllServerBroadcastUsers_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetAllServerBroadcastUsers_Ack
         * @property {Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.AckCode|null} [ackCode] LS2C_GetAllServerBroadcastUsers_Ack ackCode
         * @property {Array.<Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser>|null} [users] LS2C_GetAllServerBroadcastUsers_Ack users
         */

        /**
         * Constructs a new LS2C_GetAllServerBroadcastUsers_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetAllServerBroadcastUsers_Ack.
         * @implements ILS2C_GetAllServerBroadcastUsers_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetAllServerBroadcastUsers_Ack=} [p] Properties to set
         */
        function LS2C_GetAllServerBroadcastUsers_Ack(p) {
            this.users = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetAllServerBroadcastUsers_Ack ackCode.
         * @member {Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack
         * @instance
         */
        LS2C_GetAllServerBroadcastUsers_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetAllServerBroadcastUsers_Ack users.
         * @member {Array.<Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser>} users
         * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack
         * @instance
         */
        LS2C_GetAllServerBroadcastUsers_Ack.prototype.users = $util.emptyArray;

        /**
         * Decodes a LS2C_GetAllServerBroadcastUsers_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetAllServerBroadcastUsers_Ack} LS2C_GetAllServerBroadcastUsers_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetAllServerBroadcastUsers_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetAllServerBroadcastUsers_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.users && m.users.length))
                            m.users = [];
                        m.users.push($root.Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetAllServerBroadcastUsers_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser = (function() {

            /**
             * Properties of a NoticeUser.
             * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack
             * @interface INoticeUser
             * @property {string|null} [Name] NoticeUser Name
             * @property {string|null} [Avatar] NoticeUser Avatar
             * @property {number|null} [Score] NoticeUser Score
             */

            /**
             * Constructs a new NoticeUser.
             * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack
             * @classdesc Represents a NoticeUser.
             * @implements INoticeUser
             * @constructor
             * @param {Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.INoticeUser=} [p] Properties to set
             */
            function NoticeUser(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            /**
             * NoticeUser Name.
             * @member {string} Name
             * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser
             * @instance
             */
            NoticeUser.prototype.Name = "";

            /**
             * NoticeUser Avatar.
             * @member {string} Avatar
             * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser
             * @instance
             */
            NoticeUser.prototype.Avatar = "";

            /**
             * NoticeUser Score.
             * @member {number} Score
             * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser
             * @instance
             */
            NoticeUser.prototype.Score = 0;

            /**
             * Decodes a NoticeUser message from the specified reader or buffer.
             * @function decode
             * @memberof Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser
             * @static
             * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
             * @param {number} [l] Message length if known beforehand
             * @returns {Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser} NoticeUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoticeUser.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1: {
                            m.Name = r.string();
                            break;
                        }
                    case 2: {
                            m.Avatar = r.string();
                            break;
                        }
                    case 3: {
                            m.Score = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return NoticeUser;
        })();

        return LS2C_GetAllServerBroadcastUsers_Ack;
    })();

    Server2Client.LS2C_GetDailyLevelDataOrder_Ack = (function() {

        /**
         * Properties of a LS2C_GetDailyLevelDataOrder_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetDailyLevelDataOrder_Ack
         * @property {Server2Client.LS2C_GetDailyLevelDataOrder_Ack.AckCode|null} [ackCode] LS2C_GetDailyLevelDataOrder_Ack ackCode
         * @property {Array.<Server2Client.DailyLevelData>|null} [levelData] LS2C_GetDailyLevelDataOrder_Ack levelData
         */

        /**
         * Constructs a new LS2C_GetDailyLevelDataOrder_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetDailyLevelDataOrder_Ack.
         * @implements ILS2C_GetDailyLevelDataOrder_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetDailyLevelDataOrder_Ack=} [p] Properties to set
         */
        function LS2C_GetDailyLevelDataOrder_Ack(p) {
            this.levelData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetDailyLevelDataOrder_Ack ackCode.
         * @member {Server2Client.LS2C_GetDailyLevelDataOrder_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetDailyLevelDataOrder_Ack
         * @instance
         */
        LS2C_GetDailyLevelDataOrder_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetDailyLevelDataOrder_Ack levelData.
         * @member {Array.<Server2Client.DailyLevelData>} levelData
         * @memberof Server2Client.LS2C_GetDailyLevelDataOrder_Ack
         * @instance
         */
        LS2C_GetDailyLevelDataOrder_Ack.prototype.levelData = $util.emptyArray;

        /**
         * Decodes a LS2C_GetDailyLevelDataOrder_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetDailyLevelDataOrder_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetDailyLevelDataOrder_Ack} LS2C_GetDailyLevelDataOrder_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetDailyLevelDataOrder_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDailyLevelDataOrder_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.levelData && m.levelData.length))
                            m.levelData = [];
                        m.levelData.push($root.Server2Client.DailyLevelData.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetDailyLevelDataOrder_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         */
        LS2C_GetDailyLevelDataOrder_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            return values;
        })();

        return LS2C_GetDailyLevelDataOrder_Ack;
    })();

    Server2Client.LS2C_GetDailyMatchRoomData_Ack = (function() {

        /**
         * Properties of a LS2C_GetDailyMatchRoomData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetDailyMatchRoomData_Ack
         * @property {Server2Client.LS2C_GetDailyMatchRoomData_Ack.AckCode|null} [ackCode] LS2C_GetDailyMatchRoomData_Ack ackCode
         * @property {string|null} [roomId] LS2C_GetDailyMatchRoomData_Ack roomId
         * @property {boolean|null} [isSettle] LS2C_GetDailyMatchRoomData_Ack isSettle
         * @property {number|null} [bonusPool] LS2C_GetDailyMatchRoomData_Ack bonusPool
         * @property {Array.<common.MatchRoomPlayerInfo>|null} [players] LS2C_GetDailyMatchRoomData_Ack players
         * @property {Long|null} [coins] LS2C_GetDailyMatchRoomData_Ack coins
         */

        /**
         * Constructs a new LS2C_GetDailyMatchRoomData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetDailyMatchRoomData_Ack.
         * @implements ILS2C_GetDailyMatchRoomData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetDailyMatchRoomData_Ack=} [p] Properties to set
         */
        function LS2C_GetDailyMatchRoomData_Ack(p) {
            this.players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetDailyMatchRoomData_Ack ackCode.
         * @member {Server2Client.LS2C_GetDailyMatchRoomData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @instance
         */
        LS2C_GetDailyMatchRoomData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetDailyMatchRoomData_Ack roomId.
         * @member {string} roomId
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @instance
         */
        LS2C_GetDailyMatchRoomData_Ack.prototype.roomId = "";

        /**
         * LS2C_GetDailyMatchRoomData_Ack isSettle.
         * @member {boolean} isSettle
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @instance
         */
        LS2C_GetDailyMatchRoomData_Ack.prototype.isSettle = false;

        /**
         * LS2C_GetDailyMatchRoomData_Ack bonusPool.
         * @member {number} bonusPool
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @instance
         */
        LS2C_GetDailyMatchRoomData_Ack.prototype.bonusPool = 0;

        /**
         * LS2C_GetDailyMatchRoomData_Ack players.
         * @member {Array.<common.MatchRoomPlayerInfo>} players
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @instance
         */
        LS2C_GetDailyMatchRoomData_Ack.prototype.players = $util.emptyArray;

        /**
         * LS2C_GetDailyMatchRoomData_Ack coins.
         * @member {Long} coins
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @instance
         */
        LS2C_GetDailyMatchRoomData_Ack.prototype.coins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Decodes a LS2C_GetDailyMatchRoomData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetDailyMatchRoomData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetDailyMatchRoomData_Ack} LS2C_GetDailyMatchRoomData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetDailyMatchRoomData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDailyMatchRoomData_Ack();
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
                case 6: {
                        m.coins = r.int64();
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
         * @name Server2Client.LS2C_GetDailyMatchRoomData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoData=2 NoData value
         * @property {number} NotInRoom=3 NotInRoom value
         */
        LS2C_GetDailyMatchRoomData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoData"] = 2;
            values[valuesById[3] = "NotInRoom"] = 3;
            return values;
        })();

        return LS2C_GetDailyMatchRoomData_Ack;
    })();

    Server2Client.LS2C_GetDailyRaceScore_Ack = (function() {

        /**
         * Properties of a LS2C_GetDailyRaceScore_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetDailyRaceScore_Ack
         * @property {Server2Client.LS2C_GetDailyRaceScore_Ack.AckCode|null} [ackCode] LS2C_GetDailyRaceScore_Ack ackCode
         * @property {number|null} [score] LS2C_GetDailyRaceScore_Ack score
         */

        /**
         * Constructs a new LS2C_GetDailyRaceScore_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetDailyRaceScore_Ack.
         * @implements ILS2C_GetDailyRaceScore_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetDailyRaceScore_Ack=} [p] Properties to set
         */
        function LS2C_GetDailyRaceScore_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetDailyRaceScore_Ack ackCode.
         * @member {Server2Client.LS2C_GetDailyRaceScore_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetDailyRaceScore_Ack
         * @instance
         */
        LS2C_GetDailyRaceScore_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetDailyRaceScore_Ack score.
         * @member {number} score
         * @memberof Server2Client.LS2C_GetDailyRaceScore_Ack
         * @instance
         */
        LS2C_GetDailyRaceScore_Ack.prototype.score = 0;

        /**
         * Decodes a LS2C_GetDailyRaceScore_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetDailyRaceScore_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetDailyRaceScore_Ack} LS2C_GetDailyRaceScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetDailyRaceScore_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetDailyRaceScore_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
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
         * AckCode enum.
         * @name Server2Client.LS2C_GetDailyRaceScore_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInRoom=2 NotInRoom value
         */
        LS2C_GetDailyRaceScore_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInRoom"] = 2;
            return values;
        })();

        return LS2C_GetDailyRaceScore_Ack;
    })();

    Server2Client.LS2C_JumpBind_Ack = (function() {

        /**
         * Properties of a LS2C_JumpBind_Ack.
         * @memberof Server2Client
         * @interface ILS2C_JumpBind_Ack
         * @property {Server2Client.LS2C_JumpBind_Ack.AckCode|null} [ackCode] LS2C_JumpBind_Ack ackCode
         * @property {Array.<common.Item>|null} [item] LS2C_JumpBind_Ack item
         */

        /**
         * Constructs a new LS2C_JumpBind_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_JumpBind_Ack.
         * @implements ILS2C_JumpBind_Ack
         * @constructor
         * @param {Server2Client.ILS2C_JumpBind_Ack=} [p] Properties to set
         */
        function LS2C_JumpBind_Ack(p) {
            this.item = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_JumpBind_Ack ackCode.
         * @member {Server2Client.LS2C_JumpBind_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_JumpBind_Ack
         * @instance
         */
        LS2C_JumpBind_Ack.prototype.ackCode = 0;

        /**
         * LS2C_JumpBind_Ack item.
         * @member {Array.<common.Item>} item
         * @memberof Server2Client.LS2C_JumpBind_Ack
         * @instance
         */
        LS2C_JumpBind_Ack.prototype.item = $util.emptyArray;

        /**
         * Decodes a LS2C_JumpBind_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_JumpBind_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_JumpBind_Ack} LS2C_JumpBind_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_JumpBind_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_JumpBind_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.item && m.item.length))
                            m.item = [];
                        m.item.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_JumpBind_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyBind=2 AlreadyBind value
         * @property {number} ActivityNotOpen=3 ActivityNotOpen value
         */
        LS2C_JumpBind_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyBind"] = 2;
            values[valuesById[3] = "ActivityNotOpen"] = 3;
            return values;
        })();

        return LS2C_JumpBind_Ack;
    })();

    Server2Client.LS2C_GetPersonalInfo_Ack = (function() {

        /**
         * Properties of a LS2C_GetPersonalInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetPersonalInfo_Ack
         * @property {Server2Client.LS2C_GetPersonalInfo_Ack.AckCode|null} [ackCode] LS2C_GetPersonalInfo_Ack ackCode
         * @property {protocol.UserBaseInfo|null} [userBaseInfo] LS2C_GetPersonalInfo_Ack userBaseInfo
         */

        /**
         * Constructs a new LS2C_GetPersonalInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetPersonalInfo_Ack.
         * @implements ILS2C_GetPersonalInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetPersonalInfo_Ack=} [p] Properties to set
         */
        function LS2C_GetPersonalInfo_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetPersonalInfo_Ack ackCode.
         * @member {Server2Client.LS2C_GetPersonalInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetPersonalInfo_Ack
         * @instance
         */
        LS2C_GetPersonalInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetPersonalInfo_Ack userBaseInfo.
         * @member {protocol.UserBaseInfo|null|undefined} userBaseInfo
         * @memberof Server2Client.LS2C_GetPersonalInfo_Ack
         * @instance
         */
        LS2C_GetPersonalInfo_Ack.prototype.userBaseInfo = null;

        /**
         * Decodes a LS2C_GetPersonalInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetPersonalInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetPersonalInfo_Ack} LS2C_GetPersonalInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetPersonalInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetPersonalInfo_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.userBaseInfo = $root.protocol.UserBaseInfo.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_GetPersonalInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetPersonalInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetPersonalInfo_Ack;
    })();

    Server2Client.MoonCakeRewardInfo = (function() {

        /**
         * Properties of a MoonCakeRewardInfo.
         * @memberof Server2Client
         * @interface IMoonCakeRewardInfo
         * @property {number|null} [rewardId] MoonCakeRewardInfo rewardId
         * @property {number|null} [rewardCount] MoonCakeRewardInfo rewardCount
         * @property {boolean|null} [isClaimed] MoonCakeRewardInfo isClaimed
         * @property {number|null} [requireCount] MoonCakeRewardInfo requireCount
         */

        /**
         * Constructs a new MoonCakeRewardInfo.
         * @memberof Server2Client
         * @classdesc Represents a MoonCakeRewardInfo.
         * @implements IMoonCakeRewardInfo
         * @constructor
         * @param {Server2Client.IMoonCakeRewardInfo=} [p] Properties to set
         */
        function MoonCakeRewardInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MoonCakeRewardInfo rewardId.
         * @member {number} rewardId
         * @memberof Server2Client.MoonCakeRewardInfo
         * @instance
         */
        MoonCakeRewardInfo.prototype.rewardId = 0;

        /**
         * MoonCakeRewardInfo rewardCount.
         * @member {number} rewardCount
         * @memberof Server2Client.MoonCakeRewardInfo
         * @instance
         */
        MoonCakeRewardInfo.prototype.rewardCount = 0;

        /**
         * MoonCakeRewardInfo isClaimed.
         * @member {boolean} isClaimed
         * @memberof Server2Client.MoonCakeRewardInfo
         * @instance
         */
        MoonCakeRewardInfo.prototype.isClaimed = false;

        /**
         * MoonCakeRewardInfo requireCount.
         * @member {number} requireCount
         * @memberof Server2Client.MoonCakeRewardInfo
         * @instance
         */
        MoonCakeRewardInfo.prototype.requireCount = 0;

        /**
         * Decodes a MoonCakeRewardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.MoonCakeRewardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.MoonCakeRewardInfo} MoonCakeRewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoonCakeRewardInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.MoonCakeRewardInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.rewardId = r.int32();
                        break;
                    }
                case 2: {
                        m.rewardCount = r.int32();
                        break;
                    }
                case 3: {
                        m.isClaimed = r.bool();
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

        return MoonCakeRewardInfo;
    })();

    Server2Client.LS2C_CollectMoonCake_Ack = (function() {

        /**
         * Properties of a LS2C_CollectMoonCake_Ack.
         * @memberof Server2Client
         * @interface ILS2C_CollectMoonCake_Ack
         * @property {Server2Client.LS2C_CollectMoonCake_Ack.AckCode|null} [ackCode] LS2C_CollectMoonCake_Ack ackCode
         * @property {number|null} [collectedCount] LS2C_CollectMoonCake_Ack collectedCount
         * @property {number|null} [dailyCount] LS2C_CollectMoonCake_Ack dailyCount
         * @property {number|null} [totalCount] LS2C_CollectMoonCake_Ack totalCount
         */

        /**
         * Constructs a new LS2C_CollectMoonCake_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_CollectMoonCake_Ack.
         * @implements ILS2C_CollectMoonCake_Ack
         * @constructor
         * @param {Server2Client.ILS2C_CollectMoonCake_Ack=} [p] Properties to set
         */
        function LS2C_CollectMoonCake_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_CollectMoonCake_Ack ackCode.
         * @member {Server2Client.LS2C_CollectMoonCake_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_CollectMoonCake_Ack
         * @instance
         */
        LS2C_CollectMoonCake_Ack.prototype.ackCode = 0;

        /**
         * LS2C_CollectMoonCake_Ack collectedCount.
         * @member {number} collectedCount
         * @memberof Server2Client.LS2C_CollectMoonCake_Ack
         * @instance
         */
        LS2C_CollectMoonCake_Ack.prototype.collectedCount = 0;

        /**
         * LS2C_CollectMoonCake_Ack dailyCount.
         * @member {number} dailyCount
         * @memberof Server2Client.LS2C_CollectMoonCake_Ack
         * @instance
         */
        LS2C_CollectMoonCake_Ack.prototype.dailyCount = 0;

        /**
         * LS2C_CollectMoonCake_Ack totalCount.
         * @member {number} totalCount
         * @memberof Server2Client.LS2C_CollectMoonCake_Ack
         * @instance
         */
        LS2C_CollectMoonCake_Ack.prototype.totalCount = 0;

        /**
         * Decodes a LS2C_CollectMoonCake_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_CollectMoonCake_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_CollectMoonCake_Ack} LS2C_CollectMoonCake_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_CollectMoonCake_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_CollectMoonCake_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.collectedCount = r.int32();
                        break;
                    }
                case 3: {
                        m.dailyCount = r.int32();
                        break;
                    }
                case 4: {
                        m.totalCount = r.int32();
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
         * @name Server2Client.LS2C_CollectMoonCake_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} EventNotActive=2 EventNotActive value
         * @property {number} CountLimit=3 CountLimit value
         */
        LS2C_CollectMoonCake_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "EventNotActive"] = 2;
            values[valuesById[3] = "CountLimit"] = 3;
            return values;
        })();

        return LS2C_CollectMoonCake_Ack;
    })();

    Server2Client.LS2C_ClaimMoonCakeReward_Ack = (function() {

        /**
         * Properties of a LS2C_ClaimMoonCakeReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ClaimMoonCakeReward_Ack
         * @property {Server2Client.LS2C_ClaimMoonCakeReward_Ack.AckCode|null} [ackCode] LS2C_ClaimMoonCakeReward_Ack ackCode
         * @property {Array.<common.Item>|null} [awards] LS2C_ClaimMoonCakeReward_Ack awards
         */

        /**
         * Constructs a new LS2C_ClaimMoonCakeReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ClaimMoonCakeReward_Ack.
         * @implements ILS2C_ClaimMoonCakeReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ClaimMoonCakeReward_Ack=} [p] Properties to set
         */
        function LS2C_ClaimMoonCakeReward_Ack(p) {
            this.awards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ClaimMoonCakeReward_Ack ackCode.
         * @member {Server2Client.LS2C_ClaimMoonCakeReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ClaimMoonCakeReward_Ack
         * @instance
         */
        LS2C_ClaimMoonCakeReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_ClaimMoonCakeReward_Ack awards.
         * @member {Array.<common.Item>} awards
         * @memberof Server2Client.LS2C_ClaimMoonCakeReward_Ack
         * @instance
         */
        LS2C_ClaimMoonCakeReward_Ack.prototype.awards = $util.emptyArray;

        /**
         * Decodes a LS2C_ClaimMoonCakeReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ClaimMoonCakeReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ClaimMoonCakeReward_Ack} LS2C_ClaimMoonCakeReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ClaimMoonCakeReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ClaimMoonCakeReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.awards && m.awards.length))
                            m.awards = [];
                        m.awards.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_ClaimMoonCakeReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} EventNotActive=2 EventNotActive value
         * @property {number} InvalidReward=3 InvalidReward value
         * @property {number} NotEnoughMoonCakes=4 NotEnoughMoonCakes value
         * @property {number} AlreadyClaimed=5 AlreadyClaimed value
         */
        LS2C_ClaimMoonCakeReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "EventNotActive"] = 2;
            values[valuesById[3] = "InvalidReward"] = 3;
            values[valuesById[4] = "NotEnoughMoonCakes"] = 4;
            values[valuesById[5] = "AlreadyClaimed"] = 5;
            return values;
        })();

        return LS2C_ClaimMoonCakeReward_Ack;
    })();

    Server2Client.LS2C_GetMoonCakeEventInfo_Ack = (function() {

        /**
         * Properties of a LS2C_GetMoonCakeEventInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetMoonCakeEventInfo_Ack
         * @property {Server2Client.LS2C_GetMoonCakeEventInfo_Ack.AckCode|null} [ackCode] LS2C_GetMoonCakeEventInfo_Ack ackCode
         * @property {number|null} [activityId] LS2C_GetMoonCakeEventInfo_Ack activityId
         * @property {number|null} [collectedCount] LS2C_GetMoonCakeEventInfo_Ack collectedCount
         * @property {number|null} [dailyCount] LS2C_GetMoonCakeEventInfo_Ack dailyCount
         * @property {number|null} [totalCount] LS2C_GetMoonCakeEventInfo_Ack totalCount
         * @property {Array.<Server2Client.MoonCakeRewardInfo>|null} [rewards] LS2C_GetMoonCakeEventInfo_Ack rewards
         */

        /**
         * Constructs a new LS2C_GetMoonCakeEventInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetMoonCakeEventInfo_Ack.
         * @implements ILS2C_GetMoonCakeEventInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetMoonCakeEventInfo_Ack=} [p] Properties to set
         */
        function LS2C_GetMoonCakeEventInfo_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetMoonCakeEventInfo_Ack ackCode.
         * @member {Server2Client.LS2C_GetMoonCakeEventInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @instance
         */
        LS2C_GetMoonCakeEventInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetMoonCakeEventInfo_Ack activityId.
         * @member {number} activityId
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @instance
         */
        LS2C_GetMoonCakeEventInfo_Ack.prototype.activityId = 0;

        /**
         * LS2C_GetMoonCakeEventInfo_Ack collectedCount.
         * @member {number} collectedCount
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @instance
         */
        LS2C_GetMoonCakeEventInfo_Ack.prototype.collectedCount = 0;

        /**
         * LS2C_GetMoonCakeEventInfo_Ack dailyCount.
         * @member {number} dailyCount
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @instance
         */
        LS2C_GetMoonCakeEventInfo_Ack.prototype.dailyCount = 0;

        /**
         * LS2C_GetMoonCakeEventInfo_Ack totalCount.
         * @member {number} totalCount
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @instance
         */
        LS2C_GetMoonCakeEventInfo_Ack.prototype.totalCount = 0;

        /**
         * LS2C_GetMoonCakeEventInfo_Ack rewards.
         * @member {Array.<Server2Client.MoonCakeRewardInfo>} rewards
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @instance
         */
        LS2C_GetMoonCakeEventInfo_Ack.prototype.rewards = $util.emptyArray;

        /**
         * Decodes a LS2C_GetMoonCakeEventInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetMoonCakeEventInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetMoonCakeEventInfo_Ack} LS2C_GetMoonCakeEventInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetMoonCakeEventInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetMoonCakeEventInfo_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.activityId = r.int32();
                        break;
                    }
                case 3: {
                        m.collectedCount = r.int32();
                        break;
                    }
                case 4: {
                        m.dailyCount = r.int32();
                        break;
                    }
                case 5: {
                        m.totalCount = r.int32();
                        break;
                    }
                case 6: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        m.rewards.push($root.Server2Client.MoonCakeRewardInfo.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetMoonCakeEventInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} EventNotActive=2 EventNotActive value
         * @property {number} DataError=3 DataError value
         */
        LS2C_GetMoonCakeEventInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "EventNotActive"] = 2;
            values[valuesById[3] = "DataError"] = 3;
            return values;
        })();

        return LS2C_GetMoonCakeEventInfo_Ack;
    })();

    Server2Client.LS2C_GetMissionList_Ack = (function() {

        /**
         * Properties of a LS2C_GetMissionList_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetMissionList_Ack
         * @property {Server2Client.LS2C_GetMissionList_Ack.AckCode|null} [ackCode] LS2C_GetMissionList_Ack ackCode
         * @property {Array.<common.MissionDataMsg>|null} [missionList] LS2C_GetMissionList_Ack missionList
         * @property {Array.<common.MissionTypeReward>|null} [configReward] LS2C_GetMissionList_Ack configReward
         * @property {Array.<common.Item>|null} [awards] LS2C_GetMissionList_Ack awards
         */

        /**
         * Constructs a new LS2C_GetMissionList_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetMissionList_Ack.
         * @implements ILS2C_GetMissionList_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetMissionList_Ack=} [p] Properties to set
         */
        function LS2C_GetMissionList_Ack(p) {
            this.missionList = [];
            this.configReward = [];
            this.awards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetMissionList_Ack ackCode.
         * @member {Server2Client.LS2C_GetMissionList_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetMissionList_Ack
         * @instance
         */
        LS2C_GetMissionList_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetMissionList_Ack missionList.
         * @member {Array.<common.MissionDataMsg>} missionList
         * @memberof Server2Client.LS2C_GetMissionList_Ack
         * @instance
         */
        LS2C_GetMissionList_Ack.prototype.missionList = $util.emptyArray;

        /**
         * LS2C_GetMissionList_Ack configReward.
         * @member {Array.<common.MissionTypeReward>} configReward
         * @memberof Server2Client.LS2C_GetMissionList_Ack
         * @instance
         */
        LS2C_GetMissionList_Ack.prototype.configReward = $util.emptyArray;

        /**
         * LS2C_GetMissionList_Ack awards.
         * @member {Array.<common.Item>} awards
         * @memberof Server2Client.LS2C_GetMissionList_Ack
         * @instance
         */
        LS2C_GetMissionList_Ack.prototype.awards = $util.emptyArray;

        /**
         * Decodes a LS2C_GetMissionList_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetMissionList_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetMissionList_Ack} LS2C_GetMissionList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetMissionList_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetMissionList_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.missionList && m.missionList.length))
                            m.missionList = [];
                        m.missionList.push($root.common.MissionDataMsg.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        if (!(m.configReward && m.configReward.length))
                            m.configReward = [];
                        m.configReward.push($root.common.MissionTypeReward.decode(r, r.uint32()));
                        break;
                    }
                case 4: {
                        if (!(m.awards && m.awards.length))
                            m.awards = [];
                        m.awards.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetMissionList_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         */
        LS2C_GetMissionList_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            return values;
        })();

        return LS2C_GetMissionList_Ack;
    })();

    Server2Client.LS2C_ClaimVideoReward_Ack = (function() {

        /**
         * Properties of a LS2C_ClaimVideoReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ClaimVideoReward_Ack
         * @property {Server2Client.LS2C_ClaimVideoReward_Ack.AckCode|null} [ackCode] LS2C_ClaimVideoReward_Ack ackCode
         * @property {Array.<common.Item>|null} [rewards] LS2C_ClaimVideoReward_Ack rewards
         */

        /**
         * Constructs a new LS2C_ClaimVideoReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ClaimVideoReward_Ack.
         * @implements ILS2C_ClaimVideoReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ClaimVideoReward_Ack=} [p] Properties to set
         */
        function LS2C_ClaimVideoReward_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ClaimVideoReward_Ack ackCode.
         * @member {Server2Client.LS2C_ClaimVideoReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ClaimVideoReward_Ack
         * @instance
         */
        LS2C_ClaimVideoReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_ClaimVideoReward_Ack rewards.
         * @member {Array.<common.Item>} rewards
         * @memberof Server2Client.LS2C_ClaimVideoReward_Ack
         * @instance
         */
        LS2C_ClaimVideoReward_Ack.prototype.rewards = $util.emptyArray;

        /**
         * Decodes a LS2C_ClaimVideoReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ClaimVideoReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ClaimVideoReward_Ack} LS2C_ClaimVideoReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ClaimVideoReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ClaimVideoReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        m.rewards.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_ClaimVideoReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ArgsError=2 ArgsError value
         */
        LS2C_ClaimVideoReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ArgsError"] = 2;
            return values;
        })();

        return LS2C_ClaimVideoReward_Ack;
    })();

    Server2Client.LS2C_GetWxChallengeReward_Ack = (function() {

        /**
         * Properties of a LS2C_GetWxChallengeReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetWxChallengeReward_Ack
         * @property {Server2Client.LS2C_GetWxChallengeReward_Ack.AckCode|null} [ackCode] LS2C_GetWxChallengeReward_Ack ackCode
         * @property {Long|null} [coin] LS2C_GetWxChallengeReward_Ack coin
         * @property {Array.<common.PlatformGift>|null} [rewards] LS2C_GetWxChallengeReward_Ack rewards
         */

        /**
         * Constructs a new LS2C_GetWxChallengeReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetWxChallengeReward_Ack.
         * @implements ILS2C_GetWxChallengeReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetWxChallengeReward_Ack=} [p] Properties to set
         */
        function LS2C_GetWxChallengeReward_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetWxChallengeReward_Ack ackCode.
         * @member {Server2Client.LS2C_GetWxChallengeReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetWxChallengeReward_Ack
         * @instance
         */
        LS2C_GetWxChallengeReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetWxChallengeReward_Ack coin.
         * @member {Long} coin
         * @memberof Server2Client.LS2C_GetWxChallengeReward_Ack
         * @instance
         */
        LS2C_GetWxChallengeReward_Ack.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LS2C_GetWxChallengeReward_Ack rewards.
         * @member {Array.<common.PlatformGift>} rewards
         * @memberof Server2Client.LS2C_GetWxChallengeReward_Ack
         * @instance
         */
        LS2C_GetWxChallengeReward_Ack.prototype.rewards = $util.emptyArray;

        /**
         * Decodes a LS2C_GetWxChallengeReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetWxChallengeReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetWxChallengeReward_Ack} LS2C_GetWxChallengeReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetWxChallengeReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetWxChallengeReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.coin = r.int64();
                        break;
                    }
                case 3: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        m.rewards.push($root.common.PlatformGift.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetWxChallengeReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoPermission=2 NoPermission value
         * @property {number} CountLimit=3 CountLimit value
         * @property {number} NotOpen=4 NotOpen value
         */
        LS2C_GetWxChallengeReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoPermission"] = 2;
            values[valuesById[3] = "CountLimit"] = 3;
            values[valuesById[4] = "NotOpen"] = 4;
            return values;
        })();

        return LS2C_GetWxChallengeReward_Ack;
    })();

    Server2Client.LS2C_GetWxPushReward_Ack = (function() {

        /**
         * Properties of a LS2C_GetWxPushReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetWxPushReward_Ack
         * @property {Server2Client.LS2C_GetWxPushReward_Ack.AckCode|null} [ackCode] LS2C_GetWxPushReward_Ack ackCode
         * @property {common.EWxGiftIdType|null} [giftIdType] LS2C_GetWxPushReward_Ack giftIdType
         * @property {Long|null} [coin] LS2C_GetWxPushReward_Ack coin
         * @property {Array.<common.Item>|null} [rewards] LS2C_GetWxPushReward_Ack rewards
         */

        /**
         * Constructs a new LS2C_GetWxPushReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetWxPushReward_Ack.
         * @implements ILS2C_GetWxPushReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetWxPushReward_Ack=} [p] Properties to set
         */
        function LS2C_GetWxPushReward_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetWxPushReward_Ack ackCode.
         * @member {Server2Client.LS2C_GetWxPushReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetWxPushReward_Ack
         * @instance
         */
        LS2C_GetWxPushReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetWxPushReward_Ack giftIdType.
         * @member {common.EWxGiftIdType} giftIdType
         * @memberof Server2Client.LS2C_GetWxPushReward_Ack
         * @instance
         */
        LS2C_GetWxPushReward_Ack.prototype.giftIdType = 0;

        /**
         * LS2C_GetWxPushReward_Ack coin.
         * @member {Long} coin
         * @memberof Server2Client.LS2C_GetWxPushReward_Ack
         * @instance
         */
        LS2C_GetWxPushReward_Ack.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LS2C_GetWxPushReward_Ack rewards.
         * @member {Array.<common.Item>} rewards
         * @memberof Server2Client.LS2C_GetWxPushReward_Ack
         * @instance
         */
        LS2C_GetWxPushReward_Ack.prototype.rewards = $util.emptyArray;

        /**
         * Decodes a LS2C_GetWxPushReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetWxPushReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetWxPushReward_Ack} LS2C_GetWxPushReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetWxPushReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetWxPushReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.giftIdType = r.int32();
                        break;
                    }
                case 3: {
                        m.coin = r.int64();
                        break;
                    }
                case 4: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        m.rewards.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_GetWxPushReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoPermission=2 NoPermission value
         * @property {number} CountLimit=3 CountLimit value
         * @property {number} NotOpen=4 NotOpen value
         * @property {number} AlreadyGet=5 AlreadyGet value
         */
        LS2C_GetWxPushReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoPermission"] = 2;
            values[valuesById[3] = "CountLimit"] = 3;
            values[valuesById[4] = "NotOpen"] = 4;
            values[valuesById[5] = "AlreadyGet"] = 5;
            return values;
        })();

        return LS2C_GetWxPushReward_Ack;
    })();

    Server2Client.LS2C_GetStoryModeInfo_Ack = (function() {

        /**
         * Properties of a LS2C_GetStoryModeInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_GetStoryModeInfo_Ack
         * @property {Server2Client.LS2C_GetStoryModeInfo_Ack.AckCode|null} [ackCode] LS2C_GetStoryModeInfo_Ack ackCode
         * @property {number|null} [totalCount] LS2C_GetStoryModeInfo_Ack totalCount
         * @property {number|null} [dailyCount] LS2C_GetStoryModeInfo_Ack dailyCount
         * @property {number|null} [currentChapter] LS2C_GetStoryModeInfo_Ack currentChapter
         * @property {boolean|null} [isCrossActivity] LS2C_GetStoryModeInfo_Ack isCrossActivity
         * @property {Array.<common.StoryModeRewardMsg>|null} [stageAward] LS2C_GetStoryModeInfo_Ack stageAward
         * @property {Array.<common.ChapterDataMsg>|null} [unlockedChapters] LS2C_GetStoryModeInfo_Ack unlockedChapters
         * @property {number|null} [levelAvatar] LS2C_GetStoryModeInfo_Ack levelAvatar
         */

        /**
         * Constructs a new LS2C_GetStoryModeInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_GetStoryModeInfo_Ack.
         * @implements ILS2C_GetStoryModeInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_GetStoryModeInfo_Ack=} [p] Properties to set
         */
        function LS2C_GetStoryModeInfo_Ack(p) {
            this.stageAward = [];
            this.unlockedChapters = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_GetStoryModeInfo_Ack ackCode.
         * @member {Server2Client.LS2C_GetStoryModeInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_GetStoryModeInfo_Ack totalCount.
         * @member {number} totalCount
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.totalCount = 0;

        /**
         * LS2C_GetStoryModeInfo_Ack dailyCount.
         * @member {number} dailyCount
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.dailyCount = 0;

        /**
         * LS2C_GetStoryModeInfo_Ack currentChapter.
         * @member {number} currentChapter
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.currentChapter = 0;

        /**
         * LS2C_GetStoryModeInfo_Ack isCrossActivity.
         * @member {boolean} isCrossActivity
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.isCrossActivity = false;

        /**
         * LS2C_GetStoryModeInfo_Ack stageAward.
         * @member {Array.<common.StoryModeRewardMsg>} stageAward
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.stageAward = $util.emptyArray;

        /**
         * LS2C_GetStoryModeInfo_Ack unlockedChapters.
         * @member {Array.<common.ChapterDataMsg>} unlockedChapters
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.unlockedChapters = $util.emptyArray;

        /**
         * LS2C_GetStoryModeInfo_Ack levelAvatar.
         * @member {number} levelAvatar
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @instance
         */
        LS2C_GetStoryModeInfo_Ack.prototype.levelAvatar = 0;

        /**
         * Decodes a LS2C_GetStoryModeInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_GetStoryModeInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_GetStoryModeInfo_Ack} LS2C_GetStoryModeInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_GetStoryModeInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_GetStoryModeInfo_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.totalCount = r.int32();
                        break;
                    }
                case 3: {
                        m.dailyCount = r.int32();
                        break;
                    }
                case 4: {
                        m.currentChapter = r.int32();
                        break;
                    }
                case 5: {
                        m.isCrossActivity = r.bool();
                        break;
                    }
                case 6: {
                        if (!(m.stageAward && m.stageAward.length))
                            m.stageAward = [];
                        m.stageAward.push($root.common.StoryModeRewardMsg.decode(r, r.uint32()));
                        break;
                    }
                case 7: {
                        if (!(m.unlockedChapters && m.unlockedChapters.length))
                            m.unlockedChapters = [];
                        m.unlockedChapters.push($root.common.ChapterDataMsg.decode(r, r.uint32()));
                        break;
                    }
                case 8: {
                        m.levelAvatar = r.int32();
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
         * @name Server2Client.LS2C_GetStoryModeInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ChapterLocked=2 ChapterLocked value
         * @property {number} NotInActivity=3 NotInActivity value
         */
        LS2C_GetStoryModeInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ChapterLocked"] = 2;
            values[valuesById[3] = "NotInActivity"] = 3;
            return values;
        })();

        return LS2C_GetStoryModeInfo_Ack;
    })();

    Server2Client.LS2C_StartStoryLevel_Ack = (function() {

        /**
         * Properties of a LS2C_StartStoryLevel_Ack.
         * @memberof Server2Client
         * @interface ILS2C_StartStoryLevel_Ack
         * @property {Server2Client.LS2C_StartStoryLevel_Ack.AckCode|null} [ackCode] LS2C_StartStoryLevel_Ack ackCode
         * @property {string|null} [gameToken] LS2C_StartStoryLevel_Ack gameToken
         */

        /**
         * Constructs a new LS2C_StartStoryLevel_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_StartStoryLevel_Ack.
         * @implements ILS2C_StartStoryLevel_Ack
         * @constructor
         * @param {Server2Client.ILS2C_StartStoryLevel_Ack=} [p] Properties to set
         */
        function LS2C_StartStoryLevel_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_StartStoryLevel_Ack ackCode.
         * @member {Server2Client.LS2C_StartStoryLevel_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_StartStoryLevel_Ack
         * @instance
         */
        LS2C_StartStoryLevel_Ack.prototype.ackCode = 0;

        /**
         * LS2C_StartStoryLevel_Ack gameToken.
         * @member {string} gameToken
         * @memberof Server2Client.LS2C_StartStoryLevel_Ack
         * @instance
         */
        LS2C_StartStoryLevel_Ack.prototype.gameToken = "";

        /**
         * Decodes a LS2C_StartStoryLevel_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_StartStoryLevel_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_StartStoryLevel_Ack} LS2C_StartStoryLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_StartStoryLevel_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_StartStoryLevel_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.gameToken = r.string();
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
         * @name Server2Client.LS2C_StartStoryLevel_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} ChapterLocked=2 ChapterLocked value
         * @property {number} NotInActivity=3 NotInActivity value
         */
        LS2C_StartStoryLevel_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "ChapterLocked"] = 2;
            values[valuesById[3] = "NotInActivity"] = 3;
            return values;
        })();

        return LS2C_StartStoryLevel_Ack;
    })();

    Server2Client.LS2C_CompleteStoryLevel_Ack = (function() {

        /**
         * Properties of a LS2C_CompleteStoryLevel_Ack.
         * @memberof Server2Client
         * @interface ILS2C_CompleteStoryLevel_Ack
         * @property {Server2Client.LS2C_CompleteStoryLevel_Ack.AckCode|null} [ackCode] LS2C_CompleteStoryLevel_Ack ackCode
         * @property {Array.<common.ChapterDataMsg>|null} [unlockedChapters] LS2C_CompleteStoryLevel_Ack unlockedChapters
         */

        /**
         * Constructs a new LS2C_CompleteStoryLevel_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_CompleteStoryLevel_Ack.
         * @implements ILS2C_CompleteStoryLevel_Ack
         * @constructor
         * @param {Server2Client.ILS2C_CompleteStoryLevel_Ack=} [p] Properties to set
         */
        function LS2C_CompleteStoryLevel_Ack(p) {
            this.unlockedChapters = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_CompleteStoryLevel_Ack ackCode.
         * @member {Server2Client.LS2C_CompleteStoryLevel_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_CompleteStoryLevel_Ack
         * @instance
         */
        LS2C_CompleteStoryLevel_Ack.prototype.ackCode = 0;

        /**
         * LS2C_CompleteStoryLevel_Ack unlockedChapters.
         * @member {Array.<common.ChapterDataMsg>} unlockedChapters
         * @memberof Server2Client.LS2C_CompleteStoryLevel_Ack
         * @instance
         */
        LS2C_CompleteStoryLevel_Ack.prototype.unlockedChapters = $util.emptyArray;

        /**
         * Decodes a LS2C_CompleteStoryLevel_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_CompleteStoryLevel_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_CompleteStoryLevel_Ack} LS2C_CompleteStoryLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_CompleteStoryLevel_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_CompleteStoryLevel_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.unlockedChapters && m.unlockedChapters.length))
                            m.unlockedChapters = [];
                        m.unlockedChapters.push($root.common.ChapterDataMsg.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_CompleteStoryLevel_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyUnlocked=2 AlreadyUnlocked value
         * @property {number} NotInActivity=3 NotInActivity value
         */
        LS2C_CompleteStoryLevel_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyUnlocked"] = 2;
            values[valuesById[3] = "NotInActivity"] = 3;
            return values;
        })();

        return LS2C_CompleteStoryLevel_Ack;
    })();

    Server2Client.LS2C_CollectStoryModeItem_Ack = (function() {

        /**
         * Properties of a LS2C_CollectStoryModeItem_Ack.
         * @memberof Server2Client
         * @interface ILS2C_CollectStoryModeItem_Ack
         * @property {Server2Client.LS2C_CollectStoryModeItem_Ack.AckCode|null} [ackCode] LS2C_CollectStoryModeItem_Ack ackCode
         * @property {number|null} [collectedCount] LS2C_CollectStoryModeItem_Ack collectedCount
         * @property {number|null} [totalCount] LS2C_CollectStoryModeItem_Ack totalCount
         * @property {number|null} [dailyCount] LS2C_CollectStoryModeItem_Ack dailyCount
         */

        /**
         * Constructs a new LS2C_CollectStoryModeItem_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_CollectStoryModeItem_Ack.
         * @implements ILS2C_CollectStoryModeItem_Ack
         * @constructor
         * @param {Server2Client.ILS2C_CollectStoryModeItem_Ack=} [p] Properties to set
         */
        function LS2C_CollectStoryModeItem_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_CollectStoryModeItem_Ack ackCode.
         * @member {Server2Client.LS2C_CollectStoryModeItem_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_CollectStoryModeItem_Ack
         * @instance
         */
        LS2C_CollectStoryModeItem_Ack.prototype.ackCode = 0;

        /**
         * LS2C_CollectStoryModeItem_Ack collectedCount.
         * @member {number} collectedCount
         * @memberof Server2Client.LS2C_CollectStoryModeItem_Ack
         * @instance
         */
        LS2C_CollectStoryModeItem_Ack.prototype.collectedCount = 0;

        /**
         * LS2C_CollectStoryModeItem_Ack totalCount.
         * @member {number} totalCount
         * @memberof Server2Client.LS2C_CollectStoryModeItem_Ack
         * @instance
         */
        LS2C_CollectStoryModeItem_Ack.prototype.totalCount = 0;

        /**
         * LS2C_CollectStoryModeItem_Ack dailyCount.
         * @member {number} dailyCount
         * @memberof Server2Client.LS2C_CollectStoryModeItem_Ack
         * @instance
         */
        LS2C_CollectStoryModeItem_Ack.prototype.dailyCount = 0;

        /**
         * Decodes a LS2C_CollectStoryModeItem_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_CollectStoryModeItem_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_CollectStoryModeItem_Ack} LS2C_CollectStoryModeItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_CollectStoryModeItem_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_CollectStoryModeItem_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.collectedCount = r.int32();
                        break;
                    }
                case 3: {
                        m.totalCount = r.int32();
                        break;
                    }
                case 4: {
                        m.dailyCount = r.int32();
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
         * @name Server2Client.LS2C_CollectStoryModeItem_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInActivity=2 NotInActivity value
         * @property {number} CountLimit=3 CountLimit value
         */
        LS2C_CollectStoryModeItem_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInActivity"] = 2;
            values[valuesById[3] = "CountLimit"] = 3;
            return values;
        })();

        return LS2C_CollectStoryModeItem_Ack;
    })();

    Server2Client.LS2C_ClaimStoryReward_Ack = (function() {

        /**
         * Properties of a LS2C_ClaimStoryReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_ClaimStoryReward_Ack
         * @property {Server2Client.LS2C_ClaimStoryReward_Ack.AckCode|null} [ackCode] LS2C_ClaimStoryReward_Ack ackCode
         * @property {Array.<common.Item>|null} [rewards] LS2C_ClaimStoryReward_Ack rewards
         */

        /**
         * Constructs a new LS2C_ClaimStoryReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_ClaimStoryReward_Ack.
         * @implements ILS2C_ClaimStoryReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_ClaimStoryReward_Ack=} [p] Properties to set
         */
        function LS2C_ClaimStoryReward_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_ClaimStoryReward_Ack ackCode.
         * @member {Server2Client.LS2C_ClaimStoryReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_ClaimStoryReward_Ack
         * @instance
         */
        LS2C_ClaimStoryReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_ClaimStoryReward_Ack rewards.
         * @member {Array.<common.Item>} rewards
         * @memberof Server2Client.LS2C_ClaimStoryReward_Ack
         * @instance
         */
        LS2C_ClaimStoryReward_Ack.prototype.rewards = $util.emptyArray;

        /**
         * Decodes a LS2C_ClaimStoryReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_ClaimStoryReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_ClaimStoryReward_Ack} LS2C_ClaimStoryReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_ClaimStoryReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_ClaimStoryReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        m.rewards.push($root.common.Item.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_ClaimStoryReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyClaimed=2 AlreadyClaimed value
         * @property {number} NotEnoughPoints=3 NotEnoughPoints value
         * @property {number} NotInActivity=4 NotInActivity value
         */
        LS2C_ClaimStoryReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyClaimed"] = 2;
            values[valuesById[3] = "NotEnoughPoints"] = 3;
            values[valuesById[4] = "NotInActivity"] = 4;
            return values;
        })();

        return LS2C_ClaimStoryReward_Ack;
    })();

    Server2Client.LS2C_PK_StartMatch_Ack = (function() {

        /**
         * Properties of a LS2C_PK_StartMatch_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_StartMatch_Ack
         * @property {Server2Client.LS2C_PK_StartMatch_Ack.AckCode|null} [ackCode] LS2C_PK_StartMatch_Ack ackCode
         * @property {string|null} [matchToken] LS2C_PK_StartMatch_Ack matchToken
         * @property {Array.<number>|null} [seeds] LS2C_PK_StartMatch_Ack seeds
         * @property {common.RoomMatchData|null} [roomData] LS2C_PK_StartMatch_Ack roomData
         */

        /**
         * Constructs a new LS2C_PK_StartMatch_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_StartMatch_Ack.
         * @implements ILS2C_PK_StartMatch_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_StartMatch_Ack=} [p] Properties to set
         */
        function LS2C_PK_StartMatch_Ack(p) {
            this.seeds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_StartMatch_Ack ackCode.
         * @member {Server2Client.LS2C_PK_StartMatch_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_StartMatch_Ack
         * @instance
         */
        LS2C_PK_StartMatch_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_StartMatch_Ack matchToken.
         * @member {string} matchToken
         * @memberof Server2Client.LS2C_PK_StartMatch_Ack
         * @instance
         */
        LS2C_PK_StartMatch_Ack.prototype.matchToken = "";

        /**
         * LS2C_PK_StartMatch_Ack seeds.
         * @member {Array.<number>} seeds
         * @memberof Server2Client.LS2C_PK_StartMatch_Ack
         * @instance
         */
        LS2C_PK_StartMatch_Ack.prototype.seeds = $util.emptyArray;

        /**
         * LS2C_PK_StartMatch_Ack roomData.
         * @member {common.RoomMatchData|null|undefined} roomData
         * @memberof Server2Client.LS2C_PK_StartMatch_Ack
         * @instance
         */
        LS2C_PK_StartMatch_Ack.prototype.roomData = null;

        /**
         * Decodes a LS2C_PK_StartMatch_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_StartMatch_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_StartMatch_Ack} LS2C_PK_StartMatch_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_StartMatch_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_StartMatch_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.matchToken = r.string();
                        break;
                    }
                case 3: {
                        if (!(m.seeds && m.seeds.length))
                            m.seeds = [];
                        if ((t & 7) === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2)
                                m.seeds.push(r.uint32());
                        } else
                            m.seeds.push(r.uint32());
                        break;
                    }
                case 4: {
                        m.roomData = $root.common.RoomMatchData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_StartMatch_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} InMatch=2 InMatch value
         */
        LS2C_PK_StartMatch_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "InMatch"] = 2;
            return values;
        })();

        return LS2C_PK_StartMatch_Ack;
    })();

    Server2Client.LS2C_PK_GetMatchState_Ack = (function() {

        /**
         * Properties of a LS2C_PK_GetMatchState_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_GetMatchState_Ack
         * @property {Server2Client.LS2C_PK_GetMatchState_Ack.AckCode|null} [ackCode] LS2C_PK_GetMatchState_Ack ackCode
         * @property {common.RoomMatchData|null} [roomData] LS2C_PK_GetMatchState_Ack roomData
         */

        /**
         * Constructs a new LS2C_PK_GetMatchState_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_GetMatchState_Ack.
         * @implements ILS2C_PK_GetMatchState_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_GetMatchState_Ack=} [p] Properties to set
         */
        function LS2C_PK_GetMatchState_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_GetMatchState_Ack ackCode.
         * @member {Server2Client.LS2C_PK_GetMatchState_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_GetMatchState_Ack
         * @instance
         */
        LS2C_PK_GetMatchState_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_GetMatchState_Ack roomData.
         * @member {common.RoomMatchData|null|undefined} roomData
         * @memberof Server2Client.LS2C_PK_GetMatchState_Ack
         * @instance
         */
        LS2C_PK_GetMatchState_Ack.prototype.roomData = null;

        /**
         * Decodes a LS2C_PK_GetMatchState_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_GetMatchState_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_GetMatchState_Ack} LS2C_PK_GetMatchState_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_GetMatchState_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_GetMatchState_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.roomData = $root.common.RoomMatchData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_GetMatchState_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInMatch=2 NotInMatch value
         */
        LS2C_PK_GetMatchState_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInMatch"] = 2;
            return values;
        })();

        return LS2C_PK_GetMatchState_Ack;
    })();

    Server2Client.LS2C_PK_ReadyComplete_Ack = (function() {

        /**
         * Properties of a LS2C_PK_ReadyComplete_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_ReadyComplete_Ack
         * @property {Server2Client.LS2C_PK_ReadyComplete_Ack.AckCode|null} [ackCode] LS2C_PK_ReadyComplete_Ack ackCode
         * @property {common.RoomMatchStatus|null} [status] LS2C_PK_ReadyComplete_Ack status
         */

        /**
         * Constructs a new LS2C_PK_ReadyComplete_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_ReadyComplete_Ack.
         * @implements ILS2C_PK_ReadyComplete_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_ReadyComplete_Ack=} [p] Properties to set
         */
        function LS2C_PK_ReadyComplete_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_ReadyComplete_Ack ackCode.
         * @member {Server2Client.LS2C_PK_ReadyComplete_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_ReadyComplete_Ack
         * @instance
         */
        LS2C_PK_ReadyComplete_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_ReadyComplete_Ack status.
         * @member {common.RoomMatchStatus|null|undefined} status
         * @memberof Server2Client.LS2C_PK_ReadyComplete_Ack
         * @instance
         */
        LS2C_PK_ReadyComplete_Ack.prototype.status = null;

        /**
         * Decodes a LS2C_PK_ReadyComplete_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_ReadyComplete_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_ReadyComplete_Ack} LS2C_PK_ReadyComplete_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_ReadyComplete_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_ReadyComplete_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.status = $root.common.RoomMatchStatus.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_ReadyComplete_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInRoom=2 NotInRoom value
         */
        LS2C_PK_ReadyComplete_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInRoom"] = 2;
            return values;
        })();

        return LS2C_PK_ReadyComplete_Ack;
    })();

    Server2Client.LS2C_PK_GetRoomData_Ack = (function() {

        /**
         * Properties of a LS2C_PK_GetRoomData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_GetRoomData_Ack
         * @property {Server2Client.LS2C_PK_GetRoomData_Ack.AckCode|null} [ackCode] LS2C_PK_GetRoomData_Ack ackCode
         * @property {common.RoomMatchData|null} [roomData] LS2C_PK_GetRoomData_Ack roomData
         */

        /**
         * Constructs a new LS2C_PK_GetRoomData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_GetRoomData_Ack.
         * @implements ILS2C_PK_GetRoomData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_GetRoomData_Ack=} [p] Properties to set
         */
        function LS2C_PK_GetRoomData_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_GetRoomData_Ack ackCode.
         * @member {Server2Client.LS2C_PK_GetRoomData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_GetRoomData_Ack
         * @instance
         */
        LS2C_PK_GetRoomData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_GetRoomData_Ack roomData.
         * @member {common.RoomMatchData|null|undefined} roomData
         * @memberof Server2Client.LS2C_PK_GetRoomData_Ack
         * @instance
         */
        LS2C_PK_GetRoomData_Ack.prototype.roomData = null;

        /**
         * Decodes a LS2C_PK_GetRoomData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_GetRoomData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_GetRoomData_Ack} LS2C_PK_GetRoomData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_GetRoomData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_GetRoomData_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.roomData = $root.common.RoomMatchData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_GetRoomData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInRoom=2 NotInRoom value
         */
        LS2C_PK_GetRoomData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInRoom"] = 2;
            return values;
        })();

        return LS2C_PK_GetRoomData_Ack;
    })();

    Server2Client.LS2C_PK_ReportScore_Ack = (function() {

        /**
         * Properties of a LS2C_PK_ReportScore_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_ReportScore_Ack
         * @property {Server2Client.LS2C_PK_ReportScore_Ack.AckCode|null} [ackCode] LS2C_PK_ReportScore_Ack ackCode
         * @property {common.RoomMatchData|null} [roomData] LS2C_PK_ReportScore_Ack roomData
         */

        /**
         * Constructs a new LS2C_PK_ReportScore_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_ReportScore_Ack.
         * @implements ILS2C_PK_ReportScore_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_ReportScore_Ack=} [p] Properties to set
         */
        function LS2C_PK_ReportScore_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_ReportScore_Ack ackCode.
         * @member {Server2Client.LS2C_PK_ReportScore_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_ReportScore_Ack
         * @instance
         */
        LS2C_PK_ReportScore_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_ReportScore_Ack roomData.
         * @member {common.RoomMatchData|null|undefined} roomData
         * @memberof Server2Client.LS2C_PK_ReportScore_Ack
         * @instance
         */
        LS2C_PK_ReportScore_Ack.prototype.roomData = null;

        /**
         * Decodes a LS2C_PK_ReportScore_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_ReportScore_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_ReportScore_Ack} LS2C_PK_ReportScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_ReportScore_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_ReportScore_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.roomData = $root.common.RoomMatchData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_ReportScore_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInGame=2 NotInGame value
         */
        LS2C_PK_ReportScore_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInGame"] = 2;
            return values;
        })();

        return LS2C_PK_ReportScore_Ack;
    })();

    Server2Client.LS2C_PK_GameOver_Ack = (function() {

        /**
         * Properties of a LS2C_PK_GameOver_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_GameOver_Ack
         * @property {Server2Client.LS2C_PK_GameOver_Ack.AckCode|null} [ackCode] LS2C_PK_GameOver_Ack ackCode
         * @property {common.RoomMatchData|null} [roomData] LS2C_PK_GameOver_Ack roomData
         */

        /**
         * Constructs a new LS2C_PK_GameOver_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_GameOver_Ack.
         * @implements ILS2C_PK_GameOver_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_GameOver_Ack=} [p] Properties to set
         */
        function LS2C_PK_GameOver_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_GameOver_Ack ackCode.
         * @member {Server2Client.LS2C_PK_GameOver_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_GameOver_Ack
         * @instance
         */
        LS2C_PK_GameOver_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_GameOver_Ack roomData.
         * @member {common.RoomMatchData|null|undefined} roomData
         * @memberof Server2Client.LS2C_PK_GameOver_Ack
         * @instance
         */
        LS2C_PK_GameOver_Ack.prototype.roomData = null;

        /**
         * Decodes a LS2C_PK_GameOver_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_GameOver_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_GameOver_Ack} LS2C_PK_GameOver_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_GameOver_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_GameOver_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.roomData = $root.common.RoomMatchData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_GameOver_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInGame=2 NotInGame value
         */
        LS2C_PK_GameOver_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInGame"] = 2;
            return values;
        })();

        return LS2C_PK_GameOver_Ack;
    })();

    Server2Client.LS2C_PK_GetItem_Ack = (function() {

        /**
         * Properties of a LS2C_PK_GetItem_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_GetItem_Ack
         * @property {Server2Client.LS2C_PK_GetItem_Ack.AckCode|null} [ackCode] LS2C_PK_GetItem_Ack ackCode
         * @property {number|null} [propId] LS2C_PK_GetItem_Ack propId
         * @property {number|null} [propCount] LS2C_PK_GetItem_Ack propCount
         */

        /**
         * Constructs a new LS2C_PK_GetItem_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_GetItem_Ack.
         * @implements ILS2C_PK_GetItem_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_GetItem_Ack=} [p] Properties to set
         */
        function LS2C_PK_GetItem_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_GetItem_Ack ackCode.
         * @member {Server2Client.LS2C_PK_GetItem_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_GetItem_Ack
         * @instance
         */
        LS2C_PK_GetItem_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_GetItem_Ack propId.
         * @member {number} propId
         * @memberof Server2Client.LS2C_PK_GetItem_Ack
         * @instance
         */
        LS2C_PK_GetItem_Ack.prototype.propId = 0;

        /**
         * LS2C_PK_GetItem_Ack propCount.
         * @member {number} propCount
         * @memberof Server2Client.LS2C_PK_GetItem_Ack
         * @instance
         */
        LS2C_PK_GetItem_Ack.prototype.propCount = 0;

        /**
         * Decodes a LS2C_PK_GetItem_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_GetItem_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_GetItem_Ack} LS2C_PK_GetItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_GetItem_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_GetItem_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.propId = r.int32();
                        break;
                    }
                case 3: {
                        m.propCount = r.int32();
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
         * @name Server2Client.LS2C_PK_GetItem_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Limit=2 Limit value
         */
        LS2C_PK_GetItem_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Limit"] = 2;
            return values;
        })();

        return LS2C_PK_GetItem_Ack;
    })();

    Server2Client.LS2C_PK_UseItem_Ack = (function() {

        /**
         * Properties of a LS2C_PK_UseItem_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_UseItem_Ack
         * @property {Server2Client.LS2C_PK_UseItem_Ack.AckCode|null} [ackCode] LS2C_PK_UseItem_Ack ackCode
         * @property {number|null} [propId] LS2C_PK_UseItem_Ack propId
         * @property {number|null} [propCount] LS2C_PK_UseItem_Ack propCount
         */

        /**
         * Constructs a new LS2C_PK_UseItem_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_UseItem_Ack.
         * @implements ILS2C_PK_UseItem_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_UseItem_Ack=} [p] Properties to set
         */
        function LS2C_PK_UseItem_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_UseItem_Ack ackCode.
         * @member {Server2Client.LS2C_PK_UseItem_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_UseItem_Ack
         * @instance
         */
        LS2C_PK_UseItem_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_UseItem_Ack propId.
         * @member {number} propId
         * @memberof Server2Client.LS2C_PK_UseItem_Ack
         * @instance
         */
        LS2C_PK_UseItem_Ack.prototype.propId = 0;

        /**
         * LS2C_PK_UseItem_Ack propCount.
         * @member {number} propCount
         * @memberof Server2Client.LS2C_PK_UseItem_Ack
         * @instance
         */
        LS2C_PK_UseItem_Ack.prototype.propCount = 0;

        /**
         * Decodes a LS2C_PK_UseItem_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_UseItem_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_UseItem_Ack} LS2C_PK_UseItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_UseItem_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_UseItem_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.propId = r.int32();
                        break;
                    }
                case 3: {
                        m.propCount = r.int32();
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
         * @name Server2Client.LS2C_PK_UseItem_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} Limit=2 Limit value
         */
        LS2C_PK_UseItem_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "Limit"] = 2;
            return values;
        })();

        return LS2C_PK_UseItem_Ack;
    })();

    Server2Client.LS2C_PK_GetMatchInfo_Ack = (function() {

        /**
         * Properties of a LS2C_PK_GetMatchInfo_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_GetMatchInfo_Ack
         * @property {Server2Client.LS2C_PK_GetMatchInfo_Ack.AckCode|null} [ackCode] LS2C_PK_GetMatchInfo_Ack ackCode
         * @property {number|null} [armRaceTarget] LS2C_PK_GetMatchInfo_Ack armRaceTarget
         * @property {number|null} [fastEaterTarget] LS2C_PK_GetMatchInfo_Ack fastEaterTarget
         * @property {number|null} [propLimit] LS2C_PK_GetMatchInfo_Ack propLimit
         * @property {number|null} [todayPropCount] LS2C_PK_GetMatchInfo_Ack todayPropCount
         * @property {Object.<string,number>|null} [propCount] LS2C_PK_GetMatchInfo_Ack propCount
         * @property {number|null} [totalScore] LS2C_PK_GetMatchInfo_Ack totalScore
         * @property {boolean|null} [isCrossActivity] LS2C_PK_GetMatchInfo_Ack isCrossActivity
         * @property {Array.<common.PKPlayerInfo>|null} [players] LS2C_PK_GetMatchInfo_Ack players
         * @property {Array.<common.PkMatchRewardMsg>|null} [stageAward] LS2C_PK_GetMatchInfo_Ack stageAward
         */

        /**
         * Constructs a new LS2C_PK_GetMatchInfo_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_GetMatchInfo_Ack.
         * @implements ILS2C_PK_GetMatchInfo_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_GetMatchInfo_Ack=} [p] Properties to set
         */
        function LS2C_PK_GetMatchInfo_Ack(p) {
            this.propCount = {};
            this.players = [];
            this.stageAward = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_GetMatchInfo_Ack ackCode.
         * @member {Server2Client.LS2C_PK_GetMatchInfo_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_GetMatchInfo_Ack armRaceTarget.
         * @member {number} armRaceTarget
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.armRaceTarget = 0;

        /**
         * LS2C_PK_GetMatchInfo_Ack fastEaterTarget.
         * @member {number} fastEaterTarget
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.fastEaterTarget = 0;

        /**
         * LS2C_PK_GetMatchInfo_Ack propLimit.
         * @member {number} propLimit
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.propLimit = 0;

        /**
         * LS2C_PK_GetMatchInfo_Ack todayPropCount.
         * @member {number} todayPropCount
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.todayPropCount = 0;

        /**
         * LS2C_PK_GetMatchInfo_Ack propCount.
         * @member {Object.<string,number>} propCount
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.propCount = $util.emptyObject;

        /**
         * LS2C_PK_GetMatchInfo_Ack totalScore.
         * @member {number} totalScore
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.totalScore = 0;

        /**
         * LS2C_PK_GetMatchInfo_Ack isCrossActivity.
         * @member {boolean} isCrossActivity
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.isCrossActivity = false;

        /**
         * LS2C_PK_GetMatchInfo_Ack players.
         * @member {Array.<common.PKPlayerInfo>} players
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.players = $util.emptyArray;

        /**
         * LS2C_PK_GetMatchInfo_Ack stageAward.
         * @member {Array.<common.PkMatchRewardMsg>} stageAward
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @instance
         */
        LS2C_PK_GetMatchInfo_Ack.prototype.stageAward = $util.emptyArray;

        /**
         * Decodes a LS2C_PK_GetMatchInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_GetMatchInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_GetMatchInfo_Ack} LS2C_PK_GetMatchInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_GetMatchInfo_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_GetMatchInfo_Ack(), k, value;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.armRaceTarget = r.int32();
                        break;
                    }
                case 3: {
                        m.fastEaterTarget = r.int32();
                        break;
                    }
                case 4: {
                        m.propLimit = r.int32();
                        break;
                    }
                case 5: {
                        m.todayPropCount = r.int32();
                        break;
                    }
                case 6: {
                        if (m.propCount === $util.emptyObject)
                            m.propCount = {};
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
                        m.propCount[k] = value;
                        break;
                    }
                case 7: {
                        m.totalScore = r.int32();
                        break;
                    }
                case 8: {
                        m.isCrossActivity = r.bool();
                        break;
                    }
                case 9: {
                        if (!(m.players && m.players.length))
                            m.players = [];
                        m.players.push($root.common.PKPlayerInfo.decode(r, r.uint32()));
                        break;
                    }
                case 10: {
                        if (!(m.stageAward && m.stageAward.length))
                            m.stageAward = [];
                        m.stageAward.push($root.common.PkMatchRewardMsg.decode(r, r.uint32()));
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
         * @name Server2Client.LS2C_PK_GetMatchInfo_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInActivity=2 NotInActivity value
         */
        LS2C_PK_GetMatchInfo_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInActivity"] = 2;
            return values;
        })();

        return LS2C_PK_GetMatchInfo_Ack;
    })();

    Server2Client.LS2C_PK_ClaimReward_Ack = (function() {

        /**
         * Properties of a LS2C_PK_ClaimReward_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_ClaimReward_Ack
         * @property {Server2Client.LS2C_PK_ClaimReward_Ack.AckCode|null} [ackCode] LS2C_PK_ClaimReward_Ack ackCode
         * @property {Array.<common.Item>|null} [rewards] LS2C_PK_ClaimReward_Ack rewards
         * @property {number|null} [rewardId] LS2C_PK_ClaimReward_Ack rewardId
         */

        /**
         * Constructs a new LS2C_PK_ClaimReward_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_ClaimReward_Ack.
         * @implements ILS2C_PK_ClaimReward_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_ClaimReward_Ack=} [p] Properties to set
         */
        function LS2C_PK_ClaimReward_Ack(p) {
            this.rewards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_ClaimReward_Ack ackCode.
         * @member {Server2Client.LS2C_PK_ClaimReward_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_ClaimReward_Ack
         * @instance
         */
        LS2C_PK_ClaimReward_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_ClaimReward_Ack rewards.
         * @member {Array.<common.Item>} rewards
         * @memberof Server2Client.LS2C_PK_ClaimReward_Ack
         * @instance
         */
        LS2C_PK_ClaimReward_Ack.prototype.rewards = $util.emptyArray;

        /**
         * LS2C_PK_ClaimReward_Ack rewardId.
         * @member {number} rewardId
         * @memberof Server2Client.LS2C_PK_ClaimReward_Ack
         * @instance
         */
        LS2C_PK_ClaimReward_Ack.prototype.rewardId = 0;

        /**
         * Decodes a LS2C_PK_ClaimReward_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_ClaimReward_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_ClaimReward_Ack} LS2C_PK_ClaimReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_ClaimReward_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_ClaimReward_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        if (!(m.rewards && m.rewards.length))
                            m.rewards = [];
                        m.rewards.push($root.common.Item.decode(r, r.uint32()));
                        break;
                    }
                case 3: {
                        m.rewardId = r.int32();
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
         * @name Server2Client.LS2C_PK_ClaimReward_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} AlreadyClaimed=2 AlreadyClaimed value
         * @property {number} NotQualified=3 NotQualified value
         * @property {number} NotInActivity=4 NotInActivity value
         */
        LS2C_PK_ClaimReward_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "AlreadyClaimed"] = 2;
            values[valuesById[3] = "NotQualified"] = 3;
            values[valuesById[4] = "NotInActivity"] = 4;
            return values;
        })();

        return LS2C_PK_ClaimReward_Ack;
    })();

    Server2Client.LS2C_PK_UpdatePlayerState_Ack = (function() {

        /**
         * Properties of a LS2C_PK_UpdatePlayerState_Ack.
         * @memberof Server2Client
         * @interface ILS2C_PK_UpdatePlayerState_Ack
         * @property {Server2Client.LS2C_PK_UpdatePlayerState_Ack.AckCode|null} [ackCode] LS2C_PK_UpdatePlayerState_Ack ackCode
         * @property {common.RoomMatchData|null} [roomData] LS2C_PK_UpdatePlayerState_Ack roomData
         */

        /**
         * Constructs a new LS2C_PK_UpdatePlayerState_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_PK_UpdatePlayerState_Ack.
         * @implements ILS2C_PK_UpdatePlayerState_Ack
         * @constructor
         * @param {Server2Client.ILS2C_PK_UpdatePlayerState_Ack=} [p] Properties to set
         */
        function LS2C_PK_UpdatePlayerState_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_PK_UpdatePlayerState_Ack ackCode.
         * @member {Server2Client.LS2C_PK_UpdatePlayerState_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_PK_UpdatePlayerState_Ack
         * @instance
         */
        LS2C_PK_UpdatePlayerState_Ack.prototype.ackCode = 0;

        /**
         * LS2C_PK_UpdatePlayerState_Ack roomData.
         * @member {common.RoomMatchData|null|undefined} roomData
         * @memberof Server2Client.LS2C_PK_UpdatePlayerState_Ack
         * @instance
         */
        LS2C_PK_UpdatePlayerState_Ack.prototype.roomData = null;

        /**
         * Decodes a LS2C_PK_UpdatePlayerState_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_PK_UpdatePlayerState_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_PK_UpdatePlayerState_Ack} LS2C_PK_UpdatePlayerState_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_PK_UpdatePlayerState_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_PK_UpdatePlayerState_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.roomData = $root.common.RoomMatchData.decode(r, r.uint32());
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
         * @name Server2Client.LS2C_PK_UpdatePlayerState_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NotInRoom=2 NotInRoom value
         */
        LS2C_PK_UpdatePlayerState_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NotInRoom"] = 2;
            return values;
        })();

        return LS2C_PK_UpdatePlayerState_Ack;
    })();

    Server2Client.LS2C_SyncPkMatchGameData_Ack = (function() {

        /**
         * Properties of a LS2C_SyncPkMatchGameData_Ack.
         * @memberof Server2Client
         * @interface ILS2C_SyncPkMatchGameData_Ack
         * @property {Server2Client.LS2C_SyncPkMatchGameData_Ack.AckCode|null} [ackCode] LS2C_SyncPkMatchGameData_Ack ackCode
         * @property {number|null} [maxStep] LS2C_SyncPkMatchGameData_Ack maxStep
         */

        /**
         * Constructs a new LS2C_SyncPkMatchGameData_Ack.
         * @memberof Server2Client
         * @classdesc Represents a LS2C_SyncPkMatchGameData_Ack.
         * @implements ILS2C_SyncPkMatchGameData_Ack
         * @constructor
         * @param {Server2Client.ILS2C_SyncPkMatchGameData_Ack=} [p] Properties to set
         */
        function LS2C_SyncPkMatchGameData_Ack(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * LS2C_SyncPkMatchGameData_Ack ackCode.
         * @member {Server2Client.LS2C_SyncPkMatchGameData_Ack.AckCode} ackCode
         * @memberof Server2Client.LS2C_SyncPkMatchGameData_Ack
         * @instance
         */
        LS2C_SyncPkMatchGameData_Ack.prototype.ackCode = 0;

        /**
         * LS2C_SyncPkMatchGameData_Ack maxStep.
         * @member {number} maxStep
         * @memberof Server2Client.LS2C_SyncPkMatchGameData_Ack
         * @instance
         */
        LS2C_SyncPkMatchGameData_Ack.prototype.maxStep = 0;

        /**
         * Decodes a LS2C_SyncPkMatchGameData_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof Server2Client.LS2C_SyncPkMatchGameData_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {Server2Client.LS2C_SyncPkMatchGameData_Ack} LS2C_SyncPkMatchGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LS2C_SyncPkMatchGameData_Ack.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.Server2Client.LS2C_SyncPkMatchGameData_Ack();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1: {
                        m.ackCode = r.int32();
                        break;
                    }
                case 2: {
                        m.maxStep = r.int32();
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
         * @name Server2Client.LS2C_SyncPkMatchGameData_Ack.AckCode
         * @enum {number}
         * @property {number} Fail=0 Fail value
         * @property {number} Success=1 Success value
         * @property {number} NoMatch=2 NoMatch value
         * @property {number} StepError=3 StepError value
         * @property {number} StepExist=4 StepExist value
         * @property {number} VerifyFail=5 VerifyFail value
         * @property {number} NotTodayGame=6 NotTodayGame value
         */
        LS2C_SyncPkMatchGameData_Ack.AckCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Fail"] = 0;
            values[valuesById[1] = "Success"] = 1;
            values[valuesById[2] = "NoMatch"] = 2;
            values[valuesById[3] = "StepError"] = 3;
            values[valuesById[4] = "StepExist"] = 4;
            values[valuesById[5] = "VerifyFail"] = 5;
            values[valuesById[6] = "NotTodayGame"] = 6;
            return values;
        })();

        return LS2C_SyncPkMatchGameData_Ack;
    })();

    return Server2Client;
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

export { $root as default };
