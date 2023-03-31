"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockByHash = void 0;
/**
 * Returns information about a block by hash
 *
 * @param blockHash 32 bytes hex string that identifies the hash of the desired block
 * @param hydratedTransaction A boolean that determines whether the returned block has complete transaction objects or just transaction hashes
 * @param requestManager A Web3RequestManager responsible for making the network request
 * @param providerOptions An optional object of request options e.g. HTTP request options such as HEADERS
 * @returns
 */
async function getBlockByHash(blockHash, hydratedTransaction, requestManager, providerOptions) {
    // TODO add validation for blockHash
    return requestManager.send({
        "jsonrpc": "2.0",
        "method": "eth_getBlockByHash",
        "params": [blockHash, hydratedTransaction],
        "id": 0
    }, providerOptions);
}
exports.getBlockByHash = getBlockByHash;
