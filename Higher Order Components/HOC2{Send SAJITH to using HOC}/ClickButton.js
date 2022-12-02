import React, { Component } from 'react'
import Ucomponent from './withCounter'


class CBHC2 extends Component {
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
        <button onClick={this.incrementCount}>{this.props.name}Clicked {count} times</button>
      </div>
    )
  }
}
export default  Ucomponent(CBHC2)