import React from 'react';

function Tab() {
	return (
		<div>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a
						className="nav-link active text-secondary font-weight-bold"
						data-toggle="tab"
						href="#foryou"
					>
						For you
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary font-weight-bold" data-toggle="tab" href="#covid19">
						COVID 19
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary font-weight-bold" data-toggle="tab" href="#trending">
						Trending
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary font-weight-bold" data-toggle="tab" href="#news">
						News
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary font-weight-bold" data-toggle="tab" href="#sports">
						Sports
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-secondary font-weight-bold" data-toggle="tab" href="#fun">
						Fun
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Tab;
