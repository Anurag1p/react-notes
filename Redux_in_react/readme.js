//***** Redux in react ****** */

// Redux mein hum ek centeral store banate hai jaha hum data ko store and delete krwate hai 
// actions :  isme phle action ko defile krna padta hai ki hum kya krna chahte hai  
// reducers : isme hum konsa action kaise kam krke ga wo define krte hai and isme ek reducers file hoti isme hum work defined krte hai or kitne b file ho skti hai and dusri file combineReducers file hoti hai jo sabhi reducers ko combined krke ek rootReducers bnadeta hai joki sabhi reducers ko store mein add krne mein madtat krta hai
// store.js : isme file mein hum ek store create krte hain jisse hum sabhi reducers ko use kr ske


// pre-resiquatry : 
//                   sabse phle hume 2 npm package install krne hai
//                      1.) npm redux         (this is for redux functionality)
//                      2.) npm react-redux   (this is for redux connectivity with react app )


// **** steps to folder/files of redux ****

// 1.) create folder "actions" and "index.js" under "src" directory
// src/actions/index.js

// 2.) create folder "reducers" and "reducers_work.js" these may be more than one and second file "index.js" for "reducers_combined" under "src" directiory
// src/reducers/index.js
// src/reducers/reducers_work.js

// 3.) create "store.js" file for create store and it also under "src" directory
// src/store.js



// **** what we do in "src/actions/index.js" ****
// 1.) define action of reducers and this is function and make sure name will be same accurate
// 2.) ager hum koi parameter b pass krna chahte hai to hume function mein parameter b pass kr skte hai and 
//  fir hume use key and value pair main likhna hai jaise "payload" mein "num" parameter ko bheja hai jo ki num ko reducer mein pass kr deta hai or waha ise "num" nhi access krste waha ye "payload" se access se hoga
// "payload" sirf ek variable hai jiska name kuch b rakh skte hai
export const incNumber = (num) =>{
    return {
        type:"INCREMENT",
        payload : num
    };

}
export const decNumber = () =>{
    return {
        type:"DECREMENT"
    };

}

// **** what we do in "src/reducers/reducers_work.js" ****
// 1.) jo "actions/index.js"  file main hume action ko define kiya tha yaha hume uska work define krna hai ki kya kaam krna hai
// 2.) function ko defined krne se phle hume "initialState" ko define krna jruri hai
// 3.) "switch" ki jaga ap ko bhi logical condition ko use kr skte ho
// 4.) switch case mein hume type define krne hai jo hume "actions/index.js" file uske action mein kre the
// 5.) default case dena jaruri hai iske bina error throw krga
// 6.) "action.payload" and isme "payload" as a parameter hai joki "actions/index" mein "num" name se parameter pass kiya hai "payload" main
const initialState = 20;
const changeTheNumber = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREMENT' : return state + action.payload;
        case 'DECREMENT' : return state - 1;
        default : return state
    }

}

export default changeTheNumber;


// **** what we do in "src/reducers/combine_reducers.js" ****
// 1.) isme hume jitni b file and jitene b reducers define kiye ve saare ya combine krne taki hum sirf ek variable ko through data call krske
// 2.) phle hum un sab function ko import krna jise hume combine krna hai
// 3.) and "combineReducers" method ko import krna hai from 'redux' joki hume sabhi reducers ko combine krme help krega
// 4.) "combineReducers" method mein hume ve sabhi reducers ko add krna hai jise hume combine krna chahte hai and reducer separete with "," comma
// 5.) and store in a variable and export that variable
import reducers_function from './reducers_work';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber
});

export default rootReducer;



// **** what we do in "src/store.js" ****
// 1.) isme hume ab finaly ek store create krenge jisse hume use file use krske
// 2.) "createStore" method ko import krna hai for create a store
// 3.) import variable of "combine_reducers" let "rootReducers" is that variable that contain combined reducers
// 4.) "createStore" method mein hume rootReducers ko pass krna hai and store in a variable and export it
/*     NOTE : 
                you can download "reduc devtool" extentions for monitoring the redux
                and for using this extention u must ad this link "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"
*/
import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;



// **** how to use store ****
// 1.) **** "src/index.js" **** 
// a.) import "store" from it path
// b.) import "Provider" method from "react-redux" for providing store data to all component under "<App/>" component
// c.) "provider" tag ke sath "store={store}" props bhjena jruri hai nhi to error throw krega

import store from './store';
import { Provider } from 'react-redux';

store.subscribe(()=> console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// 1.) **** "src/App.js" **** 
// a.) here you can access the store 
// b.) yaha apko do method ko import krna hai useSelector and useDispatch from "react-redux"
//      "useSelector" : isse ap store se data ko access kr skte hai and ye method ek callback function ko leta hai joki ek argument ko leta joki state hota jisse ap perticalur data ko access kr skte hai
//      "useDispatch" : isski help se hum "actions/index.js" file mein action define kiye gaye fucntion call kr sakte iske bina call nhi kr skte and ise use krne k liye phle ise ek variable mein call krna hai and then us variable se actions ke function ko call krna hai 
// c.) "actions/index.js" file mein define function ko import krna hai and inh function mein hum argument b pass kr skte hai

import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { incNumber , decNumber } from './actions/index';
const App = () => {

  const myState = useSelector((state)=> state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>welcome to redux</h1>
      <input type="text" value={myState} />
      <button onClick={()=> dispatch(incNumber(5))}>+</button>
      <button onClick={()=> dispatch(decNumber())}>-</button>

    </div>
  )
}

export default App;