import React, { useState } from 'react'
import {Container, Row, Col, Modal} from 'react-bootstrap'  
import artImg1 from '../../images/drug-addiction-img.png'
import artImg2 from '../../images/alcohol-addiction-img.png'
import artImg3 from '../../images/insecurity-addiction-img.png'
import artImg4 from '../../images/related-articles-img.png'
import DialImg1 from '../../images/heart-disease-img.png'
import DialImgCheck from '../../images/check-icon.svg'

const CommunitiesContent = () => {

  const [modalShow, setModalShow] = React.useState(false);

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
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><img src={DialImg1} alt="" className="img-fluid" />
                                        <span><img src={DialImgCheck} alt="" /></span>
                                    </a>
                                </li>
                            </ul>
                            
                </Modal.Body>
                <Modal.Footer>
                    <a className="subscribe-btn" href="#">SUBSCRIBE </a>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }

  return (
    <div>
        <Container>
            <div className="pre-login-inner">
                <div className="related-articles"> 
                    <h3>Communities</h3>
                    <Row>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                            <img src={artImg1} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}>
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg2} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg3} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                  
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6} >
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg4} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                   
                                </div>
                            </a>
                        </Col>                                                                    
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg1} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                   
                                </div>
                            </a>
                        </Col>                                                                   
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg2} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                  
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg3} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                   
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg4} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                               
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg1} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                 
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg2} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg3} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg4} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                  
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg1} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                  
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg2} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg3} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                 
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={4} md={4} sm={6} xs={6}  className="d-none d-sm-block">
                            <a href="#" data-toggle="modal" data-target="#exampleModal">
                                <div className="related-articles-box">
                                    <div className="image-holder">
                                        <img src={artImg4} alt=""  onClick={() => setModalShow(true)} fluid/>
                                    </div>
                                   
                                </div>
                            </a>
                        </Col>
                    </Row>
                </div>
            
            </div>
        
        {/* ------------ Categories Modal Begin--------------- */}
        {/*<Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
            </Button>*/}  
        <CategoryModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        {/*--------------Categories Modal End---------------- */}
        </Container>    
    </div>
  )
}

export default CommunitiesContent