import React from 'react'

const Dcma = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-sm-12  mx-auto'>
                    <div className='row mx-auto'>
                        <div className='col-sm-4'>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"> Copyright Owners Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>

                        </div>
                        <div className='col-sm-4'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"> Your Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Address</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>

                    </div>
                    <div className='row mx-auto'>
                        <div className='col-sm-4'>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>

                        </div>
                        <div className='col-sm-4'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Digital Signature</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>

                    </div>
                    <div className='row mx-auto'>
                        <div className='col-sm-6'>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">URL(s) and/or a description of the infringing content</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>

                        </div>
                        <div className='col-sm-6'>
                        <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"> URL(s) and/or a description of the original content</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>

                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-sm-12 px-3'>
                        By submiting this form, you attest, under penalty of perjury, that (1) you have a good faith belief that use of the material in this report is not authorized by the copyright owner, its agent, or the law; (2) you are the copyright owner or authorized to act on behalf of the copyright owner; and (3) you understand, under 17 U.S.C. § 512(f), that you may be liable for any damages, including costs and attorneys fees, if you knowingly materially misrepresent that the material you are reporting is infringing.
                        </div>
                    </div>
                    <button className='btn my-3 text-white' style={{background:"#00afff"}}>Report Abuse</button>
                </div>
            </div>
        </div>
    )
}

export default Dcma
