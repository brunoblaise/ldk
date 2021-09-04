import {TeacherContext} from '../bodyT/context/TeacherContext';
import React, {useContext} from 'react';
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom';
import Ca from '../images/240890812_2673305222962552_4016126827192558575_n.jpg';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Header() {
  const [profile] = useContext(TeacherContext);
  return (
    <nav className='navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row'>
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

        <title>Cxr teacher</title>
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
        <meta property='og:image' content='/cxr.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://cxrgo.ml/' />
        <meta property='twitter:title' content='College du Christ Roi' />
        <meta
          property='twitter:description'
          content='study today from your home and give your students online work or exercise and boost your productivity'
        />
        <meta property='twitter:image' content='/cxr.jpg' />
      </Helmet>
      <div className='text-center navbar-brand-wrapper d-flex align-items-center justify-content-center'>
        <Link to='/dashboardT'>
          <LazyLoadImage
            effect='blur'
            src={Ca}
            alt=''
            width='640'
            height='360'
            className='img-fluid fic'
          />
        </Link>
      </div>
      <div className='navbar-menu-wrapper d-flex align-items-center justify-content-end'>
        <ul className='navbar-nav mr-lg-2'>
          <li className='nav-item nav-search d-none d-lg-block'>
            <div className='input-group'>
              <div
                className='input-group-prepend hover-cursor'
                id='navbar-search-icon'>
                <span className='input-group-text' id='search'>
                  <i className='icon-search'></i>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Welcome to CXR'
              />
            </div>
          </li>
        </ul>
        <ul className='navbar-nav navbar-nav-right'>
          {profile.map((profil) => (
            <li
              key={profil.teacher_id}
              className='nav-item nav-profile avatar-img'>
              <Link to='/profile' className='nav-link'>
                <LazyLoadImage
                  effect='blur'
                  src={`${profil.teacher_photo}`}
                  alt='profile'
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Header);
