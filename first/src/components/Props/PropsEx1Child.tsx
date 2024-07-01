import React, { useEffect, useState } from 'react'

const PropsEx1Child = (props: any): JSX.Element => {
    let [state, setState] = useState(props.data.a);
    console.log(props);
    return (
        <div>
            <h1>hi there :{state}</h1>
            <button onClick={() => {
                setState(state++);
                console.log(state);
            }}>Inc </button>
            <br />
            <button onClick={() => {
                setState(--state);
                console.log(state);
            }}>Dec</button>
        </div>
    )
}

export default PropsEx1Child;
