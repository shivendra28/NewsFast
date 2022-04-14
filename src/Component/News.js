import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Lorder from './Lorder'
import propTypes from 'prop-types'
export default class News extends Component {

    static defaultProps = {
        country: "in",
        pagesize: 6,
        category: ""
    }
    static propTypes = {
        country: propTypes.string,
        pagesize: propTypes.number,
        category: propTypes.number
    }
    constructor() {
        super();
        this.state = {
            articals1: [],
            page: 1,
            lorder: false
        }
    }
    async componentDidMount() {
        { this.setState({ lorder: true }) }
        let api = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e653f7a2c152460197a8028f97060968&page=1&pagesize=${this.props.pagesize}`)
            .then(res => res.json())
            .then(responce => responce.articles)
        this.setState({
            articals1: api,
            totalResults: api.totalResults,
            lorder: false   
        })
    }
    handelPrevClick = async () => {
        { this.setState({ lorder: true }) }
        let api = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e653f7a2c152460197a8028f97060968&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`)
            .then(res => res.json())
            .then(responce => responce.articles)
        console.log("Prev")
        this.setState({
            page: this.state.page - 1,
            articals1: api,
            lorder: false
        })
    }

    handelNextClick = async () => {
        { this.setState({ lorder: true }) }
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
            let api = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e653f7a2c152460197a8028f97060968&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`)
                .then(res => res.json())
                .then(responce => responce.articles)
            console.log("Next")
            this.setState({
                page: this.state.page + 1,
                articals1: api,
                lorder: false
            })
        }
    }


    render() {
        return (
            <>
                <div className="container my-3">
                    <h1 className='text-center'>NewsFast- Top Headline</h1>
                    {this.state.lorder && <Lorder />}
                    <div className="row my-3">
                        {!this.state.lorder && this.state.articals1.map((e) => {
                            return <div className="col-md-4 ">
                                {/* <newsItem/> */}
                                <NewsItem title={e.title ? e.title.slice(0, 40) : ""} descripction={e.description ? e.description.slice(0, 60) : ""} ImagesUrl={e.urlToImage ? e.urlToImage : "https://static01.nyt.com/images/2022/04/09/world/09ukraine-blog-promo-630-EST/09ukraine-blog-promo-630-EST-facebookJumbo.jpg"} newsUrl={e.url ? e.url : ""} author={e.author?e.author:"Unknown"} publishedAt ={e.publishedAt} source={e.source.name}/>
                            </div>
                        })}

                    </div>

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handelPrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handelNextClick} >Next &rarr;</button>
                </div>

            </>

        )
    }
}
