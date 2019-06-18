import { INCREASE_PAGES, DECREASE_PAGES } from '../actions/types'

const initialState = {
    pages: [1, 2, 3, 4, 5]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREASE_PAGES:
            return {
                ...state,
                pages: action.payload
            }
        case DECREASE_PAGES:
            return {
                ...state,
                pages: action.payload
            }
        default:
            return state;
    }
}