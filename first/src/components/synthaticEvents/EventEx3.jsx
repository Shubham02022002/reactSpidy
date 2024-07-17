import React from 'react'

function EventEx3() {
    let handleEvent=()=>{
        console.log("key is pressed");
    }
  return (
    <div>
        <input type='text' onKeyDown={handleEvent}></input>
    </div>
  )
}

export default EventEx3