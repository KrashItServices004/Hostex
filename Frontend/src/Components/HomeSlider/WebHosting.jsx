import React, { useEffect } from 'react';
import '../../Style/Slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SharedHosting() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='shared-hosting-container d-flex justify-content-center  '>
      <div className='shared-container'>
        <div className='row'>
          <div className='col-sm-10 mx-auto py-5'>
            <div className='row mx-auto'>
              <div className='col-sm-6'>
                <div className="content-left">
                  <img src="/images/home-slider/s1.png" alt="" className='img-fluid' style={{ width: '600px', height: '400px' }} />
                </div>
              </div>
              <div className='col-sm-6 px-5'>
                <section>
                  <div>
                    <h1>Web Hosting</h1>
                    <p>Selecting the right web hosting service is a pivotal decision for anyone looking to establish an online presence.</p>
                    <p>At HostX we provide best hosting plan and services </p>
                  </div>
                  <div data-aos="fade-down">
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SharedHosting;
