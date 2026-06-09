declare module sdk {
    export enum VibrateType {
        Light = 15, // light
        Medium = 20, // medium
        Heavy = 30, // heavy
        Long = 400,
    }
    export class SDK {
        /**
         * 设备震动
         * @param type 震动幅度
         */
        public static vibrate(type: sdk.VibrateType): void;
    }
}
