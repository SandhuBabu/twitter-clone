import axios from "axios"
import { API_BASE_URL } from "../../config/api";
import { GET_USER_PROFILE_USER_FAILED, GET_USER_PROFILE_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_SUCCESS } from "./ActionType";

export const LoginUser = (loginData) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
        if (data?.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }

        dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt })
    } catch (err) {
        console.log("@login_error", err);
        dispatch({type: LOGIN_USER_FAILED, payload: err.message})
    }
}

export const registerLoginUser = (regData) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/auth/signup`, regData);
        if (data?.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
    } catch (err) {
        console.log("@login_error", err);
        dispatch({type: REGISTER_USER_FAILED, payload: err.message})
    }
}

export const getUserProfile = (jwt) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });

        dispatch({ type: GET_USER_PROFILE_USER_SUCCESS, payload: data })
    } catch (err) {
        console.log("@login_error", err);
        dispatch({type: GET_USER_PROFILE_USER_FAILED, payload: err.message})
    }
}
