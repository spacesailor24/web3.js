"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpProvider = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const web3_core_1 = require("web3-core");
class HttpProvider {
    _web3Context;
    constructor(providerUrlOrContext) {
        this._web3Context = typeof providerUrlOrContext === 'string' ?
            new web3_core_1.Web3Context(providerUrlOrContext) : providerUrlOrContext;
    }
    // TODO Add support for request options
    async request(payload, options) {
        const response = await (0, cross_fetch_1.default)(this._web3Context.provider, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        // TODO
        if (!response.ok)
            throw new Error();
        return (await response.json());
    }
}
exports.HttpProvider = HttpProvider;
