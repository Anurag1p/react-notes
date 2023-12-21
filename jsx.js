import React from 'react';  // ye JSX ko support krne k liye import krte hai
import ReactDOM from 'react-dom';  // ye render property ko use krne ke liye us hoti

// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback function")

// jaha pe html us ki hui hai usko yaha hum "JSX" kahte hai

/*
   NOTE :- ager hum ek se jyada jsx ko use nhi kr skte. ager hum ek se jyada jsx ko use krne chahte hai to
           to iske 3 tarike hai

           1. hum sabhi jsx ko ek "<div>" mein wrappe kr skte hai 
           2. hum sabhi jsx ko square bracket "[]" mein wrape kr skte hai lekin isme jsx ko separate krne ke liye "," use krte hai
           3. hum fragment ka use kr skte hai "<>   </>"
*/
ReactDOM.render(
<div>

    <h1> hello world !! My name is deepanshu</h1>
    <p> my name is deepanshu nayak*****</p>

</div>
// [ 
    // <h1> hello world !! My name is deepanshu</h1>,
    // <p> my name is deepanshu nayak*****</p>
// ] 

,document.getElementById('root'));