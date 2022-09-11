import React from 'react'

const Memo = (props) => {
  console.log("RENDER: Without Memo IncerementCount")
  return (
    <div>
      <h3>Memo</h3>
      <div>{`Count:  ${props.count}`}</div>
      <button onClick={props.incerementCount}>Increment</button>
    </div>
  )
}

export default Memo
