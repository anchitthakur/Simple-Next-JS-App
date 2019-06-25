import { combineReducers } from 'redux'
import PagesReducer from './pagesReducer'
import PageReducer from './pageReducer'

export default combineReducers({
    pages: PagesReducer,
    page: PageReducer
}); 