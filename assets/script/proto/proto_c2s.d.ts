/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Client2Server. */
export namespace Client2Server {

    /** Properties of a C2LS_PlayerInfo. */
    interface IC2LS_PlayerInfo {

        /** C2LS_PlayerInfo openId */
        openId?: (string|null);

        /** C2LS_PlayerInfo platform */
        platform?: (common.EPlatform|null);

        /** C2LS_PlayerInfo clientOS */
        clientOS?: (common.EClientOS|null);
    }

    /** Represents a C2LS_PlayerInfo. */
    class C2LS_PlayerInfo implements IC2LS_PlayerInfo {

        /**
         * Constructs a new C2LS_PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PlayerInfo);

        /** C2LS_PlayerInfo openId. */
        public openId: string;

        /** C2LS_PlayerInfo platform. */
        public platform: common.EPlatform;

        /** C2LS_PlayerInfo clientOS. */
        public clientOS: common.EClientOS;

        /**
         * Encodes the specified C2LS_PlayerInfo message. Does not implicitly {@link Client2Server.C2LS_PlayerInfo.verify|verify} messages.
         * @param m C2LS_PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PlayerInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10001
        }
    }

    /** Properties of a C2LS_PlayerReady. */
    interface IC2LS_PlayerReady {
    }

    /** Represents a C2LS_PlayerReady. */
    class C2LS_PlayerReady implements IC2LS_PlayerReady {

        /**
         * Constructs a new C2LS_PlayerReady.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PlayerReady);

        /**
         * Encodes the specified C2LS_PlayerReady message. Does not implicitly {@link Client2Server.C2LS_PlayerReady.verify|verify} messages.
         * @param m C2LS_PlayerReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PlayerReady, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PlayerReady {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10002
        }
    }

    /** Properties of a C2LS_UpdatePlayerBaseInfo. */
    interface IC2LS_UpdatePlayerBaseInfo {

        /** C2LS_UpdatePlayerBaseInfo nickName */
        nickName?: (string|null);

        /** C2LS_UpdatePlayerBaseInfo avatar */
        avatar?: (string|null);

        /** C2LS_UpdatePlayerBaseInfo adCode */
        adCode?: (string|null);
    }

    /** Represents a C2LS_UpdatePlayerBaseInfo. */
    class C2LS_UpdatePlayerBaseInfo implements IC2LS_UpdatePlayerBaseInfo {

        /**
         * Constructs a new C2LS_UpdatePlayerBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_UpdatePlayerBaseInfo);

        /** C2LS_UpdatePlayerBaseInfo nickName. */
        public nickName: string;

        /** C2LS_UpdatePlayerBaseInfo avatar. */
        public avatar: string;

        /** C2LS_UpdatePlayerBaseInfo adCode. */
        public adCode: string;

        /**
         * Encodes the specified C2LS_UpdatePlayerBaseInfo message. Does not implicitly {@link Client2Server.C2LS_UpdatePlayerBaseInfo.verify|verify} messages.
         * @param m C2LS_UpdatePlayerBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_UpdatePlayerBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_UpdatePlayerBaseInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10003
        }
    }

    /** Properties of a C2LS_SetPlayerInfo. */
    interface IC2LS_SetPlayerInfo {

        /** C2LS_SetPlayerInfo gender */
        gender?: (common.EGender|null);

        /** C2LS_SetPlayerInfo adCode */
        adCode?: (number|null);

        /** C2LS_SetPlayerInfo sign */
        sign?: (string|null);
    }

    /** Represents a C2LS_SetPlayerInfo. */
    class C2LS_SetPlayerInfo implements IC2LS_SetPlayerInfo {

        /**
         * Constructs a new C2LS_SetPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetPlayerInfo);

        /** C2LS_SetPlayerInfo gender. */
        public gender: common.EGender;

        /** C2LS_SetPlayerInfo adCode. */
        public adCode: number;

        /** C2LS_SetPlayerInfo sign. */
        public sign: string;

        /**
         * Encodes the specified C2LS_SetPlayerInfo message. Does not implicitly {@link Client2Server.C2LS_SetPlayerInfo.verify|verify} messages.
         * @param m C2LS_SetPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetPlayerInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10005
        }
    }

    /** Properties of a GetActivityStatus. */
    interface IGetActivityStatus {
    }

    /** Represents a GetActivityStatus. */
    class GetActivityStatus implements IGetActivityStatus {

        /**
         * Constructs a new GetActivityStatus.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IGetActivityStatus);

        /**
         * Encodes the specified GetActivityStatus message. Does not implicitly {@link Client2Server.GetActivityStatus.verify|verify} messages.
         * @param m GetActivityStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.GetActivityStatus, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace GetActivityStatus {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10006
        }
    }

    /** Properties of a GetUserActivityData. */
    interface IGetUserActivityData {

        /** GetUserActivityData activityType */
        activityType?: (number|null);
    }

    /** Represents a GetUserActivityData. */
    class GetUserActivityData implements IGetUserActivityData {

        /**
         * Constructs a new GetUserActivityData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IGetUserActivityData);

        /** GetUserActivityData activityType. */
        public activityType: number;

        /**
         * Encodes the specified GetUserActivityData message. Does not implicitly {@link Client2Server.GetUserActivityData.verify|verify} messages.
         * @param m GetUserActivityData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.GetUserActivityData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace GetUserActivityData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10007
        }
    }

    /** Properties of a C2LS_SetAdCode. */
    interface IC2LS_SetAdCode {

        /** C2LS_SetAdCode adCode */
        adCode?: (string|null);
    }

    /** Represents a C2LS_SetAdCode. */
    class C2LS_SetAdCode implements IC2LS_SetAdCode {

        /**
         * Constructs a new C2LS_SetAdCode.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetAdCode);

        /** C2LS_SetAdCode adCode. */
        public adCode: string;

        /**
         * Encodes the specified C2LS_SetAdCode message. Does not implicitly {@link Client2Server.C2LS_SetAdCode.verify|verify} messages.
         * @param m C2LS_SetAdCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetAdCode, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetAdCode {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10008
        }
    }

    /** Properties of a C2LS_GetAdCode. */
    interface IC2LS_GetAdCode {
    }

    /** Represents a C2LS_GetAdCode. */
    class C2LS_GetAdCode implements IC2LS_GetAdCode {

        /**
         * Constructs a new C2LS_GetAdCode.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetAdCode);

        /**
         * Encodes the specified C2LS_GetAdCode message. Does not implicitly {@link Client2Server.C2LS_GetAdCode.verify|verify} messages.
         * @param m C2LS_GetAdCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetAdCode, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetAdCode {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10009
        }
    }

    /** Properties of a C2LS_UserBaseInfo. */
    interface IC2LS_UserBaseInfo {

        /** C2LS_UserBaseInfo isAdUser */
        isAdUser?: (boolean|null);
    }

    /** Represents a C2LS_UserBaseInfo. */
    class C2LS_UserBaseInfo implements IC2LS_UserBaseInfo {

        /**
         * Constructs a new C2LS_UserBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_UserBaseInfo);

        /** C2LS_UserBaseInfo isAdUser. */
        public isAdUser: boolean;

        /**
         * Encodes the specified C2LS_UserBaseInfo message. Does not implicitly {@link Client2Server.C2LS_UserBaseInfo.verify|verify} messages.
         * @param m C2LS_UserBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_UserBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_UserBaseInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10010
        }
    }

    /** Properties of a C2LS_StartGame. */
    interface IC2LS_StartGame {

        /** C2LS_StartGame startWithAd */
        startWithAd?: (boolean|null);

        /** C2LS_StartGame force */
        force?: (boolean|null);

        /** C2LS_StartGame levelId */
        levelId?: (number|null);
    }

    /** Represents a C2LS_StartGame. */
    class C2LS_StartGame implements IC2LS_StartGame {

        /**
         * Constructs a new C2LS_StartGame.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_StartGame);

        /** C2LS_StartGame startWithAd. */
        public startWithAd: boolean;

        /** C2LS_StartGame force. */
        public force: boolean;

        /** C2LS_StartGame levelId. */
        public levelId: number;

        /**
         * Encodes the specified C2LS_StartGame message. Does not implicitly {@link Client2Server.C2LS_StartGame.verify|verify} messages.
         * @param m C2LS_StartGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_StartGame, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_StartGame {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10011
        }
    }

    /** Properties of a C2LS_EndGame. */
    interface IC2LS_EndGame {

