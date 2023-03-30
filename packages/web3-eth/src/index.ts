import { Web3PluginFactory, Web3RequestManager } from "web3-core";

export async function getGasPrice(requestManager: Web3RequestManager, providerOptions?: any) {
    return requestManager.send(
        {
            "jsonrpc": "2.0",
            "method": "eth_gasPrice",
            "params": [],
            "id": 0
        },
        providerOptions
    )
}

class Web3EthPluginInstance {
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
        return new Web3EthPluginInstance(requestManager);
    }
}
