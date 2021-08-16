import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

function TestRoom() {
    return (
        <div className='App'>
        <Header />
        <div className='container-fluid page-body-wrapper'>
          <Sidebar  />
          
        <div className="content-wrapper">
        <h1>Test for Today</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <Link to='/room/test/3444'>
                Accordion Item #1
                </Link>
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
          </div>
        </div>
      
     
      </div>
      </div>
      </div>
      </div>
    )
}

export default TestRoom
