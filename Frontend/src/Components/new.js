{
    showResultRecord &&
        <React.Fragment>
            <div className="result_menu" >

                <div className="d-flex">
                    <span>
                        <Icon
                            style={{
                                color: "black",
                                fontSize: "15px",

                                opacity: "0.5",
                                marginBottom: "3px",
                                marginRight: "3px"

                            }}
                            // className={`${showResultRecord ? "rotate_icon" : "rotate_icon_first"}`}
                            name="tag"
                        />

                    </span>
                    <span className="f_600  f_13 d-flex">
                        Record Id <span className="result_overflow blue_color ml-2"> {updateTriggerChoosedRowId}</span>
                    </span>

                </div>

            </div>
            <div className="result_menu" onClick={() => { setOpenFiledsValue(!openFiledsValue) }} >
                <div>
                    <span>
                        <Icon
                            style={{
                                color: "black",
                                fontSize: "15px",
                                marginRight: "0px",

                                opacity: "0.5",
                                marginBottom: "3px",
                                marginRight: "2px"

                            }}
                            // className={`${showResultRecord ? "rotate_icon" : "rotate_icon_first"}`}
                            name="align justify"
                        />

                    </span>
                    <span className="f_600  f_13">
                        Filed value
                    </span>
                </div>

                <div>
                    <Icon
                        style={{
                            color: "black",
                            fontSize: "15px",
                            marginRight: "0px",
                            opacity: "0.5",
                            marginBottom: "3px"

                        }}
                        className={`${openFiledsValue ? "rotate_icon" : "rotate_icon_first"}`}
                        name="angle down"
                    />
                </div>

            </div>

            {
                openFiledsValue &&

                selectedRowAllDatas.columnSchema.map((item, i) => {

                    return (
                        <div style={{ padding: "4px 5px 4px 25px" }} className="result_menu">
                            <div className="result_overflow"
                                style={{ maxWidth: `${rightWidth - 70}px` }}
                            >
                                {/* <span>
                        <Icon
                            style={{
                                color: "black",
                                fontSize: "15px",

                                opacity: "0.5",
                                marginBottom: "3px"

                            }}
                            // className={`${showResultRecord ? "rotate_icon" : "rotate_icon_first"}`}
                            name="chain"
                        />
                    </span> */}
                                <span className="f_600  f_13">
                                    {item.name}
                                </span>
                                <span className="f_600  f_13" style={{ marginLeft: "10px" }}>
                                    {selectedRowAllDatas.rowData[0][item.columnId]}
                                </span>
                            </div>

                        </div>)
                })

            }

            <div className="result_menu" >

                <div className="d-flex">
                    <span>
                        <Icon
                            style={{
                                color: "black",
                                fontSize: "15px",

                                opacity: "0.5",
                                marginBottom: "3px"

                            }}
                            // className={`${showResultRecord ? "rotate_icon" : "rotate_icon_first"}`}
                            name="chain"
                        />

                    </span>
                    <span className="f_600  f_13 d-flex">
                        Base Record Url <span className="result_overflow ml-2" style={{ maxWidth: `${rightWidth - 180}px` }}>url Data</span>
                    </span></div>

            </div>


        </React.Fragment>


}