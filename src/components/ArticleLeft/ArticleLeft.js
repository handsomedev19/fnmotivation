import React, { useEffect, useState } from 'react'
import { Row, Col, Nav, Tab, Modal} from 'react-bootstrap'  
import artImg1 from '../../images/drug-addiction-img.png'
import artImg2 from '../../images/alcohol-addiction-img.png'
import artImg3 from '../../images/insecurity-addiction-img.png'
import artImg4 from '../../images/related-articles-img.png'
import DialImg1 from '../../images/heart-disease-img.png'
import DialImgCheck from '../../images/check-icon.svg'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { getCategories } from "../../actions/articles";


function CategoryModal(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="categories-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                            <h3>Select Categories to Subscribe</h3>
                            <p>Choose the topics that you are most interested in</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><img src={ImagCloseIcon} alt="" /></span>
                    </button>*/}
                    
                    <ul>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><img src={DialImg1} alt="" class="img-fluid" />
                                <span><img src={DialImgCheck} alt="" /></span>
                            </a>
                        </li>
                    </ul>
                            
                </Modal.Body>
                <Modal.Footer>
                    <a class="subscribe-btn" href="#">SUBSCRIBE </a>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

class ArticleLeft extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            modalShow: false
        };

    }

  componentWillMount() {
    this.props.dispatch(getCategories());      
  }

  
  render() {

    //console.log("categories: " + this.props.categories);


    return (
        <div>
            <div className="article-left">
                <div className="pre-login-inner">
                    <div >
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
                                    <select className="form-control">
                                        {/*<option>Select Community</option>*/}
                                        { this.props.categories && this.props.categories.map(function(category) {
                                            return (
                                            <option value={category.id}>{category.title}</option>
                                            );
                                        })  }
                                    </select>
                                </div>
                                <div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="recent">
                                            <div className="related-articles"> 
                                                <Row>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6} >
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
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}>
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg2} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>How to quite alcohol</h4>
                                                                    <span><strong>Udcy</strong></span>
                                                                    <p>Great Infographic</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg3} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Questions you must </h4>
                                                                    <span><strong>Jerrym</strong></span>
                                                                    <p>Understanding is key to having a healthy mind and life</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg4} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Weight loss quote</h4>
                                                                    <span><strong>Sussykai</strong></span>
                                                                    <p>Take great care of your body</p>
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
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg2} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>How to quite alcohol</h4>
                                                                    <span><strong>Udcy</strong></span>
                                                                    <p>Great Infographic</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg3} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Questions you must </h4>
                                                                    <span><strong>Jerrym</strong></span>
                                                                    <p>Understanding is key to having a healthy mind and life</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg4} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Weight loss quote</h4>
                                                                    <span><strong>Sussykai</strong></span>
                                                                    <p>Take great care of your body</p>
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
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg2} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>How to quite alcohol</h4>
                                                                    <span><strong>Udcy</strong></span>
                                                                    <p>Great Infographic</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg3} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Questions you must </h4>
                                                                    <span><strong>Jerrym</strong></span>
                                                                    <p>Understanding is key to having a healthy mind and life</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg4} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Weight loss quote</h4>
                                                                    <span><strong>Sussykai</strong></span>
                                                                    <p>Take great care of your body</p>
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
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg2} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>How to quite alcohol</h4>
                                                                    <span><strong>Udcy</strong></span>
                                                                    <p>Great Infographic</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg3} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Questions you must </h4>
                                                                    <span><strong>Jerrym</strong></span>
                                                                    <p>Understanding is key to having a healthy mind and life</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                    <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                                                        <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                            <div className="related-articles-box">
                                                                <div className="image-holder">
                                                                    <img src={artImg4} alt=""  onClick={() => this.setState({modalShow: true})} fluid/>
                                                                </div>
                                                                <div className="text-box">
                                                                    <h4>Weight loss quote</h4>
                                                                    <span><strong>Sussykai</strong></span>
                                                                    <p>Take great care of your body</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="popular">
                                            
                                        </Tab.Pane>
    
                                    </Tab.Content> 
                                </div>      
                            </div>
                        </Tab.Container>   
                    </div>
                </div>
            
            {/* ------------ Categories Modal Begin--------------- */}
            {/*<Button variant="primary" onClick={() => this.setState({modalShow: true})}>
                Launch vertically centered modal
                </Button>*/}  
            <CategoryModal
                show={this.state.modalShow}
                onHide={() => this.setState({modalShow: false})}
            />
            {/*--------------Categories Modal End---------------- */}
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

    return { categories: categories };
}
export default connect(mapStateToProps)(ArticleLeft)
