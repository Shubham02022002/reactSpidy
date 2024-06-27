import React, { useState } from 'react'

const UseStateEx6 = (): JSX.Element => {
    const [state, setState] = useState<string | null>(null);
    return (
        <div>
            <h1>{state === null ? "Loading>...." : state}</h1>
            <button onClick={() => {
                setState('change it')
            }}>change</button>
        </div>
    )
}

export default UseStateEx6;