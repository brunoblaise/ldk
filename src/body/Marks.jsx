import React, { useEffect, useState,useContext } from "react";
import { ProfileContext } from "./context/ProfileContext";
import { format } from "timeago.js";
function Marks() {
    const [message, setMessage] = useState([]);
  const [profile] = useContext(ProfileContext)
 
    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/get/marks", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
  
        setMessage(parseData.filter((fil)=> fil.student_email === id[0]));
       
        
   
      } catch (err) {
        console.error(err.message);
      }
    };
  
   
    useEffect(() => {
        getProfile();
     
      }, []);
      const id = profile.map(profil=>(
        profil.student_email
      ))
    return (
        <>
           <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">Your marks</h4>
                  <p className="card-description">your marks will appear here</p>
                  <div class="card">
                  <div class="card-body">
                    <div class="table-responsive pt-3">
                      <table class="table table-dark">
                        <thead>
                          <tr>
                            
        
                            <th>
                             Name of work
                            </th>
                            <th>
                             Marks
                            </th>
                            <th>
                              sent
                            </th>
                          </tr>
                        </thead>
        {
            message.map((note)=>(
             
                
                        <tbody key={note.mark_id}className={ format(note.timestamp) === "1 week ago" ? "hide"  : ""  }>
                          <tr>
                           
                            <td>
                              {note.mark_name}
                            </td>
                            <td>
                             {note.mark}
                            </td>
                            <td>
                            {format(note.timestamp)}
                            </td>
                          </tr>
                      
                        </tbody>
                   
              
            ))
        }
           </table>
                    </div>
                  </div>
                </div>
        </div>
              </div>
      </>
    )
}

export default Marks
