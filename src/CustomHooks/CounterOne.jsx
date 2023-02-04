import React from "react";
import useCounter from "../hooks/useCounter";
import CounterTwo from "./CounterTwo";
import UserForm from "./UserForm";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter();
  
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Count - {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <CounterTwo />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <UserForm />
      </div>
    </>
  );
}

export default CounterOne;
