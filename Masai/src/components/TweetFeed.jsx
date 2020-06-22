import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import Pagination from './Pagination';

class TweetFeed extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: 1,
			postPerPage: 20,
		};
	}

	paginate = number => {
		this.setState({
			currentPage: number,
		});
	};

	render() {
		if (this.props.tweet) {
			const tweets = this.props.tweet.tweetFeed;
			const { currentPage, postPerPage } = this.state;
			const lastPost = currentPage * postPerPage;
			const firstPost = lastPost - postPerPage;
			const currentData = tweets.slice(firstPost, lastPost);
			return (
				<div>
					<ul className="list-group mt-2">
						{currentData.length &&
							currentData.map(tweet => {
								return (
									<Feed
										key={Math.random()}
										name={tweet.name}
										username={tweet.username}
										tweet={tweet.tweet}
									/>
								);
							})}
					</ul>

					<Pagination
						postsPerPage={this.state.postsPerPage}
						totalPosts={tweets}
						paginate={this.paginate}
					/>
				</div>
			);
		}
		return <h2>No Tweet Available, Please post new Tweet</h2>;
	}
}

const mapStateToProps = state => ({
	tweet: state.currentUser,
});

export default connect(mapStateToProps, null)(TweetFeed);
