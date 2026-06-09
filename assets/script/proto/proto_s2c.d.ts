/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Server2Client. */
export namespace Server2Client {

    /** Properties of a LS2C_LoginSuccess. */
    interface ILS2C_LoginSuccess {

        /** LS2C_LoginSuccess ackCode */
        ackCode?: (Server2Client.LS2C_LoginSuccess.AckCode|null);

        /** LS2C_LoginSuccess isOnlyNetRestore */
        isOnlyNetRestore?: (boolean|null);

        /** LS2C_LoginSuccess sessionId */
        sessionId?: (string|null);

        /** LS2C_LoginSuccess msgNo */
        msgNo?: (number|null);
    }

    /** Represents a LS2C_LoginSuccess. */
    class LS2C_LoginSuccess implements ILS2C_LoginSuccess {

        /**
         * Constructs a new LS2C_LoginSuccess.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_LoginSuccess);

        /** LS2C_LoginSuccess ackCode. */
        public ackCode: Server2Client.LS2C_LoginSuccess.AckCode;

        /** LS2C_LoginSuccess isOnlyNetRestore. */
        public isOnlyNetRestore: boolean;

        /** LS2C_LoginSuccess sessionId. */
        public sessionId: string;

        /** LS2C_LoginSuccess msgNo. */
        public msgNo: number;

        /**
         * Decodes a LS2C_LoginSuccess message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_LoginSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_LoginSuccess;
    }

    namespace LS2C_LoginSuccess {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20000
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_PlayerInfo. */
    interface ILS2C_PlayerInfo {

        /** LS2C_PlayerInfo name */
        name?: (string|null);

        /** LS2C_PlayerInfo avatar */
        avatar?: (string|null);

        /** LS2C_PlayerInfo adCode */
        adCode?: (number|null);

        /** LS2C_PlayerInfo gender */
        gender?: (common.EGender|null);

        /** LS2C_PlayerInfo liteId */
        liteId?: (string|null);

        /** LS2C_PlayerInfo guideId */
        guideId?: (number|null);

        /** LS2C_PlayerInfo isShowBeginnerTask */
        isShowBeginnerTask?: (boolean|null);

        /** LS2C_PlayerInfo status */
        status?: (number|null);

        /** LS2C_PlayerInfo sign */
        sign?: (string|null);

        /** LS2C_PlayerInfo gameData */
        gameData?: (Server2Client.GameData|null);
    }

    /** Represents a LS2C_PlayerInfo. */
    class LS2C_PlayerInfo implements ILS2C_PlayerInfo {

        /**
         * Constructs a new LS2C_PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PlayerInfo);

        /** LS2C_PlayerInfo name. */
        public name: string;

        /** LS2C_PlayerInfo avatar. */
        public avatar: string;

        /** LS2C_PlayerInfo adCode. */
        public adCode: number;

        /** LS2C_PlayerInfo gender. */
        public gender: common.EGender;

        /** LS2C_PlayerInfo liteId. */
        public liteId: string;

        /** LS2C_PlayerInfo guideId. */
        public guideId: number;

        /** LS2C_PlayerInfo isShowBeginnerTask. */
        public isShowBeginnerTask: boolean;

        /** LS2C_PlayerInfo status. */
        public status: number;

        /** LS2C_PlayerInfo sign. */
        public sign: string;

        /** LS2C_PlayerInfo gameData. */
        public gameData?: (Server2Client.GameData|null);

        /**
         * Decodes a LS2C_PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PlayerInfo;
    }

    namespace LS2C_PlayerInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20001
        }
    }

    /** Properties of a LS2C_PlayerReadyAckInfo. */
    interface ILS2C_PlayerReadyAckInfo {

        /** LS2C_PlayerReadyAckInfo ackCode */
        ackCode?: (Server2Client.LS2C_PlayerReadyAckInfo.AckCode|null);

        /** LS2C_PlayerReadyAckInfo serverTimeMs */
        serverTimeMs?: (Long|null);
    }

    /** Represents a LS2C_PlayerReadyAckInfo. */
    class LS2C_PlayerReadyAckInfo implements ILS2C_PlayerReadyAckInfo {

        /**
         * Constructs a new LS2C_PlayerReadyAckInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PlayerReadyAckInfo);

        /** LS2C_PlayerReadyAckInfo ackCode. */
        public ackCode: Server2Client.LS2C_PlayerReadyAckInfo.AckCode;

        /** LS2C_PlayerReadyAckInfo serverTimeMs. */
        public serverTimeMs: Long;

        /**
         * Decodes a LS2C_PlayerReadyAckInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PlayerReadyAckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PlayerReadyAckInfo;
    }

    namespace LS2C_PlayerReadyAckInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20002
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_UpdatePlayerBaseInfoAck. */
    interface ILS2C_UpdatePlayerBaseInfoAck {

        /** LS2C_UpdatePlayerBaseInfoAck code */
        code?: (Server2Client.LS2C_UpdatePlayerBaseInfoAck.AckCode|null);
    }

    /** Represents a LS2C_UpdatePlayerBaseInfoAck. */
    class LS2C_UpdatePlayerBaseInfoAck implements ILS2C_UpdatePlayerBaseInfoAck {

        /**
         * Constructs a new LS2C_UpdatePlayerBaseInfoAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_UpdatePlayerBaseInfoAck);

        /** LS2C_UpdatePlayerBaseInfoAck code. */
        public code: Server2Client.LS2C_UpdatePlayerBaseInfoAck.AckCode;

        /**
         * Decodes a LS2C_UpdatePlayerBaseInfoAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_UpdatePlayerBaseInfoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_UpdatePlayerBaseInfoAck;
    }

    namespace LS2C_UpdatePlayerBaseInfoAck {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20003
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SetPlayerInfoAck. */
    interface ILS2C_SetPlayerInfoAck {

        /** LS2C_SetPlayerInfoAck ackCode */
        ackCode?: (Server2Client.LS2C_SetPlayerInfoAck.AckCode|null);
    }

    /** Represents a LS2C_SetPlayerInfoAck. */
    class LS2C_SetPlayerInfoAck implements ILS2C_SetPlayerInfoAck {

        /**
         * Constructs a new LS2C_SetPlayerInfoAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetPlayerInfoAck);

        /** LS2C_SetPlayerInfoAck ackCode. */
        public ackCode: Server2Client.LS2C_SetPlayerInfoAck.AckCode;

        /**
         * Decodes a LS2C_SetPlayerInfoAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetPlayerInfoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetPlayerInfoAck;
    }

    namespace LS2C_SetPlayerInfoAck {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20005
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a GameData. */
    interface IGameData {

        /** GameData coin */
        coin?: (number|null);

        /** GameData star */
        star?: (number|null);

        /** GameData mushroomCapacity */
        mushroomCapacity?: (number|null);

        /** GameData coinAdLeftCount */
        coinAdLeftCount?: (number|null);

        /** GameData speedAdCount */
        speedAdCount?: (number|null);

        /** GameData randMushroomAdCount */
        randMushroomAdCount?: (number|null);

        /** GameData freeExtractCount */
        freeExtractCount?: (number|null);

        /** GameData waterCoin */
        waterCoin?: (number|null);

        /** GameData recommendAdCountToday */
        recommendAdCountToday?: (number|null);

        /** GameData refreshOrderCountToday */
        refreshOrderCountToday?: (number|null);
    }

    /** Represents a GameData. */
    class GameData implements IGameData {

        /**
         * Constructs a new GameData.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IGameData);

        /** GameData coin. */
        public coin: number;

        /** GameData star. */
        public star: number;

        /** GameData mushroomCapacity. */
        public mushroomCapacity: number;

        /** GameData coinAdLeftCount. */
        public coinAdLeftCount: number;

        /** GameData speedAdCount. */
        public speedAdCount: number;

        /** GameData randMushroomAdCount. */
        public randMushroomAdCount: number;

        /** GameData freeExtractCount. */
        public freeExtractCount: number;

        /** GameData waterCoin. */
        public waterCoin: number;

        /** GameData recommendAdCountToday. */
        public recommendAdCountToday: number;

        /** GameData refreshOrderCountToday. */
        public refreshOrderCountToday: number;

        /**
         * Decodes a GameData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.GameData;
    }

    namespace GameData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20006
        }
    }

    /** Properties of a GetActivityStatusAck. */
    interface IGetActivityStatusAck {

        /** GetActivityStatusAck code */
        code?: (Server2Client.GetActivityStatusAck.AckCode|null);

        /** GetActivityStatusAck activityStatusInfo */
        activityStatusInfo?: (Server2Client.ActivityStatusInfo[]|null);

        /** GetActivityStatusAck gmLevel */
        gmLevel?: (number|null);
    }

    /** Represents a GetActivityStatusAck. */
    class GetActivityStatusAck implements IGetActivityStatusAck {

        /**
         * Constructs a new GetActivityStatusAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IGetActivityStatusAck);

        /** GetActivityStatusAck code. */
        public code: Server2Client.GetActivityStatusAck.AckCode;

        /** GetActivityStatusAck activityStatusInfo. */
        public activityStatusInfo: Server2Client.ActivityStatusInfo[];

        /** GetActivityStatusAck gmLevel. */
        public gmLevel: number;

        /**
         * Decodes a GetActivityStatusAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetActivityStatusAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.GetActivityStatusAck;
    }

    namespace GetActivityStatusAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of an ActivityStatusInfo. */
    interface IActivityStatusInfo {

        /** ActivityStatusInfo activityType */
        activityType?: (number|null);

        /** ActivityStatusInfo activityId */
        activityId?: (number|null);

        /** ActivityStatusInfo status */
        status?: (protocol.EActivityStatus|null);

        /** ActivityStatusInfo startTime */
        startTime?: (Long|null);

        /** ActivityStatusInfo endTime */
        endTime?: (Long|null);

        /** ActivityStatusInfo gmLevelCondition */
        gmLevelCondition?: (number|null);

        /** ActivityStatusInfo isOpen */
        isOpen?: (boolean|null);
    }

    /** Represents an ActivityStatusInfo. */
    class ActivityStatusInfo implements IActivityStatusInfo {

        /**
         * Constructs a new ActivityStatusInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IActivityStatusInfo);

        /** ActivityStatusInfo activityType. */
        public activityType: number;

        /** ActivityStatusInfo activityId. */
        public activityId: number;

        /** ActivityStatusInfo status. */
        public status: protocol.EActivityStatus;

        /** ActivityStatusInfo startTime. */
        public startTime: Long;

        /** ActivityStatusInfo endTime. */
        public endTime: Long;

        /** ActivityStatusInfo gmLevelCondition. */
        public gmLevelCondition: number;

        /** ActivityStatusInfo isOpen. */
        public isOpen: boolean;

        /**
         * Decodes an ActivityStatusInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ActivityStatusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ActivityStatusInfo;
    }

    /** Properties of a GetUserActivityDataAck. */
    interface IGetUserActivityDataAck {

        /** GetUserActivityDataAck code */
        code?: (Server2Client.GetUserActivityDataAck.AckCode|null);

        /** GetUserActivityDataAck activityData */
        activityData?: (Server2Client.UserActivityInfo[]|null);
    }

    /** Represents a GetUserActivityDataAck. */
    class GetUserActivityDataAck implements IGetUserActivityDataAck {

        /**
         * Constructs a new GetUserActivityDataAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IGetUserActivityDataAck);

        /** GetUserActivityDataAck code. */
        public code: Server2Client.GetUserActivityDataAck.AckCode;

        /** GetUserActivityDataAck activityData. */
        public activityData: Server2Client.UserActivityInfo[];

        /**
         * Decodes a GetUserActivityDataAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetUserActivityDataAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.GetUserActivityDataAck;
    }

    namespace GetUserActivityDataAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2
        }
    }

    /** Properties of an ActivityConfig. */
    interface IActivityConfig {

        /** ActivityConfig activityId */
        activityId?: (number|null);

        /** ActivityConfig activityType */
        activityType?: (number|null);

        /** ActivityConfig endTime */
        endTime?: (number|null);

        /** ActivityConfig activityConf */
        activityConf?: (Server2Client.ActivityProgress[]|null);
    }

    /** Represents an ActivityConfig. */
    class ActivityConfig implements IActivityConfig {

        /**
         * Constructs a new ActivityConfig.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IActivityConfig);

        /** ActivityConfig activityId. */
        public activityId: number;

        /** ActivityConfig activityType. */
        public activityType: number;

        /** ActivityConfig endTime. */
        public endTime: number;

        /** ActivityConfig activityConf. */
        public activityConf: Server2Client.ActivityProgress[];

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ActivityConfig;
    }

    /** Properties of an ActivityProgress. */
    interface IActivityProgress {

        /** ActivityProgress conditionType */
        conditionType?: (number|null);

        /** ActivityProgress conditionValue */
        conditionValue?: (number|null);

        /** ActivityProgress awardList */
        awardList?: (protocol.AwardInfo[]|null);
    }

    /** Represents an ActivityProgress. */
    class ActivityProgress implements IActivityProgress {

        /**
         * Constructs a new ActivityProgress.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IActivityProgress);

        /** ActivityProgress conditionType. */
        public conditionType: number;

        /** ActivityProgress conditionValue. */
        public conditionValue: number;

        /** ActivityProgress awardList. */
        public awardList: protocol.AwardInfo[];

        /**
         * Decodes an ActivityProgress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ActivityProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ActivityProgress;
    }

    /** Properties of a UserActivityInfo. */
    interface IUserActivityInfo {

        /** UserActivityInfo activityIndex */
        activityIndex?: (number|null);

        /** UserActivityInfo progress */
        progress?: (number|null);

        /** UserActivityInfo awardProgress */
        awardProgress?: (number|null);

        /** UserActivityInfo refreshMark */
        refreshMark?: (number|null);

        /** UserActivityInfo indexEndTime */
        indexEndTime?: (number|null);

        /** UserActivityInfo activityConfig */
        activityConfig?: (Server2Client.ActivityConfig|null);

        /** UserActivityInfo realStartTime */
        realStartTime?: (Long|null);
    }

    /** Represents a UserActivityInfo. */
    class UserActivityInfo implements IUserActivityInfo {

        /**
         * Constructs a new UserActivityInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IUserActivityInfo);

        /** UserActivityInfo activityIndex. */
        public activityIndex: number;

        /** UserActivityInfo progress. */
        public progress: number;

        /** UserActivityInfo awardProgress. */
        public awardProgress: number;

        /** UserActivityInfo refreshMark. */
        public refreshMark: number;

        /** UserActivityInfo indexEndTime. */
        public indexEndTime: number;

        /** UserActivityInfo activityConfig. */
        public activityConfig?: (Server2Client.ActivityConfig|null);

        /** UserActivityInfo realStartTime. */
        public realStartTime: Long;

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.UserActivityInfo;
    }

    /** Properties of a UserUnlockBlockListAck. */
    interface IUserUnlockBlockListAck {

        /** UserUnlockBlockListAck code */
        code?: (Server2Client.UserUnlockBlockListAck.AckCode|null);

        /** UserUnlockBlockListAck blockList */
        blockList?: (protocol.BlockData[]|null);
    }

    /** Represents a UserUnlockBlockListAck. */
    class UserUnlockBlockListAck implements IUserUnlockBlockListAck {

        /**
         * Constructs a new UserUnlockBlockListAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IUserUnlockBlockListAck);

        /** UserUnlockBlockListAck code. */
        public code: Server2Client.UserUnlockBlockListAck.AckCode;

        /** UserUnlockBlockListAck blockList. */
        public blockList: protocol.BlockData[];

        /**
         * Decodes a UserUnlockBlockListAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserUnlockBlockListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.UserUnlockBlockListAck;
    }

    namespace UserUnlockBlockListAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2,
            NoDate = 3,
            Orleans_Fail = 4
        }
    }

    /** Properties of a UserBlockSlotsAck. */
    interface IUserBlockSlotsAck {

        /** UserBlockSlotsAck code */
        code?: (Server2Client.UserBlockSlotsAck.AckCode|null);

        /** UserBlockSlotsAck blockIdList */
        blockIdList?: (Long[]|null);

        /** UserBlockSlotsAck topicId */
        topicId?: (number|null);
    }

    /** Represents a UserBlockSlotsAck. */
    class UserBlockSlotsAck implements IUserBlockSlotsAck {

        /**
         * Constructs a new UserBlockSlotsAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IUserBlockSlotsAck);

        /** UserBlockSlotsAck code. */
        public code: Server2Client.UserBlockSlotsAck.AckCode;

        /** UserBlockSlotsAck blockIdList. */
        public blockIdList: Long[];

        /** UserBlockSlotsAck topicId. */
        public topicId: number;

        /**
         * Decodes a UserBlockSlotsAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserBlockSlotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.UserBlockSlotsAck;
    }

    namespace UserBlockSlotsAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2,
            NoDate = 3,
            Orleans_Fail = 4
        }
    }

    /** Properties of a ReqEquipBlockSlotAck. */
    interface IReqEquipBlockSlotAck {

        /** ReqEquipBlockSlotAck code */
        code?: (Server2Client.ReqEquipBlockSlotAck.AckCode|null);
    }

    /** Represents a ReqEquipBlockSlotAck. */
    class ReqEquipBlockSlotAck implements IReqEquipBlockSlotAck {

        /**
         * Constructs a new ReqEquipBlockSlotAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IReqEquipBlockSlotAck);

        /** ReqEquipBlockSlotAck code. */
        public code: Server2Client.ReqEquipBlockSlotAck.AckCode;

        /**
         * Decodes a ReqEquipBlockSlotAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqEquipBlockSlotAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ReqEquipBlockSlotAck;
    }

    namespace ReqEquipBlockSlotAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2,
            Repeated = 3,
            Locked = 4,
            NoDate = 5,
            Orleans_Fail = 6
        }
    }

    /** Properties of a ResetBlockSlotAck. */
    interface IResetBlockSlotAck {

        /** ResetBlockSlotAck code */
        code?: (Server2Client.ResetBlockSlotAck.AckCode|null);

        /** ResetBlockSlotAck blockIdList */
        blockIdList?: (Long[]|null);

        /** ResetBlockSlotAck topicId */
        topicId?: (number|null);
    }

    /** Represents a ResetBlockSlotAck. */
    class ResetBlockSlotAck implements IResetBlockSlotAck {

        /**
         * Constructs a new ResetBlockSlotAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IResetBlockSlotAck);

        /** ResetBlockSlotAck code. */
        public code: Server2Client.ResetBlockSlotAck.AckCode;

        /** ResetBlockSlotAck blockIdList. */
        public blockIdList: Long[];

        /** ResetBlockSlotAck topicId. */
        public topicId: number;

        /**
         * Decodes a ResetBlockSlotAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResetBlockSlotAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ResetBlockSlotAck;
    }

    namespace ResetBlockSlotAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2,
            NoDate = 3,
            Orleans_Fail = 4
        }
    }

    /** Properties of an UnlockBlockListNewAck. */
    interface IUnlockBlockListNewAck {

        /** UnlockBlockListNewAck code */
        code?: (Server2Client.UnlockBlockListNewAck.AckCode|null);

        /** UnlockBlockListNewAck blockList */
        blockList?: (protocol.BlockData[]|null);
    }

    /** Represents an UnlockBlockListNewAck. */
    class UnlockBlockListNewAck implements IUnlockBlockListNewAck {

        /**
         * Constructs a new UnlockBlockListNewAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IUnlockBlockListNewAck);

        /** UnlockBlockListNewAck code. */
        public code: Server2Client.UnlockBlockListNewAck.AckCode;

        /** UnlockBlockListNewAck blockList. */
        public blockList: protocol.BlockData[];

        /**
         * Decodes an UnlockBlockListNewAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnlockBlockListNewAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.UnlockBlockListNewAck;
    }

    namespace UnlockBlockListNewAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2,
            NoDate = 3,
            Orleans_Fail = 4
        }
    }

    /** Properties of an EquipTopicBlockSlotsAck. */
    interface IEquipTopicBlockSlotsAck {

        /** EquipTopicBlockSlotsAck code */
        code?: (Server2Client.EquipTopicBlockSlotsAck.AckCode|null);

        /** EquipTopicBlockSlotsAck blockIdList */
        blockIdList?: (Long[]|null);

        /** EquipTopicBlockSlotsAck topicId */
        topicId?: (number|null);
    }

    /** Represents an EquipTopicBlockSlotsAck. */
    class EquipTopicBlockSlotsAck implements IEquipTopicBlockSlotsAck {

        /**
         * Constructs a new EquipTopicBlockSlotsAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IEquipTopicBlockSlotsAck);

        /** EquipTopicBlockSlotsAck code. */
        public code: Server2Client.EquipTopicBlockSlotsAck.AckCode;

        /** EquipTopicBlockSlotsAck blockIdList. */
        public blockIdList: Long[];

        /** EquipTopicBlockSlotsAck topicId. */
        public topicId: number;

        /**
         * Decodes an EquipTopicBlockSlotsAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EquipTopicBlockSlotsAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.EquipTopicBlockSlotsAck;
    }

    namespace EquipTopicBlockSlotsAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ParamsErr = 2,
            NoDate = 3,
            Locked = 4,
            Orleans_Fail = 5
        }
    }

    /** Properties of an ExtractedAwardAck. */
    interface IExtractedAwardAck {

        /** ExtractedAwardAck code */
        code?: (Server2Client.ExtractedAwardAck.AckCode|null);

        /** ExtractedAwardAck mailId */
        mailId?: (string|null);

        /** ExtractedAwardAck skinIdList */
        skinIdList?: (protocol.MailAwardItem[]|null);

        /** ExtractedAwardAck Item */
        Item?: (common.Item[]|null);
    }

