import React, { useState } from 'react'

function EventEx9() {
    let [state , setState]= useState({
        username : "", 
        password: "", 
        list:[]})
    let {username , password , list}=state
    let handleChange=(e)=>{
        console.log(e.target);
        let {name , value}=e.target
        // setState({...state , [name]:value})
        setState({...state , [name]:value})

    }

  return (
    <div>
        <form action=''>
            <input type='text' name='username' value={username} onChange={handleChange} placeholder='enter username'></input>
            <input type='text' name='password' value={password} onChange={handleChange} placeholder='enter password'></input>
            <button>Submit</button>
        </form>
        <div>
            <p>{username}</p>
            <p>{password}</p>
        </div>
    </div>
  )
}

export default EventEx9