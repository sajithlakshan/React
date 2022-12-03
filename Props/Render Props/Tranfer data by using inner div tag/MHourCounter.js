import React, { Component } from 'react'

class MHourCounter extends Component {

  render() {
    const {count,incrementC}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementC}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default MHourCounter