/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as $protobuf from "protobufjs";
import Long = require("long");
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
         * Encodes the specified HeartBeatReqInfo message. Does not implicitly {@link common.HeartBeatReqInfo.verify|verify} messages.
         * @param m HeartBeatReqInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.HeartBeatReqInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified HeartBeatAckInfo message. Does not implicitly {@link common.HeartBeatAckInfo.verify|verify} messages.
         * @param m HeartBeatAckInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.HeartBeatAckInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified UserLoginNtfInfo message. Does not implicitly {@link common.UserLoginNtfInfo.verify|verify} messages.
         * @param m UserLoginNtfInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.UserLoginNtfInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified UserCloseConnectNtfInfo message. Does not implicitly {@link common.UserCloseConnectNtfInfo.verify|verify} messages.
         * @param m UserCloseConnectNtfInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.UserCloseConnectNtfInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified ClientPrepared message. Does not implicitly {@link common.ClientPrepared.verify|verify} messages.
         * @param m ClientPrepared message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.ClientPrepared, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified Login message. Does not implicitly {@link common.Login.verify|verify} messages.
         * @param m Login message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.Login, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified LoginAck message. Does not implicitly {@link common.LoginAck.verify|verify} messages.
         * @param m LoginAck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.LoginAck, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified FriendUserInfo message. Does not implicitly {@link common.FriendUserInfo.verify|verify} messages.
         * @param m FriendUserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.FriendUserInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified Item message. Does not implicitly {@link common.Item.verify|verify} messages.
         * @param m Item message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.Item, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified PlatformGift message. Does not implicitly {@link common.PlatformGift.verify|verify} messages.
         * @param m PlatformGift message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.PlatformGift, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MatchRoomPlayerInfo message. Does not implicitly {@link common.MatchRoomPlayerInfo.verify|verify} messages.
         * @param m MatchRoomPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.MatchRoomPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MissionDataMsg message. Does not implicitly {@link common.MissionDataMsg.verify|verify} messages.
         * @param m MissionDataMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.MissionDataMsg, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MissionTypeReward message. Does not implicitly {@link common.MissionTypeReward.verify|verify} messages.
         * @param m MissionTypeReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.MissionTypeReward, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified ChapterDataMsg message. Does not implicitly {@link common.ChapterDataMsg.verify|verify} messages.
         * @param m ChapterDataMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.ChapterDataMsg, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified StoryModeRewardMsg message. Does not implicitly {@link common.StoryModeRewardMsg.verify|verify} messages.
         * @param m StoryModeRewardMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.StoryModeRewardMsg, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified PKPlayerInfo message. Does not implicitly {@link common.PKPlayerInfo.verify|verify} messages.
         * @param m PKPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.PKPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified PlayerReadyState message. Does not implicitly {@link common.PlayerReadyState.verify|verify} messages.
         * @param m PlayerReadyState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.PlayerReadyState, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified RoomMatchStatus message. Does not implicitly {@link common.RoomMatchStatus.verify|verify} messages.
         * @param m RoomMatchStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.RoomMatchStatus, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified RoomMatchData message. Does not implicitly {@link common.RoomMatchData.verify|verify} messages.
         * @param m RoomMatchData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.RoomMatchData, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified PkMatchRewardMsg message. Does not implicitly {@link common.PkMatchRewardMsg.verify|verify} messages.
         * @param m PkMatchRewardMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.PkMatchRewardMsg, w?: $protobuf.Writer): $protobuf.Writer;

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

/** Namespace protocol. */
export namespace protocol {

    /** Properties of a PlayerData. */
    interface IPlayerData {

        /** PlayerData uid */
        uid?: (string|null);

        /** PlayerData nickname */
        nickname?: (string|null);

        /** PlayerData photoUri */
        photoUri?: (string|null);
    }

    /** Represents a PlayerData. */
    class PlayerData implements IPlayerData {

        /**
         * Constructs a new PlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IPlayerData);

        /** PlayerData uid. */
        public uid: string;

        /** PlayerData nickname. */
        public nickname: string;

