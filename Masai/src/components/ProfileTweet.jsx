import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';

class ProfileTweet extends Component {
	render() {
		console.log(this.props.tweet);
		if (this.props.tweet) {
			const tweets = this.props.tweet.ownTweets;
			return (
				<ul className="list-group mt-2">
					{tweets.length &&
						tweets.map(tweet => {
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
			);
		}
		return <h2>No Tweet Available, Please post new Tweet</h2>;
	}
}

const mapStateToProps = state => ({
	tweet: state.currentUser,
});

export default connect(mapStateToProps, null)(ProfileTweet);