    /** Represents an ExtractedAwardAck. */
    class ExtractedAwardAck implements IExtractedAwardAck {

        /**
         * Constructs a new ExtractedAwardAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IExtractedAwardAck);

        /** ExtractedAwardAck code. */
        public code: Server2Client.ExtractedAwardAck.AckCode;

        /** ExtractedAwardAck mailId. */
        public mailId: string;

        /** ExtractedAwardAck skinIdList. */
        public skinIdList: protocol.MailAwardItem[];

        /** ExtractedAwardAck Item. */
        public Item: common.Item[];

        /**
         * Decodes an ExtractedAwardAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ExtractedAwardAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ExtractedAwardAck;
    }

    namespace ExtractedAwardAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2,
            Partial_Success = 3
        }
    }

    /** Properties of a MarkReadAck. */
    interface IMarkReadAck {

        /** MarkReadAck code */
        code?: (Server2Client.MarkReadAck.AckCode|null);

        /** MarkReadAck mailId */
        mailId?: (string|null);
    }

    /** Represents a MarkReadAck. */
    class MarkReadAck implements IMarkReadAck {

        /**
         * Constructs a new MarkReadAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IMarkReadAck);

        /** MarkReadAck code. */
        public code: Server2Client.MarkReadAck.AckCode;

        /** MarkReadAck mailId. */
        public mailId: string;

        /**
         * Decodes a MarkReadAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MarkReadAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.MarkReadAck;
    }

    namespace MarkReadAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2
        }
    }

    /** Properties of a MarkDeletedAck. */
    interface IMarkDeletedAck {

        /** MarkDeletedAck code */
        code?: (Server2Client.MarkDeletedAck.AckCode|null);

        /** MarkDeletedAck mailId */
        mailId?: (string|null);
    }

    /** Represents a MarkDeletedAck. */
    class MarkDeletedAck implements IMarkDeletedAck {

        /**
         * Constructs a new MarkDeletedAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IMarkDeletedAck);

        /** MarkDeletedAck code. */
        public code: Server2Client.MarkDeletedAck.AckCode;

        /** MarkDeletedAck mailId. */
        public mailId: string;

        /**
         * Decodes a MarkDeletedAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MarkDeletedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.MarkDeletedAck;
    }

    namespace MarkDeletedAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2
        }
    }

    /** Properties of a MarkSkinExtractedAck. */
    interface IMarkSkinExtractedAck {

        /** MarkSkinExtractedAck code */
        code?: (Server2Client.MarkSkinExtractedAck.AckCode|null);
    }

    /** Represents a MarkSkinExtractedAck. */
    class MarkSkinExtractedAck implements IMarkSkinExtractedAck {

        /**
         * Constructs a new MarkSkinExtractedAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IMarkSkinExtractedAck);

        /** MarkSkinExtractedAck code. */
        public code: Server2Client.MarkSkinExtractedAck.AckCode;

        /**
         * Decodes a MarkSkinExtractedAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MarkSkinExtractedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.MarkSkinExtractedAck;
    }

    namespace MarkSkinExtractedAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2
        }
    }

    /** Properties of a SendMailAck. */
    interface ISendMailAck {

        /** SendMailAck code */
        code?: (Server2Client.SendMailAck.AckCode|null);
    }

    /** Represents a SendMailAck. */
    class SendMailAck implements ISendMailAck {

        /**
         * Constructs a new SendMailAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ISendMailAck);

        /** SendMailAck code. */
        public code: Server2Client.SendMailAck.AckCode;

        /**
         * Decodes a SendMailAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SendMailAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.SendMailAck;
    }

    namespace SendMailAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2
        }
    }

    /** Properties of a GetMailListAck. */
    interface IGetMailListAck {

        /** GetMailListAck code */
        code?: (Server2Client.GetMailListAck.AckCode|null);

        /** GetMailListAck mailList */
        mailList?: (protocol.MailData[]|null);
    }

    /** Represents a GetMailListAck. */
    class GetMailListAck implements IGetMailListAck {

        /**
         * Constructs a new GetMailListAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IGetMailListAck);

        /** GetMailListAck code. */
        public code: Server2Client.GetMailListAck.AckCode;

        /** GetMailListAck mailList. */
        public mailList: protocol.MailData[];

        /**
         * Decodes a GetMailListAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetMailListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.GetMailListAck;
    }

    namespace GetMailListAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2
        }
    }

    /** Properties of a SendAwardAck. */
    interface ISendAwardAck {

        /** SendAwardAck code */
        code?: (Server2Client.SendAwardAck.AckCode|null);

        /** SendAwardAck itemList */
        itemList?: (common.Item[]|null);
    }

    /** Represents a SendAwardAck. */
    class SendAwardAck implements ISendAwardAck {

        /**
         * Constructs a new SendAwardAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ISendAwardAck);

        /** SendAwardAck code. */
        public code: Server2Client.SendAwardAck.AckCode;

        /** SendAwardAck itemList. */
        public itemList: common.Item[];

        /**
         * Decodes a SendAwardAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SendAwardAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.SendAwardAck;
    }

    namespace SendAwardAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoDate = 2
        }
    }

    /** Properties of a MailStateData. */
    interface IMailStateData {

        /** MailStateData mailId */
        mailId?: (string|null);

        /** MailStateData haveRead */
        haveRead?: (boolean|null);
    }

    /** Represents a MailStateData. */
    class MailStateData implements IMailStateData {

        /**
         * Constructs a new MailStateData.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IMailStateData);

        /** MailStateData mailId. */
        public mailId: string;

        /** MailStateData haveRead. */
        public haveRead: boolean;

        /**
         * Decodes a MailStateData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailStateData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.MailStateData;
    }

    /** Properties of a GetMailStateListAck. */
    interface IGetMailStateListAck {

        /** GetMailStateListAck code */
        code?: (Server2Client.GetMailStateListAck.AckCode|null);

        /** GetMailStateListAck mailState */
        mailState?: (Server2Client.MailStateData[]|null);
    }

    /** Represents a GetMailStateListAck. */
    class GetMailStateListAck implements IGetMailStateListAck {

        /**
         * Constructs a new GetMailStateListAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IGetMailStateListAck);

        /** GetMailStateListAck code. */
        public code: Server2Client.GetMailStateListAck.AckCode;

        /** GetMailStateListAck mailState. */
        public mailState: Server2Client.MailStateData[];

        /**
         * Decodes a GetMailStateListAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GetMailStateListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.GetMailStateListAck;
    }

    namespace GetMailStateListAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Orleans_Fail = 2
        }
    }

    /** Properties of a LS2C_DailyMatch_UseItem. */
    interface ILS2C_DailyMatch_UseItem {

        /** LS2C_DailyMatch_UseItem ackCode */
        ackCode?: (Server2Client.LS2C_DailyMatch_UseItem.AckCode|null);

        /** LS2C_DailyMatch_UseItem matchData */
        matchData?: (string|null);
    }

    /** Represents a LS2C_DailyMatch_UseItem. */
    class LS2C_DailyMatch_UseItem implements ILS2C_DailyMatch_UseItem {

        /**
         * Constructs a new LS2C_DailyMatch_UseItem.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_DailyMatch_UseItem);

        /** LS2C_DailyMatch_UseItem ackCode. */
        public ackCode: Server2Client.LS2C_DailyMatch_UseItem.AckCode;

        /** LS2C_DailyMatch_UseItem matchData. */
        public matchData: string;

        /**
         * Decodes a LS2C_DailyMatch_UseItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_DailyMatch_UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_DailyMatch_UseItem;
    }

    namespace LS2C_DailyMatch_UseItem {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            InvalidToken = 3
        }
    }

    /** Properties of a LS2C_SetAdCodeAck. */
    interface ILS2C_SetAdCodeAck {

        /** LS2C_SetAdCodeAck code */
        code?: (Server2Client.LS2C_SetAdCodeAck.AckCode|null);

        /** LS2C_SetAdCodeAck adCode */
        adCode?: (string|null);
    }

    /** Represents a LS2C_SetAdCodeAck. */
    class LS2C_SetAdCodeAck implements ILS2C_SetAdCodeAck {

        /**
         * Constructs a new LS2C_SetAdCodeAck.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetAdCodeAck);

        /** LS2C_SetAdCodeAck code. */
        public code: Server2Client.LS2C_SetAdCodeAck.AckCode;

        /** LS2C_SetAdCodeAck adCode. */
        public adCode: string;

        /**
         * Decodes a LS2C_SetAdCodeAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetAdCodeAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetAdCodeAck;
    }

    namespace LS2C_SetAdCodeAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_GetAdCode. */
    interface ILS2C_GetAdCode {

        /** LS2C_GetAdCode code */
        code?: (Server2Client.LS2C_GetAdCode.AckCode|null);

        /** LS2C_GetAdCode adCode */
        adCode?: (string|null);
    }

    /** Represents a LS2C_GetAdCode. */
    class LS2C_GetAdCode implements ILS2C_GetAdCode {

        /**
         * Constructs a new LS2C_GetAdCode.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetAdCode);

        /** LS2C_GetAdCode code. */
        public code: Server2Client.LS2C_GetAdCode.AckCode;

        /** LS2C_GetAdCode adCode. */
        public adCode: string;

        /**
         * Decodes a LS2C_GetAdCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetAdCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetAdCode;
    }

    namespace LS2C_GetAdCode {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_UserBaseInfo_Ack. */
    interface ILS2C_UserBaseInfo_Ack {

        /** LS2C_UserBaseInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_UserBaseInfo_Ack.AckCode|null);

        /** LS2C_UserBaseInfo_Ack userInfo */
        userInfo?: (protocol.UserInfo|null);

        /** LS2C_UserBaseInfo_Ack functions */
        functions?: (number[]|null);
    }

    /** Represents a LS2C_UserBaseInfo_Ack. */
    class LS2C_UserBaseInfo_Ack implements ILS2C_UserBaseInfo_Ack {

        /**
         * Constructs a new LS2C_UserBaseInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_UserBaseInfo_Ack);

        /** LS2C_UserBaseInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_UserBaseInfo_Ack.AckCode;

        /** LS2C_UserBaseInfo_Ack userInfo. */
        public userInfo?: (protocol.UserInfo|null);

        /** LS2C_UserBaseInfo_Ack functions. */
        public functions: number[];

        /**
         * Decodes a LS2C_UserBaseInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_UserBaseInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_UserBaseInfo_Ack;
    }

    namespace LS2C_UserBaseInfo_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20010
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_StartGame_Ack. */
    interface ILS2C_StartGame_Ack {

        /** LS2C_StartGame_Ack ackCode */
        ackCode?: (Server2Client.LS2C_StartGame_Ack.AckCode|null);

        /** LS2C_StartGame_Ack gameToken */
        gameToken?: (string|null);

        /** LS2C_StartGame_Ack seeds */
        seeds?: (number[]|null);
    }

    /** Represents a LS2C_StartGame_Ack. */
    class LS2C_StartGame_Ack implements ILS2C_StartGame_Ack {

        /**
         * Constructs a new LS2C_StartGame_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_StartGame_Ack);

        /** LS2C_StartGame_Ack ackCode. */
        public ackCode: Server2Client.LS2C_StartGame_Ack.AckCode;

        /** LS2C_StartGame_Ack gameToken. */
        public gameToken: string;

        /** LS2C_StartGame_Ack seeds. */
        public seeds: number[];

        /**
         * Decodes a LS2C_StartGame_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_StartGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_StartGame_Ack;
    }

    namespace LS2C_StartGame_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyStart = 2,
            CountLimit = 3,
            Passed = 4,
            LevelError = 5
        }
    }

    /** Properties of a LS2C_EndGame_Ack. */
    interface ILS2C_EndGame_Ack {

        /** LS2C_EndGame_Ack ackCode */
        ackCode?: (Server2Client.LS2C_EndGame_Ack.AckCode|null);

        /** LS2C_EndGame_Ack dailyPassCount */
        dailyPassCount?: (number|null);

        /** LS2C_EndGame_Ack dailyGameCount */
        dailyGameCount?: (number|null);
    }

    /** Represents a LS2C_EndGame_Ack. */
    class LS2C_EndGame_Ack implements ILS2C_EndGame_Ack {

        /**
         * Constructs a new LS2C_EndGame_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_EndGame_Ack);

        /** LS2C_EndGame_Ack ackCode. */
        public ackCode: Server2Client.LS2C_EndGame_Ack.AckCode;

        /** LS2C_EndGame_Ack dailyPassCount. */
        public dailyPassCount: number;

        /** LS2C_EndGame_Ack dailyGameCount. */
        public dailyGameCount: number;

        /**
         * Decodes a LS2C_EndGame_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_EndGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_EndGame_Ack;
    }

    namespace LS2C_EndGame_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SetGuide_Ack. */
    interface ILS2C_SetGuide_Ack {

        /** LS2C_SetGuide_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SetGuide_Ack.AckCode|null);

        /** LS2C_SetGuide_Ack currGuide */
        currGuide?: (number|null);
    }

    /** Represents a LS2C_SetGuide_Ack. */
    class LS2C_SetGuide_Ack implements ILS2C_SetGuide_Ack {

        /**
         * Constructs a new LS2C_SetGuide_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetGuide_Ack);

        /** LS2C_SetGuide_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SetGuide_Ack.AckCode;

        /** LS2C_SetGuide_Ack currGuide. */
        public currGuide: number;

        /**
         * Decodes a LS2C_SetGuide_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetGuide_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetGuide_Ack;
    }

    namespace LS2C_SetGuide_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20013
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SetUserInfo_Ack. */
    interface ILS2C_SetUserInfo_Ack {

        /** LS2C_SetUserInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SetUserInfo_Ack.AckCode|null);
    }

    /** Represents a LS2C_SetUserInfo_Ack. */
    class LS2C_SetUserInfo_Ack implements ILS2C_SetUserInfo_Ack {

        /**
         * Constructs a new LS2C_SetUserInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetUserInfo_Ack);

        /** LS2C_SetUserInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SetUserInfo_Ack.AckCode;

        /**
         * Decodes a LS2C_SetUserInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetUserInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetUserInfo_Ack;
    }

    namespace LS2C_SetUserInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SetGuideFinish_Ack. */
    interface ILS2C_SetGuideFinish_Ack {

        /** LS2C_SetGuideFinish_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SetGuideFinish_Ack.AckCode|null);

        /** LS2C_SetGuideFinish_Ack guideStageId */
        guideStageId?: (number|null);
    }

    /** Represents a LS2C_SetGuideFinish_Ack. */
    class LS2C_SetGuideFinish_Ack implements ILS2C_SetGuideFinish_Ack {

        /**
         * Constructs a new LS2C_SetGuideFinish_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetGuideFinish_Ack);

        /** LS2C_SetGuideFinish_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SetGuideFinish_Ack.AckCode;

        /** LS2C_SetGuideFinish_Ack guideStageId. */
        public guideStageId: number;

        /**
         * Decodes a LS2C_SetGuideFinish_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetGuideFinish_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetGuideFinish_Ack;
    }

    namespace LS2C_SetGuideFinish_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20015
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SetNewbieFinish_Ack. */
    interface ILS2C_SetNewbieFinish_Ack {

        /** LS2C_SetNewbieFinish_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SetNewbieFinish_Ack.AckCode|null);
    }

    /** Represents a LS2C_SetNewbieFinish_Ack. */
    class LS2C_SetNewbieFinish_Ack implements ILS2C_SetNewbieFinish_Ack {

        /**
         * Constructs a new LS2C_SetNewbieFinish_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetNewbieFinish_Ack);

        /** LS2C_SetNewbieFinish_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SetNewbieFinish_Ack.AckCode;

        /**
         * Decodes a LS2C_SetNewbieFinish_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetNewbieFinish_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetNewbieFinish_Ack;
    }

    namespace LS2C_SetNewbieFinish_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ExtractAward_Ack. */
    interface ILS2C_ExtractAward_Ack {

        /** LS2C_ExtractAward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ExtractAward_Ack.AckCode|null);

        /** LS2C_ExtractAward_Ack rewardId */
        rewardId?: (number|null);

        /** LS2C_ExtractAward_Ack rewards */
        rewards?: (number[]|null);
    }

    /** Represents a LS2C_ExtractAward_Ack. */
    class LS2C_ExtractAward_Ack implements ILS2C_ExtractAward_Ack {

        /**
         * Constructs a new LS2C_ExtractAward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ExtractAward_Ack);

        /** LS2C_ExtractAward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ExtractAward_Ack.AckCode;

        /** LS2C_ExtractAward_Ack rewardId. */
        public rewardId: number;

        /** LS2C_ExtractAward_Ack rewards. */
        public rewards: number[];

        /**
         * Decodes a LS2C_ExtractAward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ExtractAward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ExtractAward_Ack;
    }

    namespace LS2C_ExtractAward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2
        }
    }

    /** Properties of a LS2C_SetUsedCollect_Ack. */
    interface ILS2C_SetUsedCollect_Ack {

        /** LS2C_SetUsedCollect_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SetUsedCollect_Ack.AckCode|null);

        /** LS2C_SetUsedCollect_Ack usedCollectId */
        usedCollectId?: (number|null);
    }

    /** Represents a LS2C_SetUsedCollect_Ack. */
    class LS2C_SetUsedCollect_Ack implements ILS2C_SetUsedCollect_Ack {

        /**
         * Constructs a new LS2C_SetUsedCollect_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetUsedCollect_Ack);

        /** LS2C_SetUsedCollect_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SetUsedCollect_Ack.AckCode;

        /** LS2C_SetUsedCollect_Ack usedCollectId. */
        public usedCollectId: number;

        /**
         * Decodes a LS2C_SetUsedCollect_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetUsedCollect_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetUsedCollect_Ack;
    }

    namespace LS2C_SetUsedCollect_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SetAuthorize_Ack. */
    interface ILS2C_SetAuthorize_Ack {

        /** LS2C_SetAuthorize_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SetAuthorize_Ack.AckCode|null);

        /** LS2C_SetAuthorize_Ack isAuthorized */
        isAuthorized?: (boolean|null);
    }

    /** Represents a LS2C_SetAuthorize_Ack. */
    class LS2C_SetAuthorize_Ack implements ILS2C_SetAuthorize_Ack {

        /**
         * Constructs a new LS2C_SetAuthorize_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SetAuthorize_Ack);

        /** LS2C_SetAuthorize_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SetAuthorize_Ack.AckCode;

        /** LS2C_SetAuthorize_Ack isAuthorized. */
        public isAuthorized: boolean;

        /**
         * Decodes a LS2C_SetAuthorize_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SetAuthorize_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SetAuthorize_Ack;
    }

    namespace LS2C_SetAuthorize_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_UpdateFuncStage_Ack. */
    interface ILS2C_UpdateFuncStage_Ack {

        /** LS2C_UpdateFuncStage_Ack ackCode */
        ackCode?: (Server2Client.LS2C_UpdateFuncStage_Ack.AckCode|null);

        /** LS2C_UpdateFuncStage_Ack funcUnlockStageId */
        funcUnlockStageId?: (number|null);
    }

    /** Represents a LS2C_UpdateFuncStage_Ack. */
    class LS2C_UpdateFuncStage_Ack implements ILS2C_UpdateFuncStage_Ack {

        /**
         * Constructs a new LS2C_UpdateFuncStage_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_UpdateFuncStage_Ack);

        /** LS2C_UpdateFuncStage_Ack ackCode. */
        public ackCode: Server2Client.LS2C_UpdateFuncStage_Ack.AckCode;

        /** LS2C_UpdateFuncStage_Ack funcUnlockStageId. */
        public funcUnlockStageId: number;

        /**
         * Decodes a LS2C_UpdateFuncStage_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_UpdateFuncStage_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_UpdateFuncStage_Ack;
    }

    namespace LS2C_UpdateFuncStage_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 20018
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_NoticeGamePassed_Ack. */
    interface ILS2C_NoticeGamePassed_Ack {

        /** LS2C_NoticeGamePassed_Ack ackCode */
        ackCode?: (Server2Client.LS2C_NoticeGamePassed_Ack.AckCode|null);

        /** LS2C_NoticeGamePassed_Ack items */
        items?: (common.Item[]|null);

        /** LS2C_NoticeGamePassed_Ack dailyPassCount */
        dailyPassCount?: (number|null);

        /** LS2C_NoticeGamePassed_Ack dailyGameCount */
        dailyGameCount?: (number|null);

        /** LS2C_NoticeGamePassed_Ack giftPrice */
        giftPrice?: (number|null);
    }

    /** Represents a LS2C_NoticeGamePassed_Ack. */
    class LS2C_NoticeGamePassed_Ack implements ILS2C_NoticeGamePassed_Ack {

        /**
         * Constructs a new LS2C_NoticeGamePassed_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_NoticeGamePassed_Ack);

        /** LS2C_NoticeGamePassed_Ack ackCode. */
        public ackCode: Server2Client.LS2C_NoticeGamePassed_Ack.AckCode;

        /** LS2C_NoticeGamePassed_Ack items. */
        public items: common.Item[];

        /** LS2C_NoticeGamePassed_Ack dailyPassCount. */
        public dailyPassCount: number;

        /** LS2C_NoticeGamePassed_Ack dailyGameCount. */
        public dailyGameCount: number;

        /** LS2C_NoticeGamePassed_Ack giftPrice. */
        public giftPrice: number;

        /**
         * Decodes a LS2C_NoticeGamePassed_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_NoticeGamePassed_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_NoticeGamePassed_Ack;
    }

    namespace LS2C_NoticeGamePassed_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            VerifyFail = 2,
            RepeatPass = 3
        }
    }

    /** Properties of a LS2C_InfiniteScore_Ack. */
    interface ILS2C_InfiniteScore_Ack {

