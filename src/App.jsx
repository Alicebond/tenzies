import { useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="app">
      <div className="board">
        <h1 className="title">Tenzies</h1>
        <p className="info">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="boxes">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
        <button className="btn">Roll</button>
      </div>
    </div>
  );
}

export default App;
