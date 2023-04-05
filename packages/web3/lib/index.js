"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3 = void 0;
const web3_core_1 = require("web3-core");
class Web3 {
    _web3RequestManager;
    constructor(provider, pluginsOrActions, actions) {
        this._web3RequestManager = new web3_core_1.Web3RequestManager(provider);
        if (pluginsOrActions !== undefined && pluginsOrActions.length > 0) {
            if (pluginsOrActions[0].init !== undefined) {
                this._initPlugins(pluginsOrActions);
            }
            else {
                this._initActions(pluginsOrActions);
            }
        }
        if (actions !== undefined)
            this._initActions(actions);
    }
    _initPlugins(plugins) {
        for (const plugin of plugins) {
            // @ts-ignore
            this[plugin.pluginNamespace] = plugin.init(this._web3RequestManager);
        }
    }
    _initActions(actions) {
        for (const action of actions) {
            // @ts-ignore
            this[action.name] = function () {
                // @ts-ignore
                return action(this._web3RequestManager, ...arguments);
            };
        }
    }
}
exports.Web3 = Web3;
