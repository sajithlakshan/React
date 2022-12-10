import React, { useState ,useMemo} from 'react'


const Myusememo = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);

    const memoCalculation = useMemo(()=>{
        return expansiveFuncetion(number)
    },[number])




    const cssStyle = {
        backgroundColor:dark? "black":"white",
        color: dark? "white":"black",
    }

  return (
    <div style={cssStyle}>
        <input
            onChange={(e)=> setNumber(e.target.valueAsNumber)}
            type='number'
            value={number}
        />
        <h2>Calculation:{memoCalculation}</h2>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expansiveFuncetion(num){
    console.log("loop Started")
    for(let i=0 ; i<1000000000; i++){}
    return num;
}


export default Myusememo