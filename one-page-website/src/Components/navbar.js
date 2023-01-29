import React from 'react'

function Navbar() {
  return (
    <div className='nav-container'>
      <div className="head-container">
        <div className='nav-logo'>Foodies 'n' Foodies</div>
        <div className='location'>123, ABC Tower, Lahore - Pakistan</div>

      </div>
      <div className='menuContainer'>
        <ul className='nav-links'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Specials</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar