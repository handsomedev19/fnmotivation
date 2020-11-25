import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {postContact} from "../../actions/auth";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        checkValue: "false"
    }
   
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);     
  }

  handleChange(event){
      event.preventDefault();
      const{name, value} = event.target;

      this.setState({[name] : value});
      
      console.log(this.state);
  }

  handleCheckBox(event){
      
      const {value} = event.target;

      console.log(value);

      if (value == "true") {this.setState({checkValue: "false"});}
      if (value == "false") {this.setState({checkValue: "true"});}
  }

  handleSubmit(event){
      event.preventDefault();

      if(this.state.checkValue == "true"){
          const config = {
              name: this.state.name,
              email: this.state.email,
              subject: this.state.subject,
              message: this.state.message
          }
          
          this.props.dispatch(postContact(config));
      }
  }

  render() {
   
    return (
      <div className="wrapper">
        <section className="login-sec">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <div className="login-inner">
                          <h3>Contact Us</h3>
                          <form onSubmit={this.handleSubmit}>
                              <div className="form-group mb-5">
                                  <label>Name</label>
                                  <input type="text" className="form-control" placeholder="Aamir Mustafa" name="name" onChange={this.handleChange}/>
                              </div>
                              <div className="form-group mb-5">
                                  <label>Email</label>
                                  <input type="text" className="form-control" placeholder="aamir91@gmail.com" name="email" onChange={this.handleChange}/>
                              </div>
                              <div className="form-group mb-5">
                                  <label>Subject</label>
                                  <input type="text" className="form-control" placeholder="" name="subject" onChange={this.handleChange}/>
                              </div>
                              <div className="form-group mb-5">
                                    <label>Message</label>
                                    <textarea className="form-control" placeholder="" name="message" onChange={this.handleChange} style={{height: "200px"}}></textarea>
                              </div>
                              
                              <div className="form-group mb-5">
                                  <label className="check ">I am not a robot.
                                      <input type="checkbox"  name="is_name" value={this.state.checkValue} onClick={this.handleCheckBox}/>
                                      <span className="checkmark"></span>
                                  </label>
                              </div>
                              <div className="form-group">
                                  <input type="button" className="btn btn-default" value="Send Message" onClick={this.handleSubmit}/>
                              </div>                            
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </div>
    );
  }
}

function mapStateToProps(state){

    return {

    }
}

export default connect(mapStateToProps)(Contact);
