import React, { Component } from 'react'

class Shortserget extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogin:true 
        }}


  render() {
    return this.state.isLogin && <div>Buuuuuuuu</div>
  }
}

export default Shortserget