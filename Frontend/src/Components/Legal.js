import { useState } from "react"


const Legal = () => {

    const [data, setData] = useState(
        [
            {
                name: "Secure Transactions",
                description: "Transfer funds with confidence using HostX's Good As Gold Prepaid Services."
            },
            {
                name: "Currency Compliance",
                description: "All transactions are conducted in U.S. dollars for transparency."
            },
            {
                name: "Initial Funding",
                description: "Start your Good As Gold Account with a minimum of $1,000.00 U.S. dollars."
            },
            {
                name: "Wire Transfers Made Easy ",
                description: "Initiate wire transfers in foreign currency, seamlessly converted to U.S. Dollars. "
            },
            {
                name: "Fee Awareness ",
                description: " Stay informed about wire transfer fees, subject to change but posted promptly."
            },
            {
                name: "User Responsibility ",
                description: " You are responsible for wire transfer fees and ensuring sufficient funds in your account."
            },
            {
                name: " Service Fee",
                description: "A $20.00 Service Fee may apply upon termination of your Good As Gold Account. "
            },
            {
                name: "Account Verification ",
                description: "Be prepared to provide necessary identification for security purposes. "
            },
            {
                name: "Flexible Funding ",
                description: " Top up your Good As Gold Account at your convenience."
            },
            {
                name: " Usage Guidelines",
                description: "Utilize Good As Gold funds exclusively through HostX's purchase process. "
            },
            {
                name: "Refund Process ",
                description: " Upon account termination, receive a refund net of the Service Fee."
            },
            {
                name: "Continuous Updates ",
                description: " Stay informed about fees and policies, subject to change without prior notice."
            },
        ]
    )

    const [Ddata, setDdata] = useState([
        {
            name: "Effortless Transactions",
            description: "Seamlessly purchase services using the Pay By Check option."
        },
        {
            name: "Electronic Payment",
            description: "Authorize electronic debits from your U.S. Dollar Checking Account."
        },
        {
            name: "Account Maintenance",
            description: "Keep your Checking Account current and funded for uninterrupted services."
        },
        {
            name: "Transaction Decline",
            description: "Acknowledge the right to decline transactions based on various reasons."
        },
        {
            name: "Refund Procedures",
            description: "Understand refund processes and possible service charges."
        },
        {
            name: "Communication Assurance",
            description: "Receive notices through various means, including email and text messages."
        },
    ])

    const [edata, setEdata] = useState([
        {
            name: "Global Payment Solutions",
            description: "Explore diverse international payment options through HostX."
        },
        {
            name: "IPP Agreement",
            description: "Confirm your agreement with the chosen International Payment Provider."
        },
        {
            name: "Transparent Fees",
            description: "Be aware of fees and Exchange Rate Conversion Fees associated with your IPP."
        },
        {
            name: "Funding Responsibility",
            description: "Maintain current and funded Funding Sources for successful transactions."
        },
        {
            name: "Service Flexibility",
            description: "Understand that services may not be fulfilled until payment confirmation."
        },
        {
            name: "Refund Policies",
            description: "Familiarize yourself with refund policies and potential adjustments due to IPP Fees."
        },
    ])
    return (
        <>
            <div className='container mt-5'>
                <div className="mb-4">

                    <h1 className='text-center mb-4' style={{ color: "red" }}>UNIVERSAL TERMS OF SERVICE AGREEMENT</h1>
                    <p className='fs-5 text-justify'>
                        At HostX, we believe in transparency and collaboration, and our Investor Relations page is your portal to the heartbeat of our company. As you explore this space, you'll discover a wealth of information designed for shareholders, potential investors, and financial analysts.


                    </p>

                </div>

                <div className='mb-5'>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> MODIFICATION OF AGREEMENT, SITE, OR SERVICES</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        This Agreement, effective from your use of our website ("Site"), governs your interaction with HostX. It encompasses the general terms and conditions for using the Site and the products and services offered ("Services"). Any additional agreements or policies specific to certain Services ("Services Agreements") supplement this Agreement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">OVERVIEW</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        HostX, in its discretion, may change this Agreement at any time, effective immediately upon posting on the Site. Your continued use of the Site or Services implies acceptance of the last revised Agreement. HostX may notify you of changes via email. Keep your account information current. HostX reserves the right to modify, change, or discontinue any aspect of the Site or Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">ELIGIBILITY & AUTHORITY</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        The Site and Services are for Users who can legally form contracts. By using the Site or Services, you affirm that you meet the eligibility criteria. If representing a corporate entity, you confirm legal authority to bind it to this Agreement. You are personally responsible if later found without the authority. HostX is not liable for losses resulting from reliance on instructions believed to be genuine.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">YOUR ACCOUNT</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        To access features or Services, create an Account. Ensure submitted information is accurate, current, and complete. HostX may suspend or terminate your Account if information is deemed inaccurate or incomplete. You are responsible for Account activity and must keep information secure. Notify HostX immediately of any security breaches or unauthorized Account use. HostX is not liable for losses due to unauthorized Account use, and you may be liable for losses incurred by HostX or others.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='mb-5'>
                    <h2 className='text-center mb-3' style={{ color: "#2aba09" }}>GENERAL RULES OF CONDUCT</h2>
                    <p className='fs-5 text-justify'>
                        Welcome to HostX, where your trust and online experience are our top priorities. By engaging with our Site and Services, you are entering into an agreement that upholds the highest standards of conduct. Here are the key points to ensure a secure and positive environment:
                    </p>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Compliance and Legal Responsibility</h5>
                                    <p>
                                        Your use of our Site and Services must align with this Agreement, applicable Services Agreements, and all relevant local, state, national, and international laws.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Respect for User Privacy</h5>
                                    <p>
                                        Avoid collecting or harvesting User Content or personally identifiable information without explicit written consent.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Lawful and Responsible Use</h5>
                                    <p>
                                        Engage in a manner that is legal, non-exploitative, and free from activities such as terrorism, violence, spam, or hacking.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Content Integrity and Security</h5>
                                    <p>
                                        Uphold intellectual property rights and refrain from activities that compromise the security and functionality of our Site and Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Restrictions on User Content</h5>
                                    <p>
                                        Do not copy, distribute, modify, or alter any part of our Site or Services without explicit authorization from HostX.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Data Back-Up Responsibility</h5>
                                    <p>
                                        Take charge of backing up your User Content to mitigate the risk of data loss, as we do not warrant the backup of Account or User Content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Commercial Use Authorization</h5>
                                    <p>
                                        Any commercial use of our Services or related technologies requires prior written consent from HostX.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Security Features and Access Limitations</h5>
                                    <p>
                                        Do not circumvent, disable, or interfere with security-related features. Adhere to access limitations and guidelines specified by HostX
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Verification of Identity</h5>
                                    <p>
                                        Be prepared to provide government-issued photo identification and/or business identification for identity verification upon request.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Communication Consent</h5>
                                    <p>
                                        Acknowledge that HostX may contact you about your account and consent to call recording for customer service purposes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Legal Rights and Denial of Services</h5>
                                    <p>
                                        HostX reserves the right to deny, cancel, terminate, suspend, or limit access to the Site or Services to users engaged in inappropriate or unlawful activities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Fraud Prevention</h5>
                                    <p>
                                        In cases of suspected fraud, abuse, or suspicious activity, HostX may cancel associated services and close related accounts.
                                        For any concerns or to contest the cancellation of services, please contact HostX Customer Care. Your trust and satisfaction are integral to our commitment to excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 mb-4 col-lg-6 rounded mb-2 p-0'>
                            <div className="p-3 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">Fraud Prevention</h5>
                                    <p>
                                        In cases of suspected fraud, abuse, or suspicious activity, HostX may cancel associated services and close related accounts.
                                        For any concerns or to contest the cancellation of services, please contact HostX Customer Care. Your trust and satisfaction are integral to our commitment to excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mb-5">

                    <h1 className='text-center mb-4' style={{ color: "#2aba09" }}>PROTECTION OF YOUR DATA</h1>
                    <p className='fs-5 text-justify mb-4'>
                        HostX provides certain hosted services subject to data processing agreements, ensuring compliance with privacy laws. Your data, excluding user content, may be processed in the course of using covered services. Our Controller to Processor Data Processing Addendum (DPA) guarantees robust mechanisms for data processing, including international transfers, in accordance with applicable data privacy laws.

                    </p>
                    <h5 className="blue text-center"> For DPA inquiries or a physical copy request, please contact <span className='text-primary'>privacy@hostx.com</span>.</h5>


                </div>
                <div className="mb-5">

                    <h1 className='text-center mb-4' style={{ color: "#2aba09" }}>USER CONTENT</h1>
                    <p className='fs-5 text-justify mb-4'>
                        Users can share content on our platform, such as forum posts, product reviews, or photos (User Submissions). By posting, you affirm you have the rights and permissions for distribution. User Submissions are voluntary and not confidential. HostX owns exclusive rights to User Submissions, allowing unrestricted use.
                    </p>
                    <p className='fs-5 text-justify mb-4'>
                        User Content, excluding User Submissions, grants HostX a license for various purposes. You authorize HostX to use, reproduce, and distribute the content in connection with our services. Licenses are perpetual and irrevocable, except for "private" or "password protected" User Content.
                    </p>


                </div>

                <div className='mb-4'>
                    <div className='row d-flex align-items-stretch'>
                        <h1 className='text-center mb-4' style={{ color: "#2aba09" }}>AVAILABILITY OF WEBSITE/SERVICES</h1>
                        <p className='fs-5 text-justify mb-4'>
                            We strive for 24/7 service availability, but interruptions may occur due to maintenance or unforeseen circumstances. We are not liable for continuous, uninterrupted access, acknowledging factors beyond our control.
                        </p>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> PRODUCT CREDITS</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        Credits, received with a valid purchase, are valid for one year. Redemption extends product subscription automatically, with the option to cancel. Free domain credits are deducted upon product cancellation, based on list price.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">MONITORING AND MODERATION OF CONTENT; RESTRICTIONS POLICY</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        We uphold content standards, prohibiting illegal or agreement-violating content. HostX may pre-screen or act against violative content, ensuring a secure environment. Repeated violations may result in suspension or termination of access.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center">EUROPEAN UNION DIGITAL SERVICES ACT (“DSA”) SUPPLEMENTAL TERMS OF SERVICE</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        For EU users, Section 11 supplements our Agreement as per the EU Digital Services Act. It covers conduct rules, content moderation, reporting illegal content, restrictions, and user rights. Disputes may be resolved through complaints, certified dispute settlement bodies, or judicial proceedings.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h5 className="blue text-center mb-4"> For further details, contact us at <span className='text-primary'>privacy@hostx.com</span>.</h5>
                        <p className='fs-5 text-justify mb-4'>
                            For Sections 11.6 and 11.9 compliance, "frequently" refers to 2 or more unfounded notices or complaints within 12 months. Decisions on suspension or termination consider factors like the volume and seriousness of complaints. Manifestly unfounded notices unrelated to illegal content may lead to suspension. Criteria for illegal content include volume, impact, and gravity. The suspension or termination duration is determined based on relevant facts.
                        </p>
                    </div>
                </div>
                <div className='mb-5 p-3' style={{ borderRadius: "10px", backgroundColor: "rgb(34, 77, 24)" }}>
                    <div className='row d-flex align-items-stretch'>

                        <div className='col-12 mb-4 mt-4 rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> 11.11 Search Engine: Recommender Systems Disclosure   </h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        Our Services feature a search engine for domain name registrations. It considers your query, account search history, and location to generate results. If the exact domain is unavailable, it shows matching names, possibly including alternative top-level domains based on your location. Promoted partnerships may appear. The search primarily relies on keywords, with search history and location as secondary parameters. The engine doesn't allow parameter changes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> 11.12 DSA Point of Contact</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        For inquiries about Section 11 or DSA matters, contact us at <span className='text-primary'>dsainquiries@hostx.com</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> 12. DISCONTINUED SERVICES; END OF LIFE POLICY</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        HostX reserves the right to cease any Services or features at any time, without notice. Efforts are made to maximize service lifespan, but discontinuation may occur. In the event of End-of-Life (EOL), HostX will notify you in advance. It's your responsibility to migrate or cease reliance before EOL. HostX may offer alternatives, in-store credit, or refunds at its discretion. No liability is assumed for modification, suspension, or discontinuance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> 13. BETA SERVICES</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        Beta Services are pre-release versions. Use entails risks, and HostX may modify or discontinue them. Commercial versions may differ. Feedback is encouraged, and user data may be tracked. Any information is confidential. Users grant exclusive ownership of feedback-related intellectual property to HostX. No warranties are provided for Beta Services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mb-4  rounded mb-2'>
                            <div className="p-4 mx-3 card shadow h-100">
                                <div>
                                    <h5 style={{ color: "#224d18" }} className="text-center"> 14. FEES AND PAYMENTS</h5>
                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                        General Terms, Including Automatic Renewal Terms
                                    </p>
                                    <ul>
                                        <li className="fs-5 text-justify">Payment is due at the time of order, and amounts are non-refundable.</li>
                                        <li className="fs-5 text-justify">Price changes may occur, with notice provided.</li>
                                        <li className="fs-5 text-justify">Payment methods include credit cards, electronic payments, PayPal, and others.</li>
                                        <li className="fs-5 text-justify">Refunds may be issued, with limitations and processing time frames.</li>
                                        <li className="fs-5 text-justify">Monthly billing dates are based on the purchase date.</li>
                                        <li className="fs-5 text-justify">Automatic renewal is default, but you can disable it.</li>
                                        <li className="fs-5 text-justify">In case of payment failure, GoDaddy may pursue remedies, including service cancellation.</li>
                                        <li className="fs-5 text-justify">Administrative fees may apply for certain tasks or noncompliance.</li>
                                        <li className="fs-5 text-justify">Notice Regarding Automatic Renewal and Recurring Billing Programs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mb-5">
                    <p className='fs-5 text-justify mb-4' style={{ marginBottom: "0px" }}>
                        To avoid service interruption, automatic renewal is default. Renewals are attempted using the associated payment method. Failure may result in service termination, and GoDaddy is not liable for such interruptions.
                    </p>
                    <p className='fs-5 text-justify mb-4' style={{ marginBottom: "0px" }}>

                        By using services, you agree to payment processing in the selected currency. Additional fees may apply depending on the Payment Method and location. HostX may charge administrative or processing fees for various reasons, and these fees will be billed to the payment method on file.
                    </p>
                    <p className='fs-5 text-justify mb-4' style={{ marginBottom: "0px" }}>
                        For currency-specific transactions, you may be subject to foreign transaction fees. VAT, GST, or other localized fees/taxes may apply based on your billing address and local regulations. Please check with your Payment Method issuer for details.
                    </p>
                    <h5 className="blue text-center">For further assistance or queries, contact us a <span className='text-primary'>billing@hostx.com</span>.</h5>


                </div>


                <div className='mb-5 p-3' style={{ borderRadius: "10px", backgroundColor: "rgb(34, 77, 24)" }}>
                    <h1 className='text-center mb-4 mt-2' style={{ color: "#2aba09" }}>REFUND POLICY
                    </h1>
                    <p className='fs-5 text-justify mb-4 text-white p-3 text-center'>
                        Discover the HostX Refund Policy for a worry-free experience.<br />
                        (C) GOOD AS GOLD PREPAID SERVICES
                    </p>
                    <div className='row d-flex align-items-stretch justify-content-center'>
                        {
                            data && data.map((item) => {
                                return (
                                    <>

                                        <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                            <div className='card p-4 h-100 '>
                                                <h3 style={{ color: "#224d18" }}> {item.name}</h3>
                                                <p>{item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                        <p className='fs-5 text-justify mb-4 mt-4 text-white p-3 text-center'>
                            (D) PAY BY CHECK (ELECTRONIC PAYMENT)
                        </p>
                        <div className='row d-flex align-items-stretch justify-content-center'>
                            {
                                Ddata && Ddata.map((item) => {
                                    return (
                                        <>
                                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                                <div className='card p-4 h-100 '>
                                                    <h3 style={{ color: "#224d18" }}> {item.name}</h3>
                                                    <p>{item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <p className='fs-5 text-justify mb-4 mt-4 text-white p-3 text-center'>
                            (E) INTERNATIONAL PAYMENT OPTIONS
                        </p>
                        <div className='row d-flex align-items-stretch justify-content-center'>
                            {
                                edata && edata.map((item) => {
                                    return (
                                        <>
                                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                                <div className='card p-4 h-100 '>
                                                    <h3 style={{ color: "#224d18" }}> {item.name}</h3>
                                                    <p>{item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <p className='fs-5 text-justify mb-4 mt-4 text-white p-3 text-center'>
                            (F) IN-STORE CREDIT BALANCES
                        </p>
                        <div className='row d-flex align-items-stretch justify-content-center'>

                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Credit Application</h3>
                                    <p>Apply In-Store Credits to future service purchases.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Currency Handling</h3>
                                    <p>Credits are processed based on the selected currency during the purchase.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Expiration Awareness</h3>
                                    <p>Note the expiry date of In-Store Credits and their non-transferable nature.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Administrative Fee</h3>
                                    <p>Acknowledge the potential administrative fee during credit conversion.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <p className='fs-5 text-justify mb-4 mt-4 text-white p-3 text-center'>
                            (G) EXPIRED DOMAIN NAME PURCHASES
                        </p>
                        <div className='row d-flex align-items-stretch justify-content-center'>

                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Payment Responsibility</h3>
                                    <p>Take prompt action in paying for expired domain names to retain purchase rights.

                                    </p>
                                </div>
                            </div>


                        </div>
                        <p className='fs-5 text-justify mb-4 mt-4 text-white p-3 text-center'>
                            (H) ROUND UP FOR CHARITY
                        </p>
                        <div className='row d-flex align-items-stretch justify-content-center'>

                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Charitable Contribution</h3>
                                    <p>
                                        Participate in Round Up for Charity to support small businesses affected by COVID-19.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Donation Assurance</h3>
                                    <p>
                                        Understand that the donation made through Round Up for Charity is non-refundable.
                                    </p>
                                </div>
                            </div>


                        </div>
                        <p className='fs-5 text-justify mb-4 mt-4 text-white p-3 text-center'>
                            (I) BUY NOW PAY LATER OPTIONS
                        </p>
                        <div className='row d-flex align-items-stretch justify-content-center'>

                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Flexible Payment</h3>
                                    <p>
                                        Opt for buy now pay later options with agreed-upon terms.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Third-Party Agreement</h3>
                                    <p>
                                        Acknowledge that repayment terms may be governed by a third party.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Responsibility Clarity</h3>
                                    <p>
                                        Clarify that GoDaddy is not liable for interest, late fees, or changes in credit score.HostX ensures a transparent and secure financial experience. For any queries, contact our support team.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Trademark and Copyright Claims</h3>
                                    <p>
                                    HostX supports intellectual property protection. Submit trademark or copyright claims following our policies.

                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Links to Third-Party Websites</h3>
                                    <p>
                                    HostX is not responsible for third-party websites linked on our platform. Users are encouraged to review external sites independently.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Disclaimer of Representations and Warranties</h3>
                                    <p>
                                    Your use of HostX is at your own risk. We provide services "as is" and disclaim any warranties. Users are urged to seek legal advice regarding auto-generated outputs.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 col-md-6  mb-4 rounded'>
                                <div className='card p-4 h-100 '>
                                    <h3 style={{ color: "#224d18" }}>Limitation of Liability</h3>
                                    <p>
                                    HostX, its officers, and third-party service providers are not liable for direct or indirect damages. This includes site content, linked sites, services, personal injury, unauthorized access, viruses, and user-generated content. Our disclaimer and limitation of liability apply to the fullest extent permitted by law.
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

export default Legal


