import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTweet } from '../redux/action';
import HomeSidebarNav from './HomeSidebarNav';

class createTweet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newTweet: '',
		};
	}

	handleChange = e => {
		this.setState({
			newTweet: e.target.value,
		});
	};

	handleClick = e => {
		e.preventDefault();
		if (this.state.newTweet === '') {
			alert('Create new Tweet');
		} else {
			const tweet = this.state.newTweet;
			const { sendTweet } = this.props;
			sendTweet(tweet);
			this.setState({
				newTweet: '',
			});
		}
	};

	render() {
		return (
			<div className="d-flex">
				<HomeSidebarNav />
				<div className='m-auto'
					style={{ height: '50vh', width: '50vw' }}
				>
					<h3 className='mb-3 text-primary'>Create new tweet here</h3>
					<textarea
						cols="30"
						rows="8"
						name="newTweet"
						className="form-control"
						onChange={this.handleChange}
						placeholder="what going on"
						value={this.state.newTweet}
					></textarea>

					<button className="btn btn-primary mt-3" style={{float:'right'}} onClick={this.handleClick}>Post</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	sendTweet: payload => dispatch(addNewTweet(payload)),
});

export default connect(null, mapDispatchToProps)(createTweet);
