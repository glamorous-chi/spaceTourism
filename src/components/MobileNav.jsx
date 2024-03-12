import React from 'react'
import Hamburger from './Hamburger'
import logo from "../assets/image/logo.svg"
import "../css/MobileNav.css"
import { NavLink } from 'react-router-dom'
const MobileNav = () => {
  return (
    <div className='d-flex justify-content-between main-div mx-md-5 ms-3 mx-md-none mobile-nav bac-img'>
      <div className="logo-image mt-4 ms-2 d-block d-md-none">
        <NavLink to="/">
          <img src={logo} alt="A star logo" />
        </NavLink>
      </div>

      <div className=" mt-4 me-2">
        <Hamburger placement={'end'} />
      </div>





      {/* {[ , 'end', , ].map((placement, idx) => (
        <div className=" mt-2">
             <Hamburger key={idx} placement={placement} />
        </div>
       
      ))} */}


    </div>
  )
}

export default MobileNav