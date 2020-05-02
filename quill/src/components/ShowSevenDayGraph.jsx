import React from 'react';
import { Bar } from 'react-chartjs-2';

function ShowSevenDayGraph(props) {
	const chartData = {
		labels: props.label,
		datasets: [
			{
				label: '7 Day Data',
				data: props.data,
				backgroundColor: 'rgba(255, 99, 132, 0.6)',
			},
		],
	};
	return (
		<div
			className="text-center barChart"
			style={{ width: '90%', height: '500px', margin: 'auto' }}
		>
			<Bar
				data={chartData}
				options={{
					title: {
						display: true,
						text: '7 Day Data',
						fontSize: 25,
					},
					legend: {
						display: true,
						position: 'top',
					},
				}}
			/>
		</div>
	);
}

export default ShowSevenDayGraph;
