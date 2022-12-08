import React, { useState } from 'react'

function Array() {
  const [items, setItems] = useState([])

  const AddItem = () => {
    setItems([...items, { id: Date.now(), value: (Math.random() * 10).toFixed(4) }])
  }

  return (
    <div>
      <button onClick={AddItem} >Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default Array