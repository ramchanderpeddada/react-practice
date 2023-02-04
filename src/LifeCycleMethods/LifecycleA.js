import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "State",
    };
    console.log("constructor A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps A");
    return null;
  } //after clicked button 1st and 4th

  componentDidMount() {
    console.log("componentDidMount A");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate A");
    return true;
  } //2nd 5th

  getSnapshotBeforeUpdate() {
    //9th(B) 10th (A)
    console.log("getSnapshotBeforeUpdate A"); //8th(A) 7th(B)

    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate A");
  }

  changeState = () => {
    this.setState({
      name: "setState",
    });
  };
  render() {
    console.log("render A"); //3rd 6th
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}
//1.constructor
//2.getDerivedStateFromProps
//3.render
//4.componentDidMount

export default LifecycleA;
