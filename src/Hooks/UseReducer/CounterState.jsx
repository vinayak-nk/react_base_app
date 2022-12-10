import React, { useState, useReducer } from 'react'

const initialState = 10

const reducer = (state=initialState, action) => {
  switch(action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return 0
    default: return state
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <span style={{ padding: '.5rem' }}>{`Counter: ${count}`}</span>
      <button onClick={() => dispatch('increment')} >Increment</button>
      <button onClick={() => dispatch('decrement')} >Decrement</button>
      <button onClick={() => dispatch('reset')} >Reset</button>
      {/* <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)} >Decrement</button>
      <button onClick={() => setCount(0)} >Reset</button> */}
    </div>
  )
}

export default Counter