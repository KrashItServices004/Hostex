import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import HighPerfor from './HostingFeatures/HighPerfor';
import EnhancedSecurity from './HostingFeatures/EnhancedSecurity';
import SpamGuard from './HostingFeatures/SpamGuard';
import UnbeatableSupport from './HostingFeatures/UnbeatableSupport';
import Uptime from './HostingFeatures/Uptime';
import '../Style/CarouselStyles.css';
import '../Style/FeaturesIncluded.css';


function FeaturesIncluded() {
  const [activeSlider, setActiveSlider] = useState(0);

  const handleSliderChange = (index) => {
    setActiveSlider(index);
  };

  useEffect(() => {
    // Auto slide every 5 seconds
    const intervalId = setInterval(() => {
      handleSliderChange((activeSlider + 1) % 5);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [activeSlider]);

  return (
    <div className='container-fluid'>


    <div className="FeaturesIncluded-container">
  <div className="row justify-content-center">
    <div className="col-sm-10 mx-auto text-center">
      <div className="row mx-auto">

        <div className="col-12 col-sm-6 col-md-3 mb-4">
          <i className="fas fa-at fa icon-style"></i>
          <p>Domains Registered</p>
          <CountUp end={2500} duration={4} separator="," className="bold-number" />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-4">
          <i className="far fa-smile fa icon-style"></i>
          <p>Happy Clients</p>
          <CountUp end={400} duration={4} separator="," className="bold-number" />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mb-4">
          <i className="fas fa-code fa icon-style"></i>
          <p>Line of Code</p>
          <CountUp end={9478815} duration={6} separator="," className="bold-number" />
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <i className="fas fa-coffee fa icon-style"></i>
          <p>Cup of Tea</p>
          <CountUp end={78815} duration={5} separator="," className="bold-number" />
        </div>
      </div>
    </div>
  </div>
</div>




      <div className="Features-container">
        <div className="text-center mb-5">
          <h2>Hosting Features Included</h2>
        </div>


    <div id="pageSlider" className="carousel slide" data-bs-ride="carousel">

    <div className="features-buttons-container">
        <div className="features-buttons">
          <button
            className={`features-button ${activeSlider === 0 ? 'active' : ''}`}
            onClick={() => handleSliderChange(0)}
          >
            High-Performance
          </button>
          <button
            className={`features-button ${activeSlider === 1 ? 'active' : ''}`}
            onClick={() => handleSliderChange(1)}
          >
            Enhanced Security
          </button>
          <button
            className={`features-button ${activeSlider === 2 ? 'active' : ''}`}
            onClick={() => handleSliderChange(2)}
          >
            Spam Guard
          </button>
          <button
            className={`features-button ${activeSlider === 3 ? 'active' : ''}`}
            onClick={() => handleSliderChange(3)}
          >
            Unbeatable Support
          </button>
          <button
            className={`features-button ${activeSlider === 4 ? 'active' : ''}`}
            onClick={() => handleSliderChange(4)}
          >
            99.9% Uptime
          </button>
        </div>
      </div>



        <div className="carousel-inner">
          <div className={`carousel-item ${activeSlider === 0 ? 'active' : ''}`} style={{marginBottom:'2rem'}}>
            <HighPerfor />
          </div>
          <div className={`carousel-item ${activeSlider === 1 ? 'active' : ''}`} style={{marginBottom:'2rem'}}>
            <EnhancedSecurity />
          </div>
          <div className={`carousel-item ${activeSlider === 2 ? 'active' : ''}`} style={{marginBottom:'2rem'}}>
            <SpamGuard />
          </div>
          <div className={`carousel-item ${activeSlider === 3 ? 'active' : ''}`} style={{marginBottom:'2rem'}}>
            <UnbeatableSupport />
          </div>
          <div className={`carousel-item ${activeSlider === 4 ? 'active' : ''}`} style={{marginBottom:'2rem'}}>
            <Uptime />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#pageSlider"
          data-bs-slide="prev"
          onClick={() => handleSliderChange((activeSlider - 1 + 5) % 5)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#pageSlider"
          data-bs-slide="next"
          onClick={() => handleSliderChange((activeSlider + 1) % 5)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>  
    </div>
  );
};


export default FeaturesIncluded