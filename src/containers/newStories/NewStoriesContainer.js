import React from 'react'
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getCategories } from "../../actions/articles";
import { getArticles } from "../../actions/articles";
import { getCommunityStories } from "../../actions/articles";
import {  ARTICLE_THUMB_URL, SERVER_URL } from '../../utils/apiUtils';
import { Link } from 'react-router-dom'
import {subModalShow} from "../../actions/articles";
import ArticleLeftRight from "../../components/ArticleLeftRight/ArticleLeftRight";
import StayConnect from "../../components/StayConnect/StayConnect";
import {
    getSubscribeRecentArticle1,
    getSubscribePopularArticle1,
    getSubscribeRecentArticle1ForVisitor,
    getSubscribePopularArticle1ForVisitor
} from "../../actions/articles";

class NewStoriesContainer extends React.Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    this.props.dispatch(getCategories());
    this.props.dispatch(getArticles());
    if (this.props.auth.token != null){
        this.props.dispatch(getSubscribeRecentArticle1(this.props.auth.id));
        this.props.dispatch(getSubscribePopularArticle1(this.props.auth.id));
    } else {
        this.props.dispatch(getSubscribeRecentArticle1ForVisitor());
        this.props.dispatch(getSubscribePopularArticle1ForVisitor());
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    //console.log("community");
    //console.log(value);

    if (value != "0") {
        //this.props.dispatch(getCommunityStories(value));
        this.props.history.push(`/article-categories/${value}`);
    } 

  }

  render(){

    const IsAuthenticated = !!this.props.auth.token;
    var that = this;

    return (
        <div>
            <section className="article-sec">
                <Container fluid>
                    <Row>
                        <Col xl={9} lg={8} md={12}>
                            <div className="article-left">
                                <div className="pre-login-inner">
                                    <h2>New Stories</h2>
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
                                                                    { this.props.subscribeRecentArticles && this.props.subscribeRecentArticles.map(function(story, index){
                                                                    const {article_author} = story;
                                                                    const {article_category} = story;
                                    
                                                                                                                            
                                                                    if (IsAuthenticated) {
                                                                            return (
                                                                                <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                                                    <Link to={`/articles/${story.id}`} activeclassname="active">
                                                                                        <div className="related-articles-box">
                                                                                            <div className="image-holder">
                                                                                                
                                                                                                    <img src={story.thumb ? SERVER_URL + story.thumb.url : ARTICLE_THUMB_URL + article_category.thumb} alt={article_category.thumb}  fluid/>
                                                                                                
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
                                                                                                <img src={story.thumb ? SERVER_URL + story.thumb.url : ARTICLE_THUMB_URL + article_category.thumb} alt={article_category.thumb}  fluid/>
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
                                                        <Tab.Pane eventKey="popular">
                                                        <div className="related-articles"> 
                                                                <Row>
                                                                    { this.props.subscribePopularArticles && this.props.subscribePopularArticles.map(function(story, index){

                                                                        const {article_author} = story;
                                                                        const {article_category} = story;

                                                                        if (IsAuthenticated) {
                                                                            return (
                                                                                <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                                                    <Link to={`/articles/${story.id}`} activeClassName="active">
                                                                                        <div className="related-articles-box">
                                                                                            <div className="image-holder">
                                                                                                
                                                                                                    <img src={story.thumb ? SERVER_URL + story.thumb.url : ARTICLE_THUMB_URL + article_category.thumb} alt={article_category.thumb}  fluid/>
                                                                                                
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
                                                                                                <img src={story.thumb ? SERVER_URL + story.thumb.url : ARTICLE_THUMB_URL + article_category.thumb} alt={article_category.thumb}  fluid/>
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
                        </Col>
                        <Col xl={3} lg={4} md={12}>
                            <ArticleLeftRight/>
                        </Col> 
                    </Row> 
                </Container>
              </section>

              <StayConnect/>
                
        </div>
    )
  }
  
}

function mapStateToProps(state){
  const { categories } = state.articles || {};
  const { articles } = state.articles || {};
  const { subscribeRecentArticles } = state.articles || {};
  const { subscribePopularArticles } = state.articles || {};
  const { auth } = state || {};
  const { subShowModal } = state.articles || {};
  const {category} = state.articles || {};

  return {
      categories,
      articles,
      subscribeRecentArticles,
      subscribePopularArticles,
      auth,
      subShowModal,
      category
  }
}
export default connect(mapStateToProps)(NewStoriesContainer)