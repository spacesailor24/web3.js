import { Web3Context } from "web3-core";
import WebSocket from 'isomorphic-ws';
import EventEmitter from "events";

import { PartialJsonRpcPayload } from './types';

export class HttpProvider {
    private _web3Context: Web3Context;
    private _requestId = 0;

    constructor(providerUrl: string) {
        this._web3Context = new Web3Context(providerUrl);
    }

    public async request(
        payload: PartialJsonRpcPayload,
        options: Omit<RequestInit, 'body'> = {}
    ) {
        const response = await fetch(
            this._web3Context.providerUrl, {
                method: options.method ?? 'POST',
                headers: {
                    ...options.headers,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...payload,
                    jsonrpc: payload.jsonrpc ?? '2.0',
                    id: payload.id ?? this._requestId++
                }),
            }
        );

        // TODO
        if (!response.ok) throw new Error();

        return (await response.json());
    }
}

enum WebSocketReadyState {
    CONNECTING,
    OPEN,
    CLOSING,
    CLOSED
};
type WebSocketStatus = undefined | WebSocketReadyState;
type CallbackFn = (message: any) => void

export class WsProvider extends EventEmitter {
    public status: WebSocketStatus;

    private _web3Context: Web3Context;
    private _webSocket: WebSocket;
    private _requestId = 0;
    private _requests = new Map<number, CallbackFn>();
    private _subscriptions = new Map<number, CallbackFn>();

    constructor(providerUrl: string) {
        super();
        this._web3Context = new Web3Context(providerUrl);
        this._webSocket = new WebSocket(this._web3Context.providerUrl);
        this.status = this._webSocket.readyState;
        this._webSocket.addEventListener('close', this._onClose.bind(this));
        this._webSocket.addEventListener('message', this._onMessage.bind(this));
    }

    public async request(payload: PartialJsonRpcPayload) {
        await this._waitReady();

        const _requestId = payload.id ?? this._requestId++;
        // TODO Replace error
        if (this._requests.get(_requestId) !== undefined) throw new Error('Request id already in use, please provider a different one');
        
        this._requests.set(_requestId, (data: unknown) => {
            if (this.listenerCount('data') > 0) this.emit('data', data);
        });

        this._webSocket.send(JSON.stringify({
            ...payload,
            jsonrpc: payload.jsonrpc ?? '2.0',
            id: _requestId
        }));
    }

    private async _waitReady() {
        // TODO reject on timeout
        await new Promise((resolve, reject) => {
            setInterval(() => {
                if (this._webSocket.readyState === WebSocketReadyState.OPEN) {
                    resolve(true);
                }
            }, 250);
        });
    }

    private _onMessage(event: WebSocket.MessageEvent) {
        const message = JSON.parse(event.data);
        const callback = this._requests.get(message.id);
        if (callback !== undefined) callback(message);
        this._requests.delete(message.id);
    }

    private _onClose() {
        this._webSocket.removeEventListener('close', this._onClose);
        this._webSocket.removeEventListener('message', this._onMessage);
    }
}
