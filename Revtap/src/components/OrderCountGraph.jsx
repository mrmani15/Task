import React from 'react';
import { Bar } from 'react-chartjs-2';

function OrderCountGraph({ date, countOnDate }) {
	const chartData = {
		labels: date,
		datasets: [
			{
				label: 'Order On Particular Date',
				data: countOnDate,
				backgroundColor: 'lightgreen',
			},
		],
	};
	return (
		<div
			className="text-center barChart container"
			style={{ width: '100%', height: '100%' }}
		>
			<Bar
				data={chartData}
				options={{
					title: {
						display: true,
						text: 'Order At Date Graph',
						fontSize: 30,
					},
				}}
			/>
		</div>
	);
}

export default OrderCountGraph;
