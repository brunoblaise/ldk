import React, {useState, useContext} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {url} from '../../url';
import {TeacherContext} from '../../bodyT/context/TeacherContext';
const Header = React.lazy(() => import('../../header1/Header'));
const Sidebar = React.lazy(() => import('../../sidebar1/Sidebar'));
function Openq() {
  const [inputs, setInputs] = useState({
    question: '',
  });
  const [profile] = useContext(TeacherContext);
  const own = profile.map((profil) => profil.teacher_email);
  const [email] = useState(own[0]);
  const [subject, setSubject] = useState('');
  const [subjec, setSubjec] = useState('');
  const {question} = inputs;

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
      const body = {
        name,
        question,
        email,
        classe,
      };
      const response = await fetch(`${url}/create/open`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.status === 500) {
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
            <div className='col-md-6 container'>
              <div
                className='form form-stacked sendNewMessage'
                style={{position: 'relative', right: '30px'}}>
                <div className='form-block'>
                  <label className='label' htmlFor='board_content'>
                    Question
                  </label>
                  <div className='form-controls' style={{width: '460px'}}>
                    <span
                      className='button'
                      title='Strong <strong>'
                      data-button-type='addStrong'>
                      <strong>Enjoy</strong>
                    </span>
                    <span
                      className='button'
                      title='Emphasis <em>'
                      data-button-type='addEmphasis'>
                      <strong>
                        <em>Good work</em>
                      </strong>
                    </span>
                  </div>
                  <textarea
                    placeholder='Your question is needed'
                    type='text'
                    value={question}
                    onChange={(e) => onChange(e)}
                    name='question'
                    className='textarea-tall'
                    id='board_content'></textarea>
                </div>
              </div>
            </div>
            <button className='btn btn-primary btn-icon-text'>
              <i className='bi bi-upload ti-file menu-icon btn-icon-prepend'></i>
              Submit
            </button>
          </form>
          <br />
          <br />
          <Link to='/create/room/test'>Add other question</Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Openq);
