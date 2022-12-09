import React,{useReducer} from 'react'

const MyReducer = () => {;
    const [state ,dispatch]= useReducer(reducer, initialState)
    const increaseCount = () =>{
        
        dispatch({type:ACTION.INCR})
    };
    const decreaseCount = () =>{
        dispatch({type:ACTION.DECR})
      
    }

  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        
    </div>
  )
}

export default MyReducer

const ACTION ={
    INCR :"INCREASE",
    DECR :"DECREASE"
}

const initialState = {count:0};
const reducer = (state,action)=>{
    switch(action.type){
        case ACTION.INCR:
            return {count:state.count +1}
        case ACTION.DECR:
              return {count:state.count -1}
        default:
            return state;
            
    }
};

