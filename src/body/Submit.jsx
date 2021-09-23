import React, {useState, useContext} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';
import {ProfileContext} from './context/ProfileContext';
import {Link} from 'react-router-dom';
function Submit({note, work, wor, wore}) {
  const [inputs, setInputs] = useState({
    title: '',
    written: '',
  });

  const {title, written} = inputs;
  const [profile] = useContext(ProfileContext);
  const own = profile.map((profil) => profil.student_email);
  const type = work === undefined ? note : '' && note === undefined ? work : '';
  const email = wor === undefined ? wore : '' && wore === undefined ? wor : '';
  //console.log(type);
  const onChange = (e) =>
    setInputs({...inputs, [e.target.name]: e.target.value});

  const [name] = useState(own[0]);
  const [open, setOpen] = useState(false);
  const [opene, setOpene] = useState(false);
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        title,
        name,
        email,
        type,
        written,
      };
      const response = await fetch(`${url}/create/tiled`, {
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
    <form className='row g-3' onSubmit={onSubmitForm}>
      {open ? (
        <Link onClick={() => setOpen(false)}>
          <i className='bi bi-plus'></i>Discard the answer
        </Link>
      ) : (
        <Link onClick={() => setOpen(true)}>
          <i className='bi bi-plus'></i>Write answer here{' '}
        </Link>
      )}

      <div className={open ? 'containe ql-editor' : 'containe ql-editor hide'}>
        <div className='form form-stacked sendNewMessage'>
          <div className='col-md-6'>
            <label forhtml='inputCity' className='form-label'>
              title
            </label>
            <input
              type='text'
              className='form-control'
              value={title}
              onChange={(e) => onChange(e)}
              name='title'
              id='inputCity'
            />
          </div>
          <div>
            <textarea
              placeholder='Your answer is needed'
              type='text'
              value={written}
              onChange={(e) => onChange(e)}
              name='written'
              style={{left: '-240px', top: '80px'}}
              className='ql-editor bado'
            />
          </div>
        </div>
        <button
          disabled={opene}
          className='btn m-4 btn-primary col-md-3 btn-icon-text'>
          <i className='bi bi-upload   btn-icon-prepend'></i>
          Submit
        </button>
      </div>
    </form>
  );
}

export default React.memo(Submit);
