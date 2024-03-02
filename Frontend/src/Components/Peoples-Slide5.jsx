import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 >Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
      Kudos to the hosting team! My website has never been more stable, and the customer support is truly outstanding. Thank you for making my online experience seamless and stress-free
      </p>
    </div>
    <div>
    <img src="/images/team/06.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"
      style={{width:'80px', height:'80px'}}/>
    <h6 className="mt-3">CEO - Jafar Ali </h6>
    </div>
  </div>
);
};

export default LovedPeoples

