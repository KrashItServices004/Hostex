import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const PrivacyPolice = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-5">
                    <h1 className='text-center mb-5' style={{ color: "red" }}>HostX - Global Privacy Notice</h1>
                    <p className='fs-5 text-justify'>
                        To view our archived Privacy Notice, click here.
                    </p>
                    <p className='fs-5 text-justify'>
                        Welcome to HostX, where privacy meets innovation. This Global Privacy Notice is a testament to our commitment to safeguarding your data and empowering you with control over your privacy preferences. Whether you're navigating our website, utilizing our services, or communicating with us, HostX is dedicated to ensuring a secure and personalized digital experience for all.
                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>Your Privacy, Your Control</h2>
                    <p className='fs-5 text-justify'>
                        HostX is committed to inclusivity, transparency, and putting you in control of your privacy. As outlined below:

                    </p>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start"> Website Visitors</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        Manage your privacy preferences directly through this notice by visiting Manage Privacy Settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start">Customers</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        Take charge of your privacy preferences in your Account Settings page.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start">Contact Us</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        For EU users, Section 11 supplements our Agreement as per the EU Digital Services Act. It covers conduct rules, content moderation, reporting illegal content, restrictions, and user rights. Disputes may be resolved through complaints, certified dispute settlement bodies, or judicial proceedings.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='mb-5'>
                    <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>Local Privacy Notices</h2>
                    <p className='fs-5 text-justify'>
                        This Global Privacy Notice is our foundation, applying to all individuals, regardless of location. However, specific locations may require customized local privacy notices. You can access these through the following links:
                    </p>
                    <div className='d-md-flex mt-sm-3' style={{ justifyContent: 'space-around' }}>

                        <h5 className="blue">    <i class="fa fa-map-marker" aria-hidden="true"></i> Europe (EEA/EU, UK, and Switzerland)</h5>
                        <h5 className="blue">    <i class="fa fa-map-marker" aria-hidden="true"></i> United States (California and other States)</h5>
                    </div>
                    <p className='fs-5 text-justify'>
                        We encourage residents of these areas to review their respective local customized notices.

                    </p>
                </div>
                <div className='mb-5'>
                    <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>Data Covered by this Privacy Notice
                    </h2>
                    <p className='fs-5 text-justify'>
                        This notice covers personally identifiable information (PII) when HostX acts as the data controller. PII is information that identifies or could be used to identify a specific person. It includes data such as your name, address, and payment details. We act as a controller when processing PII for our use, such as when you provide information to open an account.
                    </p>
                    <p className='fs-5 text-justify'>
                        This notice does not apply when you process PII for your benefit. For example, when you send business-related emails containing PII, you act as the controller, and we act as the processor, handling PII in accordance with your instructions or as required by law.
                    </p>
                    <p className='fs-5 text-justify'>
                        This notice does not apply when you process PII for your benefit. For example, when you send business-related emails containing PII, you act as the controller, and we act as the processor, handling PII in accordance with your instructions or as required by law.
                    </p>
                </div>
                <div className='mb-5 p-4' style={{ borderRadius: "10px", backgroundColor: "rgb(34, 77, 24)" }}>
                    <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>Core Privacy Rights
                    </h2>
                    <p className='fs-5 text-center text-white'>
                        At HostX, we recognize and respect several core privacy rights:
                    </p>
                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                        <ul className="text-white">
                            <li>GoDaddy reserves the right to deny access to Users engaged in inappropriate or unlawful activities.</li>
                            <li>The right to access, correct, or delete your PII</li>
                            <li>The right to transfer your PII (data portability)</li>
                            <li>The right to set your marketing and advertising preferences</li>
                        </ul>
                    </p>
                    <p className='fs-5 text-justify text-white'>
                        We promptly review requests to exercise privacy rights, ensuring a transparent and efficient process. If we cannot fulfill a request, we provide an explanation, details on the right to appeal, and information on filing a complaint, where applicable.

                    </p>
                </div>

                <div className='mb-5'>

                    <div className='row d-flex align-items-stretch'>
                        <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>PII We Collect</h2>


                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start">PII You Provide</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        We collect information when you set up an account, use our services, or contact us. This includes your name, email, phone number, address, and payment method.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start">PII We Collect Automatically</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        When you visit our websites, use our services, contact us, open emails, or view advertising, we automatically collect PII. Examples include device ID, IP address, and details about web pages and websites visited.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start">PII from Other Sources</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        We may obtain PII from publicly available data, social media, and third-party data providers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-start">PII We Generate</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        In the course of our business and services, we process data to generate inferences and insights linked to you or your account.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='mb-5 p-4' style={{ borderRadius: "10px", backgroundColor: "rgb(34, 77, 24)" }}>

                    <div className='col-12 mb-4 rounded mb-2 mt-4'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Use of PII</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    We utilize PII to operate our business and provide services, such as managing accounts, processing purchase requests, and securing and improving our services. Your PII is never sold.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Disclosures to Others</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    We disclose PII to processors for service operation, business partners for specific services, marketers and advertisers for personalized messages, law enforcement for legal requests, and in the event of asset sale or merger.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Cookies, Web Beacons, and Other Tools</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    HostX uses cookies, web beacons, and scripts to enhance your digital experience. These tools help provide customized services, measure website performance, and deliver personalized advertising. Manage your identifier settings through Manage Privacy Settings.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Marketing and Advertising Preferences</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    Manage your marketing and advertising preferences through this notice or your Account Settings. We respect your choices regarding customized marketing and advertising.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Storage and International Transfers</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    We store PII on our systems and with trusted service providers, ensuring compliance with applicable laws for international transfers. Learn more in our Data Privacy Framework Notice and European Data Protection Disclosures.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Length of Retention</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    We store PII on our systems and with trusted service providers, ensuring compliance with applicable laws for international transfers. Learn more in our Data Privacy Framework Notice and European Data Protection Disclosures.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Security</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    HostX employs risk-based measures to protect PII, requiring service providers, business partners, and advertisers to use appropriate controls.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">No Collection of PII about Children</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    HostX employs risk-based measures to protect PII, requiring service providers, business partners, and advertisers to use appropriate controls.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Legal Basis for Processing</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    We process PII based on your request, consent, contract fulfillment, legitimate interest, or other lawful bases. Contact us at privacy@hostx.com for questions about our processing basis.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Non-Discrimination and No Financial Incentives</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    We process PII based on your request, consent, contract fulfillment, legitimate interest, or other lawful bases. Contact us at privacy@hostx.com for questions about our processing basis.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mb-4 rounded mb-2'>
                        <div className="p-4 mx-3 card shadow h-100">
                            <div>
                                <h5 style={{ color: "#224d18" }} className="text-start">Policy Changes</h5>
                                <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                    HostX may update this Global Privacy Notice, with changes applying only to data collected before the new statement adoption, to the extent it does not reduce affected data subjects' rights. Check back for updates.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <h5 className="blue text-center"> Your trust in HostX is our priority. For any privacy-related queries or requests, contact us at <span className='text-primary'>privacy@hostx.com</span>.</h5>
                    <h2 className='text-center mb-3 mt-5 ' style={{ color: "#2aba09" }}>Thank you for choosing HostX — where your privacy is our commitment.</h2>

                </div>

            </div>

        </>
    )
}

export default PrivacyPolice