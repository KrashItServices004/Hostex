import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';
import "@fontsource/orbitron";
import "@fontsource/roboto";
import "./App.css";
// import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Bottom from './Components/Bottom';
import Footer from './Components/Footer';
import About from './Components/About';
// import Foot from './Components/Foot';
import Contact from './Components/Contact';
import Suport from './Components/Suport';
import SpamGuard from './Components/HostingFeatures/SpamGuard';
import { ToastContainer, toast } from 'react-toastify';

import DomainEmailReg from './Components/services/DomainEmailReg';
import WebHoisting from './Components/services/WebHoisting';
import Sslcertificates from './Components/services/Sslcertificates';
import WebsiteAppBuilder from './Components/services/WebsiteAppBuilder';
import MangeServices from './Components/services/MangeServices';
import Security from './Components/services/Security';
import BackupSolution from './Components/services/BackupSolution';
import RepostAbuse from './Components/RepostAbuse';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Components/Profile';
import Investor from './Components/Investor';
import Career from './Components/Career';
import Legal from './Components/Legal';
import TrustCenter from './Components/TrustCenter';
import CSR from './Components/CSR';
import TradeMark from './Components/TradeMark';
import TermOfUse from './Components/TermOfUse';
import PrivacyPolice from './Components/PrivacyPolice';
import License from './Components/License';


function App() {
  const [cookies, setCookie] = useCookies(['email', 'username']);
  let location = useLocation();

  console.log(location)
 
  const handleAcceptAll = () => {
    // Set your additional cookies here
    setCookie('email', 'user@example.com', { path: '/', maxAge: 31536000 }); // Set to expire in 1 year
    setCookie('username', 'JohnDoe', { path: '/', maxAge: 31536000 }); // Set to expire in 1 year
    // Add more as needed
  };

  return (
    <div className="App fstyle">
        {/* <SpamGuard /> */}
        {/* <Header /> */}
      

        {
          location.pathname && location.pathname !== '/profile' ?
            <Navbar /> : ""
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suport" element={<Suport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/report" element={<RepostAbuse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/career" element={<Career />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/TrustCenter" element={<TrustCenter />} />
          <Route path="/CorporateResponsibility" element={<CSR />} />
          <Route path="/tradeMark" element={<TradeMark />} />
          <Route path="/termofuse" element={<TermOfUse />} />
          <Route path="/privacyPolice" element={<PrivacyPolice />} />
          <Route path="/license" element={<License />} />

          <Route path="/services/domain-email-reg" element={<DomainEmailReg />} />
          <Route path='/services/web-hoisting' element={<WebHoisting />} />
          <Route path='/services/ssl-certificates' element={<Sslcertificates />} />
          <Route path='/services/website-app-builder' element={<WebsiteAppBuilder />} />
          <Route path='/services/manage-services' element={<MangeServices />} />
          <Route path='/services/security-services' element={<Security />} />
          <Route path='/services/backup-solutions' element={<BackupSolution />} />

        </Routes>
        <ToastContainer />
        <Bottom />
        <Footer />
        {/* <Foot /> */}
        <CookieConsent
          location="bottom"
          buttonText="Accept Necessary"
          cookieName="myNecessaryCookieConsent"
          style={{ background: "#2B373B", flexGrow: 1, marginRight: '10px' }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          <p> This website uses cookies to enhance the user experience.</p>
        </CookieConsent>


    </div>

  );
}

export default App;
