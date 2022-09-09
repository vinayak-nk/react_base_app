import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/DemoUseMemo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  // const test = useMemo(() => {}, [])
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  // const listItems = [5, 3, 1, 10, 9]

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button id="3" onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;