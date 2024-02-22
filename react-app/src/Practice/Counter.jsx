import React, { useReducer } from "react";

const Counter = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + 3;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: count })}>
        ADD
      </button>
    </>
  );
};

export default Counter;
