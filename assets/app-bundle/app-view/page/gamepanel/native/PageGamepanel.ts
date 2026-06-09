import { _decorator, Button, Color, EventMouse, Graphics, Label, Node, UITransform } from 'cc';
import BaseView from '../../../../../../extensions/app/assets/base/BaseView';
import { IMiniViewNames } from '../../../../../app-builtin/app-admin/executor';
import { app } from '../../../../../app/app';
const { ccclass } = _decorator;

type MineCell = {
    node: Node;
    graphics: Graphics;
    label: Label;
    row: number;
    col: number;
    mine: boolean;
    revealed: boolean;
    flagged: boolean;
    count: number;
};

@ccclass('PageGamepanel')
export class PageGamepanel extends BaseView {
    private readonly rowCount = 9;
    private readonly colCount = 9;
    private readonly mineCount = 10;
    private readonly cellSize = 64;

    // 子界面列表，数组顺序为子界面排列顺序
    protected miniViews: IMiniViewNames = [];

    private titleLabel: Label = null;
    private mineLabel: Label = null;
    private boardNode: Node = null;
    private cells: MineCell[][] = [];
    private generated = false;
    private gameOver = false;
    private flagCount = 0;
    private longPressTriggered = false;
    private longPressCallback: () => void = () => {};

    // 初始化的相关逻辑写在这
    onLoad() {
        this.createGameView();
    }

    // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
    onShow(params: any) {
        params;
        this.showMiniViews({ views: this.miniViews });
        this.resetGame();
    }

    // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
    onHide(result: undefined) {
        // app.manager.ui.show<PageGamepanel>({name: 'PageGamepanel', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
        return result;
    }

    private createGameView() {
        const rootTransform = this.node.getComponent(UITransform);
        rootTransform.setContentSize(750, 1334);

        this.createBackground();
        this.titleLabel = this.createLabel('Title', '扫雷', 0, 520, 48, new Color(31, 41, 55, 255), 420, 70);
        this.mineLabel = this.createLabel('MineCounter', '', 0, 442, 28, new Color(75, 85, 99, 255), 420, 48);

        this.boardNode = new Node('MineBoard');
        this.boardNode.setParent(this.node);
        this.boardNode.setPosition(0, -20);

        const restartButton = this.createButton('RestartButton', '重新开始', 0, -520, 240, 76, new Color(36, 126, 255, 255));
        restartButton.on(Node.EventType.TOUCH_END, this.resetGame, this);
    }

    private createBackground() {
        const background = new Node('Background');
        background.setParent(this.node);

        const transform = background.addComponent(UITransform);
        transform.setContentSize(750, 1334);

        const graphics = background.addComponent(Graphics);
        graphics.fillColor = new Color(245, 247, 250, 255);
        graphics.rect(-375, -667, 750, 1334);
        graphics.fill();
    }

