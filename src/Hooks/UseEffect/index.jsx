import React from 'react'

import TimerClass from './Class_Timer_Comp'
import TimerFunctional from './function_timer_Comp'
import ConditionallyRunEffects from './ConditionallyRunEffects'
import EffectMouseRunOnce from './EffectMouseRunOnce'
import CleanUpMouse from './CleanUpMouse'

function index() {
  return (
    <div>
      {/* <TimerClass />
      <hr />
      <TimerFunctional />
      <hr />
      <ConditionallyRunEffects />
      <hr />
      <EffectMouseRunOnce /> */}
      <CleanUpMouse />
    </div>
  )
}

export default index