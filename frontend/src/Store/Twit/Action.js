import { api } from "../../config/api"
import { 
    FIND_TWEET_BY_ID_FAILED,
    FIND_TWEET_BY_ID_SUCCESS,
    GET_ALL_TWEETS_FAILED, 
    GET_ALL_TWEETS_SUCCESS, 
    GET_USERS_TWEET_FAILED, 
    GET_USERS_TWEET_SUCCESS, 
    LIKE_TWEET_FAILED, 
    LIKE_TWEET_SUCCESS, 
    REPLY_TWEET_FAILED, 
    REPLY_TWEET_SUCCESS, 
    RETWEET_FAILED, 
    RETWEET_SUCCESS, 
    TWEET_CREATE_FAILED, 
    TWEET_CREATE_SUCCESS, 
    TWEET_DELETE_FAILED, 
    TWEET_DELETE_SUCCESS, 
    USER_LIKE_TWEET_FAILED, 
    USER_LIKE_TWEET_SUCCESS 
} from "./ActionType";


export const getAllTweets = () => async (dispatch) => {
    try {
        const {data} = await api.get("/api/twits")
        console.log("@ALL_TWEETS(change_in_reducer_line_71)", data);
        dispatch({type: GET_ALL_TWEETS_SUCCESS, payload: data})
    } catch (err) {
        console.log("@ALL_TWEETS_ERROR", err);
        dispatch({type: GET_ALL_TWEETS_FAILED, payload: err?.message})
    }
}

export const getUsersTweets = (userId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/user/${userId}`)
        console.log("@USERS_ALL_TWEETS", data);
        dispatch({type: GET_USERS_TWEET_SUCCESS, payload: data})
    } catch (err) {
        console.log("@USERS_ALL_TWEETS_ERROR", err);
        dispatch({type: GET_USERS_TWEET_FAILED, payload: err?.message})
    }
}

export const findTwitsByLikeContainUser = (userId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/user/${userId}/likes`)
        console.log("@USER_LIKED_TWEETS", data);
        dispatch({type: USER_LIKE_TWEET_SUCCESS, payload: data})
    } catch (err) {
        console.log("@USER_LIKED_TWEETS_ERROR", err);
        dispatch({type: USER_LIKE_TWEET_FAILED, payload: err?.message})
    }
}

export const findTwitById = (twitId) => async (dispatch) => {
    try {
        const {data} = await api.get(`/api/twits/${twitId}`)
        console.log("@TWIT_BY_ID", data);
        dispatch({type: FIND_TWEET_BY_ID_SUCCESS, payload: data})
    } catch (err) {
        console.log("@TWIT_BY_ID_ERROR", err);
        dispatch({type: FIND_TWEET_BY_ID_FAILED, payload: err?.message})
    }
}

export const createTweet = (tweetData) => async (dispatch) => {
    try {
        const {data} = await api.post(`/api/twits/create`, tweetData)
        console.log("@TWIT_CREATED", data);
        dispatch({type: TWEET_CREATE_SUCCESS, payload: data})
    } catch (err) {
        console.log("@TWIT_CREATED_ERROR", err);
        dispatch({type: TWEET_CREATE_FAILED, payload: err?.message})
    }
}

export const createTweetReply = (tweetData) => async (dispatch) => {
    try {
        const {data} = await api.post(`/api/twits/reply`, tweetData)
        console.log("@TWIT_REPLY_CREATED", data);
        dispatch({type: REPLY_TWEET_SUCCESS, payload: data})
    } catch (err) {
        console.log("@TWIT_REPLY_CREATED_ERROR", err);
        dispatch({type: REPLY_TWEET_FAILED, payload: err?.message})
    }
}

export const createReTweet = (twitId) => async (dispatch) => {
    try {
        const {data} = await api.put(`/api/twits/${twitId}/retwit`,)
        console.log("@RETWEET", data);
        dispatch({type: RETWEET_SUCCESS, payload: data})
    } catch (err) {
        console.log("@RETWEET_ERROR", err);
        dispatch({type: RETWEET_FAILED, payload: err?.message})
    }
}

export const likeTweet = (twitId) => async (dispatch) => {
    try {
        const {data} = await api.post(`/api/${twitId}/like`)
        console.log("@LIKE_TWEET", data);
        dispatch({type: LIKE_TWEET_SUCCESS, payload: data})
    } catch (err) {
        console.log("@LIKE_TWEET_ERROR", err);
        dispatch({type: LIKE_TWEET_FAILED, payload: err?.message})
    }
}

export const deleteTweet = (twitId) => async (dispatch) => {
    try {
        const {data} = await api.delete(`/api/twits/${twitId}`)
        console.log("@DELETE_TWIT", data);
        dispatch({type: TWEET_DELETE_SUCCESS, payload: twitId})
    } catch (err) {
        console.log("@LIKE_TWEET_ERROR", err);
        dispatch({type: TWEET_DELETE_FAILED, payload: err?.message})
    }
}