import { CHANGE_PAGE, CHANGE_SEARCH } from './types'

export const changePage = (p) => dispatch => {
    dispatch({
        type: CHANGE_PAGE,
        payload: p
    })
}

export const changeSearch = (s) => dispatch => {
    dispatch({
        type: CHANGE_SEARCH,
        payload: s
    })
}