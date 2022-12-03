import React, { Component } from 'react'
import Ucomponent from './withCounter'

class CBHC2 extends Component {

  render() {
   
    const{count,incrementCount} = this.props
   
    return (
      <div>
        <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
        
      </div>
    )
  }
}
export default  Ucomponent(CBHC2)