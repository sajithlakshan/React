import React, { Component } from 'react'

class Mrefdemo extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        //////////////////////////////////////////
        this.cbRef =null
        this.setCbRef = (element) =>{
            this.cbRef = element
        }
    }

    componentDidMount(){
        this.inputRef.current.focus()
        ////////////////////////////////////////
        if(this.cbRef){
            this.cbRef.focus()
            
        }
    }

    clickHandle = ()=>{
        alert(this.inputRef.current.value)
    }

    OldclickHandle = ()=>{
        alert(this.cbRef.value)
    }


  render() {
    return (
      <div>
        <h1>OLD</h1>
        <input type="text" ref={this.setCbRef}></input>
        <button onClick={this.OldclickHandle}>Old Click</button>
        <br></br>
        <h1>NEW</h1>
        <input type="text" ref={this.inputRef}></input>
    
        <button onClick={this.clickHandle}>New Click</button>
      </div>
    )
  }
}
export default Mrefdemo