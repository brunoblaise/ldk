import React, {useEffect, useState, useContext} from 'react';
import {Helmet} from 'react-helmet';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {Link} from 'react-router-dom';
import {url} from '../../url';
import {TeacherContext} from '../context/TeacherContext';
const Turn = React.lazy(() => import('./Turn'));
const Sidebar = React.lazy(() => import('../../sidebar1/Sidebar'));
const Header = React.lazy(() => import('../../header1/Header'));
function Mywork({match}) {
  const [message, setMessage] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [profile] = useContext(TeacherContext);
  const own = profile.map((profil) => profil.teacher_email)[0];
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/tiled`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();

      setMessage(
        parseData.filter(
          (fil) =>
            fil.teacher_email === own || fil.student_email === match.params.id,
        ),
      );
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, [setMessage]);

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
        <div className='content-wrapper'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>
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
                  className='form-control w-100'
                  type='search'
                  placeholder='Search notes'
                  id='Mail-rearch'
                  value={search}
                  name='search'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <table className='table caption-top' id='emp'>
                  <caption>List of my work</caption>
                  <thead>
                    <tr>
                      <th scope='col'>Name</th>

                      <th scope='col'>Type</th>
                      <th scope='col'>Marks</th>
                    </tr>
                  </thead>
                  {loading
                    ? 'loading..'
                    : message
                        .filter((val) => {
                          if (search === '') {
                            return val;
                          } else if (
                            val.notes_title
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return val;
                          }
                        })
                        .map((fil) => (
                          <tbody key={fil.tiled_id}>
                            <tr>
                              <td>{fil.tiled_title}</td>
                              <td>
                                <Link
                                  to={`/work_to_one/${fil.tiled_title}/${fil.student_email}/${fil.teacher_email}/${fil.tiled_id}`}>
                                  {fil.tiled_type}
                                </Link>
                              </td>
                              <Turn
                                id={match.params.id}
                                name={fil.tiled_title}
                                teacher={own}
                              />
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

export default React.memo(Mywork);
