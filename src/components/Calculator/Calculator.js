import React, { useEffect, useState } from 'react'
import './Calculator.css';

const Calculator = () => {
  const [operant, setOperant] = useState("");
  const [result, setResult] = useState("");
  const [ans, setAns] = useState("");

  const operations = ["+", "-", "/", ".", "*"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (numbers.includes(key) || operations.includes(key)) {
        buttonHandler(key);
      } else if (key === "Enter" || key === "=") {
        equalsHandler();
      } else if (key === "Backspace") {
        delHandler();
      } else if (key === "Delete") {
        acHandler();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [operant]);

  const buttonHandler = (button) => {
    if (operant === "Error") {
      return;
    }
    if ((operations.includes(operant[operant.length - 1]) && operations.includes(button)) ||
      (operations.includes(button) && operant === "")) {
      return;
    }
    if (operant === '0' && !operations.includes(button)) {
      return;
    }
    try {
      setOperant(operant + String(button));
      if (!operations.includes(button)) {
        setResult(String(eval(operant + button)));
      }
    } catch {
      setOperant("Syntax Error");
    }
  };

  const equalsHandler = () => {
    if (operant === "Error") {
      return;
    }
    try {
      setOperant(String(eval(operant || 0)));
      setAns(String(eval(operant || 0)))
    } catch (error) {
      setOperant("Error");
    }
  }

  const ansHandler = () => {
    if (operant === "Error" || operant === "0") {
      return;
    }
    setOperant(String(operant) + String(ans));
  }

  const acHandler = () => {
    setOperant("");
    setResult("");
  };

  const delHandler = () => {
    setOperant(operant.slice(0, -1));
  };

  return (
    <>
      <div className="calculator-main">
        <div className="calculator">
          <div className="display">
            <span>({result || 0})</span>
            {operant || 0}
          </div>
          <div className="buttons">
            <button onClick={() => buttonHandler(7)}>7</button>
            <button onClick={() => buttonHandler(8)}>8</button>
            <button onClick={() => buttonHandler(9)}>9</button>
            <button onClick={delHandler}>DEL</button>
            <button onClick={acHandler}>AC</button>
            <button onClick={() => buttonHandler(4)}>4</button>
            <button onClick={() => buttonHandler(5)}>5</button>
            <button onClick={() => buttonHandler(6)}>6</button>
            <button onClick={() => buttonHandler("*")}>*</button>
            <button onClick={() => buttonHandler("/")}>/</button>
            <button onClick={() => buttonHandler(1)}>1</button>
            <button onClick={() => buttonHandler(2)}>2</button>
            <button onClick={() => buttonHandler(3)}>3</button>
            <button onClick={() => buttonHandler("+")}>+</button>
            <button onClick={equalsHandler} className="span-two">=</button>
            <button onClick={() => buttonHandler(0)}>0</button>
            <button onClick={() => buttonHandler(".")}>.</button>
            <button onClick={ansHandler}>ANS</button>
            <button onClick={() => buttonHandler("-")} className="minus-button">-</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator