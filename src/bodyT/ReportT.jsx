import React, {  useState } from "react";
import { toast } from "react-toastify";

function ReportT() {
  const [recfile, setRecfile] = useState('');
  const [name,setName] = useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
     
        try {
            const formData = new FormData();
      
          formData.append('recfile', recfile);
          formData.append('name', name);
          const myHeaders = new Headers();
          myHeaders.append("jwt_token", localStorage.token);
          const response = await fetch(
            "http://localhost:5000/create/report",
            
            {
              method: "POST",
              body: formData,
              headers: myHeaders
       
            }
          );
      
          if (response.status === "200") {
          
            toast.error("Something is wrong");
           
          } else {
            
          
            toast.success("Sent Successfully");
          }
        
          window.location = "/reportT";
         


} catch (err) {
  console.error(err.message);
}
      };

      
    return (
        <div  className="col-12 grid-margin">
        <div className="card">
          <div className="row">
            <div  className="col-md-6">
              <div className="card-body">
                <h4 className="card-title">Submit Student Report here </h4>
                <div className="template-demo">
               <p className="card-description">here you will submit Student Report with the button upload</p>
                </div>
              
                <form onSubmit={onSubmitForm} className="template-demo">
                  <input name="recfile"
                   placeholder="Upload File" type="file"
                   className="form-control form-control form-control-lg border-left-0" id="exampleInputPassword"
                                    onChange={(e) => setRecfile(e.target.files[0])}/>
                                    <input type="text" placeholder="Student Email" 
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
           
            
            />
                  <button  className="btn btn-primary btn-icon-text">
                  <i className="bi bi-upload ti-file menu-icon btn-icon-prepend"></i>
                    Submit
                  </button>  
                </form>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    )
}

export default ReportT
