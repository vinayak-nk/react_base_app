import React from 'react'
import { useNavigate } from 'react-router'

const OrderSummary = () => {
  const naviagate = useNavigate()
  return (
    <div>
      <p>Order Confirmed</p>
      <button onClick={() => naviagate(-1)} >Go Back</button>
    </div>
  )
}

export default OrderSummary