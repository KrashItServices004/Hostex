import React from 'react'
import '../Style/Peoples-Slide.css';

function LovedPeoples() {
  return (
    <div className="PeoplesSlide-container text-center mt-5">
    <h1 >Testimonial</h1>
    <div className="mx-auto" style={{ maxWidth: '600px' }}>
      <p>
      Reliable hosting with excellent customer care. I appreciate the quick response and effective solutions provided whenever I encounter any technical issues. Top-notch service!
      </p>
    </div>
    <div>
    <img src="/images/team/04.jpg" // You can replace this with your image URL
      alt="Sample"
      className="img-center rounded-circle mt-3"
      style={{width:'80px', height:'80px'}}/>
    <h6 className="mt-3">Director - Muhammad H</h6>
    </div>
  </div>
);
};

export default LovedPeoples

