import { Web3Context, Web3RequestManager } from "web3-core";
import { HttpProvider } from "web3-providers";

import { getGasPrice } from "../../src";

describe('getGasPrice', () => {
    let requestManager: Web3RequestManager;

    beforeAll(() => {
        requestManager = new Web3RequestManager(
            new HttpProvider(
                new Web3Context('http://127.0.0.1:8545')
            )
        );
    })

    it('should get the gas price', async () => {
        const response = await getGasPrice(requestManager);
        console.log(response);
    })
});
