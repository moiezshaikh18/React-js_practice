import React, { useId, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const num = useRef(0);
  console.log(num);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          num.current++;
        }}
      >
        ADD COUNT
      </button>
    </div>
  );
};

export default Counter;
