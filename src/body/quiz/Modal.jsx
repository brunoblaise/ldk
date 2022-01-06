import React, {useState, useEffect, useContext} from 'react';
import {ProfileContext} from '../context/ProfileContext';
import {Link} from 'react-router-dom';
import {url} from '../../url';
import {useParams} from 'react-router-dom';
const Modal = ({results, data}) => {
  const {id: documentId} = useParams();
  const [profile] = useContext(ProfileContext);
  const [notes, setNote] = useState([]);
  const id = profile.map((profil) => profil.class_student);
  let controller = new AbortController();
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/open`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
        signal: controller.signal,
      });

      const parseData = await res.json();

      setNote(
        parseData.filter(
          (fil) =>
            fil.class_year_content === id[0] &&
            fil.test_name === documentId,
        ),
      );
     
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    return () => controller?.abort();
  }, [setNote]);

  
  return (
    <div className='activer'>
      <div className='background'></div>
      <div className='card'>
        <header className='card-head'>
          <p className='card-title'>Your answers</p>
        </header>
        <section className='card-body flex0 content'>
          <ul>
            {results.map((result, i) => (
              <li key={i} className='mb-6'>
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].test_answer
                      ? 'btn btn-success has-text-white p-2'
                      : 'btn btn-danger has-text-white p-2'
                  }>
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].test_answer ? (
                  <p className='btn btn-success has-text-white p-2'>
                    Correct answer: {data[i].test_answer}
                  </p>
                ) : (
                  <p>All correct</p>
                )}
              </li>
            ))}
            {notes.length > 0 ? (
              <Link to={`/open/${documentId}`}>continue to open questions</Link>
            ): (
              <Link to='/'>there is no open questions</Link>
            )}
            
          </ul>
        </section>
      </div>
    </div>
  );
};

export default React.memo(Modal);
