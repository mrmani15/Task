import React from 'react';
import Tab from './Tab';
import TabImage from './TabImage';

function LeftFront() {
	return (
		<div>
			<div className="border">
				<h4 className="p-3">Explore</h4>
				<Tab />
				<TabImage />
			</div>
			
		</div>
	);
}

export default LeftFront;
