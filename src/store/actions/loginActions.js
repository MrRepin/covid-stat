import { LOGIN_SUCCESS } from "./actionTypes"

export function login() {
    return dispatch => {
        dispatch(loginSuccess(true))
    }
}

export function loginSuccess(status) {
    return {
        type: LOGIN_SUCCESS,
        success: status
    }
}