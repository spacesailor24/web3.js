import fetch from 'cross-fetch';
import { Web3Context } from "web3-core";

export class HttpProvider {
    private _web3Context: Web3Context;

    constructor(providerUrlOrContext: string | Web3Context) {
        this._web3Context = typeof providerUrlOrContext === 'string' ?
            new Web3Context(providerUrlOrContext) : providerUrlOrContext;
    }

    // TODO Add support for request options
    public async request(payload: any, options: any) {
        const response = await fetch(
            this._web3Context.provider, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        // TODO
        if (!response.ok) throw new Error();

        return (await response.json());
    }
}
