import React, { useState } from 'react'

function ConditonalRenderingEx2() {
    let website=prompt("enter the web name")
    let [state , setState]=useState(website)
  return (
    <div>
        <a href='{state == "w3school" ? "https://www.w3schools.com/" :
         (state== "javatpoint"? "https://www.javatpoint.com/" :
          (state=="stack)"?"htps://stackoverflow.com/" : "NOT FOUND" )}'>Click ME</a>
    </div>
  )
}

export default ConditonalRenderingEx2