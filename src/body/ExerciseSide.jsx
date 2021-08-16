import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from './context/ProfileContext';
import {Link} from 'react-router-dom';
import {url} from '../url';
function ExerciseSide() {
  const [profile] = useContext(ProfileContext);
  const [notes, setNote] = useState([]);
  const [search, setSearch] = useState('');
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/exercise`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  ci

  const id = profile.map((profil) => profil.class_student);

  return (
    <>
      <div className='mail-list-container col-md-3 pt-4 pb-4 border-right bg-white'>
        <div className='border-bottom pb-4 mb-3 px-3'>
          <div className='form-group'>
            <input
              className='form-control w-100'
              type='search'
              placeholder='Search exercise'
              id='Mail-rearch'
              value={search}
              name='search'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        {notes
          .filter((val) => {
            if (search === '') {
              return val;
            } else if (
              val.exercise_title.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .slice(0, 5)
          .map((note) => (
            <div key={note.exercise_id} className='mail-list'>
              <div className='form-check'>
                {' '}
                <label className='form-check-label'>
                  {' '}
                  <input type='checkbox' className='form-check-input' />{' '}
                  <i className='input-helper'></i>
                </label>
              </div>

              <Link to={`/exercise/${note.exercise_id}`} className='content'>
                <p className='sender-name'>{note.exercise_title}</p>
                <p className='message_text'>{note.short_exercise}</p>
              </Link>

              <div className='details'>
                <i className='ti-star'></i>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default React.memo(ExerciseSide);
