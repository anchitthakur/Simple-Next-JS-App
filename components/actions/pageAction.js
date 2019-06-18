import { CHANGE_PAGE } from './types'

export const changePage = (p) => dispatch => {
    console.log(p)
    dispatch({
        type: CHANGE_PAGE,
        payload: p
    })
}