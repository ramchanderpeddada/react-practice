import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import PareCom from "./PareCom";

function ParentCom() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
      <PareCom />
    </div>
  );
}

export default ParentCom;
