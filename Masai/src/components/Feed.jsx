import React from 'react';

function Feed(props) {
	return (
		<li className="list-group-item mt-2p-3">
			<span className="font-weight-bold">{props.name}</span>
			<span className="text-secondary ml-2">{` @${props.username}`}</span>
			<div>{props.tweet}</div>
		</li>
	);
}

export default Feed;
