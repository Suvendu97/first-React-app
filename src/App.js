import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Suvendu';
  // const loading = false;

  // if(loading) {
  //   return <h1> Loading!</h1>
  // }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello I'm {name}
        </p>
        <p>
          Date: {new Date().toDateString()}
        </p>
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
