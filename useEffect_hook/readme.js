import React , { useState , useEffect } from "react";
// ******* useEffect Hook ******
// jab bhi hume render method call hone k baad kuch call krwana hoto tab hum "useEffect" hook ka use krte hai
// jab index.js file mein render method ke ander job component or job chij change hoti hai to render method call hota hai
// and render method ke call hote hi "useEffect" hook automatic call ho jata hai

// syntax of "useEffect"
//                
//        useEffect(() => {
//          alert('hello');
//          },[num2])


// useEffect mein ek function pass jarur hota hai and dusra ek array [] 
// function mein jo work krwana hai wo likhan hai 
// and array mein wo variable pass krna jiski value change hone ke baad "useEffect" ka function call hoga and ager hum empty array pass krte hai to useEffect sirf jab page load hoga tabhi useEffect call hoga use ke baad nhi


// steps

// import "useEffect" hook
import React , { useState , useEffect } from "react";

// 2.) defined useEffect in the top of functional component
useEffect(() => {
  alert('hello');
 },[num2])
