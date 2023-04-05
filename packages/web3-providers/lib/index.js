"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsProvider = exports.HttpProvider = void 0;
const web3_core_1 = require("web3-core");
const isomorphic_ws_1 = __importDefault(require("isomorphic-ws"));
const events_1 = __importDefault(require("events"));
class HttpProvider {
    _web3Context;
    _requestId = 0;
    constructor(providerUrl) {
        this._web3Context = new web3_core_1.Web3Context(providerUrl);
    }
    async request(payload, options = {}) {
        const response = await fetch(this._web3Context.providerUrl, {
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
        });
        // TODO
        if (!response.ok)
            throw new Error();
        return (await response.json());
    }
}
exports.HttpProvider = HttpProvider;
var WebSocketReadyState;
(function (WebSocketReadyState) {
    WebSocketReadyState[WebSocketReadyState["CONNECTING"] = 0] = "CONNECTING";
    WebSocketReadyState[WebSocketReadyState["OPEN"] = 1] = "OPEN";
    WebSocketReadyState[WebSocketReadyState["CLOSING"] = 2] = "CLOSING";
    WebSocketReadyState[WebSocketReadyState["CLOSED"] = 3] = "CLOSED";
})(WebSocketReadyState || (WebSocketReadyState = {}));
;
class WsProvider extends events_1.default {
    status;
    _web3Context;
    _webSocket;
    _requestId = 0;
    _requests = new Map();
    _subscriptions = new Map();
    constructor(providerUrl) {
        super();
        this._web3Context = new web3_core_1.Web3Context(providerUrl);
        this._webSocket = new isomorphic_ws_1.default(this._web3Context.providerUrl);
        this.status = this._webSocket.readyState;
        this._webSocket.addEventListener('close', this._onClose.bind(this));
        this._webSocket.addEventListener('message', this._onMessage.bind(this));
    }
    async request(payload) {
        await this._waitReady();
        const _requestId = payload.id ?? this._requestId++;
        // TODO Replace error
        if (this._requests.get(_requestId) !== undefined)
            throw new Error('Request id already in use, please provider a different one');
        this._requests.set(_requestId, (data) => {
            if (this.listenerCount('data') > 0)
                this.emit('data', data);
        });
        this._webSocket.send(JSON.stringify({
            ...payload,
            jsonrpc: payload.jsonrpc ?? '2.0',
            id: _requestId
        }));
    }
    async _waitReady() {
        // TODO reject on timeout
        await new Promise((resolve, reject) => {
            setInterval(() => {
                if (this._webSocket.readyState === WebSocketReadyState.OPEN) {
                    resolve(true);
                }
            }, 250);
        });
    }
    _onMessage(event) {
        const message = JSON.parse(event.data);
        const callback = this._requests.get(message.id);
        if (callback !== undefined)
            callback(message);
        this._requests.delete(message.id);
    }
    _onClose() {
        this._webSocket.removeEventListener('close', this._onClose);
        this._webSocket.removeEventListener('message', this._onMessage);
    }
}
exports.WsProvider = WsProvider;
