import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => navigate('order-summary')} >Place Ordeer</button>
    </div>
  )
}

export default Home