import React, { useCallback, useMemo, memo, useState } from 'react'
import Demo from './Demo'

const Button = memo((props) => {
  console.log('Button')
  return <button onClick={props.handleClick}>Title Change</button>
})


const Index = () => {
  const [title, setTitle] = useState('Initial Titile')
  console.log('APP')

  const listItems = useMemo(() => [4, 3, 6, 5, 1], [])
  const handleClick = () => { setTitle('New Title') }

  return (
    <div>
      <Demo title={title} items={listItems} />
      <Button handleClick={handleClick} />
    </div>
  )
}


export default Index