import React from 'react';
import ReactDOM from 'react-dom';

// tradional method mein hum <div>  and [] use krte the and <div> ager use krte the to div bhi add hojata tha joki future mein css mein problem krta tha 
// isliye is problem ko overcome krne ke liye hum "fragment" ka use krte hai
// isme hum "<React.Frqagment>" use hota hai . iska fayda ye hai ki ye sirf iske ander wale content ko hi add krta hai khud ko add nhi krta
// "<React.Fragment>.. </React.Fragment>" ki jaga app "<> .. </>" ko bhi use kr skte ho
ReactDOM.render(
    <React.Fragment>
    <h1>this is my email address</h1>
    <h1>deeepanshunayak@gamil.com</h1>
    </React.Fragment>
    ,document.getElementById('root'));