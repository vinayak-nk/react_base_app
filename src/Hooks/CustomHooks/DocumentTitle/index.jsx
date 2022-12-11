import React, { useState, useEffect } from 'react'
import useDocmentTitle from './useDocmentTitle'

const Index = () => {
  const [count, setCount] = useState(0)

  // useEffect(() => { document.title = `Count: ${count}` }, [count])

  useDocmentTitle(count)

  return <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
}

export default Index