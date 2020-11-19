import React from 'react'
import {Container, Row} from "react-bootstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getOneArticle} from "../../actions/articles";
import ArticleLeftRight from "../../components/ArticleLeftRight/ArticleLeftRight";
import ShareIcon from "../../images/share-icon.svg";
import ShareHoverIcon from "../../images/share-hover.svg";
import ThumbUpIcon from "../../images/thumb-up-icon.svg";
import ThumbUpHoverIcon from "../../images/thumb-up-hover.svg";
import BookMarkIcon from "../../images/bookmark-icon.svg";
import BookMarkHoverIcon from "../../images/bookmark-hover.svg";
import { SERVER_URL } from '../../utils/apiUtils';
import { postComment } from "../../actions/articles"

class ArticleContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            comment: ""
        }

        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    //this.props.match.params.articleId

    componentWillMount(){
        const articleId = this.props.match.params.articleId;
        //console.log("Article Id: " + articleId);

        this.props.dispatch(getOneArticle(articleId));
        
    }

    handleCommentChange(event) {    
        const { name, value } = event.target;
        this.setState({
                [name]: value
        });

        //console.log(name);
        //console.log(value);
        console.log(this.state.comment);
    }

    handleCommentSubmit(event) {
        event.preventDefault();

        const user_id = this.props.auth.id;
        const article_id = this.props.match.params.articleId;

        const config = {
            users_permissions_user: user_id,
            article: article_id,
            content: this.state.comment
        }

        this.props.dispatch(postComment(config));

    }


    render(){       
        let article = this.props.oneArticle; if (article == null) { article = {}; }
        let category = article.article_category; if (category == null) {category = {};}
        let author = article.article_author; if (author == null) {author = {};}
        let comments = article.comments; if(comments == null) {comments = {};}

        //console.log("article container render:");
        //console.log(article);
        

        return(
            <section className="article-sec">
                <Container fluid>
                    <Row>
                        <div className="col-xl-9 col-lg-8">
                            <div className="article-left">
                                <div className="breadcrumb-main">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">{category.title}</a></li>
                                        <li className="breadcrumb-item active">{article.title}</li>
                                    </ol>
                                </div>
                                <div className="article-blog">
                                    <div className="text-box">
                                        <span>{category.title}</span>
                                        <div className="article-title">
                                            <div className="article-title-left">
                                                <h2>{article.title} </h2>
                                                <p>{article.published_at != null ?article.published_at.slice(0, 10) : ''}</p>
                                                <div className="article-title-user">
                                                    <div className="user-holder">
                                                        <img src="images/user-img.png" alt="Author Avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="text-inner">
                                                        <h3>{author.username}</h3>
                                                        <h4>Follow</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="article-title-right">
                                                <ul>
                                                    <li><a href=""><img src={ShareIcon} className="simple-state" alt=""/> <img src={ShareHoverIcon} className="hover-state" alt=""/></a></li>
                                                    <li className="active"><a href=""><strong>1</strong><img src={ThumbUpIcon} className="simple-state" alt=""/><img src={ThumbUpHoverIcon} className="hover-state" alt=""/></a></li>
                                                    <li><a href=""><img src={BookMarkIcon} className="simple-state" alt=""/><img src={BookMarkHoverIcon} className="hover-state" alt=""/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image-holder">
                                        { 
                                            !article.outer && !!article.thumb &&
                                            <>
                                            <img src={SERVER_URL + "/uploads/" + article.thumb.name} alt="Article Image" className="img-fluid" />
                                            <p>{article.body}</p>
                                            </>
                                        }
                                        {
                                            !article.outer && !article.thumb &&
                                            <p>{article.body}</p>
                                        }
                                        {
                                            article.outer && !!article.outer_image &&
                                            <>
                                            <img src={SERVER_URL + "/uploads/" + article.outer_image} alt="Article Image" className="img-fluid" />
                                            <p>{article.body}</p>
                                            <a href="">{article.outer_url}</a>
                                            </>
                                        }
                                        {
                                            article.outer && !!article.outer_image &&
                                            <>                                            
                                            <p>{article.body}</p>
                                            <a href="">{article.outer_url}</a>
                                            </>
                                        }
                                        
                                        
                                    </div>
                                    <div className="article-title-right mobile-version">
                                        <ul>
                                            <li><a href="#"><img src={ShareIcon} className="simple-state" alt=""/> <img src={ShareHoverIcon} className="hover-state" alt=""/></a></li>
                                            <li className="active"><a href="#"><strong>1</strong><img src={ThumbUpIcon} className="simple-state" alt=""/><img src={ThumbUpHoverIcon} className="hover-state" alt=""/></a></li>
                                            <li><a href="#"><img src={BookMarkIcon} className="simple-state" alt=""/><img src={BookMarkHoverIcon} className="hover-state" alt=""/></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="article-comments">
                                    <div className="article-comments-write">
                                        <h3>Comments</h3>
                                        <textarea className="form-control" name="comment" onChange={this.handleCommentChange} placeholder="Write here...."></textarea>
                                        <div className="comment-post">
                                            <a href="" onClick={this.handleCommentSubmit}>Post</a>
                                            <span>0/500</span>
                                        </div>
                                    </div>
<div>
                                    {
                                        comments.length > 0 && comments.map(function(comment){
                                            return(
                                                <div className="article-comments-reply">
                                                    <div className="image-holder">
                                                        <img src="images/user-icon.png" alt="avatar" className="img-fluid" />
                                                    </div>
                                                    <div className="text-box">
                                                        <h3>{comment.users_permissions_user}</h3>
                                                        <div className="reply-box">
                                                            <h4>{comment.content}</h4>
                                                            <span>{comment.published_at != null ?comment.published_at.slice(0, 10) : ''}</span>
                                                        </div>
                                                        <ul>
                                                            <li><a href="#">Reply</a></li>
                                                            <li><a href="#">Edit</a></li>
                                                            <li><a href="#">Report</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                    </div>
                                    {/*<div className="article-comments-reply">
                                        <div className="image-holder">
                                            <img src="images/user-icon.png" alt="" className="img-fluid" />
                                        </div>
                                        <div className="text-box">
                                            <h3>aamir91</h3>
                                            <div className="reply-box">
                                                <h4>Great post</h4>
                                                <span>07/30/20   7:30 PM</span>
                                            </div>
                                            <ul>
                                                <li><a href="#">Reply</a></li>
                                                <li><a href="#">Edit</a></li>
                                                <li><a href="#">Report</a></li>
                                            </ul>
                                        </div>
                                </div>*/}
                                </div>
                                <div className="related-articles">
                                    <h3>Related Articles</h3>  
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src="images/related-articles-img.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Weight loss quote</h4>
                                                        <span>Sussykai</span>
                                                        <p>Take great care of your body</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src="images/related-articles-img.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Weight loss quote</h4>
                                                        <span>Sussykai</span>
                                                        <p>Take great care of your body</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 d-none d-sm-block">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src="images/related-articles-img.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Weight loss quote</h4>
                                                        <span>Sussykai</span>
                                                        <p>Take great care of your body</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 d-none d-sm-block">
                                            <a href="#">
                                                <div className="related-articles-box">
                                                    <div className="image-holder">
                                                        <img src="images/related-articles-img.png" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="text-box">
                                                        <h4>Weight loss quote</h4>
                                                        <span>Sussykai</span>
                                                        <p>Take great care of your body</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div> 
                                </div>           
                            </div>
                        </div>
                        
                        <div class="col-xl-3 col-lg-4 col-md-12">
                            <ArticleLeftRight/>
                        </div>
                    </Row> 
                </Container>
            </section>
        );
    }
}

function mapStateToProps(state){
    
    const oneArticle = state.articles.oneArticle;
    const {auth} = state;
    
    return { 
        oneArticle,
        auth
     };
}
export default connect(mapStateToProps)(ArticleContainer)