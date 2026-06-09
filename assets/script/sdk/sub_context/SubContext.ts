/**
 * 修改值的动作类型
 */
enum ModifyValueAction {
    set = "set", // 设置值
    del = "del", // 删除值
    incr = "incr", // 增加值
}

/**
 * 请求分类
 */
enum PostCategory {
    modify = "modify", // 修改值
    show = "show", // 展示窗口
}

/**
 * 子数据域
 */
export default class SubContext {
    private openData = null;
    constructor() {
        this.openData = wx.getOpenDataContext();
    }

    /**
     * 向子数据域请求增加一个值（数字）
     * @param keyName
     * @param numberValue
     */
    public incr(keyName: string, numberValue: number): void {
        this.openData.postMessage({
            cmd: keyName,
            category: PostCategory.modify,
            action: ModifyValueAction.incr,
            value: numberValue,
        });
    }

    /**
     * 向子数据域请求删除一个值
     * @param keyName
     */
    public del(keyName: string): void {
        this.openData.postMessage({
            cmd: keyName,
            category: PostCategory.modify,
            action: ModifyValueAction.del,
            value: 0,
        });
    }

    /**
     * 向子数据域请求设置一个值
     * @param keyName 键名
     * @param value 值
     */
    public set(keyName: string, value: any): void {
        this.openData.postMessage({
            cmd: keyName,
            category: PostCategory.modify,
            action: ModifyValueAction.set,
            value,
        });
    }

    /**
     * 向子域中请求展示对应的内容，让子数据域能够进行窗口的初始化，以及触摸点击的初始化
     * width height 用来更新子域设计分辨率
     * @param viewKeyName 要展示的窗口名词
     * @param setData 要传递的初始化数据
     * @param width 窗口的宽度px
     * @param height 窗口的高度px
     */
    public show(viewKeyName: string, initData?: any, width?: number, height?: number): void {
        this.openData.postMessage({
            cmd: viewKeyName,
            category: PostCategory.show,
            value: initData,
            w: width,
            h: height,
        });
    }
}
