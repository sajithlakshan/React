import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyHome() {
    const navee = useNavigate()
  return (
    <>
    <div>MyHome</div>
    <button onClick={()=> navee('order-summary')}>Place Order</button>
    <br/>
    <button onClick={()=> navee('order-summary',{replace:true})}>Place Order "With replase History" </button>    
    
    
    </>
  )
}

export default MyHome