import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let { title, descripction, ImagesUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <>
                    <div className="card h-100  " >
                        <img src={ImagesUrl ? ImagesUrl : "https://static01.nyt.com/images/2022/04/09/world/09ukraine-blog-promo-630-EST/09ukraine-blog-promo-630-EST-facebookJumbo.jpg"} className="h-50 card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{descripction}...</p>
                            <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
                            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {source}
                            </span>
                            <a rel='noreferrer' target="blank" href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>


            </>
        )
    }
}
