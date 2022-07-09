import React, { useState } from "react";

const Counter = ({ initalCount }) => {
  const [count, setCount] = useState(initalCount);

  return (
    <div>
      <h1>Count:</h1>
      <h1 data-testid="count">{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count * -1);
        }}
      >
        Switch Sign
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Counter;
