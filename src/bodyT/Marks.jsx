import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';
function Marks({student}) {
  const [inputs, setInputs] = useState({
    name: '',
    mark: '',
  });
  const email = student;

  const {name, mark} = inputs;
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {email, name, mark};

      const response = await fetch(`${url}/create/mark`, {
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
    <form onSubmit={onSubmitForm}>
      <div className='col-md-6'>
        <div className='card-body'>
          <h4 className='card-title'>Give marks</h4>
          <p className='card-description'>Enter marks here</p>
        </div>
        <input
          type='text'
          className='form-control form-control form-control-lg border-left-0'
          name='name'
          value={name}
          placeholder='name of the work'
          onChange={(e) => onChange(e)}
        />
        <input
          type='text'
          className='form-control form-control form-control-lg border-left-0'
          name='mark'
          value={mark}
          placeholder='mark'
          onChange={(e) => onChange(e)}
        />
      </div>
      <br />
      <button className='btn btn-primary btn-icon-text'>
        <i className='bi bi-upload ti-file menu-icon btn-icon-prepend'></i>
        Submit
      </button>
    </form>
  );
}
export default React.memo(Marks);
