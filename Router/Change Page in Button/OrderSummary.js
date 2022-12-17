import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () => {
  const natiner = useNavigate()
  return (
    <>
    <div>OrderSummary</div>
    <button onClick={()=>natiner(-1)}>Go Back</button>
   
    </>
  )
}


