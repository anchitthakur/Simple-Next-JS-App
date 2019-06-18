import { INCREASE_PAGES, DECREASE_PAGES } from './types'

export const increasePages = (pages) => dispatch => {

    let arr = []
    for (let i in pages) {
        arr.push(parseInt(pages[i]) + 1)
    }
    console.log("pages: ")
    console.log(pages)
    dispatch({
        type: INCREASE_PAGES,
        payload: arr
    })
}

export const decreasePages = (pages) => dispatch => {

    let arr = []
        for (let i in pages) {
            arr.push(parseInt(pages[i]) - 1)
        }
    dispatch({
        type: DECREASE_PAGES,
        payload: arr
    })
}