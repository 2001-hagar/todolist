import React from 'react'
import { MdDownloadDone } from "react-icons/md";
import { GoAlert } from "react-icons/go";

function Message(props) {
  return (
    <div style={{position:"fixed", bottom:"0px",left:"0px", backgroundColor:props.color , color:"white",paddingRight:"20px",paddingLeft:"10px"}}> 
    {props.img?<MdDownloadDone  style={{paddingRight:"10px",scale:"1.8"}}/>:<GoAlert  style={{paddingRight:"10px",scale:"1.5",marginTop:"-5px"}}/>}
    {props.content}</div>
  )
}

export default Message