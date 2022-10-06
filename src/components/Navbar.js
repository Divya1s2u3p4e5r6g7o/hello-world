import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav>
      <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/landingscreen">LandingScreen</Link>


      </nav>
    </div>
  )
}

export default Navbar
