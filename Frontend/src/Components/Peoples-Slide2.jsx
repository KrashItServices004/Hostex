import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 className="">Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
      Switched to this hosting provider and couldn't be happier. The website uptime is fantastic, and the customer support goes above and beyond. Highly recommended!
      </p>
    </div>
    <img 
      src="/images/team/02.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"
      style={{width:'80px', height:'80px'}}
    />
    <h6 className="mt-3">C.E.O - AISHA MUKHTAR </h6>
  </div>
);
};

export default LovedPeoples

