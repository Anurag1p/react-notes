import React from 'react';
import { useParams } from "react-router-dom";

// old method without hook


// function User({match}) {
   
//     return (
//         <>
//             <h1>hey , {match.params.fname} and {match.params.lname}</h1>
//         </>
//     )
// }

function User() {
    let { fname , lname} = useParams();
    return (
        <>
            <h1>hey , {fname} and {lname}</h1>
        </>
    )
}

export default User;
