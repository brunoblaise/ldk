import React, {useEffect, useState} from 'react'

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
                        <div className="auth-form-light text-left py-3 px-4 px-sm-5">
                            {message.map(chat=>(
                          <h3 className="were"style={{fontSize:'14px',whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>{chat.url_content}</h3>
                            ))}
                        </div>
                   
                    </div>
                </div>
        </div>
    )
}

export default React.memo(Urt)
