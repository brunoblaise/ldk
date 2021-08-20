import React, {useState} from 'react';
import {toast} from 'react-toastify';

import {url} from '../url';

const Header = React.lazy(() => import('../header1/Header'));
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
function CreateTest() {
  const [inputs, setInputs] = useState({
    question: '',
    answers: '',
    email: '',
  });
  const [choicese, setChoicese] = useState(null);
  const [choice, setChoice] = useState(null);
  const [choic, setChoic] = useState(null);
  const [choica, setChoica] = useState(null);
  const [subject, setSubject] = useState('');
  const [subjec, setSubjec] = useState('');
  const {question, answers, email} = inputs;
  const choices = [choicese, choice, choic, choica];
  const name = subject.value;
  const classe = subjec.value;
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
      const body = {name, question, choices, answers, email, classe};
      const response = await fetch(`${url}/create/test`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === '200') {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
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
        <div className='content-wrapper'>
          <form className='row g-3' onSubmit={onSubmitForm}>
            <div className='col-md-6'>
              <label forhtml='inputEmail4' className='form-label'>
                Subject
              </label>
              <select
                onChange={handleChange}
                id='inputState'
                className='form-select'>
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
                Question
              </label>
              <input
                type='text'
                className='form-control'
                value={question}
                onChange={(e) => onChange(e)}
                name='question'
                id='inputPassword4'
              />
            </div>
            <div className='col-12'>
              <label forhtml='inputAddress' className='form-label'>
                Answer
              </label>
              <input
                type='text'
                onChange={(e) => setChoicese(e.target.value)}
                className='form-control'
                id='inputAddress'
              />
            </div>
            <div className='col-12'>
              <label forhtml='inputAddress2' className='form-label'>
                Answer 2
              </label>
              <input
                type='text'
                onChange={(e) => setChoice(e.target.value)}
                className='form-control'
                id='inputAddress2'
              />
            </div>
            <div className='col-12'>
              <label forhtml='inputAddress' className='form-label'>
                Answer 3
              </label>
              <input
                type='text'
                onChange={(e) => setChoic(e.target.value)}
                className='form-control'
                id='inputAddress'
              />
            </div>
            <div className='col-12'>
              <label forhtml='inputAddress2' className='form-label'>
                Answer 4
              </label>
              <input
                type='text'
                onChange={(e) => setChoica(e.target.value)}
                className='form-control'
                id='inputAddress2'
              />
            </div>
            <div className='col-md-6'>
              <label forhtml='inputCity' className='form-label'>
                Correct answer
              </label>
              <input
                type='text'
                className='form-control'
                value={answers}
                onChange={(e) => onChange(e)}
                name='answers'
                id='inputCity'
              />
            </div>
            <div className='col-md-4'>
              <label forhtml='inputState' className='form-label'>
                Email
              </label>
              <input
                type='text'
                className='form-control'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
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

            <button className='btn btn-primary btn-icon-text'>
              <i className='bi bi-upload ti-file menu-icon btn-icon-prepend'></i>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CreateTest);
