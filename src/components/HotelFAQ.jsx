import React, { useState } from 'react';
import './HotelFAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logo1 from '../assets/logo1.svg';
import Logo2 from '../assets/logo2.svg';
import Logo3 from '../assets/logo3.svg';
import Logo4 from '../assets/logo4.svg';
import Logo5 from '../assets/logo5.svg';



const leftFAQs = [
  { question: 'How Can I Confirm My Reservation?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { question: 'Do You Have Any Discount Code?', answer: '' },
  { question: 'Can I Cancel My Reservation?', answer: '' },
  { question: 'Up To What Age Are They Considered Children?', answer: '' }
];

const rightFAQs = [
  { question: 'Can I Book A Room Directly?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { question: 'What Is Included In Your Services?', answer: '' },
  { question: 'What Payment Methods Can I Use?', answer: '' },
  { question: 'Do You Have Hotels With A Spa?', answer: '' }
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="faq-question">
      {faq.question}
      <span className="faq-icon">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
    </div>
    {isOpen && faq.answer && <div className="faq-answer">{faq.answer}</div>}
    <div className="faq-divider"></div>
  </div>
);

const HotelFAQ = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState(0);
  const [openIndexRight, setOpenIndexRight] = useState(0);

  return (
    <div className="hotel-faq">
      <div className="faq-header">
        <div className="vertical-line"></div>
        <p className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</p>
      </div>
      <h2 className="faq-title">Most Popular Topics</h2>

      <div className="faq-columns">
        <div className="faq-column">
          {leftFAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndexLeft === index}
              onClick={() => setOpenIndexLeft(index === openIndexLeft ? null : index)}
            />
          ))}
        </div>

        <div className="faq-column">
          {rightFAQs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndexRight === index}
              onClick={() => setOpenIndexRight(index === openIndexRight ? null : index)}
            />
          ))}
        </div>
      </div>

      <div className="faq-footer">
        <span className="footer-link">Still Have A Questions?</span>
        <span className="footer-arrow">→</span>
      </div>
     <div className="faq-logos">
  <img src={Logo1} alt="TechBrand Logo 1" />
  <img src={Logo2} alt="TechBrand Logo 2" />
  <img src={Logo3} alt="TechBrand Logo 3 " className="brown-logo" />
  <img src={Logo4} alt="TechBrand Logo 4" />
  <img src={Logo5} alt="TechBrand Logo 5" />
</div>

    </div>
  );
};

export default HotelFAQ;