    private createButton(name: string, text: string, x: number, y: number, width: number, height: number, color: Color) {
        const buttonNode = new Node(name);
        buttonNode.setParent(this.node);
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

    private createLabel(name: string, text: string, x: number, y: number, fontSize: number, color: Color, width: number, height: number) {
        const labelNode = new Node(name);
        labelNode.setParent(this.node);
        labelNode.setPosition(x, y);

        const transform = labelNode.addComponent(UITransform);
        transform.setContentSize(width, height);

        const label = labelNode.addComponent(Label);
        label.string = text;
        label.fontSize = fontSize;
        label.lineHeight = fontSize + 8;
        label.color = color;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;

        return label;
    }

    private resetGame() {
        this.unscheduleLongPress();
        this.boardNode.removeAllChildren();
        this.cells = [];
        this.generated = false;
        this.gameOver = false;
        this.flagCount = 0;
        this.titleLabel.string = '扫雷';
        this.updateMineCounter();
        app.controller.level.startLevel({
            rows: this.rowCount,
            cols: this.colCount,
            mines: this.mineCount,
        });

        const boardWidth = this.colCount * this.cellSize;
        const boardHeight = this.rowCount * this.cellSize;
        const startX = -boardWidth / 2 + this.cellSize / 2;
        const startY = boardHeight / 2 - this.cellSize / 2;

        for (let row = 0; row < this.rowCount; row++) {
            this.cells[row] = [];
            for (let col = 0; col < this.colCount; col++) {
                const cell = this.createCell(row, col, startX + col * this.cellSize, startY - row * this.cellSize);
                this.cells[row][col] = cell;
            }
        }
    }

    private createCell(row: number, col: number, x: number, y: number) {
        const cellNode = new Node(`Cell_${row}_${col}`);
        cellNode.setParent(this.boardNode);
        cellNode.setPosition(x, y);

        const transform = cellNode.addComponent(UITransform);
        transform.setContentSize(this.cellSize, this.cellSize);

        const graphics = cellNode.addComponent(Graphics);

        const labelNode = new Node('Label');
        labelNode.setParent(cellNode);

        const labelTransform = labelNode.addComponent(UITransform);
        labelTransform.setContentSize(this.cellSize, this.cellSize);

        const label = labelNode.addComponent(Label);
        label.string = '';
        label.fontSize = 30;
        label.lineHeight = 36;
        label.horizontalAlign = Label.HorizontalAlign.CENTER;
        label.verticalAlign = Label.VerticalAlign.CENTER;

        const cell: MineCell = {
            node: cellNode,
            graphics,
            label,
            row,
            col,
            mine: false,
            revealed: false,
            flagged: false,
            count: 0,
        };

        this.paintCell(cell);
        cellNode.on(Node.EventType.TOUCH_START, () => this.onTouchStart(cell), this);
        cellNode.on(Node.EventType.TOUCH_END, () => this.onTouchEnd(cell), this);
        cellNode.on(Node.EventType.TOUCH_CANCEL, this.unscheduleLongPress, this);
        cellNode.on(Node.EventType.MOUSE_DOWN, (event: EventMouse) => this.onMouseDown(cell, event), this);

        return cell;
    }

    private onTouchStart(cell: MineCell) {
        this.longPressTriggered = false;
        this.longPressCallback = () => {
            this.longPressTriggered = true;
            this.toggleFlag(cell);
        };
        this.scheduleOnce(this.longPressCallback, 0.45);
    }

    private onTouchEnd(cell: MineCell) {
        this.unscheduleLongPress();
        if (this.longPressTriggered) return;
        this.revealCell(cell);
    }

    private onMouseDown(cell: MineCell, event: EventMouse) {
        if (event.getButton() === EventMouse.BUTTON_RIGHT) {
            this.toggleFlag(cell);
        }
    }

    private unscheduleLongPress() {
        this.unschedule(this.longPressCallback);
        this.longPressCallback = () => {};
    }

    private generateBoard(firstCell: MineCell) {
        let placed = 0;
        while (placed < this.mineCount) {
            const row = Math.floor(Math.random() * this.rowCount);
            const col = Math.floor(Math.random() * this.colCount);
            const cell = this.cells[row][col];
            if (cell.mine || cell === firstCell) continue;
            cell.mine = true;
            placed++;
        }

        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                this.cells[row][col].count = this.countAround(row, col);
            }
        }

