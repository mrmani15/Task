import React, { Component } from 'react';
import axios from 'axios';
import ShowOneDayGraph from './ShowOneDayGraph';

class OneDay extends Component {
	constructor(props) {
		super(props);

		this.state = {
			label: [],
			data: [],
		};
	}
	componentDidMount() {
		let today = new Date();
		let one = new Date().setDate(today.getDate() - 1) / 1000;
		axios
			.get(
				'https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=' +
					one +
					'&end=9999999999&period=300'
			)
			.then(response => {
				const arr = response.data;
				let datearr = [];
				let dataarr = [];
				for (let i = 0; i < arr.length; i++) {
					let tim = arr[i].date * 1000;
					let ti = new Date(tim).toLocaleTimeString('en-US');
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
				<ShowOneDayGraph
					label={this.state.label}
					data={this.state.data}
				/>
			</div>
		);
	}
}

export default OneDay;
