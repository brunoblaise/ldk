import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';

import {url} from '../../url';

const Sidebar = React.lazy(() => import('../../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../../header1/Header'));
function Take({match}) {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/newStudent/${match.params.id}`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setMessage(parseData);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getProfile();
  }, [setMessage]);

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ''}}
      />
    );
  }
  return (
    <div>
      <div className='col-lg-12 grid-margin stretch-card'>
        <Helmet>
          <meta name='title' content='college du christ roi' />
          <meta
            http-equiv='Content-Security-Policy'
            content='upgrade-insecure-requests'
          />
          <meta name='language' content='EN' />
          <meta name='author' content='Mudacumura brunoblaise' />
          <meta name='creationdate' content='29/07/2020' />
          <meta name='distribution' content='global' />
          <meta name='rating' content='general' />

          <title> New student info</title>
        </Helmet>
        <Header />
        <div className='container-fluid page-body-wrapper'>
          <Sidebar />
          <div className='content-wrapper'>
            <div className='card'>
              <div className='row'>
                <div className='card-body'>
                  <div className='ml-xl-4 mt-3'>
                    <h4 className='card-title'>Information </h4>
                    <div className='template-demo'>
                      <p className='card-description'>
                        Here you can view new student info
                      </p>
                    </div>
                  </div>
                  <div className='row g-3'>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Father's name
                      </label>
                      <p className='card-description'>{message.father}</p>
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Mother's name
                      </label>
                      <p className='card-description'>{message.mother}</p>
                    </div>

                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Student's name
                      </label>
                      <p className='card-description'>{message.student_fname}</p>
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        class
                      </label>
                      <p className='card-description'>{message.class_student}</p>
                    </div>

                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        email
                      </label>
                      <p className='card-description'>{message.email}</p>
                    </div>

                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        age
                      </label>
                      <p className='card-description'>{message.age}</p>
                    </div>

                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        gender
                      </label>
                      <p className='card-description'>{message.gender}</p>
                    </div>

                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        phone
                      </label>
                      <p className='card-description'>{message.phone}</p>
                    </div>

                    <div className='col-12'>
                      <p>
                        <Iframe
                          iframe={`<iframe width="100%" height="266" s frameborder="no" src='${message.photos}'></iframe>`}
                        />
                      </p>
                    </div>
                    <div className='col-12'>
                      <p>{message.written}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Take);
