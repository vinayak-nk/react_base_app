import React from 'react'

const Title = () => {
  console.log("Title ...")
  return <h2>useCallback hook example...</h2>
}

export default React.memo(Title)
