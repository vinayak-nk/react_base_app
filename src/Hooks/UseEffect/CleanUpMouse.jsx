import React, { useState } from 'react'
import EffectMouseRunOnce from './EffectMouseRunOnce'


function CleanUpMouse() {
  const [toggleComp, setToggle] = useState(true)
  return (
    <div>
      <button onClick={() => setToggle(prev => !prev)} >Toggle Display</button>
      {toggleComp && <EffectMouseRunOnce />}
    </div>
  )
}

export default CleanUpMouse