import React, { useState, useEffect } from 'react'

function ConditionallyRunEffects() {
  const [count, setCount] = useState(0)
  const [name, updateName] = useState('')

  const IncreaseCount = () => {
    console.log('Updating Count Value')
  }

  useEffect(() => {
    // const interval = setInterval(() => IncreaseCount(), 2 * 1000)

    // return () => clearInterval(interval)
    IncreaseCount()
  }, [count])

  return (
    <div>
      <input type="text" value={name} onChange={(e) => { updateName(e.target.value) }} />
      <button onClick={() => setCount(count + 1)} >{`Count : ${count}`}</button>
    </div>
  )
}

export default ConditionallyRunEffects