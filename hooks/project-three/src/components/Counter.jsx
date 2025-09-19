import React, { useState } from 'react'
import "./Counter.css"

function Counter() {

    const[ count, setcount] = useState(0);     //usestate hook
  return (
    <div classname = "counter-conatiner">
       <p id='para'>YOU HAVE CLICKED {count} TIMES</p>
       <button id='btn'onClick={()=>{ setcount (count+1)}}>Click Me</button>
    </div>
  )
}

export default Counter
