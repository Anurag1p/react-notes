// ******* useHistory hook *****

// "useHistory" hook previous url ko save krke rkhta hai jise hum iske hum iske pre defined function ko use kr skte hai

// goBack() = previous url ko get krne k liye
// goForword() = forword url ko get krne k liye
// push('/user') = push page ko redirect krne k liye

// steps for implimatation

// 1.) import "useHistory" hook from "react-route-dom" package
import { useHistory} from "react-router-dom";

// 2.) define "useHistory" in top of function component
const history = useHistory();

// 3.) access function of "useHistory" object

            <>
             <button onClick={()=> history.goBack()}> go back </button>
             <button onClick={()=> history.goForward()}> forword </button>
             <button onClick={()=> history.push("/")}> redirect </button>
             </>
             
             