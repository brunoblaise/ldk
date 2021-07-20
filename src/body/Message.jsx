
import Messageform from "./Messageform";
import React, { useEffect, useState,useContext } from "react";
import { ProfileContext } from "./context/ProfileContext";
import { format } from "timeago.js";
function Message() {
  const [message, setMessage] = useState([]);
  const [profile] = useContext(ProfileContext)

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/get/message", {
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
    profil.student_fname
  ))

  
 
    return (
       
            <div className="__main"><div className="nav"><div className="nav__blocks"><img src=""alt=""/></div><div className="nav__blocks"></div><div className="nav__blocks"></div></div><div className="main__chatbody"><div className="main__chatcontent"><div className="content__header"><div className="blocks"><div className="current-chatting-user"><div className="avatar"><div className="avatar-img"><img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.6435-9/213459873_936665220445856_4645688183212269772_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8631f5&_nc_ohc=aASjNtegUm0AX8g3J3a&_nc_ht=scontent.fnbo1-1.fna&oh=bea0da446078ed1bf7f1fc6a17cc3e6c&oe=60E8B95B" alt=""/></div><span className="isOnline active"></span></div><p>Cxr Chat Box</p></div></div></div><div className="content__body"><div className="chat__items">
            
          
            {message.map(chat=>(<div key={chat.message_id} className={chat.message_fname === own[0] ? "chat__item me" : "chat__item other"} style={{animationDelay: "0.8s"}}><div className="chat__item__content"><div className="chat__msg">{chat.messages}</div><div className="chat__meta"><span>{chat.message_fname}</span><span>{format(chat.timestamp)}</span></div></div></div>))
}
            
            
            
            <div></div></div></div><div className="content__footer">
                
                <Messageform/>
                </div></div></div></div>
        
    )
}

export default Message
