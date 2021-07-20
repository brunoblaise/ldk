import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../images/logo.svg";
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/create/logins",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
   
    } catch (err) {
      console.error(err.message);
    }
  };

    return (
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div className="brand-logo">
                                <img src={logo} alt="logo"/>
                            </div>
                            <h4>Hello! let's get started</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <form className="pt-3" onSubmit={onSubmitForm}>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1"
                                     placeholder="Email" 
                                     name="email"
                                     value={email}
                                     onChange={e => onChange(e)} 
                                    
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"
                                                     
                                     name="password"
                                     value={password}
                                      onChange={e => onChange(e)}
                                    />
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                                </div>
                                <div className="text-center mt-4 font-weight-light">
                                    Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
       
    </div>
    )
}

export default Login
