import React from 'react';

const Header = React.lazy(() => import('../header/Header'));
const WorkList = React.lazy(() => import('./WorkList'));
const Sidebar = React.lazy(() => import('../sidebar/Sidebar'));
function Quiz() {
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
                      <p className='msg-subject'>
                        search for the work and then downloaded it
                      </p>
                    </div>
                  </div>
                  <div className='message-content'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Quiz);
