import React, {useState, useContext} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';
import {ProfileContext} from './context/ProfileContext';
function Messageform({classe}) {
  const [profile] = useContext(ProfileContext);
  const own = profile.map((profil) => profil.student_email);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name] = useState(own[0]);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('message', message);
      formData.append('name', name);
      formData.append('classe', classe);

      const myHeaders = new Headers();
      myHeaders.append('jwt_token', localStorage.token);
      const response = await fetch(
        `${url}/create/message`,

        {
          method: 'POST',
          body: formData,
          headers: myHeaders,
        },
      );
      setOpen(true);
      if (response.status === 500) {
        toast.error('Fill the required one');
      } else {
        toast.success('Sent Successfully');
        setOpen(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className='sendNewMessage'>
        <textarea
          type='text'
          className='messageInput textarea'
          placeholder='Type a message here'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button disabled={open} className='btnSendMsg' id='sendMsgBtn'>
          <i className='fa fa-paper-plane'></i>
        </button>
      </div>
 
    </form>
  );
}

export default React.memo(Messageform);
