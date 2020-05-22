import axios from 'axios'
import moment from 'moment'

import { GET_COUNTRY_SUCCESS, GET_COUNTRY_ERROR, CLEAR_COUNTRY_ERROR } from './actionTypes'

export function getCountry(country) {
    return async dispatch => {
        try {
            const axiosGet = {
                method: 'get',
                url: `https://api.covid19api.com/total/country/${country}`,
                responseType: 'json',
                timeout: 10000,
            }
            const data = await axios(axiosGet)
            const currentData = data.data
            dispatch(
                getCountrySuccess(
                    parseNumberData(currentData),
                    parseChartData(currentData)
                )
            )
            dispatch(
                getCountryError({
                    status: false,
                    text: ''
                })
            )
        } catch(e) {
            console.log(e)
            dispatch(
                getCountryError({
                    status: true,
                    text: 'An error occurred. Please, reload the page or back later.'
                })
            )
        }
    }
}

export function getCountrySuccess(numberData, chartData) {
    return {
        type: GET_COUNTRY_SUCCESS,
        numberStat: numberData.numbers,
        countryName: numberData.countryName,
        chartStat: chartData
    }
}

export function getCountryError(error) {
    return {
        type: GET_COUNTRY_ERROR,
        error
    }
}

export function clearCountryError() {
    return {
        type: CLEAR_COUNTRY_ERROR,
        error: {
            status: false,
            text: null
        }
    }
}

function parseNumberData(data) {
    const totalConfirmed = {
        name: 'Total Confirmed',
        number: 0
    }
    const totalDeaths = {
        name: 'Total Deaths',
        number: 0
    }
    const TotalRecovered = {
        name: 'Total Recovered',
        number: 0
    }
    let countryName = ''
    countryName = data[data.length - 1].Country
    totalConfirmed.number = data[data.length-1].Confirmed
    totalDeaths.number = data[data.length-1].Deaths
    TotalRecovered.number = data[data.length-1].Recovered
    return {
        numbers: [
            totalConfirmed,
            totalDeaths,
            TotalRecovered
        ],
        countryName
    }
}

function parseChartData(data) {
    const obj = []
    const monthsData = {
        confirmed: [],
        deaths: [],
        recovered: []
    }
    for(let i = 0; i <= 11; i++) {
        if(i > moment().month()) break
        for(let day of data) {
            if(moment(day.Date).month() === i) {
                obj[i] = day
            }
        }
    }
    for(let month of obj) {
        monthsData.confirmed.push(month.Confirmed)
        monthsData.deaths.push(month.Deaths)
        monthsData.recovered.push(month.Recovered)
    }
    return monthsData
}