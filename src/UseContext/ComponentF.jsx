import React, { useContext } from "react";
import { UserContext } from "../index";
function ComponentF() {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <h2>useContext hook</h2>
      {user} from index component
    </div>
  );
}

export default ComponentF;
