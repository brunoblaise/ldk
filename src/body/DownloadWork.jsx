/** @format */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import { format } from 'timeago.js';
import WorkList from './WorkList';
import { url } from '../url';
function DownloadWork({ match }) {
  const [notes, setNote] = useState([]);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/work/${match.params.id}`, {
        method: 'GET',
        headers: { jwt_token: localStorage.token },
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
              <WorkList />
              <div className='mail-view d-none d-md-block col-md-9 col-lg-7 bg-white'>
                <div className='message-body'>
                  <div className='sender-details'>
                    <div className='details'>
                      <p className='msg-subject'>{notes.work_title}</p>
                    </div>
                  </div>
                  <div className='message-content'>
                    <p>Hi Students,</p>
                    <p>{notes.work_note}</p>

                    <p>
                      <br />
                      <br />
                      Regards,
                      <br />
                      {format(notes.timestamp)}
                    </p>
                  </div>
                  <div class='attachments-sections'>
                    <ul>
                      <li>
                        <div class='thumb'>
                          <i class='ti-file'></i>
                        </div>
                        <div class='details'>
                          <p class='file-name'>{notes.work_title}</p>
                          <br />
                          
                          <div class='buttons'>
                            <Link
                              to={{ pathname: `${notes.work_url}` }}
                              target='_blank'
                              class='view'>
                              View
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
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
export default React.memo(DownloadWork);
