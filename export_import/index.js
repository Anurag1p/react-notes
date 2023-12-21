import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// *** default ***
// default variable or function ko hum  kisi b name se import kr skte hai
// and use "{}" mein nhi likhna hai

// *** undefault ***
// jo b variable or function default nhi h use hum "{}" curly bracess main rakhna hai
// or unhe usi name se import krna hai jis name se export kiye the

// default and undefault ko ek sath import krne k liye :- import default-name {undefault,undefault..} from './export';
// import name, {myname,h} from './export';

// *** import all properties in single variable ***
// ap sabhi export properties ko ek hi variable mein import kr skte ho
// lekin ye ek object literal ban jata hai and ise access krne k liye "variable-name.property-name" property-name declare in export file
import * as quetion from './export';
// import App from "./App";


ReactDOM.render(
<>
 <h1>{quetion.default}</h1>
 <h1>{quetion.myname()}</h1>
 <h1>{quetion.h}</h1>
 </>
  ,document.getElementById("root")
);
