import React, { useEffect } from 'react'
import RoomHero from '../components/RoomHero'
import LuxuryAccommodations from '../components/LuxuryAccommodations'
import AdditionalServices from '../components/AdditionalServices'
import RoomAmenities from '../components/RoomAmenities.jsx'
import Footer from '../components/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Room() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);

  return (
    <>
    <div data-aos="fade-down">
  <RoomHero />
</div>

<div data-aos="zoom-in-up" data-aos-delay="100">
  <LuxuryAccommodations />
</div>

<div data-aos="fade-left" data-aos-delay="200">
  <AdditionalServices />
</div>

<div data-aos="fade-up" data-aos-delay="300">
  <RoomAmenities />
</div>

    <Footer />
    </>
  )
}

export default Room