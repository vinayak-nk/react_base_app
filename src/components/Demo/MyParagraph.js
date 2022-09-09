import React from 'react'

function MyParagraph({ show }) {
  console.log('MyParagraph RUNNING')
  return (
    <div>{show ? 'My Paragraph': ''}</div>
  )
}

export default React.memo(MyParagraph)