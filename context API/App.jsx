import React , { createContext } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CompA from "./CompA";
import CompC from "./CompC";

const FirstName = createContext();
const LastName = createContext();


const App = () => {
  return (
   <>
      <FirstName.Provider value={'chintu'}>
      <LastName.Provider value={'nayak'}>  
      <CompC />
      </LastName.Provider>
    </FirstName.Provider>
     </>
  )
}
export default App;
export { FirstName , LastName };