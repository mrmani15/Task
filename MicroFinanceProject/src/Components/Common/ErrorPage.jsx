import React, { Component } from 'react'

export default class ErrorPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    back = () => {
        this.props.history.push("/")
    }
    
    render() {
        return (
            <div>
                <p className = "text-center display-4">ERROR-404</p>
                <p className = "text-center display-4">Page Not Found</p>
                <center>
                    <button onClick = {this.back} type="submit" className="btn btn-primary ml-2">Go To Home</button>
                </center>
            </div>
        )
    }
}
