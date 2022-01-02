import React, {useState, useContext} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';
import {TeacherContext} from './context/TeacherContext';
function Messageform({classe}) {
  const [profile] = useContext(TeacherContext);
  const own = profile.map((profil) => profil.teacher_email);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name] = useState(own[0]);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {message, name, classe};
      const response = await fetch(`${url}/create/message`, {
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
      console.log(err.message);
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
