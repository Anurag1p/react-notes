import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback function")

// ager apko JSX ke ander javascript use krni hoto ap curly braces "{..}" ke ander use kr sakte ho

/*                   "expression" ko use kr skte ho jo sirf koi value return krti ho
     LIMITATION :-   "statement" ko use nhi kr skte jaise ki :- if,else,for,while..
*/

const email = 'deeepanshunayak@gamil.com';

ReactDOM.render(



<>
        <h1>this is my email address</h1>
        <h1> this is Email : {email}</h1>
        <h1> this is a number : {5+6*4}</h1>
</>   

,document.getElementById('root'));