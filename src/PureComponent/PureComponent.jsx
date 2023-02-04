import React, { Component, PureComponent } from "react";

export default class PureComponents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Pure component render method called");
    return (
      <div>
        <h1>Pure Component</h1>
        <br />
        {this.state.count}
        <button onClick={this.onIncrement}>Increment</button>
      </div>
    );
  }
}
