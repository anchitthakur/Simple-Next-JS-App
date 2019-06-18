const imgStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };

const NewsItem = (props) => {
    return (
        <>
                <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{props.props.title}</h5>
                    <h6 className="card-subtitle text-muted">{props.props.publishedAt}</h6>
                </div>
                <img style= {imgStyle} src={props.props.urlToImage} alt="Card image" />
                <div className="card-body">
                    <b><p className="card-text">{props.props.description}</p></b>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Source : </strong><u>{props.props.source.name}</u></li>
                </ul>
                <div className="card-body">
                    <a href={props.props.url} className="card-link"  target="_blank" >Full Article..</a>
                </div>
                <div className="card-footer text-muted">
                    </div>
            </div>
        </>
    );
}
export default NewsItem;