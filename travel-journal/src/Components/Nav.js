import React from 'react'
import globe from '../Images/globe.png'
import 'font-awesome/css/font-awesome.min.css';


function Nav() {
  return (
    <div className='navContainer'>
        <i className="fa fa-globe" aria-hidden="true"></i>
        <p className='navText'>Travel Journal</p>
    </div>
  )
}

export default Nav