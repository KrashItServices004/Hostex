import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 className="">Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
      I've tried several hosting services, and this one stands out. The website loads quickly, and whenever I had an issue, the customer care team resolved it swiftly. Great service!
      </p>
    </div>
    <img 
      src="/images/team/03.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"
      style={{width:'80px', height:'80px'}}
    />
    <h6 className="mt-3">C.E.O - Marry William  </h6>
  </div>
);
};

export default LovedPeoples

