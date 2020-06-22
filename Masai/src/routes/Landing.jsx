
// this is first page

import React from 'react';
import Navbar from '../components/Navbar';
import LeftFront from '../components/LeftFront';
import Login from '../components/Login';
import DummyTweet from '../components/DummyPolicy';

function Landing() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-8">
						<LeftFront />
						<DummyTweet />
					</div>
					<div className="col-4">
						<Login />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
