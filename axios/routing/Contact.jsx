import React,{useState} from "react";
import axios from 'axios';
const Contact = (props) => {

    const [val, setVal] = useState({
        name:'',
        email:''
    })

    const inputVal = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        console.log(value);
        setVal((old)=>{
            return ({
                ...old,
                [name]: value
            })
        });
        console.log(val);
    }

    const addDate = async (event)=>{
        event.preventDefault();
        const res = await axios.post('http://localhost:3003/contacts',val);
        
        // console.log(res.data,val);
        
        console.log(res.data);
    }
  return (
    <>
      <div className="container-fluid col-4">
        <form >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name='name'
              onChange={inputVal}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name='email'
              onChange={inputVal}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button onClick={addDate}className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
