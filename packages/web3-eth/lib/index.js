"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrice = exports.getBlock = exports.Web3EthPlugin = exports.Web3Eth = void 0;
const web3_core_1 = require("web3-core");
const get_gas_price_1 = require("./rpc_method_wrappers/get_gas_price");
Object.defineProperty(exports, "getGasPrice", { enumerable: true, get: function () { return get_gas_price_1.getGasPrice; } });
const get_block_1 = require("./rpc_method_wrappers/get_block");
Object.defineProperty(exports, "getBlock", { enumerable: true, get: function () { return get_block_1.getBlock; } });
class Web3Eth {
    _requestManager;
    constructor(requestManager) {
        this._requestManager = requestManager;
    }
    getGasPrice(providerOptions) {
        return (0, get_gas_price_1.getGasPrice)(this._requestManager, providerOptions);
    }
}
exports.Web3Eth = Web3Eth;
class Web3EthPlugin extends web3_core_1.Web3PluginFactory {
    pluginNamespace = 'eth';
    init(requestManager) {
        return new Web3Eth(requestManager);
    }
}
exports.Web3EthPlugin = Web3EthPlugin;
