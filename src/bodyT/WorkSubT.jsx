import React, {useState, useContext} from 'react';
import {TeacherContext} from './context/TeacherContext';
import {toast} from 'react-toastify';
import {url} from '../url';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../header1/Header'));
function WorkSubT() {
  const [profile] = useContext(TeacherContext);
  const own = profile.map((profil) => profil.teacher_email);

  const [name] = useState(own[0]);
  const [inputs, setInputs] = useState({
    title: '',
    summary: '',
    email: name,
    written: null,
  });
  const [open, setOpen] = useState(false);
  const {title, email, summary, written} = inputs;
  const [subjec, setSubjec] = useState('');
  const classe = subjec.value;
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const [recfile, setRecfile] = useState(null);
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('classe', classe);
      formData.append('title', title);
      formData.append('summary', summary);
      formData.append('written', written);
      formData.append('email', email);
      formData.append('recfile', recfile);
      const myHeaders = new Headers();
      myHeaders.append('jwt_token', localStorage.token);
      const response = await fetch(
        `${url}/create/work`,

        {
          method: 'POST',
          body: formData,
          headers: myHeaders,
        },
      );

      if (response.status === 500) {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleChang = (event) => {
    setSubjec({value: event.target.value});
  };

  return (
    <div className='col-12 grid-margin'>
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

        <title>Work</title>
      </Helmet>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='card'>
            <div className='row'>
              <div className='card-body'>
                <div className='ml-xl-4 mt-3'>
                  <h4 className='card-title'>Submit your Assignment here </h4>
                  <div className='template-demo'>
                    <p className='card-description'>
                      here you will submit you work with the button upload
                    </p>
                  </div>

                  <form className='row g-3' onSubmit={onSubmitForm}>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        class
                      </label>
                      <select
                        onChange={handleChang}
                        id='inputState'
                        className='form-select'>
                        <option>Select your class</option>
                        <option value='s1'>s1</option>
                        <option value='s2'>s2</option>
                        <option value='s3'>s3</option>
                        <option value='s4mcb'>s4mcb</option>
                        <option value='s4lkk'>s4lkk</option>
                        <option value='s4pcb'>s4pcb</option>
                        <option value='s5mcb'>s5mcb</option>
                        <option value='s5pcb'>s5pcb</option>
                        <option value='s5lkk'>s5lkk</option>
                        <option value='s6mcb'>s6mcb</option>
                        <option value='s6pcb'>s6pcb</option>
                        <option value='s6lkk'>s6lkk</option>
                      </select>
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Notes title
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='title'
                        value={title}
                        placeholder='title'
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Instruction
                      </label>
                      <textarea
                        type='text'
                        className='form-control form-control form-control-lg '
                        name='summary'
                        value={summary}
                        placeholder='summary'
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Upload a file
                      </label>
                      <input
                        name='recfile'
                        disabled={open}
                        placeholder='Upload File'
                        type='file'
                        className='form-control form-control form-control-lg '
                        id='exampleInputPassword'
                        onChange={(e) => setRecfile(e.target.files[0])}
                      />
                      <br />
                      {open ? (
                        <Link onClick={() => setOpen(false)}>
                          <i className='bi bi-plus'></i>Discard the notes{' '}
                        </Link>
                      ) : (
                        <Link onClick={() => setOpen(true)}>
                          <i className='bi bi-plus'></i>Write note here{' '}
                        </Link>
                      )}
                    </div>
                    <div
                      className={
                        open ? 'containe ql-editor' : 'containe ql-editor hide'
                      }>
                      <div className='form form-stacked sendNewMessage'>
                        <div>
                          <textarea
                            type='text'
                            value={written}
                            placeholder='write assignment here'
                            onChange={(e) => onChange(e)}
                            style={{left: '0px', top: '3px'}}
                            name='written'
                            className='ql-editor bado'
                          />
                        </div>
                      </div>
                    </div>
                    <button className='btn m-4 btn-primary col-md-3 btn-icon-text'>
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

export default React.memo(WorkSubT);
