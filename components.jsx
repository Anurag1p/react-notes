import React from "react";

// components mein "react-dom" ko import krne ki koi jrurt nhi hai kyoki hum usme React.DOM.render() function ko use nhi krte
// component file ka name ka first letter Capitale hona chahiye
// component file ka extension ".jsx" hoto hai

// component mein uske file name ka hi ek function banta hai or us function ke return mein hum html output likhte joki humen secreen pe print krwani hai
// then "export default function-name" krke export krna hai
// iske baad jis b file mein hume us component ko use krna hai . firstly use import krna hai
// "<component-name/>" aise call krna hai

// *** App.jsx ***

// "App.jsx" simply ek component hi hoto but isme hum chhote chhote component ko call krte 
// then "App.jsx" ko "index.js" mein call krke render krwadete hai joki hume screen par dikhta hai


function Para(){
    return(<p>this is list of five items</p>);
}

export default Para;