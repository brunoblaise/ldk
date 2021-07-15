import React from 'react'
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Main from './Main';


function Render({setAuth}) {
    return (
        <div className="App">
        <Header/>
          <div className="container-fluid page-body-wrapper">
           
            
             <Sidebar setAuth={setAuth}/>
           
         <Main/>
       
          </div>
  
      </div>
    )
}

export default Render
