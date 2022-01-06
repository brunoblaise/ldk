import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from '../context/ProfileContext';
import jsPDF from 'jspdf';
import {toast} from 'react-toastify';
import {url} from '../../url';

const Modal = React.lazy(() => import('./Modal'));
import {Link} from 'react-router-dom';
function End({results, data, nameu, datas}) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [profile] = useContext(ProfileContext);
  const [email] = useState(profile[0].student_email);
  const [name] = useState('closed question');
  const [written] = useState('Great work');
  const [teacher] = useState(datas.teacher_email);
  const [open, setOpen] = useState(false);
  const mark = Math.floor((correctAnswers / data.length) * 100);
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].test_answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);

  const generatePdf = () => {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.querySelector('#contentp'), {
      callback: function (pdf) {
        pdf.save('certificate.pdf');
      },
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('jwt_token', localStorage.token);

      const body = {mark, name, email, teacher, written};
      const response = await fetch(`${url}/create/mark_feed`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      });
      setOpen(true);
      if (response.status === 500) {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
        setOpen(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  

  return (
    <>
      <button
        className={data[0].test_certificate === 'no' ? 'hide' : 'btn btn-info'}
        onClick={generatePdf}>
        download your certificate
      </button>
      <form onSubmit={onSubmitForm}>
        <div className='containerp' id='contentp'>
          <div className='logop'>College du Christ Roi</div>

          <div className='marquee'>
            Certificate of Completion
            <p>
              {correctAnswers} of {data.length}
            </p>
            <strong>{mark}%</strong>
          </div>

          <div className='assignment'>This certificate is presented to</div>

          <div className='person'>{profile[0].student_fname}</div>

          <div className='reason'>
            for finishing the test given by his or her Teacher in {nameu}
          </div>
        </div>
        <button
          disabled={open}
          className='btnSendMsg btn btn_info yur'
          id='sendMsgBtn'>
          <i className='fa fa-paper-plane'></i>
          save your marks
        </button>
      </form>
      <Link to='/dashboard'>continue to Dashboard</Link>
      <Modal results={results} data={data} />
    </>
  );
}

export default React.memo(End);
