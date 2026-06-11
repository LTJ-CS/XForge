import { IModel } from '../../../extensions/app/assets/base/BaseModel';

// config中不能定义任何方法, 任何变量在外部访问都是readonly
// 如果config中的内容是服务器下发的，可以使用Object.assign覆盖config中的内容
export default class Local implements IModel<Local> {
}