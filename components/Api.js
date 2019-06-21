import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import NewsItem from '../components/NewsItem';
import { fetchPosts } from '../components/actions/postActions'

function Api(props) {
    useEffect(() => {
        //if (Object.keys(props.posts).length == 0)
        props.fetchPosts({ page: props.page, search: props.search })
    }, [props.page,props.search])
    let arr = [];

    if (props.posts.status === 'ok')
        for (let i of props.posts.articles) {
            arr.push(
                <NewsItem key={i.url} article={i} />
            )
        }
    return (
        <>
            {arr}
        </>
    )
}

Api.Proptypes = {
    fetchPosts: Proptypes.func.isRequired,
    posts: Proptypes.object.isRequired,
    search: Proptypes.string.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    page: state.page.page,
    search: state.page.search
})

export default connect(mapStateToProps, { fetchPosts })(Api)