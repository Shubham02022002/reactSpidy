import React from 'react'

function EventEx2() {
    let handleClick=(e)=>{
        console.log(e);
        console.log(e.target);
        e.target.style.border="1px solid"
        e.target.style.background="red"
        e.target.style.height="400px"
        e.target.style.width="400px"
        e.target.style.borderRadius="50%"
    }
  return (
    <div>
        <button onMouseOver={handleClick}>click</button>
    </div>
  )
}

export default EventEx2