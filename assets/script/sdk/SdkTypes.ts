// 震动类型
export enum VibrateType {
    Light = 15, // light
    Medium = 20, // medium
    Heavy = 30, // heavy
    Long = 400,
}

// 按钮矩形包围盒
export type ButtonRect = {
    xMin: number;
    yMax: number;
    width: number;
    height: number;
};
