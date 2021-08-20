import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import {Link} from 'react-router-dom';

const Header = React.lazy(() => import('../header/Header'));

const reb =
  '<iframe width="100%" height="266" s frameborder="no"  src="https://www.reb.rw/main-menu/resources/secondary-school-books/"></iframe>';
function Iframe(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ''}} />
  );
}
function Library() {
  return (
    <>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='email-wrapper wrapper'>
            <div className='row align-items-stretch'>
              <div className='mail-list-container col-md-3 pt-4 pb-4 border-right bg-white'>
                <div className='mail-list'>
                  <div className='content'>
                    <p className='sender-name'>Syllabus</p>
                    <p className='message_text'>
                      Dear students, you will see that this syllabus contains
                      reb website so you will access it every easy the books of
                      reb enjoy
                    </p>
                  </div>
                  <div className='details'>
                    <i className='ti-star'></i>
                  </div>
                </div>
              </div>
              <div className='mail-view d-none d-md-block col-md-9 col-lg-7 bg-white'>
                <div className='message-body'>
                  <div className='sender-details'>
                    <div className='details'>
                      <p className='msg-subject'>
                        Syllabus of all books of REB
                      </p>
                    </div>
                  </div>
                  <div className='message-content'>
                    <p>Hi Students,</p>
                    <p>
                      Dear students, you will see that this syllabus contains
                      reb website so you will access it every easy the books of
                      reb enjoy. it is very simple you can access all the books
                      in one place without navigating between website{' '}
                      <Link to='/library' style={{color: '#6c84ff'}}>
                        Happy Studting
                      </Link>
                    </p>
                    <Iframe iframe={reb} />
                    <p>
                      <br />
                      <br />
                      Regards,
                      <br />
                      Mudacumura BrunoBlaise
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

export default React.memo(Library);
