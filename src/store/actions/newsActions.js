import axios from 'axios'
import { GET_NEWSLIST_SUCCESS, GET_ARTICLE_SUCCESS, CLEAR_ARTICLE_DATA } from './actionTypes'

export function getNewsList() {
    return async dispatch => {
        try {
            const axiosGet = {
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts',
                responseType: 'json',
                timeout: 10000,
            }
            const response = await axios(axiosGet)
            dispatch(getNewsListSuccess(response.data))
        } catch(e) {
            console.error(e, 'gsdg')
        }
    }
}

export function getArticle(url) {
    return async dispatch => {
        try {
            dispatch(clearArticleData())
            const axiosGet = {
                method: 'get',
                url,
                responseType: 'json',
                timeout: 10000,
            }
            const response = await axios(axiosGet)
            dispatch(getArticleSuccess(response.data))
        } catch(e) {
            console.error(e, 'gsdg')
        }
    }
}

export function getNewsListSuccess(data) {
    return {
        type: GET_NEWSLIST_SUCCESS,
        newsList: data
    }
}

export function getArticleSuccess(data) {
    return {
        type: GET_ARTICLE_SUCCESS,
        article: data
    }
}

export function clearArticleData() {
    return {
        type: CLEAR_ARTICLE_DATA
    }
}