import React,{useReducer} from 'react';

const initialize = 0;
const reducer = (state,action) =>{
    if(action.type === "INCREASE"){
        return state + 1;
    }
    if(action.type === "DECREASE"){
        return state - 1;
    }
}

const Usereducer = () => {
    const [state , dispatch] = useReducer(reducer,initialize)
    return (
        <>
            <h1>{state}</h1> <br />
            <button onClick={()=>dispatch({type:"INCREASE"})}>inc</button> <br />
            <button onClick={()=>dispatch({type:"DECREASE"})}>dec</button> <br />

        </>
    )
}

export default Usereducer;
