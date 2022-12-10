import React from 'react'

const style = {
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: 'lightblue',
  marginLeft: '10px'
}

const Button = ({name, handleClick}) => {
  console.log("Button ...", name)
  return <button style={style}  onClick={() => handleClick() } >{name}</button>
}

export default React.memo(Button)