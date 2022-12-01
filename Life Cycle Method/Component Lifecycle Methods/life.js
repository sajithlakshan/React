import React, { Component } from 'react'

 class LIMOO extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sajith'
      }
     console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
  render() {
    console.log('LifecycleA render')
    return (
        
      <div>life</div>
    )
  }
}

export default LIMOO