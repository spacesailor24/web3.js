import { Web3RequestManager } from "web3-core";
import { Block, BlockHash, BlockTag, HexString } from "../types";
export declare function getBlock(requestManager: Web3RequestManager, blockHash: BlockHash, hydratedTransaction: Boolean, providerOptions?: any): Promise<Block | null>;
export declare function getBlock(requestManager: Web3RequestManager, blockNumber: HexString, hydratedTransaction: Boolean, providerOptions?: any): Promise<Block | null>;
export declare function getBlock(requestManager: Web3RequestManager, blockTag: BlockTag, hydratedTransaction: Boolean, providerOptions?: any): Promise<Block | null>;
//# sourceMappingURL=get_block.d.ts.map