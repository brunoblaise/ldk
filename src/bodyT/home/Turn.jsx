import React, {useEffect, useState} from 'react';
import {url} from '../../url';
function Turn({id, name, own}) {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/mark_feed`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setMessage(
        parseData.filter(
          (fil) => fil.student_email === id || fil.teacher_email === own,
        ),
      );
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setMessage]);

  return (
    <>
      {loading ? (
        'loading ...'
      ) : message.length === 0 ? (
        <td>turn in</td>
      ) : (
        message.map((fil) => (
          <td key={fil.mark_id}>
            {' '}
            {fil.test_name === name ? fil.test_mark : 'turn in'}
          </td>
        ))
      )}
    </>
  );
}

export default React.memo(Turn);
