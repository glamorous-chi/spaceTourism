import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"

const Hero = () => {
  return (
    <div className='hero-div d-flex col-12'>

      <div className='col-md-6 col-10 col-md-0 offset-1 offset-md-0 d-flex justify-content-center align-items-center flex-column flex-start inner-hero-div d-block d-md-none '>
        <h5 className='top-text'>SO, YOU WANT TO TRAVEL TO </h5>
        <h1 className='space-text text-light'>SPACE</h1>
        <span className='span-text col-md-8'>
          Let’s face it; if you want to go to space, you might as well
          genuinely go to
          outer space and not hover kind of on the
          edge of it. Well sit back, and relax
          because we’ll give you a
          truly out of this world experience!</span>
       
      </div>

      <div className='col-md-6 col-10 col-md-0 offset-1 offset-md-1 d-flex justify-content-center align-items-center flex-column flex-start inner-hero-div d-none d-md-block'>
        <h5 className='top-text'>SO, YOU WANT TO TRAVEL TO </h5>
        <h1 className='space-text text-light'>SPACE</h1>
        <span className='span-text'>
          <p>
            Let’s face it; if you want to go to space, you might as well</p>  <p>genuinely go to
              outer space and not hover kind of on the</p>
          <p>edge of it. Well sit back, and relax
            because we’ll give you a</p>
          <p>truly out of this world experience! </p>
        </span>

      </div>


      <div className="inner-explore-div d-flex justify-content-center align-items-center col-md-6 mt-5">
        <Link to="/destination/moon" className='text-decoration-none text-dark'>
          <div className="explore-div d-flex justify-content-center ">
            <div className="my-explore bg-light text-dark ">EXPLORE </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero