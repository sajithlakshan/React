import React, { Component } from 'react'

 class Getclass extends Component {
  constructor(props){
    super(props)
    this.state ={
      massage:'JAMUL'
    }
    this.click =this.click.bind(this)
  }

  click(){
    this.setState({
      massage : "MOMOooooooooooo"
    })
    console.log(this)
  }

  render(){
    
    return(
      <div>
        <h1>
          {this.state.massage}
        </h1>
        <button onClick={this.click}>Yoooooooooo</button>
      </div>
    )
    
  }

}

export default Getclass