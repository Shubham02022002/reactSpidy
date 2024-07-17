import React, { useState } from 'react'

function EventEx8() {
    let [state, setState]=useState({
      username:"", password:"",
    })
    let {username , password , list}=state;
    let handleChange=(e)=>{
       let {name , value}=e.target
       setState({...state , [name]: value})
       console.log(state);
    }
   
  return (
    <div>
        <form>
            <input type='text' className='boreder-[1px] border-blue-400 px-2 ' placeholder='username' onChange={handleChange}></input>
            <input type='password' className='boreder-[1px] border-blue-400 px-2 ' placeholder='Password' onChange={handleChange}></input>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default EventEx8