import {
  REGISTER_USER_REQUEST,
  ADD_NEW_TWEET,
  USER_LOGIN_REQUEST,
  USER_LOG_OUT,
  ADD_FOLLOWED_TWEET,
  REMOVE_FOLLOWED_TWEET
} from './actionType'


const initState = {
  allUser: [],
  isRegistrationSuccessful: false,
  registrationResponseMessage: '',
  isLoggedIn: false,
  currentUser: {},
  ownTweets: [],
  tweetFeed: [],
  follower: [],
  allDummyData: [],
  newUser: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      if (state.allUser.length === 0) {
        return {
          ...state,
          allUser: [...state.allUser, action.payload],
          isRegistrationSuccessful: true,
          registrationResponseMessage: 'Registration Successfull',
          isLoggedIn: true,
          currentUser: action.payload,
          newUser: [...state.newUser, action.payload]
        }
      } else {
        const username = action.payload.username;
        const isPresentUsername = state.allUser.filter(user => username === user.username)
        if (isPresentUsername.length) {
          return {
            ...state,
            registrationResponseMessage: 'username Already exists',
            isLoggedIn: false,
            isRegistrationSuccessful: false,

          }
        } else {
          return {
            ...state,
            allUser: [...state.allUser, action.payload],
            isRegistrationSuccessful: true,
            registrationResponseMessage: 'Registration Successfull',
            isLoggedIn: true,
            currentUser: action.payload,
            newUser: [...state.newUser, action.payload]
          }
        }
      }

    case USER_LOGIN_REQUEST:
      const isPresentUser = state.allUser.filter(user => user.username === action.payload.username && user.password === action.payload.password)
      if (isPresentUser.length) {
        const loggedInUser = isPresentUser[0]
        return {
          ...state,
          isLoggedIn: true,
          registrationResponseMessage: 'Logged In Successfully',
          currentUser: loggedInUser
        }
      } else {
        return {
          ...state,
          isLoggedIn: false,
          registrationResponseMessage: 'Logged In Failed',
        }
      }


    case ADD_NEW_TWEET:
      const obj= {
        name:state.currentUser.name,
        username:state.currentUser.username,
        tweet: action.payload
      }
      state.ownTweets = [...state.ownTweets, obj]
      // let tweeTFeedArr = []
      // for(let i = 0; i <state.ownTweets.length;i++){
      //   let data = {
      //     name: state.currentUser.name,
      //     username: state.currentUser.username,
      //     tweet: state.ownTweets[i]
      //   }
      //   tweeTFeedArr.push(data)
      // }
      const data = {
        dob: state.currentUser.dob,
        email: state.currentUser.email,
        phone: state.currentUser.phone,
        password: state.currentUser.password,
        name: state.currentUser.name,
        ownTweets: state.ownTweets,
        username: state.currentUser.username,
        tweetFeed:state.ownTweets
      };

      return {
        ...state,
        currentUser: data,
        allDummyData: state.allUser.filter(user => user.username != state.currentUser.username)
      }

    case USER_LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        allUser: [...state.allDummyData, state.currentUser],
        currentUser: {},
        ownTweets: [],
        tweetFeed: [],
      }

    case ADD_FOLLOWED_TWEET:
      const followingTweets = state.allUser.filter(user => user.username === action.payload)
      const tweetArr = followingTweets[0].ownTweets
      const tweetData = {
        dob: state.currentUser.dob,
        email: state.currentUser.email,
        phone: state.currentUser.phone,
        password: state.currentUser.password,
        name: state.currentUser.name,
        ownTweets: state.ownTweets,
        username: state.currentUser.username,
        tweetFeed: [...state.currentUser.tweetFeed, ...tweetArr]
      };
      return {
        ...state,
        currentUser: tweetData
      }

    case REMOVE_FOLLOWED_TWEET:
      const unFollowingTweets = state.currentUser.tweetFeed.filter(user => user.username !== action.payload)
      const unTweetData = {
        dob: state.currentUser.dob,
        email: state.currentUser.email,
        phone: state.currentUser.phone,
        password: state.currentUser.password,
        name: state.currentUser.name,
        ownTweets: state.ownTweets,
        username: state.currentUser.username,
        tweetFeed: [...unFollowingTweets]
      };
      return {
        ...state,
        currentUser:unTweetData
      }

    default:
      return state
  }
}

export default reducer