        /** PlayerData photoUri. */
        public photoUri: string;

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link protocol.PlayerData.verify|verify} messages.
         * @param m PlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.PlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.PlayerData;
    }

    /** Properties of a PlayerBasicInfo. */
    interface IPlayerBasicInfo {

        /** PlayerBasicInfo uid */
        uid?: (string|null);

        /** PlayerBasicInfo nickName */
        nickName?: (string|null);

        /** PlayerBasicInfo photoUri */
        photoUri?: (string|null);

        /** PlayerBasicInfo gender */
        gender?: (common.EGender|null);

        /** PlayerBasicInfo adCode */
        adCode?: (number|null);

        /** PlayerBasicInfo star */
        star?: (number|null);

        /** PlayerBasicInfo liteId */
        liteId?: (string|null);

        /** PlayerBasicInfo isOnline */
        isOnline?: (boolean|null);

        /** PlayerBasicInfo characterSkin */
        characterSkin?: (number|null);
    }

    /** Represents a PlayerBasicInfo. */
    class PlayerBasicInfo implements IPlayerBasicInfo {

        /**
         * Constructs a new PlayerBasicInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IPlayerBasicInfo);

        /** PlayerBasicInfo uid. */
        public uid: string;

        /** PlayerBasicInfo nickName. */
        public nickName: string;

        /** PlayerBasicInfo photoUri. */
        public photoUri: string;

        /** PlayerBasicInfo gender. */
        public gender: common.EGender;

        /** PlayerBasicInfo adCode. */
        public adCode: number;

        /** PlayerBasicInfo star. */
        public star: number;

        /** PlayerBasicInfo liteId. */
        public liteId: string;

        /** PlayerBasicInfo isOnline. */
        public isOnline: boolean;

        /** PlayerBasicInfo characterSkin. */
        public characterSkin: number;

        /**
         * Encodes the specified PlayerBasicInfo message. Does not implicitly {@link protocol.PlayerBasicInfo.verify|verify} messages.
         * @param m PlayerBasicInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.PlayerBasicInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerBasicInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerBasicInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.PlayerBasicInfo;
    }

    /** Properties of a LS2FS_CreatePlayerLiteId. */
    interface ILS2FS_CreatePlayerLiteId {
    }

    /** Represents a LS2FS_CreatePlayerLiteId. */
    class LS2FS_CreatePlayerLiteId implements ILS2FS_CreatePlayerLiteId {

        /**
         * Constructs a new LS2FS_CreatePlayerLiteId.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2FS_CreatePlayerLiteId);

        /**
         * Encodes the specified LS2FS_CreatePlayerLiteId message. Does not implicitly {@link protocol.LS2FS_CreatePlayerLiteId.verify|verify} messages.
         * @param m LS2FS_CreatePlayerLiteId message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2FS_CreatePlayerLiteId, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2FS_CreatePlayerLiteId message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2FS_CreatePlayerLiteId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2FS_CreatePlayerLiteId;
    }

    namespace LS2FS_CreatePlayerLiteId {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50000
        }
    }

    /** Properties of a FS2LS_CreatePlayerLiteId_Ack. */
    interface IFS2LS_CreatePlayerLiteId_Ack {

        /** FS2LS_CreatePlayerLiteId_Ack code */
        code?: (protocol.FS2LS_CreatePlayerLiteId_Ack.AckCode|null);

        /** FS2LS_CreatePlayerLiteId_Ack liteId */
        liteId?: (string|null);
    }

    /** Represents a FS2LS_CreatePlayerLiteId_Ack. */
    class FS2LS_CreatePlayerLiteId_Ack implements IFS2LS_CreatePlayerLiteId_Ack {

        /**
         * Constructs a new FS2LS_CreatePlayerLiteId_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2LS_CreatePlayerLiteId_Ack);

        /** FS2LS_CreatePlayerLiteId_Ack code. */
        public code: protocol.FS2LS_CreatePlayerLiteId_Ack.AckCode;

        /** FS2LS_CreatePlayerLiteId_Ack liteId. */
        public liteId: string;

        /**
         * Encodes the specified FS2LS_CreatePlayerLiteId_Ack message. Does not implicitly {@link protocol.FS2LS_CreatePlayerLiteId_Ack.verify|verify} messages.
         * @param m FS2LS_CreatePlayerLiteId_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2LS_CreatePlayerLiteId_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2LS_CreatePlayerLiteId_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2LS_CreatePlayerLiteId_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2LS_CreatePlayerLiteId_Ack;
    }

    namespace FS2LS_CreatePlayerLiteId_Ack {

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            Fail = 1
        }
    }

    /** Properties of a FriendUserInfoWithUID. */
    interface IFriendUserInfoWithUID {

        /** FriendUserInfoWithUID uid */
        uid?: (string|null);
    }

    /** Represents a FriendUserInfoWithUID. */
    class FriendUserInfoWithUID implements IFriendUserInfoWithUID {

        /**
         * Constructs a new FriendUserInfoWithUID.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFriendUserInfoWithUID);

        /** FriendUserInfoWithUID uid. */
        public uid: string;

        /**
         * Encodes the specified FriendUserInfoWithUID message. Does not implicitly {@link protocol.FriendUserInfoWithUID.verify|verify} messages.
         * @param m FriendUserInfoWithUID message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FriendUserInfoWithUID, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendUserInfoWithUID message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendUserInfoWithUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FriendUserInfoWithUID;
    }

    /** Properties of a FS2RS_FriendListWithUID. */
    interface IFS2RS_FriendListWithUID {

        /** FS2RS_FriendListWithUID code */
        code?: (protocol.FS2RS_FriendListWithUID.AckCode|null);

        /** FS2RS_FriendListWithUID pageNo */
        pageNo?: (number|null);

        /** FS2RS_FriendListWithUID pageSize */
        pageSize?: (number|null);

        /** FS2RS_FriendListWithUID list */
        list?: (protocol.FriendUserInfoWithUID[]|null);
    }

    /** Represents a FS2RS_FriendListWithUID. */
    class FS2RS_FriendListWithUID implements IFS2RS_FriendListWithUID {

        /**
         * Constructs a new FS2RS_FriendListWithUID.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2RS_FriendListWithUID);

        /** FS2RS_FriendListWithUID code. */
        public code: protocol.FS2RS_FriendListWithUID.AckCode;

        /** FS2RS_FriendListWithUID pageNo. */
        public pageNo: number;

        /** FS2RS_FriendListWithUID pageSize. */
        public pageSize: number;

        /** FS2RS_FriendListWithUID list. */
        public list: protocol.FriendUserInfoWithUID[];

        /**
         * Encodes the specified FS2RS_FriendListWithUID message. Does not implicitly {@link protocol.FS2RS_FriendListWithUID.verify|verify} messages.
         * @param m FS2RS_FriendListWithUID message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2RS_FriendListWithUID, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2RS_FriendListWithUID message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2RS_FriendListWithUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2RS_FriendListWithUID;
    }

    namespace FS2RS_FriendListWithUID {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50001
        }

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            Fail = 1
        }
    }

    /** Properties of a FS2RS_FriendListWithUID_Ack. */
    interface IFS2RS_FriendListWithUID_Ack {

        /** FS2RS_FriendListWithUID_Ack code */
        code?: (protocol.FS2RS_FriendListWithUID_Ack.AckCode|null);

        /** FS2RS_FriendListWithUID_Ack pageNo */
        pageNo?: (number|null);

        /** FS2RS_FriendListWithUID_Ack pageSize */
        pageSize?: (number|null);

        /** FS2RS_FriendListWithUID_Ack totalCount */
        totalCount?: (number|null);

        /** FS2RS_FriendListWithUID_Ack list */
        list?: (protocol.FriendUserInfoWithUID[]|null);
    }

    /** Represents a FS2RS_FriendListWithUID_Ack. */
    class FS2RS_FriendListWithUID_Ack implements IFS2RS_FriendListWithUID_Ack {

        /**
         * Constructs a new FS2RS_FriendListWithUID_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2RS_FriendListWithUID_Ack);

        /** FS2RS_FriendListWithUID_Ack code. */
        public code: protocol.FS2RS_FriendListWithUID_Ack.AckCode;

        /** FS2RS_FriendListWithUID_Ack pageNo. */
        public pageNo: number;

        /** FS2RS_FriendListWithUID_Ack pageSize. */
        public pageSize: number;

        /** FS2RS_FriendListWithUID_Ack totalCount. */
        public totalCount: number;

        /** FS2RS_FriendListWithUID_Ack list. */
        public list: protocol.FriendUserInfoWithUID[];

        /**
         * Encodes the specified FS2RS_FriendListWithUID_Ack message. Does not implicitly {@link protocol.FS2RS_FriendListWithUID_Ack.verify|verify} messages.
         * @param m FS2RS_FriendListWithUID_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2RS_FriendListWithUID_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2RS_FriendListWithUID_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2RS_FriendListWithUID_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2RS_FriendListWithUID_Ack;
    }

    namespace FS2RS_FriendListWithUID_Ack {

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            Fail = 1
        }
    }

    /** Properties of a C2FS_RemoveFriend. */
    interface IC2FS_RemoveFriend {

        /** C2FS_RemoveFriend liteId */
        liteId?: (string|null);
    }

    /** Represents a C2FS_RemoveFriend. */
    class C2FS_RemoveFriend implements IC2FS_RemoveFriend {

        /**
         * Constructs a new C2FS_RemoveFriend.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_RemoveFriend);

        /** C2FS_RemoveFriend liteId. */
        public liteId: string;

        /**
         * Encodes the specified C2FS_RemoveFriend message. Does not implicitly {@link protocol.C2FS_RemoveFriend.verify|verify} messages.
         * @param m C2FS_RemoveFriend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_RemoveFriend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_RemoveFriend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_RemoveFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_RemoveFriend;
    }

    namespace C2FS_RemoveFriend {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50002
        }
    }

    /** Properties of a FS2C_RemoveFriend_Ack. */
    interface IFS2C_RemoveFriend_Ack {

        /** FS2C_RemoveFriend_Ack ackCode */
        ackCode?: (protocol.FS2C_RemoveFriend_Ack.AckCode|null);

        /** FS2C_RemoveFriend_Ack liteId */
        liteId?: (string|null);
    }

    /** Represents a FS2C_RemoveFriend_Ack. */
    class FS2C_RemoveFriend_Ack implements IFS2C_RemoveFriend_Ack {

        /**
         * Constructs a new FS2C_RemoveFriend_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_RemoveFriend_Ack);

        /** FS2C_RemoveFriend_Ack ackCode. */
        public ackCode: protocol.FS2C_RemoveFriend_Ack.AckCode;

        /** FS2C_RemoveFriend_Ack liteId. */
        public liteId: string;

        /**
         * Encodes the specified FS2C_RemoveFriend_Ack message. Does not implicitly {@link protocol.FS2C_RemoveFriend_Ack.verify|verify} messages.
         * @param m FS2C_RemoveFriend_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_RemoveFriend_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_RemoveFriend_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_RemoveFriend_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_RemoveFriend_Ack;
    }

    namespace FS2C_RemoveFriend_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50003
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Repeated = 2,
            FriendLiteIdNull = 3,
            FriendLiteIdErr = 4
        }
    }

    /** Properties of a C2FS_SearchFriends. */
    interface IC2FS_SearchFriends {

        /** C2FS_SearchFriends liteId */
        liteId?: (string|null);
    }

    /** Represents a C2FS_SearchFriends. */
    class C2FS_SearchFriends implements IC2FS_SearchFriends {

        /**
         * Constructs a new C2FS_SearchFriends.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_SearchFriends);

        /** C2FS_SearchFriends liteId. */
        public liteId: string;

        /**
         * Encodes the specified C2FS_SearchFriends message. Does not implicitly {@link protocol.C2FS_SearchFriends.verify|verify} messages.
         * @param m C2FS_SearchFriends message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_SearchFriends, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_SearchFriends message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_SearchFriends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_SearchFriends;
    }

    namespace C2FS_SearchFriends {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50004
        }
    }

    /** Properties of a FS2C_SearchFriends_Ack. */
    interface IFS2C_SearchFriends_Ack {

        /** FS2C_SearchFriends_Ack ackCode */
        ackCode?: (protocol.FS2C_SearchFriends_Ack.AckCode|null);

        /** FS2C_SearchFriends_Ack userInfo */
        userInfo?: (protocol.RecommendFriendInfo|null);
    }

    /** Represents a FS2C_SearchFriends_Ack. */
    class FS2C_SearchFriends_Ack implements IFS2C_SearchFriends_Ack {

        /**
         * Constructs a new FS2C_SearchFriends_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_SearchFriends_Ack);

        /** FS2C_SearchFriends_Ack ackCode. */
        public ackCode: protocol.FS2C_SearchFriends_Ack.AckCode;

        /** FS2C_SearchFriends_Ack userInfo. */
        public userInfo?: (protocol.RecommendFriendInfo|null);

        /**
         * Encodes the specified FS2C_SearchFriends_Ack message. Does not implicitly {@link protocol.FS2C_SearchFriends_Ack.verify|verify} messages.
         * @param m FS2C_SearchFriends_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_SearchFriends_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_SearchFriends_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_SearchFriends_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_SearchFriends_Ack;
    }

    namespace FS2C_SearchFriends_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50005
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Repeated = 2,
            NoExists = 3,
            Oneself = 4,
            SerialInvalid = 5
        }
    }

    /** Properties of a C2FS_TopSettingFriend. */
    interface IC2FS_TopSettingFriend {

        /** C2FS_TopSettingFriend liteId */
        liteId?: (string|null);
    }

    /** Represents a C2FS_TopSettingFriend. */
    class C2FS_TopSettingFriend implements IC2FS_TopSettingFriend {

        /**
         * Constructs a new C2FS_TopSettingFriend.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_TopSettingFriend);

        /** C2FS_TopSettingFriend liteId. */
        public liteId: string;

        /**
         * Encodes the specified C2FS_TopSettingFriend message. Does not implicitly {@link protocol.C2FS_TopSettingFriend.verify|verify} messages.
         * @param m C2FS_TopSettingFriend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_TopSettingFriend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_TopSettingFriend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_TopSettingFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_TopSettingFriend;
    }

    namespace C2FS_TopSettingFriend {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50006
        }
    }

    /** Properties of a FS2C_TopSettingFriend_Ack. */
    interface IFS2C_TopSettingFriend_Ack {

        /** FS2C_TopSettingFriend_Ack ackCode */
        ackCode?: (protocol.FS2C_TopSettingFriend_Ack.AckCode|null);
    }

    /** Represents a FS2C_TopSettingFriend_Ack. */
    class FS2C_TopSettingFriend_Ack implements IFS2C_TopSettingFriend_Ack {

        /**
         * Constructs a new FS2C_TopSettingFriend_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_TopSettingFriend_Ack);

        /** FS2C_TopSettingFriend_Ack ackCode. */
        public ackCode: protocol.FS2C_TopSettingFriend_Ack.AckCode;

        /**
         * Encodes the specified FS2C_TopSettingFriend_Ack message. Does not implicitly {@link protocol.FS2C_TopSettingFriend_Ack.verify|verify} messages.
         * @param m FS2C_TopSettingFriend_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_TopSettingFriend_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_TopSettingFriend_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_TopSettingFriend_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_TopSettingFriend_Ack;
    }

    namespace FS2C_TopSettingFriend_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50007
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            FriendLiteIdNull = 2,
            FriendLiteIdErr = 3
        }
    }

    /** Properties of a C2FS_GetApplyList. */
    interface IC2FS_GetApplyList {
    }

    /** Represents a C2FS_GetApplyList. */
    class C2FS_GetApplyList implements IC2FS_GetApplyList {

        /**
         * Constructs a new C2FS_GetApplyList.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_GetApplyList);

        /**
         * Encodes the specified C2FS_GetApplyList message. Does not implicitly {@link protocol.C2FS_GetApplyList.verify|verify} messages.
         * @param m C2FS_GetApplyList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_GetApplyList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_GetApplyList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_GetApplyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_GetApplyList;
    }

    namespace C2FS_GetApplyList {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50008
        }
    }

    /** Properties of a FS2C_ApplyListSync. */
    interface IFS2C_ApplyListSync {

        /** FS2C_ApplyListSync ackCode */
        ackCode?: (protocol.FS2C_ApplyListSync.AckCode|null);

        /** FS2C_ApplyListSync friendList */
        friendList?: (common.FriendUserInfo[]|null);
    }

    /** Represents a FS2C_ApplyListSync. */
    class FS2C_ApplyListSync implements IFS2C_ApplyListSync {

        /**
         * Constructs a new FS2C_ApplyListSync.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_ApplyListSync);

        /** FS2C_ApplyListSync ackCode. */
        public ackCode: protocol.FS2C_ApplyListSync.AckCode;

        /** FS2C_ApplyListSync friendList. */
        public friendList: common.FriendUserInfo[];

        /**
         * Encodes the specified FS2C_ApplyListSync message. Does not implicitly {@link protocol.FS2C_ApplyListSync.verify|verify} messages.
         * @param m FS2C_ApplyListSync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_ApplyListSync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_ApplyListSync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_ApplyListSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_ApplyListSync;
    }

    namespace FS2C_ApplyListSync {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50009
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a C2FS_HandleApply. */
    interface IC2FS_HandleApply {

        /** C2FS_HandleApply approvalStatus */
        approvalStatus?: (protocol.C2FS_HandleApply.ApproveEnum|null);

        /** C2FS_HandleApply liteIds */
        liteIds?: (string[]|null);
    }

    /** Represents a C2FS_HandleApply. */
    class C2FS_HandleApply implements IC2FS_HandleApply {

        /**
         * Constructs a new C2FS_HandleApply.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_HandleApply);

        /** C2FS_HandleApply approvalStatus. */
        public approvalStatus: protocol.C2FS_HandleApply.ApproveEnum;

        /** C2FS_HandleApply liteIds. */
        public liteIds: string[];

        /**
         * Encodes the specified C2FS_HandleApply message. Does not implicitly {@link protocol.C2FS_HandleApply.verify|verify} messages.
         * @param m C2FS_HandleApply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_HandleApply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_HandleApply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_HandleApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_HandleApply;
    }

    namespace C2FS_HandleApply {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50010
        }

        /** ApproveEnum enum. */
        enum ApproveEnum {
            Default = 0,
            Agree = 1,
            DisAgree = 2
        }
    }

    /** Properties of a FS2C_HandleApply_Ack. */
    interface IFS2C_HandleApply_Ack {

        /** FS2C_HandleApply_Ack ackCode */
        ackCode?: (protocol.FS2C_HandleApply_Ack.AckCode|null);

        /** FS2C_HandleApply_Ack approvalStatus */
        approvalStatus?: (protocol.FS2C_HandleApply_Ack.ApproveEnum|null);

        /** FS2C_HandleApply_Ack liteIds */
        liteIds?: (string[]|null);

        /** FS2C_HandleApply_Ack approvedFriendList */
        approvedFriendList?: (common.FriendUserInfo[]|null);
    }

    /** Represents a FS2C_HandleApply_Ack. */
    class FS2C_HandleApply_Ack implements IFS2C_HandleApply_Ack {

        /**
         * Constructs a new FS2C_HandleApply_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_HandleApply_Ack);

        /** FS2C_HandleApply_Ack ackCode. */
        public ackCode: protocol.FS2C_HandleApply_Ack.AckCode;

        /** FS2C_HandleApply_Ack approvalStatus. */
        public approvalStatus: protocol.FS2C_HandleApply_Ack.ApproveEnum;

        /** FS2C_HandleApply_Ack liteIds. */
        public liteIds: string[];

        /** FS2C_HandleApply_Ack approvedFriendList. */
        public approvedFriendList: common.FriendUserInfo[];

        /**
         * Encodes the specified FS2C_HandleApply_Ack message. Does not implicitly {@link protocol.FS2C_HandleApply_Ack.verify|verify} messages.
         * @param m FS2C_HandleApply_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_HandleApply_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_HandleApply_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_HandleApply_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_HandleApply_Ack;
    }

    namespace FS2C_HandleApply_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50011
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Limit = 2,
            FriendLiteIdNull = 3,
            FriendLiteIdErr = 4,
            OwnFriendFull = 5
        }

        /** ApproveEnum enum. */
        enum ApproveEnum {
            Default = 0,
            Agree = 1,
            DisAgree = 2
        }
    }

    /** Properties of a C2FS_RecommendFriends. */
    interface IC2FS_RecommendFriends {

        /** C2FS_RecommendFriends refresh */
        refresh?: (boolean|null);
    }

    /** Represents a C2FS_RecommendFriends. */
    class C2FS_RecommendFriends implements IC2FS_RecommendFriends {

        /**
         * Constructs a new C2FS_RecommendFriends.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_RecommendFriends);

        /** C2FS_RecommendFriends refresh. */
        public refresh: boolean;

        /**
         * Encodes the specified C2FS_RecommendFriends message. Does not implicitly {@link protocol.C2FS_RecommendFriends.verify|verify} messages.
         * @param m C2FS_RecommendFriends message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_RecommendFriends, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_RecommendFriends message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_RecommendFriends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_RecommendFriends;
    }

    namespace C2FS_RecommendFriends {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50012
        }
    }

    /** Properties of a FS2C_RecommendFriends_Ack. */
    interface IFS2C_RecommendFriends_Ack {

        /** FS2C_RecommendFriends_Ack ackCode */
        ackCode?: (protocol.FS2C_RecommendFriends_Ack.AckCode|null);

        /** FS2C_RecommendFriends_Ack refreshTs */
        refreshTs?: (number|null);

        /** FS2C_RecommendFriends_Ack userInfo */
        userInfo?: (protocol.RecommendFriendInfo[]|null);
    }

    /** Represents a FS2C_RecommendFriends_Ack. */
    class FS2C_RecommendFriends_Ack implements IFS2C_RecommendFriends_Ack {

        /**
         * Constructs a new FS2C_RecommendFriends_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_RecommendFriends_Ack);

        /** FS2C_RecommendFriends_Ack ackCode. */
        public ackCode: protocol.FS2C_RecommendFriends_Ack.AckCode;

        /** FS2C_RecommendFriends_Ack refreshTs. */
        public refreshTs: number;

        /** FS2C_RecommendFriends_Ack userInfo. */
        public userInfo: protocol.RecommendFriendInfo[];

        /**
         * Encodes the specified FS2C_RecommendFriends_Ack message. Does not implicitly {@link protocol.FS2C_RecommendFriends_Ack.verify|verify} messages.
         * @param m FS2C_RecommendFriends_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_RecommendFriends_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_RecommendFriends_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_RecommendFriends_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_RecommendFriends_Ack;
    }

    namespace FS2C_RecommendFriends_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50013
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            RefreshErr = 2
        }
    }

    /** Properties of a C2FS_GetFriendList. */
    interface IC2FS_GetFriendList {

        /** C2FS_GetFriendList page */
        page?: (number|null);
    }

    /** Represents a C2FS_GetFriendList. */
    class C2FS_GetFriendList implements IC2FS_GetFriendList {

        /**
         * Constructs a new C2FS_GetFriendList.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_GetFriendList);

        /** C2FS_GetFriendList page. */
        public page: number;

        /**
         * Encodes the specified C2FS_GetFriendList message. Does not implicitly {@link protocol.C2FS_GetFriendList.verify|verify} messages.
         * @param m C2FS_GetFriendList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_GetFriendList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_GetFriendList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_GetFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_GetFriendList;
    }

    namespace C2FS_GetFriendList {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50014
        }
    }

    /** Properties of a FS2C_FriendListSync. */
    interface IFS2C_FriendListSync {

        /** FS2C_FriendListSync ackCode */
        ackCode?: (protocol.FS2C_FriendListSync.AckCode|null);

        /** FS2C_FriendListSync page */
        page?: (number|null);

        /** FS2C_FriendListSync total */
        total?: (number|null);

        /** FS2C_FriendListSync friendLimit */
        friendLimit?: (number|null);

        /** FS2C_FriendListSync friendList */
        friendList?: (common.FriendUserInfo[]|null);
    }

    /** Represents a FS2C_FriendListSync. */
    class FS2C_FriendListSync implements IFS2C_FriendListSync {

        /**
         * Constructs a new FS2C_FriendListSync.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_FriendListSync);

        /** FS2C_FriendListSync ackCode. */
        public ackCode: protocol.FS2C_FriendListSync.AckCode;

        /** FS2C_FriendListSync page. */
        public page: number;

        /** FS2C_FriendListSync total. */
        public total: number;

        /** FS2C_FriendListSync friendLimit. */
        public friendLimit: number;

        /** FS2C_FriendListSync friendList. */
        public friendList: common.FriendUserInfo[];

        /**
         * Encodes the specified FS2C_FriendListSync message. Does not implicitly {@link protocol.FS2C_FriendListSync.verify|verify} messages.
         * @param m FS2C_FriendListSync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_FriendListSync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_FriendListSync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_FriendListSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_FriendListSync;
    }

    namespace FS2C_FriendListSync {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50015
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a C2FS_AddFriend. */
    interface IC2FS_AddFriend {

        /** C2FS_AddFriend liteId */
        liteId?: (string|null);
    }

    /** Represents a C2FS_AddFriend. */
    class C2FS_AddFriend implements IC2FS_AddFriend {

        /**
         * Constructs a new C2FS_AddFriend.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IC2FS_AddFriend);

        /** C2FS_AddFriend liteId. */
        public liteId: string;

        /**
         * Encodes the specified C2FS_AddFriend message. Does not implicitly {@link protocol.C2FS_AddFriend.verify|verify} messages.
         * @param m C2FS_AddFriend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.C2FS_AddFriend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2FS_AddFriend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns C2FS_AddFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.C2FS_AddFriend;
    }

    namespace C2FS_AddFriend {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50016
        }
    }

    /** Properties of a FS2C_AddFriend_Ack. */
    interface IFS2C_AddFriend_Ack {

        /** FS2C_AddFriend_Ack ackCode */
        ackCode?: (protocol.FS2C_AddFriend_Ack.AckCode|null);

        /** FS2C_AddFriend_Ack liteId */
        liteId?: (string|null);
    }

    /** Represents a FS2C_AddFriend_Ack. */
    class FS2C_AddFriend_Ack implements IFS2C_AddFriend_Ack {

        /**
         * Constructs a new FS2C_AddFriend_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_AddFriend_Ack);

        /** FS2C_AddFriend_Ack ackCode. */
        public ackCode: protocol.FS2C_AddFriend_Ack.AckCode;

        /** FS2C_AddFriend_Ack liteId. */
        public liteId: string;

        /**
         * Encodes the specified FS2C_AddFriend_Ack message. Does not implicitly {@link protocol.FS2C_AddFriend_Ack.verify|verify} messages.
         * @param m FS2C_AddFriend_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_AddFriend_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_AddFriend_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_AddFriend_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_AddFriend_Ack;
    }

    namespace FS2C_AddFriend_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50017
        }

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            Repeated = 2,
            OwnFriendFull = 3,
            ApplyLimit = 4,
            FriendLiteIdNull = 5,
            FriendLiteIdErr = 6,
            FriendCountLimit = 7,
            AlreadyFriends = 8
        }
    }

    /** Properties of a FS2C_FriendInfoSync. */
    interface IFS2C_FriendInfoSync {

        /** FS2C_FriendInfoSync syncType */
        syncType?: (protocol.FS2C_FriendInfoSync.ESyncType|null);

        /** FS2C_FriendInfoSync uid */
        uid?: (string|null);

        /** FS2C_FriendInfoSync liteId */
        liteId?: (string|null);

        /** FS2C_FriendInfoSync friendInfo */
        friendInfo?: (common.FriendUserInfo|null);
    }

    /** Represents a FS2C_FriendInfoSync. */
    class FS2C_FriendInfoSync implements IFS2C_FriendInfoSync {

        /**
         * Constructs a new FS2C_FriendInfoSync.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2C_FriendInfoSync);

        /** FS2C_FriendInfoSync syncType. */
        public syncType: protocol.FS2C_FriendInfoSync.ESyncType;

        /** FS2C_FriendInfoSync uid. */
        public uid: string;

        /** FS2C_FriendInfoSync liteId. */
        public liteId: string;

        /** FS2C_FriendInfoSync friendInfo. */
        public friendInfo?: (common.FriendUserInfo|null);

        /** FS2C_FriendInfoSync _friendInfo. */
        public _friendInfo?: "friendInfo";

        /**
         * Encodes the specified FS2C_FriendInfoSync message. Does not implicitly {@link protocol.FS2C_FriendInfoSync.verify|verify} messages.
         * @param m FS2C_FriendInfoSync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2C_FriendInfoSync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2C_FriendInfoSync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2C_FriendInfoSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2C_FriendInfoSync;
    }

    namespace FS2C_FriendInfoSync {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50018
        }

        /** ESyncType enum. */
        enum ESyncType {
            None = 0,
            Add = 1,
            Remove = 2,
            StateChange = 3
        }
    }

    /** Properties of a RecommendFriendInfo. */
    interface IRecommendFriendInfo {

        /** RecommendFriendInfo userInfo */
        userInfo?: (common.FriendUserInfo|null);

        /** RecommendFriendInfo state */
        state?: (protocol.RecommendFriendInfo.State|null);
    }

    /** Represents a RecommendFriendInfo. */
    class RecommendFriendInfo implements IRecommendFriendInfo {

        /**
         * Constructs a new RecommendFriendInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IRecommendFriendInfo);

        /** RecommendFriendInfo userInfo. */
        public userInfo?: (common.FriendUserInfo|null);

        /** RecommendFriendInfo state. */
        public state: protocol.RecommendFriendInfo.State;

        /**
         * Encodes the specified RecommendFriendInfo message. Does not implicitly {@link protocol.RecommendFriendInfo.verify|verify} messages.
         * @param m RecommendFriendInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.RecommendFriendInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecommendFriendInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecommendFriendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.RecommendFriendInfo;
    }

    namespace RecommendFriendInfo {

        /** State enum. */
        enum State {
            Normal = 0,
            AlreadyFriend = 1,
            AlreadyApply = 2
        }
    }

    /** Properties of a FS2LS_GetLitePlayerInfo. */
    interface IFS2LS_GetLitePlayerInfo {

        /** FS2LS_GetLitePlayerInfo uid */
        uid?: (string|null);

        /** FS2LS_GetLitePlayerInfo liteId */
        liteId?: (string|null);

        /** FS2LS_GetLitePlayerInfo nickname */
        nickname?: (string|null);

        /** FS2LS_GetLitePlayerInfo photoUri */
        photoUri?: (string|null);

        /** FS2LS_GetLitePlayerInfo loginTs */
        loginTs?: (number|null);

        /** FS2LS_GetLitePlayerInfo logoffTs */
        logoffTs?: (number|null);

        /** FS2LS_GetLitePlayerInfo star */
        star?: (Long|null);

        /** FS2LS_GetLitePlayerInfo sign */
        sign?: (string|null);

        /** FS2LS_GetLitePlayerInfo coin */
        coin?: (Long|null);

        /** FS2LS_GetLitePlayerInfo piggyCoin */
        piggyCoin?: (Long|null);

        /** FS2LS_GetLitePlayerInfo adCode */
        adCode?: (number|null);

        /** FS2LS_GetLitePlayerInfo gender */
        gender?: (number|null);

        /** FS2LS_GetLitePlayerInfo CharacterSkin */
        CharacterSkin?: (number|null);

        /** FS2LS_GetLitePlayerInfo cityStar */
        cityStar?: (number|null);
    }

    /** Represents a FS2LS_GetLitePlayerInfo. */
    class FS2LS_GetLitePlayerInfo implements IFS2LS_GetLitePlayerInfo {

        /**
         * Constructs a new FS2LS_GetLitePlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2LS_GetLitePlayerInfo);

        /** FS2LS_GetLitePlayerInfo uid. */
        public uid: string;

        /** FS2LS_GetLitePlayerInfo liteId. */
        public liteId: string;

        /** FS2LS_GetLitePlayerInfo nickname. */
        public nickname: string;

        /** FS2LS_GetLitePlayerInfo photoUri. */
        public photoUri: string;

        /** FS2LS_GetLitePlayerInfo loginTs. */
        public loginTs: number;

        /** FS2LS_GetLitePlayerInfo logoffTs. */
        public logoffTs: number;

        /** FS2LS_GetLitePlayerInfo star. */
        public star: Long;

        /** FS2LS_GetLitePlayerInfo sign. */
        public sign: string;

        /** FS2LS_GetLitePlayerInfo coin. */
        public coin: Long;

        /** FS2LS_GetLitePlayerInfo piggyCoin. */
        public piggyCoin: Long;

        /** FS2LS_GetLitePlayerInfo adCode. */
        public adCode: number;

        /** FS2LS_GetLitePlayerInfo gender. */
        public gender: number;

        /** FS2LS_GetLitePlayerInfo CharacterSkin. */
        public CharacterSkin: number;

        /** FS2LS_GetLitePlayerInfo cityStar. */
        public cityStar: number;

        /**
         * Encodes the specified FS2LS_GetLitePlayerInfo message. Does not implicitly {@link protocol.FS2LS_GetLitePlayerInfo.verify|verify} messages.
         * @param m FS2LS_GetLitePlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2LS_GetLitePlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2LS_GetLitePlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2LS_GetLitePlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2LS_GetLitePlayerInfo;
    }

    namespace FS2LS_GetLitePlayerInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50019
        }
    }

    /** Properties of a LS2FS_UpdateRecommendList. */
    interface ILS2FS_UpdateRecommendList {
    }

    /** Represents a LS2FS_UpdateRecommendList. */
    class LS2FS_UpdateRecommendList implements ILS2FS_UpdateRecommendList {

        /**
         * Constructs a new LS2FS_UpdateRecommendList.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2FS_UpdateRecommendList);

        /**
         * Encodes the specified LS2FS_UpdateRecommendList message. Does not implicitly {@link protocol.LS2FS_UpdateRecommendList.verify|verify} messages.
         * @param m LS2FS_UpdateRecommendList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2FS_UpdateRecommendList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2FS_UpdateRecommendList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2FS_UpdateRecommendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2FS_UpdateRecommendList;
    }

    namespace LS2FS_UpdateRecommendList {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50020
        }
    }

    /** Properties of a FS2LS_UpdateRecommendList_Ack. */
    interface IFS2LS_UpdateRecommendList_Ack {

        /** FS2LS_UpdateRecommendList_Ack ackCode */
        ackCode?: (protocol.FS2LS_UpdateRecommendList_Ack.AckCode|null);
    }

    /** Represents a FS2LS_UpdateRecommendList_Ack. */
    class FS2LS_UpdateRecommendList_Ack implements IFS2LS_UpdateRecommendList_Ack {

        /**
         * Constructs a new FS2LS_UpdateRecommendList_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IFS2LS_UpdateRecommendList_Ack);

        /** FS2LS_UpdateRecommendList_Ack ackCode. */
        public ackCode: protocol.FS2LS_UpdateRecommendList_Ack.AckCode;

        /**
         * Encodes the specified FS2LS_UpdateRecommendList_Ack message. Does not implicitly {@link protocol.FS2LS_UpdateRecommendList_Ack.verify|verify} messages.
         * @param m FS2LS_UpdateRecommendList_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.FS2LS_UpdateRecommendList_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FS2LS_UpdateRecommendList_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FS2LS_UpdateRecommendList_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.FS2LS_UpdateRecommendList_Ack;
    }

    namespace FS2LS_UpdateRecommendList_Ack {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 50021
        }

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            Fail = 1
        }
    }

    /** Properties of a UserDataResponse. */
    interface IUserDataResponse {

        /** UserDataResponse id */
        id?: (number|null);

        /** UserDataResponse userId */
        userId?: (string|null);

        /** UserDataResponse payload */
        payload?: (string|null);

        /** UserDataResponse errCode */
        errCode?: (protocol.UserDataResponse.AckCode|null);
    }

    /** Represents a UserDataResponse. */
    class UserDataResponse implements IUserDataResponse {

        /**
         * Constructs a new UserDataResponse.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IUserDataResponse);

        /** UserDataResponse id. */
        public id: number;

        /** UserDataResponse userId. */
        public userId: string;

        /** UserDataResponse payload. */
        public payload: string;

        /** UserDataResponse errCode. */
        public errCode: protocol.UserDataResponse.AckCode;

        /**
         * Encodes the specified UserDataResponse message. Does not implicitly {@link protocol.UserDataResponse.verify|verify} messages.
         * @param m UserDataResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.UserDataResponse, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDataResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UserDataResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.UserDataResponse;
    }

    namespace UserDataResponse {

        /** N enum. */
        enum N {
            zero = 0,
            GetBagInfo = 1,
            CostItem = 2,
            AddItem = 3
        }

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            NoDate = 1,
            ErrCount = 2,
            InvalidItem = 3,
            DuplicateItemUid = 4
        }
    }

    /** Properties of a Logic2OrleansReq. */
    interface ILogic2OrleansReq {

        /** Logic2OrleansReq opCode */
        opCode?: (number|null);

        /** Logic2OrleansReq uid */
        uid?: (string|null);

        /** Logic2OrleansReq msgData */
        msgData?: (Uint8Array|null);
    }

    /** Represents a Logic2OrleansReq. */
    class Logic2OrleansReq implements ILogic2OrleansReq {

        /**
         * Constructs a new Logic2OrleansReq.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILogic2OrleansReq);

        /** Logic2OrleansReq opCode. */
        public opCode: number;

        /** Logic2OrleansReq uid. */
        public uid: string;

        /** Logic2OrleansReq msgData. */
        public msgData: Uint8Array;

        /**
         * Encodes the specified Logic2OrleansReq message. Does not implicitly {@link protocol.Logic2OrleansReq.verify|verify} messages.
         * @param m Logic2OrleansReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.Logic2OrleansReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Logic2OrleansReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Logic2OrleansReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.Logic2OrleansReq;
    }

    /** Properties of a Logic2GameServerNotify. */
    interface ILogic2GameServerNotify {

        /** Logic2GameServerNotify Uid */
        Uid?: (string|null);

        /** Logic2GameServerNotify msgData */
        msgData?: (Uint8Array|null);
    }

    /** Represents a Logic2GameServerNotify. */
    class Logic2GameServerNotify implements ILogic2GameServerNotify {

        /**
         * Constructs a new Logic2GameServerNotify.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILogic2GameServerNotify);

        /** Logic2GameServerNotify Uid. */
        public Uid?: (string|null);

        /** Logic2GameServerNotify msgData. */
        public msgData?: (Uint8Array|null);

        /** Logic2GameServerNotify _Uid. */
        public _Uid?: "Uid";

        /** Logic2GameServerNotify _msgData. */
        public _msgData?: "msgData";

        /**
         * Encodes the specified Logic2GameServerNotify message. Does not implicitly {@link protocol.Logic2GameServerNotify.verify|verify} messages.
         * @param m Logic2GameServerNotify message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.Logic2GameServerNotify, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Logic2GameServerNotify message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Logic2GameServerNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.Logic2GameServerNotify;
    }

    /** Properties of a NatsPublishMsg. */
    interface INatsPublishMsg {

        /** NatsPublishMsg opCode */
        opCode?: (number|null);

        /** NatsPublishMsg msgData */
        msgData?: (Uint8Array|null);
    }

    /** Represents a NatsPublishMsg. */
    class NatsPublishMsg implements INatsPublishMsg {

        /**
         * Constructs a new NatsPublishMsg.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.INatsPublishMsg);

        /** NatsPublishMsg opCode. */
        public opCode: number;

        /** NatsPublishMsg msgData. */
        public msgData: Uint8Array;

        /**
         * Encodes the specified NatsPublishMsg message. Does not implicitly {@link protocol.NatsPublishMsg.verify|verify} messages.
         * @param m NatsPublishMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.NatsPublishMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NatsPublishMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NatsPublishMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.NatsPublishMsg;
    }

    /** Properties of a SS2LS_SetGMLevel. */
    interface ISS2LS_SetGMLevel {

        /** SS2LS_SetGMLevel code */
        code?: (protocol.SS2LS_SetGMLevel.AckCode|null);

        /** SS2LS_SetGMLevel gmLevel */
        gmLevel?: (number|null);
    }

    /** Represents a SS2LS_SetGMLevel. */
    class SS2LS_SetGMLevel implements ISS2LS_SetGMLevel {

        /**
         * Constructs a new SS2LS_SetGMLevel.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_SetGMLevel);

        /** SS2LS_SetGMLevel code. */
        public code: protocol.SS2LS_SetGMLevel.AckCode;

        /** SS2LS_SetGMLevel gmLevel. */
        public gmLevel: number;

        /**
         * Encodes the specified SS2LS_SetGMLevel message. Does not implicitly {@link protocol.SS2LS_SetGMLevel.verify|verify} messages.
         * @param m SS2LS_SetGMLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_SetGMLevel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_SetGMLevel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_SetGMLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_SetGMLevel;
    }

    namespace SS2LS_SetGMLevel {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30000
        }

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            Fail = 1
        }
    }

    /** Properties of a LS2SS_SetGMLevel_Ack. */
    interface ILS2SS_SetGMLevel_Ack {

        /** LS2SS_SetGMLevel_Ack code */
        code?: (protocol.LS2SS_SetGMLevel_Ack.AckCode|null);

        /** LS2SS_SetGMLevel_Ack gmLevels */
        gmLevels?: (number[]|null);
    }

    /** Represents a LS2SS_SetGMLevel_Ack. */
    class LS2SS_SetGMLevel_Ack implements ILS2SS_SetGMLevel_Ack {

        /**
         * Constructs a new LS2SS_SetGMLevel_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_SetGMLevel_Ack);

        /** LS2SS_SetGMLevel_Ack code. */
        public code: protocol.LS2SS_SetGMLevel_Ack.AckCode;

        /** LS2SS_SetGMLevel_Ack gmLevels. */
        public gmLevels: number[];

        /**
         * Encodes the specified LS2SS_SetGMLevel_Ack message. Does not implicitly {@link protocol.LS2SS_SetGMLevel_Ack.verify|verify} messages.
         * @param m LS2SS_SetGMLevel_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_SetGMLevel_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_SetGMLevel_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_SetGMLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_SetGMLevel_Ack;
    }

    namespace LS2SS_SetGMLevel_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a SS2LS_GetGMLevel. */
    interface ISS2LS_GetGMLevel {

        /** SS2LS_GetGMLevel code */
        code?: (protocol.SS2LS_GetGMLevel.AckCode|null);
    }

    /** Represents a SS2LS_GetGMLevel. */
    class SS2LS_GetGMLevel implements ISS2LS_GetGMLevel {

        /**
         * Constructs a new SS2LS_GetGMLevel.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_GetGMLevel);

        /** SS2LS_GetGMLevel code. */
        public code: protocol.SS2LS_GetGMLevel.AckCode;

        /**
         * Encodes the specified SS2LS_GetGMLevel message. Does not implicitly {@link protocol.SS2LS_GetGMLevel.verify|verify} messages.
         * @param m SS2LS_GetGMLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_GetGMLevel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_GetGMLevel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_GetGMLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_GetGMLevel;
    }

    namespace SS2LS_GetGMLevel {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30001
        }

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            Fail = 1
        }
    }

    /** Properties of a LS2SS_GetGMLevel_Ack. */
    interface ILS2SS_GetGMLevel_Ack {

        /** LS2SS_GetGMLevel_Ack code */
        code?: (protocol.LS2SS_GetGMLevel_Ack.AckCode|null);

        /** LS2SS_GetGMLevel_Ack gmLevels */
        gmLevels?: (number[]|null);
    }

    /** Represents a LS2SS_GetGMLevel_Ack. */
    class LS2SS_GetGMLevel_Ack implements ILS2SS_GetGMLevel_Ack {

        /**
         * Constructs a new LS2SS_GetGMLevel_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_GetGMLevel_Ack);

        /** LS2SS_GetGMLevel_Ack code. */
        public code: protocol.LS2SS_GetGMLevel_Ack.AckCode;

        /** LS2SS_GetGMLevel_Ack gmLevels. */
        public gmLevels: number[];

        /**
         * Encodes the specified LS2SS_GetGMLevel_Ack message. Does not implicitly {@link protocol.LS2SS_GetGMLevel_Ack.verify|verify} messages.
         * @param m LS2SS_GetGMLevel_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_GetGMLevel_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_GetGMLevel_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_GetGMLevel_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_GetGMLevel_Ack;
    }

    namespace LS2SS_GetGMLevel_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a SS2LS_AddCoin. */
    interface ISS2LS_AddCoin {

        /** SS2LS_AddCoin uid */
        uid?: (string|null);

        /** SS2LS_AddCoin coin */
        coin?: (Long|null);
    }

    /** Represents a SS2LS_AddCoin. */
    class SS2LS_AddCoin implements ISS2LS_AddCoin {

        /**
         * Constructs a new SS2LS_AddCoin.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_AddCoin);

        /** SS2LS_AddCoin uid. */
        public uid: string;

        /** SS2LS_AddCoin coin. */
        public coin: Long;

        /**
         * Encodes the specified SS2LS_AddCoin message. Does not implicitly {@link protocol.SS2LS_AddCoin.verify|verify} messages.
         * @param m SS2LS_AddCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_AddCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_AddCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_AddCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_AddCoin;
    }

    namespace SS2LS_AddCoin {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30003
        }
    }

    /** Properties of a LS2SS_AddCoin_Ack. */
    interface ILS2SS_AddCoin_Ack {

        /** LS2SS_AddCoin_Ack code */
        code?: (protocol.LS2SS_AddCoin_Ack.AckCode|null);
    }

    /** Represents a LS2SS_AddCoin_Ack. */
    class LS2SS_AddCoin_Ack implements ILS2SS_AddCoin_Ack {

        /**
         * Constructs a new LS2SS_AddCoin_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_AddCoin_Ack);

        /** LS2SS_AddCoin_Ack code. */
        public code: protocol.LS2SS_AddCoin_Ack.AckCode;

        /**
         * Encodes the specified LS2SS_AddCoin_Ack message. Does not implicitly {@link protocol.LS2SS_AddCoin_Ack.verify|verify} messages.
         * @param m LS2SS_AddCoin_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_AddCoin_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_AddCoin_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_AddCoin_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_AddCoin_Ack;
    }

    namespace LS2SS_AddCoin_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a SS2LS_GMUpdatePlayerBaseInfo. */
    interface ISS2LS_GMUpdatePlayerBaseInfo {

        /** SS2LS_GMUpdatePlayerBaseInfo nickName */
        nickName?: (string|null);

        /** SS2LS_GMUpdatePlayerBaseInfo avatar */
        avatar?: (string|null);
    }

    /** Represents a SS2LS_GMUpdatePlayerBaseInfo. */
    class SS2LS_GMUpdatePlayerBaseInfo implements ISS2LS_GMUpdatePlayerBaseInfo {

        /**
         * Constructs a new SS2LS_GMUpdatePlayerBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_GMUpdatePlayerBaseInfo);

        /** SS2LS_GMUpdatePlayerBaseInfo nickName. */
        public nickName: string;

        /** SS2LS_GMUpdatePlayerBaseInfo avatar. */
        public avatar: string;

        /**
         * Encodes the specified SS2LS_GMUpdatePlayerBaseInfo message. Does not implicitly {@link protocol.SS2LS_GMUpdatePlayerBaseInfo.verify|verify} messages.
         * @param m SS2LS_GMUpdatePlayerBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_GMUpdatePlayerBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_GMUpdatePlayerBaseInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_GMUpdatePlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_GMUpdatePlayerBaseInfo;
    }

    namespace SS2LS_GMUpdatePlayerBaseInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30005
        }
    }

    /** Properties of a LS2SS_GMUpdatePlayerBaseInfoAck. */
    interface ILS2SS_GMUpdatePlayerBaseInfoAck {

        /** LS2SS_GMUpdatePlayerBaseInfoAck code */
        code?: (protocol.LS2SS_GMUpdatePlayerBaseInfoAck.AckCode|null);
    }

    /** Represents a LS2SS_GMUpdatePlayerBaseInfoAck. */
    class LS2SS_GMUpdatePlayerBaseInfoAck implements ILS2SS_GMUpdatePlayerBaseInfoAck {

        /**
         * Constructs a new LS2SS_GMUpdatePlayerBaseInfoAck.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_GMUpdatePlayerBaseInfoAck);

        /** LS2SS_GMUpdatePlayerBaseInfoAck code. */
        public code: protocol.LS2SS_GMUpdatePlayerBaseInfoAck.AckCode;

        /**
         * Encodes the specified LS2SS_GMUpdatePlayerBaseInfoAck message. Does not implicitly {@link protocol.LS2SS_GMUpdatePlayerBaseInfoAck.verify|verify} messages.
         * @param m LS2SS_GMUpdatePlayerBaseInfoAck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_GMUpdatePlayerBaseInfoAck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_GMUpdatePlayerBaseInfoAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_GMUpdatePlayerBaseInfoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_GMUpdatePlayerBaseInfoAck;
    }

    namespace LS2SS_GMUpdatePlayerBaseInfoAck {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a UseItem. */
    interface IUseItem {

        /** UseItem itemUId */
        itemUId?: (string|null);

        /** UseItem count */
        count?: (number|null);
    }

    /** Represents a UseItem. */
    class UseItem implements IUseItem {

        /**
         * Constructs a new UseItem.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IUseItem);

        /** UseItem itemUId. */
        public itemUId: string;

        /** UseItem count. */
        public count: number;

        /**
         * Encodes the specified UseItem message. Does not implicitly {@link protocol.UseItem.verify|verify} messages.
         * @param m UseItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.UseItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UseItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.UseItem;
    }

    namespace UseItem {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30006
        }
    }

    /** Properties of a UseItemAck. */
    interface IUseItemAck {

        /** UseItemAck items */
        items?: (common.Item[]|null);
    }

    /** Represents a UseItemAck. */
    class UseItemAck implements IUseItemAck {

        /**
         * Constructs a new UseItemAck.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.IUseItemAck);

        /** UseItemAck items. */
        public items: common.Item[];

        /**
         * Encodes the specified UseItemAck message. Does not implicitly {@link protocol.UseItemAck.verify|verify} messages.
         * @param m UseItemAck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.UseItemAck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UseItemAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UseItemAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.UseItemAck;
    }

    namespace UseItemAck {

        /** AckCode enum. */
        enum AckCode {
            Success = 0,
            NoDate = 1
        }
    }

    /** Properties of a SS2LS_AddItem. */
    interface ISS2LS_AddItem {

        /** SS2LS_AddItem uid */
        uid?: (string|null);

        /** SS2LS_AddItem itemId */
        itemId?: (number|null);

        /** SS2LS_AddItem count */
        count?: (number|null);
    }

    /** Represents a SS2LS_AddItem. */
    class SS2LS_AddItem implements ISS2LS_AddItem {

        /**
         * Constructs a new SS2LS_AddItem.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_AddItem);

        /** SS2LS_AddItem uid. */
        public uid: string;

        /** SS2LS_AddItem itemId. */
        public itemId: number;

        /** SS2LS_AddItem count. */
        public count: number;

        /**
         * Encodes the specified SS2LS_AddItem message. Does not implicitly {@link protocol.SS2LS_AddItem.verify|verify} messages.
         * @param m SS2LS_AddItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_AddItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_AddItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_AddItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_AddItem;
    }

    namespace SS2LS_AddItem {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30007
        }
    }

    /** Properties of a LS2SS_AddItem_Ack. */
    interface ILS2SS_AddItem_Ack {

        /** LS2SS_AddItem_Ack code */
        code?: (protocol.LS2SS_AddItem_Ack.AckCode|null);

        /** LS2SS_AddItem_Ack message */
        message?: (string|null);
    }

    /** Represents a LS2SS_AddItem_Ack. */
    class LS2SS_AddItem_Ack implements ILS2SS_AddItem_Ack {

        /**
         * Constructs a new LS2SS_AddItem_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_AddItem_Ack);

        /** LS2SS_AddItem_Ack code. */
        public code: protocol.LS2SS_AddItem_Ack.AckCode;

        /** LS2SS_AddItem_Ack message. */
        public message: string;

        /**
         * Encodes the specified LS2SS_AddItem_Ack message. Does not implicitly {@link protocol.LS2SS_AddItem_Ack.verify|verify} messages.
         * @param m LS2SS_AddItem_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_AddItem_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_AddItem_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_AddItem_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_AddItem_Ack;
    }

    namespace LS2SS_AddItem_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a SS2LS_AddAllSkins. */
    interface ISS2LS_AddAllSkins {

        /** SS2LS_AddAllSkins uid */
        uid?: (string|null);

        /** SS2LS_AddAllSkins dressId */
        dressId?: (number|null);
    }

    /** Represents a SS2LS_AddAllSkins. */
    class SS2LS_AddAllSkins implements ISS2LS_AddAllSkins {

        /**
         * Constructs a new SS2LS_AddAllSkins.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_AddAllSkins);

        /** SS2LS_AddAllSkins uid. */
        public uid: string;

        /** SS2LS_AddAllSkins dressId. */
        public dressId: number;

        /**
         * Encodes the specified SS2LS_AddAllSkins message. Does not implicitly {@link protocol.SS2LS_AddAllSkins.verify|verify} messages.
         * @param m SS2LS_AddAllSkins message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_AddAllSkins, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_AddAllSkins message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_AddAllSkins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_AddAllSkins;
    }

    namespace SS2LS_AddAllSkins {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30008
        }
    }

    /** Properties of a LS2SS_AddAllSkins_Ack. */
    interface ILS2SS_AddAllSkins_Ack {

        /** LS2SS_AddAllSkins_Ack code */
        code?: (protocol.LS2SS_AddAllSkins_Ack.AckCode|null);

        /** LS2SS_AddAllSkins_Ack message */
        message?: (string|null);
    }

    /** Represents a LS2SS_AddAllSkins_Ack. */
    class LS2SS_AddAllSkins_Ack implements ILS2SS_AddAllSkins_Ack {

        /**
         * Constructs a new LS2SS_AddAllSkins_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_AddAllSkins_Ack);

        /** LS2SS_AddAllSkins_Ack code. */
        public code: protocol.LS2SS_AddAllSkins_Ack.AckCode;

        /** LS2SS_AddAllSkins_Ack message. */
        public message: string;

        /**
         * Encodes the specified LS2SS_AddAllSkins_Ack message. Does not implicitly {@link protocol.LS2SS_AddAllSkins_Ack.verify|verify} messages.
         * @param m LS2SS_AddAllSkins_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_AddAllSkins_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_AddAllSkins_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_AddAllSkins_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_AddAllSkins_Ack;
    }

    namespace LS2SS_AddAllSkins_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a SS2LS_SetInfiniteModeScore. */
    interface ISS2LS_SetInfiniteModeScore {

        /** SS2LS_SetInfiniteModeScore uid */
        uid?: (string|null);

        /** SS2LS_SetInfiniteModeScore score */
        score?: (number|null);
    }

    /** Represents a SS2LS_SetInfiniteModeScore. */
    class SS2LS_SetInfiniteModeScore implements ISS2LS_SetInfiniteModeScore {

        /**
         * Constructs a new SS2LS_SetInfiniteModeScore.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_SetInfiniteModeScore);

        /** SS2LS_SetInfiniteModeScore uid. */
        public uid: string;

        /** SS2LS_SetInfiniteModeScore score. */
        public score: number;

        /**
         * Encodes the specified SS2LS_SetInfiniteModeScore message. Does not implicitly {@link protocol.SS2LS_SetInfiniteModeScore.verify|verify} messages.
         * @param m SS2LS_SetInfiniteModeScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_SetInfiniteModeScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_SetInfiniteModeScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_SetInfiniteModeScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_SetInfiniteModeScore;
    }

    namespace SS2LS_SetInfiniteModeScore {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30009
        }
    }

    /** Properties of a LS2SS_SetInfiniteModeScore_Ack. */
    interface ILS2SS_SetInfiniteModeScore_Ack {

        /** LS2SS_SetInfiniteModeScore_Ack code */
        code?: (protocol.LS2SS_SetInfiniteModeScore_Ack.AckCode|null);

        /** LS2SS_SetInfiniteModeScore_Ack message */
        message?: (string|null);
    }

    /** Represents a LS2SS_SetInfiniteModeScore_Ack. */
    class LS2SS_SetInfiniteModeScore_Ack implements ILS2SS_SetInfiniteModeScore_Ack {

        /**
         * Constructs a new LS2SS_SetInfiniteModeScore_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_SetInfiniteModeScore_Ack);

        /** LS2SS_SetInfiniteModeScore_Ack code. */
        public code: protocol.LS2SS_SetInfiniteModeScore_Ack.AckCode;

        /** LS2SS_SetInfiniteModeScore_Ack message. */
        public message: string;

        /**
         * Encodes the specified LS2SS_SetInfiniteModeScore_Ack message. Does not implicitly {@link protocol.LS2SS_SetInfiniteModeScore_Ack.verify|verify} messages.
         * @param m LS2SS_SetInfiniteModeScore_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_SetInfiniteModeScore_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_SetInfiniteModeScore_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_SetInfiniteModeScore_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_SetInfiniteModeScore_Ack;
    }

    namespace LS2SS_SetInfiniteModeScore_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

    /** Properties of a SS2LS_GmGetRaceRoom. */
    interface ISS2LS_GmGetRaceRoom {

        /** SS2LS_GmGetRaceRoom roomId */
        roomId?: (string|null);
    }

    /** Represents a SS2LS_GmGetRaceRoom. */
    class SS2LS_GmGetRaceRoom implements ISS2LS_GmGetRaceRoom {

        /**
         * Constructs a new SS2LS_GmGetRaceRoom.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_GmGetRaceRoom);

        /** SS2LS_GmGetRaceRoom roomId. */
        public roomId: string;

        /**
         * Encodes the specified SS2LS_GmGetRaceRoom message. Does not implicitly {@link protocol.SS2LS_GmGetRaceRoom.verify|verify} messages.
         * @param m SS2LS_GmGetRaceRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_GmGetRaceRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_GmGetRaceRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_GmGetRaceRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_GmGetRaceRoom;
    }

    namespace SS2LS_GmGetRaceRoom {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30010
        }
    }

    /** Properties of a LS2SS_GmGetRaceRoom_Ack. */
    interface ILS2SS_GmGetRaceRoom_Ack {

        /** LS2SS_GmGetRaceRoom_Ack ackCode */
        ackCode?: (protocol.LS2SS_GmGetRaceRoom_Ack.AckCode|null);

        /** LS2SS_GmGetRaceRoom_Ack roomId */
        roomId?: (string|null);

        /** LS2SS_GmGetRaceRoom_Ack isSettle */
        isSettle?: (boolean|null);

        /** LS2SS_GmGetRaceRoom_Ack bonusPool */
        bonusPool?: (number|null);

        /** LS2SS_GmGetRaceRoom_Ack players */
        players?: (common.MatchRoomPlayerInfo[]|null);
    }

    /** Represents a LS2SS_GmGetRaceRoom_Ack. */
    class LS2SS_GmGetRaceRoom_Ack implements ILS2SS_GmGetRaceRoom_Ack {

        /**
         * Constructs a new LS2SS_GmGetRaceRoom_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_GmGetRaceRoom_Ack);

        /** LS2SS_GmGetRaceRoom_Ack ackCode. */
        public ackCode: protocol.LS2SS_GmGetRaceRoom_Ack.AckCode;

        /** LS2SS_GmGetRaceRoom_Ack roomId. */
        public roomId: string;

        /** LS2SS_GmGetRaceRoom_Ack isSettle. */
        public isSettle: boolean;

        /** LS2SS_GmGetRaceRoom_Ack bonusPool. */
        public bonusPool: number;

        /** LS2SS_GmGetRaceRoom_Ack players. */
        public players: common.MatchRoomPlayerInfo[];

        /**
         * Encodes the specified LS2SS_GmGetRaceRoom_Ack message. Does not implicitly {@link protocol.LS2SS_GmGetRaceRoom_Ack.verify|verify} messages.
         * @param m LS2SS_GmGetRaceRoom_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_GmGetRaceRoom_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_GmGetRaceRoom_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_GmGetRaceRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_GmGetRaceRoom_Ack;
    }

    namespace LS2SS_GmGetRaceRoom_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2,
            NotInRoom = 3
        }
    }

    /** Properties of a SS2LS_HandleBanPlayer. */
    interface ISS2LS_HandleBanPlayer {
    }

    /** Represents a SS2LS_HandleBanPlayer. */
    class SS2LS_HandleBanPlayer implements ISS2LS_HandleBanPlayer {

        /**
         * Constructs a new SS2LS_HandleBanPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_HandleBanPlayer);

        /**
         * Encodes the specified SS2LS_HandleBanPlayer message. Does not implicitly {@link protocol.SS2LS_HandleBanPlayer.verify|verify} messages.
         * @param m SS2LS_HandleBanPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_HandleBanPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_HandleBanPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_HandleBanPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_HandleBanPlayer;
    }

    namespace SS2LS_HandleBanPlayer {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30011
        }
    }

    /** Properties of a LS2SS_HandleBanPlayer_Ack. */
    interface ILS2SS_HandleBanPlayer_Ack {

        /** LS2SS_HandleBanPlayer_Ack ackCode */
        ackCode?: (protocol.LS2SS_HandleBanPlayer_Ack.AckCode|null);
    }

    /** Represents a LS2SS_HandleBanPlayer_Ack. */
    class LS2SS_HandleBanPlayer_Ack implements ILS2SS_HandleBanPlayer_Ack {

        /**
         * Constructs a new LS2SS_HandleBanPlayer_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_HandleBanPlayer_Ack);

        /** LS2SS_HandleBanPlayer_Ack ackCode. */
        public ackCode: protocol.LS2SS_HandleBanPlayer_Ack.AckCode;

        /**
         * Encodes the specified LS2SS_HandleBanPlayer_Ack message. Does not implicitly {@link protocol.LS2SS_HandleBanPlayer_Ack.verify|verify} messages.
         * @param m LS2SS_HandleBanPlayer_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_HandleBanPlayer_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_HandleBanPlayer_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_HandleBanPlayer_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_HandleBanPlayer_Ack;
    }

    namespace LS2SS_HandleBanPlayer_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1,
            NoData = 2
        }
    }

    /** Properties of a SS2LS_SetUserTag. */
    interface ISS2LS_SetUserTag {

        /** SS2LS_SetUserTag uid */
        uid?: (string|null);

        /** SS2LS_SetUserTag tagId */
        tagId?: (number|null);

        /** SS2LS_SetUserTag tagValue */
        tagValue?: (number|null);
    }

    /** Represents a SS2LS_SetUserTag. */
    class SS2LS_SetUserTag implements ISS2LS_SetUserTag {

        /**
         * Constructs a new SS2LS_SetUserTag.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ISS2LS_SetUserTag);

        /** SS2LS_SetUserTag uid. */
        public uid: string;

        /** SS2LS_SetUserTag tagId. */
        public tagId: number;

        /** SS2LS_SetUserTag tagValue. */
        public tagValue: number;

        /**
         * Encodes the specified SS2LS_SetUserTag message. Does not implicitly {@link protocol.SS2LS_SetUserTag.verify|verify} messages.
         * @param m SS2LS_SetUserTag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.SS2LS_SetUserTag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SS2LS_SetUserTag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SS2LS_SetUserTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.SS2LS_SetUserTag;
    }

    namespace SS2LS_SetUserTag {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 30012
        }
    }

    /** Properties of a LS2SS_SetUserTag_Ack. */
    interface ILS2SS_SetUserTag_Ack {

        /** LS2SS_SetUserTag_Ack code */
        code?: (protocol.LS2SS_SetUserTag_Ack.AckCode|null);
    }

    /** Represents a LS2SS_SetUserTag_Ack. */
    class LS2SS_SetUserTag_Ack implements ILS2SS_SetUserTag_Ack {

        /**
         * Constructs a new LS2SS_SetUserTag_Ack.
         * @param [p] Properties to set
         */
        constructor(p?: protocol.ILS2SS_SetUserTag_Ack);

        /** LS2SS_SetUserTag_Ack code. */
        public code: protocol.LS2SS_SetUserTag_Ack.AckCode;

        /**
         * Encodes the specified LS2SS_SetUserTag_Ack message. Does not implicitly {@link protocol.LS2SS_SetUserTag_Ack.verify|verify} messages.
         * @param m LS2SS_SetUserTag_Ack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.LS2SS_SetUserTag_Ack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LS2SS_SetUserTag_Ack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LS2SS_SetUserTag_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): protocol.LS2SS_SetUserTag_Ack;
    }

    namespace LS2SS_SetUserTag_Ack {

        /** AckCode enum. */
        enum AckCode {
            Fail = 0,
            Success = 1
        }
    }

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
         * Encodes the specified AwardInfo message. Does not implicitly {@link protocol.AwardInfo.verify|verify} messages.
         * @param m AwardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.AwardInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified BlockData message. Does not implicitly {@link protocol.BlockData.verify|verify} messages.
         * @param m BlockData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.BlockData, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified GameTag message. Does not implicitly {@link protocol.GameTag.verify|verify} messages.
         * @param m GameTag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.GameTag, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified GameTagInfo message. Does not implicitly {@link protocol.GameTagInfo.verify|verify} messages.
         * @param m GameTagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.GameTagInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified UserBaseInfo message. Does not implicitly {@link protocol.UserBaseInfo.verify|verify} messages.
         * @param m UserBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.UserBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MatchStepInfo message. Does not implicitly {@link protocol.MatchStepInfo.verify|verify} messages.
         * @param m MatchStepInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.MatchStepInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MatchPlayInfo message. Does not implicitly {@link protocol.MatchPlayInfo.verify|verify} messages.
         * @param m MatchPlayInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.MatchPlayInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MailAwardItem message. Does not implicitly {@link protocol.MailAwardItem.verify|verify} messages.
         * @param m MailAwardItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.MailAwardItem, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified MailData message. Does not implicitly {@link protocol.MailData.verify|verify} messages.
         * @param m MailData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.MailData, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified UserInfo message. Does not implicitly {@link protocol.UserInfo.verify|verify} messages.
         * @param m UserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.UserInfo, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified Payslip message. Does not implicitly {@link protocol.Payslip.verify|verify} messages.
         * @param m Payslip message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.Payslip, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified CharacterData message. Does not implicitly {@link protocol.CharacterData.verify|verify} messages.
         * @param m CharacterData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.CharacterData, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified DailyGameMsg message. Does not implicitly {@link protocol.DailyGameMsg.verify|verify} messages.
         * @param m DailyGameMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.DailyGameMsg, w?: $protobuf.Writer): $protobuf.Writer;

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
         * Encodes the specified EndlessGameMsg message. Does not implicitly {@link protocol.EndlessGameMsg.verify|verify} messages.
         * @param m EndlessGameMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.EndlessGameMsg, w?: $protobuf.Writer): $protobuf.Writer;

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

/** Namespace redisPb. */
export namespace redisPb {

    /** Properties of a ClusterIps. */
    interface IClusterIps {

        /** ClusterIps Ip */
        Ip?: (string[]|null);

        /** ClusterIps UpdateTime */
        UpdateTime?: (Long|null);
    }

    /** Represents a ClusterIps. */
    class ClusterIps implements IClusterIps {

        /**
         * Constructs a new ClusterIps.
         * @param [p] Properties to set
         */
        constructor(p?: redisPb.IClusterIps);

        /** ClusterIps Ip. */
        public Ip: string[];

        /** ClusterIps UpdateTime. */
        public UpdateTime: Long;

        /**
         * Encodes the specified ClusterIps message. Does not implicitly {@link redisPb.ClusterIps.verify|verify} messages.
         * @param m ClusterIps message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: redisPb.ClusterIps, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClusterIps message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ClusterIps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): redisPb.ClusterIps;
    }
}
