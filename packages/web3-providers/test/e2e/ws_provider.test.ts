import { WsProvider } from "web3-providers";

describe('WsProvider', () => {
    it('should do something', async () => {
        const wsProvider = new WsProvider('ws://127.0.0.1:8545');
        wsProvider.on('data', (data) => console.log('data', data));
        wsProvider.request({
            method: 'eth_gasPrice',
            params: []
        });
    })
});
