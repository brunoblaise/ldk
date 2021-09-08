import React, {useEffect, useState, useContext} from 'react';
import lesson from '../images/image.svg';
import {format} from 'timeago.js';
import {url} from '../url';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ProfileContext} from './context/ProfileContext';
function Submis() {
  const [notes, setNote] = useState([]);
  const [profile] = useContext(ProfileContext);
  const own = profile.map((profil) => profil.class_student);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/correct`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData.filter((fil) => fil.class_year_content === own[0]));
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        notes.map((chat) => (
          <div
            key={chat.correct_id}
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
                  <small className='ml-4 text-muted'>
                    <i className='ti-time mr-1'></i>
                    {format(chat.timestamp)}
                  </small>
                </h6>
                <p>{chat.correction}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default React.memo(Submis);