        /** LS2C_InfiniteScore_Ack ackCode */
        ackCode?: (Server2Client.LS2C_InfiniteScore_Ack.AckCode|null);
    }

    /** Represents a LS2C_InfiniteScore_Ack. */
    class LS2C_InfiniteScore_Ack implements ILS2C_InfiniteScore_Ack {

        /**
         * Constructs a new LS2C_InfiniteScore_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_InfiniteScore_Ack);

        /** LS2C_InfiniteScore_Ack ackCode. */
        public ackCode: Server2Client.LS2C_InfiniteScore_Ack.AckCode;

        /**
         * Decodes a LS2C_InfiniteScore_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_InfiniteScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_InfiniteScore_Ack;
    }

    namespace LS2C_InfiniteScore_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_GetInfiniteRankList_Ack. */
    interface ILS2C_GetInfiniteRankList_Ack {

        /** LS2C_GetInfiniteRankList_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetInfiniteRankList_Ack.AckCode|null);

        /** LS2C_GetInfiniteRankList_Ack rankInfoList */
        rankInfoList?: (Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo[]|null);
    }

    /** Represents a LS2C_GetInfiniteRankList_Ack. */
    class LS2C_GetInfiniteRankList_Ack implements ILS2C_GetInfiniteRankList_Ack {

        /**
         * Constructs a new LS2C_GetInfiniteRankList_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetInfiniteRankList_Ack);

        /** LS2C_GetInfiniteRankList_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetInfiniteRankList_Ack.AckCode;

        /** LS2C_GetInfiniteRankList_Ack rankInfoList. */
        public rankInfoList: Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo[];

        /**
         * Decodes a LS2C_GetInfiniteRankList_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetInfiniteRankList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetInfiniteRankList_Ack;
    }

    namespace LS2C_GetInfiniteRankList_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }

        /** Properties of a RankInfo. */
        interface IRankInfo {

            /** RankInfo Uid */
            Uid?: (string|null);

            /** RankInfo Name */
            Name?: (string|null);

            /** RankInfo Avatar */
            Avatar?: (string|null);

            /** RankInfo Score */
            Score?: (number|null);

            /** RankInfo Rank */
            Rank?: (number|null);
        }

        /** Represents a RankInfo. */
        class RankInfo implements IRankInfo {

            /**
             * Constructs a new RankInfo.
             * @param [p] Properties to set
             */
            constructor(p?: Server2Client.LS2C_GetInfiniteRankList_Ack.IRankInfo);

            /** RankInfo Uid. */
            public Uid: string;

            /** RankInfo Name. */
            public Name: string;

            /** RankInfo Avatar. */
            public Avatar: string;

            /** RankInfo Score. */
            public Score: number;

            /** RankInfo Rank. */
            public Rank: number;

            /**
             * Decodes a RankInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns RankInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetInfiniteRankList_Ack.RankInfo;
        }
    }

    /** Properties of a LS2C_StatisticsAdd_Ack. */
    interface ILS2C_StatisticsAdd_Ack {

        /** LS2C_StatisticsAdd_Ack code */
        code?: (Server2Client.LS2C_StatisticsAdd_Ack.AckCode|null);
    }

    /** Represents a LS2C_StatisticsAdd_Ack. */
    class LS2C_StatisticsAdd_Ack implements ILS2C_StatisticsAdd_Ack {

        /**
         * Constructs a new LS2C_StatisticsAdd_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_StatisticsAdd_Ack);

        /** LS2C_StatisticsAdd_Ack code. */
        public code: Server2Client.LS2C_StatisticsAdd_Ack.AckCode;

        /**
         * Decodes a LS2C_StatisticsAdd_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_StatisticsAdd_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_StatisticsAdd_Ack;
    }

    namespace LS2C_StatisticsAdd_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_StatisticsGet_Ack. */
    interface ILS2C_StatisticsGet_Ack {

        /** LS2C_StatisticsGet_Ack code */
        code?: (Server2Client.LS2C_StatisticsGet_Ack.AckCode|null);

        /** LS2C_StatisticsGet_Ack totalAdNum */
        totalAdNum?: (number|null);
    }

    /** Represents a LS2C_StatisticsGet_Ack. */
    class LS2C_StatisticsGet_Ack implements ILS2C_StatisticsGet_Ack {

        /**
         * Constructs a new LS2C_StatisticsGet_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_StatisticsGet_Ack);

        /** LS2C_StatisticsGet_Ack code. */
        public code: Server2Client.LS2C_StatisticsGet_Ack.AckCode;

        /** LS2C_StatisticsGet_Ack totalAdNum. */
        public totalAdNum: number;

        /**
         * Decodes a LS2C_StatisticsGet_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_StatisticsGet_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_StatisticsGet_Ack;
    }

    namespace LS2C_StatisticsGet_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ShareCountGet_Ack. */
    interface ILS2C_ShareCountGet_Ack {

        /** LS2C_ShareCountGet_Ack code */
        code?: (Server2Client.LS2C_ShareCountGet_Ack.AckCode|null);

        /** LS2C_ShareCountGet_Ack itemCountMap */
        itemCountMap?: ({ [k: string]: number }|null);
    }

    /** Represents a LS2C_ShareCountGet_Ack. */
    class LS2C_ShareCountGet_Ack implements ILS2C_ShareCountGet_Ack {

        /**
         * Constructs a new LS2C_ShareCountGet_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ShareCountGet_Ack);

        /** LS2C_ShareCountGet_Ack code. */
        public code: Server2Client.LS2C_ShareCountGet_Ack.AckCode;

        /** LS2C_ShareCountGet_Ack itemCountMap. */
        public itemCountMap: { [k: string]: number };

        /**
         * Decodes a LS2C_ShareCountGet_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ShareCountGet_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShareCountGet_Ack;
    }

    namespace LS2C_ShareCountGet_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ShareCountSet_Ack. */
    interface ILS2C_ShareCountSet_Ack {

        /** LS2C_ShareCountSet_Ack code */
        code?: (Server2Client.LS2C_ShareCountSet_Ack.AckCode|null);
    }

    /** Represents a LS2C_ShareCountSet_Ack. */
    class LS2C_ShareCountSet_Ack implements ILS2C_ShareCountSet_Ack {

        /**
         * Constructs a new LS2C_ShareCountSet_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ShareCountSet_Ack);

        /** LS2C_ShareCountSet_Ack code. */
        public code: Server2Client.LS2C_ShareCountSet_Ack.AckCode;

        /**
         * Decodes a LS2C_ShareCountSet_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ShareCountSet_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShareCountSet_Ack;
    }

    namespace LS2C_ShareCountSet_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of an ItemInfo. */
    interface IItemInfo {

        /** ItemInfo itemId */
        itemId?: (number|null);

        /** ItemInfo createTime */
        createTime?: (Long|null);

        /** ItemInfo isNew */
        isNew?: (boolean|null);

        /** ItemInfo reason */
        reason?: (string|null);

        /** ItemInfo uid */
        uid?: (string|null);
    }

    /** Represents an ItemInfo. */
    class ItemInfo implements IItemInfo {

        /**
         * Constructs a new ItemInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IItemInfo);

        /** ItemInfo itemId. */
        public itemId: number;

        /** ItemInfo createTime. */
        public createTime: Long;

        /** ItemInfo isNew. */
        public isNew: boolean;

        /** ItemInfo reason. */
        public reason: string;

        /** ItemInfo uid. */
        public uid: string;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.ItemInfo;
    }

    /** Properties of a SkinCollection. */
    interface ISkinCollection {

        /** SkinCollection skins */
        skins?: (Server2Client.ItemInfo[]|null);
    }

    /** Represents a SkinCollection. */
    class SkinCollection implements ISkinCollection {

        /**
         * Constructs a new SkinCollection.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ISkinCollection);

        /** SkinCollection skins. */
        public skins: Server2Client.ItemInfo[];

        /**
         * Decodes a SkinCollection message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SkinCollection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.SkinCollection;
    }

    /** Properties of a LS2C_GetDressUpInfo_Ack. */
    interface ILS2C_GetDressUpInfo_Ack {

        /** LS2C_GetDressUpInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetDressUpInfo_Ack.AckCode|null);

        /** LS2C_GetDressUpInfo_Ack usingSkin */
        usingSkin?: ({ [k: string]: number }|null);

        /** LS2C_GetDressUpInfo_Ack skinCollection */
        skinCollection?: ({ [k: string]: Server2Client.SkinCollection }|null);
    }

    /** Represents a LS2C_GetDressUpInfo_Ack. */
    class LS2C_GetDressUpInfo_Ack implements ILS2C_GetDressUpInfo_Ack {

        /**
         * Constructs a new LS2C_GetDressUpInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetDressUpInfo_Ack);

        /** LS2C_GetDressUpInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetDressUpInfo_Ack.AckCode;

        /** LS2C_GetDressUpInfo_Ack usingSkin. */
        public usingSkin: { [k: string]: number };

        /** LS2C_GetDressUpInfo_Ack skinCollection. */
        public skinCollection: { [k: string]: Server2Client.SkinCollection };

        /**
         * Decodes a LS2C_GetDressUpInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetDressUpInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDressUpInfo_Ack;
    }

    namespace LS2C_GetDressUpInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ViewSkins_Ack. */
    interface ILS2C_ViewSkins_Ack {

        /** LS2C_ViewSkins_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ViewSkins_Ack.AckCode|null);
    }

    /** Represents a LS2C_ViewSkins_Ack. */
    class LS2C_ViewSkins_Ack implements ILS2C_ViewSkins_Ack {

        /**
         * Constructs a new LS2C_ViewSkins_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ViewSkins_Ack);

        /** LS2C_ViewSkins_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ViewSkins_Ack.AckCode;

        /**
         * Decodes a LS2C_ViewSkins_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ViewSkins_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ViewSkins_Ack;
    }

    namespace LS2C_ViewSkins_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SkinDressUp_Ack. */
    interface ILS2C_SkinDressUp_Ack {

        /** LS2C_SkinDressUp_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SkinDressUp_Ack.AckCode|null);
    }

    /** Represents a LS2C_SkinDressUp_Ack. */
    class LS2C_SkinDressUp_Ack implements ILS2C_SkinDressUp_Ack {

        /**
         * Constructs a new LS2C_SkinDressUp_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SkinDressUp_Ack);

        /** LS2C_SkinDressUp_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SkinDressUp_Ack.AckCode;

        /**
         * Decodes a LS2C_SkinDressUp_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SkinDressUp_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SkinDressUp_Ack;
    }

    namespace LS2C_SkinDressUp_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            WrongPos = 2
        }
    }

    /** Properties of a LS2C_GetDailyLevelData_Ack. */
    interface ILS2C_GetDailyLevelData_Ack {

        /** LS2C_GetDailyLevelData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetDailyLevelData_Ack.AckCode|null);

        /** LS2C_GetDailyLevelData_Ack levelId */
        levelId?: (number|null);

        /** LS2C_GetDailyLevelData_Ack levelData */
        levelData?: (Server2Client.LS2C_GetDailyLevelData_Ack.LevelData[]|null);

        /** LS2C_GetDailyLevelData_Ack displayMode */
        displayMode?: (number|null);
    }

    /** Represents a LS2C_GetDailyLevelData_Ack. */
    class LS2C_GetDailyLevelData_Ack implements ILS2C_GetDailyLevelData_Ack {

        /**
         * Constructs a new LS2C_GetDailyLevelData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetDailyLevelData_Ack);

        /** LS2C_GetDailyLevelData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetDailyLevelData_Ack.AckCode;

        /** LS2C_GetDailyLevelData_Ack levelId. */
        public levelId: number;

        /** LS2C_GetDailyLevelData_Ack levelData. */
        public levelData: Server2Client.LS2C_GetDailyLevelData_Ack.LevelData[];

        /** LS2C_GetDailyLevelData_Ack displayMode. */
        public displayMode: number;

        /**
         * Decodes a LS2C_GetDailyLevelData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetDailyLevelData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDailyLevelData_Ack;
    }

    namespace LS2C_GetDailyLevelData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2
        }

        /** Properties of a LevelData. */
        interface ILevelData {

            /** LevelData progressId */
            progressId?: (number|null);

            /** LevelData stageId */
            stageId?: (number|null);

            /** LevelData stepId */
            stepId?: (number|null);

            /** LevelData score */
            score?: (number|null);

            /** LevelData iconId */
            iconId?: (string|null);

            /** LevelData audioStep */
            audioStep?: (number|null);
        }

        /** Represents a LevelData. */
        class LevelData implements ILevelData {

            /**
             * Constructs a new LevelData.
             * @param [p] Properties to set
             */
            constructor(p?: Server2Client.LS2C_GetDailyLevelData_Ack.ILevelData);

            /** LevelData progressId. */
            public progressId: number;

            /** LevelData stageId. */
            public stageId: number;

            /** LevelData stepId. */
            public stepId: number;

            /** LevelData score. */
            public score: number;

            /** LevelData iconId. */
            public iconId: string;

            /** LevelData audioStep. */
            public audioStep: number;

            /**
             * Decodes a LevelData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns LevelData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDailyLevelData_Ack.LevelData;
        }
    }

    /** Properties of a LS2C_GetDailyLevelList_Ack. */
    interface ILS2C_GetDailyLevelList_Ack {

        /** LS2C_GetDailyLevelList_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetDailyLevelList_Ack.AckCode|null);

        /** LS2C_GetDailyLevelList_Ack levelData */
        levelData?: (Server2Client.DailyLevelData[]|null);
    }

    /** Represents a LS2C_GetDailyLevelList_Ack. */
    class LS2C_GetDailyLevelList_Ack implements ILS2C_GetDailyLevelList_Ack {

        /**
         * Constructs a new LS2C_GetDailyLevelList_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetDailyLevelList_Ack);

        /** LS2C_GetDailyLevelList_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetDailyLevelList_Ack.AckCode;

        /** LS2C_GetDailyLevelList_Ack levelData. */
        public levelData: Server2Client.DailyLevelData[];

        /**
         * Decodes a LS2C_GetDailyLevelList_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetDailyLevelList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDailyLevelList_Ack;
    }

    namespace LS2C_GetDailyLevelList_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2
        }
    }

    /** Properties of a DailyLevelData. */
    interface IDailyLevelData {

        /** DailyLevelData levelId */
        levelId?: (number|null);

        /** DailyLevelData displayMode */
        displayMode?: (number|null);

        /** DailyLevelData levelData */
        levelData?: (Server2Client.DailyLevelData.LevelBaseData[]|null);

        /** DailyLevelData designer */
        designer?: (number|null);

        /** DailyLevelData score */
        score?: (number|null);

        /** DailyLevelData type */
        type?: (number|null);
    }

    /** Represents a DailyLevelData. */
    class DailyLevelData implements IDailyLevelData {

        /**
         * Constructs a new DailyLevelData.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IDailyLevelData);

        /** DailyLevelData levelId. */
        public levelId: number;

        /** DailyLevelData displayMode. */
        public displayMode: number;

        /** DailyLevelData levelData. */
        public levelData: Server2Client.DailyLevelData.LevelBaseData[];

        /** DailyLevelData designer. */
        public designer: number;

        /** DailyLevelData score. */
        public score: number;

        /** DailyLevelData type. */
        public type: number;

        /**
         * Decodes a DailyLevelData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DailyLevelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.DailyLevelData;
    }

    namespace DailyLevelData {

        /** Properties of a LevelBaseData. */
        interface ILevelBaseData {

            /** LevelBaseData progressId */
            progressId?: (number|null);

            /** LevelBaseData stageId */
            stageId?: (number|null);

            /** LevelBaseData stepId */
            stepId?: (number|null);

            /** LevelBaseData score */
            score?: (number|null);

            /** LevelBaseData iconId */
            iconId?: (string|null);

            /** LevelBaseData audioStep */
            audioStep?: (number|null);

            /** LevelBaseData stageWeights */
            stageWeights?: (number[]|null);
        }

        /** Represents a LevelBaseData. */
        class LevelBaseData implements ILevelBaseData {

            /**
             * Constructs a new LevelBaseData.
             * @param [p] Properties to set
             */
            constructor(p?: Server2Client.DailyLevelData.ILevelBaseData);

            /** LevelBaseData progressId. */
            public progressId: number;

            /** LevelBaseData stageId. */
            public stageId: number;

            /** LevelBaseData stepId. */
            public stepId: number;

            /** LevelBaseData score. */
            public score: number;

            /** LevelBaseData iconId. */
            public iconId: string;

            /** LevelBaseData audioStep. */
            public audioStep: number;

            /** LevelBaseData stageWeights. */
            public stageWeights: number[];

            /**
             * Decodes a LevelBaseData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns LevelBaseData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.DailyLevelData.LevelBaseData;
        }
    }

    /** Properties of a LS2C_SyncGameData_Ack. */
    interface ILS2C_SyncGameData_Ack {

        /** LS2C_SyncGameData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SyncGameData_Ack.AckCode|null);

        /** LS2C_SyncGameData_Ack maxStep */
        maxStep?: (number|null);
    }

    /** Represents a LS2C_SyncGameData_Ack. */
    class LS2C_SyncGameData_Ack implements ILS2C_SyncGameData_Ack {

        /**
         * Constructs a new LS2C_SyncGameData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SyncGameData_Ack);

        /** LS2C_SyncGameData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SyncGameData_Ack.AckCode;

        /** LS2C_SyncGameData_Ack maxStep. */
        public maxStep: number;

        /**
         * Decodes a LS2C_SyncGameData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SyncGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SyncGameData_Ack;
    }

    namespace LS2C_SyncGameData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoMatch = 2,
            StepError = 3,
            StepExist = 4
        }
    }

    /** Properties of a LS2C_RestartGame_Ack. */
    interface ILS2C_RestartGame_Ack {

        /** LS2C_RestartGame_Ack ackCode */
        ackCode?: (Server2Client.LS2C_RestartGame_Ack.AckCode|null);

        /** LS2C_RestartGame_Ack matchInfo */
        matchInfo?: (string|null);

        /** LS2C_RestartGame_Ack seeds */
        seeds?: (number[]|null);
    }

    /** Represents a LS2C_RestartGame_Ack. */
    class LS2C_RestartGame_Ack implements ILS2C_RestartGame_Ack {

        /**
         * Constructs a new LS2C_RestartGame_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_RestartGame_Ack);

        /** LS2C_RestartGame_Ack ackCode. */
        public ackCode: Server2Client.LS2C_RestartGame_Ack.AckCode;

        /** LS2C_RestartGame_Ack matchInfo. */
        public matchInfo: string;

        /** LS2C_RestartGame_Ack seeds. */
        public seeds: number[];

        /**
         * Decodes a LS2C_RestartGame_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_RestartGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_RestartGame_Ack;
    }

    namespace LS2C_RestartGame_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoExist = 2
        }
    }

    /** Properties of a LS2C_StartEndless_Ack. */
    interface ILS2C_StartEndless_Ack {

        /** LS2C_StartEndless_Ack ackCode */
        ackCode?: (Server2Client.LS2C_StartEndless_Ack.AckCode|null);

        /** LS2C_StartEndless_Ack gameToken */
        gameToken?: (string|null);

        /** LS2C_StartEndless_Ack seeds */
        seeds?: (number[]|null);

        /** LS2C_StartEndless_Ack scores */
        scores?: ({ [k: string]: number }|null);
    }

    /** Represents a LS2C_StartEndless_Ack. */
    class LS2C_StartEndless_Ack implements ILS2C_StartEndless_Ack {

        /**
         * Constructs a new LS2C_StartEndless_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_StartEndless_Ack);

        /** LS2C_StartEndless_Ack ackCode. */
        public ackCode: Server2Client.LS2C_StartEndless_Ack.AckCode;

        /** LS2C_StartEndless_Ack gameToken. */
        public gameToken: string;

        /** LS2C_StartEndless_Ack seeds. */
        public seeds: number[];

        /** LS2C_StartEndless_Ack scores. */
        public scores: { [k: string]: number };

        /**
         * Decodes a LS2C_StartEndless_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_StartEndless_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_StartEndless_Ack;
    }

    namespace LS2C_StartEndless_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyStart = 2,
            CountLimit = 3
        }
    }

    /** Properties of a LS2C_RestartEndless_Ack. */
    interface ILS2C_RestartEndless_Ack {

        /** LS2C_RestartEndless_Ack ackCode */
        ackCode?: (Server2Client.LS2C_RestartEndless_Ack.AckCode|null);

        /** LS2C_RestartEndless_Ack matchInfo */
        matchInfo?: (string|null);

        /** LS2C_RestartEndless_Ack gameToken */
        gameToken?: (string|null);

        /** LS2C_RestartEndless_Ack seeds */
        seeds?: (number[]|null);

        /** LS2C_RestartEndless_Ack isCrossActivity */
        isCrossActivity?: (boolean|null);

        /** LS2C_RestartEndless_Ack scores */
        scores?: ({ [k: string]: number }|null);
    }

    /** Represents a LS2C_RestartEndless_Ack. */
    class LS2C_RestartEndless_Ack implements ILS2C_RestartEndless_Ack {

        /**
         * Constructs a new LS2C_RestartEndless_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_RestartEndless_Ack);

        /** LS2C_RestartEndless_Ack ackCode. */
        public ackCode: Server2Client.LS2C_RestartEndless_Ack.AckCode;

        /** LS2C_RestartEndless_Ack matchInfo. */
        public matchInfo: string;

        /** LS2C_RestartEndless_Ack gameToken. */
        public gameToken: string;

        /** LS2C_RestartEndless_Ack seeds. */
        public seeds: number[];

        /** LS2C_RestartEndless_Ack isCrossActivity. */
        public isCrossActivity: boolean;

