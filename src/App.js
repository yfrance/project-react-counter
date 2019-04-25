import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter.js";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Project Javascript Counter</p>

      <a href="https://github.com/yfrance">
        <b>Yan France</b>
      </a>

      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
