import React, {useState, useContext} from 'react';
import {toast} from 'react-toastify';

import {url} from '../url';
import {TeacherContext} from '../bodyT/context/TeacherContext';
const Header = React.lazy(() => import('../header1/Header'));
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
function CreateTest() {
  const [profile] = useContext(TeacherContext);
  const own = profile.map((profil) => profil.teacher_email);
  const [teacher] = useState(own[0]);
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    duration: '',
  });

  const [subjec, setSubjec] = useState('');
  const [subject, setSubject] = useState('');
  const {name, category, duration} = inputs;

  const level = subjec.value;
  const type = subject.value;
  const closure = 'no'
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const handleChange = (event) => {
    setSubject({value: event.target.value});
  };
  const handleChang = (event) => {
    setSubjec({value: event.target.value});
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        name,
        level,
        category,
        duration,
         closure,
        type,
        teacher,
      };
      const response = await fetch(`${url}/create/course`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
   
      if (response.status === 200) {
        toast.success('Sent Successfully');
        
      } else {
        toast.error('Something is wrong');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper aerq'>
          <div className='card'>
            <div className='row'>
              <div className='card-body'>
                <div className='ml-xl-4 mt-3'>
                  <form className='row g-3' onSubmit={onSubmitForm}>
                    <div className='col-md-6'>
                      <label forhtml='inputEmail4' className='form-label'>
                        Subject
                      </label>
                      <select
                        onChange={handleChange}
                        id='inputState'
                        className='form-select'>
                        <option>Select subject</option>
                        <option value='mathematics'>mathematics</option>
                        <option value='english'>english</option>
                        <option value='kinyarwanda'>kinyarwanda</option>
                        <option value='kiswahili'>kiswahili</option>
                        <option value='geography'>geography</option>
                        <option value='history'>history</option>
                        <option value='religion'>religion</option>
                        <option value='music'>music</option>
                        <option value='literature'>literature</option>
                        <option value='chemistry'>chemistry</option>
                        <option value='physics'>physics</option>
                        <option value='french'>french</option>
                        <option value='ict'>ict</option>
                        <option value='biology'>biology</option>
                      </select>
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputPassword4' className='form-label'>
                        Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(e) => onChange(e)}
                        name='name'
                        id='inputPassword4'
                      />
                    </div>

                    <div className='col-md-6'>
                      <label forhtml='inputCity' className='form-label'>
                        Category hard || easy
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        value={category}
                        onChange={(e) => onChange(e)}
                        name='category'
                        id='inputCity'
                      />
                    </div>
                    <div className='col-md-6'>
                      <label forhtml='inputCity' className='form-label'>
                        Duration
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        value={duration}
                        onChange={(e) => onChange(e)}
                        name='duration'
                        id='inputCity'
                      />
                    </div>

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

                    <button className='btn m-4 btn-primary col-md-3 btn-icon-text'>
                      <i className='bi bi-upload   btn-icon-prepend'></i>
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

export default React.memo(CreateTest);
