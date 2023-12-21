import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// jsx mein hum html ki tarah inline css nhi likh skte jsx mein different tarike se inline css add hoti hai
// 
// jsx mein inline css ko add krne ke 2 tarike hai lekin dono tarike se phle hume css ho object literal mein banana hoga
// and property ko hume "kabab case" mein likhna hai GOTO url : - shorturl.at/bxyDP
// this is boject literal
const heading ={
        color: 'rgb(20, 101, 250)',
        textTransform: 'capitalize',       // use "textTransform" instead of "text-trandform"
        textAlign: 'center',               // use "textAlign" instead of "text-align"
        fontSize: '2.5rem',                // use "fontSize" instead of "font-size"
        fontFamily: "'Akronim', cursive"   // use "fontFamily" instead of "font-family"
}

//  1.) you can add like this : <h1 className="heading" style={{color: 'rgb(20, 101, 250)',textTransform: 'capitalize',textAlign: 'center'}}>Techy Deepanshu</h1>

// 2.) you can add like this : <h1 className="heading" style={heading}>Techy Deepanshu</h1>


ReactDOM.render(
  <>
    {/* <h1 className="heading" style={{color: 'rgb(20, 101, 250)',textTransform: 'capitalize',textAlign: 'center'}}>Techy Deepanshu</h1> */}
    <h1 className="heading" style={heading}>Techy Deepanshu</h1>

    <div className="imgdiv">
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
    </div>
  </>,

  document.getElementById("root")
);
