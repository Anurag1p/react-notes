import React from 'react';
import { useParams ,useLocation,useHistory} from "react-router-dom";


// function User({match}) {
   
//     return (
//         <>
//             <h1>hey , {match.params.fname} and {match.params.lname}</h1>
//         </>
//     )
// }

function User() {
    let { fname , lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    console.log(location);

    return (
        <>
            <h1>hey , {fname} and {lname}</h1>
            {location.pathname === `/user/deepanshu/chintu` ?
            <>
             <button onClick={()=> history.goBack()}> go back </button>
             <button onClick={()=> history.goForward()}> forword </button>
             <button onClick={()=> history.push("/")}> redirect </button>
             </>
              : null}
        </>
    )
}

export default User;
