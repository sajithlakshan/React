import React, { useEffect, useState } from 'react'

const USE1 = () => {


    const [time,setTime]= useState(0);
    useEffect(()=>{
      setInterval(()=>{
        setTime(time+1);
      },500);
      return()=>{
        clearInterval(time)
      }
    });

  return (
    <div>
     
      <h3>other Count : {time}</h3>
      {/* <button onClick={()=>setCount(count+1)} >Increse by 1</button> */}
        
    </div>
  )
}
export default USE1;