        /** C2LS_EndGame matchToken */
        matchToken?: (string|null);
    }

    /** Represents a C2LS_EndGame. */
    class C2LS_EndGame implements IC2LS_EndGame {

        /**
         * Constructs a new C2LS_EndGame.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_EndGame);

        /** C2LS_EndGame matchToken. */
        public matchToken: string;

        /**
         * Encodes the specified C2LS_EndGame message. Does not implicitly {@link Client2Server.C2LS_EndGame.verify|verify} messages.
         * @param m C2LS_EndGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_EndGame, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_EndGame {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10012
        }
    }

    /** Properties of a C2LS_SetGuide. */
    interface IC2LS_SetGuide {

        /** C2LS_SetGuide guideType */
        guideType?: (number|null);

        /** C2LS_SetGuide isFinish */
        isFinish?: (boolean|null);
    }

    /** Represents a C2LS_SetGuide. */
    class C2LS_SetGuide implements IC2LS_SetGuide {

        /**
         * Constructs a new C2LS_SetGuide.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetGuide);

        /** C2LS_SetGuide guideType. */
        public guideType: number;

        /** C2LS_SetGuide isFinish. */
        public isFinish: boolean;

        /**
         * Encodes the specified C2LS_SetGuide message. Does not implicitly {@link Client2Server.C2LS_SetGuide.verify|verify} messages.
         * @param m C2LS_SetGuide message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetGuide, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetGuide {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10013
        }
    }

    /** Properties of a C2LS_SetUserInfo. */
    interface IC2LS_SetUserInfo {

        /** C2LS_SetUserInfo userInfo */
        userInfo?: (protocol.UserInfo|null);

        /** C2LS_SetUserInfo characterData */
        characterData?: (protocol.CharacterData|null);
    }

    /** Represents a C2LS_SetUserInfo. */
    class C2LS_SetUserInfo implements IC2LS_SetUserInfo {

        /**
         * Constructs a new C2LS_SetUserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetUserInfo);

        /** C2LS_SetUserInfo userInfo. */
        public userInfo?: (protocol.UserInfo|null);

        /** C2LS_SetUserInfo characterData. */
        public characterData?: (protocol.CharacterData|null);

        /**
         * Encodes the specified C2LS_SetUserInfo message. Does not implicitly {@link Client2Server.C2LS_SetUserInfo.verify|verify} messages.
         * @param m C2LS_SetUserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetUserInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetUserInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10014
        }
    }

    /** Properties of a C2LS_SetGuideFinish. */
    interface IC2LS_SetGuideFinish {

        /** C2LS_SetGuideFinish guideStageId */
        guideStageId?: (number|null);
    }

    /** Represents a C2LS_SetGuideFinish. */
    class C2LS_SetGuideFinish implements IC2LS_SetGuideFinish {

        /**
         * Constructs a new C2LS_SetGuideFinish.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetGuideFinish);

        /** C2LS_SetGuideFinish guideStageId. */
        public guideStageId: number;

        /**
         * Encodes the specified C2LS_SetGuideFinish message. Does not implicitly {@link Client2Server.C2LS_SetGuideFinish.verify|verify} messages.
         * @param m C2LS_SetGuideFinish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetGuideFinish, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetGuideFinish {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10015
        }
    }

    /** Properties of a C2LS_SetNewbieFinish. */
    interface IC2LS_SetNewbieFinish {
    }

    /** Represents a C2LS_SetNewbieFinish. */
    class C2LS_SetNewbieFinish implements IC2LS_SetNewbieFinish {

        /**
         * Constructs a new C2LS_SetNewbieFinish.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetNewbieFinish);

        /**
         * Encodes the specified C2LS_SetNewbieFinish message. Does not implicitly {@link Client2Server.C2LS_SetNewbieFinish.verify|verify} messages.
         * @param m C2LS_SetNewbieFinish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetNewbieFinish, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetNewbieFinish {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10016
        }
    }

    /** Properties of a C2LS_SetAuthorize. */
    interface IC2LS_SetAuthorize {

        /** C2LS_SetAuthorize isAuthorized */
        isAuthorized?: (boolean|null);
    }

    /** Represents a C2LS_SetAuthorize. */
    class C2LS_SetAuthorize implements IC2LS_SetAuthorize {

        /**
         * Constructs a new C2LS_SetAuthorize.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SetAuthorize);

        /** C2LS_SetAuthorize isAuthorized. */
        public isAuthorized: boolean;

        /**
         * Encodes the specified C2LS_SetAuthorize message. Does not implicitly {@link Client2Server.C2LS_SetAuthorize.verify|verify} messages.
         * @param m C2LS_SetAuthorize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SetAuthorize, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SetAuthorize {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10017
        }
    }

    /** Properties of a C2LS_UpdateFuncStage. */
    interface IC2LS_UpdateFuncStage {

        /** C2LS_UpdateFuncStage funcUnlockStageId */
        funcUnlockStageId?: (number|null);
    }

    /** Represents a C2LS_UpdateFuncStage. */
    class C2LS_UpdateFuncStage implements IC2LS_UpdateFuncStage {

        /**
         * Constructs a new C2LS_UpdateFuncStage.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_UpdateFuncStage);

        /** C2LS_UpdateFuncStage funcUnlockStageId. */
        public funcUnlockStageId: number;

        /**
         * Encodes the specified C2LS_UpdateFuncStage message. Does not implicitly {@link Client2Server.C2LS_UpdateFuncStage.verify|verify} messages.
         * @param m C2LS_UpdateFuncStage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_UpdateFuncStage, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_UpdateFuncStage {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10018
        }
    }

    /** Properties of a C2LS_NoticeGamePassed. */
    interface IC2LS_NoticeGamePassed {

        /** C2LS_NoticeGamePassed matchToken */
        matchToken?: (string|null);

        /** C2LS_NoticeGamePassed score */
        score?: (number|null);
    }

    /** Represents a C2LS_NoticeGamePassed. */
    class C2LS_NoticeGamePassed implements IC2LS_NoticeGamePassed {

        /**
         * Constructs a new C2LS_NoticeGamePassed.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_NoticeGamePassed);

        /** C2LS_NoticeGamePassed matchToken. */
        public matchToken: string;

        /** C2LS_NoticeGamePassed score. */
        public score: number;

        /**
         * Encodes the specified C2LS_NoticeGamePassed message. Does not implicitly {@link Client2Server.C2LS_NoticeGamePassed.verify|verify} messages.
         * @param m C2LS_NoticeGamePassed message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_NoticeGamePassed, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_NoticeGamePassed {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10020
        }
    }

    /** Properties of a C2LS_InfiniteScore. */
    interface IC2LS_InfiniteScore {

        /** C2LS_InfiniteScore score */
        score?: (number|null);
    }

    /** Represents a C2LS_InfiniteScore. */
    class C2LS_InfiniteScore implements IC2LS_InfiniteScore {

        /**
         * Constructs a new C2LS_InfiniteScore.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_InfiniteScore);

        /** C2LS_InfiniteScore score. */
        public score: number;

        /**
         * Encodes the specified C2LS_InfiniteScore message. Does not implicitly {@link Client2Server.C2LS_InfiniteScore.verify|verify} messages.
         * @param m C2LS_InfiniteScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_InfiniteScore, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_InfiniteScore {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10021
        }
    }

    /** Properties of a C2LS_GetInfiniteRankList. */
    interface IC2LS_GetInfiniteRankList {
    }

    /** Represents a C2LS_GetInfiniteRankList. */
    class C2LS_GetInfiniteRankList implements IC2LS_GetInfiniteRankList {

        /**
         * Constructs a new C2LS_GetInfiniteRankList.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetInfiniteRankList);

        /**
         * Encodes the specified C2LS_GetInfiniteRankList message. Does not implicitly {@link Client2Server.C2LS_GetInfiniteRankList.verify|verify} messages.
         * @param m C2LS_GetInfiniteRankList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetInfiniteRankList, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetInfiniteRankList {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10022
        }
    }

    /** Properties of a C2LS_StatisticsAdd. */
    interface IC2LS_StatisticsAdd {

        /** C2LS_StatisticsAdd action */
        action?: (Client2Server.C2LS_StatisticsAdd.Action|null);

