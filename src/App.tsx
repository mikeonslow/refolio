import React from "react";
import logo from "./logo.svg";
import { Portfolio } from "./features/portfolio/Portfolio";
import "./App.css";
import { features } from "process";

function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
