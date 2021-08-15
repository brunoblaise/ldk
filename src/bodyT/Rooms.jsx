import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header1/Header'
import Sidebar from '../sidebar1/Sidebar'

function Rooms() {
    return (
        <div className='App'>
        <Header />
        <div className='container-fluid page-body-wrapper'>
        <Sidebar  />
        <div className='main-panel'>
        <div className='content-wrapper'>
        <div className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
             
                  
                    <Link to="/class/room/s1" className='row'>
                      <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                        <div className='ml-xl-4 mt-3'>
                          <i className='bi bi-lightbulb-fill menu-icon'></i>
                          <br />
                          <br />
                          <br />
                          <p className='card-title'>Class room</p>
                          <p className='mb-2 mb-xl-0'>Senior 1</p>
                        </div>
                      </div>
                  
                    </Link>
                  </div>
                </div>
              </div>
           
         
        
      </div>


      <Link to="/class/room/s2"  className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
             
                  
                    <div className='row'>
                      <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                        <div className='ml-xl-4 mt-3'>
                          <i className='bi bi-lightbulb-fill menu-icon'></i>
                          <br />
                          
                          <br />
                          <p className='card-title'>Class room</p>
                          <p className='mb-2 mb-xl-0'>Senior 2</p>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>
           
         
        
      </Link>

      <Link to="/class/room/3"  className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
             
                  
                    <div className='row'>
                      <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                        <div className='ml-xl-4 mt-3'>
                          <i className='bi bi-lightbulb-fill menu-icon'></i>
                          <br />
                          <br />
                          <br />
                          <p className='card-title'>Class room</p>
                          <p className='mb-2 mb-xl-0'>Senior 3</p>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>
           
         
        
      </Link>

      <Link to="/class/room/s4"  className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
             
                  
                    <div className='row'>
                      <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                        <div className='ml-xl-4 mt-3'>
                          <i className='bi bi-lightbulb-fill menu-icon'></i>
                          <br />
                      
                          <br />
                          <p className='card-title'>Class room</p>
                          <p className='mb-2 mb-xl-0'>Senior 4</p>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>
           
         
        
      </Link>

      <Link to="/class/room/s5"  className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
             
                  
                    <div className='row'>
                      <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                        <div className='ml-xl-4 mt-3'>
                          <i className='bi bi-lightbulb-fill menu-icon'></i>
                          <br />
                     
                          <br />
                          <p className='card-title'>Class room</p>
                          <p className='mb-2 mb-xl-0'>Senior 5</p>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>
           
         
        
      </Link>

      <Link to="/class/room/s6"  className='row'>
        <div className='col-md-12 grid-margin stretch-card'>
          <div className='card position-relative'>
            <div className='card-body'>
             
                  
                    <div className='row'>
                      <div className='col-md-12 col-xl-3 d-flex flex-column justify-content-start'>
                        <div className='ml-xl-4 mt-3'>
                          <i className='bi bi-lightbulb-fill menu-icon'></i>
                          <br />
                         
                          <br />
                          <p className='card-title'>Class room</p>
                          <p className='mb-2 mb-xl-0'>Senior 6</p>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                </div>
              </div>

      </Link>
      </div>
      </div>
      </div>
      </div>
    )
}

export default Rooms
