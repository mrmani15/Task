import {
  REGISTER_USER_REQUEST,
  ADD_NEW_TWEET,
  USER_LOGIN_REQUEST,
  USER_LOG_OUT,
  ADD_FOLLOWED_TWEET,
  REMOVE_FOLLOWED_TWEET
} from './actionType'


export const newRegistrationRequest = payload => {
  return {
    type: REGISTER_USER_REQUEST,
    payload
  }
}

export const addNewTweet = payload => {
  return {
    type: ADD_NEW_TWEET,
    payload
  }
}

export const loginData = payload => {
  return {
    type: USER_LOGIN_REQUEST,
    payload
  }
}

export const logOutRequest = payload => {
  return{
    type: USER_LOG_OUT,
    payload
  }
}

export const addFollowingTweets = payload => {
  return{
    type: ADD_FOLLOWED_TWEET,
    payload
  }
}

export const removeFollowingTweets = payload => {
  return{
    type: REMOVE_FOLLOWED_TWEET,
    payload
  }
}