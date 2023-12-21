import React , { createContext } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CompA from "./CompA";
import CompC from "./CompC";

const FirstName = createContext();
const LastName = createContext();


const App = () => {

  // const state=[{
  //   fname:'deepanshu',
  //   lname:'nayak'
  // }]
  return (
   <>
      <FirstName.Provider value={'deepanshu'}>
        
      <CompC />
      <CompA />
      
    </FirstName.Provider>
     </>
  )
}
export default App;
export { FirstName , LastName };