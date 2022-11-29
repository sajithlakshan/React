import React, { Component } from 'react'

 class Getclass extends Component {
  render(){
    const{name,cal} =this.props
    return(
      <h1>
        Welcome {name} _________{cal}
      </h1>
    )
    
  }

}

export default Getclass