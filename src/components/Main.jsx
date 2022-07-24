import React from 'react'
import logo from './logo.svg';

const Main = () => {
  const methodDoesNotExist = () => {
    throw Error("Sentry log error");
  }
  return (
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <button onClick={methodDoesNotExist}>Break the world</button>
      </>
  )
}

export default Main