import { Web3RequestManager } from "web3-core";
import { Block, BlockHash } from "../../src/types";
/**
 * Returns information about a block by hash
 *
 * @param blockHash 32 bytes hex string that identifies the hash of the desired block
 * @param hydratedTransaction A boolean that determines whether the returned block has complete transaction objects or just transaction hashes
 * @param requestManager A Web3RequestManager responsible for making the network request
 * @param providerOptions An optional object of request options e.g. HTTP request options such as HEADERS
 * @returns
 */
export declare function getBlockByHash(blockHash: BlockHash, hydratedTransaction: Boolean, requestManager: Web3RequestManager, providerOptions?: any): Promise<Block>;
//# sourceMappingURL=eth_getBlockByHash.d.ts.map