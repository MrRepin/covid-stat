import { combineReducers } from 'redux'

import countryReducer from './countryReducer'
import countryListReducer from'./countryListReducer'
import newsReducer from './newsReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    country: countryReducer,
    countryList: countryListReducer,
    news: newsReducer,
    login: loginReducer
})