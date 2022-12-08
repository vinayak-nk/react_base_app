import React, { useState, useEffect } from 'react'

function FunctionTimerComp() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {setCount(prevCount => prevCount + 1) }, 4 * 1000)
    return () => clearInterval(interval)
  }, [count])

  return (
    <div>
      {`Count Function: ${count}`}
    </div>
  )
}

export default FunctionTimerComp