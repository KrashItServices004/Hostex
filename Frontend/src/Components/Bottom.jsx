import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Style/Bottom.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: Adds smooth scrolling animation
  });
};



const Card = ({ title, links }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  let width = window.innerWidth;

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };






  return (
    <div className={`col-md-2 ${showDropdown ? 'dropdown' : ''}`}>
      <h5 className="bottom-title list-title mb-3" onClick={toggleDropdown} style={{ display: 'flex', justifyContent: 'space-between' }}>
        {title} <span > {width < 580 ? <>{showDropdown ? '-' : '+'}</> : <></>}       </span>
      </h5>
      <ul className={`list-unstyled ${showDropdown ? 'show-dropdown' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

const Bottom = () => {
  // Define the content for each card
  const aboutHostXContent = {
    title: 'About HostX',
    links: [
      <Link to="/About" className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> About Us</Link>,
      <Link to="/investor" className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> Investor Relations</Link>,
      <Link to="/career" className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> Career</Link>,
      <Link to="/CorporateResponsibility" className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> Corporate Responsibility</Link>,
      <Link to="/TrustCenter" className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> Trust Center</Link>,
      <Link to="/legal" className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> Legal</Link>,
    ],
  };

  const helpCenterContent = {
    title: 'Help Center',
    links: [
      <Link to="/Contact" className="bottom-link" onClick={scrollToTop} key="contactLink">Contact Us</Link>,
      <Link to="/suport" className="bottom-link" onClick={scrollToTop} key="contactLink">Report Abuse</Link>,

      // 'Report Abuse', 
      ],
  };

  const resourcesContent = {
    title: 'Resources',
    links: [
      <a href="https://store.techx.live/products/professional-email?" target="_blank" className="bottom-link" onClick={scrollToTop} key="webmailLink">Webmail</a>,
      <a href="https://www.secureserver.net/whois?plid=589497" target="_blank" className="bottom-link" onClick={scrollToTop} key="whoisLink">WHOIS</a>,
      <Link to="/services/website-app-builder" className="bottom-link" onClick={scrollToTop} key="hostXAppLink">HostX Mobile App</Link>,
      <a href="https://www.icann.org/" target="_blank" className="bottom-link" onClick={scrollToTop} key="icannConfirmationLink">ICANN Confirmation</a>,
      <Link to="/services/domain-email-reg" className="bottom-link" onClick={scrollToTop} key="corporateDomainsLink">Corporate Domains</Link>,
      // 'Redeem Code',
    ],
  };

  const accountContent = {
    title: 'Account',
    links: [
    <Link to="/profile" className="bottom-link" onClick={scrollToTop} key="contactLink">My Products</Link>,
    <Link to="/profile" className="bottom-link" onClick={scrollToTop} key="contactLink">Renewals & Billing</Link>,
    <Link to="/login" state={"create"} className="bottom-link" onClick={scrollToTop} key="contactLink">Create Account</Link>,],
  };

  const shoppingContent = {
    title: 'Shopping',
    links: [
      <Link to="/services/domain-email-reg" className="bottom-link" onClick={scrollToTop} key="domainEmailRegLink">Domain & Email Registration</Link>,
      <Link to="/services/web-hoisting" className="bottom-link" onClick={scrollToTop} key="webHostingLink">Web Hosting</Link>,
      <Link to="/services/ssl-certificates" className="bottom-link" onClick={scrollToTop} key="sslCertificatesLink">SSL Certificates</Link>,
      <Link to="/services/website-app-builder" className="bottom-link" onClick={scrollToTop} key="websiteAppBuilderLink">Website & App Builder</Link>,
      <Link to="/services/manage-services" className="bottom-link" onClick={scrollToTop} key="managedServicesLink">Managed Services</Link>,
      <Link to="/services/security-services" className="bottom-link" onClick={scrollToTop} key="securityServicesLink">Security Services</Link>,
      <Link to="/services/backup-solutions" className="bottom-link" onClick={scrollToTop} key="backupSolutionsLink">Backup Solutions</Link>,
    ],
  };

  return (
    <div className="background">
      <div className="container">
        <div className="row justify-content-between">
          <Card {...aboutHostXContent} />
          <Card {...helpCenterContent} />
          <Card {...resourcesContent} />
          <Card {...accountContent} />
          <Card {...shoppingContent} />
        </div>
      </div>

      <footer className="container mt-5">
        {/* 1st Row */}
        <div className="row">
          <div className="col-sm-2 mb-2">
            {/* Logo */}
            <img src="/images/Home/Footer.png" alt="Logo" height="40" />
            <p> Registered Co. No-12496203</p>
          </div>
          <div className="col-sm-6 mb-2">
            {/* Terms and Policies */}
            {/* <p className='text-white'>Terms of Use |Privacy Policy |Trademarks |License Agreements</p> */}
            <ul className="list-inline">
              <li className="list-inline-item"> <Link to="/termofuse" className='text-white' style={{ textDecoration: "none" }}>Terms of Use</Link> |</li>
              <li className="list-inline-item"> <Link to="/privacyPolice" className='text-white' style={{ textDecoration: "none" }}>Privacy Policy</Link> |</li>
              <li className="list-inline-item"><Link to="/tradeMark" className='text-white' style={{ textDecoration: "none" }}>Trademarks</Link> |</li>
              <li className="list-inline-item"><Link to="/license" className='text-white' style={{ textDecoration: "none" }}>License Agreements</Link></li>
            </ul>
            <p> Copyright © 2024, HostX Ltd. All Rights Reserved. The HOSTX word mark is a registered trademark of HostX Operating Company.</p>

          </div>
          <div className="col-sm-4">
            {/* Social Media Icons */}
            <div className="col-sm-2 mx-auto d-flex text-right">
              {/* Font Awesome Icons */}
              <a href="https://www.instagram.com/hostxuk?igsh=MThjMnQxem5jaG1sZw==" target="_blank" className="social-link">
                <i className="fab fa-instagram fa-lg px-3"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61554709028307" target="_blank" className="social-link">
                <i className="fab fa-facebook-f fa-lg px-3"></i>
              </a>

              <a href="https://x.com/hostxuk/status/1749461725512945746?s=46" target="_blank" className="social-link">
                <i className="fab fa-twitter fa-lg px-3"></i>
              </a>

              <a href="https://www.linkedin.com/company/hostxuk/" target="_blank" className="social-link">
                <i className="fab fa-linkedin-in fa-lg px-3"></i>
              </a>
              <a href="https://youtube.com/@hostxuk?si=6VOyOWu8SA1p1K30" target="_blank" className="social-link">
                <i className="fab fa-youtube fa-lg px-3"></i>
              </a>
              <a href="https://www.tiktok.com/@hostxuk?_t=8jJ3TcXAfyq&_r=1" target="_blank" className="social-link">
                <i className="fab fa-tiktok fa-lg px-3"></i>
              </a>
            </div>
          </div>
        </div>


        <div className="row mt-2">
          <div className="col-sm-9">

            <p>Use of this Site is subject to express terms of use.</p>
            <p> By using this site, you signify that you agree to be bound by these<strong style={{ marginLeft: '10px', color: '#fff' }}>Universal Terms of Service.</strong> </p>
          </div>
          <div className="col-sm-3 mx-auto d-flex justify-content-end" style={{ marginTop: '2rem' }}>
            {/* Developed by TechX */}
            <p> Developed by </p> <strong style={{ marginLeft: '20px', color: '#fff' }}>HostX</strong>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
