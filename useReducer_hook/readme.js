//**********useReducer Hook ********** */


// "useReducer" hook mein b "useState" hook ki taraha state hota hai joki jo data store krke rkhta hai
// lekin "useReducer" hook mein app use state ke sath koi b operation b persorm kr skte hai

// steps of implimentation of "useReducer" hook

// 1.) import "useReducer" hook from "react" pkg
import React,{useReducer} from 'react';

// 2.) declare "useReducer" hook at the top side in function component
//      a.) state - it is store the data
//      b.) dispatch - it's use for calling the reducer function and it take "({type:"OPERATION_NAME"})"
//      c.) reducer - it is a fucntion that is using for declaring the operation of state
//      d.) intialize - it is the initial value of "state"
const [state , dispatch] = useReducer(reducer,initialize)

// 3.) define the reducer function before function component
//      a.) "reducer" function is expect to parameters "state" and "action"
//      b.) "action" represent the type of operation that is provided by "dispatch" like : dispatch({type:"INCREASE"})}

const initialize = 0;
const reducer = (state,action) =>{
    if(action.type === "INCREASE"){
        return state + 1;
    }
    if(action.type === "DECREASE"){
        return state - 1;
    }
}

// 4.) then target the "reducer" function by dispatch
{/* <button onClick={()=>dispatch({type:"INCREASE"})}>inc</button> <br /> */}