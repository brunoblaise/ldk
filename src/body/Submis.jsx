import React, {useEffect, useState} from 'react';
import lesson from '../images/image.svg';
import {format} from 'timeago.js';
import {url} from '../url';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Submis() {
  const [message, setMessage] = useState([]);

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/answer`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setMessage(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setMessage]);

  return (
    <>
      {message.map((chat) => (
        <div
          key={chat.answer_id}
          className={
            format(chat.timestamp) === '1 day ago' ? 'hide' : 'profile-feed'
          }>
          <div className='d-flex align-items-start profile-feed-item'>
            <LazyLoadImage
              effect='blur'
              width='640'
              height='360'
              src={lesson}
              alt='profile'
              className='img-sm rounded-circle'
            />
            <div className='ml-4'>
              <h6>
                {chat.student_fname}
                <small className='ml-4 text-muted'>
                  <i className='ti-time mr-1'></i>
                  {format(chat.timestamp)}
                </small>
              </h6>
              <p>{chat.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default React.memo(Submis);
