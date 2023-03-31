import { Web3RequestManager } from "web3-core";
import { isHexStrict } from "web3-utils";

import { Block, BlockHash, BlockTag, HexString } from "../types";

export async function getBlock(
    requestManager: Web3RequestManager,
    blockHash: BlockHash,
    hydratedTransaction: Boolean,
    providerOptions?: any
): Promise<Block | null>
export async function getBlock(
    requestManager: Web3RequestManager,
    blockNumber: HexString,
    hydratedTransaction: Boolean,
    providerOptions?: any
): Promise<Block | null>
export async function getBlock(
    requestManager: Web3RequestManager,
    blockTag: BlockTag,
    hydratedTransaction: Boolean,
    providerOptions?: any
): Promise<Block | null>
export async function getBlock(
    requestManager: Web3RequestManager,
    blockIdentifier: BlockHash | HexString | BlockTag,
    hydratedTransaction: Boolean,
    providerOptions?: any
): Promise<Block | null> {
    let block: Block | null;

    if (isHexStrict(blockIdentifier)) {
        block = await requestManager.send(
            {
                "jsonrpc": "2.0",
                "method": "eth_getBlockByHash",
                "params": [blockIdentifier, hydratedTransaction],
                "id": 0
            },
            providerOptions
        ) as unknown as Block | null;
    } else {
        block = await requestManager.send(
            {
                "jsonrpc": "2.0",
                "method": "eth_getBlockByNumber",
                "params": [blockIdentifier, hydratedTransaction],
                "id": 0
            },
            providerOptions
        ) as unknown as Block | null;
    }

    return block
}
