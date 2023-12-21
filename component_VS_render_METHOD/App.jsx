// ***** component vs render METHOD ******

// ap "component" and "render" me props pass krne ho to ap callback function me comopenent ko call kre like this:
{/*     <Route exact path="/about" component={()=> <About name="aboutfsdf us" />}/>
        <Route exact path="/service" render={()=> <Service name="service us" />}/> 
 */}

// component : - component method se hum jab b first time koi component ko call krte hai tab wo poore component ko load krta hai and jab b hum first time ke baad dobara call krte hai to wo dobara poora reload hota hai 
// render    : - render method sirf first time hi poore component ko load krta hai leki jab hum first time ke baad render method component ko poora reload nhi krta bs us chij ko load krta jo change hua hai 

/*   NOTE :-
              component and render method bilkul same kaam krte hai 
              
        Recommendation :-
                            ager apko component me props pass nhi krne to ap       ---     component Method ko use krskte hai
                            ager apko render me props pass krna chahte hai tp ap   ---     render Method ko use krskte hai


*/
import React from "react";
// import Helmet from 'react-helmet';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import ComA from './ComA';
// import ComB from './ComB';

import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import Error_404 from './routing/Error_404';

import Navbar from './navbar/Navbar';

import { Route, Switch } from 'react-router-dom';
import Service from "./routing/Service";
 


const App = () => {


  return (
   <>
      {/* <ComA/> */}
      {/* <ComB/> */}
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={()=> <About name="aboutfsdf us" />}/>
        <Route exact path="/service" render={()=> <Service name="service us" />}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Error_404}/>
      </Switch>



    </>
  )
}
export default App;
