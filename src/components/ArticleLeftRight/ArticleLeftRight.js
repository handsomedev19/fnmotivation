import React from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArticles } from "../../actions/articles";
import {Link} from "react-router-dom";

class ArticleLeftRight extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(getArticles());    
    }

    render() {
        return (
            <div>
                <div className="article-left-right">
                        <div className="article-stories">
                            <div className="title">
                                <h3>NEWS STORIES</h3>
                                <a href="/">View all</a>
                            </div>
                            { this.props.articles && this.props.articles.map(
                                function(article){
                                    return (
                                        <div className="article-stories-box">
                                            <span>{article.article_category && article.article_category.title}</span> 
                                            <h3>{article.title}</h3>
                                            <h4>{article.outer_url}</h4>
                                            <p>{article.intro} </p>
                                            <Link to={`/articles/${article.id}`}>Read more</Link>
                                        </div>
                                    );
                                }                      
                            )}
                            {/*<div className="article-stories-box">
                                <span>Drug Addiction</span> 
                                <h3>How addiction hijacks the brain  Harvard Health</h3>
                                <h4>Source: CNN</h4>
                                <p>They talked to me, they cared about me, they payed for a rehab. </p>
                                <a href="/storyPage">Read more</a>
                            </div>*/}
                        </div>
                    </div>
                </div>
            );
    }
}

ArticleLeftRight.contextType = {
    store: PropTypes.object.isRequired
}

ArticleLeftRight.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    const { articles } = state.articles;

    return { 
        articles: articles
    };
}
export default connect(mapStateToProps)(ArticleLeftRight)