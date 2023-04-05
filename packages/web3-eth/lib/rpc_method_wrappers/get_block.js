"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlock = void 0;
const web3_utils_1 = require("web3-utils");
async function getBlock(requestManager, blockIdentifier, hydratedTransaction, providerOptions) {
    return requestManager.request({
        // TODO isHex32Bytes
        "method": (0, web3_utils_1.isHexStrict)(blockIdentifier) ? "eth_getBlockByHash" : "eth_getBlockByNumber",
        "params": [blockIdentifier, hydratedTransaction],
    }, providerOptions);
}
exports.getBlock = getBlock;
