"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetHandlers = exports.configs = exports.unload = exports.load = void 0;
const consts_1 = require("./consts");
const load = function () {
    console.debug(`${consts_1.PACKAGE_NAME} load`);
};
exports.load = load;
const unload = function () {
    console.debug(`${consts_1.PACKAGE_NAME} unload`);
};
exports.unload = unload;
exports.configs = {
    "*": {
        hooks: "./hooks",
        doc: "editor/publish/custom-build-plugin.html",
        options: {
            cdnType: {
                label: `i18n:${consts_1.PACKAGE_NAME}.options.cdnType`,
                default: 'noCDN',
                render: {
                    ui: 'ui-select',
                    items: [{
                            label: `i18n:${consts_1.PACKAGE_NAME}.options.noCdn`,
                            value: 'noCDN',
                        }, {
                            label: `i18n:${consts_1.PACKAGE_NAME}.options.tencentCos`,
                            value: 'tencentCDN',
                        }, {
                            label: `i18n:${consts_1.PACKAGE_NAME}.options.aliyunOss`,
                            value: 'aliyunCDN',
                        }],
                },
                verifyRules: ["required"],
                verifyLevel: 'warn'
            },
            // remoteAddress: {
            //     label: `i18n:${PACKAGE_NAME}.options.remoteAddress`,
            //     default: "https://incubator-static.easygame2021.com/temp/",
            //     render: {
            //         ui: "ui-input",
            //         attributes: {
            //             placeholder: "Enter remote address...",
            //         },
            //     },
            //     verifyRules: ["required"],
            // },
            // enterCocos: {
            //     label: `i18n:${PACKAGE_NAME}.options.enterCocos`,
            //     description: `i18n:${PACKAGE_NAME}.options.enterCocos`,
            //     default: '',
            //     render: {
            //         /**
            //          * @en Please refer to Developer -> UI Component for a list of all supported UI components
            //          * @zh 请参考 开发者 -> UI 组件 查看所有支持的 UI 组件列表
            //          */
            //         ui: 'ui-input',
            //         attributes: {
            //             placeholder: `i18n:${PACKAGE_NAME}.options.enterCocos`,
            //         },
            //     },
            //     verifyRules: ['ruleTest'],
            //     verifyLevel: 'warn',
            // },
            // selectTest: {
            //     label: `i18n:${PACKAGE_NAME}.options.selectTest`,
            //     description: `i18n:${PACKAGE_NAME}.options.selectTest`,
            //     default: 'option2',
            //     render: {
            //         ui: 'ui-select',
            //         items: [
            //             {
            //                 label: `i18n:${PACKAGE_NAME}.options.selectTestOption1`,
            //                 value: 'option1',
            //             },
            //             {
            //                 label: `i18n:${PACKAGE_NAME}.options.selectTestOption2`,
            //                 value: 'option2',
            //             },
            //         ],
            //     },
            // },
            // objectTest: {
            //     label: `i18n:${PACKAGE_NAME}.options.objectTest`,
            //     description: `i18n:${PACKAGE_NAME}.options.objectTest`,
            //     type: 'object',
            //     default: {
            //         number: complexTestItems.number.default,
            //         string: complexTestItems.string.default,
            //         boolean: complexTestItems.boolean.default,
            //     },
            //     itemConfigs: complexTestItems,
            // },
            // arrayTest: {
            //     label: `i18n:${PACKAGE_NAME}.options.arrayTest`,
            //     description: `i18n:${PACKAGE_NAME}.options.arrayTest`,
            //     type: 'array',
            //     default: [complexTestItems.number.default, complexTestItems.string.default, complexTestItems.boolean.default],
            //     itemConfigs: JSON.parse(JSON.stringify(Object.values(complexTestItems))),
            // },
        },
        verifyRuleMap: {
            ruleTest: {
                message: `i18n:${consts_1.PACKAGE_NAME}.options.ruleTest_msg`,
                func(val, buildOptions) {
                    if (val === "cocos") {
                        return true;
                    }
                    return false;
                },
            },
        },
    },
};
exports.assetHandlers = "./asset-handlers";
