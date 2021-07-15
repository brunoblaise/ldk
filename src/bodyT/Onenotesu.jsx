
import React, { useEffect, useState} from "react";
import Notessidebar from './Notessidebar';
import Sidebar from '../sidebar1/Sidebar';
import Header from '../header1/Header';
import { format } from "timeago.js";
import Marks from "./Marks";
function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
function Onenotesu({match}) {
    const [notes, setNote] = useState([]);
    const getProfile = async () => {
        try {
          const res = await fetch(`http://localhost:5000/get/worksub/${match.params.id}`, {
            method: "GET",
            headers: { jwt_token: localStorage.token }
          });
    
          const parseData = await res.json();
    
          
    
    
          setNote(parseData);
        } catch (err) {
          console.error(err.message);
        }
      };
      
      useEffect(() => {
        getProfile();
     
      }, [setNote]);
    return (
        

<>
<Header/>
<div className="container-fluid page-body-wrapper">
<Sidebar/>
     <div className="content-wrapper">
             <div className="email-wrapper wrapper">
                 <div className="row align-items-stretch">
                
                   
                        <Notessidebar/>
                     
                    
        
                     <div className="mail-view d-none d-md-block col-md-9 col-lg-7 bg-white">
         
         <div className="message-body">
         <div className="sender-details">
             
             <div className="details">
                 <p className="msg-subject">
                   {notes.notes_title}
                 </p>
         
             </div>
         </div>
         <div className="message-content">
             <p>Hi Teachers,</p>
             <p>{notes.student_fname}</p>
            
                 <Iframe iframe={`<iframe width="100%" height="50%" s frameborder="no"  src='http://localhost:5000/uploads/${notes.work_url}'></iframe>`}/>
             <p><br/><br/>Regards,<br/>{format(notes.timestamp)}</p>
         </div>
        
         <Marks/>
     </div>
       
     </div>
    
                 </div>
             </div>
             </div>
         </div>
         </>
    )
}

export default Onenotesu
