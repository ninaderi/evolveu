import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from "./Component/TicTacToe"
import Player from "./Component/Player"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <TicTacToe />
      <Player />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
