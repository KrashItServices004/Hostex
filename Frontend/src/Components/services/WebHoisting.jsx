import React from 'react'
import webHositing from "../../images/web-hosting.gif";
import webHoisting1 from "../../images/webhosting1.gif"
import HoistingSlider from './HoistingSlider';
const WebHoisting = () => {
  return (
    <div>
      <div className='container-fluid bg-light'>
        <div className='row'>
          <div className='col-sm-11 mx-auto' >
            <div className='row mx-auto ' >
              <div className='col-sm-6 p-5'>
                <img src={webHositing} alt="webhoisting" className='img-fluid' height="400px" width="600px" />
              </div>
              <div className='col-sm-6 py-5'
              // style={{ display: "flex", alignItems: "center" ,fontFamily:"roboto-Serif" }}
              >
                <div>
                  <h1 style={{ color: "red" }}><b>Hosting Services</b></h1>
                  <p className='fs-5 pt-2'>
                    Selecting the right web hosting service is a pivotal decision for anyone looking to establish an online presence.
                  </p>
                  <p className='fs-5 pt-3'>
                    At HostX we provide best hosting plan and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid' style={{ background: "#224d18" }}>
          <div className='row'>
            <div className='col-sm-12 my-5 text-center'>
              <h1 style={{ color: "red" }}>Types of Web Hosting</h1>
            </div>
          </div>
        </div>








        <div className='container-fluid' style={{ background: "#224d18" }}>
          <div className='row'>
            <div className='col-sm-11 text-light mx-auto'>
              <div className='row mx-auto'>
                <div className='col-sm-12 col-lg-4 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'></p>
                <h3>Shared Hosting</h3>
                <p>Ideal for beginners and small websites.
                        Multiple websites share resources on a single server, making it a cost-effective option.</p>
                  </div>
                </div>
                <div className='col-sm-12 col-lg-4 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'></p>
                <h3>VPS Hosting</h3>
                <p>Offers a dedicated portion of a server with more control and customization.
                        Suitable for growing websites with increasing traffic.</p>
              </div>
                </div>
                <div className='col-sm-12 col-lg-4 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'></p>
                <h3>Dedicated Hosting </h3>
                <p>  Provides an entire physical server exclusively for your website.
                        Offers maximum control, performance, and security.</p>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* card */}
        {/* <div className="container-fluid" style={{ background: "#224d18" }}>
          <div className='row'>
            <div className='col-sm-7 my-5 pb-3 text-light mx-auto'>

              <div className='row mx-auto'>
                <div className='col-sm-6  rounded' >
                  <div className="p-5 mx-3 card" >
                    <div style={{ minHeight: "180px" }}>
                      <h3 style={{ color: "#224d18" }}>Cloud Hosting:</h3>
                      <p>
                        Utilizes a network of virtual servers, ensuring scalability and reliability.
                        Ideal for websites with varying traffic levels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 rounded' >
                  <div className="p-5 mx-3 card" >
                    <div style={{ minHeight: "180px" }}>

                      <h3 style={{ color: "#224d18" }}>WordPress Hosting</h3>
                      <p>
                        Tailored specifically for WordPress sites, optimizing performance and security.
                        Often includes one-click installations and specialized support.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div> */}

        <div className='container-fluid' style={{ background: "#224d18" }}>
          <div className='row'>
            <div className='col-sm-8 text-light mx-auto'>
              <div className='row mx-auto'>
                <div className='col-sm-12 col-lg-6 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'></p>
                <h3>Cloud Hosting</h3>
                <p>  Utilizes a network of virtual servers, ensuring scalability and reliability.
                        Ideal for websites with varying traffic levels.</p>
                  </div>
                </div>
            
                <div className='col-sm-7 col-lg-6 col-md-6 rounded '>
                  <div className='card p-4 m-2 shadow ssl-work-card'>
                  <p className='my-3'></p>
                <h3>WordPress Hosting </h3>
                <p>   Tailored specifically for WordPress sites, optimizing performance and security.
                        Often includes one-click installations and specialized support.</p>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>










        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 my-5 text-center'>
              <h1 style={{ color: "red" }}>Key Considerations</h1>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <HoistingSlider />
        </div>
        <div className='container-fluid' style={{ background: "#224d18" }}>
          <div className='row'>
            <div className='col-sm-11 pb-5  mx-auto'>
              <div className='row'>
                <h1 className='my-5 text-center' style={{ color: "red" }}>Popular Web Hosting Providers</h1>
                <div className='col-sm-5 px-5' style={{marginTop:'15px'}}>
                  <img src={webHoisting1} alt="sslwork"className='img-fluid' height="500px" width="550px" />
                </div>
                <div className='col-sm-7 px-5'>
                  <div className='row pb-5'>
                    <div className='col-sm-6 rounded'>

                      <div className=' card p-4' style={{ height: "230px",marginTop:'15px' }}>
                        <h3 style={{ color: "#224d18" }} className='mt-2'> Bluehost</h3>
                        <p>
                          Known for its user-friendly interface and WordPress integration.
                          Offers a range of hosting options for different needs.
                        </p>
                      </div>
                    </div>
                    <div className='col-sm-6 rounded' >
                      <div className=' card p-4' style={{ height: "230px",marginTop:'15px' }}>
                        <h3 style={{ color: "#224d18" }} className='mt-2 '> SiteGround</h3>
                        <p>
                          Recognized for excellent customer support and high-performance servers.
                          Ideal for websites with a focus on speed and security.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='row '>
                    <div className='col-sm-6 rounded' >
                      <div className=' card p-4' style={{ height: "230px",marginTop:'15px' }}>
                        <h3 style={{ color: "#224d18" }} className='mt-2'>HostGator</h3>
                        <p>
                          Offers affordable shared hosting plans and a variety of hosting types.
                          Suitable for beginners and small to medium-sized websites.
                        </p>
                      </div>
                    </div>
                    <div className='col-sm-6 rounded' >
                      <div className=' card p-4' style={{ height: "230px",marginTop:'15px' }}>
                        <h3 style={{ color: "#224d18" }} className='mt-2'>AWS (Amazon Web Services)</h3>
                        <p>
                          Provides scalable cloud hosting solutions with a pay-as-you-go model.
                          Ideal for businesses with dynamic or unpredictable traffic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WebHoisting
