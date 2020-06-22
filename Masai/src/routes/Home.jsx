//Home Page

import React from 'react';
import HomeSidebarNav from '../components/HomeSidebarNav';
import TweetFeed from '../components/TweetFeed';
import Follow from '../components/Follow';

function Home() {
	return (
		<div className="d-flex">
			<HomeSidebarNav />
			<TweetFeed />
			<Follow />
		</div>
	);
}

export default Home;
