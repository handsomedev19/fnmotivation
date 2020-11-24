import React from 'react'
import {Container, Row, Collapse} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";
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
import { postComment } from "../../actions/articles";
import { postCommentReply } from "../../actions/articles";
import { getComments } from "../../actions/articles";
import { getRelatedArticles } from "../../actions/articles";
import { postThumbUp } from "../../actions/articles";
import { 
    checkThumbUp,
    getTags
} from "../../actions/articles";
import { DEFAULT_USER_AVATAR, AVATAR_URL, ARTICLE_THUMB_URL, ARTICLE_CATEGORY_THUMB_URL } from "../../utils/apiUtils";

class ArticleContainer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            comment: "", 
            replyOpen: false,
            collapseIdentifier: "",
            replyContent: ""
        }

        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleReplyToggle = this.handleReplyToggle.bind(this);
        this.handleReplyChange = this.handleReplyChange.bind(this);
        this.handleReplySubmit = this.handleReplySubmit.bind(this);
        this.handleThumbUpClick = this.handleThumbUpClick.bind(this);
    }
    //this.props.match.params.articleId

    componentDidMount(){
        const articleId = this.props.match.params.articleId;
        //console.log("Article Id: " + articleId);

        this.props.dispatch(getOneArticle(articleId));
        this.props.dispatch(getComments(articleId));
        this.props.dispatch(getTags(articleId));
        
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.articleId !== this.props.match.params.articleId){
            this.props.dispatch(getOneArticle(this.props.match.params.articleId));
            this.props.dispatch(getComments(this.props.match.params.articleId));
            this.props.dispatch(getTags(this.props.match.params.articleId));
        }
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

    handleReplyToggle(event) {
        event.preventDefault();
        const {name} = event.target;
        //console.log(name);
        this.setState({collapseIdentifier: name});
        this.setState({replyOpen: !this.state.replyOpen})
    }

    handleReplyChange(event) {


        const {name, value} = event.target;

        this.setState({ replyContent: value });
        console.log(this.state.replyContent);

    }

    handleReplySubmit(event){
        event.preventDefault();

        const {name} = event.target;
        let result = name.split(";");
        const users_permissions_user = !!result[0] ? result[0] : 0;
        const comment = !!result[1] ? result[1] : 0; 

        console.log(users_permissions_user);
        console.log(comment);

        const config = {
            users_permissions_user: this.props.auth.id,
            comment: comment, 
            content: this.state.replyContent
        }

        this.props.dispatch(postCommentReply(config));

    }

    handleThumbUpClick(event){
        event.preventDefault();

        let user = this.props.auth; if(user == null) { user = {}; }       
        let article = this.props.oneArticle; if (article == null) { article = {}; }
        let category = article.article_category; if (category == null) {category = {};}
        let author = article.article_author; if (author == null) {author = {};}

        const articleId = this.props.match.params.articleId;
        let likes = this.props.oneArticle.likes;
        if (likes == null) {likes = 0;}

        let flag = false;
        let userId1 = parseInt(user.id);
        let articleId1 = parseInt(articleId);
        
        axios
        .get(SERVER_URL + "/article-likes?_where[0][article_id]=" + articleId1 + "&_where[1][user_id]=" + userId1)
        .then(response => {
            // Handle success.
            console.log("Article Like Response:");
            console.log(response.data);

            if (response.data.length > 0) {
                flag = true;
            } else {
                flag = false;
            }

            console.log(flag);

            if (!flag && user.id != author.id) {
                this.props.dispatch(postThumbUp(articleId, likes, user.id));
            } else {
                //this.props.dispatch(alert("You have already recommended it!"));
            }
        })
        .catch(error => {
            // Handle error.
            console.log('Article Like Response, An error occurred:', error.response);
            flag = false;
        });

        
    }


    render(){
        let user = this.props.auth; if(user == null) { user = {}; }       
        let article = this.props.oneArticle; if (article == null) { article = {}; }
        let category = article.article_category; if (category == null) {category = {};}
        let author = article.article_author; if (author == null) {author = {};}
        let comments = this.props.comments; if(comments == null) {comments = {};}
        let relatedArticles = this.props.relatedArticles; if (relatedArticles == null) {relatedArticles = {};}

        let url = window.location.href;

        //console.log("article container render:");
        //console.log(article);
        
        const that = this;

        return(
            <section className="article-sec">
                <Container fluid>
                    <Row>
                        <div className="col-xl-9 col-lg-8">
                            <div className="article-left">
                                <div className="breadcrumb-main">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item"><a href="/">{category.title}</a></li>
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
                                                        {
                                                            this.props.auth.avatar == null ?
                                                            <img className="img-fluid" src={DEFAULT_USER_AVATAR} alt="avatar1" />
                                                            :
                                                            <img className="img-fluid" src={AVATAR_URL + this.props.auth.avatar} alt="avatar2" />
                                                        }
                                                    </div>
                                                    <div className="text-inner">
                                                        <h3>{author.username}</h3>
                                                        <h4>Follow</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="article-title-right">
                                                <ul>
                                                    <li><a href={"https://www.facebook.com/sharer/sharer.php?u=" + url}>
                                                            <img src={ShareIcon} className="simple-state" alt=""/> 
                                                            <img src={ShareHoverIcon} className="hover-state" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li className="active">
                                                        <a href="" onClick={this.handleThumbUpClick}>
                                                            <strong>{article.likes}</strong>
                                                            <img src={ThumbUpIcon} className="simple-state" alt=""/>
                                                            <img src={ThumbUpHoverIcon} className="hover-state" alt=""/>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="">
                                                            <img src={BookMarkIcon} className="simple-state" alt=""/>
                                                            <img src={BookMarkHoverIcon} className="hover-state" alt=""/>
                                                        </a>
                                                    </li>
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
                                            <a href={article.outer_url}><img src={article.outer_image} alt="Article Image" className="img-fluid" /></a>
                                            <p>{article.body}</p>
                                            <a href={article.outer_url}>{article.outer_url}</a>
                                            </>
                                        }
                                        {
                                            article.outer && !!article.outer_image &&
                                            <>                                            
                                            <p>{article.body}</p>
                                            <a href={article.outer_url}>{article.outer_url}</a>
                                            </>
                                        }
                                        
                                        
                                    </div>
                                    <div className="article-title-right mobile-version">
                                        <ul>
                                            <li><a href=""><img src={ShareIcon} className="simple-state" alt=""/> <img src={ShareHoverIcon} className="hover-state" alt=""/></a></li>
                                            <li className="active"><a href=""><strong>1</strong><img src={ThumbUpIcon} className="simple-state" alt=""/><img src={ThumbUpHoverIcon} className="hover-state" alt=""/></a></li>
                                            <li><a href=""><img src={BookMarkIcon} className="simple-state" alt=""/><img src={BookMarkHoverIcon} className="hover-state" alt=""/></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="article-comments">
                                    {
                                        this.props.auth.id != author.id &&
                                        <div className="article-comments-write">
                                            <h3>Comments</h3>
                                            <textarea className="form-control" name="comment" onChange={this.handleCommentChange} placeholder="Write here...."></textarea>
                                            <div className="comment-post">
                                                <a href="" onClick={this.handleCommentSubmit}>Post</a>
                                                <span>0/500</span>
                                            </div>
                                        </div>
                                    }
                                     
                                    {
                                        
                                        comments.length > 0 && comments.map(function(comment, index){
                                            return(
                                                <div>
                                                <div className="article-comments-reply">
                                                    <div className="image-holder">
                                                        {
                                                            comment.users_permissions_user.avatar == null ?
                                                            <img className="img-fluid" src={DEFAULT_USER_AVATAR} alt="avatar1" />
                                                            :
                                                            <img className="img-fluid" src={AVATAR_URL + comment.users_permissions_user.avatar} alt="avatar2" />
                                                        }
                                                    </div>
                                                    <div className="text-box">
                                                        <h3>{comment.users_permissions_user.username}</h3>
                                                        <div className="reply-box">
                                                            <h4>{comment.content}</h4>
                                                            <span>{comment.published_at != null ?comment.published_at.slice(0, 10) : ''}</span>
                                                        </div>
                                                        {
                                                            user.id != comment.users_permissions_user.id &&
                                                            <ul>
                                                                <li><a href="" onClick={that.handleReplyToggle} name={"example-collapse-text" + index} aria-controls={"example-collapse-text" + index} aria-expanded={that.state.replyOpen}>Reply</a></li>
                                                                <li><a href="#">Edit</a></li>
                                                                <li><a href="#">Report</a></li>
                                                            </ul>
                                                        }
                                                        
                                                        {
                                                            user.id == comment.users_permissions_user.id &&
                                                            <ul>
                                                                <li><a href="#">Edit</a></li>
                                                                <li><a href="#">Report</a></li>
                                                            </ul>
                                                        }

                                                        <Collapse in={that.state.replyOpen && "example-collapse-text" + index == that.state.collapseIdentifier}>
                                                            <div id={"example-collapse-text" + index } className="article-comments-write">
                                                                <h3>Contents</h3>
                                                                <textarea name={"reply" + index} onChange={that.handleReplyChange} placeholder="Write here...." style={{width: "100%", borderRadius: "6px"}}></textarea>
                                                                <div className="comment-post">
                                                                    <a href="" name={comment.users_permissions_user + ";" + comment.id} onClick={that.handleReplySubmit}>Post</a>
                                                                    <span>0/500</span>
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>
                                            );
                                        })
                                    }

                                    
                                   
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
                                    <Row>
                                        {
                                            relatedArticles.length > 0 && relatedArticles.map(function(article, index){
                                                return (
                                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                                                        <Link to={`/articles/${article.id}`} activeclassname="active">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={article.thumb ? ARTICLE_THUMB_URL + article.thumb.name : ARTICLE_CATEGORY_THUMB_URL + article.article_category.thumb} alt="Article Image"  fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>{article.title}</h4>
                                                                    <span>{article.article_author.username}</span>
                                                                    <p>{article.body}</p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                );
                                            })
                                        }
                                        {
                                            relatedArticles == null &&
                                            <div className="text-box">
                                                <h4>No related articles</h4>                                                
                                            </div>
                                        }
                                        {/*
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
                                        </div> */}                                        
                                    </Row> 
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
    const {comments} = state.articles;
    const {relatedArticles} = state.articles;
    const {tags} = state.articles;
    
    return { 
        oneArticle,
        auth,
        comments,
        relatedArticles,
        tags
     };
}
export default connect(mapStateToProps)(ArticleContainer)