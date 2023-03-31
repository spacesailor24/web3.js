"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrice = void 0;
async function getGasPrice(requestManager, providerOptions) {
    return requestManager.send({
        "jsonrpc": "2.0",
        "method": "eth_gasPrice",
        "params": [],
        "id": 0
    }, providerOptions);
}
exports.getGasPrice = getGasPrice;
