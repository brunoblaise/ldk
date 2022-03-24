import React, {useEffect, useState, useContext} from 'react';
import {ProfileContext} from '../context/ProfileContext';
import jsPDF from 'jspdf';
import {toast} from 'react-toastify';
import {url} from '../url';

const Start = React.lazy(() => import('./Start'));
import {Link} from 'react-router-dom';

function End({results, data, datas}) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
 
  
  const [name] = useState('bruno');
  const [written] = useState('Great work');
 
  const [open, setOpen] = useState(false);
  const mark = Math.floor((correctAnswers / data.length) * 100);
  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].challenge_answer) {
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

 

  return (
    <>
      <button
        className={'btn btn-info'}
        onClick={generatePdf}>
        download your certificate
      </button>
      <form onSubmit={onSubmitForm}>
        <div className='containerp' id='contentp'>
          <div className='logop'>BR Community</div>

          <div className='marquee'>
            Certificate of Completion
            <p>
              {correctAnswers} of {data.length}
            </p>
            <strong>{mark}%</strong>
          </div>

          <div className='assignment'>This certificate is presented to</div>

          <div className='person'>{name}</div>

          <div className='reason'>
            for finishing the challenge
          </div>
        </div>
        
      </form>
  
      <Start results={results} data={data} />
    </>
  );
}

export default React.memo(End);