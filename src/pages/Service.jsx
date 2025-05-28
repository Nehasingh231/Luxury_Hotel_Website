import React, { useEffect } from 'react'
import ServiceHero from '../components/ServiceHero'
import Amenities from '../components/Amenities'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
    <div data-aos="fade-down">
  <ServiceHero />
</div>

<div data-aos="fade-up" data-aos-delay="100">
  <Amenities />
</div>

<div data-aos="zoom-in" data-aos-delay="200">
  <BookingForm />
</div>

    <Footer />
    </>
  )
}

export default Service