export type Web3Config = {
    provider: string;
};
declare abstract class Web3Provider {
    abstract request(payload: any, options: any): unknown;
}
export declare class Web3Context {
    provider: string;
    constructor(providerOrConfig: string | Web3Config);
}
export declare class Web3RequestManager {
    private _provider;
    constructor(provider: Web3Provider);
    send(payload: any, options?: any): unknown;
}
export declare abstract class Web3PluginFactory {
    abstract pluginNamespace: string;
    abstract init(requestManager: Web3RequestManager): unknown;
}
export {};
//# sourceMappingURL=index.d.ts.map