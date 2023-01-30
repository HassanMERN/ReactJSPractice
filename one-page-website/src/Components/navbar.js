// import React, { useState } from 'react'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
// import Home from './Home'
// import Featured from './featured'
// import Menu from './Menu'
// import Contact from './Contact'

// import toggleBurger from '../images/toggleBurger.jpg'

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const toggleMenu = () => setMenuOpen(!menuOpen)

//   return (
//     <div className='nav-container'>
//       <div className="head-container">
//         <div className='nav-logo'>Foodies 'n' Foodies</div>
//         <div className='location'>123, ABC Tower, Lahore - Pakistan</div>
//         <img src={toggleBurger} onClick={toggleMenu} className='toggleBurger' alt='Toggle Menu' />
//       </div>
//       <div className='menuContainer' style={{ display: menuOpen ? 'block' : 'none' }}>
//         <ul className='nav-links'>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/specials'>Featured</Link></li>
//           <li><Link to='/menu'>Menu</Link></li>
//           <li><Link to='/contact'>Contact</Link></li>
//         </ul>
//       </div>
//       <Route exact path='/' component={Home} />
//       <Route path='/specials' component={Featured} />
//       <Route path='/menu' component={Menu} />
//       <Route path='/contact' component={Contact} />
//     </div>
//   )
// }


// export default Navbar
