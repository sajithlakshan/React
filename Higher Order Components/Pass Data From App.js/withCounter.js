
// import React, { Component } from 'react'
import React from 'react'

const Ucomponent = OriginalComponent =>{
    class withCounter extends React.Component {
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        incrementCount =()=>{
            this.setState(previousState => {
                return { count:previousState.count+1}
            })
        }
        

        render() {
            console.log(this.props.name)
            return (
           <OriginalComponent count={this.state.count} incrementCount= {this.incrementCount} {... this.props}/>
            )
        }
    }
    return withCounter
}
export default Ucomponent