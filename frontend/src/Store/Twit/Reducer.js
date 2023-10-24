import {
    FIND_TWEET_BY_ID_FAILED,
    FIND_TWEET_BY_ID_REQUEST,
    FIND_TWEET_BY_ID_SUCCESS,
    GET_ALL_TWEETS_SUCCESS,
    GET_USERS_TWEET_SUCCESS,
    LIKE_TWEET_FAILED,
    LIKE_TWEET_REQUEST,
    LIKE_TWEET_SUCCESS,
    REPLY_TWEET_SUCCESS,
    RETWEET_FAILED,
    RETWEET_REQUEST,
    RETWEET_SUCCESS,
    TWEET_CREATE_FAILED,
    TWEET_CREATE_REQUEST,
    TWEET_CREATE_SUCCESS,
    TWEET_DELETE_FAILED,
    TWEET_DELETE_REQUEST,
    TWEET_DELETE_SUCCESS,
    USER_LIKE_TWEET_FAILED,
    USER_LIKE_TWEET_REQUEST,
    USER_LIKE_TWEET_SUCCESS
} from "./ActionType"

const initialState = {
    loading: false,
    data: null,
    error: null,
    twits: [],
    twit: null,
}

export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case TWEET_CREATE_REQUEST:
        case TWEET_DELETE_REQUEST:
        case USER_LIKE_TWEET_REQUEST:
        case LIKE_TWEET_REQUEST:
        case RETWEET_REQUEST:

        case FIND_TWEET_BY_ID_REQUEST:
            return { ...state, loading: true, error: null }

        case TWEET_CREATE_FAILED:
        case TWEET_DELETE_FAILED:
        case USER_LIKE_TWEET_FAILED:
        case LIKE_TWEET_FAILED:
        case RETWEET_FAILED:
        case FIND_TWEET_BY_ID_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case TWEET_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twits: [action.payload, ...state.twits]
            }

        case GET_ALL_TWEETS_SUCCESS:
        case GET_USERS_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twits: [action.payload, ...state.twits]
                // twits: [...action.payload]
            }

        case USER_LIKE_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                likedTwits: action.payload
            }

        case LIKE_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                like: action.payload
            }

        case TWEET_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twits: state.twits.filter(twit => twit.id !== action.payload)
            }

        case RETWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                retwit: action.payload
            }

        case FIND_TWEET_BY_ID_SUCCESS:
        case REPLY_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                twit: action.payload
            }

        default: return state;
    }
}