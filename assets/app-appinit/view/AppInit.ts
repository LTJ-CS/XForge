import { JsonAsset, Label, ProgressBar, _decorator } from 'cc';
import BaseAppInit from '../../../extensions/app/assets/base/BaseAppInit';
import { app } from '../../app/app';
import PlatformUtils, { Platform } from '../../script-load/PlatformUtils';
import { LoginApi } from '../../script-load/LoginApi';
import type { LoginResponse } from '../../script-load/LoginApi';
const { ccclass, property } = _decorator;

@ccclass('AppInit')
export class AppInit extends BaseAppInit {
    @property(ProgressBar)
    private progressBar: ProgressBar = null!;

    @property(Label)
    private progressText: Label = null!;

    /**
    * 获得用户资源总量，这里返回几，就需要用户自行调用几次nextInit
    */
    protected getUserAssetNum(): number {
        return 1;
    }

    protected async onUserInit() {
        //第一步加载子包代码
        await this.loadScriptBundle();
        //第二步加载表格数据
        await this.loadTables();
        //第三步中台登陆
        await this.beginLogin();
        //第四步请求玩家信息
        await this.requestBaseInfo();
        this.nextInit();
    }

    private async loadScriptBundle() {
        await app.manager.loader.loadBundleAsync({ bundle: 'script' });
    }

    private async loadTables() {
        return new Promise<boolean>(resolve => {
            app.manager.loader.load({
                path: "data/luban/tables",
                type: JsonAsset,
                onComplete(asset) {
                    app.store.table.setTables(asset);
                    resolve(true);
                }
            });
        });
    }

    private async beginLogin(): Promise<boolean> {
        let loginFunc = null;
        return new Promise<boolean>((resolve) => {
            let platform = PlatformUtils.getPlatform();
            switch (platform) {
                case Platform.tt:
                    loginFunc = LoginApi.ins.ttLogin;
                    break;
                case Platform.wx:
                    loginFunc = LoginApi.ins.wxLogin;
                    break;
                default:
                    loginFunc = LoginApi.ins.betaLogin;
            }
            loginFunc.call(LoginApi.ins).then((loginResponse: LoginResponse) => {
                app.store.user.setLoginResponse(loginResponse);
                resolve(true);
            }).catch((error: Error) => {
                app.lib.logger.log('登录失败', error);
                resolve(false);
            });
        });
    }


    private async requestBaseInfo(): Promise<boolean> {
        //这里可以请求玩家信息等基础数据，等后续完善接口后再添加相关代码

        //暂时不上报数据，等后续完善上报功能后再打开
        // Report.initTA();
        return true;
    }

    // BaseAppInit中使用start方法作为初始化入口，如果重写start方法，请注意调用父类方法
    protected start() {
        super.start();
    }

    protected onProgress(completed: number, total: number) {
        const progress = completed / total;
        this.progressBar.progress = progress;
        this.progressText.string = `${Math.floor(progress * 100)}%`;
    }

    protected onFinish() {
        // 执行完成操作
        this.node.destroy();
    }
}
