export type Web3Config = {
    provider: string;
}

abstract class Web3Provider {
    public abstract request(payload: any, options: any): unknown;
}

export class Web3Context {
    public provider: string;

    constructor(providerOrConfig: string | Web3Config) {
        if (typeof providerOrConfig === 'string') {
            this.provider = providerOrConfig;
        } else {
            this.provider = providerOrConfig.provider;
        }
    }
}

export class Web3RequestManager {
    private _provider: Web3Provider;

    constructor(provider: Web3Provider) {
        this._provider = provider;
    }

    public send(payload: any, options?: any ) {
        return this._provider.request(payload, options);
    }
}

export abstract class Web3PluginFactory {
    public abstract pluginNamespace: string;

    abstract init(requestManager: Web3RequestManager): unknown;
}
