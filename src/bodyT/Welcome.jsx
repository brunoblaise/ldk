import React, {useContext} from 'react';
import {TeacherContext} from './context/TeacherContext';
function Welcome() {
  const [profile] = useContext(TeacherContext);

  const date = new Date();
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ];
  return (
    <div className='row'>
      <div className='col-md-12 grid-margin'>
        <div className='row'>
          <div className='col-12 col-xl-8 mb-4 mb-xl-0'>
            {profile.map((profil) => (
              <h3 key={profil.teacher_id} className='font-weight-bold'>
                Welcome Mr/Mrs.{profil.teacher_fname}
              </h3>
            ))}

            <h6 className='font-weight-normal mb-0'>
              All systems are running smoothly!{' '}
            </h6>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='justify-content-end d-flex'>
              <div className='dropdown flex-md-grow-1 flex-xl-grow-0'>
                <button
                  className='btn btn-sm btn-light bg-white dropdown-toggle'
                  type='button'>
                  Today ({day} / {month} / {year})
                  <i
                    style={{position: 'relative', left: '13px'}}
                    className='bi bi-calendar3 menu-icon'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Welcome);
