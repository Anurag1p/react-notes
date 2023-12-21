// ********* Redirect ********

// "Redirect" url ko redirect kerne ke liye use hota hai . jaise apkne url type kiya 
// http://localhost/user/isn
// then ap"Redirect" use krte ho to ap is url parameter ko kisi dusre page ke url pe redirect kr skte ho
// jaise hum 404 error page ko show krtwate ki ager user aglte page url type krege to use 404 error page me redirect hojata h ya page open ho jata hai
// aise hi "Redirect" me ager user wrong page url type krta hai to usko 404 error page ki jagha usse dure page pe redirect kr diya jata hai

// stype to implimation
// 1.) import "Redirect" method from "react-router-dom" package
import { Route, Switch , Redirect } from 'react-router-dom';

// 2.) "<Route path="/"}/>"   ki jagha    "<Redirect to="/"/>" ko use krna hai . and "router" mein "path" attribute use hota hai and "redirect" mein "to" attribute use hota hai
<Redirect to="/"/>

// done finally