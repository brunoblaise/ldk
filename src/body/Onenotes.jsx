
import React, { useEffect, useState} from "react";
import Notessidebar from './Notessidebar';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { format } from "timeago.js";
import { url } from "../url";
function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
function Onenotes({match}) {
    const [notes, setNote] = useState([]);
    const getProfile = async () => {
        try {
          const res = await fetch(`${url}/get/notes/${match.params.id}`, {
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
             <p>Hi Students,</p>
             <p>{notes.short_note}</p>
            
                 <Iframe iframe={`<iframe width="100%" height="266" s frameborder="no"  src='${notes.notes_url}'></iframe>`}/>
             <p><br/><br/>Regards,<br/>{format(notes.timestamp)}</p>
         </div>
        
        
     </div>
       
     </div>
    
                 </div>
             </div>
             </div>
         </div>
         </>
    )
}

export default  React.memo(Onenotes)
