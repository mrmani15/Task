import React, { Component } from 'react'
import StripeCheckout from "react-stripe-checkout"
export default class Transaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    render() {
        return (
            <div className = "container flex-column mt-4">
                <label className = "h3 flex-column">Enter the Amount</label>
                <input className = "form-control-sm p-2 ml-2" type="text" onChange={this.handleChange} value = {this.state.amount} name="amount"/>
                <StripeCheckout 
                    className="ml-2 btn btn-primary btn-lg"
                    stripekey = "pk_test_lpfgDzyQhYmE25JSePwT7g7q00a8jHMp6N"
                    amount = {this.state.amount}/>
            </div>
        )
    }
}
