import React from "react";
import {NavLink} from 'react-router-dom';

// "Link" tab use krni jab apko css class use nhi krni ho
// "NavLink" tab use krni jab apko css class use krni ho

const Navbar = () =>{
    return (
        <>
            {/* "NavLink" mein hum css class "activeClassName" name se de skte hai jo ki component ke active hone pe hi active hogi but problem ye hai ki ek component url se ager ap dusre component url pe jate hoto phle wale ki css b active rahti hai to iss problem h ko overcome krne k liye ap "exact" ka use kr skte hai*/}
            <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
            
           
        </>
    );
}

export default Navbar;