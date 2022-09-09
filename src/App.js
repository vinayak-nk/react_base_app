import React, { useState, useCallback } from 'react';

import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button'
import './App.css';

function App() {
  const [show, toggleShow] = useState(false)
  const [allowToggle, seToggling] = useState(false)

  console.log('APP RUNNING')
  
  // useCallback(() => {}, [])
  const handleBtnClick = useCallback(() => {
    if (allowToggle) toggleShow((prevShow) => !prevShow)
  }, [allowToggle])

  const handleToggling = useCallback(() => { seToggling((prevAllowToggle) => !prevAllowToggle)}, [])

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={show} />
      <Button id="1" onClick={handleBtnClick} >Toggle Paragraph</Button>
      <div>&nbsp;</div>
      <Button id="2" onClick={handleToggling} >Allow Toggle </Button>
    </div>
  );
}

export default App;
