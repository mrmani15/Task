import React, { Component } from 'react'
import {Link} from "react-router-dom"
import '../../App.css'


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h1 className = "text-center font-weight-bold dashboardHeading">User Dashboard</h1>
                <hr className="mt-3"/>
                <div className="container">
                    <div className="row ml-4 mt-3">
                        <div className="col-4">
                            <div className="row">
                                <center>
                                    <h3>
                                        INVESTMENT
                                    </h3>
                                </center>
                            </div>
                            <div className="row">
                                <center>
                                    <h4>
                                    ₹ 50000
                                    </h4>
                                </center>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <center>
                                    <h3>
                                        CURRENT VALUE
                                    </h3>
                                </center>
                            </div>
                            <div className="row">
                                <center>
                                    <h4>
                                    ₹ 56000
                                    </h4>
                                </center>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <center>
                                    <h3>
                                        RETURNS
                                    </h3>
                                </center>
                            </div>
                            <div className="row">
                                <center>
                                    <h4>
                                    ₹ 6000
                                    </h4>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-3"/>
                <center className = "centerTag">
                    <h2 className="mt-3">
                        SEE WHERE YOUR MONEY GOES
                    </h2>
                </center>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-4">
                            <div className="card text-white bg-info mb-3 shadow p-3 mb-5 bg-dark rounded" style={{maxWidth: "18rem"}}>
                                <div className="card-header h3">INDUSINDBK</div>
                                <div className="card-body">
                                    <h5 className="card-title">Indus Ind Bank</h5>
                                    <p className="card-text">CURRENT RATE: 1180.95 <br/>
                                                             TODAYS'S HIGH: 1203.85 <br/>
                                                             TODAYS'S LOW: 1145.05</p>
                                    <Link to ="/dashboard/indusInd" ><button className="btn btn-warning"> SEE DETAIL</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-info mb-3 shadow p-3 mb-5 bg-dark rounded" style={{maxWidth: "18rem"}}>
                                <div className="card-header h3">ZEEL</div>
                                <div className="card-body">
                                    <h5 className="card-title">Zee Entertainment </h5>
                                    <p className="card-text">CURRENT RATE: 260.55<br/>
                                                             TODAYS'S HIGH: 260.85<br/>
                                                             TODAYS'S LOW: 251.00</p>
                                    <Link to ="/dashboard/zeel" ><button className="btn btn-warning"> SEE DETAIL</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-info mb-3 shadow p-3 mb-5 bg-dark rounded" style={{maxWidth: "18rem"}}>
                                <div className="card-header h3">TATASTEEL</div>
                                <div className="card-body">
                                    <h5 className="card-title">Tata Steel</h5>
                                    <p className="card-text">CURRENT RATE: 443.45<br/>
                                                             TODAYS'S HIGH: 447.70<br/>
                                                             TODAYS'S LOW: 428.00</p>
                                    <Link to ="/dashboard/tataSteel" ><button className="btn btn-warning"> SEE DETAIL</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-info mb-3 shadow p-3 mb-5 bg-dark rounded" style={{maxWidth: "18rem"}}>
                                <div className="card-header h3">SBIN</div>
                                <div className="card-body">
                                    <h5 className="card-title">State Bank Of India </h5>
                                    <p className="card-text">CURRENT RATE: 327.90<br/>
                                                             TODAYS'S HIGH: 329.20<br/>
                                                             TODAYS'S LOW: 318.75</p>
                                    <Link to ="/dashboard/sbin" ><button className="btn btn-warning"> SEE DETAIL</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-info mb-3 shadow p-3 mb-5 bg-dark rounded" style={{maxWidth: "18rem"}}>
                                <div className="card-header h3">POWERGRID</div>
                                <div className="card-body">
                                    <h5 className="card-title">Power Grid</h5>
                                    <p className="card-text">CURRENT RATE: 189.85<br/>
                                                             TODAYS'S HIGH: 190.70<br/>
                                                             TODAYS'S LOW: 185.90</p>
                                    <Link to ="/dashboard/powergrid" ><button className="btn btn-warning"> SEE DETAIL</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-white bg-info mb-3 shadow p-3 mb-5 bg-dark rounded" style={{maxWidth: "18rem"}}>
                                <div className="card-header h3">MRF</div>
                                <div className="card-body">
                                    <h5 className="card-title">MRF </h5>
                                    <p className="card-text">CURRENT RATE: 70740.05<br/>
                                                             TODAYS'S HIGH: 71232.60<br/>
                                                             TODAYS'S LOW: 69751.10</p>
                                    <Link to ="/dashboard/mrf" ><button className="btn btn-warning"> SEE DETAIL</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}





