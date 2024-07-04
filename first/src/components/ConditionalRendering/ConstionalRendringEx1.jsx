import React, { useState } from 'react'

function ConstionalRendringEx1() {
    // let value=false
    let [value , setValue]=useState(true)
    let handleClick=()=>{
        setValue (!value)
    }
    let toggle=()=>{
        setValue(!value)
    }

  return (
    <div>
        <h1 onClick={handleClick}>{value ===true?"Positive" : "Negative"}</h1>
        <button onClick={toggle}>click me to toggle value</button>
        
    </div>
  )
}

export default ConstionalRendringEx1