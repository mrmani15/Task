import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFollowingTweets, removeFollowingTweets } from '../redux/action'

class Follow extends Component {

	follow = e => {
    e.preventDefault();
    const val = JSON.parse(e.target.value)
    const username = val.username
    
		if (e.target.innerHTML === 'Follow me') {
      e.target.innerHTML = 'Following';
      e.target.className='btn-success btn'
      const { sendFollowUsername } = this.props;
      sendFollowUsername(username)
		} else {
      e.target.innerHTML = 'Follow me';
      e.target.className='btn-primary btn'
      const { sendUnfollowUsername } = this.props;
      sendUnfollowUsername(username)
		}
	};
	render() {
    let newUser = this.props.newUser;
    const username = this.props.username;
    newUser = newUser.filter(user => user.username !== username)
		if (newUser.length) {
			return (
				<ul className="list-group mt-2" style={{ width: '150px'}}>
					{newUser.length &&
						newUser.map(user => {
              const val = JSON.stringify(user)
							return (
								<li
									className="list-group-item mt-2p-3"
									key={Math.random()}
								>
									{user.name}
									<span>
										<button
											className="btn btn-primary"
                      onClick={this.follow}
                      value={val}
										>
											Follow me
										</button>
									</span>
								</li>
							);
						})}
				</ul>
			);
		}
		return <div></div>;
	}
}

const mapStateToProps = state => ({
  newUser: state.newUser,
  username: state.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  sendFollowUsername: payload => dispatch(addFollowingTweets(payload)),
  sendUnfollowUsername: payload => dispatch(removeFollowingTweets(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Follow);
