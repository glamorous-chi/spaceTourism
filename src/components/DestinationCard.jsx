import React from 'react'
import "../css/Destination.css"
import { NavLink } from 'react-router-dom'

const DestinationCard = ({ planet }) => {
    return (

        <div>
            <div className="dest-div">
                <div className="tablet-div ">
                    <div className="text-light tab-div"><span className='top-text'><span className='text-secondary'>01</span>   PICK YOUR DESTINATION </span> </div>

                    <div className="tab-image my-4">
                        <img src={planet.image} alt="image of a planet" width="350px" height="350px" />
                    </div>
                </div>
                <div className="mob-div ">
                    <div className="text-light"><span className='top-text'><span className='text-secondary'>01</span>   PICK YOUR DESTINATION </span> </div>

                    <div className="image-div my-4">
                        <img src={planet.image} alt="image of a planet" width="160px" height="160px" />
                    </div>
                </div>


                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="list-div">
                        <ul style={{ listStyle: "none" }} className='d-flex'>
                            <NavLink to={`/destination/moon`} className='text-decoration-none text-light under-line'><li className=''>MOON</li></NavLink>
                            <NavLink to={`/destination/mars`} className='text-decoration-none text-light under-line'><li className='mx-4'>MARS</li></NavLink>
                            <NavLink to={`/destination/europa`} className='text-decoration-none text-light under-line'><li className=''>EUROPA</li></NavLink>
                            <NavLink to={`/destination/titan`} className='text-decoration-none text-light under-line'><li className='mx-4'>TITAN</li></NavLink>
                        </ul>
                    </div>


                    <div className="planet-div">
                        <h1 className='text-light planet-text'>{planet?.name}</h1>
                    </div>
                    <div className="desc-div col-10">
                        <span className='text-light planet-span'>{planet?.description}</span>
                    </div>

                    <div className="line-break my-4">

                    </div>
                    <div className="d-md-flex below-text">
                        <div className="distance-div d-flex flex-column justify-content-center align-items-center">
                            <h5 className='text-light'>AVG. DISTANCE</h5>
                            <h2 className='text-light'>{planet?.distance}</h2>
                        </div>

                        <div className="time-div d-flex flex-column justify-content-center align-items-center">
                            <h5 className='text-light'>EST.TRAVEL TIME</h5>
                            <h2 className='text-light'>{planet?.travel}</h2>
                        </div>
                    </div>
                </div>
            </div>



            <div className="text-light desktop-top-div"><span className='top-text'><span className='text-secondary me-md-3'>01</span>   PICK YOUR DESTINATION </span> </div>
            <div className="planet-desktop-div">
                <div className="sub-div">
                    <div className="image-div-dest my-2">
                        <img src={planet.image} alt="image of a planet" width="300px" height="300px" />
                    </div>
                </div>

                <div className="planets-div">
                    <div className="list-div">
                        <ul style={{ listStyle: "none" }} className='d-flex'>
                            <NavLink to={`/destination/moon`} className='text-decoration-none text-light under-line'><li className=''>MOON</li></NavLink>
                            <NavLink to={`/destination/mars`} className='text-decoration-none text-light under-line'><li className='mx-3'>MARS</li></NavLink>
                            <NavLink to={`/destination/europa`} className='text-decoration-none text-light under-line'><li className=''>EUROPA</li></NavLink>
                            <NavLink to={`/destination/titan`} className='text-decoration-none text-light under-line'><li className='mx-3'>TITAN</li></NavLink>
                        </ul>
                    </div>


                    <div className="ms-4 down-below-div">
                        <div className="planet-div">
                            <h1 className='text-light planet-text'>{planet?.name}</h1>
                        </div>
                        <div className="desc-div col-8">
                            <span className='text-light planet-span'>{planet?.description}</span>
                        </div>

                        <div className="line-break my-4">

                        </div>
                        <div className="d-md-flex below-text">
                            <div className="distance-div  me-5">
                                <h5 className='text-light'>AVG. DISTANCE</h5>
                                <h2 className='text-light'>{planet?.distance}</h2>
                            </div>

                            <div className="time-div d-flex flex-column justify-content-center align-items-center">
                                <h5 className='text-light '>EST. TRAVEL TIME</h5>
                                <h2 className='text-light travel-text'>{planet?.travel}</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default DestinationCard;