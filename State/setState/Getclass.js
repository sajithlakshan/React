import React, { Component } from 'react'

export class Getclass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sajith:0
         
         
      }
    }

    cterminal(){
   
      this.state.sajith =this.state.sajith +1
     console.log(this.state.sajith)   
    }    
    incriment(){
        this.setState(
            {
                sajith:this.state.sajith+1
            }
        )
        console.log(this.state.sajith)
    }
    sameupdate(){
      this.setState(
      {
        sajith:this.state.sajith +1
      },
      () =>{
        console.log(this.state.sajith)
      }
      )
    }

    increment5(){
      this.sameupdate();
      this.sameupdate();
      this.sameupdate();
      this.sameupdate();
      this.sameupdate();

    }

    allincriment()
    {
      this.setState(piyooo =>({
        sajith:piyooo.sajith +1
      }))  
      console.log(this.state.sajith) 
    }
    allincriment5()
    {
      this.allincriment();
      this.allincriment();
      this.allincriment();
      this.allincriment();
      this.allincriment();      
    }
    
  render() {
    return (
      <div>
        <div>
            <h1>Count - {this.state.sajith}</h1>
        </div>
        <div>
        <button onClick={()=>this.cterminal()}>Count Terminal</button>
        </div>
       <button onClick={()=>this.incriment()}>Incriment</button>
       <div>
        <button onClick={()=>this.sameupdate()}>Update in Terminal and Screen In same time</button>
        </div>      
       <div>
        <button onClick={()=>this.increment5()}>Count 5</button>
        </div>  
        <div>
        <button onClick={()=>this.allincriment5()}>Count 5 to 5</button>
        </div>  
      </div>
    )
  }
}

export default Getclass