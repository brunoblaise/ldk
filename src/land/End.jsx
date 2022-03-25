import React, {useEffect, useState, useContext} from 'react';

import jsPDF from 'jspdf';
import {toast} from 'react-toastify';
import {url} from '../url';
import {Helmet} from 'react-helmet';
const Start = React.lazy(() => import('./Start'));
const  Registe = React.lazy(() => import('../Newstyudenty/Registe'));
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Ca from '../images/240890812_2673305222962552_4016126827192558575_n.jpg';

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
         <header className='header-section'>
         <nav className='navbar navbar-expand-lg pl-3 pl-sm-0' id='navbar'>
          <Link to='/'>
            <LazyLoadImage
              effect='blur'
              src={Ca}
              alt=''
              width='640'
              height='360'
              className='img-fluid cap'
            />
          </Link>
          <div className='container'>
            <div className=' navbar-menu-wrapper' id='navbarSupportedContent'>
              <ul className='navbar-nav align-items-lg-center align-items-start ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Student
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/loginT'>
                    Teacher
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  
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

        <title>NEW Contestor REGISTRATION </title>
      </Helmet>
      <button
        className={'btn btn-info'}
        onClick={generatePdf}>
        download your certificate
      </button>
      <form>
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

      <Registe/>
    </>
  );
}

export default React.memo(End);