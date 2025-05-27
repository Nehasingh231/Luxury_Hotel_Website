import React from 'react'
import HeroSection02 from '../components/HeroSection02'
import RoomChoices from '../components/RoomChoices'
import ClientReview from '../components/ClientReview'
import ExpertTeam from '../components/ExpertTeam'
import LatestNewsUpdate from '../components/LatestNewsUpdate'
import Offer from '../components/Offer.Jsx'
import Footer from '../components/Footer.jsx'

function Home02() {
  return (
    <>
     <HeroSection02 />
     <RoomChoices />
     <ClientReview />
     <ExpertTeam />
     <LatestNewsUpdate />
     <Offer />
     <Footer />
    </>
  )
}

export default Home02