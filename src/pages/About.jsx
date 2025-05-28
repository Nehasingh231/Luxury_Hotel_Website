import React from 'react'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import LuxuryExperienceIntro from '../components/LuxuryExperienceIntro'
import GrowthJourneyTimeline from '../components/GrowthJourneyTimeline'
import HotelFAQ from '../components/HotelFAQ'

function About() {
  return (
    <>
    <AboutHero />
    <LuxuryExperienceIntro />
    <GrowthJourneyTimeline />
    <HotelFAQ />
    <Footer />
    </>
  )
}

export default About