import server from "./server";

function Wallet({ address,setAddress,privateKey, setPrivateKey, balance, setBalance }) {

  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    if (privateKey) {
      const {
        data: { balance,address },
      } = await server.get(`balance/${privateKey}`);
      setAddress(address)
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Yout Private Key
        <input placeholder="Type an privateKey, for example: 0x1" value={privateKey} onChange={onChange}></input>
      </label>
        <label>
        Wallet Address
        <p>{address}</p>
      </label>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
