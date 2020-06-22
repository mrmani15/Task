import React, { Component } from 'react';
import ShowGraph from './ShowGraph';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	'chart-container': {
		height: 500,
		width: '90%',
		margin: 'auto',
	},
});

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			price: 0,
			lineChartData: {
				labels: [],
				datasets: [
					{
						type: 'line',
						label: 'BTC-USD',
						backgroundColor: 'rgba(0, 0, 0, 0)',
						borderColor: this.props.theme.palette.primary.main,
						pointBackgroundColor: this.props.theme.palette.secondary
							.main,
						pointBorderColor: this.props.theme.palette.secondary
							.main,
						borderWidth: '2',
						lineTension: 0.45,
						data: [],
					},
				],
			},
			lineChartOptions: {
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					enabled: true,
				},
				scales: {
					xAxes: [
						{
							ticks: {
								autoSkip: true,
								maxTicksLimit: 10,
							},
						},
					],
				},
			},
		};
	}

	componentDidMount = () => {
		let ws = new WebSocket('wss://ws-feed.pro.coinbase.com');
		ws.onopen = () => {
			ws.send(
				JSON.stringify({
					type: 'subscribe',
					product_ids: ['BTC-USD'],
					channels: [
						'level2',
						'heartbeat',
						{ name: 'ticker', product_ids: ['BTC-USD'] },
					],
				})
			);
		};
		ws.onmessage = event => {
			var response = JSON.parse(event.data);
			if (response.type === 'ticker') {
				// console.log(response);

				const oldBtcDataSet = this.state.lineChartData.datasets[0];
				const newBtcDataSet = { ...oldBtcDataSet };
				newBtcDataSet.data.push(response.price);
				this.setState({
					price: response.price,
				});

				const newChartData = {
					...this.state.lineChartData,
					datasets: [newBtcDataSet],
					labels: this.state.lineChartData.labels.concat(
						new Date().toLocaleTimeString()
					),
				};
				this.setState({ lineChartData: newChartData });
			}
		};
	};

	render() {
		const { classes } = this.props;
		if (this.state.price !== 0) {
			return (
				<>
					<div className={classes['chart-container']}>
						<h2>Current BTC_USD is {this.state.price}</h2>
						<ShowGraph
							data={this.state.lineChartData}
							options={this.state.lineChartOptions}
						/>
					</div>
				</>
			);
		} else {
			return <h1>Wait.........</h1>;
		}
	}
}
export default withStyles(styles, { withTheme: true })(Home);
