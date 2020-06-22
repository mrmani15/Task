import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Landing from './Landing';
import SignedUp from '../components/SignedUp';
import Home from './Home';
import Profile from './Profile';
import CreateTweet from '../components/CreateTweet';
import { connect } from 'react-redux';

function Routes(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return (
			<div>
				<BrowserRouter>
				<Redirect to="/create" />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/create" component={CreateTweet} />
						<Route path="/profile" component={Profile} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	} else {
		return (
			<div>
				<BrowserRouter>
					<Redirect to="/" />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/sign-up" component={SignedUp} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, null)(Routes);
