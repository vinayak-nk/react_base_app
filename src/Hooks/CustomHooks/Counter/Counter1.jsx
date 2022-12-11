import React from 'react'
import useCounter from './useCounter'

const Counter1 = () => {
  const [count, increment, decrement, reset] = useCounter(1, 1)
  return (
    <div>
      <p> Counter1: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1