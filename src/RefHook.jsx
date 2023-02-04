import { useRef, useState, useEffect } from "react";

export default function RefHook() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prevElapsed) => prevElapsed + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function handleStartClick() {
    setIsRunning(true);
  }

  function handleStopClick() {
    setIsRunning(false);
  }

  function handleResetClick() {
    setIsRunning(false);
    setElapsed(0);
  }

  return (
    <div className="App">
      <h2>UseRef hook</h2>
      <p>Elapsed: {elapsed} seconds</p>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

//a ref is created with useRef only when component is mounted and preserved for full lifecycle
//ref can be used for accesing dom nodes or elements, for storing mutable varbles like instance var in class comp
//updating ref can be a side effect so it shoulld be done by using useEffect or useLayoutEffect inside an event handler
