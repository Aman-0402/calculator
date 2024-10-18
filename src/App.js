import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState("");

  const handleDigit = (value) => {
    setInput(input + value);
  };

  const handleOperator = (value) => {
    setPreviousValue(input);
    setInput("");
    setOperator(value);
  };

  const clear = () => {
    setInput("");
    setOperator(null);
    setPreviousValue("");
  };

  const calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(input);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(input);
        break;
      case "*":
        result = parseFloat(previousValue) * parseFloat(input);
        break;
      case "/":
        result = parseFloat(previousValue) / parseFloat(input);
        break;
      default:
        return;
    }
    setInput(result.toString());
    setOperator(null);
    setPreviousValue("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {/* First row */}
          <button onClick={clear}>AC</button>
          <button onClick={() => handleOperator("/")}>/</button>
          <button onClick={() => handleOperator("*")}>*</button>
          <button onClick={() => handleOperator("-")}>-</button>

          {/* Second row */}
          <button onClick={() => handleDigit("7")}>7</button>
          <button onClick={() => handleDigit("8")}>8</button>
          <button onClick={() => handleDigit("9")}>9</button>
          <button onClick={() => handleOperator("+")}>+</button>

          {/* Third row */}
          <button onClick={() => handleDigit("4")}>4</button>
          <button onClick={() => handleDigit("5")}>5</button>
          <button onClick={() => handleDigit("6")}>6</button>
          <button className="equals" onClick={calculate}>=</button>

          {/* Fourth row */}
          <button onClick={() => handleDigit("1")}>1</button>
          <button onClick={() => handleDigit("2")}>2</button>
          <button onClick={() => handleDigit("3")}>3</button>

          {/* Fifth row */}
          <button onClick={() => handleDigit("0")}>0</button>
          <button onClick={() => handleDigit(".")}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
