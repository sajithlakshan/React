import React, { useEffect, useState } from 'react'

const USE1 = () => {


    const [count,setCount]= useState(0);
    useEffect(()=>{
      console.log('Run use',count)
      return()=>{
        console.log('Clean up',count)
      }
    },[count]);

  return (
    <div>
     
      <h3>other Count : {count}</h3>
      <button onClick={()=>setCount(count+1)} >Increse by 1</button>
        
    </div>
  )
}
export default USE1;