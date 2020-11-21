import React from 'react';
import {Modal} from "react-bootstrap";
import DialImg1 from '../../images/heart-disease-img.png'
import DialImgCheck from '../../images/check-icon.svg'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { SERVER_URL } from "../../utils/apiUtils"
import { subModalHide, subscribe } from "../../actions/articles";

class CategoryModal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            selectCategoryIdentifier: null,
            selectCategoryToggle: false,
            selectedCategories: []
        }

        this.handleImgClick = this.handleImgClick.bind(this);
        this.handleSubscribeClick = this.handleSubscribeClick.bind(this);
    }

    handleImgClick(event) {
        event.preventDefault();

        const {name} = event.target;
        console.log(name);

        let flag1 = this.state.selectedCategories.includes(parseInt(name));
        if (flag1) {
            this.setState({selectedCategories: this.state.selectedCategories.filter((selectedCategory) => selectedCategory != parseInt(name))});
        } else {
            this.setState({selectedCategories: [...this.state.selectedCategories, parseInt(name)]});
        }
        console.log(this.state.selectedCategories);
        
        this.setState({selectCategoryIdentifier: name});
        this.setState({selectCategoryToggle: !this.state.selectCategoryToggle});       
        
    }

    handleSubscribeClick(event){
        event.preventDefault();
        console.log(this.props.auth.id);
        console.log(this.state.selectedCategories);
        this.props.dispatch(subscribe(this.props.auth.id, this.state.selectedCategories));
        this.props.dispatch(subModalHide());
    }

    render() {

        const that = this;

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
                                        <a href="" onClick={that.handleImgClick}>
                                            <img name={category.id} src={SERVER_URL + "/uploads/" + category.thumb} alt={category.title} class="img-fluid" />
                                            {  that.state.selectedCategories.includes(category.id) &&
                                                 <span><img src={DialImgCheck} alt="close" /></span>
                                            }                                            
                                        </a>
                                    </li>
                                );
                            })}

                        </ul>
                                
                    </Modal.Body>
                    <Modal.Footer>
                        <a class="subscribe-btn" href="" onClick={this.handleSubscribeClick}>SUBSCRIBE </a>
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
    const {auth} = state;

    return { 
        categories: categories,
        auth
    };
}
export default connect(mapStateToProps)(CategoryModal)