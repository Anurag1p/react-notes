// ****** useLocation hook ******

// "useLoaction" hook url parameter ko get krne ke liye use hota hai like :
// type url url : - http://localhost:3000/user/deepanshu/chintu
// get url paramter by "useLocation" hook : - /user/deepanshu/chintu

// steps to implimentation
// 1.) import the hook "useLocation" from "react-router-dom" package
import { useLocation} from "react-router-dom";

// 2.) then define hook in top of function component
const location = useLocation();

// 3.) and location object is return pathname key and value . that help to get parameter from url
location.pathname

// example : 
location.pathname === `/user/deepanshu/chintu` ? <button> click here </button> : null

