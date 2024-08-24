import { useState, useEffect } from 'react';
import { getBalance } from '../services/coinweb';

export default function BalanceDisplay({ address }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getBalance(address);
      setBalance(balance);
    };

    fetchBalance();
  }, [address]);

  return <div>Balance: {balance} CWEB</div>;
}