        /** C2LS_StatisticsAdd addCount */
        addCount?: (number|null);
    }

    /** Represents a C2LS_StatisticsAdd. */
    class C2LS_StatisticsAdd implements IC2LS_StatisticsAdd {

        /**
         * Constructs a new C2LS_StatisticsAdd.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_StatisticsAdd);

        /** C2LS_StatisticsAdd action. */
        public action: Client2Server.C2LS_StatisticsAdd.Action;

        /** C2LS_StatisticsAdd addCount. */
        public addCount: number;

        /**
         * Encodes the specified C2LS_StatisticsAdd message. Does not implicitly {@link Client2Server.C2LS_StatisticsAdd.verify|verify} messages.
         * @param m C2LS_StatisticsAdd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_StatisticsAdd, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_StatisticsAdd {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10023
        }

        /** Action enum. */
        enum Action {
            Default = 0,
            WatchAd = 1
        }
    }

    /** Properties of a C2LS_StatisticsGet. */
    interface IC2LS_StatisticsGet {
    }

    /** Represents a C2LS_StatisticsGet. */
    class C2LS_StatisticsGet implements IC2LS_StatisticsGet {

        /**
         * Constructs a new C2LS_StatisticsGet.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_StatisticsGet);

        /**
         * Encodes the specified C2LS_StatisticsGet message. Does not implicitly {@link Client2Server.C2LS_StatisticsGet.verify|verify} messages.
         * @param m C2LS_StatisticsGet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_StatisticsGet, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_StatisticsGet {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10024
        }
    }

    /** Properties of a C2LS_ShareCountGet. */
    interface IC2LS_ShareCountGet {
    }

    /** Represents a C2LS_ShareCountGet. */
    class C2LS_ShareCountGet implements IC2LS_ShareCountGet {

        /**
         * Constructs a new C2LS_ShareCountGet.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ShareCountGet);

        /**
         * Encodes the specified C2LS_ShareCountGet message. Does not implicitly {@link Client2Server.C2LS_ShareCountGet.verify|verify} messages.
         * @param m C2LS_ShareCountGet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ShareCountGet, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ShareCountGet {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10025
        }
    }

    /** EPuzzlePropType enum. */
    enum EPuzzlePropType {
        PNone = 0,
        Remove = 1,
        Revoke = 2,
        Random = 3,
        Revive = 4,
        Prompt = 5,
        ExtraTime = 6
    }

    /** Properties of a C2LS_ShareCountSet. */
    interface IC2LS_ShareCountSet {

        /** C2LS_ShareCountSet shareItemType */
        shareItemType?: (Client2Server.EPuzzlePropType|null);
    }

    /** Represents a C2LS_ShareCountSet. */
    class C2LS_ShareCountSet implements IC2LS_ShareCountSet {

        /**
         * Constructs a new C2LS_ShareCountSet.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ShareCountSet);

        /** C2LS_ShareCountSet shareItemType. */
        public shareItemType: Client2Server.EPuzzlePropType;

        /**
         * Encodes the specified C2LS_ShareCountSet message. Does not implicitly {@link Client2Server.C2LS_ShareCountSet.verify|verify} messages.
         * @param m C2LS_ShareCountSet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ShareCountSet, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ShareCountSet {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10026
        }
    }

    /** Properties of a C2LS_GetDressUpInfo. */
    interface IC2LS_GetDressUpInfo {
    }

    /** Represents a C2LS_GetDressUpInfo. */
    class C2LS_GetDressUpInfo implements IC2LS_GetDressUpInfo {

        /**
         * Constructs a new C2LS_GetDressUpInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetDressUpInfo);

        /**
         * Encodes the specified C2LS_GetDressUpInfo message. Does not implicitly {@link Client2Server.C2LS_GetDressUpInfo.verify|verify} messages.
         * @param m C2LS_GetDressUpInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetDressUpInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetDressUpInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10027
        }
    }

    /** Properties of a C2LS_ViewSkins. */
    interface IC2LS_ViewSkins {

        /** C2LS_ViewSkins skinType */
        skinType?: (number[]|null);
    }

    /** Represents a C2LS_ViewSkins. */
    class C2LS_ViewSkins implements IC2LS_ViewSkins {

        /**
         * Constructs a new C2LS_ViewSkins.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ViewSkins);

        /** C2LS_ViewSkins skinType. */
        public skinType: number[];

        /**
         * Encodes the specified C2LS_ViewSkins message. Does not implicitly {@link Client2Server.C2LS_ViewSkins.verify|verify} messages.
         * @param m C2LS_ViewSkins message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ViewSkins, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ViewSkins {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10028
        }
    }

    /** Properties of a C2LS_SkinDressUp. */
    interface IC2LS_SkinDressUp {

        /** C2LS_SkinDressUp skinIds */
        skinIds?: (number[]|null);
    }

    /** Represents a C2LS_SkinDressUp. */
    class C2LS_SkinDressUp implements IC2LS_SkinDressUp {

        /**
         * Constructs a new C2LS_SkinDressUp.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SkinDressUp);

        /** C2LS_SkinDressUp skinIds. */
        public skinIds: number[];

        /**
         * Encodes the specified C2LS_SkinDressUp message. Does not implicitly {@link Client2Server.C2LS_SkinDressUp.verify|verify} messages.
         * @param m C2LS_SkinDressUp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SkinDressUp, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SkinDressUp {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10029
        }
    }

    /** Properties of a C2LS_GetDailyLevelData. */
    interface IC2LS_GetDailyLevelData {
    }

    /** Represents a C2LS_GetDailyLevelData. */
    class C2LS_GetDailyLevelData implements IC2LS_GetDailyLevelData {

        /**
         * Constructs a new C2LS_GetDailyLevelData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetDailyLevelData);

        /**
         * Encodes the specified C2LS_GetDailyLevelData message. Does not implicitly {@link Client2Server.C2LS_GetDailyLevelData.verify|verify} messages.
         * @param m C2LS_GetDailyLevelData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetDailyLevelData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetDailyLevelData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10030
        }
    }

    /** Properties of a C2LS_SyncGameData. */
    interface IC2LS_SyncGameData {

        /** C2LS_SyncGameData token */
        token?: (string|null);

        /** C2LS_SyncGameData stepData */
        stepData?: (string|null);

        /** C2LS_SyncGameData snapshot */
        snapshot?: (string|null);

        /** C2LS_SyncGameData minStep */
        minStep?: (number|null);

        /** C2LS_SyncGameData maxStep */
        maxStep?: (number|null);
    }

    /** Represents a C2LS_SyncGameData. */
    class C2LS_SyncGameData implements IC2LS_SyncGameData {

        /**
         * Constructs a new C2LS_SyncGameData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SyncGameData);

        /** C2LS_SyncGameData token. */
        public token: string;

        /** C2LS_SyncGameData stepData. */
        public stepData: string;

        /** C2LS_SyncGameData snapshot. */
        public snapshot: string;

        /** C2LS_SyncGameData minStep. */
        public minStep: number;

        /** C2LS_SyncGameData maxStep. */
        public maxStep: number;

        /**
         * Encodes the specified C2LS_SyncGameData message. Does not implicitly {@link Client2Server.C2LS_SyncGameData.verify|verify} messages.
         * @param m C2LS_SyncGameData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SyncGameData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SyncGameData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10031
        }
    }

    /** Properties of a C2LS_RestartGame. */
    interface IC2LS_RestartGame {

        /** C2LS_RestartGame matchToken */
        matchToken?: (string|null);
    }

    /** Represents a C2LS_RestartGame. */
    class C2LS_RestartGame implements IC2LS_RestartGame {

        /**
         * Constructs a new C2LS_RestartGame.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_RestartGame);

        /** C2LS_RestartGame matchToken. */
        public matchToken: string;

        /**
         * Encodes the specified C2LS_RestartGame message. Does not implicitly {@link Client2Server.C2LS_RestartGame.verify|verify} messages.
         * @param m C2LS_RestartGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_RestartGame, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_RestartGame {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10032
        }
    }

    /** Properties of a C2LS_StartEndless. */
    interface IC2LS_StartEndless {

        /** C2LS_StartEndless startWithAd */
        startWithAd?: (boolean|null);

        /** C2LS_StartEndless force */
        force?: (boolean|null);
    }

