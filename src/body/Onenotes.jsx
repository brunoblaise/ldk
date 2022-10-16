import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
import {url} from '../url';
import {useQuery} from 'react-query';
const Header = React.lazy(() => import('../header/Header'));

const Sidebar = React.lazy(() => import('../sidebar/Sidebar'));

function Onenotes({match}) {
  const {loading, notes} = useQuery('notes', () =>
    fetch(`${url}/get/notes/${match.params.id}`).then((res) => res.json()),
  );

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
                    <p className='msg-subject'>{notes.notes_title}</p>
                  </div>

                  <div className='message-content'>
                    <p>Hi Students, instructions must be followed</p>

                    <p>{notes.short_note}</p>
                    <div className='attachments-sections'>
                      <ul>
                        <li>
                          {loading ? (
                            'loading..'
                          ) : (
                            <>
                              <div className='thumb'>
                                <i className='ti-file'></i>
                              </div>
                              <div className='details'>
                                <h6> notes title</h6>
                                <p className='file-name'>{notes.notes_title}</p>
                                <br />

                                <br />

                                <div className='buttons'>
                                  <Link
                                    to={{pathname: `${notes.notes_url}`}}
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

export default React.memo(Onenotes);
