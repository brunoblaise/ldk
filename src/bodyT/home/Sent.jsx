import React, {useEffect, useState} from 'react';
import {url} from '../../url';
function Sent({id}) {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/tiled/${id}`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setMessage(parseData);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setMessage]);
  return <p className='p-4'>{loading ? 'loading..' : message.written}</p>;
}

export default React.memo(Sent);
