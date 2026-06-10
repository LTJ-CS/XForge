import { Label, ProgressBar, _decorator } from 'cc';
import BaseAppInit from '../../../extensions/app/assets/base/BaseAppInit';
import { app } from '../../app/app';
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

    protected async onLoad() {
        //第一步加载子包代码
        await this.loadScriptBundle();
        this.nextInit();
        this.startInit();
    }

    private async loadScriptBundle() {
        await app.manager.loader.loadBundleAsync({ bundle: 'script' });
    }


    // BaseAppInit中使用start方法作为初始化入口，如果重写start方法，请注意调用父类方法
    protected start() { }

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
