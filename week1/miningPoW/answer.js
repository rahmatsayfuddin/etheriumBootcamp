const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction); 
    // TODO: add transaction to mempool
}

function mine() {
    // Get the current block height (length of blocks array)
    const transactions = [];
    const maxToTake = Math.min(mempool.length, MAX_TRANSACTIONS);
    for (let i = 0; i < maxToTake; i++) {
        const tx = mempool.shift(); // removes and returns first item
        transactions.push(tx);      // ✅ push the actual transaction
    }


    // ✅ 2. Create initial block (nonce starts at 0)
    const newBlock = {
        id: blocks.length,
        transactions: transactions,
        nonce: 0
    };

    // ✅ 3. Proof-of-Work loop: only nonce changes!
    let hashBigInt;
    do {
        // Re-stringify with updated nonce
        const blockString = JSON.stringify(newBlock);
        const hash = SHA256(blockString);
        hashBigInt = BigInt(`0x${hash}`);

        if (hashBigInt < TARGET_DIFFICULTY) {
            newBlock.hash = hash; // ✅ assign final hash
            break;
        }

        newBlock.nonce++; // only this changes inside the loop

    } while (true);

    // ✅ 4. Add to chain
    blocks.push(newBlock);
    return newBlock;
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};