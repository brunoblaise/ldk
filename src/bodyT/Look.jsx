import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {url} from '../url';
import {Link} from 'react-router-dom';
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../header1/Header'));
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function Look({}) {
  const [message, setMessage] = useState([]);
  const [search, setSearch] = useState('');

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/newStudent`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();
      setMessage(
        parseData,
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  message.filter((el, index) => message.indexOf(el) === index);

  return (
    <div className='col-lg-12 grid-margin stretch-card'>
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

        <title> New Student</title>
      </Helmet>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>
                Signed up  New Students 
              </h4>
              <ReactHTMLTableToExcel
                className='btn btn-info'
                table='emp'
                filename={'new students'}
                sheet='Sheet'
                buttonText='Export'
              />
              <div className='table-responsive pt-3'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search'
                  aria-controls='order-listing'
                  value={search}
                  name='search'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <table className='table caption-top' id='emp'>
                  <caption>List of New students</caption>
                  <thead>
                    <tr>
                      <th scope='col'>Names</th>
                      <th scope='col'>Gender</th>

                      <th scope='col'>Email</th>
                      <th scope='col'>Phone</th>
                      <th scope='col'>Class</th>
                    </tr>
                  </thead>
                  {message
                    .filter((val) => {
                      if (search === '') {
                        return val;
                      } else if (
                        val.student_fname.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return val;
                      }
                    })
            
                    .map((note) => (
                      <tbody key={note.email}>
                        <tr>
                          <td>{note.student_fname}</td>
                          <td>{note.gender}</td>
                          <td>{note.email}</td>
                          <td>{note.phone}</td>
                          <td>{note.class_student}</td>

                          <td>
                            {' '}
                            <Link to={`/look/${note.new_student_id}`}>
                              Look
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Look);
