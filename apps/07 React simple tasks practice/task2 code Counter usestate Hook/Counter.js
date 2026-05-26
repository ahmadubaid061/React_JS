import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>

        <div className="counter-buttons">
          <button className="counter-btn btn-increment" onClick={increment}>
            Increment
          </button>

          <button
            className="counter-btn btn-decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            Decrement
          </button>

          <button className="counter-btn btn-reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