        /** LS2C_RestartEndless_Ack scores. */
        public scores: { [k: string]: number };

        /**
         * Decodes a LS2C_RestartEndless_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_RestartEndless_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_RestartEndless_Ack;
    }

    namespace LS2C_RestartEndless_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoExist = 2,
            Expired = 3
        }
    }

    /** Properties of a LS2C_EndlessGameOver_Ack. */
    interface ILS2C_EndlessGameOver_Ack {

        /** LS2C_EndlessGameOver_Ack ackCode */
        ackCode?: (Server2Client.LS2C_EndlessGameOver_Ack.AckCode|null);

        /** LS2C_EndlessGameOver_Ack score */
        score?: (number|null);

        /** LS2C_EndlessGameOver_Ack maxScore */
        maxScore?: (number|null);

        /** LS2C_EndlessGameOver_Ack startTime */
        startTime?: (Long|null);

        /** LS2C_EndlessGameOver_Ack payslip */
        payslip?: (protocol.Payslip|null);

        /** LS2C_EndlessGameOver_Ack beyond */
        beyond?: (number|null);
    }

    /** Represents a LS2C_EndlessGameOver_Ack. */
    class LS2C_EndlessGameOver_Ack implements ILS2C_EndlessGameOver_Ack {

        /**
         * Constructs a new LS2C_EndlessGameOver_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_EndlessGameOver_Ack);

        /** LS2C_EndlessGameOver_Ack ackCode. */
        public ackCode: Server2Client.LS2C_EndlessGameOver_Ack.AckCode;

        /** LS2C_EndlessGameOver_Ack score. */
        public score: number;

        /** LS2C_EndlessGameOver_Ack maxScore. */
        public maxScore: number;

        /** LS2C_EndlessGameOver_Ack startTime. */
        public startTime: Long;

        /** LS2C_EndlessGameOver_Ack payslip. */
        public payslip?: (protocol.Payslip|null);

        /** LS2C_EndlessGameOver_Ack beyond. */
        public beyond: number;

        /**
         * Decodes a LS2C_EndlessGameOver_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_EndlessGameOver_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_EndlessGameOver_Ack;
    }

    namespace LS2C_EndlessGameOver_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            VerifyFail = 2
        }
    }

    /** Properties of a LS2C_SettleSalary_Ack. */
    interface ILS2C_SettleSalary_Ack {

        /** LS2C_SettleSalary_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SettleSalary_Ack.AckCode|null);

        /** LS2C_SettleSalary_Ack payslip */
        payslip?: (protocol.Payslip|null);
    }

    /** Represents a LS2C_SettleSalary_Ack. */
    class LS2C_SettleSalary_Ack implements ILS2C_SettleSalary_Ack {

        /**
         * Constructs a new LS2C_SettleSalary_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SettleSalary_Ack);

        /** LS2C_SettleSalary_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SettleSalary_Ack.AckCode;

        /** LS2C_SettleSalary_Ack payslip. */
        public payslip?: (protocol.Payslip|null);

        /**
         * Decodes a LS2C_SettleSalary_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SettleSalary_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SettleSalary_Ack;
    }

    namespace LS2C_SettleSalary_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ShopInfo_Ack. */
    interface ILS2C_ShopInfo_Ack {

        /** LS2C_ShopInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ShopInfo_Ack.AckCode|null);

        /** LS2C_ShopInfo_Ack buyCount */
        buyCount?: (number|null);

        /** LS2C_ShopInfo_Ack maxBuyCount */
        maxBuyCount?: (number|null);

        /** LS2C_ShopInfo_Ack refreshCount */
        refreshCount?: (number|null);

        /** LS2C_ShopInfo_Ack maxRefreshCount */
        maxRefreshCount?: (number|null);

        /** LS2C_ShopInfo_Ack shopItemList */
        shopItemList?: (Server2Client.LS2C_ShopInfo_Ack.ShopItem[]|null);
    }

    /** Represents a LS2C_ShopInfo_Ack. */
    class LS2C_ShopInfo_Ack implements ILS2C_ShopInfo_Ack {

        /**
         * Constructs a new LS2C_ShopInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ShopInfo_Ack);

        /** LS2C_ShopInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ShopInfo_Ack.AckCode;

        /** LS2C_ShopInfo_Ack buyCount. */
        public buyCount: number;

        /** LS2C_ShopInfo_Ack maxBuyCount. */
        public maxBuyCount: number;

        /** LS2C_ShopInfo_Ack refreshCount. */
        public refreshCount: number;

        /** LS2C_ShopInfo_Ack maxRefreshCount. */
        public maxRefreshCount: number;

        /** LS2C_ShopInfo_Ack shopItemList. */
        public shopItemList: Server2Client.LS2C_ShopInfo_Ack.ShopItem[];

        /**
         * Decodes a LS2C_ShopInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ShopInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShopInfo_Ack;
    }

    namespace LS2C_ShopInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            SoldOut = 2
        }

        /** Properties of a ShopItem. */
        interface IShopItem {

            /** ShopItem itemId */
            itemId?: (number|null);

            /** ShopItem price */
            price?: (number|null);

            /** ShopItem isBought */
            isBought?: (boolean|null);
        }

        /** Represents a ShopItem. */
        class ShopItem implements IShopItem {

            /**
             * Constructs a new ShopItem.
             * @param [p] Properties to set
             */
            constructor(p?: Server2Client.LS2C_ShopInfo_Ack.IShopItem);

            /** ShopItem itemId. */
            public itemId: number;

            /** ShopItem price. */
            public price: number;

            /** ShopItem isBought. */
            public isBought: boolean;

            /**
             * Decodes a ShopItem message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ShopItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShopInfo_Ack.ShopItem;
        }
    }

    /** Properties of a LS2C_ShopRefresh_Ack. */
    interface ILS2C_ShopRefresh_Ack {

        /** LS2C_ShopRefresh_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ShopRefresh_Ack.AckCode|null);
    }

    /** Represents a LS2C_ShopRefresh_Ack. */
    class LS2C_ShopRefresh_Ack implements ILS2C_ShopRefresh_Ack {

        /**
         * Constructs a new LS2C_ShopRefresh_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ShopRefresh_Ack);

        /** LS2C_ShopRefresh_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ShopRefresh_Ack.AckCode;

        /**
         * Decodes a LS2C_ShopRefresh_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ShopRefresh_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShopRefresh_Ack;
    }

    namespace LS2C_ShopRefresh_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            LessRefreshCount = 2
        }
    }

    /** Properties of a LS2C_ShopBuy_Ack. */
    interface ILS2C_ShopBuy_Ack {

        /** LS2C_ShopBuy_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ShopBuy_Ack.AckCode|null);

        /** LS2C_ShopBuy_Ack itemInfo */
        itemInfo?: (Server2Client.ItemInfo|null);

        /** LS2C_ShopBuy_Ack coin */
        coin?: (Long|null);
    }

    /** Represents a LS2C_ShopBuy_Ack. */
    class LS2C_ShopBuy_Ack implements ILS2C_ShopBuy_Ack {

        /**
         * Constructs a new LS2C_ShopBuy_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ShopBuy_Ack);

        /** LS2C_ShopBuy_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ShopBuy_Ack.AckCode;

        /** LS2C_ShopBuy_Ack itemInfo. */
        public itemInfo?: (Server2Client.ItemInfo|null);

        /** LS2C_ShopBuy_Ack coin. */
        public coin: Long;

        /**
         * Decodes a LS2C_ShopBuy_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ShopBuy_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShopBuy_Ack;
    }

    namespace LS2C_ShopBuy_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            LessBuyCount = 2,
            LessCoin = 3,
            LessItem = 4
        }
    }

    /** Properties of a LS2C_RequestGameData_Ack. */
    interface ILS2C_RequestGameData_Ack {

        /** LS2C_RequestGameData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_RequestGameData_Ack.AckCode|null);

        /** LS2C_RequestGameData_Ack dailyGameInfo */
        dailyGameInfo?: (protocol.DailyGameMsg|null);

        /** LS2C_RequestGameData_Ack endlessGameInfo */
        endlessGameInfo?: (protocol.EndlessGameMsg|null);

        /** LS2C_RequestGameData_Ack syncStep */
        syncStep?: (number|null);
    }

    /** Represents a LS2C_RequestGameData_Ack. */
    class LS2C_RequestGameData_Ack implements ILS2C_RequestGameData_Ack {

        /**
         * Constructs a new LS2C_RequestGameData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_RequestGameData_Ack);

        /** LS2C_RequestGameData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_RequestGameData_Ack.AckCode;

        /** LS2C_RequestGameData_Ack dailyGameInfo. */
        public dailyGameInfo?: (protocol.DailyGameMsg|null);

        /** LS2C_RequestGameData_Ack endlessGameInfo. */
        public endlessGameInfo?: (protocol.EndlessGameMsg|null);

        /** LS2C_RequestGameData_Ack syncStep. */
        public syncStep: number;

        /**
         * Decodes a LS2C_RequestGameData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_RequestGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_RequestGameData_Ack;
    }

    namespace LS2C_RequestGameData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_SyncEndlessGameData_Ack. */
    interface ILS2C_SyncEndlessGameData_Ack {

        /** LS2C_SyncEndlessGameData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SyncEndlessGameData_Ack.AckCode|null);

        /** LS2C_SyncEndlessGameData_Ack maxStep */
        maxStep?: (number|null);
    }

    /** Represents a LS2C_SyncEndlessGameData_Ack. */
    class LS2C_SyncEndlessGameData_Ack implements ILS2C_SyncEndlessGameData_Ack {

        /**
         * Constructs a new LS2C_SyncEndlessGameData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SyncEndlessGameData_Ack);

        /** LS2C_SyncEndlessGameData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SyncEndlessGameData_Ack.AckCode;

        /** LS2C_SyncEndlessGameData_Ack maxStep. */
        public maxStep: number;

        /**
         * Decodes a LS2C_SyncEndlessGameData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SyncEndlessGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SyncEndlessGameData_Ack;
    }

    namespace LS2C_SyncEndlessGameData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoMatch = 2,
            StepError = 3,
            StepExist = 4,
            VerifyFail = 5,
            NotTodayGame = 6
        }
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo userBaseInfo */
        userBaseInfo?: (protocol.UserBaseInfo|null);

        /** RoomInfo payslip */
        payslip?: (protocol.Payslip|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IRoomInfo);

        /** RoomInfo userBaseInfo. */
        public userBaseInfo?: (protocol.UserBaseInfo|null);

        /** RoomInfo payslip. */
        public payslip?: (protocol.Payslip|null);

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.RoomInfo;
    }

    /** Properties of a LS2C_GetRoomInfo_Ack. */
    interface ILS2C_GetRoomInfo_Ack {

        /** LS2C_GetRoomInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetRoomInfo_Ack.AckCode|null);

        /** LS2C_GetRoomInfo_Ack romeList */
        romeList?: (Server2Client.RoomInfo[]|null);

        /** LS2C_GetRoomInfo_Ack newUnlockRoomCount */
        newUnlockRoomCount?: (number|null);
    }

    /** Represents a LS2C_GetRoomInfo_Ack. */
    class LS2C_GetRoomInfo_Ack implements ILS2C_GetRoomInfo_Ack {

        /**
         * Constructs a new LS2C_GetRoomInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetRoomInfo_Ack);

        /** LS2C_GetRoomInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetRoomInfo_Ack.AckCode;

        /** LS2C_GetRoomInfo_Ack romeList. */
        public romeList: Server2Client.RoomInfo[];

        /** LS2C_GetRoomInfo_Ack newUnlockRoomCount. */
        public newUnlockRoomCount: number;

        /**
         * Decodes a LS2C_GetRoomInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetRoomInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetRoomInfo_Ack;
    }

    namespace LS2C_GetRoomInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ShareJoinRoom_Ack. */
    interface ILS2C_ShareJoinRoom_Ack {

        /** LS2C_ShareJoinRoom_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ShareJoinRoom_Ack.AckCode|null);
    }

    /** Represents a LS2C_ShareJoinRoom_Ack. */
    class LS2C_ShareJoinRoom_Ack implements ILS2C_ShareJoinRoom_Ack {

        /**
         * Constructs a new LS2C_ShareJoinRoom_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ShareJoinRoom_Ack);

        /** LS2C_ShareJoinRoom_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ShareJoinRoom_Ack.AckCode;

        /**
         * Decodes a LS2C_ShareJoinRoom_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ShareJoinRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ShareJoinRoom_Ack;
    }

    namespace LS2C_ShareJoinRoom_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_RemoveMember_Ack. */
    interface ILS2C_RemoveMember_Ack {

        /** LS2C_RemoveMember_Ack ackCode */
        ackCode?: (Server2Client.LS2C_RemoveMember_Ack.AckCode|null);
    }

    /** Represents a LS2C_RemoveMember_Ack. */
    class LS2C_RemoveMember_Ack implements ILS2C_RemoveMember_Ack {

        /**
         * Constructs a new LS2C_RemoveMember_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_RemoveMember_Ack);

        /** LS2C_RemoveMember_Ack ackCode. */
        public ackCode: Server2Client.LS2C_RemoveMember_Ack.AckCode;

        /**
         * Decodes a LS2C_RemoveMember_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_RemoveMember_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_RemoveMember_Ack;
    }

    namespace LS2C_RemoveMember_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_GetFriendIncome_Ack. */
    interface ILS2C_GetFriendIncome_Ack {

        /** LS2C_GetFriendIncome_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetFriendIncome_Ack.AckCode|null);

        /** LS2C_GetFriendIncome_Ack coins */
        coins?: (number|null);

        /** LS2C_GetFriendIncome_Ack totalCoins */
        totalCoins?: (Long|null);
    }

    /** Represents a LS2C_GetFriendIncome_Ack. */
    class LS2C_GetFriendIncome_Ack implements ILS2C_GetFriendIncome_Ack {

        /**
         * Constructs a new LS2C_GetFriendIncome_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetFriendIncome_Ack);

        /** LS2C_GetFriendIncome_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetFriendIncome_Ack.AckCode;

        /** LS2C_GetFriendIncome_Ack coins. */
        public coins: number;

        /** LS2C_GetFriendIncome_Ack totalCoins. */
        public totalCoins: Long;

        /**
         * Decodes a LS2C_GetFriendIncome_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetFriendIncome_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetFriendIncome_Ack;
    }

    namespace LS2C_GetFriendIncome_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_GetSettleSalary_Ack. */
    interface ILS2C_GetSettleSalary_Ack {

        /** LS2C_GetSettleSalary_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetSettleSalary_Ack.AckCode|null);

        /** LS2C_GetSettleSalary_Ack coins */
        coins?: (number|null);

        /** LS2C_GetSettleSalary_Ack totalCoins */
        totalCoins?: (Long|null);
    }

    /** Represents a LS2C_GetSettleSalary_Ack. */
    class LS2C_GetSettleSalary_Ack implements ILS2C_GetSettleSalary_Ack {

        /**
         * Constructs a new LS2C_GetSettleSalary_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetSettleSalary_Ack);

        /** LS2C_GetSettleSalary_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetSettleSalary_Ack.AckCode;

        /** LS2C_GetSettleSalary_Ack coins. */
        public coins: number;

        /** LS2C_GetSettleSalary_Ack totalCoins. */
        public totalCoins: Long;

        /**
         * Decodes a LS2C_GetSettleSalary_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetSettleSalary_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetSettleSalary_Ack;
    }

    namespace LS2C_GetSettleSalary_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_BuyExtraGift_Ack. */
    interface ILS2C_BuyExtraGift_Ack {

        /** LS2C_BuyExtraGift_Ack ackCode */
        ackCode?: (Server2Client.LS2C_BuyExtraGift_Ack.AckCode|null);

        /** LS2C_BuyExtraGift_Ack items */
        items?: (Server2Client.ItemInfo[]|null);

        /** LS2C_BuyExtraGift_Ack totalCoins */
        totalCoins?: (Long|null);
    }

    /** Represents a LS2C_BuyExtraGift_Ack. */
    class LS2C_BuyExtraGift_Ack implements ILS2C_BuyExtraGift_Ack {

        /**
         * Constructs a new LS2C_BuyExtraGift_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_BuyExtraGift_Ack);

        /** LS2C_BuyExtraGift_Ack ackCode. */
        public ackCode: Server2Client.LS2C_BuyExtraGift_Ack.AckCode;

        /** LS2C_BuyExtraGift_Ack items. */
        public items: Server2Client.ItemInfo[];

        /** LS2C_BuyExtraGift_Ack totalCoins. */
        public totalCoins: Long;

        /**
         * Decodes a LS2C_BuyExtraGift_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_BuyExtraGift_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_BuyExtraGift_Ack;
    }

    namespace LS2C_BuyExtraGift_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotEnough = 2,
            NoHaveGift = 3,
            PriceErr = 4
        }
    }

    /** Properties of a LS2C_GetWeekReward_Ack. */
    interface ILS2C_GetWeekReward_Ack {

        /** LS2C_GetWeekReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetWeekReward_Ack.AckCode|null);

        /** LS2C_GetWeekReward_Ack items */
        items?: (Server2Client.ItemInfo[]|null);

        /** LS2C_GetWeekReward_Ack awards */
        awards?: (common.Item[]|null);
    }

    /** Represents a LS2C_GetWeekReward_Ack. */
    class LS2C_GetWeekReward_Ack implements ILS2C_GetWeekReward_Ack {

        /**
         * Constructs a new LS2C_GetWeekReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetWeekReward_Ack);

        /** LS2C_GetWeekReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetWeekReward_Ack.AckCode;

        /** LS2C_GetWeekReward_Ack items. */
        public items: Server2Client.ItemInfo[];

        /** LS2C_GetWeekReward_Ack awards. */
        public awards: common.Item[];

        /**
         * Decodes a LS2C_GetWeekReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetWeekReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetWeekReward_Ack;
    }

    namespace LS2C_GetWeekReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyGot = 2,
            NotInActivity = 3,
            InvalidScore = 4
        }
    }

    /** Properties of a LS2C_GetWeekRewardData_Ack. */
    interface ILS2C_GetWeekRewardData_Ack {

        /** LS2C_GetWeekRewardData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetWeekRewardData_Ack.AckCode|null);

        /** LS2C_GetWeekRewardData_Ack stageAward */
        stageAward?: (Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward[]|null);

        /** LS2C_GetWeekRewardData_Ack lastStageAward */
        lastStageAward?: (Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward[]|null);

        /** LS2C_GetWeekRewardData_Ack designer */
        designer?: (number|null);

        /** LS2C_GetWeekRewardData_Ack scores */
        scores?: ({ [k: string]: number }|null);

        /** LS2C_GetWeekRewardData_Ack isCrossActivity */
        isCrossActivity?: (boolean|null);
    }

    /** Represents a LS2C_GetWeekRewardData_Ack. */
    class LS2C_GetWeekRewardData_Ack implements ILS2C_GetWeekRewardData_Ack {

        /**
         * Constructs a new LS2C_GetWeekRewardData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetWeekRewardData_Ack);

        /** LS2C_GetWeekRewardData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetWeekRewardData_Ack.AckCode;

        /** LS2C_GetWeekRewardData_Ack stageAward. */
        public stageAward: Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward[];

        /** LS2C_GetWeekRewardData_Ack lastStageAward. */
        public lastStageAward: Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward[];

        /** LS2C_GetWeekRewardData_Ack designer. */
        public designer: number;

        /** LS2C_GetWeekRewardData_Ack scores. */
        public scores: { [k: string]: number };

        /** LS2C_GetWeekRewardData_Ack isCrossActivity. */
        public isCrossActivity: boolean;

        /**
         * Decodes a LS2C_GetWeekRewardData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetWeekRewardData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetWeekRewardData_Ack;
    }

    namespace LS2C_GetWeekRewardData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2
        }

        /** Properties of an EndlessStageAward. */
        interface IEndlessStageAward {

            /** EndlessStageAward score */
            score?: (number|null);

            /** EndlessStageAward awardId */
            awardId?: (number|null);

            /** EndlessStageAward isReceived */
            isReceived?: (boolean|null);

            /** EndlessStageAward count */
            count?: (number|null);
        }

        /** Represents an EndlessStageAward. */
        class EndlessStageAward implements IEndlessStageAward {

            /**
             * Constructs a new EndlessStageAward.
             * @param [p] Properties to set
             */
            constructor(p?: Server2Client.LS2C_GetWeekRewardData_Ack.IEndlessStageAward);

            /** EndlessStageAward score. */
            public score: number;

            /** EndlessStageAward awardId. */
            public awardId: number;

            /** EndlessStageAward isReceived. */
            public isReceived: boolean;

            /** EndlessStageAward count. */
            public count: number;

            /**
             * Decodes an EndlessStageAward message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns EndlessStageAward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetWeekRewardData_Ack.EndlessStageAward;
        }
    }

    /** Properties of a LS2C_StartNewbieGame_Ack. */
    interface ILS2C_StartNewbieGame_Ack {

        /** LS2C_StartNewbieGame_Ack ackCode */
        ackCode?: (Server2Client.LS2C_StartNewbieGame_Ack.AckCode|null);

        /** LS2C_StartNewbieGame_Ack seeds */
        seeds?: (number[]|null);
    }

    /** Represents a LS2C_StartNewbieGame_Ack. */
    class LS2C_StartNewbieGame_Ack implements ILS2C_StartNewbieGame_Ack {

        /**
         * Constructs a new LS2C_StartNewbieGame_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_StartNewbieGame_Ack);

        /** LS2C_StartNewbieGame_Ack ackCode. */
        public ackCode: Server2Client.LS2C_StartNewbieGame_Ack.AckCode;

        /** LS2C_StartNewbieGame_Ack seeds. */
        public seeds: number[];

        /**
         * Decodes a LS2C_StartNewbieGame_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_StartNewbieGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_StartNewbieGame_Ack;
    }

    namespace LS2C_StartNewbieGame_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Passed = 2
        }
    }

    /** Properties of a LS2C_EndNewbieGame_Ack. */
    interface ILS2C_EndNewbieGame_Ack {

        /** LS2C_EndNewbieGame_Ack ackCode */
        ackCode?: (Server2Client.LS2C_EndNewbieGame_Ack.AckCode|null);

        /** LS2C_EndNewbieGame_Ack items */
        items?: (common.Item[]|null);
    }

    /** Represents a LS2C_EndNewbieGame_Ack. */
    class LS2C_EndNewbieGame_Ack implements ILS2C_EndNewbieGame_Ack {

        /**
         * Constructs a new LS2C_EndNewbieGame_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_EndNewbieGame_Ack);

        /** LS2C_EndNewbieGame_Ack ackCode. */
        public ackCode: Server2Client.LS2C_EndNewbieGame_Ack.AckCode;

        /** LS2C_EndNewbieGame_Ack items. */
        public items: common.Item[];

        /**
         * Decodes a LS2C_EndNewbieGame_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_EndNewbieGame_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_EndNewbieGame_Ack;
    }

    namespace LS2C_EndNewbieGame_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_GetAllServerBroadcastUsers_Ack. */
    interface ILS2C_GetAllServerBroadcastUsers_Ack {

        /** LS2C_GetAllServerBroadcastUsers_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.AckCode|null);

        /** LS2C_GetAllServerBroadcastUsers_Ack users */
        users?: (Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser[]|null);
    }

    /** Represents a LS2C_GetAllServerBroadcastUsers_Ack. */
    class LS2C_GetAllServerBroadcastUsers_Ack implements ILS2C_GetAllServerBroadcastUsers_Ack {

        /**
         * Constructs a new LS2C_GetAllServerBroadcastUsers_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetAllServerBroadcastUsers_Ack);

        /** LS2C_GetAllServerBroadcastUsers_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.AckCode;

        /** LS2C_GetAllServerBroadcastUsers_Ack users. */
        public users: Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser[];

        /**
         * Decodes a LS2C_GetAllServerBroadcastUsers_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetAllServerBroadcastUsers_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetAllServerBroadcastUsers_Ack;
    }

    namespace LS2C_GetAllServerBroadcastUsers_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }

        /** Properties of a NoticeUser. */
        interface INoticeUser {

            /** NoticeUser Name */
            Name?: (string|null);

            /** NoticeUser Avatar */
            Avatar?: (string|null);

            /** NoticeUser Score */
            Score?: (number|null);
        }

        /** Represents a NoticeUser. */
        class NoticeUser implements INoticeUser {

            /**
             * Constructs a new NoticeUser.
             * @param [p] Properties to set
             */
            constructor(p?: Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.INoticeUser);

            /** NoticeUser Name. */
            public Name: string;

            /** NoticeUser Avatar. */
            public Avatar: string;

            /** NoticeUser Score. */
            public Score: number;

            /**
             * Decodes a NoticeUser message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns NoticeUser
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetAllServerBroadcastUsers_Ack.NoticeUser;
        }
    }

    /** Properties of a LS2C_GetDailyLevelDataOrder_Ack. */
    interface ILS2C_GetDailyLevelDataOrder_Ack {

        /** LS2C_GetDailyLevelDataOrder_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetDailyLevelDataOrder_Ack.AckCode|null);

        /** LS2C_GetDailyLevelDataOrder_Ack levelData */
        levelData?: (Server2Client.DailyLevelData[]|null);
    }

    /** Represents a LS2C_GetDailyLevelDataOrder_Ack. */
    class LS2C_GetDailyLevelDataOrder_Ack implements ILS2C_GetDailyLevelDataOrder_Ack {

        /**
         * Constructs a new LS2C_GetDailyLevelDataOrder_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetDailyLevelDataOrder_Ack);

        /** LS2C_GetDailyLevelDataOrder_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetDailyLevelDataOrder_Ack.AckCode;

        /** LS2C_GetDailyLevelDataOrder_Ack levelData. */
        public levelData: Server2Client.DailyLevelData[];

        /**
         * Decodes a LS2C_GetDailyLevelDataOrder_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetDailyLevelDataOrder_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDailyLevelDataOrder_Ack;
    }

    namespace LS2C_GetDailyLevelDataOrder_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2
        }
    }

    /** Properties of a LS2C_GetDailyMatchRoomData_Ack. */
    interface ILS2C_GetDailyMatchRoomData_Ack {

        /** LS2C_GetDailyMatchRoomData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetDailyMatchRoomData_Ack.AckCode|null);

        /** LS2C_GetDailyMatchRoomData_Ack roomId */
        roomId?: (string|null);

        /** LS2C_GetDailyMatchRoomData_Ack isSettle */
        isSettle?: (boolean|null);

        /** LS2C_GetDailyMatchRoomData_Ack bonusPool */
        bonusPool?: (number|null);

        /** LS2C_GetDailyMatchRoomData_Ack players */
        players?: (common.MatchRoomPlayerInfo[]|null);

        /** LS2C_GetDailyMatchRoomData_Ack coins */
        coins?: (Long|null);
    }

    /** Represents a LS2C_GetDailyMatchRoomData_Ack. */
    class LS2C_GetDailyMatchRoomData_Ack implements ILS2C_GetDailyMatchRoomData_Ack {

        /**
         * Constructs a new LS2C_GetDailyMatchRoomData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetDailyMatchRoomData_Ack);

        /** LS2C_GetDailyMatchRoomData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetDailyMatchRoomData_Ack.AckCode;

        /** LS2C_GetDailyMatchRoomData_Ack roomId. */
        public roomId: string;

        /** LS2C_GetDailyMatchRoomData_Ack isSettle. */
        public isSettle: boolean;

        /** LS2C_GetDailyMatchRoomData_Ack bonusPool. */
        public bonusPool: number;

        /** LS2C_GetDailyMatchRoomData_Ack players. */
        public players: common.MatchRoomPlayerInfo[];

        /** LS2C_GetDailyMatchRoomData_Ack coins. */
        public coins: Long;

        /**
         * Decodes a LS2C_GetDailyMatchRoomData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetDailyMatchRoomData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDailyMatchRoomData_Ack;
    }

    namespace LS2C_GetDailyMatchRoomData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2,
            NotInRoom = 3
        }
    }

    /** Properties of a LS2C_GetDailyRaceScore_Ack. */
    interface ILS2C_GetDailyRaceScore_Ack {

        /** LS2C_GetDailyRaceScore_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetDailyRaceScore_Ack.AckCode|null);

        /** LS2C_GetDailyRaceScore_Ack score */
        score?: (number|null);
    }

    /** Represents a LS2C_GetDailyRaceScore_Ack. */
    class LS2C_GetDailyRaceScore_Ack implements ILS2C_GetDailyRaceScore_Ack {

        /**
         * Constructs a new LS2C_GetDailyRaceScore_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetDailyRaceScore_Ack);

        /** LS2C_GetDailyRaceScore_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetDailyRaceScore_Ack.AckCode;

        /** LS2C_GetDailyRaceScore_Ack score. */
        public score: number;

        /**
         * Decodes a LS2C_GetDailyRaceScore_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetDailyRaceScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetDailyRaceScore_Ack;
    }

    namespace LS2C_GetDailyRaceScore_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInRoom = 2
        }
    }

    /** Properties of a LS2C_JumpBind_Ack. */
    interface ILS2C_JumpBind_Ack {

        /** LS2C_JumpBind_Ack ackCode */
        ackCode?: (Server2Client.LS2C_JumpBind_Ack.AckCode|null);

        /** LS2C_JumpBind_Ack item */
        item?: (common.Item[]|null);
    }

    /** Represents a LS2C_JumpBind_Ack. */
    class LS2C_JumpBind_Ack implements ILS2C_JumpBind_Ack {

        /**
         * Constructs a new LS2C_JumpBind_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_JumpBind_Ack);

        /** LS2C_JumpBind_Ack ackCode. */
        public ackCode: Server2Client.LS2C_JumpBind_Ack.AckCode;

        /** LS2C_JumpBind_Ack item. */
        public item: common.Item[];

        /**
         * Decodes a LS2C_JumpBind_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_JumpBind_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_JumpBind_Ack;
    }

    namespace LS2C_JumpBind_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyBind = 2,
            ActivityNotOpen = 3
        }
    }

    /** Properties of a LS2C_GetPersonalInfo_Ack. */
    interface ILS2C_GetPersonalInfo_Ack {

        /** LS2C_GetPersonalInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetPersonalInfo_Ack.AckCode|null);

        /** LS2C_GetPersonalInfo_Ack userBaseInfo */
        userBaseInfo?: (protocol.UserBaseInfo|null);
    }

    /** Represents a LS2C_GetPersonalInfo_Ack. */
    class LS2C_GetPersonalInfo_Ack implements ILS2C_GetPersonalInfo_Ack {

        /**
         * Constructs a new LS2C_GetPersonalInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetPersonalInfo_Ack);

        /** LS2C_GetPersonalInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetPersonalInfo_Ack.AckCode;

        /** LS2C_GetPersonalInfo_Ack userBaseInfo. */
        public userBaseInfo?: (protocol.UserBaseInfo|null);

        /**
         * Decodes a LS2C_GetPersonalInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetPersonalInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetPersonalInfo_Ack;
    }

    namespace LS2C_GetPersonalInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a MoonCakeRewardInfo. */
    interface IMoonCakeRewardInfo {

        /** MoonCakeRewardInfo rewardId */
        rewardId?: (number|null);

        /** MoonCakeRewardInfo rewardCount */
        rewardCount?: (number|null);

        /** MoonCakeRewardInfo isClaimed */
        isClaimed?: (boolean|null);

        /** MoonCakeRewardInfo requireCount */
        requireCount?: (number|null);
    }

    /** Represents a MoonCakeRewardInfo. */
    class MoonCakeRewardInfo implements IMoonCakeRewardInfo {

        /**
         * Constructs a new MoonCakeRewardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.IMoonCakeRewardInfo);

        /** MoonCakeRewardInfo rewardId. */
        public rewardId: number;

        /** MoonCakeRewardInfo rewardCount. */
        public rewardCount: number;

        /** MoonCakeRewardInfo isClaimed. */
        public isClaimed: boolean;

        /** MoonCakeRewardInfo requireCount. */
        public requireCount: number;

        /**
         * Decodes a MoonCakeRewardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MoonCakeRewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.MoonCakeRewardInfo;
    }

    /** Properties of a LS2C_CollectMoonCake_Ack. */
    interface ILS2C_CollectMoonCake_Ack {

        /** LS2C_CollectMoonCake_Ack ackCode */
        ackCode?: (Server2Client.LS2C_CollectMoonCake_Ack.AckCode|null);

        /** LS2C_CollectMoonCake_Ack collectedCount */
        collectedCount?: (number|null);

        /** LS2C_CollectMoonCake_Ack dailyCount */
        dailyCount?: (number|null);

        /** LS2C_CollectMoonCake_Ack totalCount */
        totalCount?: (number|null);
    }

    /** Represents a LS2C_CollectMoonCake_Ack. */
    class LS2C_CollectMoonCake_Ack implements ILS2C_CollectMoonCake_Ack {

        /**
         * Constructs a new LS2C_CollectMoonCake_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_CollectMoonCake_Ack);

        /** LS2C_CollectMoonCake_Ack ackCode. */
        public ackCode: Server2Client.LS2C_CollectMoonCake_Ack.AckCode;

        /** LS2C_CollectMoonCake_Ack collectedCount. */
        public collectedCount: number;

        /** LS2C_CollectMoonCake_Ack dailyCount. */
        public dailyCount: number;

        /** LS2C_CollectMoonCake_Ack totalCount. */
        public totalCount: number;

        /**
         * Decodes a LS2C_CollectMoonCake_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_CollectMoonCake_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_CollectMoonCake_Ack;
    }

    namespace LS2C_CollectMoonCake_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            EventNotActive = 2,
            CountLimit = 3
        }
    }

    /** Properties of a LS2C_ClaimMoonCakeReward_Ack. */
    interface ILS2C_ClaimMoonCakeReward_Ack {

        /** LS2C_ClaimMoonCakeReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ClaimMoonCakeReward_Ack.AckCode|null);

        /** LS2C_ClaimMoonCakeReward_Ack awards */
        awards?: (common.Item[]|null);
    }

    /** Represents a LS2C_ClaimMoonCakeReward_Ack. */
    class LS2C_ClaimMoonCakeReward_Ack implements ILS2C_ClaimMoonCakeReward_Ack {

        /**
         * Constructs a new LS2C_ClaimMoonCakeReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ClaimMoonCakeReward_Ack);

        /** LS2C_ClaimMoonCakeReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ClaimMoonCakeReward_Ack.AckCode;

        /** LS2C_ClaimMoonCakeReward_Ack awards. */
        public awards: common.Item[];

        /**
         * Decodes a LS2C_ClaimMoonCakeReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ClaimMoonCakeReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ClaimMoonCakeReward_Ack;
    }

    namespace LS2C_ClaimMoonCakeReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            EventNotActive = 2,
            InvalidReward = 3,
            NotEnoughMoonCakes = 4,
            AlreadyClaimed = 5
        }
    }

    /** Properties of a LS2C_GetMoonCakeEventInfo_Ack. */
    interface ILS2C_GetMoonCakeEventInfo_Ack {

        /** LS2C_GetMoonCakeEventInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetMoonCakeEventInfo_Ack.AckCode|null);

        /** LS2C_GetMoonCakeEventInfo_Ack activityId */
        activityId?: (number|null);

        /** LS2C_GetMoonCakeEventInfo_Ack collectedCount */
        collectedCount?: (number|null);

        /** LS2C_GetMoonCakeEventInfo_Ack dailyCount */
        dailyCount?: (number|null);

        /** LS2C_GetMoonCakeEventInfo_Ack totalCount */
        totalCount?: (number|null);

        /** LS2C_GetMoonCakeEventInfo_Ack rewards */
        rewards?: (Server2Client.MoonCakeRewardInfo[]|null);
    }

    /** Represents a LS2C_GetMoonCakeEventInfo_Ack. */
    class LS2C_GetMoonCakeEventInfo_Ack implements ILS2C_GetMoonCakeEventInfo_Ack {

        /**
         * Constructs a new LS2C_GetMoonCakeEventInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetMoonCakeEventInfo_Ack);

        /** LS2C_GetMoonCakeEventInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetMoonCakeEventInfo_Ack.AckCode;

        /** LS2C_GetMoonCakeEventInfo_Ack activityId. */
        public activityId: number;

        /** LS2C_GetMoonCakeEventInfo_Ack collectedCount. */
        public collectedCount: number;

        /** LS2C_GetMoonCakeEventInfo_Ack dailyCount. */
        public dailyCount: number;

        /** LS2C_GetMoonCakeEventInfo_Ack totalCount. */
        public totalCount: number;

        /** LS2C_GetMoonCakeEventInfo_Ack rewards. */
        public rewards: Server2Client.MoonCakeRewardInfo[];

        /**
         * Decodes a LS2C_GetMoonCakeEventInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetMoonCakeEventInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetMoonCakeEventInfo_Ack;
    }

    namespace LS2C_GetMoonCakeEventInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            EventNotActive = 2,
            DataError = 3
        }
    }

    /** Properties of a LS2C_GetMissionList_Ack. */
    interface ILS2C_GetMissionList_Ack {

        /** LS2C_GetMissionList_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetMissionList_Ack.AckCode|null);

        /** LS2C_GetMissionList_Ack missionList */
        missionList?: (common.MissionDataMsg[]|null);

        /** LS2C_GetMissionList_Ack configReward */
        configReward?: (common.MissionTypeReward[]|null);

        /** LS2C_GetMissionList_Ack awards */
        awards?: (common.Item[]|null);
    }

    /** Represents a LS2C_GetMissionList_Ack. */
    class LS2C_GetMissionList_Ack implements ILS2C_GetMissionList_Ack {

        /**
         * Constructs a new LS2C_GetMissionList_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetMissionList_Ack);

        /** LS2C_GetMissionList_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetMissionList_Ack.AckCode;

        /** LS2C_GetMissionList_Ack missionList. */
        public missionList: common.MissionDataMsg[];

        /** LS2C_GetMissionList_Ack configReward. */
        public configReward: common.MissionTypeReward[];

        /** LS2C_GetMissionList_Ack awards. */
        public awards: common.Item[];

        /**
         * Decodes a LS2C_GetMissionList_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetMissionList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetMissionList_Ack;
    }

    namespace LS2C_GetMissionList_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a LS2C_ClaimVideoReward_Ack. */
    interface ILS2C_ClaimVideoReward_Ack {

        /** LS2C_ClaimVideoReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ClaimVideoReward_Ack.AckCode|null);

        /** LS2C_ClaimVideoReward_Ack rewards */
        rewards?: (common.Item[]|null);
    }

    /** Represents a LS2C_ClaimVideoReward_Ack. */
    class LS2C_ClaimVideoReward_Ack implements ILS2C_ClaimVideoReward_Ack {

        /**
         * Constructs a new LS2C_ClaimVideoReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ClaimVideoReward_Ack);

        /** LS2C_ClaimVideoReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ClaimVideoReward_Ack.AckCode;

        /** LS2C_ClaimVideoReward_Ack rewards. */
        public rewards: common.Item[];

        /**
         * Decodes a LS2C_ClaimVideoReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ClaimVideoReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ClaimVideoReward_Ack;
    }

    namespace LS2C_ClaimVideoReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ArgsError = 2
        }
    }

    /** Properties of a LS2C_GetWxChallengeReward_Ack. */
    interface ILS2C_GetWxChallengeReward_Ack {

        /** LS2C_GetWxChallengeReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetWxChallengeReward_Ack.AckCode|null);

        /** LS2C_GetWxChallengeReward_Ack coin */
        coin?: (Long|null);

        /** LS2C_GetWxChallengeReward_Ack rewards */
        rewards?: (common.PlatformGift[]|null);
    }

    /** Represents a LS2C_GetWxChallengeReward_Ack. */
    class LS2C_GetWxChallengeReward_Ack implements ILS2C_GetWxChallengeReward_Ack {

        /**
         * Constructs a new LS2C_GetWxChallengeReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetWxChallengeReward_Ack);

        /** LS2C_GetWxChallengeReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetWxChallengeReward_Ack.AckCode;

        /** LS2C_GetWxChallengeReward_Ack coin. */
        public coin: Long;

        /** LS2C_GetWxChallengeReward_Ack rewards. */
        public rewards: common.PlatformGift[];

        /**
         * Decodes a LS2C_GetWxChallengeReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetWxChallengeReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetWxChallengeReward_Ack;
    }

    namespace LS2C_GetWxChallengeReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoPermission = 2,
            CountLimit = 3,
            NotOpen = 4
        }
    }

    /** Properties of a LS2C_GetWxPushReward_Ack. */
    interface ILS2C_GetWxPushReward_Ack {

        /** LS2C_GetWxPushReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetWxPushReward_Ack.AckCode|null);

        /** LS2C_GetWxPushReward_Ack giftIdType */
        giftIdType?: (common.EWxGiftIdType|null);

        /** LS2C_GetWxPushReward_Ack coin */
        coin?: (Long|null);

        /** LS2C_GetWxPushReward_Ack rewards */
        rewards?: (common.Item[]|null);
    }

    /** Represents a LS2C_GetWxPushReward_Ack. */
    class LS2C_GetWxPushReward_Ack implements ILS2C_GetWxPushReward_Ack {

        /**
         * Constructs a new LS2C_GetWxPushReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetWxPushReward_Ack);

        /** LS2C_GetWxPushReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetWxPushReward_Ack.AckCode;

        /** LS2C_GetWxPushReward_Ack giftIdType. */
        public giftIdType: common.EWxGiftIdType;

        /** LS2C_GetWxPushReward_Ack coin. */
        public coin: Long;

        /** LS2C_GetWxPushReward_Ack rewards. */
        public rewards: common.Item[];

        /**
         * Decodes a LS2C_GetWxPushReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetWxPushReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetWxPushReward_Ack;
    }

    namespace LS2C_GetWxPushReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoPermission = 2,
            CountLimit = 3,
            NotOpen = 4,
            AlreadyGet = 5
        }
    }

    /** Properties of a LS2C_GetStoryModeInfo_Ack. */
    interface ILS2C_GetStoryModeInfo_Ack {

        /** LS2C_GetStoryModeInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_GetStoryModeInfo_Ack.AckCode|null);

        /** LS2C_GetStoryModeInfo_Ack totalCount */
        totalCount?: (number|null);

        /** LS2C_GetStoryModeInfo_Ack dailyCount */
        dailyCount?: (number|null);

        /** LS2C_GetStoryModeInfo_Ack currentChapter */
        currentChapter?: (number|null);

        /** LS2C_GetStoryModeInfo_Ack isCrossActivity */
        isCrossActivity?: (boolean|null);

        /** LS2C_GetStoryModeInfo_Ack stageAward */
        stageAward?: (common.StoryModeRewardMsg[]|null);

        /** LS2C_GetStoryModeInfo_Ack unlockedChapters */
        unlockedChapters?: (common.ChapterDataMsg[]|null);

        /** LS2C_GetStoryModeInfo_Ack levelAvatar */
        levelAvatar?: (number|null);
    }

