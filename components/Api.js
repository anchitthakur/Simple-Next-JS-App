import {connect} from "react-redux";
import Proptypes from "prop-types";
import NewsItem from "../components/NewsItem";
import LazyLoad from "react-lazy-load";

function Api(props) {
    let arr = [];
    let cnt = 0
    for (let i of props.data) {
        arr.push(<NewsItem key={cnt++} article={i}/>);
    }
    return <>{arr}</>;
}

Api.Proptypes = {
    posts: Proptypes.object.isRequired,
    search: Proptypes.string.isRequired
};

const mapStateToProps = state => ({
    page: state.page.page,
    search: state.page.search
});

export default connect(
    mapStateToProps,
    null
)(Api);
