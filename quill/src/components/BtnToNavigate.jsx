import React from 'react';
import { Link } from 'react-router-dom';

function BtnToNavigate() {
	return (
		<>
			<ul className="nav justify-content-center container bg-dark mt-2">
				<li className="nav-item m-auto">
					<Link to="/" className="nav-link">
						Live Data
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/day-1" className="nav-link">
						1 day
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/day-7" className="nav-link">
						7 day
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/day-30" className="nav-link">
						30 day
					</Link>
				</li>
			</ul>
		</>
	);
}

export default BtnToNavigate;
