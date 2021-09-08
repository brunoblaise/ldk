
import React, {useEffect, useState} from 'react';
import {format} from 'timeago.js';
const Header = React.lazy(() => import('../header/Header'));
const ExerciseSide = React.lazy(() => import('./ExerciseSide'));
const Sidebar = React.lazy(() => import('../sidebar/Sidebar'));
import {url} from '../url';
function ExerciseOne({match}) {
  const [notes, setNote] = useState([]);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/exercise/${match.params.id}`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setNote]);
  return (
    <>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='email-wrapper wrapper'>
            <div className='row align-items-stretch'>
              <ExerciseSide />

              <div className='mail-view d-none d-md-block col-md-9 col-lg-7 bg-white'>
                <div className='message-body'>
                  <div className='sender-details'>
                    <div className='details'>
                      <p className='msg-subject'>{notes.exercise_title}</p>
                    </div>
                  </div>
                  <div className='message-content'>
                    <p>Hi Students,</p>
                    <p>{notes.short_exercise}</p>

                    <p>
                      <br />
                      <br />
                      Regards,
                      <br />
                      {format(notes.timestamp)}
                    </p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(ExerciseOne);
