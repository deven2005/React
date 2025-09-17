import './App.css'
// import Button from './Components/Button'
import Card from './Components/Card'
// import { useState } from 'react'


import React from 'react'

// function App() {

//  const [count , setcount] = useState(0);
//  function handleclick() {
//      setcount(count + 1);

//  }

  return (
    <div>
      {/* <Button handleclick={handleclick} text = "click me">
       <h1>{count}</h1>
      </Button> */}

      
      <Card name = "deven">
        {/* //children */}
        <h1>welcome to my site</h1>   
        <p>how old are you</p>
      </Card>

      <Card children ="rote">
        hello, kese ho aap log
      </Card>
    </div>
  )


export default App
