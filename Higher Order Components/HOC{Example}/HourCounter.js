import React, { Component } from 'react'

class HourCounter extends Component {
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
    const {count}=this.state
    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default HourCounter