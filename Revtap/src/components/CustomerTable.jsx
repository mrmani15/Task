import React from 'react';

function CustomerTable({ currentPosts }) {
	if (currentPosts) {
		return (
			<div>
				<table className="table table-striped table-secondary">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Email</th>
							<th scope="col">Created</th>
							<th scope="col">Orders</th>
						</tr>
					</thead>
					<tbody>
						{currentPosts.map(ele => {
							return (
								<tr key={ele.id}>
									<td>{ele.id}</td>
									<td>{ele.firstName}</td>
									<td>{ele.lastName}</td>
									<td>{ele.email}</td>
									<td>{ele.created}</td>
									<td>{ele.orders}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	} else {
		return <h1>Loading</h1>;
	}
}

export default CustomerTable;
