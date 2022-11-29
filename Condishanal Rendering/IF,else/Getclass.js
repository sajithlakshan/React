import React, { Component } from 'react'

 class Getclass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogin:false 
    }
  }

  render(){
    
    if(this.state.isLogin){
      return(
        <div>
        <h1>Yoooooooooo Niga</h1>  
        </div>
      )}else{
        return(
          <div>
            <h1>Kanawa Bath</h1>  
          
          </div>
        )
      }
    

    
  }

}

export default Getclass