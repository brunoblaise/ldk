import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Ca from '../images/240890812_2673305222962552_4016126827192558575_n.jpg';
import {Helmet} from 'react-helmet';
import Group from '../images/blob-scene-haikei.svg';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
function Land() {
  return (
    <>
      <header className='header-section'>
        <Helmet>
          <meta name='title' content='college du christ roi' />
          <meta
            http-equiv='Content-Security-Policy'
            content='upgrade-insecure-requests'
          />
          <meta
            name='keywords'
            content='college du christ roi, nyanza, south province, rwanda, school, website'
          />

          <meta name='language' content='EN' />
          <meta name='author' content='Mudacumura brunoblaise' />
          <meta name='creationdate' content='29/07/2020' />
          <meta name='distribution' content='global' />
          <meta name='rating' content='general' />

          <title>College du Christ Roi</title>
          <meta name='title' content='College du Christ Roi' />
          <meta
            name='description'
            content='study today from your home and give your students online work or exercise and boost your productivity'
          />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://cxrgo.ml/' />
          <meta property='og:title' content='College du Christ Roi' />
          <meta
            property='og:description'
            content='study today from your home and give your students online work or exercise and boost your productivity'
          />
          <meta property='og:image' content='./cxr.jpg' />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://cxrgo.ml/' />
          <meta property='twitter:title' content='College du Christ Roi' />
          <meta
            property='twitter:description'
            content='study today from your home and give your students online work or exercise and boost your productivity'
          />
          <meta property='twitter:image' content='./cxr.jpg' />
        </Helmet>
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

      <div className='banner banner-background'>
        <LazyLoadImage
          effect='blur'
          src={Group}
          alt=''
          width='1300px'
          className='banner-image'
        />
        <div className=''>
          <h1 className='font-weight-semibold banner-move'>
            A Better way to study now & It is just one click.
          </h1>
          <h6 className='font-weight-normal text-muted pb-3 banner-move'>
            This Simple is a way where students and teacher connect very easy
          </h6>
          <div>
            <button className='btn btn-opacity-light mr-1 banner-move'>
              Study online
            </button>
            <button className='btn btn-opacity-success ml-1 banner-move'>
              Get reports easily
            </button>
          </div>
        </div>
      </div>
      <h1 className='pq'>Services that the application offers</h1>
      <div className='row1 row-cols-1 row-cols-md-3 g-4 weq'>
        <div className='col fut'>
          <div className='card h-100'>
            <div className='card-body'>
              <h5 className='card-title '>Communication is made easy</h5>
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

        <ReactPlayer
          width='300px'
          height='100px'
          url='https://www.youtube.com/watch?v=0Xw-kIknJGg'
          className='video_land'
          controls
        />
      </div>
    </>
  );
}

export default React.memo(Land);
