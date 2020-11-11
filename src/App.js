import React from "react";
import "./App.css";
import { evaluate } from "mathjs";

function App() {
  const [expression, setExpression] = React.useState("0");
  const [status, setStatus] = React.useState(false);
  const handleClick = function (value) {
    let newExpression;
    if (status === false) {
      newExpression = value;
      let st1 = true;
      setStatus(st1);
    } else {
      newExpression = expression.toString() + value;
    }
    setExpression(newExpression);
  };
  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      if (result === Infinity || result === -Infinity) {
        setExpression("Math Error");
      } else if (result === 0) {
        setExpression("0");
        setStatus(false);
      } else {
        setExpression(result);
      }
    } catch (e) {
      setExpression("invalid expression, Press AC");
    }
  };
  const clear = function () {
    setExpression("0");
    setStatus(false);
  };
  const deletefxn = function () {
    if (expression.length === 1) {
      setExpression("0");
      setStatus(false);
    } else {
      let exp = expression.slice(0, expression.length - 1);
      setExpression(exp);
    }
  };
  return (
    <div className="App">
      <h2 id="heading">Simple Calculator</h2>
      <div id="result">{expression}</div>
      <div id="buttons">
        <div>
          <button id="clear" onClick={clear}>
            AC
          </button>
          <button id="delete" onClick={deletefxn}>
            DELETE
          </button>
          <button id="equal" onClick={calculate}>
            =
          </button>
          <button id="divide" onClick={() => handleClick("/")}>
            /
          </button>
        </div>
        <div>
          <button id="7" onClick={() => handleClick("7")}>
            7
          </button>
          <button id="8" onClick={() => handleClick("8")}>
            8
          </button>
          <button id="9" onClick={() => handleClick("9")}>
            9
          </button>
          <button id="multiply" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div>
          <button id="4" onClick={() => handleClick("4")}>
            4
          </button>
          <button id="5" onClick={() => handleClick("5")}>
            5
          </button>
          <button id="6" onClick={() => handleClick("6")}>
            6
          </button>
          <button id="subtract" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div>
          <button id="1" onClick={() => handleClick("1")}>
            1
          </button>
          <button id="2" onClick={() => handleClick("2")}>
            2
          </button>
          <button id="3" onClick={() => handleClick("3")}>
            3
          </button>
          <button id="add" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div>
          <button id="0" onClick={() => handleClick("0")}>
            0
          </button>
          <button id="dot" onClick={() => handleClick(".")}>
            .
          </button>
          <button id="percentile" onClick={() => handleClick("%")}>
            %
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
