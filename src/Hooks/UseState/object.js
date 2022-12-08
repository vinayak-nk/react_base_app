import React, { useState } from 'react'

const Input = ({ name, onChange }) => (
  <input type="text" value={name} onChange={(e) => onChange(e)}/>
)

function Object() {
  const [name, setName] = useState({ fName: '', lName: '' })
  return (
    <div>
      <Input value={name.fName} onChange={(e) => setName({ ...name, fName: e.target.value })} />
      <Input value={name.lName} onChange={(e) => setName({ ...name, lName: e.target.value })} />
      <h4>First Name: {name.fName}</h4>
      <h4>Last Name: {name.lName}</h4>
      <h4>{JSON.stringify(name)}</h4>
    </div>
  )
}

export default Object