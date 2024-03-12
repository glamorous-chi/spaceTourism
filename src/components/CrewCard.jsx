import React from 'react'
import "../css/Crew.css"
import { NavLink } from 'react-router-dom'

const CrewCard = ({ CrewMembers }) => {
    // const [color, setColor] = useState("black")
    // const handleClick = () => {
    //     setColor("white")
    // }
    return (
        <div>
            <div className="crew-div">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="top-div d-md-flex me-md-auto mt-md-5 ">
                        <div className="text-light d-md-flex ms-md-5"><span className='top-text'><span className='text-secondary'>02</span>   MEET YOUR CREW </span></div>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center main-crew-div">
                        <div className="mt-4 image-div-crew d-md-none ">
                            <img src={CrewMembers?.image} alt="Image of the Space Tour Crew member" width="210px" height="300px" />
                        </div>

                        <div className="hr-line mb-4 d-block d-md-none">

                        </div>
                        
                        {/* Mobile Buttons */}
                        <div className="crew-num-div my-3 d-md-none">
                            <NavLink to={`/crew/douglashurley`} className="text-decoration-none crew-nums-link me-2">
                                <button className="crew-one-div text-light"></button>
                            </NavLink>

                            <NavLink to={`/crew/markshuttleworth`} className="text-decoration-none crew-nums-link">
                                <button className="crew-two-div text-light "></button>
                            </NavLink>

                            <NavLink to={`/crew/victorglover`} className="text-decoration-none crew-nums-link mx-2">
                                <button className="crew-three-div text-light"></button>
                            </NavLink>
                            <NavLink to={`/crew/anoushehansari`} className="text-decoration-none crew-nums-link">
                                <button className="crew-four-div text-light"></button>
                            </NavLink>
                        </div>

{/* Mobile content */}
                        <div className="lower-div">
                            <div className="">
                                <h4>{CrewMembers?.role.toUpperCase()}</h4>
                            </div>
                            <div className="">
                                <h1 className='text-light'>{CrewMembers?.name.toUpperCase()}</h1>
                            </div>
                            <div className="col-10 col-md-9 bio-text">
                                <span className='text-light '>{CrewMembers?.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="desktop-div">
                        <div className="content-div">
                        <div className="another-lower-div">
                            <div className="">
                                <h4>{CrewMembers?.role.toUpperCase()}</h4>
                            </div>
                            <div className="">
                                <h1 className='text-light'>{CrewMembers?.name.toUpperCase()}</h1>
                            </div>
                            <div className="col-10 col-md-9 bio-text">
                                <span className='text-light '>{CrewMembers?.bio}</span>
                            </div>
                        </div>

                        {/* Tablet Buttons and Desktop */}
                        <div className="crew-num-div my-3 my-md-4 d-none d-md-block d-md-flex ">
                            <NavLink to={`/crew/douglashurley`} className="text-decoration-none crew-nums-link me-2">
                                <button className=" text-light"></button>
                            </NavLink>

                            <NavLink to={`/crew/markshuttleworth`} className="text-decoration-none crew-nums-link">
                                <button className=" text-light "></button>
                            </NavLink>

                            <NavLink to={`/crew/victorglover`} className="text-decoration-none crew-nums-link mx-2">
                                <button className="text-light"></button>
                            </NavLink>
                            <NavLink to={`/crew/anoushehansari`} className="text-decoration-none crew-nums-link">
                                <button className=" text-light"></button>
                            </NavLink>
                        </div>
                    </div>

                    <div className="mt-4 image-div-crew d-none d-md-block d-md-flex justify-md-content-center align-md-items-center">
                        <img src={CrewMembers?.image} alt="" width="" height="" />
                    </div>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default CrewCard