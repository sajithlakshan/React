import React from 'react'
import './stylesheet.css'

import style from './appStyle.module.css'


const gomika ={
  fontSize:'72px',
  color:'blue'
}

function Mystylesheet(props) {
  let classN = props.primary ? 'sajith' : ''
  return (
    <div>


      <h1 className='sajith'>
      className='sajith'
      </h1>
      <h1 className={`${classN} font-xl`}>
        Harakaa
      </h1>

      <h1 style={gomika}>KOOMI</h1>

      <h1 className={style.Success}>Success</h1> 
    </div>
  )
}

export default Mystylesheet