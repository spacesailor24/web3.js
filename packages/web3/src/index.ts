import { Web3PluginFactory, Web3RequestManager } from "web3-core";
import { HttpProvider } from "web3-providers";

export class Web3 {
    private _web3RequestManager: Web3RequestManager;

    constructor(provider: HttpProvider, plugins: Web3PluginFactory[] = []) {
        this._web3RequestManager = new Web3RequestManager(provider);
        this._initPlugins(plugins);
    }

    private _initPlugins(plugins: Web3PluginFactory[]) {
        for (const plugin of plugins) {
            // @ts-ignore
            this[plugin.pluginNamespace] = plugin.init(this._web3RequestManager);
        }
    }
}
