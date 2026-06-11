import { JsonAsset } from 'cc';
import { IStore } from '../../../extensions/app/assets/base/BaseModel';
import { Tables } from '../../script/data-cfg/luban/schemaLuBan';
// store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
// store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
export default class Table implements IStore<Table> {
    private _tables: Tables; // 策划数据map
    public setTables(asset: JsonAsset) {
        this._tables = new Tables((fileName: string) => {
            return asset.json[fileName];
        });
        asset.decRef();
    }
    get tables() {
        return this._tables;
    }
}