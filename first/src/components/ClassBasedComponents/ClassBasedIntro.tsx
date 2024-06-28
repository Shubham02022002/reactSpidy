import React, { Component } from "react";
import ClassBasedEx1 from "./ClassBasedEx1";
import ClassBasedEx2 from "./ClassBasedEx2";
import ClassBasedEx3 from "./ClassBasedEx3";

export default class ClassBasedComponent extends Component {
    render(): React.ReactNode {
        return (
            <div>
                {/* <ClassBasedEx1 /> */}
                {/* <ClassBasedEx2 /> */}
                <ClassBasedEx3 />
            </div>
        )
    }
}