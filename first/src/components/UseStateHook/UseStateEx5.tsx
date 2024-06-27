import React, { useState } from 'react'

const UseStateEx5 = (): JSX.Element => {
    const [state, setState] = useState(true)
    return (
        <div>
            {/* <h1 onClick={() => {
                // { state == true ? setState(false) : setState(true) }
                setState(!state);
            }}>{state == true ? "On" : "Of"}</h1> */}
            <button onClick={() => {
                setState(!state);
            }}>{state ? "Login" : "Logout"}</button>
        </div>
    )
}

export default UseStateEx5;