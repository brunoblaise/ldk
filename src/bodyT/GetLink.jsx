import React, {useContext} from 'react';
import {TeacherContext} from './context/TeacherContext';
import {Link} from 'react-router-dom';
function GetLink() {
  const [profile] = useContext(TeacherContext);

  const id = profile.map((profil) => profil.teacher_type);

  return (
      
    <div>
        {id[0] === 'admin' ? <ol className='list-group list-group-numbered'>
        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>Student Link</div>

            <Link>
              <i className='bi bi-plus'></i> Get the link{' '}
            </Link>
            <div className={'card row col-md-18  stretch-card'}>
              https://www.cxrgo.ml/register/WkxCjkrXwg
            </div>
          </div>
        </li>

        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>Teacher Link</div>
            <Link>
              <i className='bi bi-plus'></i> Get the link{' '}
            </Link>
            <div className={'card row col-md-18  stretch-card'}>
              https://www.cxrgo.ml/registerT/WkxCjkrXwg
            </div>
          </div>
        </li>
      </ol>: <div></div> }
      
    </div>
  );
}

export default React.memo(GetLink);
