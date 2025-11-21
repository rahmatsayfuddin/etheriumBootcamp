const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // console.log( publicKey)
    const byteSlice = publicKey.slice(1);
    // console.log(byteSlice)
    hash = keccak256 (byteSlice)
    const addressBytes = hash.slice(-20);
    const addressHex = Buffer.from(addressBytes).toString('hex');
    // console.log( secp(hash))
    return addressBytes;
}

module.exports = getAddress;