    /** Represents a LS2C_GetStoryModeInfo_Ack. */
    class LS2C_GetStoryModeInfo_Ack implements ILS2C_GetStoryModeInfo_Ack {

        /**
         * Constructs a new LS2C_GetStoryModeInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_GetStoryModeInfo_Ack);

        /** LS2C_GetStoryModeInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_GetStoryModeInfo_Ack.AckCode;

        /** LS2C_GetStoryModeInfo_Ack totalCount. */
        public totalCount: number;

        /** LS2C_GetStoryModeInfo_Ack dailyCount. */
        public dailyCount: number;

        /** LS2C_GetStoryModeInfo_Ack currentChapter. */
        public currentChapter: number;

        /** LS2C_GetStoryModeInfo_Ack isCrossActivity. */
        public isCrossActivity: boolean;

        /** LS2C_GetStoryModeInfo_Ack stageAward. */
        public stageAward: common.StoryModeRewardMsg[];

        /** LS2C_GetStoryModeInfo_Ack unlockedChapters. */
        public unlockedChapters: common.ChapterDataMsg[];

        /** LS2C_GetStoryModeInfo_Ack levelAvatar. */
        public levelAvatar: number;

        /**
         * Decodes a LS2C_GetStoryModeInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_GetStoryModeInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_GetStoryModeInfo_Ack;
    }

    namespace LS2C_GetStoryModeInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ChapterLocked = 2,
            NotInActivity = 3
        }
    }

    /** Properties of a LS2C_StartStoryLevel_Ack. */
    interface ILS2C_StartStoryLevel_Ack {

        /** LS2C_StartStoryLevel_Ack ackCode */
        ackCode?: (Server2Client.LS2C_StartStoryLevel_Ack.AckCode|null);

        /** LS2C_StartStoryLevel_Ack gameToken */
        gameToken?: (string|null);
    }

    /** Represents a LS2C_StartStoryLevel_Ack. */
    class LS2C_StartStoryLevel_Ack implements ILS2C_StartStoryLevel_Ack {

        /**
         * Constructs a new LS2C_StartStoryLevel_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_StartStoryLevel_Ack);

        /** LS2C_StartStoryLevel_Ack ackCode. */
        public ackCode: Server2Client.LS2C_StartStoryLevel_Ack.AckCode;

        /** LS2C_StartStoryLevel_Ack gameToken. */
        public gameToken: string;

        /**
         * Decodes a LS2C_StartStoryLevel_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_StartStoryLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_StartStoryLevel_Ack;
    }

    namespace LS2C_StartStoryLevel_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            ChapterLocked = 2,
            NotInActivity = 3
        }
    }

    /** Properties of a LS2C_CompleteStoryLevel_Ack. */
    interface ILS2C_CompleteStoryLevel_Ack {

        /** LS2C_CompleteStoryLevel_Ack ackCode */
        ackCode?: (Server2Client.LS2C_CompleteStoryLevel_Ack.AckCode|null);

        /** LS2C_CompleteStoryLevel_Ack unlockedChapters */
        unlockedChapters?: (common.ChapterDataMsg[]|null);
    }

    /** Represents a LS2C_CompleteStoryLevel_Ack. */
    class LS2C_CompleteStoryLevel_Ack implements ILS2C_CompleteStoryLevel_Ack {

        /**
         * Constructs a new LS2C_CompleteStoryLevel_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_CompleteStoryLevel_Ack);

        /** LS2C_CompleteStoryLevel_Ack ackCode. */
        public ackCode: Server2Client.LS2C_CompleteStoryLevel_Ack.AckCode;

        /** LS2C_CompleteStoryLevel_Ack unlockedChapters. */
        public unlockedChapters: common.ChapterDataMsg[];

        /**
         * Decodes a LS2C_CompleteStoryLevel_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_CompleteStoryLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_CompleteStoryLevel_Ack;
    }

    namespace LS2C_CompleteStoryLevel_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyUnlocked = 2,
            NotInActivity = 3
        }
    }

    /** Properties of a LS2C_CollectStoryModeItem_Ack. */
    interface ILS2C_CollectStoryModeItem_Ack {

        /** LS2C_CollectStoryModeItem_Ack ackCode */
        ackCode?: (Server2Client.LS2C_CollectStoryModeItem_Ack.AckCode|null);

        /** LS2C_CollectStoryModeItem_Ack collectedCount */
        collectedCount?: (number|null);

        /** LS2C_CollectStoryModeItem_Ack totalCount */
        totalCount?: (number|null);

        /** LS2C_CollectStoryModeItem_Ack dailyCount */
        dailyCount?: (number|null);
    }

    /** Represents a LS2C_CollectStoryModeItem_Ack. */
    class LS2C_CollectStoryModeItem_Ack implements ILS2C_CollectStoryModeItem_Ack {

        /**
         * Constructs a new LS2C_CollectStoryModeItem_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_CollectStoryModeItem_Ack);

        /** LS2C_CollectStoryModeItem_Ack ackCode. */
        public ackCode: Server2Client.LS2C_CollectStoryModeItem_Ack.AckCode;

        /** LS2C_CollectStoryModeItem_Ack collectedCount. */
        public collectedCount: number;

        /** LS2C_CollectStoryModeItem_Ack totalCount. */
        public totalCount: number;

        /** LS2C_CollectStoryModeItem_Ack dailyCount. */
        public dailyCount: number;

        /**
         * Decodes a LS2C_CollectStoryModeItem_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_CollectStoryModeItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_CollectStoryModeItem_Ack;
    }

    namespace LS2C_CollectStoryModeItem_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInActivity = 2,
            CountLimit = 3
        }
    }

    /** Properties of a LS2C_ClaimStoryReward_Ack. */
    interface ILS2C_ClaimStoryReward_Ack {

        /** LS2C_ClaimStoryReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_ClaimStoryReward_Ack.AckCode|null);

        /** LS2C_ClaimStoryReward_Ack rewards */
        rewards?: (common.Item[]|null);
    }

    /** Represents a LS2C_ClaimStoryReward_Ack. */
    class LS2C_ClaimStoryReward_Ack implements ILS2C_ClaimStoryReward_Ack {

        /**
         * Constructs a new LS2C_ClaimStoryReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_ClaimStoryReward_Ack);

        /** LS2C_ClaimStoryReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_ClaimStoryReward_Ack.AckCode;

        /** LS2C_ClaimStoryReward_Ack rewards. */
        public rewards: common.Item[];

        /**
         * Decodes a LS2C_ClaimStoryReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_ClaimStoryReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_ClaimStoryReward_Ack;
    }

    namespace LS2C_ClaimStoryReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyClaimed = 2,
            NotEnoughPoints = 3,
            NotInActivity = 4
        }
    }

    /** Properties of a LS2C_PK_StartMatch_Ack. */
    interface ILS2C_PK_StartMatch_Ack {

        /** LS2C_PK_StartMatch_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_StartMatch_Ack.AckCode|null);

        /** LS2C_PK_StartMatch_Ack matchToken */
        matchToken?: (string|null);

        /** LS2C_PK_StartMatch_Ack seeds */
        seeds?: (number[]|null);

        /** LS2C_PK_StartMatch_Ack roomData */
        roomData?: (common.RoomMatchData|null);
    }

    /** Represents a LS2C_PK_StartMatch_Ack. */
    class LS2C_PK_StartMatch_Ack implements ILS2C_PK_StartMatch_Ack {

        /**
         * Constructs a new LS2C_PK_StartMatch_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_StartMatch_Ack);

        /** LS2C_PK_StartMatch_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_StartMatch_Ack.AckCode;

        /** LS2C_PK_StartMatch_Ack matchToken. */
        public matchToken: string;

        /** LS2C_PK_StartMatch_Ack seeds. */
        public seeds: number[];

        /** LS2C_PK_StartMatch_Ack roomData. */
        public roomData?: (common.RoomMatchData|null);

        /**
         * Decodes a LS2C_PK_StartMatch_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_StartMatch_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_StartMatch_Ack;
    }

    namespace LS2C_PK_StartMatch_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            InMatch = 2
        }
    }

    /** Properties of a LS2C_PK_GetMatchState_Ack. */
    interface ILS2C_PK_GetMatchState_Ack {

        /** LS2C_PK_GetMatchState_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_GetMatchState_Ack.AckCode|null);

        /** LS2C_PK_GetMatchState_Ack roomData */
        roomData?: (common.RoomMatchData|null);
    }

    /** Represents a LS2C_PK_GetMatchState_Ack. */
    class LS2C_PK_GetMatchState_Ack implements ILS2C_PK_GetMatchState_Ack {

        /**
         * Constructs a new LS2C_PK_GetMatchState_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_GetMatchState_Ack);

        /** LS2C_PK_GetMatchState_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_GetMatchState_Ack.AckCode;

        /** LS2C_PK_GetMatchState_Ack roomData. */
        public roomData?: (common.RoomMatchData|null);

        /**
         * Decodes a LS2C_PK_GetMatchState_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_GetMatchState_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_GetMatchState_Ack;
    }

    namespace LS2C_PK_GetMatchState_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInMatch = 2
        }
    }

    /** Properties of a LS2C_PK_ReadyComplete_Ack. */
    interface ILS2C_PK_ReadyComplete_Ack {

        /** LS2C_PK_ReadyComplete_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_ReadyComplete_Ack.AckCode|null);

        /** LS2C_PK_ReadyComplete_Ack status */
        status?: (common.RoomMatchStatus|null);
    }

    /** Represents a LS2C_PK_ReadyComplete_Ack. */
    class LS2C_PK_ReadyComplete_Ack implements ILS2C_PK_ReadyComplete_Ack {

        /**
         * Constructs a new LS2C_PK_ReadyComplete_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_ReadyComplete_Ack);

        /** LS2C_PK_ReadyComplete_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_ReadyComplete_Ack.AckCode;

        /** LS2C_PK_ReadyComplete_Ack status. */
        public status?: (common.RoomMatchStatus|null);

        /**
         * Decodes a LS2C_PK_ReadyComplete_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_ReadyComplete_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_ReadyComplete_Ack;
    }

    namespace LS2C_PK_ReadyComplete_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInRoom = 2
        }
    }

    /** Properties of a LS2C_PK_GetRoomData_Ack. */
    interface ILS2C_PK_GetRoomData_Ack {

        /** LS2C_PK_GetRoomData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_GetRoomData_Ack.AckCode|null);

        /** LS2C_PK_GetRoomData_Ack roomData */
        roomData?: (common.RoomMatchData|null);
    }

    /** Represents a LS2C_PK_GetRoomData_Ack. */
    class LS2C_PK_GetRoomData_Ack implements ILS2C_PK_GetRoomData_Ack {

        /**
         * Constructs a new LS2C_PK_GetRoomData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_GetRoomData_Ack);

        /** LS2C_PK_GetRoomData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_GetRoomData_Ack.AckCode;

        /** LS2C_PK_GetRoomData_Ack roomData. */
        public roomData?: (common.RoomMatchData|null);

        /**
         * Decodes a LS2C_PK_GetRoomData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_GetRoomData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_GetRoomData_Ack;
    }

    namespace LS2C_PK_GetRoomData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInRoom = 2
        }
    }

    /** Properties of a LS2C_PK_ReportScore_Ack. */
    interface ILS2C_PK_ReportScore_Ack {

        /** LS2C_PK_ReportScore_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_ReportScore_Ack.AckCode|null);

        /** LS2C_PK_ReportScore_Ack roomData */
        roomData?: (common.RoomMatchData|null);
    }

    /** Represents a LS2C_PK_ReportScore_Ack. */
    class LS2C_PK_ReportScore_Ack implements ILS2C_PK_ReportScore_Ack {

        /**
         * Constructs a new LS2C_PK_ReportScore_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_ReportScore_Ack);

        /** LS2C_PK_ReportScore_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_ReportScore_Ack.AckCode;

        /** LS2C_PK_ReportScore_Ack roomData. */
        public roomData?: (common.RoomMatchData|null);

        /**
         * Decodes a LS2C_PK_ReportScore_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_ReportScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_ReportScore_Ack;
    }

    namespace LS2C_PK_ReportScore_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInGame = 2
        }
    }

    /** Properties of a LS2C_PK_GameOver_Ack. */
    interface ILS2C_PK_GameOver_Ack {

        /** LS2C_PK_GameOver_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_GameOver_Ack.AckCode|null);

        /** LS2C_PK_GameOver_Ack roomData */
        roomData?: (common.RoomMatchData|null);
    }

    /** Represents a LS2C_PK_GameOver_Ack. */
    class LS2C_PK_GameOver_Ack implements ILS2C_PK_GameOver_Ack {

        /**
         * Constructs a new LS2C_PK_GameOver_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_GameOver_Ack);

        /** LS2C_PK_GameOver_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_GameOver_Ack.AckCode;

        /** LS2C_PK_GameOver_Ack roomData. */
        public roomData?: (common.RoomMatchData|null);

        /**
         * Decodes a LS2C_PK_GameOver_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_GameOver_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_GameOver_Ack;
    }

    namespace LS2C_PK_GameOver_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInGame = 2
        }
    }

    /** Properties of a LS2C_PK_GetItem_Ack. */
    interface ILS2C_PK_GetItem_Ack {

        /** LS2C_PK_GetItem_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_GetItem_Ack.AckCode|null);

        /** LS2C_PK_GetItem_Ack propId */
        propId?: (number|null);

        /** LS2C_PK_GetItem_Ack propCount */
        propCount?: (number|null);
    }

    /** Represents a LS2C_PK_GetItem_Ack. */
    class LS2C_PK_GetItem_Ack implements ILS2C_PK_GetItem_Ack {

        /**
         * Constructs a new LS2C_PK_GetItem_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_GetItem_Ack);

        /** LS2C_PK_GetItem_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_GetItem_Ack.AckCode;

        /** LS2C_PK_GetItem_Ack propId. */
        public propId: number;

        /** LS2C_PK_GetItem_Ack propCount. */
        public propCount: number;

        /**
         * Decodes a LS2C_PK_GetItem_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_GetItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_GetItem_Ack;
    }

    namespace LS2C_PK_GetItem_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Limit = 2
        }
    }

    /** Properties of a LS2C_PK_UseItem_Ack. */
    interface ILS2C_PK_UseItem_Ack {

        /** LS2C_PK_UseItem_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_UseItem_Ack.AckCode|null);

        /** LS2C_PK_UseItem_Ack propId */
        propId?: (number|null);

        /** LS2C_PK_UseItem_Ack propCount */
        propCount?: (number|null);
    }

    /** Represents a LS2C_PK_UseItem_Ack. */
    class LS2C_PK_UseItem_Ack implements ILS2C_PK_UseItem_Ack {

        /**
         * Constructs a new LS2C_PK_UseItem_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_UseItem_Ack);

        /** LS2C_PK_UseItem_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_UseItem_Ack.AckCode;

        /** LS2C_PK_UseItem_Ack propId. */
        public propId: number;

        /** LS2C_PK_UseItem_Ack propCount. */
        public propCount: number;

        /**
         * Decodes a LS2C_PK_UseItem_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_UseItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_UseItem_Ack;
    }

    namespace LS2C_PK_UseItem_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Limit = 2
        }
    }

    /** Properties of a LS2C_PK_GetMatchInfo_Ack. */
    interface ILS2C_PK_GetMatchInfo_Ack {

        /** LS2C_PK_GetMatchInfo_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_GetMatchInfo_Ack.AckCode|null);

        /** LS2C_PK_GetMatchInfo_Ack armRaceTarget */
        armRaceTarget?: (number|null);

        /** LS2C_PK_GetMatchInfo_Ack fastEaterTarget */
        fastEaterTarget?: (number|null);

        /** LS2C_PK_GetMatchInfo_Ack propLimit */
        propLimit?: (number|null);

        /** LS2C_PK_GetMatchInfo_Ack todayPropCount */
        todayPropCount?: (number|null);

        /** LS2C_PK_GetMatchInfo_Ack propCount */
        propCount?: ({ [k: string]: number }|null);

        /** LS2C_PK_GetMatchInfo_Ack totalScore */
        totalScore?: (number|null);

        /** LS2C_PK_GetMatchInfo_Ack isCrossActivity */
        isCrossActivity?: (boolean|null);

        /** LS2C_PK_GetMatchInfo_Ack players */
        players?: (common.PKPlayerInfo[]|null);

        /** LS2C_PK_GetMatchInfo_Ack stageAward */
        stageAward?: (common.PkMatchRewardMsg[]|null);
    }

    /** Represents a LS2C_PK_GetMatchInfo_Ack. */
    class LS2C_PK_GetMatchInfo_Ack implements ILS2C_PK_GetMatchInfo_Ack {

        /**
         * Constructs a new LS2C_PK_GetMatchInfo_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_GetMatchInfo_Ack);

        /** LS2C_PK_GetMatchInfo_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_GetMatchInfo_Ack.AckCode;

        /** LS2C_PK_GetMatchInfo_Ack armRaceTarget. */
        public armRaceTarget: number;

        /** LS2C_PK_GetMatchInfo_Ack fastEaterTarget. */
        public fastEaterTarget: number;

        /** LS2C_PK_GetMatchInfo_Ack propLimit. */
        public propLimit: number;

        /** LS2C_PK_GetMatchInfo_Ack todayPropCount. */
        public todayPropCount: number;

        /** LS2C_PK_GetMatchInfo_Ack propCount. */
        public propCount: { [k: string]: number };

        /** LS2C_PK_GetMatchInfo_Ack totalScore. */
        public totalScore: number;

        /** LS2C_PK_GetMatchInfo_Ack isCrossActivity. */
        public isCrossActivity: boolean;

        /** LS2C_PK_GetMatchInfo_Ack players. */
        public players: common.PKPlayerInfo[];

        /** LS2C_PK_GetMatchInfo_Ack stageAward. */
        public stageAward: common.PkMatchRewardMsg[];

        /**
         * Decodes a LS2C_PK_GetMatchInfo_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_GetMatchInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_GetMatchInfo_Ack;
    }

    namespace LS2C_PK_GetMatchInfo_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInActivity = 2
        }
    }

    /** Properties of a LS2C_PK_ClaimReward_Ack. */
    interface ILS2C_PK_ClaimReward_Ack {

        /** LS2C_PK_ClaimReward_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_ClaimReward_Ack.AckCode|null);

        /** LS2C_PK_ClaimReward_Ack rewards */
        rewards?: (common.Item[]|null);

        /** LS2C_PK_ClaimReward_Ack rewardId */
        rewardId?: (number|null);
    }

    /** Represents a LS2C_PK_ClaimReward_Ack. */
    class LS2C_PK_ClaimReward_Ack implements ILS2C_PK_ClaimReward_Ack {

        /**
         * Constructs a new LS2C_PK_ClaimReward_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_ClaimReward_Ack);

        /** LS2C_PK_ClaimReward_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_ClaimReward_Ack.AckCode;

        /** LS2C_PK_ClaimReward_Ack rewards. */
        public rewards: common.Item[];

        /** LS2C_PK_ClaimReward_Ack rewardId. */
        public rewardId: number;

        /**
         * Decodes a LS2C_PK_ClaimReward_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_ClaimReward_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_ClaimReward_Ack;
    }

    namespace LS2C_PK_ClaimReward_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            AlreadyClaimed = 2,
            NotQualified = 3,
            NotInActivity = 4
        }
    }

    /** Properties of a LS2C_PK_UpdatePlayerState_Ack. */
    interface ILS2C_PK_UpdatePlayerState_Ack {

        /** LS2C_PK_UpdatePlayerState_Ack ackCode */
        ackCode?: (Server2Client.LS2C_PK_UpdatePlayerState_Ack.AckCode|null);

        /** LS2C_PK_UpdatePlayerState_Ack roomData */
        roomData?: (common.RoomMatchData|null);
    }

    /** Represents a LS2C_PK_UpdatePlayerState_Ack. */
    class LS2C_PK_UpdatePlayerState_Ack implements ILS2C_PK_UpdatePlayerState_Ack {

        /**
         * Constructs a new LS2C_PK_UpdatePlayerState_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_PK_UpdatePlayerState_Ack);

        /** LS2C_PK_UpdatePlayerState_Ack ackCode. */
        public ackCode: Server2Client.LS2C_PK_UpdatePlayerState_Ack.AckCode;

        /** LS2C_PK_UpdatePlayerState_Ack roomData. */
        public roomData?: (common.RoomMatchData|null);

        /**
         * Decodes a LS2C_PK_UpdatePlayerState_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_PK_UpdatePlayerState_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_PK_UpdatePlayerState_Ack;
    }

    namespace LS2C_PK_UpdatePlayerState_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NotInRoom = 2
        }
    }

    /** Properties of a LS2C_SyncPkMatchGameData_Ack. */
    interface ILS2C_SyncPkMatchGameData_Ack {

        /** LS2C_SyncPkMatchGameData_Ack ackCode */
        ackCode?: (Server2Client.LS2C_SyncPkMatchGameData_Ack.AckCode|null);

        /** LS2C_SyncPkMatchGameData_Ack maxStep */
        maxStep?: (number|null);
    }

    /** Represents a LS2C_SyncPkMatchGameData_Ack. */
    class LS2C_SyncPkMatchGameData_Ack implements ILS2C_SyncPkMatchGameData_Ack {

        /**
         * Constructs a new LS2C_SyncPkMatchGameData_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: Server2Client.ILS2C_SyncPkMatchGameData_Ack);

        /** LS2C_SyncPkMatchGameData_Ack ackCode. */
        public ackCode: Server2Client.LS2C_SyncPkMatchGameData_Ack.AckCode;

        /** LS2C_SyncPkMatchGameData_Ack maxStep. */
        public maxStep: number;

