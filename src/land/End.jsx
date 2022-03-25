import React, {useEffect, useState, useContext} from 'react';

import jsPDF from 'jspdf';
import {toast} from 'react-toastify';
import {url} from '../url';
import {Helmet} from 'react-helmet';
const Start = React.lazy(() => import('./Start'));






import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Ca from '../images/240890812_2673305222962552_4016126827192558575_n.jpg';

function End({results, data, datas}) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
 
  
 
  const [written] = useState('Great work');
 
  const [open, setOpen] = useState(false);
  const mark = Math.floor((correctAnswers / data.length) * 100);
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].challenge_answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  const generatePdf = () => {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.querySelector('#contentp'), {
      callback: function (pdf) {
        pdf.save('certificate.pdf');
      },
    });
  };

 
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
    <>
         <header className='header-section'>
         <nav className='navbar navbar-expand-lg pl-3 pl-sm-0' id='navbar'>
          <Link to='/'>
            <LazyLoadImage
              effect='blur'
              src={Ca}
              alt=''
              width='640'
              height='360'
              className='img-fluid cap'
            />
          </Link>
          <div className='container'>
            <div className=' navbar-menu-wrapper' id='navbarSupportedContent'>
              <ul className='navbar-nav align-items-lg-center align-items-start ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Student
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/loginT'>
                    Teacher
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  
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

        <title>NEW Contestor REGISTRATION </title>
      </Helmet>
      <button
        className={'btn btn-info'}
        onClick={generatePdf}>
        download your certificate
      </button>
      <form>
        <div className='containerp' id='contentp'>
          <div className='logop'>BR Community</div>

          <div className='marquee'>
            Certificate of Completion
            <p>
              {correctAnswers} of {data.length}
            </p>
            <strong>{mark}%</strong>
          </div>

          <div className='assignment'>This certificate is presented to</div>

          <div className='person'>{name}</div>

          <div className='reason'>
            for finishing the challenge
          </div>
        </div>
        
      </form>
  
      <Start results={results} data={data} />

      <div className='container-fluid page-body-wrapper topw'>
        <div className='content-wrapper'>
          <div className='card'>
            <div className='row'>
              <div className='card-body'>
                <div className='ml-xl-4 mt-3'>
                  <h4 className='card-title'>
                    {' '}
                  Contestor:{' '}
                  </h4>
                  <div className='template-demo'>
                    <p className='card-description'>
                      1. Contestor Passport Photo
                      <br />
                      2. You will get T-shirt from Br community
                      <br />
                      3.Or you will get 1 week account for studying privately
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
                        Select your photo
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
 
    </>
  );
}

export default React.memo(End);