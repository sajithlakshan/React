import React, { Component } from 'react'

 class Elementvariable extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogin:true 
        }
      }
  render() {
    let MESSAGE
    if(this.state.isLogin){
        MESSAGE = <div>Welcome Broo</div>
    }else{
        MESSAGE = <div>Welcome Guest</div>
    }
    return (
      <div>
        <h1>{MESSAGE}</h1>
      </div>
    )
  }
}
export default Elementvariable