import React, {useEffect, useState} from 'react';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import {url} from '../url';
function Notessidebar() {
  const [notes, setNote] = useState([]);
  const [search, setSearch] = useState('');
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/worksub`, {
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


  return (
    <>
      <div className='mail-list-container col-md-3 pt-4 pb-4 border-right bg-white'>
        <div className='border-bottom pb-4 mb-3 px-3'>
          <div className='form-group'>
            <input
              className='form-control w-100'
              type='search'
              placeholder='Search notes'
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
              val.student_fname.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .slice(0, 5)
          .map((note) => (
            <div key={note.subwork_id} className='mail-list'>
              <div className='form-check'>
                {' '}
                <label className='form-check-label'>
                  {' '}
                  <input type='checkbox' className='form-check-input' />{' '}
                  <i className='input-helper'></i>
                </label>
              </div>

              <Link to={`/worksubT/${note.subwork_id}`} className='content'>
                <p className='sender-name'>{note.student_fname}</p>
                <p className='sender-name'>{format(note.timestamp)}</p>
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

export default React.memo(Notessidebar);
