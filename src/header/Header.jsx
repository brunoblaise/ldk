import { ProfileContext } from "../body/context/ProfileContext";
import React, {  useContext } from "react";
import mini from "../images/logo-mini.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Header() {
  const [profile] = useContext(ProfileContext)
  
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link to="/dashboard" className="navbar-brand brand-logo-mini" ><LazyLoadImage effect="blur" src={mini}alt="logo"/></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
       
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Welcome to CXR"  />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
            {profile.map(profil =>(
                    <li key={profil.student_id} className="nav-item nav-profile avatar-img">
                        <Link to="/profile" className="nav-link">
              <LazyLoadImage effect="blur"  src={`${profil.student_photo}`} alt="profile"/>
           
                                              
            </Link>
                    
                    </li>
            ))}
                </ul>
           
            </div>
        </nav>
    )
}

export default  React.memo(Header);