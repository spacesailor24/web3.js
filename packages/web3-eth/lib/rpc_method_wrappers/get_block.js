"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlock = void 0;
const web3_utils_1 = require("web3-utils");
async function getBlock(requestManager, blockIdentifier, hydratedTransaction, providerOptions) {
    let block;
    if ((0, web3_utils_1.isHexStrict)(blockIdentifier)) {
        block = await requestManager.send({
            "jsonrpc": "2.0",
            "method": "eth_getBlockByHash",
            "params": [blockIdentifier, hydratedTransaction],
            "id": 0
        }, providerOptions);
    }
    else {
        block = await requestManager.send({
            "jsonrpc": "2.0",
            "method": "eth_getBlockByNumber",
            "params": [blockIdentifier, hydratedTransaction],
            "id": 0
        }, providerOptions);
    }
    return block;
}
exports.getBlock = getBlock;
