import React from 'react'

export default function Color({ colorName }) {
  if (colorName === 'red') throw new Error('Color is RED')
  return (
    <h2>
      {colorName}
    </h2>
  )
}
