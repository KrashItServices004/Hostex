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
                  <section>
                    <div>
                      <h1>Managed Services</h1>
                      <p>In the dynamic landscape of technology and business, managing an organization's IT infrastructure, networks, and systems can be a complex and resource-intensive task.</p>
                    </div>
                    <div data-aos="fade-down">
                    </div>
                  </section>
                </div>
              </div>
              <div className='col-sm-6'>
                <img src="/images/home-slider/s10.png" className='img-fluid' style={{ width: '600px', height: '400px' }} alt="Shared Hosting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedHosting;
