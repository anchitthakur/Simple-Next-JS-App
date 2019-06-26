import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { increasePages, decreasePages } from '../components/actions/pagesActions'
import { changePage } from '../components/actions/pageAction'

const Pagination = (props) => {
    const pages = props.pages
    return (
        <ul className="pagination">
            <li className={pages[0] === 1 ? "page-item disabled" : "page-item"}>
                <a className="page-link" onClick={() => props.decreasePages(pages)}>-</a>
            </li>
            <li className={pages[0] === props.page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => props.changePage(pages[0])}>{pages[0]}</a>
            </li>
            <li className={pages[1] === props.page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => props.changePage(pages[1])}>{pages[1]}</a>
            </li>
            <li className={pages[2] === props.page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => props.changePage(pages[2])}>{pages[2]}</a>
            </li>
            <li className={pages[3] === props.page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => props.changePage(pages[3])}>{pages[3]}</a>
            </li>
            <li className={pages[4] === props.page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => props.changePage(pages[4])}>{pages[4]}</a>
            </li>
            <li className={pages[4] === 10 ? "page-item disabled" : "page-item"}>
                <a className="page-link" enabled="true" onClick={() => props.increasePages(pages)}>+</a>
            </li>
        </ul>
    )
}

Pagination.propTypes = {
    increasePages: Proptypes.func.isRequired,
    decreasePages: Proptypes.func.isRequired,
    changePage: Proptypes.func.isRequired,
    pages: Proptypes.array.isRequired,
    page: Proptypes.number.isRequired,
}

const mapStateToProps = state => ({
    pages: state.pages.pages,
    page: state.page.page,
})

export default connect(mapStateToProps, { decreasePages, increasePages, changePage })(Pagination)

