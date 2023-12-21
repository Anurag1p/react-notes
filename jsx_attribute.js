import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback function")

// ***jaise hum html mein attribute kahte the use hum jsx mein "jsx attribute" kahte hai
//    lekin yaha apko attribute ko camelcase mein likhna hai

//      eg:-  
//             HTML Attribute - contenteditable="true"
//             JSX Attribute - contentEditable="true"


// ***jaise hum html mein <input> tag and <img> tag use krte hai lekin hun inh tags k sath closing tag use nhi krte
//    lekin ye hum jsx mein nhi kr skte hume har tag ko close krna hi pdega ya fir closing tags use krne pdenge

//    jsx mein hum 2 tarike se tag ko close kr skte hai
//              1.) indivisual closing tag       - <img> .... </img>
//              2.) self closing tag             - <img.../> 

let img1 = "https://picsum.photos/200/300";
let img2 = "https://picsum.photos/seed/picsum/200/300";
let img3 = "https://picsum.photos/200/300?grayscale";

ReactDOM.render(


<>
        <h1>Techy Deepanshu</h1>
        <h1 contentEditable="true" >type your name..</h1>
        {/* <img src="https://picsum.photos/200/300" alt="random" /> */}
        <img src={img1} alt="random" />
        <img src={img2} alt="random" />
        <img src={img3} alt="random" />
        <h1 contentEditable="true" >type your name..</h1>

</>   

,document.getElementById('root'));