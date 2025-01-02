import React, { useState } from 'react';
import Web3 from 'web3';

const Register: React.FC = () => {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      alert('Wallet connected: ' + accounts[0]);
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div>
      <h2>Register to Vote</h2>
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && <p>Wallet Address: {account}</p>}
    </div>
  );
};

export default Register;
