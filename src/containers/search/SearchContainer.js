import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { DELETE_STORY_SUCCESS, getCategories } from "../../actions/articles";
import {  ARTICLE_THUMB_URL, ARTICLE_CATEGORY_THUMB_URL } from '../../utils/apiUtils';
import { Link } from 'react-router-dom';
import {getArticleSearch} from "../../actions/articles";
import configureStore from '../../store/configureStore';

class SearchContainer extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const value = this.props.history.location.search;
    console.log(value);
    let n = value.length;
    let value1 = value.slice(1, n);
    console.log(value1);

    const config = {
        query: value1,
        articleType: "story",
        userId: 0
    }

    this.props.dispatch(getArticleSearch(config));
  }

  componentDidUpdate(prevProps){
      console.log(prevProps.history.location.search);
      console.log(this.props.history.location.search);
    if (prevProps.history.location.search !== this.props.history.location.search){
        console.log("ok");
    }
  }

  render(){
    return (
      <div className="wrapper">
          <Container>
            <div className="pre-login-inner">
                <div className="related-articles"> 
                    <h3>Search Results</h3>
                    <Row>
                        { !!this.props.searchResult && this.props.searchResult.map(function(article){
                            return(
                              <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                  <Link to={`/articles/${article.id}`} activeclassname="active">
                                    <div className="related-articles-box">
                                        <div className="image-holder">
                                            {
                                                article.thumb ? <img src={ARTICLE_THUMB_URL + article.thumb.url} alt="" fluid/>
                                                : <img src={ARTICLE_CATEGORY_THUMB_URL + article.article_category.thumb} alt="" fluid/>                                                
                                            }                                                
                                        </div>
                                        <div className="text-box">
                                            <h4>{article.title && article.title}</h4>
                                            <span>{article.article_author && article.article_author.username}</span>
                                            <p>{article.intro && article.intro}</p>
                                        </div>
                                    </div>
                                  </Link>
                              </Col>
                            );
                          })
                        }  
                    </Row>
                </div>
            
            </div>
        </Container>          
      </div>
    )
  }
  
}

function mapStateToProps(state){
  const {searchResult} = state.articles || {};
  return {
      searchResult
  }
}
export default connect(mapStateToProps)(SearchContainer)