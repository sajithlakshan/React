import React, { Component } from 'react'
import Ucomponent from './withCounter'

class HChoc2 extends Component {

  render() {
    
    const{count,incrementCount} = this.props

    return (
      <div>
        <h1 onMouseOver={incrementCount}> {this.props.name} Hovered {count} timesa</h1>
    
      </div>
    )
  }
}

export default Ucomponent(HChoc2)