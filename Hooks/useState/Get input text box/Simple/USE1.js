import React, { useState } from 'react'

const USE1 = () => {

    const [details,setDetails]= useState({counter:0,name:""});


    function IncerC (){
         //setDetails({counter:details.counter+1}) only incresed count value
        setDetails((prev)=>({
            ...prev,counter:prev.counter+1
        }));
    }
    console.log(details)
    function HH(e){
      setDetails((prev)=>({
        ...prev,name:e.target.value
    }));

    }

 
  return (
    <div>
        <input type="text" onChange={(e) =>HH(e)}/>
        <h1>{details.name} has clicked {details.counter} times !!</h1>
        <button onClick={IncerC}>Increse</button>
        
    </div>
  )
}
export default USE1;