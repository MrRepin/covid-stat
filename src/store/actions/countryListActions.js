import axios from 'axios'
import { GET_COUNTRYLIST_SUCCESS, GET_COUNTRYLIST_ERROR, CLEAR_COUNTRYLIST_ERROR } from './actionTypes'

export function getCountryList() {
    return async dispatch => {
        try {
            const axiosGet = {
                method: 'get',
                url: `https://api.covid19api.com/summary`,
                responseType: 'json',
                timeout: 10000,
            }
            const response = await axios(axiosGet)
            const countries = response.data.Countries
            dispatch(getCountryListSuccess(countries))
        } catch(e) {
            console.log(e)
            dispatch(getCountryListError({
                status: true,
                text: 'An error occurred. Please, reload the page or back later.'
            }))
        }
    }
}

export function getCountryListSuccess(data) {
    return {
        type: GET_COUNTRYLIST_SUCCESS,
        data
    }
}

export function getCountryListError(error) {
    return {
        type: GET_COUNTRYLIST_ERROR,
        error
    }
}

export function clearCountryListError() {
    return {
        type: CLEAR_COUNTRYLIST_ERROR,
        error: {
            status: false,
            text: null
        }
    }
}