import React, { useState } from 'react'

const USE1 = () => {
    const[counter ,setCounter]= useState(0)
    const [name,setName] =useState("")


    function IncerC (){
        setCounter(counter +1);
    }
 
  return (
    <div>
        <input type="text" onChange={e => setName (e.target.value)}></input>
        <h1>{name} has clicked {counter} times !!</h1>
        <button onClick={IncerC}>Increse</button>
        
    </div>
  )
}
export default USE1;