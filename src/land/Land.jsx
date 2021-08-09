import React from 'react'
import { Link } from 'react-router-dom';
import Group5 from '../images/Group5.svg'
import Group1 from '../images/Group1.png'
import Group12 from '../images/Group12.svg'
import Group171 from '../images/Group171.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Land() {
    return (
        <>
        <header id="header-section">
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
    <div className="content-wrapper">
        <div className="container">
            <section className="features-overview" id="features-section">
                <div className="content-header">
                    <h2>How does it works</h2>
                    <h6 className="section-subtitle text-muted">One theme that serves as an easy-to-use operational toolkit<br/>that meets students's needs.</h6>
                </div>
                <div className="d-md-flex justify-content-between">
                    <div className="grid-margin d-flex justify-content-start">
                        <div className="features-width">
                            <LazyLoadImage effect="blur" src={Group12} alt="" width="62" height="61" className="img-icons"/>
                            <h5 className="py-3">Speed<br/>Optimisation</h5>
                            <p className="text-muted">it is fast as light just one blink and ecery thing is done</p>
                            <Link to="#">
                                <p className="readmore-link">Study online</p>
                            </Link>
                        </div>
                    </div>
                   
                    
                    <div className="grid-margin d-flex justify-content-end">
                        <div className="features-width">
                            <LazyLoadImage effect="blur" src={Group5} alt="" width="62" height="61" className="img-icons"/>
                            <h5 className="py-3">Content<br/>Studying</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
                            <Link to="#">
                                <p className="readmore-link">Readmore</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="digital-marketing-service" id="digital-marketing-section">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-7 grid-margin grid-margin-lg-0 aos-init aos-animate" data-aos="fade-right">
                        <h3 className="m-0">We Offer Link Between<br/>Students from Senoir One to Six</h3>
                        <div className="col-lg-7 col-xl-6 p-0">
                            <p className="py-4 m-0 text-muted">Education is the most powerful weapon which you can use to change the world.</p>
                            <p className="font-weight-medium text-muted">Here we offer multiple ways of making education effective <Link to="/library"style={{color:"#6c84ff"}}>Happy Studting</Link></p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0 aos-init aos-animate">
                        <LazyLoadImage  effect="blur" src={Group1} alt="" width="62" height="61" className="img-fluid"/>
                    </div>
                </div>
           
            </section>
          
           
      
        </div>
    </div>
    </>
    )
}

export default  React.memo(Land)
