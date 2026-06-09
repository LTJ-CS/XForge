import { SubContextView } from "cc";
import { _decorator, Component, Node } from "cc";

const { ccclass, property } = _decorator;

/**
 * 子数据域组件
 * 用于对子数据域窗口进行触摸区域刷新操作
 */
@ccclass("sdk/SubContextComponent")
export class SubContextComponent extends Component {
    @property({ type: SubContextView, tooltip: "子数据域对象窗口" })
    subContextView: SubContextView = null;

    onEnable() {
        if (this.subContextView) {
            this.subContextView.update();
        }
    }

    onDisable() {}
}
