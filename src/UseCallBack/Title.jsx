import React from "react";

function Title() {
  console.log("rendering Title");
  return <h2>useCallback hook</h2>;
}

export default React.memo(Title);
