import React,{useState, useEffect, createContext} from 'react'

export const ProfileContext = createContext()
export const ProfileProvide = props => {
    const [profile, setProfile] = useState([]);
 
    const getProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/get/profile", {
          method: "GET",
          headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
  
        setProfile(parseData);
       
        
   
      } catch (err) {
        console.error(err.message);
      }
    };
  
   
    useEffect(() => {
        getProfile();
     
      }, []);
    
    return <ProfileContext.Provider value={[profile, setProfile]}
    
    >{props.children} </ProfileContext.Provider>
    
}
