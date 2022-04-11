import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from './context/ProfileContext';
import {Link} from 'react-router-dom';
import {url} from '../url';
function Mymarks() {
  const [profile] = useContext(ProfileContext);
  const [notes, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = profile.map((profil) => profil.student_email);
  const [open, setOpen] = useState(false);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/marks`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData.filter((fil) => fil.student_email === id[0]));
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log(notes);

  return (
    <div>
      {loading
        ? 'loading..'
        : notes.map((fil) => (
            <ol className='list-group list-group-numbered'>
              <li className='list-group-item d-flex justify-content-between align-items-start'>
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>{fil.course_name}</div>
                  {open ? (
                    <Link onClick={() => setOpen(false)}>
                      <i className='bi bi-plus'></i> Hide feedback{' '}
                    </Link>
                  ) : (
                    <Link onClick={() => setOpen(true)}>
                      <i className='bi bi-plus'></i>Show feedback{' '}
                    </Link>
                  )}
                  <div
                    className={
                      open ? 'card row col-md-18  stretch-card' : 'hide'
                    }>
                    {fil.feedback}
                  </div>
                </div>
                <span className='badge bg-primary rounded-pill'>
                  {fil.mark}
                </span>
              </li>
            </ol>
          ))}
    </div>
  );
}

export default React.memo(Mymarks);
