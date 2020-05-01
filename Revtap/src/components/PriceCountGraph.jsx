import React from 'react';
import { Line } from 'react-chartjs-2';

function PriceCountGraph({ dateArr, totalPrice }) {
	const chartData = {
		labels: dateArr,
		datasets: [
			{
				label: 'Price On Particular Date',
				data: totalPrice,
				backgroundColor: 'lightgreen',
			},
		],
	};
	return (
		<div
			className="text-center barChart container"
			style={{ width: '100%', height: '100%' }}
		>
			<Line
				data={chartData}
				options={{
					title: {
						display: true,
						text: 'Price At Date Graph',
						fontSize: 30,
					},
				}}
			/>
		</div>
	);
}

export default PriceCountGraph;
