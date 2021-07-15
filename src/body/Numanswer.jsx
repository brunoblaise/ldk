import React, { useEffect, useState,useContext  } from "react";
import { ProfileContext } from "./context/ProfileContext";
function Numanswer() {
    const [profile] = useContext(ProfileContext)
    const [notes, setNote] = useState([]);
    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/get/answer", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
  
        
  
        setNote(parseData.map((fil)=> fil).length)
       
        
      } catch (err) {
        console.error(err.message);
      }
    };
 

    useEffect(() => {
      getProfile();
   
    },[setNote]);

    const id = profile.map(profil=>(
      profil.class_student
    ))

    return (
        <div className="col-md-6 stretch-card transparent">
                                    <div className="card card-light-danger">
                                        <div className="card-body">
                                            <p className="mb-4">Number of Answer</p>
                                            <p className="fs-30 mb-2">{notes}</p>
                                            
                                        </div>
                                    </div>
                                </div>
    )
}

export default Numanswer
