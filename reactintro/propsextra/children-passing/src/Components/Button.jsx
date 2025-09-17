import React from 'react'

function Button(props) {
  return (
    <div>
      
        {props.children}
   <Button onClick={props.handleclick}>
    {props.text}
   </Button>
      
    </div>
  )
}

export default Button
