const Block = require('./Block');

class Blockchain {
    constructor() {
    const block = new Block("test")
    this.hash = 
        this.chain = [block]; //genesis block
    }
    addBlock(block){

        const oldChain = [...this.chain]; //copying the oldchain
        const lastBlock = oldChain.pop(); //return the last block of the chain 

        block.previousHash = lastBlock.toHash(); //return hash of the previousHash

        this.chain = [...this.chain, block] //adddingblock
    }

    isValid() {
        let chainIsValid = true;
        for (let i = 1; i < this.chain.length; i++) {
            const hashBlockBefore = this.chain[i - 1].toHash().toString();
            const previousHash = this.chain[i].previousHash.toString();

            if (hashBlockBefore !== previousHash) chainIsValid = false;
        }

        return chainIsValid;
    }
}

module.exports = Blockchain;