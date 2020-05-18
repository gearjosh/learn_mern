import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Exercise Tracker
        </p>
        <a
          className="App-link"
          href="https://github.com/gearjosh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Exercise like a primitive human.
        </a>
      </header>
    </div>
  );
}

export default App;
