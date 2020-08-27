import React, { Component } from 'react'
import fire from "../../config/fire"
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {checkUser} from '../../Redux/Action'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault()
        this.sendDetail()
    }

    sendDetail = () => {
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((a) => {
            alert("SignIn Successful")
            this.props.checkUser()
            console.log(a)
        })
        .catch((err) => {
            alert(err.code)
            console.log(err.code)
        })
    }
    
    render() {
        console.log(this.props)
        return (
            this.props.isLogin ?
            (
                <Redirect to = "/" />
            ) :
            (
                <div>
                    <div className = "container m-auto">
                            <h2>Login</h2>
                            <div className="row">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input value = {this.state.email} name = "email" onChange = {(e) => this.handleChange(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Password</label>
                                        <input value = {this.state.password} name = "password" onChange = {(e) => this.handleChange(e)} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    
                                    <button onClick = {this.login} type="submit" className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                </div>

            )
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
    state: state
})

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(checkUser())
})

export default connect (mapStateToProps, mapDispatchToProps)(Login)

