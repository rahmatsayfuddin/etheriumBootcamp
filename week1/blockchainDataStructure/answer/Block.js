const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(value) {
        this.data =value;
        this.previousHash = '';
    }
    toHash() {
        return SHA256(this.data + this.previousHash)// a hash!
        //linking the block by adding previousHash
    }
}

module.exports = Block;
