//  ******** useContext hook ********

// jab hum "context API" ko use krte the tab hum consumer component mein kafi jyada code likhna pdta tha joki coding ko complex krdeta tha
// to is problem ko overcome krne k liye "useContext" hook ka use krte hai

// isme provider component mein koi change nhi hai wo "context API" jaise likhna hai
// bs change consumer component pe krna hai and useContext usi pe lgega

/*
        NOTE : u cannot pass object
*/

// steps

// 1.) goto component where u wanna access the data of the provider

// 2.) imporet "useContext" 
import React,{useContext} from "react";

// 3.)  ab us component pe jana hai joki "<FirstName.Provider> ... </FirstName.Provider>" me likha tha kiya hai and us component ko import krna hai jo provid kr rha hai
import {FirstName } from './App';

// 4.) defined "useContext" hook in top of the function component 
const state = useContext(FirstName);

// 5.) finally u can use the value in "state"
<h1>this is my name {state}</h1>