import React from 'react';
import data from '../util/data.json';
import OrdersCountGraph from './OrderCountGraph';

function OrderCount() {
	//extracting dates

	let count = [];
	data.orders.map(ele => count.push(ele.created));
	let arr = count.map(ele => {
		let time = ele.split('T');
		return time[0];
	});

	// counting frequency
	let dateCount = {};
	for (let i = 0; i < arr.length; i++) {
		if (dateCount[arr[i]]) {
			dateCount[arr[i]]++;
		} else {
			dateCount[arr[i]] = 1;
		}
	}

	//extracting unique date and their respective orders at particular day

	let sortedDate = [];
	for (let key in dateCount) {
		let date = key.split('-').join('');
		sortedDate.push([date, dateCount[key]]);
	}

	sortedDate = sortedDate.sort((a, b) => a[0] - b[0]);

	//formatting date and order count
	let date = [];
	let countOnDate = [];
	sortedDate.forEach(ele => {
		let first = ele[0].split('');
		first = first.slice(6);
		first.push('-04');
		first.push('-2020');
		first = first.join('');
		date.push(first);
		countOnDate.push(ele[1]);
	});

	return (
		<div>
			<OrdersCountGraph date={date} countOnDate={countOnDate} />
		</div>
	);
}

export default OrderCount;
