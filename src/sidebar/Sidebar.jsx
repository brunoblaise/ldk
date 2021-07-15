import React from 'react'
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function Sidebar({setAuth}) {
  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <li className="nav-item active">
                <Link className="nav-link" to ="/dashboard">
      <i className="bi bi-dash-square-dotted menu-icon"></i>
      <span className="menu-title menu-icon">Dashboard</span>
    </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/profile" >
      <i className="bi bi-cpu  menu-icon" ></i>
      <span className="menu-title">Profile</span>
    </Link>
            </li>

         
     
      
            
            <li className="nav-item">
                <Link className="nav-link" to="/library">
      <i className="bi bi-book menu-icon"></i>
      <span className="menu-title">Library</span>
    </Link>
            </li>    


            
            <li className="nav-item">
                <Link className="nav-link" to="/message" >
      
      <i className="bi bi-chat-square-dots menu-icon"></i>
      <span className="menu-title">Message</span>
    </Link>
            </li>    



            
            <li className="nav-item">
                <Link className="nav-link" to="/notes">
      <i className="bi bi-journals menu-icon"></i>
      <span className="menu-title">Notes</span>
    </Link>
            </li>    



            
            <li className="nav-item">
                <Link className="nav-link" to="/exercise" >
      <i className="bi bi-file-earmark-spreadsheet-fill menu-icon"></i>
      <span className="menu-title">Exercise</span>
    </Link>
            </li>    



            
            <li className="nav-item">
                <Link className="nav-link" to="/works">
      <i className="bi bi-hexagon-fill menu-icon"></i>
      <span className="menu-title">Works</span>
    </Link>
            </li>    

            <li className="nav-item">
                <Link className="nav-link" to="/worksub">
                <i className="bi bi-app-indicator  menu-icon"></i>

      <span className="menu-title">Work Sub</span>
    </Link>

    
            </li>    

            <li className="nav-item">
                <Link className="nav-link" to="/report">
                <i className="bi bi-award menu-icon"></i>

      <span className="menu-title">Report</span>
    </Link>

    
            </li> 
      
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
            <li className="nav-item active" onClick={e => logout(e)}>
                <Link className="nav-link" to="/">
      <i className="bi bi-box-arrow-left  menu-icon"></i>
      <span className="menu-title">Log out</span>
    </Link>
            </li>
        </ul>

        
    </nav>
    )
}

export default Sidebar
