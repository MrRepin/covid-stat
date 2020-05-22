import { LOGIN_SUCCESS } from "../actions/actionTypes"

const initialState = {
    login: false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: action.success
            }
        default:
            return state
    }
}

export default loginReducer