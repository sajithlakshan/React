import React, { Component } from 'react'

 class Getclass extends Component {

  click(){
    console.log("Click meee Brooo..........")
  }


  render(){
    
    return(
      <h1>
        <button onClick={this.click}>Yoooooooooo</button>
      </h1>
    )
    
  }

}

export default Getclass