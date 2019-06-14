const Pagination = ({increaseHandler, decreaseHandler, clickHandler, pages,page}) => {
    return (
        <ul className="pagination">
            <li className={pages[0] === 1 ? "page-item disabled" : "page-item"}>
                <a className="page-link" onClick={decreaseHandler}>-</a>
                </li>
            <li className={pages[0] === page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => clickHandler(pages[0])}>{pages[0]}</a>
            </li>
            <li className={pages[1] === page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => clickHandler(pages[1])}>{pages[1]}</a>
            </li>
            <li className={pages[2] === page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => clickHandler(pages[2])}>{pages[2]}</a>
            </li>
            <li className={pages[3] === page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => clickHandler(pages[3])}>{pages[3]}</a>
            </li>
            <li className={pages[4] === page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={() => clickHandler(pages[4])}>{pages[4]}</a>
            </li>
            <li className={pages[4] === 20 ? "page-item disabled" : "page-item"}>
                <a className="page-link" enabled="true" onClick={increaseHandler}>+</a>
            </li>
        </ul>
    )

}

export default Pagination

