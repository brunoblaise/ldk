import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from './context/ProfileContext';
import {Link} from 'react-router-dom';
import {url} from '../url';
function Notessidebar() {
  const [profile] = useContext(ProfileContext);
  const [notes, setNote] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const id = profile.map((profil) => profil.class_student);

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/notes`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setNote(parseData.filter((fil) => fil.class_year_content === id[0]));
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

      {loading ? (
        <p>loading...</p>
      ) : (
        notes
          .filter((val) => {
            if (search === '') {
              return val;
            } else if (
              val.notes_title.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .slice(0, 5)
          .map((note) => (
            <div key={note.notes_id} className='list-group'>
              <Link
                className='list-group-item list-group-item-action'
                to={`/notes/${note.notes_id}`}>
                {note.notes_title}
              </Link>
            </div>
          ))
      )}
    </>
  );
}

export default React.memo(Notessidebar);
