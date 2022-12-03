import React, { Component } from 'react'

class ClickCounterTow extends Component {

  render() {
    const {count,incrementC}=this.props
    return (
      <button onClick={incrementC}>Click {count} times</button>
    )
  }
}
export default  ClickCounterTow
