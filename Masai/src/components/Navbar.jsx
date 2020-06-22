import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchName:''
		};
	}

	handleChange = e => {
		this.setState({
			searchName: e.target.value
		})
	}

	handleClick = e => {
		e.preventDefault();
		console.log(this.state.searchName)
		this.setState({
			searchName: ''
		})
	}

	render() {
		return (
			<div
				style={{
					borderBottom: '1px grey solid',
					width: '100%',
					height: '60px',
				}}
			>
				<div className="container pt-1">
					<div className="row d-flex align-items-center">
						<div className="col-8">
							<div className="row d-flex align-items-center">
								<div className="col-1">
									<img
										src="/logo.png"
										alt="logo"
										style={{ width: '50px' }}
									/>
								</div>
								<div className="input-group rounded-pill col-9">
									<input
										type="text"
										className="form-control rounded-pill"
										placeholder="Search Twitter"
										name='searchName'
										onChange={this.handleChange}
										value={this.state.searchName}
									/>
								</div>
								<div>
									<button className='btn btn-primary rounded-pill' onClick={this.handleClick}>
											Search
									</button>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="row d-flex align-items-center">
								<div className="col">
									<Link to="/sign-up">
										<button className="btn btn-primary border rounded-pill form-control">
											Sign Up
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
