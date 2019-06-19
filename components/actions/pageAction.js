import { CHANGE_PAGE } from './types'

export const changePage = (p) => dispatch => {
    dispatch({
        type: CHANGE_PAGE,
        payload: p
    })
}