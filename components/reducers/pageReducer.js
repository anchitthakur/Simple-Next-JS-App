import { CHANGE_PAGE, CHANGE_SEARCH } from '../actions/types'

const initialState = {
    page: 1,
    search: 'tech'
}

export default function(state = initialState,action){
    switch(action.type){
        case CHANGE_PAGE:
            return{
                ...state,
                page:action.payload
            }
        case CHANGE_SEARCH:
            return{
                ...state,
                search:action.payload
            }
        default:
            return state
    }
}