        /**
         * Decodes a LS2C_SyncPkMatchGameData_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2C_SyncPkMatchGameData_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Server2Client.LS2C_SyncPkMatchGameData_Ack;
    }

    namespace LS2C_SyncPkMatchGameData_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoMatch = 2,
            StepError = 3,
            StepExist = 4,
            VerifyFail = 5,
            NotTodayGame = 6
        }
    }
}

/** Namespace protocol. */
export namespace protocol {

    /** EActivityStatus enum. */
    enum EActivityStatus {
        Default = 0,
        Pre = 1,
        Effective = 2,
        Settle = 3
    }

    /** ECrushModeItemType enum. */
    enum ECrushModeItemType {
        Invalid = 0,
        RemoveBlock = -1,
        CancelBlock = -2,
        RandomBlocks = -3,
        Relive = -4,
        Alien = -5
    }

    /** EAccountPlatform enum. */
    enum EAccountPlatform {
        PlatformInvalid = 0,
        PlatformWx = 1,
        PlatformQQ = 2,
        PlatformTT = 3,
        PlatformVIVO = 4,
        PlatformOPPO = 5,
        PlatformKS = 6,
        PlatformLt = 7,
        PlatformTTFree = 8,
        PlatformHW = 9,
        PlatformAli = 10,
        PlatformXhs = 11,
        PlatformBeta = 999
    }

    /** EHttpErrorCode enum. */
    enum EHttpErrorCode {
        Nil = 0,
        ParamsInvalid = 10001,
        SystemErr = 10002,
        Unauthorized = 10003,
        DatabaseErr = 10004,
        UserNotLogin = 10005,
        UserSignErr = 10006,
        UserNotExistErr = 10007,
        UserAlreadyExistErr = 10008,
        JsonUnmarshalErr = 10009,
        DecryptErr = 10010,
        SocketNotExistErr = 10011,
        AdVideoOutOfMaxTimesErr = 10012,
        SystemUnlockErr = 10013,
        ConfigErr = 10014,
        ContentSecErr = 10015,
        ServerNotServeErr = 10016,
        NoData = 10017,
        LoginVersionErr = 10018,
        NoMatchPlayInfo = 10019,
        JWTTokenErr = 10020,
        JWTTokenOutOfDateErr = 10021,
        JWTTokenUIDDecodeErr = 10022,
        JWTTokenModifiedErr = 10023,
        TooManyReqErr = 10024,
        SameAsCacheErr = 10025,
        InternalErr = 10026,
        PlatformNotRightErr = 10027,
        AccountErr = 10028,
        ClientVersionLowErr = 10029,
        WxSessionKeyInvalid = 10030,
        WxSessionKeyNotFind = 10031,
        RespDataErr = 10032,
        PlatformNotExistErr = 10033
    }

    /** EDesignerType enum. */
    enum EDesignerType {
        None = 0,
        Official = 1,
        Player = 2
    }

    /** Properties of an AwardInfo. */
    interface IAwardInfo {

        /** AwardInfo awardId */
        awardId?: (number|null);

        /** AwardInfo awardType */
        awardType?: (number|null);

        /** AwardInfo awardCnt */
        awardCnt?: (number|null);

        /** AwardInfo reason */
        reason?: (string|null);
    }

    /** Represents an AwardInfo. */
    class AwardInfo implements IAwardInfo {

        /**
         * Constructs a new AwardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IAwardInfo);

        /** AwardInfo awardId. */
        public awardId: number;

        /** AwardInfo awardType. */
        public awardType: number;

        /** AwardInfo awardCnt. */
        public awardCnt: number;

        /** AwardInfo reason. */
        public reason: string;

        /**
         * Decodes an AwardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AwardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.AwardInfo;
    }

    /** Properties of a BlockData. */
    interface IBlockData {

        /** BlockData blockId */
        blockId?: (Long|null);

        /** BlockData createTime */
        createTime?: (Long|null);
    }

    /** Represents a BlockData. */
    class BlockData implements IBlockData {

        /**
         * Constructs a new BlockData.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IBlockData);

        /** BlockData blockId. */
        public blockId: Long;

        /** BlockData createTime. */
        public createTime: Long;

        /**
         * Decodes a BlockData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BlockData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.BlockData;
    }

    /** Properties of a GameTag. */
    interface IGameTag {

        /** GameTag name */
        name?: (string|null);

        /** GameTag count */
        count?: (Long|null);

        /** GameTag id */
        id?: (string|null);
    }

    /** Represents a GameTag. */
    class GameTag implements IGameTag {

        /**
         * Constructs a new GameTag.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IGameTag);

        /** GameTag name. */
        public name: string;

        /** GameTag count. */
        public count: Long;

        /** GameTag id. */
        public id: string;

        /**
         * Decodes a GameTag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.GameTag;
    }

    /** Properties of a GameTagInfo. */
    interface IGameTagInfo {

        /** GameTagInfo list */
        list?: (protocol.GameTag[]|null);

        /** GameTagInfo ver */
        ver?: (number|null);

        /** GameTagInfo pageNo */
        pageNo?: (number|null);

        /** GameTagInfo pageSize */
        pageSize?: (number|null);

        /** GameTagInfo ex */
        ex?: (Long|null);
    }

    /** Represents a GameTagInfo. */
    class GameTagInfo implements IGameTagInfo {

        /**
         * Constructs a new GameTagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IGameTagInfo);

        /** GameTagInfo list. */
        public list: protocol.GameTag[];

        /** GameTagInfo ver. */
        public ver: number;

        /** GameTagInfo pageNo. */
        public pageNo: number;

        /** GameTagInfo pageSize. */
        public pageSize: number;

        /** GameTagInfo ex. */
        public ex: Long;

        /**
         * Decodes a GameTagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameTagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.GameTagInfo;
    }

    /** Properties of a UserBaseInfo. */
    interface IUserBaseInfo {

        /** UserBaseInfo uid */
        uid?: (string|null);

        /** UserBaseInfo name */
        name?: (string|null);

        /** UserBaseInfo avatar */
        avatar?: (string|null);

        /** UserBaseInfo areaId */
        areaId?: (number|null);

        /** UserBaseInfo highestScore */
        highestScore?: (number|null);

        /** UserBaseInfo usingSkin */
        usingSkin?: ({ [k: string]: number }|null);
    }

    /** Represents a UserBaseInfo. */
    class UserBaseInfo implements IUserBaseInfo {

        /**
         * Constructs a new UserBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IUserBaseInfo);

        /** UserBaseInfo uid. */
        public uid: string;

        /** UserBaseInfo name. */
        public name: string;

        /** UserBaseInfo avatar. */
        public avatar: string;

        /** UserBaseInfo areaId. */
        public areaId: number;

        /** UserBaseInfo highestScore. */
        public highestScore: number;

        /** UserBaseInfo usingSkin. */
        public usingSkin: { [k: string]: number };

        /**
         * Decodes a UserBaseInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.UserBaseInfo;
    }

    /** Properties of a MatchStepInfo. */
    interface IMatchStepInfo {

        /** MatchStepInfo chessIndex */
        chessIndex?: (number|null);

        /** MatchStepInfo timeTag */
        timeTag?: (number|null);

        /** MatchStepInfo deltaTime */
        deltaTime?: (number|null);
    }

    /** Represents a MatchStepInfo. */
    class MatchStepInfo implements IMatchStepInfo {

        /**
         * Constructs a new MatchStepInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IMatchStepInfo);

        /** MatchStepInfo chessIndex. */
        public chessIndex: number;

        /** MatchStepInfo timeTag. */
        public timeTag: number;

        /** MatchStepInfo deltaTime. */
        public deltaTime: number;

        /**
         * Decodes a MatchStepInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MatchStepInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.MatchStepInfo;
    }

    /** Properties of a MatchPlayInfo. */
    interface IMatchPlayInfo {

        /** MatchPlayInfo gameType */
        gameType?: (number|null);

        /** MatchPlayInfo mapSeed */
        mapSeed?: (number[]|null);

        /** MatchPlayInfo stepInfoList */
        stepInfoList?: (protocol.MatchStepInfo[]|null);
    }

    /** Represents a MatchPlayInfo. */
    class MatchPlayInfo implements IMatchPlayInfo {

        /**
         * Constructs a new MatchPlayInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IMatchPlayInfo);

        /** MatchPlayInfo gameType. */
        public gameType: number;

        /** MatchPlayInfo mapSeed. */
        public mapSeed: number[];

        /** MatchPlayInfo stepInfoList. */
        public stepInfoList: protocol.MatchStepInfo[];

        /**
         * Decodes a MatchPlayInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MatchPlayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.MatchPlayInfo;
    }

    /** Properties of a MailAwardItem. */
    interface IMailAwardItem {

        /** MailAwardItem ItemId */
        ItemId?: (number|null);

        /** MailAwardItem ItemType */
        ItemType?: (number|null);

        /** MailAwardItem ItemCount */
        ItemCount?: (number|null);

        /** MailAwardItem ItemState */
        ItemState?: (boolean|null);

        /** MailAwardItem index */
        index?: (number|null);
    }

    /** Represents a MailAwardItem. */
    class MailAwardItem implements IMailAwardItem {

        /**
         * Constructs a new MailAwardItem.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IMailAwardItem);

        /** MailAwardItem ItemId. */
        public ItemId: number;

        /** MailAwardItem ItemType. */
        public ItemType: number;

        /** MailAwardItem ItemCount. */
        public ItemCount: number;

        /** MailAwardItem ItemState. */
        public ItemState: boolean;

        /** MailAwardItem index. */
        public index: number;

        /**
         * Decodes a MailAwardItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailAwardItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.MailAwardItem;
    }

    /** Properties of a MailData. */
    interface IMailData {

        /** MailData mailId */
        mailId?: (string|null);

        /** MailData mailType */
        mailType?: (number|null);

        /** MailData title */
        title?: (string|null);

        /** MailData content */
        content?: (string|null);

        /** MailData fromId */
        fromId?: (string|null);

        /** MailData attachments */
        attachments?: (protocol.MailAwardItem[]|null);

        /** MailData extracted */
        extracted?: (boolean|null);

        /** MailData haveRead */
        haveRead?: (boolean|null);

        /** MailData skinState */
        skinState?: (boolean|null);

        /** MailData expireTime */
        expireTime?: (Long|null);

        /** MailData sendTime */
        sendTime?: (Long|null);
    }

    /** Represents a MailData. */
    class MailData implements IMailData {

        /**
         * Constructs a new MailData.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IMailData);

        /** MailData mailId. */
        public mailId: string;

        /** MailData mailType. */
        public mailType: number;

        /** MailData title. */
        public title: string;

        /** MailData content. */
        public content: string;

        /** MailData fromId. */
        public fromId: string;

        /** MailData attachments. */
        public attachments: protocol.MailAwardItem[];

        /** MailData extracted. */
        public extracted: boolean;

        /** MailData haveRead. */
        public haveRead: boolean;

        /** MailData skinState. */
        public skinState: boolean;

        /** MailData expireTime. */
        public expireTime: Long;

        /** MailData sendTime. */
        public sendTime: Long;

        /**
         * Decodes a MailData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.MailData;
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo uid */
        uid?: (string|null);

        /** UserInfo nickname */
        nickname?: (string|null);

        /** UserInfo avatar */
        avatar?: (string|null);

        /** UserInfo isPassedGuideLevel */
        isPassedGuideLevel?: (boolean|null);

        /** UserInfo isPassedNewPlayerLevel */
        isPassedNewPlayerLevel?: (boolean|null);

        /** UserInfo isAuthorized */
        isAuthorized?: (boolean|null);

        /** UserInfo coins */
        coins?: (Long|null);

        /** UserInfo type */
        type?: (number|null);

        /** UserInfo userType */
        userType?: (number|null);

        /** UserInfo tags */
        tags?: ({ [k: string]: number }|null);

        /** UserInfo areaId */
        areaId?: (number|null);

        /** UserInfo isAdUser */
        isAdUser?: (boolean|null);

        /** UserInfo passedNewPlayerTime */
        passedNewPlayerTime?: (Long|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IUserInfo);

        /** UserInfo uid. */
        public uid: string;

        /** UserInfo nickname. */
        public nickname: string;

        /** UserInfo avatar. */
        public avatar: string;

        /** UserInfo isPassedGuideLevel. */
        public isPassedGuideLevel: boolean;

        /** UserInfo isPassedNewPlayerLevel. */
        public isPassedNewPlayerLevel: boolean;

        /** UserInfo isAuthorized. */
        public isAuthorized: boolean;

        /** UserInfo coins. */
        public coins: Long;

        /** UserInfo type. */
        public type: number;

        /** UserInfo userType. */
        public userType: number;

        /** UserInfo tags. */
        public tags: { [k: string]: number };

        /** UserInfo areaId. */
        public areaId: number;

        /** UserInfo isAdUser. */
        public isAdUser: boolean;

        /** UserInfo passedNewPlayerTime. */
        public passedNewPlayerTime: Long;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.UserInfo;
    }

    /** Properties of a Payslip. */
    interface IPayslip {

        /** Payslip nickname */
        nickname?: (string|null);

        /** Payslip startDate */
        startDate?: (Long|null);

        /** Payslip loginDays */
        loginDays?: (number|null);

        /** Payslip rawScore */
        rawScore?: (number|null);

        /** Payslip platformCut */
        platformCut?: (number|null);

        /** Payslip preTaxSalary */
        preTaxSalary?: (number|null);

        /** Payslip personalTax */
        personalTax?: (number|null);

        /** Payslip afterTaxIncome */
        afterTaxIncome?: (number|null);

        /** Payslip isReceived */
        isReceived?: (boolean|null);

        /** Payslip liveTime */
        liveTime?: (number|null);
    }

    /** Represents a Payslip. */
    class Payslip implements IPayslip {

        /**
         * Constructs a new Payslip.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IPayslip);

        /** Payslip nickname. */
        public nickname: string;

        /** Payslip startDate. */
        public startDate: Long;

        /** Payslip loginDays. */
        public loginDays: number;

        /** Payslip rawScore. */
        public rawScore: number;

        /** Payslip platformCut. */
        public platformCut: number;

        /** Payslip preTaxSalary. */
        public preTaxSalary: number;

        /** Payslip personalTax. */
        public personalTax: number;

        /** Payslip afterTaxIncome. */
        public afterTaxIncome: number;

        /** Payslip isReceived. */
        public isReceived: boolean;

        /** Payslip liveTime. */
        public liveTime: number;

        /**
         * Decodes a Payslip message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Payslip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.Payslip;
    }

    /** Properties of a CharacterData. */
    interface ICharacterData {

        /** CharacterData nickname */
        nickname?: (string|null);

        /** CharacterData isPassedGuideLevel */
        isPassedGuideLevel?: (boolean|null);

        /** CharacterData isPassedNewPlayerLevel */
        isPassedNewPlayerLevel?: (boolean|null);

        /** CharacterData isAuthorized */
        isAuthorized?: (boolean|null);

        /** CharacterData avatar */
        avatar?: (string|null);
    }

    /** Represents a CharacterData. */
    class CharacterData implements ICharacterData {

        /**
         * Constructs a new CharacterData.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ICharacterData);

        /** CharacterData nickname. */
        public nickname: string;

        /** CharacterData isPassedGuideLevel. */
        public isPassedGuideLevel: boolean;

        /** CharacterData isPassedNewPlayerLevel. */
        public isPassedNewPlayerLevel: boolean;

        /** CharacterData isAuthorized. */
        public isAuthorized: boolean;

        /** CharacterData avatar. */
        public avatar: string;

        /**
         * Decodes a CharacterData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CharacterData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.CharacterData;
    }

    /** Properties of a DailyGameMsg. */
    interface IDailyGameMsg {

        /** DailyGameMsg dailyMatchToken */
        dailyMatchToken?: (string|null);

        /** DailyGameMsg dailyPassCount */
        dailyPassCount?: (number|null);

        /** DailyGameMsg dailyGameCount */
        dailyGameCount?: (number|null);

        /** DailyGameMsg freeCount */
        freeCount?: (number|null);

        /** DailyGameMsg passedLevelIds */
        passedLevelIds?: (number[]|null);
    }

    /** Represents a DailyGameMsg. */
    class DailyGameMsg implements IDailyGameMsg {

        /**
         * Constructs a new DailyGameMsg.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IDailyGameMsg);

        /** DailyGameMsg dailyMatchToken. */
        public dailyMatchToken: string;

        /** DailyGameMsg dailyPassCount. */
        public dailyPassCount: number;

        /** DailyGameMsg dailyGameCount. */
        public dailyGameCount: number;

        /** DailyGameMsg freeCount. */
        public freeCount: number;

        /** DailyGameMsg passedLevelIds. */
        public passedLevelIds: number[];

        /**
         * Decodes a DailyGameMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DailyGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.DailyGameMsg;
    }

    /** Properties of an EndlessGameMsg. */
    interface IEndlessGameMsg {

        /** EndlessGameMsg matchToken */
        matchToken?: (string|null);

        /** EndlessGameMsg highestScore */
        highestScore?: (number|null);

        /** EndlessGameMsg needSettle */
        needSettle?: (boolean|null);

        /** EndlessGameMsg freeCount */
        freeCount?: (number|null);

        /** EndlessGameMsg todayEndlessCount */
        todayEndlessCount?: (number|null);

        /** EndlessGameMsg dailyMaxScore */
        dailyMaxScore?: (number|null);

        /** EndlessGameMsg income */
        income?: (number|null);

        /** EndlessGameMsg activityMaxScore */
        activityMaxScore?: (number|null);

        /** EndlessGameMsg canClaimVideoReward */
        canClaimVideoReward?: (boolean|null);
    }

    /** Represents an EndlessGameMsg. */
    class EndlessGameMsg implements IEndlessGameMsg {

        /**
         * Constructs a new EndlessGameMsg.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IEndlessGameMsg);

        /** EndlessGameMsg matchToken. */
        public matchToken: string;

        /** EndlessGameMsg highestScore. */
        public highestScore: number;

        /** EndlessGameMsg needSettle. */
        public needSettle: boolean;

        /** EndlessGameMsg freeCount. */
        public freeCount: number;

        /** EndlessGameMsg todayEndlessCount. */
        public todayEndlessCount: number;

        /** EndlessGameMsg dailyMaxScore. */
        public dailyMaxScore: number;

        /** EndlessGameMsg income. */
        public income: number;

        /** EndlessGameMsg activityMaxScore. */
        public activityMaxScore: number;

        /** EndlessGameMsg canClaimVideoReward. */
        public canClaimVideoReward: boolean;

        /**
         * Decodes an EndlessGameMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EndlessGameMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.EndlessGameMsg;
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a HeartBeatReqInfo. */
    interface IHeartBeatReqInfo {

        /** HeartBeatReqInfo clientTime */
        clientTime?: (Long|null);
    }

    /** Represents a HeartBeatReqInfo. */
    class HeartBeatReqInfo implements IHeartBeatReqInfo {

        /**
         * Constructs a new HeartBeatReqInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IHeartBeatReqInfo);

        /** HeartBeatReqInfo clientTime. */
        public clientTime: Long;

        /**
         * Decodes a HeartBeatReqInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeartBeatReqInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.HeartBeatReqInfo;
    }

    namespace HeartBeatReqInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 1001
        }
    }

    /** Properties of a HeartBeatAckInfo. */
    interface IHeartBeatAckInfo {

        /** HeartBeatAckInfo serverTime */
        serverTime?: (Long|null);
    }

    /** Represents a HeartBeatAckInfo. */
    class HeartBeatAckInfo implements IHeartBeatAckInfo {

        /**
         * Constructs a new HeartBeatAckInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IHeartBeatAckInfo);

        /** HeartBeatAckInfo serverTime. */
        public serverTime: Long;

        /**
         * Decodes a HeartBeatAckInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeartBeatAckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.HeartBeatAckInfo;
    }

    namespace HeartBeatAckInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 1002
        }
    }

    /** Properties of a UserLoginNtfInfo. */
    interface IUserLoginNtfInfo {

        /** UserLoginNtfInfo reConnectToken */
        reConnectToken?: (string|null);
    }

    /** Represents a UserLoginNtfInfo. */
    class UserLoginNtfInfo implements IUserLoginNtfInfo {

        /**
         * Constructs a new UserLoginNtfInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IUserLoginNtfInfo);

        /** UserLoginNtfInfo reConnectToken. */
        public reConnectToken: string;

        /**
         * Decodes a UserLoginNtfInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserLoginNtfInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.UserLoginNtfInfo;
    }

    namespace UserLoginNtfInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 1003
        }
    }

    /** Properties of a UserCloseConnectNtfInfo. */
    interface IUserCloseConnectNtfInfo {

        /** UserCloseConnectNtfInfo closeType */
        closeType?: (common.UserCloseConnectNtfInfo.CloseType|null);
    }

    /** Represents a UserCloseConnectNtfInfo. */
    class UserCloseConnectNtfInfo implements IUserCloseConnectNtfInfo {

        /**
         * Constructs a new UserCloseConnectNtfInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IUserCloseConnectNtfInfo);

        /** UserCloseConnectNtfInfo closeType. */
        public closeType: common.UserCloseConnectNtfInfo.CloseType;

        /**
         * Decodes a UserCloseConnectNtfInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserCloseConnectNtfInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.UserCloseConnectNtfInfo;
    }

    namespace UserCloseConnectNtfInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 1004
        }

        /** CloseType enum. */
        enum CloseType {
            Invalid = 0,
            CloseByKick = 1,
            CloseByNewConnect = 2
        }
    }

    /** Properties of a ClientPrepared. */
    interface IClientPrepared {
    }

    /** Represents a ClientPrepared. */
    class ClientPrepared implements IClientPrepared {

