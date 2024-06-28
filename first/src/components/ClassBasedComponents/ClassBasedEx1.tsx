import React, { Component } from "react";

export default class ClassBasedEx1 extends Component {

    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            count: 10,
        }
    }
    render(): React.ReactNode {
        return (
            <div>
                <h1>hi tere</h1>
                <p>{this.state.count}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                    // console.log(this.state.count);
                }}>Inc</button>
            </div>
        )
    }
}