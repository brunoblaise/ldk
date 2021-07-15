import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"

import { TeacherContext} from "./context/TeacherContext";
function ProfileT({setAuth}) {
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
 
   const [profile] = useContext(TeacherContext)
  
    return (
        
        <div>
            
            <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                  
                                    <div className="row">
                                    {profile.map(profil =>( 
                                        <div key={profil.teacher_id}className="col-lg-4">
                                            <div className="border-bottom text-center pb-4">
                                                <img src={`http://localhost:5000/uploads/${profil.teacher_photo}`}alt="profile" className="img-lg rounded-circle mb-3" />
                                                <div className="mb-3">
                                                    <h3>{profil.teacher_fname}</h3>
                                                   
                                                </div>
                                                <p className="w-75 mx-auto mb-3">{profil.teacher_bio} </p>
                                                <div className="d-flex justify-content-center">
                                                    <Link className="btn btn-success mr-1"  to="/dashboardT">Home</Link>
                                                    <button className="btn btn-success mr-1"  onClick={e => logout(e)}>Logout</button>
                                                </div>
                                            </div>
                                           
                                         
                                            <div className="py-4">
                             
                     
                                       
                                                <p className="clearfix">
                                                    <span className="float-left">
                            Mail
                          </span>
                                                    <span className="float-right text-muted">
                           {profil.teacher_email}
                          </span>
                                                </p>
                                                <p className="clearfix">
                                                    <span className="float-left">
                           Age
                          </span>
                                                    <span className="float-right text-muted">
                            <span >{profil.teacher_age}</span>
                          </span>
                                                </p>
                                                <p className="clearfix">
                                                    <span className="float-left">
                           Gender
                          </span>
                                                    <span className="float-right text-muted">
                            <span >{profil.teacher_gender}</span>
                          </span>
                                                </p>
                                                <p className="clearfix">
                                                    <span className="float-left">
                            Phone
                          </span>
                                                    <span className="float-right text-muted">
                            {profil.teacher_phonem}
                          </span>
                                                </p>
                                                <p>
                                            <span className="float-left">
                           Class
                          </span>
                                                    <span className="float-right text-muted">
                            <span >{profil.class_teacher}</span>
                          </span>
                                                </p>
                                              
                                            </div>
                                           
                                        </div>
                                         ))}
                                        <div className="col-lg-8">
                                            <div className="d-block d-md-flex justify-content-between mt-4 mt-md-0">
                                                <div className="text-center mt-4 mt-md-0">
                                                    <Link to="/message" className="btn btn-outline-primary">Message</Link>
                                                    
                                                </div>
                                            </div>
                                        
                                          
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfileT
