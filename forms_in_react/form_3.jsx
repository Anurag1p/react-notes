import React ,{useState} from "react";
/*
    **** controlled component ***

    jab b hum React main "<input>" tag ka use krenge to hume "onChange={function_name}" dena jaruri hai . is function se hum "<input>" tag main hum real time m value target kr skte hai

    and "onChange={function_name}" function ek object b return krta jisse hum input ki value or other property ko access kr skte hai. isliye ise "controlled component" b kahte hai 
*/

const App = () =>{

    const [detail , setDetail] = useState({
        fname:'',
        password:''
    });
    

    const changeInput=(event)=>{
        // console.log(event.target.value);
        let value = event.target.value;
        let name = event.target.name;


        // setDetail mein function defined kr skte hai joki ek argument leta jo "useState" k previous value represent krta hai

        // "previousValue" is represented previous value of "detail" and it is object
        setDetail((previousValue)=>{
            if(name==='fname'){
                console.log(name);
                return ({
                    fname:value,
                    password:previousValue.password
                });

            }else if(name=== 'password'){
                console.log(name); 
                return ({
                    fname:previousValue.fname,
                    password:value
                });

            }
        });
    }
    
    
    
    const displayMsg = (e)=>{
        e.preventDefault();
      
    }
    return(
        <>
            <div className="container">
            <h1>Hello ,{detail.fname} {detail.password}</h1>
            <form onSubmit={displayMsg}>

                <input type="text" placeholder="Enter Your Name" onChange={changeInput} name="fname" />
                <input type="text" placeholder="Enter Your Password" onChange={changeInput} name="password" />
                <button type="submit">submit</button>
           
            </form>
            </div>
        </>
    );
}

export default App;