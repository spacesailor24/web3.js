import { Web3Context, Web3RequestManager } from "web3-core";
import { HttpProvider } from "web3-providers";

import { Web3Eth } from "../../src/index";

describe('getGasPrice', () => {
    let web3Eth: Web3Eth;

    beforeAll(() => {
        const requestManager = new Web3RequestManager(
            new HttpProvider(
                new Web3Context('http://127.0.0.1:8545')
            )
        );
        web3Eth = new Web3Eth(requestManager);
    });

    it('should get the gas price', async () => {
        const response = await web3Eth.getGasPrice();
        console.log(response);
    })
});
