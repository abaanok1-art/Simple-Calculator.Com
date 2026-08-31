import React, { useState } from "react";
import './calculator.css'
import Spinner from "../../assets/react_logo_transparent.png";

const Calculator = () => {
  const [result, setResult] = useState("Result");
  const [history, setHistory] = useState([]);

  const calculate = () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let res = 0;

    if (num1 === 0 && num2 === 0) {
      setResult("Cannot calculate with zero");
      return;
    } else if (operator == "+") {
      res = num1 + num2;
    } else if (operator == "-") {
      res = num1 - num2;
    } else if (operator == "*") {
      res = num1 * num2;
    } else if (operator == "/") {
      if (num2 === 0) {
        setResult("Cannot divide by zero");
        return;
      } else {
        res = num1 / num2;
      }
    }

    setResult(res);
    setHistory([`${num1} ${operator} ${num2} = ${res}`, ...history]);
  };
const copyResult = () => {
  if (typeof result === "number") {
    navigator.clipboard.writeText(result);
    setResult("Copied!");
    setTimeout(() => {
      setResult(result);
    }, 1000);
  }
};

  return (
    <center>
      <div className="Calculator">
        <h2>Simple Calculator</h2>
        <div className="Input-Group">
          <input type="number" id="num1" placeholder="Number 1" />
          <select id="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="number" id="num2" placeholder="Number 2" />
        </div>

        <div>
          <button className="calculate" onClick={calculate}>Calculate</button>
        </div>

        <h1 onClick={copyResult} style={{ cursor: "pointer" }}>
          {result}
        </h1>

        {history.length > 0 && (
          <div>
            {history.map((item, index) => (
              <p className="history" key={index} style={{ color: "white", margin: "2px" }}>
                {item}
              </p>
            ))}
          </div>
        )}

        <div className="Author">
          <p>Made By Abaan Mubeen</p>
        </div>
      </div>

      <div className="spinner-parent">
        <img className="spinner" src={Spinner} alt="React logo" width={100} />
      </div>
    </center>
  );
};

export default Calculator;