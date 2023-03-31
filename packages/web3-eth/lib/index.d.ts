import { Web3PluginFactory, Web3RequestManager } from "web3-core";
import { getGasPrice } from "./rpc_method_wrappers/get_gas_price";
import { getBlock } from "./rpc_method_wrappers/get_block";
export declare class Web3Eth {
    private _requestManager;
    constructor(requestManager: Web3RequestManager);
    getGasPrice(providerOptions?: any): Promise<string>;
}
export declare class Web3EthPlugin extends Web3PluginFactory {
    pluginNamespace: string;
    init(requestManager: Web3RequestManager): Web3Eth;
}
export { getBlock, getGasPrice };
//# sourceMappingURL=index.d.ts.map