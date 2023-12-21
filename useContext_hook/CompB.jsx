import React,{useContext} from "react";
import CompC from './CompC';
import {FirstName } from './App';

const CompB =()=>{
    const state = useContext(FirstName);
    // const lname = useContext(LastName);


    return (
        <h1>this is my name {state}</h1>
    );
}

export default CompB;