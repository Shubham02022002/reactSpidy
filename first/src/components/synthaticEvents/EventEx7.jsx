import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function EventEx7() {
    let [username, setUsername]=useState()
    let [password , setPassword]=useState()
    let handleUsername=(e)=>{
        setUsername(e.target.value);
    }
    let handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    let handlSubmit=(e)=>{
        e.preventDefault()
        // setPassword("")
        // setUsername("")
    }
   
  return (
    <div>
        <form action='#' onSubmit={handlSubmit}>
        <input onChange={handleUsername} className='border-[1px] border-blue-600 px-2' placeholder='Enter your name here'/>
        <input onChange={handlePassword} className='border-[1px] border-blue-600 px-2' placeholder='Enter your name here'/>
        <button onClick={handlSubmit} > Submit</button>
        </form>
        <p>username:= {username}</p>
        <p>password := {password}</p>
    
        
    </div>
  )
}

export default EventEx7