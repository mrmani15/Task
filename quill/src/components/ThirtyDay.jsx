import React, { Component } from 'react';
import axios from 'axios';
import ShowThirtyDayGraph from './ShowThirtyDayGraph';

class ThirtyDay extends Component {
	constructor(props) {
		super(props);

		this.state = {
			label: [],
			data: [],
		};
	}
	componentDidMount() {
		let today = new Date();
		let one = new Date().setDate(today.getDate() - 30) / 1000;
		axios
			.get(
				'https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=' +
					one +
					'&end=9999999999&period=7200'
			)
			.then(response => {
				const arr = response.data;
				let datearr = [];
				let dataarr = [];
				for (let i = 0; i < arr.length; i++) {
					let tim = arr[i].date * 1000;
					let ti = new Date(tim).toLocaleDateString('en-US');
					datearr.push(ti);
					dataarr.push(arr[i].weightedAverage);
				}
				this.setState({
					label: datearr,
					data: dataarr,
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<ShowThirtyDayGraph
					label={this.state.label}
					data={this.state.data}
				/>
			</div>
		);
	}
}

export default ThirtyDay;
