import React from 'react'

function MyParagraph({ show }) {
  console.log('MyParagraph RUNNING')
  return (
    <h3>{show ? 'My Paragraph 1': 'My Paragraph 2'}</h3>
  )
}

export default React.memo(MyParagraph)