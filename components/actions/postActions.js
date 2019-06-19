import { FETCH_POSTS } from './types'

export const fetchPosts = (props) => dispatch => {

        var url = 'https://newsapi.org/v2/everything?' +
            'q=' + props.search + '&' +
            'sortBy=publishedAt&' +
            'page=' + props.page + '&' +
            'pageSize=5&language=en&' +
            'apiKey=3b214239993247f18926b8fab6ee014f';
        fetch(url).then(response => response.json())
            .then(json => dispatch({
                type: FETCH_POSTS,
                payload: json
            }))
}