import { combineReducers } from 'redux'
import PostReducer from "./postReducer";
import PagesReducer from './pagesReducer'
import PageReducer from './pageReducer'

export default combineReducers({
    posts: PostReducer,
    pages: PagesReducer,
    page: PageReducer
});