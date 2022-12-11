import React from 'react'
import useCounter from './useCounter'

const Counter1 = () => {
  const [count, increment, decrement, reset] = useCounter(10, 5)
  return (
    <div>
      <p> Counter2: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1