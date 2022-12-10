import React, { useState ,useMemo, useCallback} from 'react'
import PrintTable from './PrintTable';

const MyuseCallbackHook = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);

    const cssStyle = {
        backgroundColor:dark? "black":"white",
        color: dark? "white":"black",
    }
    const calculateTable = useCallback((value)=>{
        let NewNum = number +value;
       
        return [NewNum*1,NewNum*2,NewNum*3,NewNum*4,NewNum*5];
    },[number])

 


  return (
    <div style={cssStyle}>
        <input
            onChange={(e)=> setNumber(e.target.valueAsNumber)}
            type='number'
            value={number}
        />
        <PrintTable  calculateTable={calculateTable}/>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )

}

export default MyuseCallbackHook