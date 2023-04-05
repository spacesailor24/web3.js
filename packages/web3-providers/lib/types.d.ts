export type JsonRpcPayload = {
    jsonrpc: string;
    id: number;
    method: string;
    params: string[];
};
export type PartialJsonRpcPayload = {
    jsonrpc?: string;
    id?: number;
    method: string;
    params: string[];
};
//# sourceMappingURL=types.d.ts.map