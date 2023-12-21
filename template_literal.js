import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback function")

// ager hum kisi string mein koi variable use krna chahte hai to hum " ` .. ` " backtick ka use krte hai

const fname = 'deepanshu';
const lname = 'nayak';
const email = 'deeepanshunayak@gamil.com';

ReactDOM.render(


<>
        <h1>this is my email address</h1>
        <h1> NAME  : {fname} {lname}</h1>
        <h1> NAME  : {fname +" "+ lname}</h1>

         <h1> {`NAME  : ${fname +" "+ lname}`}</h1>  {/* template literal */}

        <h1> {`this is a Email : ${email}`}</h1>    {/* template literal */}
</>   

,document.getElementById('root'));