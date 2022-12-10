import React, { useEffect, useState } from 'react'

const MyCustomHooks = () => {
    const[responses,setResponses]= useState([]);

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=> setResponses(data));
},[]);
  return (
    <div>
        {
            responses.map((res)=>{
                return(
                    <h4 key={res.id}>
                        {res.id}.{res.name}

                    </h4>
                )
            })
        }
    </div>
  )
}

export default MyCustomHooks