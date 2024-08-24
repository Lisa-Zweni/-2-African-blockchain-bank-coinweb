import { useState } from 'react';
import { connectWallet } from '../services/coinweb';

export default function WalletConnect() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [signer, setSigner] = useState(null);

  const handleConnect = async () => {
    const signer = await connectWallet();
    if (signer) {
      setWalletConnected(true);
      setSigner(signer);
    }
  };

  return (
    <div>
      <button onClick={handleConnect}>
        {walletConnected ? "Wallet Connected" : "Connect Wallet"}
      </button>
    </div>
  );
}
