import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import 'font-awesome/css/font-awesome.min.css';
import NavLogo from "../assets/Images/logo.png"
import '../Style/profile.css'
const Profile = () => {


    const [navbarShow, setNavbarShow] = useState(false);
    const [exploreShow, setExploreShow] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const handleNavbarToggle = () => {
        setNavbarShow(!navbarShow);
        setExploreShow(false); // Close Explore when Navbar is toggled
    };

    const handleExploreToggle = () => {
        setExploreShow(!exploreShow);
        setNavbarShow(false); // Close Navbar when Explore is toggled
    };

    const handleNavLinkClick = () => {
        setNavbarShow(false);
        setExploreShow(false);
    };
    const navigate = useNavigate()

    useEffect(() => {
        const data = localStorage.getItem("email");
        if (!data) {
            navigate('/login')
        }
    }, [])
    return (
        <>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ borderBottom: '1px solid green' }}>
                <div className="container-fluid fstyle">
                    <NavLink to="/" className="navbar-logo-link">
                        <img
                            style={{ marginLeft: "20px" }}
                            className="navbar-logo"
                            src={NavLogo} // Replace with the actual path to your image
                            alt=""
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleNavbarToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${navbarShow ? 'show' : ''}`} id="navbarSupportedContent" style={{ justifyContent: "space-between" }}>
                        <div>

                            <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        HOME
                                    </NavLink>
                                </div>
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        Website
                                    </NavLink>
                                </div>
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        Hosting
                                    </NavLink>
                                </div>
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        Emails
                                    </NavLink>
                                </div>
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        Domains
                                    </NavLink>
                                </div>
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        VPS
                                    </NavLink>
                                </div>
                                <div className="nav-item" style={{ fontFamily: "Roboto" }}>
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                                        Billing
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ flexDirection: "row" }}>
                                <div className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" onClick={handleNavLinkClick}  >
                                        <i class="fa fa-search" style={{ fontSize: "22px" }} aria-hidden="true"></i>
                                    </NavLink>
                                </div>

                                <div className="nav-item">
                                    <NavLink className="nav-link m-20" aria-current="page" onClick={handleNavLinkClick} >
                                        <i class="fa fa-flag" style={{ fontSize: "22px" }} aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink className="nav-link m-20" aria-current="page" onClick={handleNavLinkClick} >
                                        <i class="fa fa-home" style={{ fontSize: "22px" }} aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink className="nav-link m-20" aria-current="page" onClick={handleNavLinkClick} >
                                        <i class="fa fa-volume-up" style={{ fontSize: "22px" }} aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink className="nav-link m-20" aria-current="page" onClick={handleNavLinkClick} >
                                        <i class="fa fa-question-circle" style={{ fontSize: "22px" }} aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink className="nav-link m-20" aria-current="page" onClick={handleNavLinkClick} >
                                        <i class="fa fa-user-circle-o" style={{ fontSize: "22px" }} aria-hidden="true"></i>
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>


            <div className="container mt-5">


                <h1 className="text-center">profile page</h1>
            </div>
        </>

    )
}

export default Profile