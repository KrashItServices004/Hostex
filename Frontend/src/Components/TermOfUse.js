import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const TermOfUse = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-5">
                    <h1 className='text-center mb-5' style={{ color: "red" }}>The UNIVERSAL TERMS OF SERVICE AGREEMENT</h1>

                    <h4 className='text-center mb-3' style={{ color: "#2aba09" }} > sets forth the general terms and conditions of your use of HostX and the products and services purchased or accessed through this Site (individually and collectively, the “Services”).</h4>
                </div>
                <div className='mb-5'>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-12 mb-4 rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>Modification of Agreement, Site, or Services :</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        HostX may, in its sole and absolute discretion, change or modify this Agreement and any policies or agreements which are incorporated herein, at any time, and such changes or modifications shall be effective immediately upon posting to this Site. Your use of this Site or the Services after such changes or modifications have been made shall constitute your acceptance of this Agreement as last revised. If you do not agree to be bound by this Agreement as last revised, do not use (or continue to use) this Site or the Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>Eligibility; Authority :</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        Our user-friendly dashboards present essential financial data, making it easy for you to grasp our performance metrics, annual reports, and future projections. Navigate through our quarterly earnings calls and investor presentations with a seamless, visually engaging experience.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>Your Account :</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        In order to access some of the features of this Site or use some of the Services, you will have to create an Account. You represent and warrant to HostX that all information you submit when you create your Account is accurate, current, and complete, and that you will keep your Account information accurate, current, and complete. If HostX has reason to believe that your Account information is untrue, inaccurate, out-of-date, or incomplete, HostX reserves the right, in its sole and absolute discretion, to suspend or terminate your Account. You are solely responsible for the activity that occurs on your Account, whether authorized by you or not. HostX - UNIVERSAL TERMS OF SERVICE AGREEMENT, 5. GENERAL RULES OF CONDUCT
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className='mb-5 p-4' style={{ borderRadius: "10px", backgroundColor: "rgb(34, 77, 24)" }}>
                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                        <ul className="text-white">
                            <li>Your use of this Site and Services must comply with this Agreement, applicable Services Agreement, and relevant laws.</li>
                            <li>Do not collect or harvest User Content or personal information without explicit written consent.</li>
                            <li>Use the Site and Services responsibly; do not engage in illegal activities, exploitation, terrorism, spam, hacking, or any other prohibited actions.</li>
                            <li>Respect intellectual property, privacy, and confidentiality rights; do not interfere with the Site's operation.</li>
                            <li>Do not spread viruses, false claims, or perform fraudulent activities. Do not overload the infrastructure unreasonably.</li>
                            <li>Do not copy or distribute the Site or Services without explicit authorization.</li>
                            <li>Back up your User Content; GoDaddy is not responsible for data loss.</li>
                            <li>Do not resell or commercially use the Services without explicit written consent.</li>
                            <li>Do not interfere with the Site's security features; provide necessary identification when requested.</li>
                            <li>Consent to potential calls, recordings, and marketing communications, subject to applicable laws.</li>
                            <li>GoDaddy reserves the right to deny access to Users engaged in inappropriate or unlawful activities.</li>
                        </ul>
                    </p>
                </div>
                <div className='mb-5'>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-12 mb-4 rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>PROTECTION OF YOUR DATA</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        HostX provides certain hosted Services subject to data processing agreements, ensuring compliance with privacy laws.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>USER CONTENT</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        <ul >
                                            <li>User Submissions are voluntary, non-confidential, and may be used by GoDaddy without obligation or compensation.</li>
                                            <li>GoDaddy owns exclusive rights to User Submissions posted on the Site.</li>
                                            <li>User Content other than User Submissions grants GoDaddy a license to use, reproduce, and distribute the content for various purposes.</li>
                                            <li>Licenses granted by Users are perpetual and irrevocable, except for "private" or "password protected" User Content.</li>
                                            <li>In summary, comply with terms, use services responsibly, protect data, and understand the ownership and usage terms for User Content.</li>
                                        </ul>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>Your Account :</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        In order to access some of the features of this Site or use some of the Services, you will have to create an Account. You represent and warrant to HostX that all information you submit when you create your Account is accurate, current, and complete, and that you will keep your Account information accurate, current, and complete. If HostX has reason to believe that your Account information is untrue, inaccurate, out-of-date, or incomplete, HostX reserves the right, in its sole and absolute discretion, to suspend or terminate your Account. You are solely responsible for the activity that occurs on your Account, whether authorized by you or not. HostX - UNIVERSAL TERMS OF SERVICE AGREEMENT, 5. GENERAL RULES OF CONDUCT
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="mb-5 ">
                    <h1 className='text-center mb-5 mt-5' style={{ color: "red" }}>HostX - UNIVERSAL TERMS OF SERVICE AGREEMENT</h1>

                    <h4 className='text-center mb-3' style={{ color: "#2aba09" }} > GENERAL RULES OF CONDUCT</h4>
                </div>
                <div className='mb-5 p-4' style={{ borderRadius: "10px", backgroundColor: "rgb(34, 77, 24)" }}>
                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                        <ul className="text-white">
                            <li>Your use of this Site and Services must adhere to this Agreement, relevant Services Agreement, and applicable laws.</li>
                            <li>Do not gather User Content or personal information without explicit written consent.</li>
                            <li>Use the Site and Services responsibly; avoid illegal activities, exploitation, terrorism, spam, hacking, or other prohibited actions.</li>
                            <li>Respect intellectual property, privacy, and confidentiality; refrain from interfering with the Site's operation.</li>
                            <li>Avoid spreading viruses, false claims, or engaging in fraudulent activities. Do not unreasonably overload the infrastructure.</li>
                            <li>Do not copy or distribute the Site or Services without explicit authorization.</li>
                            <li>Back up your User Content; HostX is not liable for data loss.</li>
                            <li>Do not resell or commercially use the Services without explicit written consent.</li>
                            <li>Do not disrupt the Site's security features; provide necessary identification when requested.</li>
                            <li>Consent to potential calls, recordings, and marketing communications, in compliance with applicable laws.</li>
                            <li>HostX reserves the right to deny access to Users involved in inappropriate or unlawful activities.</li>
                        </ul>
                    </p>
                </div>

                <div className='mb-5'>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-12 mb-4 rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>PROTECTION OF YOUR DATA</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        HostX offers certain hosted Services with data processing agreements to ensure compliance with privacy laws.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2 p-0'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }}>USER CONTENT</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        <ul >
                                            <li>User Submissions are voluntary and non-confidential, subject to use by HostX without obligation or compensation.</li>
                                            <li>HostX holds exclusive rights to User Submissions posted on the Site.</li>
                                            <li>User Content, excluding User Submissions, grants HostX a license for various purposes.
                                            </li>
                                            <li>User-granted licenses are perpetual and irrevocable, except for "private" or "password protected" User Content.</li>
                                            <li>In summary, adhere to terms, use services responsibly, safeguard data, and understand User Content ownership and usage terms.</li>
                                        </ul>

                                    </p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </>
    )
}

export default TermOfUse