    /** Represents a C2LS_StartEndless. */
    class C2LS_StartEndless implements IC2LS_StartEndless {

        /**
         * Constructs a new C2LS_StartEndless.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_StartEndless);

        /** C2LS_StartEndless startWithAd. */
        public startWithAd: boolean;

        /** C2LS_StartEndless force. */
        public force: boolean;

        /**
         * Encodes the specified C2LS_StartEndless message. Does not implicitly {@link Client2Server.C2LS_StartEndless.verify|verify} messages.
         * @param m C2LS_StartEndless message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_StartEndless, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_StartEndless {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10035
        }
    }

    /** Properties of a C2LS_RestartEndless. */
    interface IC2LS_RestartEndless {

        /** C2LS_RestartEndless matchToken */
        matchToken?: (string|null);
    }

    /** Represents a C2LS_RestartEndless. */
    class C2LS_RestartEndless implements IC2LS_RestartEndless {

        /**
         * Constructs a new C2LS_RestartEndless.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_RestartEndless);

        /** C2LS_RestartEndless matchToken. */
        public matchToken: string;

        /**
         * Encodes the specified C2LS_RestartEndless message. Does not implicitly {@link Client2Server.C2LS_RestartEndless.verify|verify} messages.
         * @param m C2LS_RestartEndless message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_RestartEndless, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_RestartEndless {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10036
        }
    }

    /** Properties of a C2LS_EndlessGameOver. */
    interface IC2LS_EndlessGameOver {

        /** C2LS_EndlessGameOver matchToken */
        matchToken?: (string|null);

        /** C2LS_EndlessGameOver score */
        score?: (number|null);

        /** C2LS_EndlessGameOver time */
        time?: (number|null);
    }

    /** Represents a C2LS_EndlessGameOver. */
    class C2LS_EndlessGameOver implements IC2LS_EndlessGameOver {

        /**
         * Constructs a new C2LS_EndlessGameOver.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_EndlessGameOver);

        /** C2LS_EndlessGameOver matchToken. */
        public matchToken: string;

        /** C2LS_EndlessGameOver score. */
        public score: number;

        /** C2LS_EndlessGameOver time. */
        public time: number;

        /**
         * Encodes the specified C2LS_EndlessGameOver message. Does not implicitly {@link Client2Server.C2LS_EndlessGameOver.verify|verify} messages.
         * @param m C2LS_EndlessGameOver message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_EndlessGameOver, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_EndlessGameOver {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10037
        }
    }

    /** Properties of a C2LS_SettleSalary. */
    interface IC2LS_SettleSalary {
    }

    /** Represents a C2LS_SettleSalary. */
    class C2LS_SettleSalary implements IC2LS_SettleSalary {

        /**
         * Constructs a new C2LS_SettleSalary.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SettleSalary);

        /**
         * Encodes the specified C2LS_SettleSalary message. Does not implicitly {@link Client2Server.C2LS_SettleSalary.verify|verify} messages.
         * @param m C2LS_SettleSalary message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SettleSalary, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SettleSalary {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10038
        }
    }

    /** Properties of a C2LS_ShopInfo. */
    interface IC2LS_ShopInfo {
    }

    /** Represents a C2LS_ShopInfo. */
    class C2LS_ShopInfo implements IC2LS_ShopInfo {

        /**
         * Constructs a new C2LS_ShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ShopInfo);

        /**
         * Encodes the specified C2LS_ShopInfo message. Does not implicitly {@link Client2Server.C2LS_ShopInfo.verify|verify} messages.
         * @param m C2LS_ShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ShopInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ShopInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10039
        }
    }

    /** Properties of a C2LS_ShopRefresh. */
    interface IC2LS_ShopRefresh {
    }

    /** Represents a C2LS_ShopRefresh. */
    class C2LS_ShopRefresh implements IC2LS_ShopRefresh {

        /**
         * Constructs a new C2LS_ShopRefresh.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ShopRefresh);

        /**
         * Encodes the specified C2LS_ShopRefresh message. Does not implicitly {@link Client2Server.C2LS_ShopRefresh.verify|verify} messages.
         * @param m C2LS_ShopRefresh message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ShopRefresh, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ShopRefresh {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10040
        }
    }

    /** Properties of a C2LS_ShopBuy. */
    interface IC2LS_ShopBuy {

        /** C2LS_ShopBuy itemId */
        itemId?: (number|null);
    }

    /** Represents a C2LS_ShopBuy. */
    class C2LS_ShopBuy implements IC2LS_ShopBuy {

        /**
         * Constructs a new C2LS_ShopBuy.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ShopBuy);

        /** C2LS_ShopBuy itemId. */
        public itemId: number;

        /**
         * Encodes the specified C2LS_ShopBuy message. Does not implicitly {@link Client2Server.C2LS_ShopBuy.verify|verify} messages.
         * @param m C2LS_ShopBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ShopBuy, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ShopBuy {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10041
        }
    }

    /** Properties of a C2LS_RequestGameData. */
    interface IC2LS_RequestGameData {
    }

    /** Represents a C2LS_RequestGameData. */
    class C2LS_RequestGameData implements IC2LS_RequestGameData {

        /**
         * Constructs a new C2LS_RequestGameData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_RequestGameData);

        /**
         * Encodes the specified C2LS_RequestGameData message. Does not implicitly {@link Client2Server.C2LS_RequestGameData.verify|verify} messages.
         * @param m C2LS_RequestGameData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_RequestGameData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_RequestGameData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10042
        }
    }

    /** Properties of a C2LS_SyncEndlessGameData. */
    interface IC2LS_SyncEndlessGameData {

        /** C2LS_SyncEndlessGameData token */
        token?: (string|null);

        /** C2LS_SyncEndlessGameData stepData */
        stepData?: (string|null);

        /** C2LS_SyncEndlessGameData snapshot */
        snapshot?: (string|null);

        /** C2LS_SyncEndlessGameData minStep */
        minStep?: (number|null);

        /** C2LS_SyncEndlessGameData maxStep */
        maxStep?: (number|null);

        /** C2LS_SyncEndlessGameData score */
        score?: (number|null);
    }

    /** Represents a C2LS_SyncEndlessGameData. */
    class C2LS_SyncEndlessGameData implements IC2LS_SyncEndlessGameData {

        /**
         * Constructs a new C2LS_SyncEndlessGameData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SyncEndlessGameData);

        /** C2LS_SyncEndlessGameData token. */
        public token: string;

        /** C2LS_SyncEndlessGameData stepData. */
        public stepData: string;

        /** C2LS_SyncEndlessGameData snapshot. */
        public snapshot: string;

        /** C2LS_SyncEndlessGameData minStep. */
        public minStep: number;

        /** C2LS_SyncEndlessGameData maxStep. */
        public maxStep: number;

        /** C2LS_SyncEndlessGameData score. */
        public score: number;

        /**
         * Encodes the specified C2LS_SyncEndlessGameData message. Does not implicitly {@link Client2Server.C2LS_SyncEndlessGameData.verify|verify} messages.
         * @param m C2LS_SyncEndlessGameData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SyncEndlessGameData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SyncEndlessGameData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10043
        }
    }

    /** Properties of a C2LS_GetRoomInfo. */
    interface IC2LS_GetRoomInfo {
    }

    /** Represents a C2LS_GetRoomInfo. */
    class C2LS_GetRoomInfo implements IC2LS_GetRoomInfo {

        /**
         * Constructs a new C2LS_GetRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetRoomInfo);

        /**
         * Encodes the specified C2LS_GetRoomInfo message. Does not implicitly {@link Client2Server.C2LS_GetRoomInfo.verify|verify} messages.
         * @param m C2LS_GetRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetRoomInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10045
        }
    }

    /** Properties of a C2LS_ShareJoinRoom. */
    interface IC2LS_ShareJoinRoom {

        /** C2LS_ShareJoinRoom uid */
        uid?: (string|null);
    }

    /** Represents a C2LS_ShareJoinRoom. */
    class C2LS_ShareJoinRoom implements IC2LS_ShareJoinRoom {

        /**
         * Constructs a new C2LS_ShareJoinRoom.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ShareJoinRoom);

        /** C2LS_ShareJoinRoom uid. */
        public uid: string;

