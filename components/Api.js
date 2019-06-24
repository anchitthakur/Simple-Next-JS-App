import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import NewsItem from '../components/NewsItem';

function Api(props) {
    let arr = [];
    if (props.data.status === 'ok')
        for (let i of props.data.articles) {
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
    posts: Proptypes.object.isRequired,
    search: Proptypes.string.isRequired
}

const mapStateToProps = state => ({
    page: state.page.page,
    search: state.page.search
})

export default connect(mapStateToProps,null)(Api)