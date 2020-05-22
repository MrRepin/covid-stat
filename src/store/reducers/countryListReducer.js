import { GET_COUNTRYLIST_SUCCESS, GET_COUNTRYLIST_ERROR, CLEAR_COUNTRYLIST_ERROR } from "../actions/actionTypes"

const initialState = {
    countryList: [],
    error: {
        status: false,
        text: null
    },
}

const getCountryListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRYLIST_SUCCESS:
            return {
                ...state,
                countryList: action.data
            }
        case GET_COUNTRYLIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAR_COUNTRYLIST_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getCountryListReducer