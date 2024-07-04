import React, { useState } from 'react'

function ConditionalRenderingEx5() {
  let [delay, setDelay]=useState(false)
  let arr=["Rohit", "Ankit", "sumit", "Tinki" , "Tinku"];
  setTimeout(()=>{
     setDelay(true)
  },5000)
  return (
    <div>
       {delay || "loading...."}
       <div>
          {delay && arr.map((val, i)=>{
            return <div>
              {val}
            </div>
          })}
       </div>

    </div>
  )
}

export default ConditionalRenderingEx5