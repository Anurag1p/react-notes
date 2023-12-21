
import React , { useState , useEffect } from "react";


const App = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
     alert('hello');
    },[num2])




  return (
   <>
      <button onClick={()=>{ setNum(num+1) }}>click {num}</button>
      <button onClick={()=>{ setNum2(num2+1) }}>click {num2}</button>
     </>
  )
}
export default App;
