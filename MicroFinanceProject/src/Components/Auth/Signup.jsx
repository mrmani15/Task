import React, { Component } from 'react'
import fire from "../../config/fire"
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             username: "",
             password: "",
             email: "",
             dob: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signup = (e) => {
        e.preventDefault()
        this.sendDetail()
    }

    sendDetail = () => {
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((a) => {
            alert("User Registered Successfully")
            console.log(a)
        })
        .catch((err) => {
            console.log(err.code)
            alert(err.code)
        })
    }

    back = () => {
        this.props.history.push("/login")
    }
    
    render() {
        return (
            this.props.isLogin ?
            (
                <Redirect to = "/" />
            ) :
            (
                <div>
                    <div className = "container m-auto">
                        <h2>Signup</h2>
                        <div className="row">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Name</label>
                                    <input name = "name" onChange = {(e) => this.handleChange(e)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input name = "username" onChange = {(e) => this.handleChange(e)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input name = "email" onChange = {(e) => this.handleChange(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input name = "password" onChange = {(e) => this.handleChange(e)} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Date Of Birth</label>
                                    <input name = "dob" onChange = {(e) => this.handleChange(e)} type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                
                                <button onClick = {this.signup} type="submit" className="btn btn-primary">Signup</button>
                                <button onClick = {this.back} type="submit" className="btn btn-primary ml-2">Go To Login</button>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

