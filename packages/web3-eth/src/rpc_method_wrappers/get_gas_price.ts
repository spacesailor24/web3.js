import { Web3RequestManager } from "web3-core";

import { HexString } from "../types";

export async function getGasPrice(requestManager: Web3RequestManager, providerOptions?: any): Promise<HexString> {
    return requestManager.request(
        {
            "method": "eth_gasPrice",
            "params": [],
        },
        providerOptions
    ) as unknown as HexString;
}
