import React, {useEffect, useState} from 'react';
import {url} from '../url';

function Numanswer() {

  const [notes, setNote] = useState([]);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/answer`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData.map((fil) => fil).length);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setNote]);



  return (
    <div className='col-md-6 stretch-card transparent'>
      <div className='card card-light-danger'>
        <div className='card-body'>
          <p className='mb-4'>Number of Answer</p>
          <p className='fs-30 mb-2'>{notes}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Numanswer);
