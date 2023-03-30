import { Web3Context } from "web3-core";
export declare class HttpProvider {
    private _web3Context;
    constructor(providerUrlOrContext: string | Web3Context);
    request(payload: any, options: any): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map