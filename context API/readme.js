// ******* Context API *******

// jaise hum ek component se dusre component main props pass krte hai waise hi hum context api se hum data pass kr skte hai
// lekin jaise hum ek component ko dusre and dusre ko tishre component mein props pass krte hai to isme time jyada lgta hai 
// example : "CompC" component ko component "CompB" mein import kiya and component "CompB" ko component "CompA" mein import kiya and component "CompA" ko component "App" mein import kiya
//   
 //    ager hum "App" component se component "CompC" mein bhejna hoto hume bichme link sabhi components mein se travel krwake data bhejna pdta hai
// lekin hum context API se direct "App" component se "CompC" component me data bhej skte hai

// isme ek component provider hota hai joki value provide krta hai
// and ek consumer hota joki us value ko access krta hai



// step for impliment context API

 //   1. ) import "createContext" 
 import React , { createContext } from "react";

 //   2. ) defined vairable of "createContext()"
 const FirstName = createContext();

 //   3. ) write component jo ki value provide krega and jo component ko consumer banana hai usse import b krna hai
 <FirstName.Provider value={'any_data'}>
     <conponent_jaha_pe_access_krana_hai />
 </FirstName.Provider>

 //   4. ) write export of that variable
 export { FirstName };

//    5. ) ab us component pe jana hai joki 
// "<FirstName.Provider> ... </FirstName.Provider>" me likha hai and us component ko import krna hai jo provid kr rha hai
import {FirstName } from './App';

 //   5.) ab us component pe jana hai joki "<FirstName.Provider> ... </FirstName.Provider>" me likha tha kiya hai and use component mein "<FirstName.Consumer> ... {call function} ... </FirstName.Consumer>" and isme ek function defined krna jaruri hai
     <FirstName.Consumer> 
            {(fname)=>{
                     return <h1>my name is {fname}</h1> 
                 }
            }
     </FirstName.Consumer>