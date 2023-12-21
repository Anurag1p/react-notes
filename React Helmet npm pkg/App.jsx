import React , { useState } from "react";
import Helmet from 'react-helmet';
 
const App = () => {

    const [num, setNum] = useState(0);

  return (
   <>
   <Helmet>
     <title>{` num is ${num}`}</title>
   </Helmet>
    <button onClick={()=>{
      return setNum(num+1);
    }} >click me {num}</button>
    </>
  )
}
export default App;