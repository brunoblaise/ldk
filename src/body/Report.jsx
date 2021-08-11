import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import React from 'react';
import ReportOne from './ReportOne';

function Notes() {
  return (
    <>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='email-wrapper wrapper'>
            <div className='row align-items-stretch'>
              <div className='mail-list'>
                <div className='form-check'>
                  {' '}
                  <label className='form-check-label'>
                    {' '}
                    <i className='input-helper'></i>
                  </label>
                </div>

                <div className='details'>
                  <i className='ti-star'></i>
                </div>
              </div>

              <ReportOne />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Notes);
