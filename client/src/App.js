import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // 1. auth/google you cannot use relative link hence use actual path http://localhost:5000/auth/google : however this link doesn't work in production environment, hence when code is deployed we need the address to be changed to production address: eg: http://myApp.herokuapp.com/auth/google
    // <a href="http://localhost:5000/auth/google"> Sign In With Google </a>
    // to have the path to work irrespctive of client or server add proxy configuration in package.json
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/auth/google"> Sign In With Google </a>
      </div>
    );
  }
}

export default App;
