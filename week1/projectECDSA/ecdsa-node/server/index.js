const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex,hexToBytes } = require("ethereum-cryptography/utils");

app.use(cors());
app.use(express.json());

const balances = {
  "039cd347d7076a438c18fbaa691a053c8fb27f927bda94be83abaa0ece0911e94b": 100,
  "0308305f0fadfc453df0443d1f901f72a25ff2a4b5b35cbf47e5fe47bff85a759a": 50,
  "03c2edba68f48dfcabddeb4be758d2fa1950fb158bd6cc4189ec8d8df2b61bd28b": 75,
};

app.get("/balance/:privateKey", (req, res) => { 
  const privateKeyHex = req.params.privateKey;               // STRING
  const privateKeyBytes = hexToBytes(privateKeyHex);   // convert

  const publicKeyBytes = secp256k1.getPublicKey(privateKeyBytes);
  const address = toHex(publicKeyBytes); 
  const balance = balances[address] || 0;
  res.send({ balance,address });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
