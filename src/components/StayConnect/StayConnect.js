import React from 'react'
import CategoryModal from "../CategoryModal/CategoryModal";
import {connect} from "react-redux";
import {subModalShow} from "../../actions/articles";
import {subModalHide} from "../../actions/articles";


class StayConnect extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            modalShow: false,
            subCategories: []
        };
    }

    componentDidMount(){
       
    }

    render() {
        return (
            <div>
                <section class="stay-connected-sec">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12">
                                    <div class="stay-connected-inner">
                                        <h2>Stay connected <br/>
                                            Have stories sent to your inbox</h2>
                                        <a onClick={() => this.props.dispatch(subModalShow())} >SUBSCRIBE NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CategoryModal
                        show={this.props.subModalShow}
                        onHide={() => this.props.dispatch(subModalHide())}
                    />
            </div>
        );
    }  
}

function mapStateToProps(state) {
    const {auth} = state;
    const {subModalShow} = state.articles;

    return { auth, subModalShow}
}

export default connect(mapStateToProps)(StayConnect)
  
