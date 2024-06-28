import { Component } from "react";

export default class ClassBasedEx3 extends Component {
  state;
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }
  render() {
    return (
      <div>
        <h1>from ClassBasedComponent ex3.jsx</h1>
        <p>state is:{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          inc
        </button>
      </div>
    );
  }
}
