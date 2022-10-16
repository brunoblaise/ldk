import React from 'react';
import {Link} from 'react-router-dom';
import Form from '../land/Form';


function Footer() {
  return (
    <div>
      <footer className='footer-03 pushdown'>
        <div class='custom-shape-divider-bottom-1640345171'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              class='shape-fill'></path>
          </svg>
        </div>
        <div className='bor'>
          <div className='row'>
            <div className='col-md-6 '>
              <div className='row mart'>
                <div className='col-md-4 mb-md-0 mb-4'>
                  <h2 className='footer-heading'>Pages</h2>
                  <ul className='list-unstyled'>
                    <li>
                      <Link to='/' className='py-1 d-block'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to='/login' className='py-1 d-block'>
                        Student
                      </Link>
                    </li>
                    <li>
                      <Link to='/loginT' className='py-1 d-block'>
                        Teacher
                      </Link>
                    </li>
                    <li>
                      <Link to='/new/register' className='py-1 d-block'>
                        New comer
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-md-4 mb-md-0 mb-4'>
                  <h2 className='footer-heading'>Goals</h2>
                  <ul className='list-unstyled'>
                    <li>
                      <a href='#' className='py-1 d-block'>
                        To teach
                      </a>
                    </li>
                    <li>
                      <a href='#' className='py-1 d-block'>
                        To study
                      </a>
                    </li>
                    <li>
                      <a href='#' className='py-1 d-block'>
                        To learn
                      </a>
                    </li>
                    <li>
                      <a href='#' className='py-1 d-block'>
                        To innovate
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-md-4 mb-md-0 mb-4'>
                  <h2 className='footer-heading'>Mission</h2>
                  <ul className='list-unstyled'>
                    <li>
                      <a href='#' className='py-1 d-block'>
                        To create
                      </a>
                      <li>
                        <a href='#' className='py-1 d-block'>
                          To help our mates
                        </a>
                      </li>
                      <li>
                        <a href='#' className='py-1 d-block'>
                          To solve problems
                        </a>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className=''>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
