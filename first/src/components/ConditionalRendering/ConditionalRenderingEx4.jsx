import React from 'react'

function ConditionalRenderingEx4() {
    let name=["rohit", "jay", "parasaad sir","dolly"]
    return (
        <div>
            {
               name.length>3 && name.map((val)=>{
                    return (
                        <div> 
                            <p>{val}</p>
                        </div>
                    )
                })
            }
        </div>
    )

 
}

export default ConditionalRenderingEx4