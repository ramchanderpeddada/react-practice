import React, { useReducer } from "react";

// const initialState = 0;
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function ReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* <div>count-{count}</div> */}
      <h2>Use Reduer hook</h2>
      <div>count-{count.firstCounter}</div>
      {/* <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button> */}

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReducerHook;
