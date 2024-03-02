import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 >Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
      Exceptional hosting service! The website speed is incredible, and the customer care team is always prompt and helpful. Truly satisfied with the overall experience.
      </p>
    </div>
    <div>
    <img src="/images/team/01.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"
      style={{width:'80px', height:'80px'}}/>
    <h6 className="mt-3">C.E.O - JAMILA M MUSA</h6>
    </div>
  </div>
);
};

export default LovedPeoples

