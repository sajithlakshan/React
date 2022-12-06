import React, { Component } from 'react'
import CompF from './CompF'
import UserContext from './userContex'

class CompE extends Component {
  static contextType = UserContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <CompF/>
      </div>
    )
  }
}

//CompE.contextType = UserContext
export default CompE
