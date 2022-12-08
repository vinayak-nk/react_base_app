import React, { useState } from 'react'

const Index = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ margin: '.5rem' }} >Count: {count}</span>
      <button onClick={() => setCount((prevCount) => prevCount+1)} >Increment</button>
      <button onClick={() => setCount(prevCount => prevCount-1)} >Decrement</button>
      <button onClick={() => setCount(0)} >Reset</button>
    </div>
  )
}



export default Index