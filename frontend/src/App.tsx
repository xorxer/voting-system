import React from 'react';
import './App.css';
import Register from './components/Register';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Decentralized Voting System</h1>
        <Register />
      </header>
    </div>
  );
};

export default App;
