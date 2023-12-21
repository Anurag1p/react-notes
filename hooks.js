import React ,{useState} from "react";   // "useState" ko import krna jaruri hai
/*
   ****** React Hooks *****

 NOTE :- 
         1. Hooks are the new feature indroduced in the React 16.8 version.
         2. It allows you to use state and other React feature without writing a class. hooks are the functions which "hook into" React state and lifecycle features from function components.
         3. It does not work inside classes.
         4. Hooks should always be used at the top level of the  React functions.
         5. Node version 6 or above. NPM version 5.2 or above 


*/




const App=()=>{
    // const state = useState();
    // console.log(state);

    /*
        Note :- "count" main current value hoti hai or iska name kuch b rkh skte hai
                "setCout" ek function hai jis se hum count ki value change kr skte hai and "setCount" function se value update krne k baad "count" "setCount" function se ki gyi value ko hi apni current manta hai. and iske namge hum kuch b rakh skte hai
                "useState()" se hum "count" ki value ko set krte hai. and hum iska name change nhi kr skte
    */

    const [count , setCount] = useState(0);


    const IncNum =()=>{
        setCount(count+1);
    // console.log('clicked',count++);
    }
    const DecNum =()=>{
        setCount(count-1);
    // console.log('clicked',count++);
    }

    return(
        <>
           <h1>{count}</h1>
           <button onClick={IncNum}>+</button>
           <button onClick={DecNum}>-</button>
        </>
    );
}

export default App;