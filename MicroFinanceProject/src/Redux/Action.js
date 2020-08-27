// actions
const FETCH_REGISTER_REQUEST = 'FETCH_REGISTER_REQUEST'
const FETCH_REGISTER_SUCCESS = 'FETCH_REGISTER_SUCCESS'
const FETCH_REGISTER_FAILURE = 'FETCH_REGISTER_FAILURE'
const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
const SIGNOFF_USER = 'SIGNOFF_USER'

// action creators
const fetchPostRequest = query => {
    return {
        type: FETCH_REGISTER_REQUEST,
        query: query || "" 
    }
}

const fetchPostSuccess = data => {
    return {
        type: FETCH_REGISTER_SUCCESS,
        data: data
    }
}

const fetchPostFailure = error => {
    return {
        type: FETCH_REGISTER_FAILURE,
        error: error 
    }
}

const checkUser = () => {
    return {
        type: AUTHENTICATE_USER
    }
}

const signOffUser = () => {
    return {
        type: SIGNOFF_USER
    }
}


export {

    signOffUser,
    checkUser,
    fetchPostFailure,
    fetchPostRequest,
    fetchPostSuccess,
    SIGNOFF_USER,
    AUTHENTICATE_USER,
    FETCH_REGISTER_FAILURE,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS
}