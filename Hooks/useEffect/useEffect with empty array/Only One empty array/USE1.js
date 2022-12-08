import React, { useEffect, useState } from 'react'

const USE1 = () => {

    const [count,setCout]= useState(0);
    useEffect(()=>{
      document.title = `${count} new messages!`;
    },[]);




 
  return (
    <div>
      <h3>{count} new Message! </h3>
      <button onClick={()=>setCout(count+1)}>Increse</button>
        
    </div>
  )
}
export default USE1;