        /**
         * Encodes the specified C2LS_ShareJoinRoom message. Does not implicitly {@link Client2Server.C2LS_ShareJoinRoom.verify|verify} messages.
         * @param m C2LS_ShareJoinRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ShareJoinRoom, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ShareJoinRoom {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10046
        }
    }

    /** Properties of a C2LS_RemoveMember. */
    interface IC2LS_RemoveMember {

        /** C2LS_RemoveMember uid */
        uid?: (string|null);
    }

    /** Represents a C2LS_RemoveMember. */
    class C2LS_RemoveMember implements IC2LS_RemoveMember {

        /**
         * Constructs a new C2LS_RemoveMember.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_RemoveMember);

        /** C2LS_RemoveMember uid. */
        public uid: string;

        /**
         * Encodes the specified C2LS_RemoveMember message. Does not implicitly {@link Client2Server.C2LS_RemoveMember.verify|verify} messages.
         * @param m C2LS_RemoveMember message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_RemoveMember, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_RemoveMember {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10047
        }
    }

    /** Properties of a C2LS_GetFriendIncome. */
    interface IC2LS_GetFriendIncome {

        /** C2LS_GetFriendIncome uid */
        uid?: (string|null);
    }

    /** Represents a C2LS_GetFriendIncome. */
    class C2LS_GetFriendIncome implements IC2LS_GetFriendIncome {

        /**
         * Constructs a new C2LS_GetFriendIncome.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetFriendIncome);

        /** C2LS_GetFriendIncome uid. */
        public uid: string;

        /**
         * Encodes the specified C2LS_GetFriendIncome message. Does not implicitly {@link Client2Server.C2LS_GetFriendIncome.verify|verify} messages.
         * @param m C2LS_GetFriendIncome message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetFriendIncome, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetFriendIncome {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10048
        }
    }

    /** Properties of a C2LS_GetSettleSalary. */
    interface IC2LS_GetSettleSalary {
    }

    /** Represents a C2LS_GetSettleSalary. */
    class C2LS_GetSettleSalary implements IC2LS_GetSettleSalary {

        /**
         * Constructs a new C2LS_GetSettleSalary.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetSettleSalary);

        /**
         * Encodes the specified C2LS_GetSettleSalary message. Does not implicitly {@link Client2Server.C2LS_GetSettleSalary.verify|verify} messages.
         * @param m C2LS_GetSettleSalary message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetSettleSalary, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetSettleSalary {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10049
        }
    }

    /** Properties of a C2LS_BuyExtraGift. */
    interface IC2LS_BuyExtraGift {

        /** C2LS_BuyExtraGift price */
        price?: (number|null);
    }

    /** Represents a C2LS_BuyExtraGift. */
    class C2LS_BuyExtraGift implements IC2LS_BuyExtraGift {

        /**
         * Constructs a new C2LS_BuyExtraGift.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_BuyExtraGift);

        /** C2LS_BuyExtraGift price. */
        public price: number;

        /**
         * Encodes the specified C2LS_BuyExtraGift message. Does not implicitly {@link Client2Server.C2LS_BuyExtraGift.verify|verify} messages.
         * @param m C2LS_BuyExtraGift message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_BuyExtraGift, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_BuyExtraGift {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10050
        }
    }

    /** Properties of a C2LS_GetWeekReward. */
    interface IC2LS_GetWeekReward {

        /** C2LS_GetWeekReward dressId */
        dressId?: (number|null);

        /** C2LS_GetWeekReward stage */
        stage?: (number|null);
    }

    /** Represents a C2LS_GetWeekReward. */
    class C2LS_GetWeekReward implements IC2LS_GetWeekReward {

        /**
         * Constructs a new C2LS_GetWeekReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetWeekReward);

        /** C2LS_GetWeekReward dressId. */
        public dressId: number;

        /** C2LS_GetWeekReward stage. */
        public stage: number;

        /**
         * Encodes the specified C2LS_GetWeekReward message. Does not implicitly {@link Client2Server.C2LS_GetWeekReward.verify|verify} messages.
         * @param m C2LS_GetWeekReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetWeekReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetWeekReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10051
        }
    }

    /** Properties of a C2LS_GetWeekRewardData. */
    interface IC2LS_GetWeekRewardData {
    }

    /** Represents a C2LS_GetWeekRewardData. */
    class C2LS_GetWeekRewardData implements IC2LS_GetWeekRewardData {

        /**
         * Constructs a new C2LS_GetWeekRewardData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetWeekRewardData);

        /**
         * Encodes the specified C2LS_GetWeekRewardData message. Does not implicitly {@link Client2Server.C2LS_GetWeekRewardData.verify|verify} messages.
         * @param m C2LS_GetWeekRewardData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetWeekRewardData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetWeekRewardData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10052
        }
    }

    /** Properties of a C2LS_StartNewbieGame. */
    interface IC2LS_StartNewbieGame {
    }

    /** Represents a C2LS_StartNewbieGame. */
    class C2LS_StartNewbieGame implements IC2LS_StartNewbieGame {

        /**
         * Constructs a new C2LS_StartNewbieGame.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_StartNewbieGame);

        /**
         * Encodes the specified C2LS_StartNewbieGame message. Does not implicitly {@link Client2Server.C2LS_StartNewbieGame.verify|verify} messages.
         * @param m C2LS_StartNewbieGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_StartNewbieGame, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_StartNewbieGame {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10053
        }
    }

    /** Properties of a C2LS_EndNewbieGame. */
    interface IC2LS_EndNewbieGame {
    }

    /** Represents a C2LS_EndNewbieGame. */
    class C2LS_EndNewbieGame implements IC2LS_EndNewbieGame {

        /**
         * Constructs a new C2LS_EndNewbieGame.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_EndNewbieGame);

        /**
         * Encodes the specified C2LS_EndNewbieGame message. Does not implicitly {@link Client2Server.C2LS_EndNewbieGame.verify|verify} messages.
         * @param m C2LS_EndNewbieGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_EndNewbieGame, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_EndNewbieGame {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10054
        }
    }

    /** Properties of a C2LS_GetAllServerBroadcastUsers. */
    interface IC2LS_GetAllServerBroadcastUsers {
    }

    /** Represents a C2LS_GetAllServerBroadcastUsers. */
    class C2LS_GetAllServerBroadcastUsers implements IC2LS_GetAllServerBroadcastUsers {

        /**
         * Constructs a new C2LS_GetAllServerBroadcastUsers.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetAllServerBroadcastUsers);

        /**
         * Encodes the specified C2LS_GetAllServerBroadcastUsers message. Does not implicitly {@link Client2Server.C2LS_GetAllServerBroadcastUsers.verify|verify} messages.
         * @param m C2LS_GetAllServerBroadcastUsers message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetAllServerBroadcastUsers, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetAllServerBroadcastUsers {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10055
        }
    }

    /** Properties of a C2LS_GetDailyLevelList. */
    interface IC2LS_GetDailyLevelList {
    }

    /** Represents a C2LS_GetDailyLevelList. */
    class C2LS_GetDailyLevelList implements IC2LS_GetDailyLevelList {

        /**
         * Constructs a new C2LS_GetDailyLevelList.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetDailyLevelList);

        /**
         * Encodes the specified C2LS_GetDailyLevelList message. Does not implicitly {@link Client2Server.C2LS_GetDailyLevelList.verify|verify} messages.
         * @param m C2LS_GetDailyLevelList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetDailyLevelList, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetDailyLevelList {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10056
        }
    }

    /** Properties of a C2LS_GetDailyLevelDataOrder. */
    interface IC2LS_GetDailyLevelDataOrder {
    }

    /** Represents a C2LS_GetDailyLevelDataOrder. */
    class C2LS_GetDailyLevelDataOrder implements IC2LS_GetDailyLevelDataOrder {

        /**
         * Constructs a new C2LS_GetDailyLevelDataOrder.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetDailyLevelDataOrder);

        /**
         * Encodes the specified C2LS_GetDailyLevelDataOrder message. Does not implicitly {@link Client2Server.C2LS_GetDailyLevelDataOrder.verify|verify} messages.
         * @param m C2LS_GetDailyLevelDataOrder message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetDailyLevelDataOrder, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetDailyLevelDataOrder {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10057
        }
    }

    /** Properties of a C2LS_GetDailyMatchRoomData. */
    interface IC2LS_GetDailyMatchRoomData {
    }

