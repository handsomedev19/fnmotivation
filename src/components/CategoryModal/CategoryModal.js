import React from 'react';
import {Modal} from "react-bootstrap";
import DialImg1 from '../../images/heart-disease-img.png'
import DialImgCheck from '../../images/check-icon.svg'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { SERVER_URL } from "../../utils/apiUtils"

class CategoryModal extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
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
                        
                        <ul>
                            {this.props.categories && this.props.categories.map(function(category) {
                                return(
                                    <li>
                                        <a href="#"><img src={SERVER_URL + "/uploads/" + category.thumb} alt={category.title} class="img-fluid" />
                                            <span><img src={DialImgCheck} alt="close" /></span>
                                        </a>
                                    </li>
                                );
                            })}

                            {/*<li>
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
                            </li>*/}
                        </ul>
                                
                    </Modal.Body>
                    <Modal.Footer>
                        <a class="subscribe-btn" href="#">SUBSCRIBE </a>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }  
}

CategoryModal.contextType = {
    store: PropTypes.object.isRequired
}

CategoryModal.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    const {articles} = state;
    const { categories } = articles;

    return { 
        categories: categories
    };
}
export default connect(mapStateToProps)(CategoryModal)