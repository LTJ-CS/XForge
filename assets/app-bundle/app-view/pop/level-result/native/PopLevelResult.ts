import { _decorator, Button, Color, Graphics, Label, Node, UITransform } from 'cc';
import BaseView from '../../../../../../extensions/app/assets/base/BaseView';
import { LevelResultAction, LevelResultData } from '../../../../../app-builtin/app-controller/LevelController';
const { ccclass } = _decorator;
@ccclass('PopLevelResult')
export class PopLevelResult extends BaseView {
    private titleLabel: Label = null;
    private detailLabel: Label = null;
    private result: LevelResultAction = 'retry';

    // 初始化的相关逻辑写在这
    onLoad() {
        this.createView();
    }

    // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
    onShow(params: LevelResultData) {
        this.result = 'retry';
        this.titleLabel.string = params.win ? '挑战成功' : '挑战失败';
        this.titleLabel.color = params.win ? new Color(22, 163, 74, 255) : new Color(220, 38, 38, 255);
        this.detailLabel.string = `用时 ${params.elapsedSeconds} 秒\n已翻开 ${params.revealedCount} / ${params.rows * params.cols - params.mines}\n标记 ${params.flagCount} / ${params.mines}`;
    }

    // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
    onHide(result: LevelResultAction) {
        result;
        // app.manager.ui.show<PopLevelResult>({name: 'PopLevelResult', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
        return this.result;
    }

    private createView() {
        const rootTransform = this.node.getComponent(UITransform);
        rootTransform.setContentSize(750, 1334);

        const panel = new Node('Panel');
        panel.setParent(this.node);
        panel.setPosition(0, 0);

        const panelTransform = panel.addComponent(UITransform);
        panelTransform.setContentSize(560, 520);

        const panelGraphics = panel.addComponent(Graphics);
        panelGraphics.fillColor = new Color(255, 255, 255, 255);
        panelGraphics.roundRect(-280, -260, 560, 520, 28);
        panelGraphics.fill();

        this.titleLabel = this.createLabel(panel, 'Title', '', 0, 150, 48, 460, 70, new Color(31, 41, 55, 255));
        this.detailLabel = this.createLabel(panel, 'Detail', '', 0, 35, 30, 460, 150, new Color(75, 85, 99, 255));

        const retryButton = this.createButton(panel, 'RetryButton', '再来一局', -135, -155, 220, 76, new Color(36, 126, 255, 255));
        retryButton.on(Node.EventType.TOUCH_END, () => this.closeWith('retry'), this);

        const homeButton = this.createButton(panel, 'HomeButton', '返回首页', 135, -155, 220, 76, new Color(107, 114, 128, 255));
        homeButton.on(Node.EventType.TOUCH_END, () => this.closeWith('home'), this);
    }

    private createLabel(parent: Node, name: string, text: string, x: number, y: number, fontSize: number, width: number, height: number, color: Color) {
        const labelNode = new Node(name);
        labelNode.setParent(parent);
        labelNode.setPosition(x, y);

        const transform = labelNode.addComponent(UITransform);
        transform.setContentSize(width, height);

        const label = labelNode.addComponent(Label);
        label.string = text;
        label.fontSize = fontSize;
        label.lineHeight = fontSize + 12;
        label.color = color;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;

        return label;
    }

    private createButton(parent: Node, name: string, text: string, x: number, y: number, width: number, height: number, color: Color) {
        const buttonNode = new Node(name);
        buttonNode.setParent(parent);
        buttonNode.setPosition(x, y);

        const transform = buttonNode.addComponent(UITransform);
        transform.setContentSize(width, height);

        const graphics = buttonNode.addComponent(Graphics);
        graphics.fillColor = color;
        graphics.roundRect(-width / 2, -height / 2, width, height, 14);
        graphics.fill();

        buttonNode.addComponent(Button);

        const labelNode = new Node('Label');
        labelNode.setParent(buttonNode);

        const labelTransform = labelNode.addComponent(UITransform);
        labelTransform.setContentSize(width, height);

        const label = labelNode.addComponent(Label);
        label.string = text;
        label.fontSize = 30;
        label.lineHeight = 36;
        label.color = new Color(255, 255, 255, 255);
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;

        return buttonNode;
    }

    private closeWith(result: LevelResultAction) {
        this.result = result;
        this.hide(result);
    }
}
