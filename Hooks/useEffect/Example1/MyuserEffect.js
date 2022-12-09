import React ,{useEffect,useState} from 'react'

const MyuserEffect = () => {
    const [toggle,setToggle]= useState(false)

    useEffect(()=>{
        console.log("useEffect")
    },[toggle])

  return (
    <div>
        <button onClick={()=> setToggle(!toggle)}>Toggle</button>
        {toggle && <h4>Code Bless You</h4>}
    </div>
  )
}

export default MyuserEffect