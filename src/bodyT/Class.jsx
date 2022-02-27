import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {url} from '../url';
import {Link} from 'react-router-dom';
const Sidebar = React.lazy(() => import('../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../header1/Header'));
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
function Class({match}) {
  const [message, setMessage] = useState([]);
  const [search, setSearch] = useState('');

  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/Emailsel`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();
      setMessage(
        parseData.filter((fil) => fil.class_student === match.params.id),
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

        <title> {match.params.id} class</title>
      </Helmet>
      <Header />
      <div className='container-fluid page-body-wrapper'>
        <Sidebar />
        <div className='content-wrapper aerq'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title' >
            Signed up Students in {match.params.id}
          </h4>
          <ReactHTMLTableToExcel
            className='btn btn-info'
            table='emp'
            filename={match.params.id}
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
            <caption>List of student</caption>
              <thead>
                <tr>
                  <th scope='col'>
                    Class
                  </th>
                  <th scope='col'>
                    Names
                  </th >
                  <th scope='col'>
                    Email
                  </th>
                  <th scope='col'>
                    Photo
                  </th>
                  <th scope='col'>
                    Gender
                  </th>
                  <th scope='col'>
                    Phone
                  </th>
                  <th scope='col'>
                   Mark
                  </th>
                </tr>
              </thead>
              {message
                .filter((val) => {
                  if (search === '') {
                    return val;
                  } else if (
                    val.student_email
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .slice(0, 15)
                .map((note) => (
                  <tbody key={note.student_email}>
                  <tr>
                  <td >
                        {note.class_student}
                      </td>
                      <td>
                        {note.student_fname}
                        <br />
                        {note.student_lname}
                      </td>
                      <td>
                        {note.student_email}
                      </td>
                      <td>
                        <img src={note.student_photo} alt='' />
                      </td>
                      <td>
                      {note.student_gender}
                      </td>
                      <td >
                        {note.student_phonem}
                      </td>

                      <td>
                        {' '}
                        <Link 
                         to={`/mywork/${note.student_email}`}
                        >
                         Turn in 
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
export default React.memo(Class);
