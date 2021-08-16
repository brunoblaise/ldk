import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {url} from '../url';
function ExerciseForm() {
  const [answer, setAnswer] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {answer};
      const response = await fetch(`${url}/create/answer`, {
        method: 'POST',
        headers: myHeaders,
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
    <div className='attachments-sections'>
      <ul>
        <form onSubmit={onSubmitForm}>
          <div className='thumb'>
            <i className='ti-image'></i>
          </div>
          <div className='container'>
            <div
              className='form form-stacked sendNewMessage'
              style={{position: 'relative', right: '30px'}}>
              <div className='form-block'>
                <label className='label' htmlFor='board_content'>
                  Answer
                </label>
                <div className='form-controls' style={{width: '540px'}}>
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
                  placeholder='Your answer is needed'
                  name='answer'
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className='textarea-tall'
                  id='board_content'></textarea>
                <button className='btnSendMsg' id='sendMsgBtn'>
                  <i className='fa fa-paper-plane'></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </ul>
    </div>
  );
}

export default React.memo(ExerciseForm);
