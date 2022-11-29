import React, { Component } from 'react'

 class TernaryCondishanalOperator extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogin:false 
        }
      }
    
  render() {
    return this.state.isLogin ?(
      <div>TernaryCondishanalOperator</div>
    ):(
        <div>Yamitheku dasai</div>
    )
  }
}

export default TernaryCondishanalOperator