    /** Represents a C2LS_GetDailyMatchRoomData. */
    class C2LS_GetDailyMatchRoomData implements IC2LS_GetDailyMatchRoomData {

        /**
         * Constructs a new C2LS_GetDailyMatchRoomData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetDailyMatchRoomData);

        /**
         * Encodes the specified C2LS_GetDailyMatchRoomData message. Does not implicitly {@link Client2Server.C2LS_GetDailyMatchRoomData.verify|verify} messages.
         * @param m C2LS_GetDailyMatchRoomData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetDailyMatchRoomData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetDailyMatchRoomData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10058
        }
    }

    /** Properties of a C2LS_GetDailyRaceScore. */
    interface IC2LS_GetDailyRaceScore {
    }

    /** Represents a C2LS_GetDailyRaceScore. */
    class C2LS_GetDailyRaceScore implements IC2LS_GetDailyRaceScore {

        /**
         * Constructs a new C2LS_GetDailyRaceScore.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetDailyRaceScore);

        /**
         * Encodes the specified C2LS_GetDailyRaceScore message. Does not implicitly {@link Client2Server.C2LS_GetDailyRaceScore.verify|verify} messages.
         * @param m C2LS_GetDailyRaceScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetDailyRaceScore, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetDailyRaceScore {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10059
        }
    }

    /** Properties of a C2LS_JumpBind. */
    interface IC2LS_JumpBind {

        /** C2LS_JumpBind bindCode */
        bindCode?: (string|null);
    }

    /** Represents a C2LS_JumpBind. */
    class C2LS_JumpBind implements IC2LS_JumpBind {

        /**
         * Constructs a new C2LS_JumpBind.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_JumpBind);

        /** C2LS_JumpBind bindCode. */
        public bindCode: string;

        /**
         * Encodes the specified C2LS_JumpBind message. Does not implicitly {@link Client2Server.C2LS_JumpBind.verify|verify} messages.
         * @param m C2LS_JumpBind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_JumpBind, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_JumpBind {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10060
        }
    }

    /** Properties of a C2LS_GetPersonalInfo. */
    interface IC2LS_GetPersonalInfo {

        /** C2LS_GetPersonalInfo uid */
        uid?: (string|null);
    }

    /** Represents a C2LS_GetPersonalInfo. */
    class C2LS_GetPersonalInfo implements IC2LS_GetPersonalInfo {

        /**
         * Constructs a new C2LS_GetPersonalInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetPersonalInfo);

        /** C2LS_GetPersonalInfo uid. */
        public uid: string;

        /**
         * Encodes the specified C2LS_GetPersonalInfo message. Does not implicitly {@link Client2Server.C2LS_GetPersonalInfo.verify|verify} messages.
         * @param m C2LS_GetPersonalInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetPersonalInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetPersonalInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10061
        }
    }

    /** Properties of a C2LS_CollectMoonCake. */
    interface IC2LS_CollectMoonCake {

        /** C2LS_CollectMoonCake score */
        score?: (number|null);

        /** C2LS_CollectMoonCake count */
        count?: (number|null);
    }

    /** Represents a C2LS_CollectMoonCake. */
    class C2LS_CollectMoonCake implements IC2LS_CollectMoonCake {

        /**
         * Constructs a new C2LS_CollectMoonCake.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_CollectMoonCake);

        /** C2LS_CollectMoonCake score. */
        public score: number;

        /** C2LS_CollectMoonCake count. */
        public count: number;

        /**
         * Encodes the specified C2LS_CollectMoonCake message. Does not implicitly {@link Client2Server.C2LS_CollectMoonCake.verify|verify} messages.
         * @param m C2LS_CollectMoonCake message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_CollectMoonCake, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_CollectMoonCake {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10062
        }
    }

    /** Properties of a C2LS_ClaimMoonCakeReward. */
    interface IC2LS_ClaimMoonCakeReward {

        /** C2LS_ClaimMoonCakeReward rewardIndex */
        rewardIndex?: (number|null);
    }

    /** Represents a C2LS_ClaimMoonCakeReward. */
    class C2LS_ClaimMoonCakeReward implements IC2LS_ClaimMoonCakeReward {

        /**
         * Constructs a new C2LS_ClaimMoonCakeReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ClaimMoonCakeReward);

        /** C2LS_ClaimMoonCakeReward rewardIndex. */
        public rewardIndex: number;

        /**
         * Encodes the specified C2LS_ClaimMoonCakeReward message. Does not implicitly {@link Client2Server.C2LS_ClaimMoonCakeReward.verify|verify} messages.
         * @param m C2LS_ClaimMoonCakeReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ClaimMoonCakeReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ClaimMoonCakeReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10063
        }
    }

    /** Properties of a C2LS_GetMoonCakeEventInfo. */
    interface IC2LS_GetMoonCakeEventInfo {
    }

    /** Represents a C2LS_GetMoonCakeEventInfo. */
    class C2LS_GetMoonCakeEventInfo implements IC2LS_GetMoonCakeEventInfo {

        /**
         * Constructs a new C2LS_GetMoonCakeEventInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetMoonCakeEventInfo);

        /**
         * Encodes the specified C2LS_GetMoonCakeEventInfo message. Does not implicitly {@link Client2Server.C2LS_GetMoonCakeEventInfo.verify|verify} messages.
         * @param m C2LS_GetMoonCakeEventInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetMoonCakeEventInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetMoonCakeEventInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10064
        }
    }

    /** Properties of a C2LS_GetMissionList. */
    interface IC2LS_GetMissionList {
    }

    /** Represents a C2LS_GetMissionList. */
    class C2LS_GetMissionList implements IC2LS_GetMissionList {

        /**
         * Constructs a new C2LS_GetMissionList.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetMissionList);

        /**
         * Encodes the specified C2LS_GetMissionList message. Does not implicitly {@link Client2Server.C2LS_GetMissionList.verify|verify} messages.
         * @param m C2LS_GetMissionList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetMissionList, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetMissionList {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10065
        }
    }

    /** Properties of a C2LS_ClaimVideoReward. */
    interface IC2LS_ClaimVideoReward {

        /** C2LS_ClaimVideoReward type */
        type?: (number|null);
    }

    /** Represents a C2LS_ClaimVideoReward. */
    class C2LS_ClaimVideoReward implements IC2LS_ClaimVideoReward {

        /**
         * Constructs a new C2LS_ClaimVideoReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ClaimVideoReward);

        /** C2LS_ClaimVideoReward type. */
        public type: number;

        /**
         * Encodes the specified C2LS_ClaimVideoReward message. Does not implicitly {@link Client2Server.C2LS_ClaimVideoReward.verify|verify} messages.
         * @param m C2LS_ClaimVideoReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ClaimVideoReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ClaimVideoReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10066
        }
    }

    /** Properties of a C2LS_GetWxChallengeReward. */
    interface IC2LS_GetWxChallengeReward {
    }

    /** Represents a C2LS_GetWxChallengeReward. */
    class C2LS_GetWxChallengeReward implements IC2LS_GetWxChallengeReward {

        /**
         * Constructs a new C2LS_GetWxChallengeReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetWxChallengeReward);

        /**
         * Encodes the specified C2LS_GetWxChallengeReward message. Does not implicitly {@link Client2Server.C2LS_GetWxChallengeReward.verify|verify} messages.
         * @param m C2LS_GetWxChallengeReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetWxChallengeReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetWxChallengeReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10067
        }
    }

    /** Properties of a C2LS_GetWxPushReward. */
    interface IC2LS_GetWxPushReward {

        /** C2LS_GetWxPushReward giftIdType */
        giftIdType?: (common.EWxGiftIdType|null);
    }

    /** Represents a C2LS_GetWxPushReward. */
    class C2LS_GetWxPushReward implements IC2LS_GetWxPushReward {

        /**
         * Constructs a new C2LS_GetWxPushReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetWxPushReward);

        /** C2LS_GetWxPushReward giftIdType. */
        public giftIdType: common.EWxGiftIdType;

        /**
         * Encodes the specified C2LS_GetWxPushReward message. Does not implicitly {@link Client2Server.C2LS_GetWxPushReward.verify|verify} messages.
         * @param m C2LS_GetWxPushReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetWxPushReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetWxPushReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10068
        }
    }

    /** Properties of a C2LS_GetStoryModeInfo. */
    interface IC2LS_GetStoryModeInfo {
    }

