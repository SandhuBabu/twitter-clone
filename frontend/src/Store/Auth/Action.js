import axios from "axios"
import { API_BASE_URL } from "../../config/api";
import { GET_USER_PROFILE_USER_FAILED, GET_USER_PROFILE_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILED, REGISTER_USER_SUCCESS } from "./ActionType";

export const loginUser = (loginData) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
        if (data?.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }

        dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt })
    } catch (err) {
        console.log("@login_error", err);
        dispatch({type: LOGIN_USER_FAILED, payload: err.message})
    }
}

export const registerUser = (regData) => async (dispatch) => {
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, regData);
        console.log("REGISTER_DATA", data);
        if (data?.jwt) {
            localStorage.setItem("jwt", data.jwt)
        }

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
    } catch (err) {
        console.log("@register_error", err);
        dispatch({type: REGISTER_USER_FAILED, payload: err.message})
    }
}

export const getUserProfile = (jwt) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`, {
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

export const logout = (jwt) => async (dispatch) => {
        localStorage.removeItem("jwt");
        dispatch({ type: LOGOUT, payload: null })
}
