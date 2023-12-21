import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render("kya dikhana hai","kaha dikhana hai","callback function")

// google font ko use krne ke liye apko font ka link "./public/index.html" file mein paste krna hai 
// and font family css file mein add krni hai 
// Done .. goole font Applied!!

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
