import { Component } from "react";

export default class ClassBasedEx2 extends Component {
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
        <h1>this is from Class Based Ex2.jsx</h1>
        <p>state is :{this.state.count}</p>
      </div>
    );
  }
}
