import { Web3PluginFactory } from "web3-core";
import { HttpProvider } from "web3-providers";
export declare class Web3 {
    private _web3RequestManager;
    constructor(provider: HttpProvider, plugins: Web3PluginFactory[], actions?: never);
    constructor(provider: HttpProvider, actions: unknown[], plugins?: never);
    constructor(provider: HttpProvider, pluginsOrActions?: Web3PluginFactory[] | unknown[], actions?: unknown[]);
    private _initPlugins;
    private _initActions;
}
//# sourceMappingURL=index.d.ts.map