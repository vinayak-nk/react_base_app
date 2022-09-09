import React, { useState} from 'react';

import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button'
import './App.css';

function App() {
  const [show, toggleShow] = useState(false)

  console.log('APP RUNNING')
  
  const handleBtnClick = () => {toggleShow((prevShow) => !prevShow)}

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={show} />
      <Button onClick={handleBtnClick} >Toggle Paragraph</Button>
    </div>
  );
}

export default App;
