import React from 'react'
import { Row, Col, Nav, Tab} from 'react-bootstrap' 
import artImg1 from '../../images/drug-addiction-img.png'
import artImg2 from '../../images/alcohol-addiction-img.png'
import artImg3 from '../../images/insecurity-addiction-img.png'
import artImg4 from '../../images/related-articles-img.png'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { getCategories } from "../../actions/articles";
import { getArticles } from "../../actions/articles";
import { getCommunityStories } from "../../actions/articles";
import { SERVER_URL } from '../../utils/apiUtils'
import { Link } from 'react-router-dom'
import auth from '../../reducers/auth';
import {subModalShow} from "../../actions/articles";
import {subModalHide} from "../../actions/articles";
import { getSubscribeRecentArticle } from "../../actions/articles";
import { getSubscribePopularArticle } from "../../actions/articles";
import { withRouter } from "react-router";

class ArticleLeft extends React.Component {

    constructor (props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }

  componentDidMount() {
    this.props.dispatch(getCategories());
    this.props.dispatch(getArticles());
    this.props.dispatch(getSubscribeRecentArticle(this.props.auth.id));
    this.props.dispatch(getSubscribePopularArticle(this.props.auth.id));
  }

  handleChange(event) {
    const { name, value } = event.target;
    //console.log("community");
    //console.log(value);

    if (value != "0") {
        this.props.history.push(`/categories/${value}`);
    } 

  }

  
  render() {

    //console.log("categories: " + this.props.categories);
    const IsAuthenticated = !!this.props.auth.token;
    var that = this;


    return (
        <div>
            <div className="article-left">
                <div className="pre-login-inner">
                    <div>
                        <Tab.Container defaultActiveKey="recent">      
                            <div>
                                <div className="pre-login-sort">
                                    <Nav variant="pills" className="">
                                        <Nav.Item>
                                            <Nav.Link eventKey="recent">Most Recent</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <   Nav.Link eventKey="popular">Popular</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <select className="form-control" onChange={this.handleChange}>
                                        <option value="0">Select Community</option>
                                        { this.props.categories && this.props.categories.map(function(category) {
                                            return (
                                            <option value={category.id}>{category.title}</option>
                                            );
                                        }) }
                                    </select>
                                </div>
                                <div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="recent">
                                            <div className="related-articles"> 
                                                <Row>
                                                    { this.props.subscribeRecentStories && this.props.subscribeRecentStories.map(function(story, index){
                                                       const {article_author} = story;
                                                       const {article_category} = story;
                    
                                                                                                               
                                                       if (IsAuthenticated) {
                                                            return (
                                                                <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                                    <Link to={`/articles/${story.id}`} activeclassname="active">
                                                                        <div className="related-articles-box">
                                                                            <div className="image-holder">
                                                                                
                                                                                    <img src={story.thumb ? SERVER_URL + story.thumb.url : SERVER_URL + "/uploads/" + article_category.thumb} alt={article_category.thumb}  fluid/>
                                                                                
                                                                            </div>
                                                                            <div className="text-box">
                                                                            <h4>{story.title && story.title}</h4>
                                                                                <span>{article_author && article_author.username}</span>
                                                                                <p>{story.intro && story.intro}</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </Col>
                                                            );
                                                       } else {
                                                            return (
                                                                <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                                    <a onClick={() => that.props.dispatch(subModalShow())}>
                                                                        <div className="related-articles-box">
                                                                            <div className="image-holder">                                                
                                                                                <img src={story.thumb ? SERVER_URL + story.thumb.url : SERVER_URL + "/uploads/" + article_category.thumb} alt={article_category.thumb}  fluid/>
                                                                            </div>
                                                                            <div className="text-box">
                                                                            <h4>{story.title && story.title}</h4>
                                                                                <span>{article_author && article_author.username}</span>
                                                                                <a href="/#login"><p>{story.intro && story.intro}</p></a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </Col>
                                                            );
                                                       }  
                                                    })}
                                                    {/*<Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                        <img src={artImg1} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Heroin Addiction</h4>
                                                                    <span>bellajhuskey</span>
                                                                    <p>I was diagnosed with depression, anxiety and OCD when i was 10.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg1} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Heroin Addiction</h4>
                                                                    <span>bellajhuskey</span>
                                                                    <p>I was diagnosed with depression, anxiety and OCD when i was 10.</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>                                                                   
                                                */}
                                                    </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="popular">
                                        <div className="related-articles"> 
                                                <Row>
                                                    { this.props.subscribePopularStories && this.props.subscribePopularStories.map(function(story, index){

                                                        const {article_author} = story;
                                                        const {article_category} = story;

                                                        if (IsAuthenticated) {
                                                            return (
                                                                <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                                    <Link to={`/articles/${story.id}`} activeClassName="active">
                                                                        <div className="related-articles-box">
                                                                            <div className="image-holder">
                                                                                
                                                                                    <img src={story.thumb ? SERVER_URL + story.thumb.url : SERVER_URL + "/uploads/" + article_category.thumb} alt={article_category.thumb}  fluid/>
                                                                                
                                                                            </div>
                                                                            <div className="text-box">
                                                                            <h4>{story.title && story.title}</h4>
                                                                                <span>{article_author && article_author.username}</span>
                                                                                <p>{story.intro && story.intro}</p>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </Col>
                                                            );
                                                       } else {
                                                            return (
                                                                <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                                    <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                                        <div className="related-articles-box">
                                                                            <div className="image-holder">                                                
                                                                                <img src={story.thumb ? SERVER_URL + story.thumb.url : SERVER_URL + "/uploads/" + article_category.thumb} alt={article_category.thumb}  fluid/>
                                                                            </div>
                                                                            <div className="text-box">
                                                                            <h4>{story.title && story.title}</h4>
                                                                                <span>{article_author && article_author.username}</span>
                                                                                <a href="/#login"><p>{story.intro && story.intro}</p></a>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </Col>
                                                            );
                                                       }  
                                                    })}
                                                </Row>
                                            </div>
                                        </Tab.Pane>
    
                                    </Tab.Content> 
                                </div>      
                            </div>
                        </Tab.Container>   
                    </div>
                </div>
     
            
           
            </div>    
        </div>
      )
  }
}

ArticleLeft.contextType = {
    store: PropTypes.object.isRequired
}

ArticleLeft.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    const { categories } = state.articles;
    const { articles } = state.articles;
    const { communityRecentStories } = state.articles;
    const { communityPopularStories } = state.articles;
    const { auth } = state;
    const { subShowModal } = state.articles;
    const { subscribeRecentStories } = state.articles;
    const { subscribePopularStories } = state.articles;

    return { 
        categories: categories,
        articles: articles,
        communityRecentStories: communityRecentStories,
        communityPopularStories: communityPopularStories, 
        auth: auth,
        subShowModal,
        subscribeRecentStories,
        subscribePopularStories
    };
}
export default connect(mapStateToProps)(withRouter(ArticleLeft))
