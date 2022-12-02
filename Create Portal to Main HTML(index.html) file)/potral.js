import React from 'react'
import  ReactDom from 'react-dom';
function Mypotral() {
  return ReactDom.createPortal (
    
        <h1>Protal Demo</h1>
    ,
    document.getElementById("portal-root")
  )
}

export default Mypotral