import React, { useEffect, useState} from "react";


function Allstudents() {
    const [message, setMessage] = useState([]);
    const [search, setSearch] = useState("");
      const getProfile = async () => {
        try {
          const res = await fetch("http://localhost:5000/get/Emailsel", {
            method: "GET",
            headers: { jwt_token: localStorage.token }
          });
    
          const parseData = await res.json();
    
          setMessage(parseData);
         
          
     
        } catch (err) {
          console.error(err.message);
        }
      };
    
     
      useEffect(() => {
          getProfile();
       
        }, []);

        console.log(search)
    return (
        <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title" _msthash="2271633" _msttexthash="226057">Signed up Students</h4>
           
            <div class="table-responsive pt-3">
            <input type="search" class="form-control" placeholder="Search" aria-controls="order-listing"
               value={search}
               name="search"
                 onChange={(e) => setSearch(e.target.value)}/>
              <table class="table table-bordered">
            
                <thead>
                  <tr>
              
                    <th _msthash="4713943" _msttexthash="135252">
                      Class
                    </th>
                    <th _msthash="4715139" _msttexthash="117936">
                      Email
                    </th>
                    <th _msthash="4716335" _msttexthash="79274">
                      Gender
                    </th>
                    <th _msthash="4717531" _msttexthash="109837">
                      Phone
                    </th>
                  </tr>
                </thead>
                {message.filter((val)=>{
                if(search === ''){
                  return val;
                }else if (val.student_email.toLowerCase().includes(search.toLowerCase())){
                  return val;
                }
              }).slice(0, 15).map((note)=>(
              
                       <tbody>
                       <tr>
                         <td _msthash="4739384" _msttexthash="146692">
                           {note.class_student}
                         </td>
                     
                         <td _msthash="4741776" _msttexthash="38454">
                           {note.student_email}
                         </td>
                         <td _msthash="4742972" _msttexthash="89830">
                       
                        {note.student_gender}
                         </td>
                         <td _msthash="4742972" _msttexthash="89830">
                         {note.student_phonem}
                         </td>
                       </tr>
                      
                     </tbody>
                 )) }
              
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Allstudents
