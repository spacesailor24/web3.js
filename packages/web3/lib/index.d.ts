import { Web3PluginFactory } from "web3-core";
import { HttpProvider } from "web3-providers";
export declare class Web3 {
    private _web3RequestManager;
    constructor(provider: HttpProvider, plugins?: Web3PluginFactory[]);
    private _initPlugins;
}
//# sourceMappingURL=index.d.ts.map