import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Toast from 'react-bootstrap/Toast';
import { hideAlert } from "../../actions/alerts";

class Alert extends React.Component {

    constructor(props){
        super(props);
    }


    render () {
        return (
            <div style=
            {{position: "fixed",
                top:"10px",
                right: "10px",
                minWidth: "300px",
                backgroundColor: "#d4edda",
                borderRadius: "5px", 
                zIndex: "999",
                borderColor: "#c3e6cb",
                color: "#155724"
            }}>
                <Toast onClose={() => this.props.dispatch(hideAlert())} show={this.props.showAlert} delay={3000} style={{width: "600px!important"}} autohide>
                    {/*<Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                        />
                        <strong className="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                    </Toast.Header> */}
                    <Toast.Body style={{backgroundColor: "#d4edda", fontSize: "18px"}}>{this.props.message}</Toast.Body>
                </Toast>
            </div>
        );
    }
}

Alert.contextTypes = {
    store: PropTypes.object.isRequired
};
  
Alert.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { alerts } = state;
    const { showAlert } = alerts;
    const { message } = alerts;

    console.log("notification: " + showAlert);

    return { showAlert: showAlert, message: message };
}

export default connect(mapStateToProps)(Alert);