import React from "react";
import { useState } from "react";

const UseStateEx3 = (): JSX.Element => {
    const [count, setCount] = useState(10);
    const [prevState] = useState(count);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Inc</button>
            <br />
            <button onClick={() => {
                setCount(count - 1)
            }}>Dec</button>
            <br />
            <button onClick={() => {
                setCount(prevState);
            }}>Reset</button>
        </div >
    )
}

export default UseStateEx3;