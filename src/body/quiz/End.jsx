import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from '../context/ProfileContext';
import jsPDF from 'jspdf';
import {toast} from 'react-toastify';
import {url} from '../../url';
import Modal from './Modal';
import {Link} from 'react-router-dom';
function End({results, data, nameu, datas}) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [profile] = useContext(ProfileContext);
  const [name] = useState(profile[0].student_email);
  const [email] = useState(datas.teacher_email);
  const [classe] = useState(profile[0].class_student);
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

      const body = {name, mark, email, classe};
      const response = await fetch(`${url}/create/test_mark`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      if (response.status === 500) {
        toast.error('Something is wrong');
      } else {
        toast.success('Sent Successfully');
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button  className={data[0].test_certificate === 'no' ? 'hide' : 'btn btn-info'} onClick={generatePdf}>
        download your certificate
      </button>
      <form onSubmit={onSubmitForm} > 
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
        <button className='btnSendMsg btn btn_info yur' id='sendMsgBtn'>
          <i className='fa fa-paper-plane'></i>
          save your marks
        </button>
      </form>
    <Link to="/dashboard">continue to Dashboard</Link>
      <Modal results={results} data={data} />
    </>
  );
}

export default React.memo(End);
