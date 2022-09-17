import React, { useState } from 'react'

const CounterFn = (props) => {
  const [counter, setCounter] = useState(0)

  const IncrementCounter = () => {
    setCounter((prevCount) => prevCount + 1)
  }
  return <p>{props.children(counter, IncrementCounter)}</p>
}

export default CounterFn