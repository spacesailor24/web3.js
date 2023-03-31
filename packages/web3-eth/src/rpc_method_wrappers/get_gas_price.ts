import { Web3RequestManager } from "web3-core";

import { HexString } from "../types";

export async function getGasPrice(requestManager: Web3RequestManager, providerOptions?: any): Promise<HexString> {
    return requestManager.send(
        {
            "jsonrpc": "2.0",
            "method": "eth_gasPrice",
            "params": [],
            "id": 0
        },
        providerOptions
    ) as unknown as HexString;
}
