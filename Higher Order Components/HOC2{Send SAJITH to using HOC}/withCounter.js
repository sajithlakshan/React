
// import React, { Component } from 'react'
import React from 'react'

const Ucomponent = OriginalComponent =>{
    class withCounter extends React.Component {
    

        render() {
            return (
           <OriginalComponent name ='SAJITH '/>
            )
        }
    }
    return withCounter
}
export default Ucomponent