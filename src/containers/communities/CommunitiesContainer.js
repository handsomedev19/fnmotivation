import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getCategories } from "../../actions/articles";
import {  ARTICLE_THUMB_URL } from '../../utils/apiUtils';
import { Link } from 'react-router-dom';

class CommunitiesContainer extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.dispatch(getCategories());
  }

  render(){
    return (
      <div className="wrapper">
          <Container>
            <div className="pre-login-inner">
                <div className="related-articles"> 
                    <h3>Communities</h3>
                    <Row>
                        { !!this.props.categories && this.props.categories.map(function(category){
                            return(
                              <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                  <Link to={`/categories/${category.id}`} activeclassname="active">
                                    <div className="related-articles-box">
                                        <div className="image-holder">
                                                <img src={ARTICLE_THUMB_URL + category.thumb} alt="" fluid/>
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
  const { categories } = state.articles || {};
  return {
      categories
  }
}
export default connect(mapStateToProps)(CommunitiesContainer)