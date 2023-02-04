import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}

export default UpdatedComponent(ClickCounter);

// const numbers = [1, 2, 3, 9, 33];

// function ClickCounter(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + 1);
//   }
// }
// ClickCounter(numbers);
// export default ClickCounter;
//higher order component
