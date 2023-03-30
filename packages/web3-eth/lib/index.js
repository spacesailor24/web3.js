"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3EthPlugin = exports.getGasPrice = void 0;
const web3_core_1 = require("web3-core");
async function getGasPrice(requestManager, providerOptions) {
    return requestManager.send({
        "jsonrpc": "2.0",
        "method": "eth_gasPrice",
        "params": [],
        "id": 0
    }, providerOptions);
}
exports.getGasPrice = getGasPrice;
class Web3EthPluginInstance {
    _requestManager;
    constructor(requestManager) {
        this._requestManager = requestManager;
    }
    getGasPrice(providerOptions) {
        return getGasPrice(this._requestManager, providerOptions);
    }
}
class Web3EthPlugin extends web3_core_1.Web3PluginFactory {
    pluginNamespace = 'eth';
    init(requestManager) {
        return new Web3EthPluginInstance(requestManager);
    }
}
exports.Web3EthPlugin = Web3EthPlugin;
