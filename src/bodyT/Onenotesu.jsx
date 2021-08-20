import React, {useEffect, useState} from 'react';

import {format} from 'timeago.js';
import Marks from './Marks';
import {url} from '../url';
const Notessidebar = React.lazy(() => import('./Notessidebar'));
const Header = React.lazy(() => import('../header1/Header'));
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
function Iframe(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ''}} />
  );
}
function Onenotesu({match}) {
  const [notes, setNote] = useState([]);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/worksub/${match.params.id}`, {
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
              <Notessidebar />

              <div className='mail-view d-none d-md-block col-md-9 col-lg-7 bg-white'>
                <div className='message-body'>
                  <div className='sender-details'>
                    <div className='details'>
                      <p className='msg-subject'>{notes.student_email}</p>
                    </div>
                  </div>
                  <div className='message-content'>
                    <p>Hi Teachers,</p>
                    <p>{notes.student_fname}</p>

                    <Iframe
                      iframe={`<iframe width="100%" height="50%" s frameborder="no"  src='${notes.work_url}'></iframe>`}
                    />
                    <p>
                      <br />
                      <br />
                      Regards,
                      <br />
                      {format(notes.timestamp)}
                    </p>
                  </div>

                  <Marks student={notes.student_email} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Onenotesu);
