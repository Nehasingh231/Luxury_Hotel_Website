import React from 'react'
import RoomHero from '../components/RoomHero'
import LuxuryAccommodations from '../components/LuxuryAccommodations'
import AdditionalServices from '../components/AdditionalServices'
import RoomAmenities from '../components/RoomAmenities.jsx'
import Footer from '../components/Footer.jsx'

function Room() {
  return (
    <>
    <RoomHero />
    <LuxuryAccommodations />
    <AdditionalServices />
    <RoomAmenities />
    <Footer />
    </>
  )
}

export default Room