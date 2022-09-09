import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = ({ show }) => {
  console.log('DemoOutput RUNNING')
  return (
    <MyParagraph show={show} />
  )
}

export default React.memo(DemoOutput)