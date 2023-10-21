import { GET_USER_PROFILE_USER_FAILED, GET_USER_PROFILE_USER_REQUEST, GET_USER_PROFILE_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILED, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
        case REGISTER_USER_REQUEST:
        case GET_USER_PROFILE_USER_REQUEST:
            return { ...state, loading: true, error: null }

        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, error: null, jwt: action.payload }

        case GET_USER_PROFILE_USER_SUCCESS:
            return { ...state, loading: false, error: null, user: action.payload }

        case LOGOUT:
            return initialState

        case LOGIN_USER_FAILED:
        case REGISTER_USER_FAILED:
        case GET_USER_PROFILE_USER_FAILED:
            return { ...state, loading: false, error: action.payload }

        default: return state;
    }
}