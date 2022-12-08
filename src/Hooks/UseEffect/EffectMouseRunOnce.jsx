import React, { useState, useEffect } from 'react'

function EffectMouseRunOnce() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const setMousePosition = (e) => {
    console.log("setMousePosition.....")
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log("Use effect called")
    window.addEventListener('mousemove', setMousePosition)


    // Clean up fnction
    return () => {
      console.log('CLEAN UP called')
      window.removeEventListener('mousemove', setMousePosition)
    }
  }, [])

  return (
    <div>
      Mouse Position - x: {x}, y: {y}
    </div>
  )
}

export default EffectMouseRunOnce