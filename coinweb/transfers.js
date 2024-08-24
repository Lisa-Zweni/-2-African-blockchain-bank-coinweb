import { useState } from 'react';
import { transferFunds } from '../services/coinweb';

export default function Transfer() {
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [transferSuccess, setTransferSuccess] = useState(false);

  const handleTransfer = async () => {
    const result = await transferFunds(toAddress, amount);
    if (result) {
      setTransferSuccess(true);
    }
  };

  return (
    <div>
      <h1>Transfer Funds</h1>
      <input
        type="text"
        placeholder="Recipient Address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
      {transferSuccess && <p>Transfer successful!</p>}
    </div>
  );
}
