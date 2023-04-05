"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3PluginFactory = exports.Web3RequestManager = exports.Web3Context = void 0;
class Web3Provider {
}
class Web3Context {
    providerUrl;
    constructor(providerOrConfig) {
        if (typeof providerOrConfig === 'string') {
            this.providerUrl = providerOrConfig;
        }
        else {
            this.providerUrl = providerOrConfig.provider;
        }
    }
}
exports.Web3Context = Web3Context;
class Web3RequestManager {
    _provider;
    constructor(provider) {
        this._provider = provider;
    }
    request(payload, options) {
        return this._provider.request(payload, options);
    }
}
exports.Web3RequestManager = Web3RequestManager;
class Web3PluginFactory {
}
exports.Web3PluginFactory = Web3PluginFactory;
