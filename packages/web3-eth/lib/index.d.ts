import { Web3PluginFactory, Web3RequestManager } from "web3-core";
export declare class Web3Eth {
    private _requestManager;
    constructor(requestManager: Web3RequestManager);
    getGasPrice(providerOptions?: any): Promise<unknown>;
}
export declare class Web3EthPlugin extends Web3PluginFactory {
    pluginNamespace: string;
    init(requestManager: Web3RequestManager): Web3Eth;
}
//# sourceMappingURL=index.d.ts.map