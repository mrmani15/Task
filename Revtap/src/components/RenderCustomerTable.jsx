import React, { useState } from 'react';
import data from '../util/data.json';
import Pagination from './Pagination';
import CustomerTable from './CustomerTable';

function RenderCustomerTable() {
	const [Data] = useState([data.customers]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = Data[0].slice(indexOfFirstPost, indexOfLastPost);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div className="container mt-3">
			<CustomerTable currentPosts={currentPosts} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={Data[0].length}
				paginate={paginate}
			/>
		</div>
	);
}

export default RenderCustomerTable;
