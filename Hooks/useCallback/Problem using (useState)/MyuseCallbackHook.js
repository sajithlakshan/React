import React, { useState ,useMemo} from 'react'
import PrintTable from './PrintTable';

const MyuseCallbackHook = () => {
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);

    const cssStyle = {
        backgroundColor:dark? "black":"white",
        color: dark? "white":"black",
    }
    const calculateTable =()=>{
        return [number*1,number*2,number*3,number*4,number*5];
    };



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