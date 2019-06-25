import LazyLoad from 'react-lazy-load';

const imgStyle = {
    "width": '100%',
};

const NewsItem = ({ article }) => {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title"><b><u>{article.title}</u></b></h5>
                    <h6 className="card-subtitle text-muted">{article.publishedAt}</h6>
                </div>
                <LazyLoad debounce={true} offsetVertical={600}>
                    <img style={imgStyle} src={article.urlToImage?article.urlToImage:"/static/img.png"} onError={(e) => { e.target.onerror = null; e.target.src = "/static/img.png" }} />
                </LazyLoad>
                <div className="card-body">
                    <b><p className="card-text">{article.description}</p></b>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Source : </strong><u>{article.source.name}</u></li>
                </ul>
                <div className="card-body">
                    <a href={article.url} className="card-link" target="_blank" rel="noreferrer" >Full Article..</a>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </>
    );
}
export default NewsItem;