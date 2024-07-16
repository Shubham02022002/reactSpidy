import React from 'react'
import { useState } from 'react'

function EventEx4() {
    let [state , setState]=useState("")
    let handleChange=(e)=>{
        setState(e.target.value);
    }
  return (
    <div>
        <input onChange={handleChange} className='border-[1px] border-blue-600 px-2' placeholder='Enter your name here'
        />
        <button onClick={handleClick} className='border-[1px] border-red-400 px-1' > Submit 
        <p>{state}</p>
        </button>
        
    </div>
  )
}

export default EventEx4