
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import React from 'react'


import Notessidebar from './Notessidebar';
function Notes() {
  
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
                   how to view your notes
                 </p>
         
             </div>
         </div>
         <div className="message-content">
             <p>Hi Students,</p>
             <p>to be able to see your notes you must first selector the notes given to you and if you donot see the notes you want right away please search in the search box</p>
            
             <p><br/><br/>Regards,<br/>Mudacumura brunoblaise</p>
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

export default Notes
