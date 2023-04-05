"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrice = void 0;
async function getGasPrice(requestManager, providerOptions) {
    return requestManager.request({
        "method": "eth_gasPrice",
        "params": [],
    }, providerOptions);
}
exports.getGasPrice = getGasPrice;
