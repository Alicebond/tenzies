import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Box from "./Box";

function App() {
  const [arrNum, setArrNum] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const value = arrNum[0].value;
    const isWon = arrNum.every((i) => i.isHeld && i.value === value);
    if (isWon) setTenzies(true);
  }, [arrNum]);

  function getRandomNum() {
    return Math.ceil(Math.random() * 6);
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: getRandomNum(),
        isHeld: false,
        id: nanoid(),
      });
    }

    return newDice;
  }

  function rollDice() {
    tenzies
      ? (setArrNum(allNewDice()), setTenzies(false))
      : setArrNum((prev) =>
          prev.map((i) => (i.isHeld ? i : { ...i, value: getRandomNum() }))
        );
  }

  function holdDice(id) {
    setArrNum((prev) =>
      prev.map((i) => (i.id === id ? { ...i, isHeld: !i.isHeld } : i))
    );
  }

  const boxes = arrNum.map((i) => (
    <Box
      isHeld={i.isHeld}
      id={i.id}
      num={i.value}
      key={i.nanoid}
      handleClick={holdDice}
    />
  ));

  return (
    <main className="app">
      <div className="info">
        <h1 className="title">Tenzies</h1>
        {tenzies ? (
          <p className="won">You Won 🎉</p>
        ) : (
          <p className="info">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        )}
      </div>
      <div className="boxes">{boxes}</div>
      <button className="btn" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
