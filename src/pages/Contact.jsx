import React, { useEffect } from 'react'
import ContactHero from '../components/ContactHero'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
  });
}, []);

  return (
    <>
   <div data-aos="zoom-in" data-aos-delay="200">
  <ContactHero />
</div>

     <Footer />
    </>
  )
}

export default Contact