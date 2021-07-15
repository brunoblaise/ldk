import React from 'react'
import Header from "../header1/Header";
import Sidebar from "../sidebar1/Sidebar";
import Main from './Main';


function RenderT({setAuth}) {
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

export default RenderT
