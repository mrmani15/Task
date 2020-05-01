import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import PriceCount from '../components/PriceCount';
import OrderCount from '../components/OrderCount';
import Navbar from '../components/Navbar';

function Routes() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/price-graph" component={PriceCount} />
				<Route path="/order-graph" component={OrderCount} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
