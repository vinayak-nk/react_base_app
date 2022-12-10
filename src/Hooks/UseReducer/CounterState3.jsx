import React, { useState, useReducer } from 'react'

const initialState = 0

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'increment': return state + action.value
    case 'decrement': return state - action.value
    case 'reset': return 0 
    default: return state
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <span style={{ padding: '.5rem' }}>{`Counter1: ${count}`}</span>
        <button onClick={() => dispatch({ type: 'increment', value: 1 })} >Increment by 1</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })} >Decrement by 1</button>
        <button onClick={() => dispatch({ type: 'reset' })} > Reset</button>
      </div>
      <div>
        <span style={{ padding: '.5rem' }}>{`Counter2: ${count2}`}</span>
        <button onClick={() => dispatch2({ type: 'increment', value: 2 })} >Increment by 2</button>
        <button onClick={() => dispatch2({ type: 'decrement', value: 2 })} >Decrement by 2</button>
        <button onClick={() => dispatch2({ type: 'reset' })} > Reset</button>
      </div>
    </div>
  )
}

export default Counter