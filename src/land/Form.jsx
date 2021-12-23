import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';
function Form() {
  const [open, setOpen] = useState(false);
  const [massage, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {massage, email};
      const response = await fetch(`${url}/emailtome`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      });
      setOpen(true);
      if (response.status === 500) {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
        setOpen(false);
      }
    } catch (err) {
      console.error(err.massage);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmitForm} className='row g-3 sendNewMessage'>
        <div className='col-md-6'>
          <input
            type='text'
            className='form-control border'
            placeholder='Enter email address'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='col-md-10'>
          <textarea
            className='form-control'
            placeholder='If you have any question or a suggestion tell us here thank you'
            name='massage'
            value={massage}
            onChange={(e) => setMessage(e.target.value)}
            style={{height: '140px'}}></textarea>
          <br />
          <button disabled={open} className='btnSendMsg' id='sendMsgBtn'>
            <i className='fa fa-paper-plane'></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(Form);
