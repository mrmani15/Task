import React from 'react';
import data from '../util/data.json';
import PriceCountGraph from './PriceCountGraph';

function PriceCount() {
	//extracting date and price
	let price = [];
	data.orders.map(ele => price.push([ele.created, ele.price]));

	// date extracting
	price = price.map(ele => {
		let first = ele.shift();
		first = first.split('T');
		first = first[0].split('-');
		first.reverse();
		ele.unshift(first.join(''));
		return ele;
	});

	//sorting in ascending order
	price = price.sort((a, b) => a[0] - b[0]);

	// counting frequency
	let obj = {};

	for (let i = 0; i < price.length; i++) {
		if (obj[price[i][0]]) {
			obj[price[i][0]]++;
		} else {
			obj[price[i][0]] = 1;
		}
	}
	//unique dates
	let dateArr = [];
	for (let key in obj) {
		dateArr.push(key);
	}

	//calculating total price per day
	dateArr = dateArr.sort((a, b) => a - b);
	let totalPrice = [];
	let sum = 0;
	for (let i = 0; i < dateArr.length; i++) {
		for (let j = 0; j < price.length; j++) {
			if (dateArr[i] === price[j][0]) {
				sum = sum + Number(price[j][1]);
			} else {
				if (sum) {
					totalPrice.push(sum);
				}
				sum = 0;
			}
		}
	}
	if (sum) {
		totalPrice.push(sum);
	}

	// date formatting
	dateArr = dateArr.map(ele => {
		let first = ele.split('');
		let mid = first.slice(2, 4);
		mid = mid.join('');
		let last = first.slice(4);
		last = last.join('');
		first = first.slice(0, 2);
		first.push('-');
		first.push(mid);
		first.push('-');
		first.push(last);
		return first.join('');
	});

	return (
		<div>
			<PriceCountGraph dateArr={dateArr} totalPrice={totalPrice} />
		</div>
	);
}

export default PriceCount;
