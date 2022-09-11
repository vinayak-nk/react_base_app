import { useState, useCallback, memo } from 'react'


const HOC = (OriginalComp, data) => {
  console.log('HOC')
  return function Index() {
    const [count, setCount] = useState(data)

    const handleButtonClick = useCallback(() => {
      console.log('handleButtonClick')
      setCount((prevCount) => prevCount + 1)
    }, [])

    return (
      <div style={{ display: 'flex' }}>
        HOC Example: <OriginalComp count={count} setCount={handleButtonClick} />
      </div>
    )
  }
}

export default HOC