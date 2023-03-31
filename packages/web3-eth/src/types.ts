export type HexString = string;
type Address = HexString;

export type BlockHash = HexString;

type BaseSignedTransaction = {
    type: HexString;
    nonce: HexString;
    to: Address;
    gas: HexString;
    value: HexString;
    input: HexString;
    chainId: HexString;
    r: HexString;
    s: HexString;
}

type SignedLegacyTransaction = BaseSignedTransaction & {
    gasPrice: HexString;
    v: HexString;
}

type AccessListEntry = {
    address: Address;
    storageKeys: HexString[];
};
type AccessList = AccessListEntry[];
type SignedEip2930Transaction = BaseSignedTransaction & {
    gasPrice: HexString;
    accessList: AccessList;
    yParity: HexString;
};

type SignedEip1559Transaction = BaseSignedTransaction & {
    maxPriorityFeePerGas: HexString;
    maxFeePerGas: HexString;
    accessList: AccessList;
    yParity: HexString;
};

type ValidatorWithdrawal = {
    index: HexString;
    validatorIndex: HexString;
    address: Address;
    amount: HexString;
};
type Withdrawals = ValidatorWithdrawal[];

export type Block = {
    parentHash: HexString;
    sha3Uncles: HexString;
    miner: HexString;
    stateRoot: HexString;
    transactionsRoot: HexString;
    receiptsRoot: HexString;
    logsBloom: HexString;
    difficulty: HexString;
    number: HexString;
    gasLimit: HexString;
    gasUsed: HexString;
    timestamp: HexString;
    extraData: HexString;
    mixHash: HexString;
    nonce: HexString;
    totalDifficulty: HexString;
    baseFeePerGas: HexString;
    withdrawalsRoot: HexString;
    size: HexString;
    transactions: HexString[] | (SignedLegacyTransaction | SignedEip2930Transaction | SignedEip1559Transaction)[];
    withdrawals: Withdrawals;
    uncles: HexString[];
}
