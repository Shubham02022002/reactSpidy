import React, { useState } from "react";

const UseStateEx4 = (): JSX.Element => {
    const [state, setState] = useState<string>("red");
    return (
        <div>
            <h1 style={{ background: state }}>hi there</h1>
            <div className="flex justify-evenly">
                <button className="border-[1px] border-white p-1"
                    onClick={() => {
                        setState('blue')
                    }}>Tap me</button>
                <button className="border-[1px] border-white p-1"
                    onClick={() => {
                        setState('green')
                    }}>Tap me</button>
                <button className="border-[1px] border-white p-1"
                    onClick={() => {
                        setState('white')
                    }}>Tap me</button>
                <button className="border-[1px] border-white p-1"
                    onClick={() => {
                        setState('pink')
                    }}>Tap me</button>
                <button className="border-[1px] border-white p-1"
                    onClick={() => {
                        setState('aqua')
                    }}>Tap me</button>
            </div>
        </div>
    )

}

export default UseStateEx4;