        this.generated = true;
    }

    private countAround(row: number, col: number) {
        let count = 0;
        for (let y = row - 1; y <= row + 1; y++) {
            for (let x = col - 1; x <= col + 1; x++) {
                if (this.isInside(y, x) && this.cells[y][x].mine) count++;
            }
        }
        return count;
    }

    private revealCell(cell: MineCell) {
        if (this.gameOver || cell.revealed || cell.flagged) return;
        if (this.generated === false) this.generateBoard(cell);

        cell.revealed = true;

        if (cell.mine) {
            this.finishGame(false);
            return;
        }

        if (cell.count === 0) {
            this.revealBlankArea(cell.row, cell.col);
        } else {
            this.paintCell(cell);
        }

        this.checkWin();
    }

    private revealBlankArea(row: number, col: number) {
        const queue: MineCell[] = [this.cells[row][col]];
        for (let index = 0; index < queue.length; index++) {
            const cell = queue[index];
            cell.revealed = true;
            cell.flagged = false;
            this.paintCell(cell);

            if (cell.count !== 0) continue;

            for (let y = cell.row - 1; y <= cell.row + 1; y++) {
                for (let x = cell.col - 1; x <= cell.col + 1; x++) {
                    if (this.isInside(y, x)) {
                        const next = this.cells[y][x];
                        if (next.revealed === false && next.mine === false) {
                            next.revealed = true;
                            queue.push(next);
                        }
                    }
                }
            }
        }

        this.recalculateFlags();
    }

    private toggleFlag(cell: MineCell) {
        if (this.gameOver || cell.revealed) return;
        cell.flagged = !cell.flagged;
        this.recalculateFlags();
        this.paintCell(cell);
    }

    private checkWin() {
        let revealed = 0;
        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                if (this.cells[row][col].revealed) revealed++;
            }
        }

        if (revealed === this.rowCount * this.colCount - this.mineCount) {
            this.finishGame(true);
        }
    }

    private finishGame(win: boolean) {
        this.gameOver = true;
        this.titleLabel.string = win ? '胜利' : '踩雷了';
        app.controller.level.finishLevel({
            win,
            revealedCount: this.countRevealedSafeCells(),
            flagCount: this.flagCount,
        });

        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                const cell = this.cells[row][col];
                if (cell.mine) cell.revealed = true;
                this.paintCell(cell);
            }
        }
    }

    private countRevealedSafeCells() {
        let count = 0;
        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                const cell = this.cells[row][col];
                if (cell.revealed && cell.mine === false) count++;
            }
        }
        return count;
    }

    private recalculateFlags() {
        this.flagCount = 0;
        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                if (this.cells[row][col].flagged) this.flagCount++;
            }
        }
        this.updateMineCounter();
    }

    private updateMineCounter() {
        this.mineLabel.string = `剩余雷数 ${this.mineCount - this.flagCount}`;
    }

    private isInside(row: number, col: number) {
        return row >= 0 && row < this.rowCount && col >= 0 && col < this.colCount;
    }

    private paintCell(cell: MineCell) {
        cell.graphics.clear();
        cell.graphics.fillColor = this.getCellColor(cell);
        cell.graphics.roundRect(-this.cellSize / 2 + 3, -this.cellSize / 2 + 3, this.cellSize - 6, this.cellSize - 6, 8);
        cell.graphics.fill();

        cell.label.color = this.getTextColor(cell.count);

        if (cell.revealed) {
            cell.label.string = cell.mine ? '*' : (cell.count > 0 ? `${cell.count}` : '');
        } else {
            cell.label.string = cell.flagged ? 'F' : '';
        }
    }

    private getCellColor(cell: MineCell) {
        if (cell.revealed && cell.mine) return new Color(239, 68, 68, 255);
        if (cell.revealed) return new Color(229, 231, 235, 255);
        if (cell.flagged) return new Color(251, 191, 36, 255);
        return new Color(96, 165, 250, 255);
    }

    private getTextColor(count: number) {
        const colors = [
            new Color(31, 41, 55, 255),
            new Color(37, 99, 235, 255),
            new Color(22, 163, 74, 255),
            new Color(220, 38, 38, 255),
            new Color(79, 70, 229, 255),
            new Color(180, 83, 9, 255),
            new Color(8, 145, 178, 255),
            new Color(17, 24, 39, 255),
            new Color(107, 114, 128, 255),
        ];
        return colors[count];
    }
}
