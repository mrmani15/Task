import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<ul className="nav justify-content-center container bg-light mt-2">
				<li className="nav-item m-auto">
					<Link to="/" className="nav-link">
						CUSTOMER TABLE
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/price-graph" className="nav-link">
						PRICE GRAPH
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/order-graph" className="nav-link">
						ORDER GRAPH
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Navbar;
