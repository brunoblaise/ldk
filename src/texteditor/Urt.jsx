import React, {useEffect, useState} from 'react'
import { url } from "../url";
import { Link } from 'react-router-dom';
import { format } from "timeago.js";
function Urt() {
    const [message, setMessage] = useState([]);
  const getProfile = async () => {
    try {
  
      const res = await fetch(`${url}/get/url`, {
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

    return (
        <div>
                   <div className="row mx-0 box1">
                    <div className="">
                        <div className="auth-form-light text-left py-3 px-2">
                            {message.map(chat=>(
                          <Link to={{pathname:`${chat.url_content}`}} target='_blank' className="were">{format(chat.timestamp)}</Link>
                            ))}
                        </div>
                   
                    </div>
                </div>
        </div>
    )
}

export default React.memo(Urt)
