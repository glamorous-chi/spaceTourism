import React from 'react'
import "../css/Crew.css"
import { crew } from "../DB/CrewImages"
import CrewCard from './CrewCard'
import "../css/MobileNav.css"
import { useParams } from 'react-router-dom'

const FirstCrew = () => {
console.log(crew);
  const { crewId } = useParams()
  const crew_members = crew.find((crews) => crews.id === crewId)
  return (
    <div>
      <div className=""></div>

      <div className="crew-image">
        <CrewCard CrewMembers={crew_members} />
      </div>
    </div>
  )
}

export default FirstCrew