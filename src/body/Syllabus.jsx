import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from './context/ProfileContext';
import {Link} from 'react-router-dom';
import {url} from '../url';

;
const Sidebar = React.lazy(() => import('../sidebar/Sidebar'));
const Header = React.lazy(() => import('../header/Header'));

function Syllabus() {
  const [profile] = useContext(ProfileContext);
  const [notes, setNote] = useState([]);

  const [loading, setLoading] = useState(true);
  const id = profile.map((profil) => profil.class_student);

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/syllabus`, {
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
    <div className='App'>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='main-panel'>
          <div className='content-wrapper'>
            <div className='container overflow-hidden'>
              <div className='row g-2'>
  

              
                {loading ? 
        <p>loading...</p> : notes.map(note =>(
          <Link className='col-6'>
          <div className='p-3 border bg-light'>
            {' '}
            <img
              src={`https://avatars.dicebear.com/api/initials/${note.title}.svg`}
              alt='avatar'
              width='100px'
              height='100px'
            />
            <div>
              <p>{note.title}</p>
            </div>
          </div>
        </Link>
        ))
     }
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Syllabus);
