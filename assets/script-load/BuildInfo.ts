import { BuildNum, BuildEnv } from "./BuildData";

/**
 * 构建版本信息
 * 信息来源可以通过打包机覆盖 BuildData.ts
 */
export default class BuildInfo {
    /**
     * 返回当前打包机构建版本号
     * @returns
     */
    public static buildNumber(): number {
        return BuildNum;
    }

    /**
     * 返回当前服务器环境值
     * 默认返回空，即：使用本地选项
     */
    public static getEnv(): string {
        return BuildEnv;
    }
}
