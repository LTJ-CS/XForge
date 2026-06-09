import { Label } from "cc";
import { _decorator, Component } from "cc";
import BuildInfo from "../../../script/BuildInfo";

const { ccclass, property } = _decorator;

/**
 * 构建版本号渲染 label
 */
@ccclass("sdk/BuildNumLabel")
export class BuildNumLabel extends Component {
    @property({ type: Label, tooltip: "版本号Label" })
    label: Label = null;

    onEnable() {
        if (this.label) {
            this.label.string = `${BuildInfo.buildNumber()}`;
        }
    }
}
