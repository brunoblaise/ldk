import React, { useEffect, useState,useContext  } from "react";
import { ProfileContext } from "./context/ProfileContext";

function Numexercise() {
    const [profile] = useContext(ProfileContext)
    const [notes, setNote] = useState([]);
    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/get/exercise", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
  
        
  
        setNote(parseData.filter((fil)=> fil.class_year_content === id[0]).length)
       
        
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
        <div className="col-md-6 mb-4 stretch-card transparent">
        <div className="card card-tale">
            <div className="card-body">
                <p className="mb-4">Number of Exercise</p>
                <p className="fs-30 mb-2">{notes}</p>
             
            </div>
        </div>
    </div>
    )
}

export default Numexercise
