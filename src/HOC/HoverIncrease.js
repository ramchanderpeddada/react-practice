import React, { useState } from "react";

import withCounter from "./withCounter";

function HoverIncrease(props) {
  const [fontSize, setFontSize] = useState(10);

  return (
    <div>
      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on hover
      </button>
      <p style={{ fontSize }}>
        Size of font in onMouseOver function: {fontSize}
      </p>
      <p>value of 'name' in HoverIncrease: {props.name}</p>
    </div>
  );
}

export default withCounter(HoverIncrease);
