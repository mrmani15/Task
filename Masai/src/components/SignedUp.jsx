import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newRegistrationRequest } from '../redux/action';
import { Redirect } from 'react-router-dom';

class SignedUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			phone: '',
			email: '',
			username: '',
			password: '',
			dob: '',
			ownTweets: [],
			tweetFeed: [],
			follower: [],
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (
			this.state.name === '' ||
			this.state.phone === '' ||
			this.state.email === '' ||
			this.state.username === '' ||
			this.state.password === '' ||
			this.state.dob === ''
		) {
			alert('Please fill data properly');
			this.setState({
				name: '',
				phone: '',
				email: '',
				username: '',
				password: '',
				dob: '',
			});
		} else {
			const { sendRegisterDetail } = this.props;
			sendRegisterDetail(this.state);
			this.setState({
				name: '',
				phone: '',
				email: '',
				username: '',
				password: '',
				dob: '',
			});
		}
	};

	render() {
		if (this.props.status) {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<div
					className="container shadow mt-2"
					style={{ border: '1px solid lightgrey' }}
				>
					<div className="row">
						<div className="col">
							<div className="d-flex justify-content-center">
								<img src="/logo.png" alt="logo" width="60px" />
							</div>
							<h3 className="mt-2">Create Your Account</h3>
							<form className="mt-3">
								<label htmlFor="name">Name</label>
								<input
									id="name"
									type="text"
									className="form-control"
									onChange={this.handleChange}
									value={this.state.name}
								/>
								<label htmlFor="phone" className="mt-3">
									Phone
								</label>
								<input
									id="phone"
									type="number"
									className="form-control"
									onChange={this.handleChange}
									value={this.state.phone}
								/>
								<label htmlFor="email" className="mt-3">
									Email
								</label>
								<input
									id="email"
									type="email"
									className="form-control"
									onChange={this.handleChange}
									value={this.state.email}
								/>
								<label htmlFor="username" className="mt-3">
									Username
								</label>
								<input
									id="username"
									type="text"
									className="form-control"
									onChange={this.handleChange}
									value={this.state.username}
								/>
								<label htmlFor="password" className="mt-3">
									Password
								</label>
								<input
									id="password"
									type="password"
									className="form-control"
									onChange={this.handleChange}
									value={this.state.password}
								/>
								<label htmlFor="dob" className="mt-3">
									date of Birth
								</label>
								<input
									id="dob"
									type="date"
									className="form-control"
									onChange={this.handleChange}
									value={this.state.dob}
								/>
								<button
									className="btn btn-primary mt-3 mb-3"
									onClick={this.handleSubmit}
								>
									Sign Up
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	status: state.isLoggedIn,
	message: state.registrationResponseMessage,
});

const mapDispatchToProps = dispatch => ({
	sendRegisterDetail: payload => dispatch(newRegistrationRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedUp);
