import React,{useEffect,useState} from 'react'

const Loop = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setCount((prev)=>prev+1)
    })

  return (
    <div>
        <h2>
            Renders: {count}
        </h2>
    </div>
  )
}

export default Loop