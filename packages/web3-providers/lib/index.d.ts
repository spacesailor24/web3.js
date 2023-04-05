/// <reference types="node" />
import EventEmitter from "events";
import { PartialJsonRpcPayload } from './types';
export declare class HttpProvider {
    private _web3Context;
    private _requestId;
    constructor(providerUrl: string);
    request(payload: PartialJsonRpcPayload, options?: Omit<RequestInit, 'body'>): Promise<any>;
}
declare enum WebSocketReadyState {
    CONNECTING = 0,
    OPEN = 1,
    CLOSING = 2,
    CLOSED = 3
}
type WebSocketStatus = undefined | WebSocketReadyState;
export declare class WsProvider extends EventEmitter {
    status: WebSocketStatus;
    private _web3Context;
    private _webSocket;
    private _requestId;
    private _requests;
    private _subscriptions;
    constructor(providerUrl: string);
    request(payload: PartialJsonRpcPayload): Promise<void>;
    private _waitReady;
    private _onMessage;
    private _onClose;
}
export {};
//# sourceMappingURL=index.d.ts.map