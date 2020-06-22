import React, { Component } from 'react';

export class Quiz extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comp: false,
			timer: 5,
			num: 0,
			que: [
				{
					que1: 'capital of india',
					opt1: 'kolkata',
					opt2: 'delhi',
					opt3: 'mumbai',
					opt4: 'bangore',
				},
				{
					que1: 'capital of bihar',
					opt1: 'ranchi',
					opt2: 'muzaffarpur',
					opt3: 'patna',
					opt4: 'gaya',
				},
				{
					que1: 'capital of punjab',
					opt1: 'kalka',
					opt2: 'chandigarh',
					opt3: 'ludhiana',
					opt4: 'moga',
				},
				{
					que1: 'capital of jharkhand',
					opt1: 'kodarma',
					opt2: 'hazaribagh',
					opt3: 'delhi',
					opt4: 'ranchi',
				},
			],
		};
	}
	componentDidMount = () => {
		setInterval(
			() =>
				this.setState({
					timer: this.state.timer - 1,
				}),
			1000
		);
	};
	componentDidUpdate = () => {
		if (this.state.num === 3) {
			this.setState({
				comp: true,
			});
		}
		if (this.state.timer === 0) {
			this.setState({
				num: this.state.num + 1,
				timer: 5,
			});
		}
	};
	nextque = e => {
		e.preventDefault();
		this.setState({
			num: this.state.num + 1,
			timer: 5,
		});
	};
	render() {
		let que = this.state.que;
		let num = this.state.num;
		if (this.state.comp) {
			return prompt('time complete');
		}
		return (
			<div>
				{this.state.timer}
				<h1>01.{que[num].que1}</h1>

				<input type="radio" name="options" value={que[num].opt1} />
				<label>{que[num].opt1}</label>
				<br />
				<input type="radio" name="options" value={que[num].opt2} />
				<label>{que[num].opt2}</label>
				<br />
				<input type="radio" name="options" value={que[num].opt3} />
				<label>{que[num].opt3}</label>
				<br />
				<input type="radio" name="options" value={que[num].opt4} />
				<label>{que[num].opt4}</label>

				<button onClick={this.nextque}>next</button>
			</div>
		);
	}
}

export default Quiz;
