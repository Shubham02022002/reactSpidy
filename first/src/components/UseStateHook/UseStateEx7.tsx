import React, { useState } from 'react'

const UseStateEx7 = (): JSX.Element => {
    let [state, setState] = useState<string>("HiiI")
    return (
        <div>
            <h1 onClick={() => {
                state === "HiiI" ? setState("byyy") : setState("HiiI")
            }}>state is {state}</h1>
        </div>
    )
}

export default UseStateEx7;