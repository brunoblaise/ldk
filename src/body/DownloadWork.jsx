/** @format */

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const Header = React.lazy(() => import('../header/Header'));
const Sidebar = React.lazy(() => import('../sidebar/Sidebar'));
import {format} from 'timeago.js';
import {url} from '../url';

const Submit = React.lazy(() => import('./Submit'));
function DownloadWork({match}) {
  const [notes, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/work/${match.params.id}`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData);
      setLoading(false);
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
              <div className='mail-view d-none d-md-block col-md-9 col-lg-7 bg-white'>
                <div className='message-body'>
                  <div className='details'>
                    <p className='msg-subject'>{notes.work_title}</p>
                  </div>

                  <div className='message-content'>
                    <p>Hi Students, instructions must be followed</p>

                    <p>{notes.work_note}</p>
                    <div class='attachments-sections'>
                      <ul>
                        <li>
                          {loading ? (
                            'loading..'
                          ) : notes.written === 'null' ? (
                            <>
                              <div className='thumb'>
                                <i className='ti-file'></i>
                              </div>
                              <div className='details'>
                                <p className='file-name'>{notes.work_title}</p>
                                <br />

                                <div className='buttons'>
                                  <Link
                                    to={{pathname: `${notes.work_url}`}}
                                    target='_blank'
                                    className='view'>
                                    View
                                  </Link>
                                </div>
                              </div>{' '}
                            </>
                          ) : (
                            <>
                              <div className='thumb'>
                                <i className='ti-file'></i>
                              </div>
                              <div className='details'>
                                <h6> notes title</h6>
                                <p className='file-name'>{notes.work_title}</p>
                                <br />
                                <h5>written notes</h5>
                                <p className='file-name'>{notes.written}</p>
                                <br />

                                <div className='buttons'>
                                  <Link
                                    to={{pathname: `${notes.work_url}`}}
                                    target='_blank'
                                    className='view'>
                                    View
                                  </Link>
                                </div>
                              </div>
                            </>
                          )}
                        </li>
                      </ul>
                    </div>
                    <Submit work={'work'} wor={notes.teacher_email} />
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
export default React.memo(DownloadWork);
