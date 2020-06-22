import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutRequest } from '../redux/action'

class HomeSidebarNav extends Component {
	signOut = e => {
		e.preventDefault();
		const { sendSignOut } = this.props;
		sendSignOut(true);

	};

	render() {
		return (
			<div
				style={{
					width: '200px',
					borderRight: '1px black solid',
					height: '100%',
				}}
			>
				<ul className="Nav">
					<img
						src="/logo.png"
						alt="logo"
						className="img-fluid ml-3 mt-3"
						width="60px"
					/>
					<li className="nav-item mt-4" style={{ listStyle: 'none' }}>
						<Link to="/" className="nav-link">
							<button className="btn btn-primary text-white rounded-pill">
								Home
							</button>
						</Link>
					</li>
					<li className="nav-item mt-4" style={{ listStyle: 'none' }}>
						<Link to="/profile" className="nav-link">
							<button className="btn btn-primary text-white rounded-pill">
								Profile
							</button>
						</Link>
					</li>
					<li className="nav-item mt-4" style={{ listStyle: 'none' }}>
						<Link to="/create" className="nav-link">
							<button className="btn btn-primary text-white rounded-pill">
								Tweet
							</button>
						</Link>
					</li>
					<li
						className="nav-item mt-4"
						style={{ listStyle: 'none', paddingLeft: '10px' }}
					>
						<button
							className="btn btn-danger text-white rounded-pill nav-link"
							onClick={this.signOut}
						>
							Logout
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	sendSignOut: payload => dispatch(logOutRequest(payload))
})


export default connect(null, mapDispatchToProps) (HomeSidebarNav);
