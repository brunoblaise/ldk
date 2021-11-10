import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

import {Helmet} from 'react-helmet';
import {url} from '../url';

function Registe() {
  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({
    father: '',
    mother: '',
    phone: '',
    email: '',
    day: '',
    student: '',
    written: '',
  });

  const [subjec, setSubjec] = useState('');
  const [subje, setSubje] = useState('');
  const classe = subjec.value;
  const gender = subje.value;
  const {father, mother, student, written, phone, day, email} = inputs;
  const [opene, setOpene] = useState(false);
  const [photo, setImages] = useState('');
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('classe', classe);
      formData.append('gender', gender);

      formData.append('father', father);
      formData.append('mother', mother);

      formData.append('student', student);
      formData.append('written', written);

      formData.append('email', email);
      formData.append('phone', phone);

      formData.append('day', day);
      formData.append('photo', photo);

      const myHeaders = new Headers();
      myHeaders.append('jwt_token', localStorage.token);
      const response = await fetch(
        `${url}/create/newStudent`,

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
  const handleChan = (event) => {
    setSubje({value: event.target.value});
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

        <title>NEW STUDENTS REGISTRATION </title>
      </Helmet>

      <div className='container-fluid page-body-wrapper'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='row'>
              <div className='card-body'>
                <div className='ml-xl-4 mt-3'>
                  <h4 className='card-title'>
                    {' '}
                    NEW STUDENTS REGISTRATION REQUIREMENT:{' '}
                  </h4>
                  <div className='template-demo'>
                    <p className='card-description'>
                      1. Student Passport Photo
                      <br />
                      2. Report cards of previous years (for those who want to
                      join CXR in S2, S3, S5, S6)
                      <br />
                      3. National Exam Result slip from S3 or P6. (This does not
                      concern S1 & S4 students)
                      <br />
                    </p>
                  </div>

                  <form className='row g-3' onSubmit={onSubmitForm}>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Which class do you want to go in
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
                        Full names
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='student'
                        value={student}
                        onChange={(e) => onChange(e)}
                        placeholder='name'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Choose your gender
                      </label>
                      <select
                        onChange={handleChan}
                        id='inputState'
                        className='form-select'>
                        <option>Select your gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                      </select>
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Select a photo as were instructed
                      </label>
                      <input
                        name='photo'
                        placeholder='Upload Files'
                        disabled={open}
                        type='file'
                        onChange={(e) => setImages(e.target.files[0])}
                        className='form-control form-control form-control-lg '
                        id='exampleInputPassword'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Birth date
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='day'
                        value={day}
                        onChange={(e) => onChange(e)}
                        placeholder='write the day you were born'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Father's name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='father'
                        value={father}
                        onChange={(e) => onChange(e)}
                        placeholder='father name'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Mother's name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='mother'
                        value={mother}
                        onChange={(e) => onChange(e)}
                        placeholder='mother name'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Parent phone number father || mother other guardian
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='phone'
                        value={phone}
                        onChange={(e) => onChange(e)}
                        placeholder='phone number'
                      />
                    </div>
                    <div className='col-md-4'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Parent email
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        placeholder='parent email'
                      />

                      <br />
                      {open ? (
                        <Link onClick={() => setOpen(false)}>
                          <i className='bi bi-plus'></i>Discard the writing{' '}
                        </Link>
                      ) : (
                        <Link onClick={() => setOpen(true)}>
                          <i className='bi bi-plus'></i>Write why did you choose
                          us{' '}
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
                            placeholder='write here make sure you have fun while writing'
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

export default React.memo(Registe);