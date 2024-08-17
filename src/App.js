// src/App.js
import React from 'react';
import { LaserEyesProvider, MAINNET } from '@omnisat/lasereyes';
import WalletConnectModal from './components/WalletConnectModal';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

// Make Buffer globally available in the browser environment

function App() {
  return (
    <LaserEyesProvider config={{ network: MAINNET }}>
      <div className="App">
        <h1>Laser Eyes Wallet Connect</h1>
        <WalletConnectModal />
      </div>
    </LaserEyesProvider>
  );
}

export default App;
