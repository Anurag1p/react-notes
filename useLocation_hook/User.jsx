import React from 'react';
import { useParams ,useLocation} from "react-router-dom";


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
    console.log(location);
    return (
        <>
            <h1>hey , {fname} and {lname}</h1>
            {location.pathname === `/user/deepanshu/chintu` ? <button> click here </button> : null}
        </>
    )
}

export default User;
