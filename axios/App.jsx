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
 
const App = () => {


  return (
   <>
      {/* <ComA/> */}
      {/* <ComB/> */}
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Error_404}/>
      </Switch>



    </>
  )
}
export default App;
