import React from 'react'

const Count = ({ text, value }) => {
  console.log("Counter...", text)
  return (
    <div>
      {text} : {value}
    </div>
  )
}

export default React.memo(Count)