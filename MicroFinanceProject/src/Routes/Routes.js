import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../Components/Common/Home'
import Login from '../Components/Auth/Login'
import Signup from '../Components/Auth/Signup'
import ErrorPage from '../Components/Common/ErrorPage'
import {signOffUser} from '../Redux/Action'
import { connect } from 'react-redux'
import Transaction from '../Components/Common/Transaction'
import Dashboard from '../Components/Common/Dashboard'
import TATAChart from '../Components/Common/TATAChart'
import SBINChart from '../Components/Common/SBINChart'
import PowerGridChart from '../Components/Common/PowerGridChart'
import MRFChart from '../Components/Common/MRFChart'
import INDUSINDChart from '../Components/Common/INDUSINDChart'
import ZEELChart from '../Components/Common/ZEELChart'

class Routes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    signout = (e) => {
        e.preventDefault()
        this.props.signOffUser()
    }
    
    render() {
        return (
            <>
                {
                    this.props.isLogin ?
                    (
                        <div className = "Nav1 p-3 sticky-top">
                            <Link to = "/" className = "m-2 p-2 text-white">Home</Link>
                            <Link to = "/transaction" className = "m-2 p-2 text-white">Transaction</Link>
                            <Link to = "/dashboard" className = "m-2 p-2 text-white">Dashboard</Link>
                            <button onClick = {this.signout} className = "float-right">Sign-Out</button>
                        </div>
                    ):
                    (
                        <div className = "Nav1 p-3 sticky-top">
                            <Link to = "/" className = "m-2 p-2 text-white">Home</Link>
                            <Link to = "/login" className = "m-2 p-2 text-white">Login</Link>
                            <Link to = "/signup" className = "m-2 p-2 text-white">Signup</Link>
                        </div>
                    )
                }
                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/login" component = {Login} />
                    <Route path = "/signup" component = {Signup} />
                    <Route exact path = "/dashboard" component = {Dashboard} />
                    <Route path = "/transaction" component = {Transaction} />
                    <Route path ="/dashboard/indusInd" component = {INDUSINDChart} />
                    <Route path = "/dashboard/zeel" component = {ZEELChart} />
                    <Route path = "/dashboard/tataSteel" component = {TATAChart} />
                    <Route path = "/dashboard/sbin" component = {SBINChart} />
                    <Route path = "/dashboard/powergrid" component = {PowerGridChart} />
                    <Route path = "/dashboard/mrf" component = {MRFChart} />
                    <Route component = {ErrorPage} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    signOffUser: () => dispatch(signOffUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)

