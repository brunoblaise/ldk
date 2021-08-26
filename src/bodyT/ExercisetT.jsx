import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';

function ExerciseT() {
  const [inputs, setInputs] = useState({
    title: '',
    summary: '',
  });
  const [subjec, setSubjec] = useState('');
  const classe = subjec.value;
  const {title, summary} = inputs;
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {classe, title, summary};
      const response = await fetch(`${url}/create/exercises`, {
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
  const handleChang = (event) => {
    setSubjec({value: event.target.value});
  };

  return (
    <div className='col-12 grid-margin'>
      <div className='card'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card-body'>
              <h4 className='card-title'>Submit your exercise here </h4>
              <div className='template-demo'>
                <p className='card-description'>
                  here you will submit you work with the button upload
                </p>
              </div>

              <form onSubmit={onSubmitForm} className='template-demo'>
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
                </select>{' '}
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='exampleInputEmail1'
                  placeholder='Title'
                  name='title'
                  value={title}
                  onChange={(e) => onChange(e)}
                />
                <textarea
                  type='text'
                  className='form-control form-control-lg'
                  id='exampleInputEmail1'
                  placeholder='Summary'
                  name='summary'
                  value={summary}
                  onChange={(e) => onChange(e)}
                />
                <button className='btn btn-primary btn-icon-text'>
                  <i className='bi bi-upload ti-file menu-icon btn-icon-prepend'></i>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(ExerciseT);
