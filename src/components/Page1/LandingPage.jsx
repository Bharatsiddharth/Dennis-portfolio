import React from 'react'
import HeroImage from "../Page1/heroSection/HeroImage"
import HeroText from './heroSection/HeroText'
import CenterFlex from './center/CenterFlex'

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-emerald-300'>

      <CenterFlex/>
       <HeroImage/>
       <HeroText/>
      
    </div>
  )
}

export default LandingPage
