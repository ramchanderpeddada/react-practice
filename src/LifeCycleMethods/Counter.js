import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    //special function it get called when new comp is created
    //for initialing state or binding event handlers
    //dont cause sideeffects like http req

    console.log("constructor");
    super(props); //special function (directly override this state)

    this.state = {
      counter: 0,
    };
    //static method
    // static getDerivedFromProps(props,state)
    //when the state of comp depends on the props over time
    //set the state donnt have aces to this keyword
    //dont cause sideeffects like http req
    //

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  //called only once nd invoked immediately after a component nd its child compoents have rendered to dom
  //cause side effects like http req
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-");
  }
  //req mehtod for class comp and return the jsx to render ui
  //read props nd state
  //children components lifecycle methods are also executed

  render() {
    //purefunction
    console.log("Render");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter:{this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
  }
}

//component

//constructor(props)- initalize

//componentWillMount()
//render()

//componentDidMount()
//shouldComponentUpdate()

//componentWillUpdate()
//render()

//componentDidUpdate()
//componentWillUnmount()
