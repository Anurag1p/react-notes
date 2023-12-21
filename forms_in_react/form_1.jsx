import React ,{useState} from "react";
/*
    **** controlled component ***

    jab b hum React main "<input>" tag ka use krenge to hume "onChange={function_name}" dena jaruri hai . is function se hum "<input>" tag main hum real time m value target kr skte hai

    and "onChange={function_name}" function ek object b return krta jisse hum input ki value or other property ko access kr skte hai. isliye ise "controlled component" b kahte hai 
*/

const App = () =>{

    const [msg , setMsg] = useState();
    const [msgdisp , setMsgdisp] = useState();
    const [pswrd , setPswrd] = useState();
    const [pswrddisp , setPswrddisp] = useState();

    const changeInput=(event)=>{

        // console.log(event.target.value);
        setMsg(event.target.value);
    }
    const changePswrd=(event)=>{

        // console.log(event.target.value);
        setPswrd(event.target.value);
    }
    
    
    const displayMsg = ()=>{
        setMsgdisp(msg);
        setPswrddisp(pswrd);
    }
    return(
        <>
            <div className="container">
            <h1>Hello , {msgdisp} {pswrddisp}</h1>
            
                <input type="text" placeholder="Enter Your Name" onChange={changeInput} />
                <input type="text" placeholder="Enter Your Password" onChange={changePswrd} />
                <button onClick={displayMsg} >submit</button>
           
            </div>
        </>
    );
}

export default App;