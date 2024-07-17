import React from 'react'

function EventEx1() {
    let func=(a)=>{
        console.log("button is click" , a);
    }
  return (
    <div>
        {/* <button onClick={func}></button> */}
        <button onClick={()=>{func(10)}}>click</button>
    </div>
  )
}

export default EventEx1