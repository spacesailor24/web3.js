import { Web3PluginFactory, Web3RequestManager } from "web3-core";

import { getGasPrice } from "./rpc_method_wrappers/get_gas_price";
import { getBlock } from "./rpc_method_wrappers/get_block";

export class Web3Eth {
    private _requestManager: Web3RequestManager;

    constructor(requestManager: Web3RequestManager) {
        this._requestManager = requestManager;
    }

    public getGasPrice(providerOptions?: any) {
        return getGasPrice(this._requestManager, providerOptions);
    }
}

export class Web3EthPlugin extends Web3PluginFactory {
    public pluginNamespace = 'eth';

    public init(requestManager: Web3RequestManager) {
        return new Web3Eth(requestManager);
    }
}

export { getBlock, getGasPrice };
