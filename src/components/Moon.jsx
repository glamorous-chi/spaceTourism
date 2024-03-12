import React from 'react';
import { planets } from "../DB/DestinationImages"
import { useParams } from 'react-router-dom'
import "../css/Destination.css"
import "../css/MobileNav.css"
import DestinationCard from './DestinationCard'


const Moon = () => {
  // console.log(data);

  const { planetId } = useParams()
  const moon = planets.find((planet) => planet.id === planetId)
  console.log(planetId);


  // console.log(moon);
  return (
    <div className='dest-image'>
      <DestinationCard planet={moon} />
    </div>
  )
}

export default Moon