    /** Represents a C2LS_GetStoryModeInfo. */
    class C2LS_GetStoryModeInfo implements IC2LS_GetStoryModeInfo {

        /**
         * Constructs a new C2LS_GetStoryModeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_GetStoryModeInfo);

        /**
         * Encodes the specified C2LS_GetStoryModeInfo message. Does not implicitly {@link Client2Server.C2LS_GetStoryModeInfo.verify|verify} messages.
         * @param m C2LS_GetStoryModeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_GetStoryModeInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_GetStoryModeInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10069
        }
    }

    /** Properties of a C2LS_StartStoryLevel. */
    interface IC2LS_StartStoryLevel {

        /** C2LS_StartStoryLevel chapterId */
        chapterId?: (number|null);

        /** C2LS_StartStoryLevel activityId */
        activityId?: (number|null);
    }

    /** Represents a C2LS_StartStoryLevel. */
    class C2LS_StartStoryLevel implements IC2LS_StartStoryLevel {

        /**
         * Constructs a new C2LS_StartStoryLevel.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_StartStoryLevel);

        /** C2LS_StartStoryLevel chapterId. */
        public chapterId: number;

        /** C2LS_StartStoryLevel activityId. */
        public activityId: number;

        /**
         * Encodes the specified C2LS_StartStoryLevel message. Does not implicitly {@link Client2Server.C2LS_StartStoryLevel.verify|verify} messages.
         * @param m C2LS_StartStoryLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_StartStoryLevel, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_StartStoryLevel {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10070
        }
    }

    /** Properties of a C2LS_CompleteStoryLevel. */
    interface IC2LS_CompleteStoryLevel {

        /** C2LS_CompleteStoryLevel matchToken */
        matchToken?: (string|null);
    }

    /** Represents a C2LS_CompleteStoryLevel. */
    class C2LS_CompleteStoryLevel implements IC2LS_CompleteStoryLevel {

        /**
         * Constructs a new C2LS_CompleteStoryLevel.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_CompleteStoryLevel);

        /** C2LS_CompleteStoryLevel matchToken. */
        public matchToken: string;

        /**
         * Encodes the specified C2LS_CompleteStoryLevel message. Does not implicitly {@link Client2Server.C2LS_CompleteStoryLevel.verify|verify} messages.
         * @param m C2LS_CompleteStoryLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_CompleteStoryLevel, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_CompleteStoryLevel {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10071
        }
    }

    /** Properties of a C2LS_CollectStoryModeItem. */
    interface IC2LS_CollectStoryModeItem {

        /** C2LS_CollectStoryModeItem activityId */
        activityId?: (number|null);

        /** C2LS_CollectStoryModeItem count */
        count?: (number|null);
    }

    /** Represents a C2LS_CollectStoryModeItem. */
    class C2LS_CollectStoryModeItem implements IC2LS_CollectStoryModeItem {

        /**
         * Constructs a new C2LS_CollectStoryModeItem.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_CollectStoryModeItem);

        /** C2LS_CollectStoryModeItem activityId. */
        public activityId: number;

        /** C2LS_CollectStoryModeItem count. */
        public count: number;

        /**
         * Encodes the specified C2LS_CollectStoryModeItem message. Does not implicitly {@link Client2Server.C2LS_CollectStoryModeItem.verify|verify} messages.
         * @param m C2LS_CollectStoryModeItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_CollectStoryModeItem, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_CollectStoryModeItem {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10072
        }
    }

    /** Properties of a C2LS_ClaimStoryReward. */
    interface IC2LS_ClaimStoryReward {

        /** C2LS_ClaimStoryReward rewardIndex */
        rewardIndex?: (number|null);

        /** C2LS_ClaimStoryReward activityId */
        activityId?: (number|null);
    }

    /** Represents a C2LS_ClaimStoryReward. */
    class C2LS_ClaimStoryReward implements IC2LS_ClaimStoryReward {

        /**
         * Constructs a new C2LS_ClaimStoryReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_ClaimStoryReward);

        /** C2LS_ClaimStoryReward rewardIndex. */
        public rewardIndex: number;

        /** C2LS_ClaimStoryReward activityId. */
        public activityId: number;

        /**
         * Encodes the specified C2LS_ClaimStoryReward message. Does not implicitly {@link Client2Server.C2LS_ClaimStoryReward.verify|verify} messages.
         * @param m C2LS_ClaimStoryReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_ClaimStoryReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_ClaimStoryReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10073
        }
    }

    /** Properties of a C2LS_PK_StartMatch. */
    interface IC2LS_PK_StartMatch {
    }

    /** Represents a C2LS_PK_StartMatch. */
    class C2LS_PK_StartMatch implements IC2LS_PK_StartMatch {

        /**
         * Constructs a new C2LS_PK_StartMatch.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_StartMatch);

        /**
         * Encodes the specified C2LS_PK_StartMatch message. Does not implicitly {@link Client2Server.C2LS_PK_StartMatch.verify|verify} messages.
         * @param m C2LS_PK_StartMatch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_StartMatch, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_StartMatch {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10075
        }
    }

    /** Properties of a C2LS_PK_GetMatchState. */
    interface IC2LS_PK_GetMatchState {

        /** C2LS_PK_GetMatchState roomId */
        roomId?: (string|null);
    }

    /** Represents a C2LS_PK_GetMatchState. */
    class C2LS_PK_GetMatchState implements IC2LS_PK_GetMatchState {

        /**
         * Constructs a new C2LS_PK_GetMatchState.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_GetMatchState);

        /** C2LS_PK_GetMatchState roomId. */
        public roomId: string;

        /**
         * Encodes the specified C2LS_PK_GetMatchState message. Does not implicitly {@link Client2Server.C2LS_PK_GetMatchState.verify|verify} messages.
         * @param m C2LS_PK_GetMatchState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_GetMatchState, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_GetMatchState {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10076
        }
    }

    /** Properties of a C2LS_PK_ReadyComplete. */
    interface IC2LS_PK_ReadyComplete {

        /** C2LS_PK_ReadyComplete roomId */
        roomId?: (string|null);
    }

    /** Represents a C2LS_PK_ReadyComplete. */
    class C2LS_PK_ReadyComplete implements IC2LS_PK_ReadyComplete {

        /**
         * Constructs a new C2LS_PK_ReadyComplete.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_ReadyComplete);

        /** C2LS_PK_ReadyComplete roomId. */
        public roomId: string;

        /**
         * Encodes the specified C2LS_PK_ReadyComplete message. Does not implicitly {@link Client2Server.C2LS_PK_ReadyComplete.verify|verify} messages.
         * @param m C2LS_PK_ReadyComplete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_ReadyComplete, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_ReadyComplete {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10077
        }
    }

    /** Properties of a C2LS_PK_GetRoomData. */
    interface IC2LS_PK_GetRoomData {

        /** C2LS_PK_GetRoomData roomId */
        roomId?: (string|null);
    }

    /** Represents a C2LS_PK_GetRoomData. */
    class C2LS_PK_GetRoomData implements IC2LS_PK_GetRoomData {

        /**
         * Constructs a new C2LS_PK_GetRoomData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_GetRoomData);

        /** C2LS_PK_GetRoomData roomId. */
        public roomId: string;

        /**
         * Encodes the specified C2LS_PK_GetRoomData message. Does not implicitly {@link Client2Server.C2LS_PK_GetRoomData.verify|verify} messages.
         * @param m C2LS_PK_GetRoomData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_GetRoomData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_GetRoomData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10078
        }
    }

    /** Properties of a C2LS_PK_ReportScore. */
    interface IC2LS_PK_ReportScore {

        /** C2LS_PK_ReportScore matchToken */
        matchToken?: (string|null);

        /** C2LS_PK_ReportScore score */
        score?: (number|null);

        /** C2LS_PK_ReportScore roomId */
        roomId?: (string|null);
    }

    /** Represents a C2LS_PK_ReportScore. */
    class C2LS_PK_ReportScore implements IC2LS_PK_ReportScore {

        /**
         * Constructs a new C2LS_PK_ReportScore.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_ReportScore);

        /** C2LS_PK_ReportScore matchToken. */
        public matchToken: string;

