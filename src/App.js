import React, { useEffect, useState } from 'react'
import Shuffle from './Shuffle_Sort'
function App() {
  const [user, setUser] = useState({ fName: '', lName: '', fullName: '' })

  const onChangeHandler = (e) => {
    console.log('event', e.target.value)
  }

  useEffect(() => {
    setUser()
  }, [user])

  return (
    <div className="App">
      <Shuffle />

      {/* <input type="text" id="fName" onChange={onChangeHandler} />
      <br />
      <br />
      <input type="text" id="lName" onChange={onChangeHandler} /> */}
    </div>
  );
}

export default App;
