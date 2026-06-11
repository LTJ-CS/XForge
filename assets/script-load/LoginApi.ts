import { app } from "../app/app";
import { HttpResp } from "../script/sdk/Http";
import Sdk from "../script/sdk/Sdk";
import StringUtils from "../script/utils/StringUtils";
import { getEnvConfig, getPlatform } from "./build_config/Env";

const BetaOpenIdKey = "betaOpenId";

export class LoginResponse {
    public uid: string;
    public token: string;
    public openId: string;
    public isRegister: boolean;
}
/**
 *
 */
export class LoginApi {
    /**
     * 登录请求单例
     */
    private static Ins: LoginApi = null;
    /**π
     *
     */
    private constructor() { }
    /**
     *
     */
    static get ins() {
        if (!LoginApi.Ins) {
            LoginApi.Ins = new LoginApi();
        }
        return LoginApi.Ins;
    }
    /**
     * 测试环境 登录（游戏服务器）
     */
    public betaLogin(): Promise<LoginResponse> {
        // 先读取本地缓冲的 Open_id, 以解决登陆过期后, 会重新生成 Open_id, 导致帐号发生变化的问题
        let open_id = app.lib.storage.get(BetaOpenIdKey);
        if (!open_id) {
            open_id = "test_" + StringUtils.randomString(6);
            app.lib.storage.set(BetaOpenIdKey, open_id);
        }
        return this.login(open_id);
    }
    /**
     * tt 登录
     */
    public async ttLogin(): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            tt.login({
                success: (res) => {
                    try {
                        console.log("ttLogin success:", res);
                        this.login(res.code).then(response => {
                            resolve(response);
                        }).catch(err => {
                            console.error("ttLogin error:", err);
                            reject(err);
                        });
                    } catch (e) {
                        console.error("ttLogin catch error:", e);
                        reject(e);
                    }
                }
                , fail: (err) => {
                    console.error("ttLogin fail:", err);
                    reject(err);
                }
            });
        });
    }
    /**
     * 微信登录（游戏服务器）
     */
    public async wxLogin(): Promise<LoginResponse> {
        try {
            const res = await wx.login();
            const open_id = res.code;
            console.log(`wxLogin:`, res);
            return await this.login(open_id);
        }
        catch (e) {
            console.error("wxLogin error:", e);
            return null;
        }
    }

    private login(code: string): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            const conf = getEnvConfig();
            const loginAddr = "/user/login";
            const gameId = conf.gameId;
            const platform = getPlatform();

            Sdk.ins.post({
                host: conf.loginHost,
                url: loginAddr,
                baseParams: {},
                data: {
                    gameId: gameId,
                    platform: platform,
                    code: code,
                },
                respType: "text",
                success: (res: HttpResp) => {
                    console.log("登录响应: ", res);
                    if (res && res.err_code == 0 && res.data) {
                        let data = res.data;
                        const respData = new LoginResponse();
                        respData.uid = data.user.uid;      // 玩家uid
                        respData.openId = data.user.openId;  //openId
                        respData.token = data.token;      // 业务使用
                        respData.isRegister = data.isRegister;
                        resolve(respData);
                    } else {
                        console.log("登录失败: ", res.err_msg);
                        reject(res?.err_code || -1);
                    }
                },
                fail: (err) => {
                    console.error("登录失败: ", err);
                    reject(err);
                },
            });
        });
    }
}
