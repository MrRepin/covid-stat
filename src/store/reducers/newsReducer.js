import { GET_NEWSLIST_SUCCESS, GET_ARTICLE_SUCCESS, CLEAR_ARTICLE_DATA } from "../actions/actionTypes"

const initialState = {
    newsList: [],
    article: {}
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWSLIST_SUCCESS:
            return {
                ...state,
                newsList: action.newsList
            }
        case GET_ARTICLE_SUCCESS:
            return {
                ...state,
                article: action.article
            }
        case CLEAR_ARTICLE_DATA:
            return {
                ...state,
                article: {}
            }
        default:
            return state
    }
}

export default newsReducer