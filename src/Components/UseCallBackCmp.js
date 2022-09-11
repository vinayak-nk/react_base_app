import React, { useState, useCallback } from 'react';
import DemoOutput from './UseCallbackExample/DemoOutput';

const UseCallbackComp = (props) => {
  const [show, toggleShow] = useState(false)
  const [allowToggling, seToggling] = useState(false)

  console.log("RENDER: UseCallback Component ")

  const handleBtnClick = useCallback(() => {
    if (allowToggling) toggleShow((prevShow) => !prevShow)
  }, [allowToggling])

  const handleToggling = useCallback(() => {seToggling((prevAllowToggle) => !prevAllowToggle)}, [])


  const allow = {
    backgroundColor: 'blue',
    color: 'white'
  }

  return (
    <div>
      <DemoOutput show={show} />
      <div>{`Count:  ${props.count}`}</div>
      <button style={allowToggling ? allow : {}} onClick={handleBtnClick}>Change Title</button>
      <button style={{...allow, marginLeft: '10px'}} onClick={handleToggling}>Allow Toggling</button>
    </div>
  )
}

export default UseCallbackComp
