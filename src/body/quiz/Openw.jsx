import React, {useState, useEffect, useContext} from 'react';
import {toast} from 'react-toastify';
import {url} from '../../url';
import {ProfileContext} from '../context/ProfileContext';
import MathJax from 'react-mathjax'
function Openw({match}) {
  const [counter, setCounter] = useState(120);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const [profile] = useContext(ProfileContext);
  const email = profile.map((profil) => profil.student_email)[0];
  const classe = profile.map((profil) => profil.class_student)[0];
  const name = profile.map((profil) => profil.student_fname)[0];
  const [answer, setAnswer] = useState('');

  const id = profile.map((profil) => profil.class_student);
  const [notes, setNote] = useState([]);
  const teacher = loading ? 'loading' : notes[0].teacher_email;
  let controller = new AbortController();
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/open`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
        signal: controller.signal,
      });

      const parseData = await res.json();

      setNote(
        parseData.filter(
          (fil) =>
            fil.class_year_content === id[0] &&
            fil.test_name === match.params.id,
        ),
      );
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    return () => controller?.abort();
  }, [setNote]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {answer, email, classe, name, teacher};
      const response = await fetch(`${url}/create/answer`, {
        method: 'POST',
        headers: myHeaders,
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
    <>
      <div>
        <div className='container o'>
          <div id='game' className='justify-center flex-column'>
            <div id='hud'>
              <div id='hud-item'>
                <p id='progressText' className='hud-prefix'>
                  Question
                </p>
                <div id='progressBar'>
                  <div id='progressBarFull'></div>
                </div>
              </div>
              <div id='hud-item'>
                <p className='hud-prefix'>Time</p>
                <h1 className='hud-main-text' id='score'>
                  {counter === 0 ? 'over' : counter}
                </h1>
              </div>
            </div>
            <MathJax.Provider>
              <MathJax.Node
                id='question'
                formula={loading ? 'loading' : notes[0].question}
              />
            </MathJax.Provider>
          </div>
        </div>
      </div>
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
                  <button
                    className={counter === 0 ? 'over' : 'btnSendMsg '}
                    id='sendMsgBtn'>
                    <i className='fa fa-paper-plane'></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ul>
      </div>
    </>
  );
}

export default React.memo(Openw);
