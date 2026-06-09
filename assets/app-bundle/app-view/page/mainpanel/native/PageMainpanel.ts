import { _decorator, Button, Color, Graphics, Label, Node, UITransform } from 'cc';
import BaseView from '../../../../../../extensions/app/assets/base/BaseView';
import { app } from '../../../../../app/app';
const { ccclass, property } = _decorator;
@ccclass('PageMainpanel')
export class PageMainpanel extends BaseView {
    @property({type: Button,tooltip: '开始游戏按钮'}) private startButton: Button = null;

    // 初始化的相关逻辑写在这
    onLoad() {
        this.createStartButton();
    }

    private createStartButton() {
        this.startButton.node.on(Button.EventType.CLICK, this.onStartGame, this);
    }

    private onStartGame() {
        app.manager.ui.show({ name: 'PageGamepanel' });
    }
}