        /** C2LS_PK_ReportScore score. */
        public score: number;

        /** C2LS_PK_ReportScore roomId. */
        public roomId: string;

        /**
         * Encodes the specified C2LS_PK_ReportScore message. Does not implicitly {@link Client2Server.C2LS_PK_ReportScore.verify|verify} messages.
         * @param m C2LS_PK_ReportScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_ReportScore, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_ReportScore {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10079
        }
    }

    /** Properties of a C2LS_PK_GameOver. */
    interface IC2LS_PK_GameOver {

        /** C2LS_PK_GameOver matchToken */
        matchToken?: (string|null);

        /** C2LS_PK_GameOver score */
        score?: (number|null);

        /** C2LS_PK_GameOver roomId */
        roomId?: (string|null);
    }

    /** Represents a C2LS_PK_GameOver. */
    class C2LS_PK_GameOver implements IC2LS_PK_GameOver {

        /**
         * Constructs a new C2LS_PK_GameOver.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_GameOver);

        /** C2LS_PK_GameOver matchToken. */
        public matchToken: string;

        /** C2LS_PK_GameOver score. */
        public score: number;

        /** C2LS_PK_GameOver roomId. */
        public roomId: string;

        /**
         * Encodes the specified C2LS_PK_GameOver message. Does not implicitly {@link Client2Server.C2LS_PK_GameOver.verify|verify} messages.
         * @param m C2LS_PK_GameOver message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_GameOver, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_GameOver {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10080
        }
    }

    /** Properties of a C2LS_PK_GetItem. */
    interface IC2LS_PK_GetItem {

        /** C2LS_PK_GetItem propId */
        propId?: (number|null);
    }

    /** Represents a C2LS_PK_GetItem. */
    class C2LS_PK_GetItem implements IC2LS_PK_GetItem {

        /**
         * Constructs a new C2LS_PK_GetItem.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_GetItem);

        /** C2LS_PK_GetItem propId. */
        public propId: number;

        /**
         * Encodes the specified C2LS_PK_GetItem message. Does not implicitly {@link Client2Server.C2LS_PK_GetItem.verify|verify} messages.
         * @param m C2LS_PK_GetItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_GetItem, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_GetItem {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10081
        }
    }

    /** Properties of a C2LS_PK_UseItem. */
    interface IC2LS_PK_UseItem {

        /** C2LS_PK_UseItem propId */
        propId?: (number|null);
    }

    /** Represents a C2LS_PK_UseItem. */
    class C2LS_PK_UseItem implements IC2LS_PK_UseItem {

        /**
         * Constructs a new C2LS_PK_UseItem.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_UseItem);

        /** C2LS_PK_UseItem propId. */
        public propId: number;

        /**
         * Encodes the specified C2LS_PK_UseItem message. Does not implicitly {@link Client2Server.C2LS_PK_UseItem.verify|verify} messages.
         * @param m C2LS_PK_UseItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_UseItem, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_UseItem {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10082
        }
    }

    /** Properties of a C2LS_PK_GetMatchInfo. */
    interface IC2LS_PK_GetMatchInfo {
    }

    /** Represents a C2LS_PK_GetMatchInfo. */
    class C2LS_PK_GetMatchInfo implements IC2LS_PK_GetMatchInfo {

        /**
         * Constructs a new C2LS_PK_GetMatchInfo.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_GetMatchInfo);

        /**
         * Encodes the specified C2LS_PK_GetMatchInfo message. Does not implicitly {@link Client2Server.C2LS_PK_GetMatchInfo.verify|verify} messages.
         * @param m C2LS_PK_GetMatchInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_GetMatchInfo, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_GetMatchInfo {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10083
        }
    }

    /** Properties of a C2LS_PK_ClaimReward. */
    interface IC2LS_PK_ClaimReward {

        /** C2LS_PK_ClaimReward rewardIndex */
        rewardIndex?: (number|null);

        /** C2LS_PK_ClaimReward activityId */
        activityId?: (number|null);
    }

    /** Represents a C2LS_PK_ClaimReward. */
    class C2LS_PK_ClaimReward implements IC2LS_PK_ClaimReward {

        /**
         * Constructs a new C2LS_PK_ClaimReward.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_ClaimReward);

        /** C2LS_PK_ClaimReward rewardIndex. */
        public rewardIndex: number;

        /** C2LS_PK_ClaimReward activityId. */
        public activityId: number;

        /**
         * Encodes the specified C2LS_PK_ClaimReward message. Does not implicitly {@link Client2Server.C2LS_PK_ClaimReward.verify|verify} messages.
         * @param m C2LS_PK_ClaimReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_ClaimReward, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_ClaimReward {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10085
        }
    }

    /** Properties of a C2LS_PK_UpdatePlayerState. */
    interface IC2LS_PK_UpdatePlayerState {

        /** C2LS_PK_UpdatePlayerState roomId */
        roomId?: (string|null);

        /** C2LS_PK_UpdatePlayerState status */
        status?: (common.EPlayerStatusInRoom|null);
    }

    /** Represents a C2LS_PK_UpdatePlayerState. */
    class C2LS_PK_UpdatePlayerState implements IC2LS_PK_UpdatePlayerState {

        /**
         * Constructs a new C2LS_PK_UpdatePlayerState.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_PK_UpdatePlayerState);

        /** C2LS_PK_UpdatePlayerState roomId. */
        public roomId: string;

        /** C2LS_PK_UpdatePlayerState status. */
        public status: common.EPlayerStatusInRoom;

        /**
         * Encodes the specified C2LS_PK_UpdatePlayerState message. Does not implicitly {@link Client2Server.C2LS_PK_UpdatePlayerState.verify|verify} messages.
         * @param m C2LS_PK_UpdatePlayerState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_PK_UpdatePlayerState, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_PK_UpdatePlayerState {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10086
        }
    }

    /** Properties of a C2LS_SyncPkMatchGameData. */
    interface IC2LS_SyncPkMatchGameData {

        /** C2LS_SyncPkMatchGameData token */
        token?: (string|null);

        /** C2LS_SyncPkMatchGameData stepData */
        stepData?: (string|null);

        /** C2LS_SyncPkMatchGameData snapshot */
        snapshot?: (string|null);

        /** C2LS_SyncPkMatchGameData minStep */
        minStep?: (number|null);

        /** C2LS_SyncPkMatchGameData maxStep */
        maxStep?: (number|null);

        /** C2LS_SyncPkMatchGameData score */
        score?: (number|null);
    }

    /** Represents a C2LS_SyncPkMatchGameData. */
    class C2LS_SyncPkMatchGameData implements IC2LS_SyncPkMatchGameData {

        /**
         * Constructs a new C2LS_SyncPkMatchGameData.
         * @param [p] Properties to set
         */
        constructor(p?: Client2Server.IC2LS_SyncPkMatchGameData);

        /** C2LS_SyncPkMatchGameData token. */
        public token: string;

        /** C2LS_SyncPkMatchGameData stepData. */
        public stepData: string;

        /** C2LS_SyncPkMatchGameData snapshot. */
        public snapshot: string;

        /** C2LS_SyncPkMatchGameData minStep. */
        public minStep: number;

        /** C2LS_SyncPkMatchGameData maxStep. */
        public maxStep: number;

        /** C2LS_SyncPkMatchGameData score. */
        public score: number;

        /**
         * Encodes the specified C2LS_SyncPkMatchGameData message. Does not implicitly {@link Client2Server.C2LS_SyncPkMatchGameData.verify|verify} messages.
         * @param m C2LS_SyncPkMatchGameData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: Client2Server.C2LS_SyncPkMatchGameData, w?: $protobuf.Writer): $protobuf.Writer;
    }

    namespace C2LS_SyncPkMatchGameData {

        /** N enum. */
        enum N {
            zero = 0,
            OpCode = 10087
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
         * Encodes the specified AwardInfo message. Does not implicitly {@link protocol.AwardInfo.verify|verify} messages.
         * @param m AwardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: protocol.AwardInfo, w?: $protobuf.Writer): $protobuf.Writer;
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
         * Encodes the specified HeartBeatReqInfo message. Does not implicitly {@link common.HeartBeatReqInfo.verify|verify} messages.
         * @param m HeartBeatReqInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: common.HeartBeatReqInfo, w?: $protobuf.Writer): $protobuf.Writer;
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
