/***** Routing in react */

// react mein routing krne k liye "react-router-dom" package ko install krna pdta hai
// ismo "App.js" file ya fir jisme b ap routing krna chahte ho and "index.js" file mein import krna hai

// steps

// 1.) install "react-router-dom" package from npm 
// npm i react-router-dom

// 2.) import "react-router-dom" in "index.js" file for using the package in an app and make sure name will be same
import { BrowserRouter } from 'react-router-dom';

// 3.) import "react-router-dom" in "App.js" file for doing the routing in an app and make sure name will be same
import { Route, Switch } from 'react-router-dom';

// 4.) import all components in "App.js" component first which is using in routing for exmple i import some components
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import Error_404 from './routing/Error_404';

// 5.) after all these go to "index.js" and "App.js" component write under "<BrowserRouter> .. </BrowserRouter>" tag
    <BrowserRouter>
        <App/>
    </BrowserRouter>

// 6.) and then go to "App.js" component and i already imported components in step 4

// 7.) write <Route /> under  "<Switch> .. </Switch>" tag

{/*  <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Error_404}/>
     </Switch> 
*/}
   
//  NOTE : 
//          "path" mein path pass krte hai like : "https://localhost:3000/contact"
//          "component" k mtlb path k according konsa component render krwana hai and "component" ki spaling same honi chahiye
//          "exact" ka matlab hai ki jiska b exact path match hoga tabhi wo component render hoga ager hum "exact" nhi use krenge to jiska b phla letter match hote hi use phle render krwate hai
