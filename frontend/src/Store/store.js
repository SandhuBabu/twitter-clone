import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/Reducer";
import thunk from "redux-thunk";
import { tweetReducer } from "./Twit/Reducer";


const rootReducers = combineReducers({
    auth: authReducer,
    twit: tweetReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))