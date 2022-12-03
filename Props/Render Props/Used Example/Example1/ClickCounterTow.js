import React, { Component } from 'react'

class ClickCounterTow extends Component {
    constructor(props){
        super(props)
        this.state ={
            count:0
        }
    }
    incrementC =()=>{
        this.setState(prevState => {
            return { count:prevState.count+1}
        })
    }
  render() {
    const {count}=this.state
    return (
      <button onClick={this.incrementC}>Click {count} times</button>
    )
  }
}
export default  ClickCounterTow
