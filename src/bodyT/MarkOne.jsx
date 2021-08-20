import React, {useEffect, useState, useContext} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {url} from '../url';
import {TeacherContext} from './context/TeacherContext';
function MarkOne({match}) {
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState([]);
  const [profile] = useContext(TeacherContext);
  const [loading, setLoading] = useState(true);
  const getProfile = async () => {
    try {
      const res = await fetch(`${url}/get/test_mark`, {
        method: 'GET',
        headers: {jwt_token: localStorage.token},
      });

      const parseData = await res.json();
      setMessage(
        parseData.filter(
          (fil) =>
            fil.class_year_content === match.params.id &&
            fil.teacher_email === profile[0].teacher_email,
        ),
      );
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className='col-lg-12 grid-margin stretch-card'>
      <div className='card'>
        <div className='card-body'>
          <h1>Today Marks in {match.params.id}</h1>
          <ReactHTMLTableToExcel
            className='btn btn-info'
            table='emp'
            filename='Report'
            sheet='Sheet'
            buttonText='Export'
          />
          <br />
          <br />
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
                <th scope='col'>Email</th>
                <th scope='col'>clas</th>
                <th scope='col'>Marks</th>
              </tr>
            </thead>
            {loading ? (
              <p>loading...</p>
            ) : (
              message
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
                      <td>{note.student_email}</td>
                      <td>{note.class_year_content}</td>
                      <td>{note.test_mark}%</td>
                    </tr>
                  </tbody>
                ))
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
export default React.memo(MarkOne);
