import React from 'react'

const Phishing = () => {
    return (

        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-sm-12  mx-auto'>
                    <div className='row mx-auto'>
                        <div className='col-sm-4'>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Your Full Name</label>
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
                                <label for="exampleFormControlInput1" className="form-label">Target of Phishing Campaign</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>

                    </div>
                    <div className='row mx-auto'>
                        <div className='col-sm-6'>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Evidence URLs</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Additional Evidence or Logs</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12  mx-auto'>
                        <div className='row mx-auto'>
                            <div className='col-sm-4'>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Digital Signature</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <div>
                                <p>By entering your name, you affirm all information is true and accurate.<br />
                                    All information submitted to us may be relayed to the customer during our remediation process. </p>
                            </div>
                        </div>
                    </div>
                    <button className='btn my-3 text-white' style={{ background: "#00afff" }}>Report Abuse</button>
                </div>
            </div>
        </div>

    )
}

export default Phishing
