import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import {url} from '../../url';

function Givem({match}) {
  const [correction, setAnswer] = useState('');
  const [notes, setNote] = useState([]);
  const [umark, setUnmark] = useState('');
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/answer`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData.filter((fil) => fil.student_email === match.params.id));
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  const classe = loading ? 'loading' : notes[0].class_year_content;
  useEffect(() => {
    getProfile();
  }, []);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = {umark};
      const response = await fetch(
        `${url}/create/test_mark/${match.params.mark}`,
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        },
      );
      if (response.status === 500) {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {correction, classe};
      const response = await fetch(`${url}/create/correct`, {
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
    <div>
      <div className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                  <div className='ml-xl-4 mt-3'>
                    <i className='bi bi-lightbulb-fill menu-icon'></i>
                    <br />

                    <br />
                    <p className='card-title'>Answer</p>
                    {loading ? (
                      <p>loading...</p>
                    ) : (
                      notes.map((fil) => (
                        <div className='mb-2 mb-xl-0'>{fil.answer}</div>
                      ))
                    )}
                  </div>
                  <br />
                  <br />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control '
                    id='exampleInputEmail1'
                    placeholder='new marks'
                    name='umark'
                    onChange={(e) => setUnmark(e.target.value)}
                  />
                </div>
                <button
                  className='btn btn-info'
                  onClick={(e) => updateDescription(e)}>
                  save mark
                </button>
              </div>
            </div>
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
                    Correct Answer
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
                    placeholder='Your correct answer is needed'
                    name='correct'
                    value={correction}
                    onChange={(e) => setAnswer(e.target.value)}
                    className='textarea-tall'
                    id='board_content'></textarea>
                  <button className='btnSendMsg ' id='sendMsgBtn'>
                    <i className='fa fa-paper-plane'></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Givem);
