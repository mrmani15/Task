import React, { Component } from 'react'
import '../../App.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className = "text-center">
                <div className="card bg-dark text-white homeDiv">
                    <img id = "overlay" src="homePage.jpg" className="card-img" alt="ovelay" />
                    <div className="card-img-overlay">
                        <h1 className="card-title display-4 ovrlayHeading">MAPS Microfinance</h1>
                        <p className="card-text h1 overlayText ">Invest your spare change and grow from there.</p>
                    </div>
                </div>
                <h2 className = "display-4 font-weight-bold horizonHeading">Horizons For Investment</h2>
                <div class="card-deck cardDeck">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <img id = "investSmall" src="smallInvest.jpg" className="card-img-top" alt="investSmall"/>
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold h3">Invest your spare change</h5>
                        <p className="card-text">Set aside the leftover change from everyday purchases by turning on automatic Round-Ups.</p>
                        <button type="button" className="btn btn-primary">Show More...</button>
                        </div>
                    </div>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <img src="saveForLater.jpg" className="card-img-top" alt="saveForLater"/>
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold h3">Save for later</h5>
                        <p className="card-text">Get ready for later in life using Acorns Later, the easiest way to save for retirement.</p>
                        <button type="button" className="btn btn-primary">Show More...</button>
                        </div>
                    </div>
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <img src="growYourKnowledge.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold h3">Grow your knowledge</h5>
                        <p className="card-text">Learn how to get more from your money with easy-to-understand articles and videos from financial experts.</p>
                        <button type="button" className="btn btn-primary">Show More...</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
