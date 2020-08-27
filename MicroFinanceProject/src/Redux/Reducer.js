import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
    AUTHENTICATE_USER,
    SIGNOFF_USER
} from './Action'

const initialState = {
    isLoading: false,
    query: "",
    data: [],
    error: "",
    isLogin: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                query: action.query
            }

        case FETCH_REGISTER_SUCCESS:
            return {
                isLoading: false,
                data: action.data,
                error: state.error
            }

        case FETCH_REGISTER_FAILURE:
            return {
                isLoading: false,
                data: state.data,
                error: action.error
            }

        case AUTHENTICATE_USER:
            return {
                isLogin: true
            }

        case SIGNOFF_USER:
            return {
                isLogin: false
            }

        default:
            return state
    }
}

export default reducer