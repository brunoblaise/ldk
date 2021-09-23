import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {toast} from 'react-toastify';

import {url} from '../../url';
const Sent = React.lazy(() => import('./Sent'));
const Sidebar = React.lazy(() => import('../../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../../header1/Header'));
function Seen({match}) {
  const [inputs, setInputs] = useState({
    mark: '',
    written: '',
    name: match.params.name,
    email: match.params.email,
    teacher: match.params.teacher,
  });
  const {mark, written, name, teacher, email} = inputs;
  const [opene, setOpene] = useState(false);
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        mark,
        name,
        email,
        teacher,
        written,
      };
      const response = await fetch(`${url}/create/mark_feed`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      setOpene(true);
      if (response.status === 500) {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
        setOpene(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
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

          <title> {match.params.id} class</title>
        </Helmet>
        <Header />
        <div className='container-fluid page-body-wrapper'>
          <Sidebar />
          <div className='content-wrapper'>
            <div className='card'>
              <div className='row'>
                <div className='card-body'>
                  <div className='ml-xl-4 mt-3'>
                    <h4 className='card-title'>Here is my work </h4>
                    <div className='template-demo'>
                      <p className='card-description'>
                        here you can mark and give feedback
                      </p>
                    </div>
                  </div>
                  <form className='row g-3' onSubmit={onSubmitForm}>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Mark
                      </label>
                      <input
                        style={{width: '100px'}}
                        type='text'
                        className='form-control'
                        value={mark}
                        onChange={(e) => onChange(e)}
                        name='mark'
                        placeholder='Marks'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Feedback
                      </label>
                      <textarea
                        type='text'
                        className='form-control form-control form-control-lg '
                        value={written}
                        onChange={(e) => onChange(e)}
                        name='written'
                        placeholder='summary'
                      />
                    </div>
                    <div className='col-12'>
                      <Sent id={match.params.id} />
                    </div>
                    <button
                      disabled={opene}
                      className='btn m-4 btn-primary col-md-3 btn-icon-text'>
                      <i className='bi bi-upload ti-file menu-icon btn-icon-prepend'></i>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Seen);
