import React from "react";
import ReactDOM from 'react-dom';

// const Favs = ()=>{


//       if(favrt === 'Amazon'){
//         return <Amazon/>;
//       }else{
//         return <Netflix/>;
//       }

// }
ReactDOM.render(
    <>
    <Favs/>

    {(favrt === 'Amazon')?<Amazon/>:<Netflix/>}
    </>
    ,document.getElementById('root')
)