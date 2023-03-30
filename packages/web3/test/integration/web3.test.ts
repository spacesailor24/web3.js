import { Web3EthPlugin } from "web3-eth";
import { HttpProvider } from "web3-providers";

import { Web3 } from "../../src";

describe('getGasPrice', () => {
    it('should get the gas price', async () => {
        const web3 = new Web3(
            new HttpProvider('http://127.0.0.1:8545'),
            [new Web3EthPlugin]
        );
        // @ts-ignore
        console.log(await web3.eth.getGasPrice());
    })
});
