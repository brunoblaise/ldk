import React from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Ca from '../images/240890812_2673305222962552_4016126827192558575_n.jpg';
import {Helmet} from 'react-helmet';
import Group from '../images/blob-scene-haikei (1).svg';
import gto from '../images/1494937585_b30a9665.jpg';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import Form from './Form';

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
      <div className='banner banner-background'>
        <LazyLoadImage
          effect='blur'
          src={Group}
          alt=''
          height='793px'
          width='1280px'
          className='banner-image'
        />
        <div className=''>
          <h1 className='font-weight-semibold banner-move'>
            A Better way to study now & It is just one click.
          </h1>
          <h6 className='font-weight-normal text-muted pb-3 banner-move'>
            This is Simple way where students and teacher connect very easy
          </h6>
          <div>
            <button className='btn btn-opacity-light mr-1 banner-move'>
              Study online
            </button>
            <button className='btn btn-opacity-success ml-1 banner-move'>
              Get reports easily
            </button>
          </div>
          <Link to='/new/register' className='btn-track'>
            <div className='--icon'>
              <div className='circle-inner'></div>
              <div className='circle-outer'></div>
              <svg width='24' height='24' viewBox='0 0 24 24' id='box'>
                <path d='M0 6L5 0H19L24 6V11H0V6Z' fill='#FDDDB3' />
                <path
                  d='M0.835938 5L5 0H11.5L10 5H0.835938ZM12.5 0L14 5H23.1667L19 0H12.5ZM0 22.5V6H10V10.5L12 9.5L14 10.5V6H24V22.5C24 23.3284 23.3284 24 22.5 24H1.5C0.671573 24 0 23.3284 0 22.5Z'
                  fill='#B39056'
                />
                <rect
                  x='6'
                  y='13'
                  width='12'
                  height='3'
                  rx='0.25'
                  fill='white'
                />
              </svg>
              <svg width='10' height='14' viewBox='0 0 10 14' id='pin'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5 14C6.5 14 10 8.5 10 5C10 1.5 7.76142 0 5 0C2.23858 0 0 1.5 0 5C0 8.5 3.5 14 5 14ZM4.99998 7.5C6.38069 7.5 7.49998 6.38071 7.49998 5C7.49998 3.61929 6.38069 2.5 4.99998 2.5C3.61927 2.5 2.49998 3.61929 2.49998 5C2.49998 6.38071 3.61927 7.5 4.99998 7.5Z'
                  fill='#DE6D56'
                />
              </svg>
            </div>
            <div className='--text'>New Student</div>
          </Link>
        </div>
      </div>
      <h1 className='pq'>Services in the platform</h1>
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
                Smart className for explanation of notes and other much more
              </p>
            </div>
          </div>
        </div>

        <ReactPlayer
          width='300px'
          height='100px'
          url='https://www.youtube.com/watch?v=0Xw-kIknJGg'
          className='video_land'
          autoPlay={true}
          controls
        />
      </div>
      <div>
        <h2 className='pb-5 pt-4 pl-4'>
          It's not about the platform but the quality of education we as student
          are offered
        </h2>
        <div className='container ml-4 closer'>
          <div className='row align-items-center connecting-lines d-flex'>
            <div className='col-2 text-center bottom d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>
                <i className='fa fa-check'></i>
              </div>
            </div>
            <div className='col-6'>
              <h4 className='uw'>Discipline</h4>
              <p>
                Why is discipline important? Discipline teaches us to operate by
                principle rather than desire. Saying no to our impulses (even
                the ones that are not inherently sinful) puts us in control of
                our appetites rather than vice versa. It deposes our lust and
                permits truth, virtue, and integrity to rule our minds instead.
              </p>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner top-right'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner left-bottom'></div>
            </div>
          </div>

          <div className='row align-items-center justify-content-end connecting-lines d-flex'>
            <div className='col-6 text-right'>
              <h4 className='uw'>Education</h4>
              <p className='uw'>
                Educating the mind without educating the heart is no education
                at all. That is what differentiate us from the rest, that is why
                we are the best in every thing we do no matter how difficult we
                always find a way
              </p>
            </div>
            <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>
                <i className='fa fa-check'></i>
              </div>
            </div>
          </div>

          <div className='row timeline'>
            <div className='col-2'>
              <div className='corner right-bottom'></div>
            </div>
            <div className='col-8'>
              <hr />
            </div>
            <div className='col-2'>
              <div className='corner top-left'></div>
            </div>
          </div>

          <div className='row align-items-center connecting-lines d-flex'>
            <div className='col-2 text-center top d-inline-flex justify-content-center align-items-center'>
              <div className='circle font-weight-bold'>
                <i className='fa fa-check'></i>
              </div>
            </div>
            <div className='col-6'>
              <h4 className='uw'>Inspiration</h4>
              <p className='uw'>
                Our inspiration comes from the hard work our teachers do, they
                educated us to be come the best versions of ourselves
              </p>
            </div>
          </div>
        </div>
        <LazyLoadImage
          style={{position: 'relative', left: '663px', top: '-136px'}}
          effect='blur'
          src={gto}
          alt=''
          width='630px'
          className='banner-image'
        />
      </div>
      <footer className='footer-03'>
      <div className="custom-shape-divider-top-1637157769">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
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
                      <Link to='/home' className='py-1 d-block'>
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
                <Form/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default React.memo(Land);
