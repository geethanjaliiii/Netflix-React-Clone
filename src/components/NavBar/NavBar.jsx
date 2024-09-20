import React from 'react'
import './NavBar.css'
import { netflixLogo, navAvatar } from '../../config/assets'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left' >
        <img className='logo' src={netflixLogo} alt="netflixLogo" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News and Popular</li>
            <li>My List</li>
            <li>Browse By Languages</li>
        </ul>
        </div>

        <div className='navbar-right' >
        <i className="fa-solid fa-magnifying-glass search"></i>
        <p>Children</p>
        <i className="fa-regular fa-bell"></i>
        <div className='navbar-profile'>
        <img className='avatar' src={navAvatar} alt="avatar" />
        <i className="fa-solid fa-caret-down"></i>
        </div>
        
        
        </div>
   
     
    </div>
  )
}

export default NavBar
