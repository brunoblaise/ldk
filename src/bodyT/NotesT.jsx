import React, {useState, useContext} from 'react';
import {TeacherContext} from './context/TeacherContext';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {url} from '../url';
import {Helmet} from 'react-helmet';
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../header1/Header'));
function NotesT() {
  const [profile] = useContext(TeacherContext);
  const own = profile.map((profil) => profil.teacher_email);

  const [name] = useState(own[0]);
  const [inputs, setInputs] = useState({
    title: '',
    email: name,
    summary: '',
    written: 'null',
  });

  const [recfile, setRecfile] = useState('');
  const [subjec, setSubjec] = useState('');
  const [open, setOpen] = useState(false);
  const classe = subjec.value;
  const {title, email, summary, written} = inputs;
  const [opene, setOpene] = useState(false);

  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('recfile', recfile);
      formData.append('classe', classe);
      formData.append('title', title);
      formData.append('summary', summary);
      formData.append('written', written);
      formData.append('email', email);
      const myHeaders = new Headers();
      myHeaders.append('jwt_token', localStorage.token);
      const response = await fetch(
        `${url}/create/notes`,

        {
          method: 'POST',
          body: formData,
          headers: myHeaders,
        },
      );
      setOpene(true);
      if (response.status === 500) {
        toast.error('Fill the required one');
      } else {
        toast.success('Sent Successfully');
        setOpene(false);
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

        <title>Notes</title>
      </Helmet>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='card'>
            <div className='row'>
              <div className='card-body'>
                <div className='ml-xl-4 mt-3'>
                  <h4 className='card-title'>Submit your notes here </h4>
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
                        placeholder='Upload File'
                        type='file'
                        disabled={open}
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
                            placeholder='write notes here'
                            name='written'
                            value={written}
                            onChange={(e) => onChange(e)}
                            style={{left: '0px', top: '3px'}}
                            className='ql-editor bado'
                          />
                        </div>
                      </div>
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

export default React.memo(NotesT);
