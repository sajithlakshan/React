import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Produst() {
  return (
    <>
    <div>Produst</div>
    <input type='search' placeholder="='Serch product"></input>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Produst