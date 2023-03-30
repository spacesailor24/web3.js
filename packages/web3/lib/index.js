"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3 = void 0;
const web3_core_1 = require("web3-core");
class Web3 {
    _web3RequestManager;
    constructor(provider, plugins = []) {
        this._web3RequestManager = new web3_core_1.Web3RequestManager(provider);
        this._initPlugins(plugins);
    }
    _initPlugins(plugins) {
        for (const plugin of plugins) {
            // @ts-ignore
            this[plugin.pluginNamespace] = plugin.init(this._web3RequestManager);
        }
    }
}
exports.Web3 = Web3;
