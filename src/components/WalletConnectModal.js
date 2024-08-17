import React, { useState } from 'react';
import { useLaserEyes, UNISAT } from '@omnisat/lasereyes';
import { motion } from 'framer-motion';

function WalletConnectModal() {
  const { connect, disconnect, connected, address, balance } = useLaserEyes();
  const [modalOpen, setModalOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connect(UNISAT);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>
        {connected ? 'Open Wallet' : 'Connect Wallet'}
      </button>

      {modalOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={toggleModal} className="close-button">X</button>
            {!connected ? (
              <div>
                <h2>Connect to Your Wallet</h2>
                <button onClick={handleConnect}>Connect with Unisat</button>
              </div>
            ) : (
              <div>
                <h2>Wallet Information</h2>
                <p>Address: {address}</p>
                <p>Balance: {balance ? `${balance} satoshis` : 'Loading...'}</p>
                <button onClick={handleDisconnect}>Disconnect</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default WalletConnectModal;
