import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<ul className="navbarCss">
				<li className="nav-item m-auto linkName">
					<Link to="/" className="nav-link linkName">
						CUSTOMER TABLE
					</Link>
				</li>
				<li className="nav-item m-auto linkName">
					<Link to="/price-graph" className="nav-link linkName">
						PRICE GRAPH
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/order-graph" className="nav-link linkName">
						ORDER GRAPH
					</Link>
				</li>
			</ul>
		</>
	);
}

export default Navbar;
