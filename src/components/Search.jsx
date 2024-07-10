import React, { useState, useEffect  } from 'react';
import { IoMdAdd } from "react-icons/io";
import './Search.css';
import Message from './Message';


function Search() {
var [state, setState]=useState(0);
var [hide, setHide]=useState(0);
var text=false;
var [cases, setCases]=useState("start");
const [searchinput,setSearchInput]= useState("");

const HandleChange =(value) =>{
    setSearchInput(value);
  };
var change = () =>{
    setState(0)

};

var change2 = () =>{
    setHide(0);
    setCases("start");
};


 var handleClick = () =>{
    setState(1)
    setTimeout(change,150)
    if (searchinput){
        setCases(1);
    }else{
        setCases(0);}
    setHide(1)
    setTimeout(change2,3000)

  }

  const EnterEvent = (event) => {
    if(event.keyCode === 13){
        handleClick();
  }
  };

  

  return (
    <>
    <div className="container rounded-pill d-flex flex-row p-0">
    <input className='mt-3 rounded-end rounded-pill p-4 border border-light w-75'style={{boxShadow:"#9fca9f  5px 5px 60px ",backgroundColor:'transparent' }} value={searchinput} onChange={(e)=> HandleChange(e.target.value)} type="text" placeholder="Add a task.." onKeyDown={(e) => EnterEvent(e)}/>  
<button className=' mt-3 w-25 p-0 border border-light rounded-start bg-success rounded-pill'   onClick={handleClick} 
> 
<IoMdAdd className= {state? "factive text-light" : "FaSearch text-light"} />
  </button>

    </div>
{cases=="start"?"":cases? <Message content='added successfully' color="green" img={!text}/> :<Message content='nothing is added' color="orange" img={text}/>}
    </>
)
}

export default Search