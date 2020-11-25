import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "./types";

export const registerSuccess = (user) => {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    }
}
export const registerFail = (user) => {
    return {
        type: REGISTER_FAIL,
        payload: user
    }
}
export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}
export const loginFail = (user) => {
    return {
        type: LOGIN_FAIL,
        payload: user
    }
}
export const logout = (user) => {
    return {
        type: LOGOUT,
        payload: user
    }
}