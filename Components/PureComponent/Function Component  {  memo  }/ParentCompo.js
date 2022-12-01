

import React, { Component } from 'react'
import MemoComp from './MemoComp'


class ParentCompo extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'LOL'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sajiiiiiiw'
            })
        },200)
    }
  render() {
    console.log('----------- Parent Comp reder----------')
    return (
      <div>ParentCompo
        <MemoComp name={this.state.name}/>
        
      </div>
    )
  }
}

export default  ParentCompo