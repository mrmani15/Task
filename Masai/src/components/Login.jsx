import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginData } from '../redux/action';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleClick = e => {
		e.preventDefault();
		if (this.state.username === '' || this.state.password === '') {
			alert('Please Fill data properly');
			this.setState({
				username: '',
				password: '',
			});
		} else {
			const { loginDetail } = this.props;
			loginDetail(this.state);
			this.setState({
				username: '',
				password: '',
			});
		}
	};

	render() {
		if (this.props.status) {
			return <Redirect to="/" />;
		}
		return (
			<div
				className="mt-3 p-3"
				style={{
					border: '1px solid lightgrey',
					borderRadius: '20px',
					width: '100%',
				}}
			>
				<div className="d-flex justify-content-center">
					<img
						src="/twitter_sidebar.png"
						alt="logo"
						className="img-fluid"
						width="250px"
					/>
				</div>
				<h4>See what's happening in the world right now</h4>
				<form>
					<div style={{ backgroundColor: '#e8f0fe' }}>
						<label htmlFor="username">
							Phone, email, or username
						</label>
						<input
							type="text"
							className="form-control"
							value={this.state.username}
							id="username"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							onChange={this.handleChange}
							id="password"
						/>
					</div>
					<span>Forgot Password?</span>
					<div>
						<button
							className="btn btn-white border rounded-pill form-control"
							onClick={this.handleClick}
						>
							Log in
						</button>
						<center>or</center>
						<button className="btn btn-primary border rounded-pill form-control">
							Sign up
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	status: state.isLoggedIn,
	message: state.registrationResponseMessage,
});

const mapDispatchToProps = dispatch => ({
	loginDetail: payload => dispatch(loginData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
