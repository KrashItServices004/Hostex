import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const License = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [data, setData] = useState([
        {
            name: "LICENSE GRANT",
            details: "Licensor grants Licensee a non-exclusive, non-transferable license to use the services provided by HostX, including but not limited to website hosting, domain registration, and related services (the Services). The license is granted solely for Licensee's internal business purposes and is subject to compliance with the terms and conditions of this Agreement."
        },
        {
            name: "USE OF SERVICES",
            details: "Licensee agrees to use the Services in accordance with applicable laws, regulations, and the policies and guidelines provided by HostX. The license granted herein does not permit Licensee to resell or sublicense the Services without prior written consent from HostX."
        },
        {
            name: "TERM AND TERMINATION",
            details: "This Agreement is effective upon the commencement of the Services and will continue until terminated by either party. Either party may terminate this Agreement with written notice if the other party breaches any material term or condition. Upon termination, Licensee must cease all use of the Services, and any outstanding fees shall become immediately due and payable."
        },
        {
            name: "PAYMENT AND FEES",
            details: "Licensee agrees to pay all fees associated with the selected Services as outlined in the pricing and payment terms provided by HostX. Failure to pay fees when due may result in suspension or termination of the Services."
        },
        {
            name: "INTELLECTUAL PROPERTY",
            details: "Licensor retains all rights, title, and interest in and to the Services, including any intellectual property rights. Licensee acknowledges that no ownership rights are transferred under this Agreement, except for the limited license granted herein."
        },
        {
            name: "LIMITATIONS OF LIABILITY",
            details: "In no event shall Licensor be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with the use of the Services. Licensor's total liability for any claim arising under this Agreement shall not exceed the total fees paid by Licensee for the Services during the twelve (12) months preceding the claim.            "
        },
        {
            name: "CONFIDENTIALITY",
            details: "Both parties agree to keep confidential all non-public information received from the other party that is marked as confidential or reasonably should be understood to be confidential. This obligation of confidentiality shall survive the termination of this Agreement."
        },
        {
            name: "GOVERNING LAW",
            details: "This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.            "
        },
        {
            name: "ENTIRE AGREEMENT",
            details: "This Agreement constitutes the entire understanding between the parties concerning the subject matter hereof and supersedes all prior and contemporaneous agreements, whether oral or written."
        },
    ])


    return (
        <>
            <div className='container mt-5'>
                <div className="mb-5">
                    <h1 className='text-center mb-5' style={{ color: "red" }}>LICENSE AGREEMENT</h1>
                    <p className='fs-5 text-justify'>
                        This License Agreement ("Agreement") is entered into between [Your Company Name], hereinafter referred to as "Licensor," and the individual or entity agreeing to these terms, hereinafter referred to as "Licensee." This Agreement governs the use of the services provided by HostX, a division of [Your Company Name].

                    </p>
                </div>
                <div className='mb-5'>

                    <div className='row d-flex align-items-stretch'>
                        {
                            data && data.map((item) => {
                                return (
                                    <>

                                        <div className='col-12 mb-4  rounded mb-2'>
                                            <div className="p-4 mx-3 card shadow h-100">
                                                <div>
                                                    <h5 style={{ color: "#224d18" }} className="text-start"> {item.name}</h5>
                                                    <p className='fs-5 text-justify' style={{ marginBottom: "0px" }}>
                                                        {item.details}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>
            </div>

        </>
    )
}

export default License