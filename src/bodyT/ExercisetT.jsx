import React, {  useState } from "react";
import { toast } from "react-toastify";

function ExerciseT() {
  const [inputs, setInputs] = useState({
    classe: "",
    title: "",
    summary: ""
  });
  const {classe, title, summary } = inputs;
  const onChange = e =>
  setInputs({ ...inputs, [e.target.name]: e.target.value });

    const onSubmitForm = async e => {
        e.preventDefault();
     
        try {
        
          const body = { classe, title, summary};
          const response = await fetch(
            "http://localhost:5000/create/exercises",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );
    
      
          if (response.status === "200") {
          
            toast.error("Something is wrong");
           
          } else {
            
          
            toast.success("Sent Successfully");
          }
        
          window.location = "/exerciseT";
         


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
                <h4 className="card-title">Submit your work here </h4>
                <div className="template-demo">
               <p className="card-description">here you will submit you work with the button upload</p>
                </div>
              
                <form onSubmit={onSubmitForm} className="template-demo">
                <input type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                                     placeholder="Classe" 
                                     name="classe"
                                     value={classe}
                                     onChange={e => onChange(e)} 
                                    
                                    />   <input type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                                    placeholder="Title" 
                                    name="title"
                                    value={title}
                                    onChange={e => onChange(e)} 
                                   
                                   />
                                      <textarea type="text" className="form-control form-control-lg" id="exampleInputEmail1"
                                     placeholder="Summary" 
                                     name="summary"
                                     value={summary}
                                     onChange={e => onChange(e)} 
                                    
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

export default ExerciseT
