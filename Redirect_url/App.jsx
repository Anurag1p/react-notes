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

import { Route, Switch , Redirect } from 'react-router-dom';
import Service from "./routing/Service";
import User from "./routing/User";
import Search from "./routing/Search";
 

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
        <Route  path="/user/:fname/:lname" component={User}/>
        <Route  path="/search" component={Search}/>
        {/* <Route component={Error_404}/> */}
        <Redirect to="/"/>
      </Switch>



    </>
  )
}
export default App;
