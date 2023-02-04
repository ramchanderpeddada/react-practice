import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  function NewComponent() {
    const [counter, setCounter] = useState(10);
    return (
      <OriginalComponent
        name="OriginalComponent"
        counter={counter}
        incrementCounter={() => setCounter((counter) => counter + 1)}
      />
      //the function which takes a component and returns a new component
    );
  }
  return NewComponent;
};
export default withCounter;
