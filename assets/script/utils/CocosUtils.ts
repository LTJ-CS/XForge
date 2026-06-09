/**
 *
 */
import {Sprite, Node, SpriteFrame, VideoClip} from "cc";
import Log from "../log/Logger";
import {resources} from "cc";
import {v3} from "cc";
import {Vec3} from "cc";
import {UITransform} from "cc";
import {Prefab} from "cc";
import {view} from "cc";
import {Rect} from "cc";

/**
 *
 */
const timerTarget: Node = new Node();
/**
 *
 */
export default class CocosUtils {

    private static _delayCallMap: Map<Function, number> = new Map();

    /**
     * 转换世界坐标
     * @param target
     * @param pos
     * @returns
     */
    public static convertToWorldSpaceAR(target: Node, pos: Vec3) {

        if (!target) {
            return v3(0, 0, 0);
        }

        let transform = target.getComponent(UITransform);

        if (!transform) {
            return v3(0, 0, 0);
        }

        return transform.convertToWorldSpaceAR(pos);
    }

    /**
     * 转目标节点下坐标
     * @param target
     * @param pos
     * @returns
     */
    public static convertToTargetSpaceAR(target: Node, pos: Vec3) {

        if (!target) {
            return v3(0, 0, 0);
        }

        let transform = target.getComponent(UITransform);
        if (!transform) {
            return v3(0, 0, 0);
        }

        return transform.convertToNodeSpaceAR(pos);
    }

    /**
     * 加载预制体
     * @param prefabPath
     * @returns
     */
    public static loadPrefab(prefabPath: string): Promise<Prefab> {
        return new Promise((resolve, reject) => {

            resources.load("prefab/" + prefabPath, (error: Error, prefab: Prefab) => {

                if (error) {
                    Log.Error("loadPrefab = " + error.message || error);
                    resolve(null);
                    return;
                }

                Log.Info("loadPrefab success = ", prefab.name);

                resolve(prefab);
            });
        });
    }
    
    public static loadPrefabWithRetry(prefabPath: string, retryCount: number = 3): Promise<Prefab> {
        return new Promise((resolve, reject) => {
            const attemptLoad = (attempt: number) => {
                this.loadPrefab(prefabPath).then((prefab) => {
                    if (prefab) {
                        resolve(prefab);
                    } else if (attempt < retryCount) {
                        Log.Warn(`Retrying to load prefab: ${prefabPath}, attempt: ${attempt + 1}`);
                        attemptLoad(attempt + 1);
                    } else {
                        reject(new Error(`Failed to load prefab after ${retryCount} attempts: ${prefabPath}`));
                    }
                }).catch((error) => {
                    Log.Error(`Error loading prefab: ${prefabPath}, attempt: ${attempt + 1}`, error);
                    if (attempt < retryCount) {
                        attemptLoad(attempt + 1);
                    } else {
                        reject(error);
                    }
                });
            };
            attemptLoad(0);
        });
    }

    public static loadSpriteFrame(path: string): Promise<SpriteFrame> {
        return new Promise((resolve, reject) => {
            resources.load(path, SpriteFrame, (error: Error, spriteFrame: SpriteFrame) => {
                if (error) {
                    Log.Error("loadSpriteFrame = " + error.message || error);
                    resolve(null);
                    return;
                }
                resolve(spriteFrame);
            });
        });
    }

    public static loadVideoClip(path: string): Promise<VideoClip> {
        return new Promise((resolve, reject) => {
            resources.load(path, VideoClip, (error: Error, videoClip: VideoClip) => {
                if (error) {
                    Log.Error("loadVideoClip = " + error.message || error);
                    resolve(null);
                    return;
                }
                resolve(videoClip);
            });
        });
    }

    /**
     * 预加载预制体
     * @param prefabPath
     * @param onProgress
     * @param onComplete
     * @returns
     */
    public static preloadPrefab(prefabPath: string, onProgress?: (per: number) => void, onComplete?: (err?: Error) => void): Promise<boolean> {
        return new Promise((resolve, reject) => {
            resources.preload(
                "prefab/" + prefabPath,
                (finished: number, total: number) => onProgress?.(total ? finished / total : 0),
                (error: Error) => {
                    onComplete?.(error);
                    resolve(!error);
                }
            );
        });
    }

    /**
     *
     */
    public static threePointsCurve(t: number, p1: Vec3, cp: Vec3, p2: Vec3) {
        let x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
        let y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
        return new Vec3(x, y, p1.z);
    };

    /** 设置延时
     * @param time 延时时间(s)
     */
    public static async wait_func(time: number) {
        return new Promise<void>((resolve, reject) => {
            this.delayCallbackOnce(resolve, time);
        });
    }

    /**延迟函数执行一次
     * @param seconds 秒
     */
    public static delayCallbackOnce(func: () => void, seconds: number): void {
        if (this._delayCallMap.has(func)) {
            return;
        }
        const timer = setTimeout(() => {
            func();
            clearTimeout(this._delayCallMap.get(func));
            this._delayCallMap.delete(func);
        }, seconds * 1000);
        // @ts-ignore
        this._delayCallMap.set(func, timer);
    }

    //
    public static removeDelayCallback(func: Function): void {
        if (!this._delayCallMap.has(func)) {
            return;
        }
        clearTimeout(this._delayCallMap.get(func));
        this._delayCallMap.delete(func);
    }

    public static createUserInfoBtn(btnRect: Rect): WechatMinigame.UserInfoButton {
        const frameSize = view.getFrameSize();
        const winSize = view.getVisibleSize();

        const left = (btnRect.xMin / winSize.width) * frameSize.width;
        const top = ((winSize.height - btnRect.yMax) / winSize.height) * frameSize.height;
        const width = (btnRect.width / winSize.width) * frameSize.width;
        const height = (btnRect.height / winSize.height) * frameSize.height * 2;

        const data = {
            type: "text",
            text: "    ",
            style: {
                left: left,
                top: top,
                width: width,
                height: height,
                lineHeight: 0,
                color: "#ffffff",
                fontSize: 16,
                borderRadius: 4,
                backgroundColor: "ff0000",
                textAlign: 'center',
                borderColor: "",
                borderWidth: 0,
            },
        };

        const qq = window["qq"];
        if (wx && wx.createUserInfoButton) {
            //@ts-ignore
            return wx.createUserInfoButton(data);
        } else if (qq && qq.createUserInfoButton) {
            return qq.createUserInfoButton(data);
        } else {
            console.log("[sdk] createUserInfoButton");
            return null!;
        }
    }

}

