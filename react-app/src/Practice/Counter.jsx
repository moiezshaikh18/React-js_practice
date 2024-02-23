import React, { useDebugValue, useId, useReducer } from "react";

const Counter = () => {
  const id = useId();

  const countReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + 3;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(countReducer, 0);

  console.log("ID", id);

  useDebugValue(count); // to check value in the debugger

  // const usecall = useCallback(function fib(n) {
  //   if (n === 1 || n === 2) {
  //     return 1;
  //   }
  //   return fib(n - 1) + fib(n - 2);
  // }, []);

  // const fibMemoisez = useMemo(() => fib(50), []);

  // In useCallBack we use to memoized function
  // In useMemo we use to memoized function value

  return (
    <>
      {/* {fibMemoisez} */}
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: count })}>
        ADD
      </button>
    </>
  );
};

export default Counter;
