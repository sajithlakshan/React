import React ,{useEffect,useState}from 'react'

const PrintTable = ({calculateTable}) => {

    const [rows, setRows] = useState([]);

    useEffect(()=>{
        console.log("Print Tables Runs!");
        setRows(calculateTable(4));

    },[calculateTable])
  return rows.map((row,index)=>{
    return <p key={index}>{row}</p>

  }
    
  )
}

export default PrintTable