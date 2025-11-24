const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp256k1.utils.randomPrivateKey();
const publicKey = secp256k1.getPublicKey(privateKey);

console.log("Private Key:", toHex(privateKey));
console.log("Public Key:", toHex(publicKey));

// Private Key: bf2d4228d8566199accb38b08af5b318a744cf19617e9e29e9071ef77eaacd98
// Public Key: 039cd347d7076a438c18fbaa691a053c8fb27f927bda94be83abaa0ece0911e94b
// ditd24601@C02F95SZML7H server % node generate.js
// Private Key: 5958cc76b3851e5a08695db0f37eca11692065ebfeed5b88f2070c00bccf977f
// Public Key: 0308305f0fadfc453df0443d1f901f72a25ff2a4b5b35cbf47e5fe47bff85a759a
// ditd24601@C02F95SZML7H server % node generate.js
// Private Key: 9c585804c59535dc77a1eba7ada65db9a67da6926ac99f26a74478a1239f0c6b
// Public Key: 03c2edba68f48dfcabddeb4be758d2fa1950fb158bd6cc4189ec8d8df2b61bd28b