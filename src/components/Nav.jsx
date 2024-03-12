import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import logo from "../assets/image/logo.svg"
import "../css/Nav.css"

import { NavLink } from 'react-router-dom';

// import Hamburger from './Hamburger';

const NavBar = () => {


  return (
    <div className='nav-div d-flex justify-content-between main-div mx-md-2 ms-3' >
      <div className="logo-image mt-5 mt-md-4 ms-md-5 d-none d-md-block">
        <NavLink to="/">
          <img src={logo} alt="A star logo" />
        </NavLink>
      </div>
      <div className="nav-line col-6 offset-2"></div>
      <div className="mt-5 me-md-5 nav-link w-md-50 d-none d-md-block">
        <ul className="d-md-flex justify-md-content-evenly text-light" style={{ listStyle: "none" }}>
          <Nav.Link className='navBar'>
            <li><NavLink to="/" className="text-light text-decoration-none hey" activeStyle={{ color: "white" }}> <span>00 </span><span>HOME</span></NavLink></li>
          </Nav.Link>
          <Nav.Link className='me-4 navBar d-nav'>
            <li><NavLink to="/destination/moon" className='text-light text-decoration-none hey'><span>01 DESTINATION</span></NavLink></li>
          </Nav.Link>
          <Nav.Link className='navBar'>
            <li><NavLink to="/crew/douglashurley" className="text-light text-decoration-none hey" activeStyle={{ color: "white", paddingTop: "40px" }}><span>02 CREW</span></NavLink></li>
          </Nav.Link>
          <Nav.Link className='navBar t-nav me-md-3'>
            <li> <NavLink to="/technology/launchvehicle" className='text-light text-decoration-none hey'><span>03 TECHNOLOGY</span></NavLink></li>
          </Nav.Link>

        </ul>
      </div>




    </div>

  )
}

export default NavBar