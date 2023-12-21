import axios from "axios";
import React , {useState} from "react";
import {Modal , Button} from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home =()=>{

    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState({hide:'false',uniq:''});
    const fetchData = async ()=>{
        const res = await axios.get('http://localhost:3003/contacts');
        console.log(res);
        setData(res.data);
    }

    // fetchData();

    const deleteItem = async (id) =>{
        console.log('delete function called')
        console.log(id);
        
        await axios.delete(`http://localhost:3003/contacts/${id}`);
        const newData = await data.filter((arr , index)=>{
            return index !== id;
        })
        setData(newData);
        fetchData();

    }

    
    const change = () =>{
        return (<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>)
    }

    


    return(
        <>
            <br />
            <button onClick={fetchData}>fetch data</button>
            {
                data.map((curElem)=>{
                   return (
                       
                    <>
                       <h5>name : {curElem.name}</h5>
                       <p>email : {curElem.email}</p>
                       <button onClick={change} >edit</button>
                       <button  onClick={()=>deleteItem(curElem.id)}>delete</button>
                       <br />

                     
                    </>

                   ); 
                })

                
                       
            }
        </>
    );
}

export default Home;