        /**
         * Constructs a new ClientPrepared.
         * @param [p] Properties to set
         */
        constructor(p?: common.IClientPrepared);

        /**
         * Decodes a ClientPrepared message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ClientPrepared
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.ClientPrepared;
    }

    namespace ClientPrepared {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 1005
        }
    }

    /** EPlatform enum. */
    enum EPlatform {
        PlatformUnknown = 0,
        PlatformWx = 1,
        PlatformQQ = 2,
        PlatformTT = 3,
        PlatformVIVO = 4,
        PlatformOPPO = 5,
        PlatformKS = 6,
        PlatformJoyo = 7,
        PlatformTTFree = 8,
        PlatformHW = 9,
        PlatformAli = 10,
        PlatformXHS = 11,
        PlatformBeta = 999
    }

    /** EClientOS enum. */
    enum EClientOS {
        UnknownOS = 0,
        Android = 1,
        IOS = 2
    }

    /** Properties of a Login. */
    interface ILogin {

        /** Login code */
        code?: (string|null);

        /** Login platform */
        platform?: (common.Login.Platform|null);

        /** Login channel */
        channel?: (string|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [p] Properties to set
         */
        constructor(p?: common.ILogin);

        /** Login code. */
        public code: string;

        /** Login platform. */
        public platform: common.Login.Platform;

        /** Login channel. */
        public channel: string;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.Login;
    }

    namespace Login {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 1101
        }

        /** Platform enum. */
        enum Platform {
            UNKNOWN = 0,
            WX = 1,
            QQ = 2,
            TT = 3,
            VIVO = 4,
            OPPO = 5,
            KS = 6,
            JOYO = 7,
            HW = 8,
            Zfb = 9,
            Xhs = 10,
            BETA = 999
        }
    }

    /** Properties of a LoginAck. */
    interface ILoginAck {

        /** LoginAck uid */
        uid?: (string|null);

        /** LoginAck token */
        token?: (string|null);

        /** LoginAck time */
        time?: (Long|null);

        /** LoginAck platform */
        platform?: (number|null);

        /** LoginAck avatar */
        avatar?: (string|null);

        /** LoginAck nickName */
        nickName?: (string|null);
    }

    /** Represents a LoginAck. */
    class LoginAck implements ILoginAck {

        /**
         * Constructs a new LoginAck.
         * @param [p] Properties to set
         */
        constructor(p?: common.ILoginAck);

        /** LoginAck uid. */
        public uid: string;

        /** LoginAck token. */
        public token: string;

        /** LoginAck time. */
        public time: Long;

        /** LoginAck platform. */
        public platform: number;

        /** LoginAck avatar. */
        public avatar: string;

        /** LoginAck nickName. */
        public nickName: string;

        /**
         * Decodes a LoginAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.LoginAck;
    }

    /** ERecommendTag enum. */
    enum ERecommendTag {
        None = 0,
        SameCity = 1,
        OppositeSex = 2,
        SameFriend = 3
    }

    /** EGender enum. */
    enum EGender {
        DefaultGender = 0,
        Female = 1,
        Male = 2
    }

    /** Properties of a FriendUserInfo. */
    interface IFriendUserInfo {

        /** FriendUserInfo uid */
        uid?: (string|null);

        /** FriendUserInfo liteId */
        liteId?: (string|null);

        /** FriendUserInfo name */
        name?: (string|null);

        /** FriendUserInfo avatar */
        avatar?: (string|null);

        /** FriendUserInfo gender */
        gender?: (number|null);

        /** FriendUserInfo loginTs */
        loginTs?: (number|null);

        /** FriendUserInfo logoffTs */
        logoffTs?: (number|null);

        /** FriendUserInfo adCode */
        adCode?: (number|null);

        /** FriendUserInfo sign */
        sign?: (string|null);

        /** FriendUserInfo recommendTag */
        recommendTag?: (common.ERecommendTag|null);

        /** FriendUserInfo isCanSend */
        isCanSend?: (boolean|null);

        /** FriendUserInfo isOnline */
        isOnline?: (boolean|null);

        /** FriendUserInfo characterSkin */
        characterSkin?: (number|null);

        /** FriendUserInfo isCanOpen */
        isCanOpen?: (boolean|null);

        /** FriendUserInfo isClaimed */
        isClaimed?: (boolean|null);
    }

    /** Represents a FriendUserInfo. */
    class FriendUserInfo implements IFriendUserInfo {

        /**
         * Constructs a new FriendUserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IFriendUserInfo);

        /** FriendUserInfo uid. */
        public uid: string;

        /** FriendUserInfo liteId. */
        public liteId: string;

        /** FriendUserInfo name. */
        public name: string;

        /** FriendUserInfo avatar. */
        public avatar: string;

        /** FriendUserInfo gender. */
        public gender: number;

        /** FriendUserInfo loginTs. */
        public loginTs: number;

        /** FriendUserInfo logoffTs. */
        public logoffTs: number;

        /** FriendUserInfo adCode. */
        public adCode: number;

        /** FriendUserInfo sign. */
        public sign: string;

        /** FriendUserInfo recommendTag. */
        public recommendTag: common.ERecommendTag;

        /** FriendUserInfo isCanSend. */
        public isCanSend: boolean;

        /** FriendUserInfo isOnline. */
        public isOnline: boolean;

        /** FriendUserInfo characterSkin. */
        public characterSkin: number;

        /** FriendUserInfo isCanOpen. */
        public isCanOpen: boolean;

        /** FriendUserInfo isClaimed. */
        public isClaimed: boolean;

        /**
         * Decodes a FriendUserInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.FriendUserInfo;
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item ItemUid */
        ItemUid?: (string|null);

        /** Item ItemId */
        ItemId?: (number|null);

        /** Item ItemCount */
        ItemCount?: (number|null);

        /** Item CreateTime */
        CreateTime?: (Long|null);

        /** Item Reason */
        Reason?: (string|null);

        /** Item ItemType */
        ItemType?: (number|null);

        /** Item IsNew */
        IsNew?: (boolean|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [p] Properties to set
         */
        constructor(p?: common.IItem);

        /** Item ItemUid. */
        public ItemUid: string;

        /** Item ItemId. */
        public ItemId: number;

        /** Item ItemCount. */
        public ItemCount: number;

        /** Item CreateTime. */
        public CreateTime: Long;

        /** Item Reason. */
        public Reason: string;

        /** Item ItemType. */
        public ItemType: number;

        /** Item IsNew. */
        public IsNew: boolean;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.Item;
    }

    /** Properties of a PlatformGift. */
    interface IPlatformGift {

        /** PlatformGift GiftId */
        GiftId?: (string|null);

        /** PlatformGift GiftType */
        GiftType?: (number|null);

        /** PlatformGift GiftDesc */
        GiftDesc?: (string|null);

        /** PlatformGift CreateTime */
        CreateTime?: (Long|null);

        /** PlatformGift Items */
        Items?: (common.Item[]|null);
    }

    /** Represents a PlatformGift. */
    class PlatformGift implements IPlatformGift {

        /**
         * Constructs a new PlatformGift.
         * @param [p] Properties to set
         */
        constructor(p?: common.IPlatformGift);

        /** PlatformGift GiftId. */
        public GiftId: string;

        /** PlatformGift GiftType. */
        public GiftType: number;

        /** PlatformGift GiftDesc. */
        public GiftDesc: string;

        /** PlatformGift CreateTime. */
        public CreateTime: Long;

        /** PlatformGift Items. */
        public Items: common.Item[];

        /**
         * Decodes a PlatformGift message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlatformGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.PlatformGift;
    }

    /** EWxGiftIdType enum. */
    enum EWxGiftIdType {
        NoneGift = 0,
        DailyLogin = 1,
        WeekendGift = 2
    }

    /** Properties of a MatchRoomPlayerInfo. */
    interface IMatchRoomPlayerInfo {

        /** MatchRoomPlayerInfo userId */
        userId?: (string|null);

        /** MatchRoomPlayerInfo avatar */
        avatar?: (string|null);

        /** MatchRoomPlayerInfo name */
        name?: (string|null);

        /** MatchRoomPlayerInfo usingSkin */
        usingSkin?: ({ [k: string]: number }|null);

        /** MatchRoomPlayerInfo area */
        area?: (number|null);

        /** MatchRoomPlayerInfo reachTime */
        reachTime?: (Long|null);

        /** MatchRoomPlayerInfo maxScore */
        maxScore?: (number|null);

        /** MatchRoomPlayerInfo bonus */
        bonus?: (number|null);

        /** MatchRoomPlayerInfo highestScore */
        highestScore?: (number|null);
    }

    /** Represents a MatchRoomPlayerInfo. */
    class MatchRoomPlayerInfo implements IMatchRoomPlayerInfo {

        /**
         * Constructs a new MatchRoomPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IMatchRoomPlayerInfo);

        /** MatchRoomPlayerInfo userId. */
        public userId: string;

        /** MatchRoomPlayerInfo avatar. */
        public avatar: string;

        /** MatchRoomPlayerInfo name. */
        public name: string;

        /** MatchRoomPlayerInfo usingSkin. */
        public usingSkin: { [k: string]: number };

        /** MatchRoomPlayerInfo area. */
        public area: number;

        /** MatchRoomPlayerInfo reachTime. */
        public reachTime: Long;

        /** MatchRoomPlayerInfo maxScore. */
        public maxScore: number;

        /** MatchRoomPlayerInfo bonus. */
        public bonus: number;

        /** MatchRoomPlayerInfo highestScore. */
        public highestScore: number;

        /**
         * Decodes a MatchRoomPlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MatchRoomPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.MatchRoomPlayerInfo;
    }

    /** Properties of a MissionDataMsg. */
    interface IMissionDataMsg {

        /** MissionDataMsg missionId */
        missionId?: (number|null);

        /** MissionDataMsg missionType */
        missionType?: (number|null);

        /** MissionDataMsg functionType */
        functionType?: (number|null);

        /** MissionDataMsg maxProgress */
        maxProgress?: (number|null);

        /** MissionDataMsg curProgress */
        curProgress?: (number|null);

        /** MissionDataMsg desc */
        desc?: (string|null);

        /** MissionDataMsg deadlineTime */
        deadlineTime?: (Long|null);

        /** MissionDataMsg order */
        order?: (number|null);

        /** MissionDataMsg icon */
        icon?: (number|null);
    }

    /** Represents a MissionDataMsg. */
    class MissionDataMsg implements IMissionDataMsg {

        /**
         * Constructs a new MissionDataMsg.
         * @param [p] Properties to set
         */
        constructor(p?: common.IMissionDataMsg);

        /** MissionDataMsg missionId. */
        public missionId: number;

        /** MissionDataMsg missionType. */
        public missionType: number;

        /** MissionDataMsg functionType. */
        public functionType: number;

        /** MissionDataMsg maxProgress. */
        public maxProgress: number;

        /** MissionDataMsg curProgress. */
        public curProgress: number;

        /** MissionDataMsg desc. */
        public desc: string;

        /** MissionDataMsg deadlineTime. */
        public deadlineTime: Long;

        /** MissionDataMsg order. */
        public order: number;

        /** MissionDataMsg icon. */
        public icon: number;

        /**
         * Decodes a MissionDataMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MissionDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.MissionDataMsg;
    }

    /** Properties of a MissionTypeReward. */
    interface IMissionTypeReward {

        /** MissionTypeReward missionType */
        missionType?: (number|null);

        /** MissionTypeReward rewardId */
        rewardId?: (number|null);

        /** MissionTypeReward rewardCnt */
        rewardCnt?: (number|null);

        /** MissionTypeReward isReceived */
        isReceived?: (boolean|null);
    }

    /** Represents a MissionTypeReward. */
    class MissionTypeReward implements IMissionTypeReward {

        /**
         * Constructs a new MissionTypeReward.
         * @param [p] Properties to set
         */
        constructor(p?: common.IMissionTypeReward);

        /** MissionTypeReward missionType. */
        public missionType: number;

        /** MissionTypeReward rewardId. */
        public rewardId: number;

        /** MissionTypeReward rewardCnt. */
        public rewardCnt: number;

        /** MissionTypeReward isReceived. */
        public isReceived: boolean;

        /**
         * Decodes a MissionTypeReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MissionTypeReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.MissionTypeReward;
    }

    /** Properties of a ChapterDataMsg. */
    interface IChapterDataMsg {

        /** ChapterDataMsg chapterId */
        chapterId?: (number|null);

        /** ChapterDataMsg name */
        name?: (string|null);

        /** ChapterDataMsg setLevel */
        setLevel?: (number|null);

        /** ChapterDataMsg isUnlock */
        isUnlock?: (boolean|null);

        /** ChapterDataMsg chapterOrder */
        chapterOrder?: (number|null);
    }

    /** Represents a ChapterDataMsg. */
    class ChapterDataMsg implements IChapterDataMsg {

        /**
         * Constructs a new ChapterDataMsg.
         * @param [p] Properties to set
         */
        constructor(p?: common.IChapterDataMsg);

        /** ChapterDataMsg chapterId. */
        public chapterId: number;

        /** ChapterDataMsg name. */
        public name: string;

        /** ChapterDataMsg setLevel. */
        public setLevel: number;

        /** ChapterDataMsg isUnlock. */
        public isUnlock: boolean;

        /** ChapterDataMsg chapterOrder. */
        public chapterOrder: number;

        /**
         * Decodes a ChapterDataMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChapterDataMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.ChapterDataMsg;
    }

    /** Properties of a StoryModeRewardMsg. */
    interface IStoryModeRewardMsg {

        /** StoryModeRewardMsg rewardId */
        rewardId?: (number|null);

        /** StoryModeRewardMsg rewardCnt */
        rewardCnt?: (number|null);

        /** StoryModeRewardMsg isReceived */
        isReceived?: (boolean|null);

        /** StoryModeRewardMsg requireCount */
        requireCount?: (number|null);
    }

    /** Represents a StoryModeRewardMsg. */
    class StoryModeRewardMsg implements IStoryModeRewardMsg {

        /**
         * Constructs a new StoryModeRewardMsg.
         * @param [p] Properties to set
         */
        constructor(p?: common.IStoryModeRewardMsg);

        /** StoryModeRewardMsg rewardId. */
        public rewardId: number;

        /** StoryModeRewardMsg rewardCnt. */
        public rewardCnt: number;

        /** StoryModeRewardMsg isReceived. */
        public isReceived: boolean;

        /** StoryModeRewardMsg requireCount. */
        public requireCount: number;

        /**
         * Decodes a StoryModeRewardMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StoryModeRewardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.StoryModeRewardMsg;
    }

    /** Properties of a PKPlayerInfo. */
    interface IPKPlayerInfo {

        /** PKPlayerInfo userId */
        userId?: (string|null);

        /** PKPlayerInfo avatar */
        avatar?: (string|null);

        /** PKPlayerInfo name */
        name?: (string|null);

        /** PKPlayerInfo usingSkin */
        usingSkin?: ({ [k: string]: number }|null);

        /** PKPlayerInfo area */
        area?: (number|null);

        /** PKPlayerInfo reachTime */
        reachTime?: (Long|null);

        /** PKPlayerInfo score */
        score?: (number[]|null);

        /** PKPlayerInfo totalScore */
        totalScore?: (number|null);

        /** PKPlayerInfo giftCount */
        giftCount?: (number|null);

        /** PKPlayerInfo items */
        items?: (common.Item[]|null);

        /** PKPlayerInfo status */
        status?: (common.EPlayerStatusInRoom|null);

        /** PKPlayerInfo highestScore */
        highestScore?: (number|null);
    }

    /** Represents a PKPlayerInfo. */
    class PKPlayerInfo implements IPKPlayerInfo {

        /**
         * Constructs a new PKPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: common.IPKPlayerInfo);

        /** PKPlayerInfo userId. */
        public userId: string;

        /** PKPlayerInfo avatar. */
        public avatar: string;

        /** PKPlayerInfo name. */
        public name: string;

        /** PKPlayerInfo usingSkin. */
        public usingSkin: { [k: string]: number };

        /** PKPlayerInfo area. */
        public area: number;

        /** PKPlayerInfo reachTime. */
        public reachTime: Long;

        /** PKPlayerInfo score. */
        public score: number[];

        /** PKPlayerInfo totalScore. */
        public totalScore: number;

        /** PKPlayerInfo giftCount. */
        public giftCount: number;

        /** PKPlayerInfo items. */
        public items: common.Item[];

        /** PKPlayerInfo status. */
        public status: common.EPlayerStatusInRoom;

        /** PKPlayerInfo highestScore. */
        public highestScore: number;

        /**
         * Decodes a PKPlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PKPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.PKPlayerInfo;
    }

    /** Properties of a PlayerReadyState. */
    interface IPlayerReadyState {

        /** PlayerReadyState userId */
        userId?: (string|null);

        /** PlayerReadyState isReady */
        isReady?: (boolean|null);
    }

    /** Represents a PlayerReadyState. */
    class PlayerReadyState implements IPlayerReadyState {

        /**
         * Constructs a new PlayerReadyState.
         * @param [p] Properties to set
         */
        constructor(p?: common.IPlayerReadyState);

        /** PlayerReadyState userId. */
        public userId: string;

        /** PlayerReadyState isReady. */
        public isReady: boolean;

        /**
         * Decodes a PlayerReadyState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerReadyState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.PlayerReadyState;
    }

    /** ERoomStatus enum. */
    enum ERoomStatus {
        Unknown = 0,
        Matching = 1,
        MatchComplete = 2,
        Playing = 4,
        Settlement = 5
    }

    /** Properties of a RoomMatchStatus. */
    interface IRoomMatchStatus {

        /** RoomMatchStatus roomId */
        roomId?: (string|null);

        /** RoomMatchStatus pkType */
        pkType?: (number|null);

        /** RoomMatchStatus status */
        status?: (common.ERoomStatus|null);

        /** RoomMatchStatus startTime */
        startTime?: (Long|null);

        /** RoomMatchStatus players */
        players?: (common.PlayerReadyState[]|null);
    }

    /** Represents a RoomMatchStatus. */
    class RoomMatchStatus implements IRoomMatchStatus {

        /**
         * Constructs a new RoomMatchStatus.
         * @param [p] Properties to set
         */
        constructor(p?: common.IRoomMatchStatus);

        /** RoomMatchStatus roomId. */
        public roomId: string;

        /** RoomMatchStatus pkType. */
        public pkType: number;

        /** RoomMatchStatus status. */
        public status: common.ERoomStatus;

        /** RoomMatchStatus startTime. */
        public startTime: Long;

        /** RoomMatchStatus players. */
        public players: common.PlayerReadyState[];

        /**
         * Decodes a RoomMatchStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoomMatchStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.RoomMatchStatus;
    }

    /** Properties of a RoomMatchData. */
    interface IRoomMatchData {

        /** RoomMatchData roomId */
        roomId?: (string|null);

        /** RoomMatchData pkType */
        pkType?: (number|null);

        /** RoomMatchData status */
        status?: (common.ERoomStatus|null);

        /** RoomMatchData matchTime */
        matchTime?: (Long|null);

        /** RoomMatchData startTime */
        startTime?: (Long|null);

        /** RoomMatchData endTime */
        endTime?: (Long|null);

        /** RoomMatchData players */
        players?: (common.PKPlayerInfo[]|null);
    }

    /** Represents a RoomMatchData. */
    class RoomMatchData implements IRoomMatchData {

        /**
         * Constructs a new RoomMatchData.
         * @param [p] Properties to set
         */
        constructor(p?: common.IRoomMatchData);

        /** RoomMatchData roomId. */
        public roomId: string;

        /** RoomMatchData pkType. */
        public pkType: number;

        /** RoomMatchData status. */
        public status: common.ERoomStatus;

        /** RoomMatchData matchTime. */
        public matchTime: Long;

        /** RoomMatchData startTime. */
        public startTime: Long;

        /** RoomMatchData endTime. */
        public endTime: Long;

        /** RoomMatchData players. */
        public players: common.PKPlayerInfo[];

        /**
         * Decodes a RoomMatchData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoomMatchData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.RoomMatchData;
    }

    /** Properties of a PkMatchRewardMsg. */
    interface IPkMatchRewardMsg {

        /** PkMatchRewardMsg rewardId */
        rewardId?: (number|null);

        /** PkMatchRewardMsg rewardCnt */
        rewardCnt?: (number|null);

        /** PkMatchRewardMsg isReceived */
        isReceived?: (boolean|null);

        /** PkMatchRewardMsg requireCount */
        requireCount?: (number|null);

        /** PkMatchRewardMsg titleId */
        titleId?: (number|null);
    }

    /** Represents a PkMatchRewardMsg. */
    class PkMatchRewardMsg implements IPkMatchRewardMsg {

        /**
         * Constructs a new PkMatchRewardMsg.
         * @param [p] Properties to set
         */
        constructor(p?: common.IPkMatchRewardMsg);

        /** PkMatchRewardMsg rewardId. */
        public rewardId: number;

        /** PkMatchRewardMsg rewardCnt. */
        public rewardCnt: number;

        /** PkMatchRewardMsg isReceived. */
        public isReceived: boolean;

        /** PkMatchRewardMsg requireCount. */
        public requireCount: number;

        /** PkMatchRewardMsg titleId. */
        public titleId: number;

        /**
         * Decodes a PkMatchRewardMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PkMatchRewardMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): common.PkMatchRewardMsg;
    }

    /** EPlayerStatusInRoom enum. */
    enum EPlayerStatusInRoom {
        Waiting = 0,
        Pk = 1,
        Death = 2,
        WatchAd = 3
    }

    /** </summary> */
    enum AckCode {
        Fail = 0,
        Success = 1
    }
}
