import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import LuxuryExperienceIntro from '../components/LuxuryExperienceIntro'
import GrowthJourneyTimeline from '../components/GrowthJourneyTimeline'
import HotelFAQ from '../components/HotelFAQ'
import AOS from 'aos';
import 'aos/dist/aos.css';

 
function About() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);

  return (
    <>
  <div data-aos="fade-up">
  <AboutHero />
</div>

<div data-aos="fade-right">
  <LuxuryExperienceIntro />
</div>

<div data-aos="zoom-in-up">
  <GrowthJourneyTimeline />
</div>

<div data-aos="fade-left">
  <HotelFAQ />
</div>
    <Footer />
    </>
  )
}

export default About