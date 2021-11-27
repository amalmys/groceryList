import "./index.css";
import React, { useState } from "react";
import { calculatorArray } from "../../utils/general";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    switch (e.target.name) {
      case "AC":
        allClear();
        break;
      case "C":
        clear();
        break;
      case "=":
        evaluate();
        break;
      default:
        setResult(result + e.target.name);
    }
  };
  const evaluate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  const allClear = () => {
    setResult("");
  };
  const clear = () => {
    setResult(result.slice(0, result.length - 1));
  };
  return (
    <div className="calc-parent">
      <input value={result} />
      <div className="button-grid">
        {calculatorArray.map((elem) => (
          <button name={elem} onClick={handleClick}>
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

/* <button onClick={handleClick}>AC</button>
        <button onClick={handleClick}>C</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>=</button> */
