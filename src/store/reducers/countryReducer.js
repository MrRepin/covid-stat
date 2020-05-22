import { GET_COUNTRY_SUCCESS, GET_COUNTRY_ERROR, CLEAR_COUNTRY_ERROR } from "../actions/actionTypes"

const initialState = {
    numberStat: [
        {
            name: 'Total Confirmed',
            number: 0
        },
        {
            name: 'Total Deaths',
            number: 0
        },
        {
            name: 'Total Recovered',
            number: 0
        }
    ],
    chartStat: {
        confirmed: [],
        deaths: [],
        recovered: []
    },
    error: {
        status: false,
        text: null
    },
    country: 'Total'
}

const getCountryReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRY_SUCCESS:
            return {
                ...state,
                numberStat: action.numberStat,
                country: `${action.countryName} statistic`,
                chartStat: action.chartStat
            }
        case GET_COUNTRY_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAR_COUNTRY_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getCountryReducer