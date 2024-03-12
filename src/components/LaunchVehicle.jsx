import React from 'react'
import TechCard from '../components/TechCard'
import { useParams } from 'react-router-dom'
import { technologies } from "../DB/TechImages"
import "../css/MobileNav.css"
import "../css/Tech.css"

const LaunchVehicle = () => {
  const { technologyId } = useParams()
  const tech = technologies.find((techs) => techs.id === technologyId)
  console.log(tech);
  return (
    <div className='tech-div tech-bg'>
      <TechCard technology={tech} />
    </div>
  )
}

export default LaunchVehicle