import React, {useEffect, useState, useContext} from 'react';
const Messageform = React.lazy(() => import('./Messageform'));

import {TeacherContext} from './context/TeacherContext';
import {format} from 'timeago.js';
import {url} from '../url';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Helmet} from "react-helmet";
function Onemessage({match}) {
  const [message, setMessage] = useState([]);
  const [profile] = useContext(TeacherContext);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/message`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setMessage(parseData.filter((fil) => fil.class_year_content === match.params.id));
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setMessage]);
  const own = profile.map((profil) => profil.teacher_email);

  return (
    <div className='__main'>
           <Helmet>
        <meta name='title' content='college du christ roi' />
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
        <meta name='language' content='EN' />
        <meta name='author' content='Mudacumura brunoblaise' />
        <meta name='creationdate' content='29/07/2020' />
        <meta name='distribution' content='global' />
        <meta name='rating' content='general' />

        <title>Message</title>
      </Helmet>
      <div className='nav'>
        <div className='nav__blocks'></div>
        <div className='nav__blocks'></div>
        <div className='nav__blocks'></div>
      </div>
      <div className='main__chatbody'>
        <div className='main__chatcontent'>
          <div className='content__header'>
            <div className='blocks'>
              <div className='current-chatting-user'>
                <div className='avatar'>
                  <div className='avatar-img'>
                    <LazyLoadImage
                      effect='blur'
                      width='640'
                      height='360'
                      src={`https://avatars.dicebear.com/api/avataaars/${own}.svg`}
                      
                      alt=''
                    />
                  </div>
                  <span className='isOnline active'></span>
                </div>
                <p>Cxr Chat Box</p>
              </div>
            </div>
          </div>
          <div className='content__body'>
            <div className='chat__items'>
              {loading ? (
                <p>loading..</p>
              ) : (
                message.map((chat) => (
                  <div
                    key={chat.message_id}
                    className={
                      chat.message_fname === own[0]
                        ? 'chat__item me'
                        : 'chat__item other'
                    }
                    style={{animationDelay: '0.8s'}}>
                    <div className='chat__item__content'>
                      <div className='chat__msg'>{chat.messages}</div>
                   

                      <div className='chat__meta'>
                        <span>{chat.message_fname}</span>
                        <span>{format(chat.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}

              <div></div>
            </div>
          </div>
          <div className='content__footer'>
            <Messageform classe={match.params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Onemessage);