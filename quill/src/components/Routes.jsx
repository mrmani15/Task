import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import OneDay from './OneDay';
import SevenDay from './SevenDay';
import ThirtyDay from './ThirtyDay';
import BtnToNavigate from './BtnToNavigate';

function Routes() {
	return (
		<Router>
			<BtnToNavigate />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/day-1" component={OneDay} />
				<Route exact path="/day-7" component={SevenDay} />
				<Route exact path="/day-30" component={ThirtyDay} />
			</Switch>
		</Router>
	);
}

export default Routes;
