import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function PareCom() {
  //custom hook to create a count 
  const [count, setCount] = useState(0);

  useDocumentTitle(count)
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
  );
}
