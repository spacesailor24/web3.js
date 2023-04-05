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
    providerOptions?: unknown
): Promise<Block | null> {
    return requestManager.request(
        {
            // TODO isHex32Bytes
            "method": isHexStrict(blockIdentifier) ? "eth_getBlockByHash" : "eth_getBlockByNumber",
            "params": [blockIdentifier, hydratedTransaction],
        },
        providerOptions
    ) as unknown as Block | null;
}
