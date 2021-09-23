import React, {useState, useEffect, useContext} from 'react';
import {toast} from 'react-toastify';
import {url} from '../../url';
import {ProfileContext} from '../context/ProfileContext';
import MathJax from 'react-mathjax';
function Openw({match}) {
  const [counter, setCounter] = useState(120);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const [profile] = useContext(ProfileContext);
  const name = profile.map((profil) => profil.student_email)[0];

  const [written, setAnswer] = useState('');
  const [title, setTitled] = useState('');
  const id = profile.map((profil) => profil.class_student);
  const type = 'quiz';
  const [notes, setNote] = useState([]);

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

  const email = loading ? 'loading' : notes[0].teacher_email;
  const [open, setOpen] = useState(false);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {title, name, email, type, written};
      const response = await fetch(`${url}/create/tiled`, {
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
                className='question'
                id='question'
                formula={loading ? 'loading' : notes[0].question}
              />
            </MathJax.Provider>
          </div>
        </div>
      </div>
      <div className='containe ql-editor'>
        <ul>
          <form onSubmit={onSubmitForm}>
            <div className='thumb'>
              <i className='ti-image'></i>
            </div>
            <div className='col-md-6' style={{left: '325px', top: '-38px'}}>
              <label forhtml='inputCity' className='form-label'>
                title
              </label>
              <input
                type='text'
                className='form-control'
                value={title}
                onChange={(e) => setTitled(e.target.value)}
                name='title'
                id='inputCity'
              />
            </div>
            <div className='containe moviee'>
              <div className='form form-stacked sendNewMessage'>
                <div className='ql-editor '>
                  <div></div>
                  <textarea
                    placeholder='Your answer is needed'
                    name='answer'
                    value={written}
                    onChange={(e) => setAnswer(e.target.value)}
                    className='ql-editor bado eh'
                    id='board_content'></textarea>
                  <button
                    disabled={open}
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
