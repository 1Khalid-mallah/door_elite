import React from 'react'
import Hero from '../components/Hero'
import NewNoteworthy from '../components/NewNoteworthy'
import WallPanel from '../components/WallPanel'
import WomenSalon from '../components/WomenSalon'
import SpaWomen from '../components/SpaWomen'
import SmartHome from '../components/SmartHome'
import HomeCleaning from '../components/HomeCleaning'
import ApplianceService from '../components/ApplianceService'
import HomeRepair from '../components/HomeRepair'
import MassageMen from '../components/MassageMen'
import RoPurifier from '../components/RoPurifier'
import MenSalon from '../components/MenSalon'

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <NewNoteworthy />
      <WomenSalon />
      <SmartHome />
      <HomeCleaning />
      <ApplianceService />
      <MenSalon />
    </div>
  )
}

export default Home
