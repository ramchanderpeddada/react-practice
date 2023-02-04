import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ram",
    };
    console.log("constructor B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps  B");
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount B");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate B");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate B");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate B");
  }

  render() {
    console.log("render B ");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
