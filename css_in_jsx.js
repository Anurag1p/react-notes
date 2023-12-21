import React from "react";
import ReactDOM from "react-dom";
import "./index.css";  // firstly you must be add css file


// jaisa ki hum HTML mein "class"  use krte the 
// but JSX mein hum "className" use krte hai kyo "class" resevered word hai reactjs main

//      eg:-  
//             HTML  - <div class="btn"> .. </div>
//             JSX   - <div className="btn"> .. </div>
ReactDOM.render(
  <>
    <h1 className="heading">Techy Deepanshu</h1>

    <div className="imgdiv">
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
      <img src="https://picsum.photos/200/300" alt="random" />
    </div>
  </>,

  document.getElementById("root")
);
