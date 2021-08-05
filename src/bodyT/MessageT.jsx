
import Messageform from "./Messageform";
import React, { useEffect, useState,useContext } from "react";
import { TeacherContext } from "./context/TeacherContext";
import { format } from "timeago.js";
import { url } from "../url";
import cxr from "../images/cxr.jpg"
function MessageT() {
  const [message, setMessage] = useState([]);
  const [profile] = useContext(TeacherContext)

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/message`, {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();

      


      setMessage(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getProfile();
    
  
  }, [setMessage]);
  const own = profile.map(profil=>(
    profil.teacher_fname
  ))
 
  
 
    return (
       
            <div className="__main"><div className="nav"><div className="nav__blocks"></div><div className="nav__blocks"></div><div className="nav__blocks"></div></div><div className="main__chatbody"><div className="main__chatcontent"><div className="content__header"><div className="blocks"><div className="current-chatting-user"><div className="avatar"><div className="avatar-img"><img width="640" height="360" src={cxr} alt=""/></div><span className="isOnline active"></span></div><p>Cxr Chat Box</p></div></div></div><div className="content__body"><div className="chat__items">
            
          
            {message.map(chat=>(<div key={chat.message_id} className={chat.message_fname === own[0] ? "chat__item me" : "chat__item other"} style={{animationDelay: "0.8s"}}><div className="chat__item__content"><div className="chat__msg">{chat.messages}</div><div className="chat__meta"><span>{chat.message_fname}</span><span>{format(chat.timestamp)}</span></div></div></div>))
}
            
            
            
            <div></div></div></div><div className="content__footer">
                
                <Messageform/>
                </div></div></div></div>
        
    )
}

export default  React.memo(MessageT)
