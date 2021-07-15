import React, { useState,useContext } from "react";
import { toast } from "react-toastify";
import { ProfileContext } from "./context/ProfileContext";
function Messageform() {

    const [profile] = useContext( ProfileContext )
    const own = profile.map(profil=>(
      profil.student_fname
    ))
    const [message,setMessage] = useState("");
    const [name] = useState(own[0]);
    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const myHeaders = new Headers();
  
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("jwt_token", localStorage.token);
  
        const body = {message, name};
        const response = await fetch("http://localhost:5000/create/message", {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(body)
        });
  
       
 

        if (response.status === "200") {
          
          toast.error("Something is wrong");
         
        } else {
          
        
          toast.success("Sent Successfully");
        }
      
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };
   
    return (
        <form  onSubmit={onSubmitForm} className="sendNewMessage"><button className="addFiles"><i className="fa fa-plus"></i></button><input type="text" placeholder="Type a message here" 
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
           
            
            /><button className="btnSendMsg" id="sendMsgBtn"><i className="fa fa-paper-plane"></i></button></form>
    )
}

export default Messageform
