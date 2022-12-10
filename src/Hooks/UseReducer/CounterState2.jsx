import React, { useState, useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'increment1': return { ...state, firstCounter: state.firstCounter + 1 }
    case 'decrement1': return { ...state, firstCounter: state.firstCounter - 1 }
    case 'reset1': return { ...state, firstCounter: 0 }
    case 'increment2': return { ...state, secondCounter: state.secondCounter + 2 }
    case 'decrement2': return { ...state, secondCounter: state.secondCounter - 2 }
    case 'reset2': return { ...state, secondCounter: 0 }
    default: return state
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <span style={{ padding: '.5rem' }}>{`Counter1: ${count.firstCounter}`}</span>
        <button onClick={() => dispatch({ type: 'increment1' })} >Increment by 1</button>
        <button onClick={() => dispatch({ type: 'decrement1' })} >Decrement by 1</button>
        <button onClick={() => dispatch({ type: 'reset1' })} > Reset</button>
      </div>
      <div>
        <span style={{ padding: '.5rem' }}>{`Counter2: ${count.secondCounter}`}</span>
        <button onClick={() => dispatch({ type: 'increment2' })} >Increment by 2</button>
        <button onClick={() => dispatch({ type: 'decrement2' })} >Decrement by 2</button>
        <button onClick={() => dispatch({ type: 'reset2' })} > Reset</button>
      </div>
    </div>
  )
}

export default Counter