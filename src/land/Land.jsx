import React from 'react'
import { Link } from 'react-router-dom';

import Group171 from '../images/Group171.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Land() {
    return (
        <>
        <header className="header-section">
        <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
            <div className="container">
                <div className="navbar-brand-wrapper d-flex w-100">
                   
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="mdi mdi-menu navbar-toggler-icon"></span>
        </button>
  
                </div>
                <div className="collapse navbar-collapse navbar-menu-wrapper" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-lg-center align-items-start ml-auto">
                        <li className="d-flex align-items-center justify-content-between pl-4 pl-lg-0">
                            
                            <button className="navbar-toggler close-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="mdi mdi-close navbar-toggler-icon pl-5"></span>
            </button>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#header-section">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loginT">Teacher</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div className="banner">
 
        <div className="container">
        <br/>
        <br/>
        <br/>
            <h1 className="font-weight-semibold">A Better way to study now  &<br/>It is just one click.</h1>
            <h6 className="font-weight-normal text-muted pb-3">This Simple is a way where students and teacher connect every easy in this days enjoy </h6>
            <div>
                <button className="btn btn-opacity-light mr-1">Study online</button>
                <button className="btn btn-opacity-success ml-1">Get reports easily</button>
            </div>
            <LazyLoadImage effect="blur" src={Group171} alt=""width="640" height="360" className="img-fluid"/>
        </div>
    </div>
   
       
    
    </>
    )
}

export default  React.memo(Land)
