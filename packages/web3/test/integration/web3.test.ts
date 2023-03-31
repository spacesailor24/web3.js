import { Web3EthPlugin, getBlock, getGasPrice } from "web3-eth";
import { HttpProvider } from "web3-providers";

import { Web3 } from "../../src";

describe('getGasPrice', () => {
    it('should get the gas price using Web3EthPlugin', async () => {
        const web3 = new Web3(
            new HttpProvider('http://127.0.0.1:8545'),
            [new Web3EthPlugin]
        );
        // @ts-ignore
        console.log(await web3.eth.getGasPrice());
    });

    it('should get the gas price using getGasPrice action and no plugins', async () => {
        const web3 = new Web3(
            new HttpProvider('http://127.0.0.1:8545'),
            [],
            [getGasPrice]
        );
        // @ts-ignore
        console.log(await web3.getGasPrice());
    });

    it('should get the earliest hydrated block using getBlock action', async () => {
        const web3 = new Web3(
            new HttpProvider('http://127.0.0.1:8545'),
            [getBlock]
        );
        // @ts-ignore
        console.log(await web3.getBlock('earliest', true));
    });
});
