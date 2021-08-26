import React from 'react';
import {Link} from 'react-router-dom';

import Group171 from '../images/Group171.svg';
import Ca from '../images/Capture-removebg-preview.png';

import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Land() {
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
                  <Link className='nav-link' to='#header-section'>
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
      <div className='banner'>
        <div className='container'>
          <br />
          <br />
          <br />
          <h1 className='font-weight-semibold'>
            A Better way to study now &<br />
            It is just one click.
          </h1>
          <h6 className='font-weight-normal text-muted pb-3'>
            This Simple is a way where students and teacher connect very easy
          </h6>
          <div>
            <button className='btn btn-opacity-light mr-1'>Study online</button>
            <button className='btn btn-opacity-success ml-1'>
              Get reports easily
            </button>
          </div>
          <LazyLoadImage
            effect='blur'
            src={Group171}
            alt=''
            width='640'
            height='360'
            className='img-fluid'
          />
        </div>
      </div>
      <h1 className='pq'>Services that the application offers </h1>
      <div className='row row-cols-1 row-cols-md-3 g-4 weq'>
        <div className='col fut'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>Communication is made easy</h5>
              <p className='card-text'>
                What do we mean that communication is made easy. Listen to this
                careful we offer video chat and place of announcement of all
                events and teacher and student are able to give their opinion
              </p>
            </div>
          </div>
        </div>

        <div className='col fut'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>
                Speed of the application is our main concern
              </h5>
              <p className='card-text'>
                We make sure, you don't waste your time just in matter of blink.
                your web app is ready for use
              </p>
            </div>
          </div>
        </div>

        <div className='col fut'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>Protection</h5>
              <p className='card-text'>
                This is our main priority is the protection of your data we make
                sure no one can access our application without being authorized
              </p>
            </div>
          </div>
        </div>

        <div className='col fut'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title'>
                We offer other varieties of service
              </h5>
              <p className='card-text'>
                These include: quiz given to student, exercise, work, notes and
                Smart class for explanation of notes and other much more
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Land);
