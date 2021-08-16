import Sidebar from '../sidebar1/Sidebar';
import Header from '../header1/Header';
import React from 'react';

import Notessidebar from './Notessidebar';
function Notesu() {
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
                      <p className='msg-subject'>how to view submited work</p>
                    </div>
                  </div>
                  <div className='message-content'>
                    <p>Hi Teacher,</p>
                    <p>
                      to be able to see submited work you must first selector
                      the work submited to you and if you donot see the work you
                      want right away please search in the search box
                    </p>

                    <p>
                      <br />
                      <br />
                      Regards,
                      <br />
                      Teacher
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

export default React.memo(Notesu);
