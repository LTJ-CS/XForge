import BaseController from '../../../extensions/app/assets/base/BaseController';
import Core from '../../../extensions/app/assets/Core';

export type LevelResultAction = 'retry' | 'home';

export type LevelStartData = {
    rows: number;
    cols: number;
    mines: number;
};

export type LevelResultData = LevelStartData & {
    win: boolean;
    elapsedSeconds: number;
    revealedCount: number;
    flagCount: number;
};

export class LevelController extends BaseController<LevelController, {
    // 定义了事件，并同时定义参数列表和返回值
    LevelStart: (data: LevelStartData) => void,
    LevelFinish: (data: LevelResultData) => void,
}>() {
    private rows = 9;
    private cols = 9;
    private mines = 10;
    private startTime = 0;

    startLevel(data: LevelStartData) {
        this.rows = data.rows;
        this.cols = data.cols;
        this.mines = data.mines;
        this.startTime = Date.now();
        this.emit(LevelController.Event.LevelStart, data);
    }

    finishLevel(data: Pick<LevelResultData, 'win' | 'revealedCount' | 'flagCount'>) {
        const result: LevelResultData = {
            rows: this.rows,
            cols: this.cols,
            mines: this.mines,
            win: data.win,
            elapsedSeconds: Math.max(1, Math.floor((Date.now() - this.startTime) / 1000)),
            revealedCount: data.revealedCount,
            flagCount: data.flagCount,
        };

        this.emit(LevelController.Event.LevelFinish, result);
        Core.inst.manager.ui.show({
            name: 'PopLevelResult',
            data: result,
            onHide: (action: LevelResultAction) => {
                this.handleResultAction(action);
            },
        });
    }

    private handleResultAction(action: LevelResultAction) {
        if (action === 'retry') {
            Core.inst.manager.ui.show({ name: 'PageGamepanel' });
            return;
        }
        Core.inst.manager.ui.show({ name: 'PageMainpanel' });
    }
}
