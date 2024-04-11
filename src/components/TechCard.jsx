import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'


const TechCard = ({ technology }) => {
    const [color, setColor] = useState("black")
    const handleClick = () => {
        setColor(color = "white")
    }
    return (
        <div>
            <div className='tech-div d-flex flex-column justify-content-center align-items-center'>
                <div className="top-div d-md-flex me-md-auto mt-md-5 ">
                    <div className="text-light d-md-flex mb-4"><span className='top-text'><span className='text-secondary'>03</span>   SPACE LAUNCH 101 </span></div>
                </div>
                <div className="stay-here-mobile">
                    <LazyLoad height={762}>
                        <div className="image-div-tech">
                            <img src={technology?.images.landscape} alt="image of a space-related technology" width="" height="" className='mobile-image' />
                        </div>
                    </LazyLoad>

                    <div className="num-div my-4 d-flex justify-content-center align-items-center ">
                        <NavLink to={`/technology/launchvehicle`} className="text-decoration-none tech-nums-link">
                            <button className="one-div text-light" onClick={handleClick} style={{ backgroundColor: { color } }}>
                                <span>1</span>
                            </button>
                        </NavLink>

                        <NavLink to={`/technology/spaceport`} className="text-decoration-none tech-nums-link mx-3">
                            <button className="two-div text-light " onClick={handleClick} style={{ backgroundColor: { color } }}>
                                <span className=''>2</span>
                            </button>
                        </NavLink>

                        <NavLink to={`/technology/spacecapsule`} className="text-decoration-none tech-nums-link">
                            <button className="three-div text-light" onClick={handleClick} style={{ backgroundColor: { color } }}>
                                <span>3</span>
                            </button>
                        </NavLink>

                    </div>

                    <div className="down-div d-flex flex-column justify-content-center align-items-center">
                        <div className="terminology-div">
                            <h5 className='text-light'>THE TERMINOLOGY ...</h5>
                        </div>
                        <div className="terminology-div">
                            <h4 className='text-light'>{technology?.name.toUpperCase()}</h4>
                        </div>
                        <div className='col-10 col-md-8 terminology-div'>
                            <span className='text-light '>{technology?.description}</span>
                        </div>
                    </div>
                </div>

                <div className="stay-here-desktop">
                    <div className="side-div">
                        <div className="num-div d-flex justify-content-center align-items-center ">
                            <NavLink to={`/technology/launchvehicle`} className="text-decoration-none nums-link">
                                <button className="one-div text-light" onClick={handleClick} style={{ backgroundColor: { color } }}>
                                    <span>1</span>
                                </button>
                            </NavLink>

                            <NavLink to={`/technology/spaceport`} className="text-decoration-none nums-link mx-3 my-md-4">
                                <button className="two-div text-light " onClick={handleClick} style={{ backgroundColor: { color } }}>
                                    <span className=''>2</span>
                                </button>
                            </NavLink>

                            <NavLink to={`/technology/spacecapsule`} className="text-decoration-none nums-link">
                                <button className="three-div text-light" onClick={handleClick} style={{ backgroundColor: { color } }}>
                                    <span>3</span>
                                </button>
                            </NavLink>

                        </div>

                        <div className="down-div">
                            <div className="">
                                <h5 className='text-light'>THE TERMINOLOGY ...</h5>
                            </div>
                            <div className="">
                                <h4 className='text-light'>{technology?.name.toUpperCase()}</h4>
                            </div>
                            <div className=''>
                                <span className='text-light '>{technology?.description}</span>
                            </div>
                        </div>
                    </div>

                    <LazyLoad>
                        <div className="image-div">
                            <img src={technology?.images.portrait} alt="image of a space-related technology" width="100%" height="380px" className='desktop-image' />
                        </div>
                    </LazyLoad>

                </div>




            </div>
        </div>
    )
}

export default TechCard