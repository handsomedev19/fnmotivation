import React from 'react'
import axios from 'axios'
import PropTypes from "prop-types";
import {Container, Row, Col} from 'react-bootstrap'
import GoogleIcon from '../../images/google-icon.svg'
import TwitterIcon from '../../images/twitter-icon2.svg'
import FacebookIcon from '../../images/facebook-icon2.svg'
import { connect } from "react-redux";
import { signup } from "../../actions/auth"


class SignupContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tempUser: {
                tempUserName: '',
                tempFullName: '',
                tempeEmail: '',
                tempBirthday: '',
                tempPassword: '',
                tempConfirmPassword: ''
            },
            tempGender: 'male',
            tempCheckValue: 'false',
            tempIsMatched: 'false',
            tempSubmitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleRadioClick = this.handleRadioClick.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
          // logged in, let's show redirect if any, or show home
          try {
            const { from } = this.props.location.state || {
              from: { pathname: "/" }
            };
            nextProps.history.replace(from);
          } catch (err) {
            nextProps.history.replace("/");
          }
        }
    }
    
    handleChange(event) {    
        const { name, value } = event.target;
        const { tempUser } = this.state;
        this.setState({
            tempUser: {
                ...tempUser,
                [name]: value
            }
        });

        console.log(name);
        console.log(value);
    }

    handleRadioClick(event) {    
        const { name, value } = event.target;
        console.log(name + ' ' + value);
        this.setState({tempGender: name});
    }

    handleCheckBox(event) {    
        const { name, value } = event.target;
        console.log("Checked" + ' ' + value);
        if (value === 'true') { this.setState({tempCheckValue: 'false'});}
        if (value === 'false') { this.setState({tempCheckValue: 'true'});}
    }

    handleSignup(event) {
        event.preventDefault();
        console.log(this.state.tempUser.userName);
        console.log(this.state.tempUser.email);
        console.log(this.state.tempUser.password);
        console.log(this.state.tempGender);

        this.setState({ tempSubmitted: true });
        const { tempUser } = this.state;

        const config = {
            username: tempUser.userName,
            fullname: tempUser.fullName,
            email: tempUser.email,
            gender: this.state.tempGender,
            birthday: tempUser.birthday,
            password: tempUser.password,
        };

        if (tempUser.password === tempUser.confirmPassword) {
            this.setState({tempIsMatched: 'true'});
            if (this.state.tempCheckValue === 'true' && tempUser.userName && tempUser.email && tempUser.password){

                this.props.dispatch(signup(config.username, config.fullname, config.email, config.gender, config.birthday, config.password));
              
                this.setState({ tempSubmitted: false });
                this.setState({tempUser : {tempUserName: '', tempFullName: '', tempeEmail: '', tempPassword: '', tempBirthday: '', tempConfirmPassword: ''}});
                this.setState({tempIsMatched: 'false'});
                this.setState({tempCheckValue: 'false'});
            }
        } else {
            this.setState({tempIsMatched: 'false'});
        }
                
    };
  
  render() {
    const { tempUser, tempGender, tempSubmitted } = this.state;

    return (
        <div className="wrapper">
          
          <section className="login-sec register-sec">
                  <Container fluid>
                      <Row>
                          <Col col={12}>
                              <div className="login-inner">
                                  <div className="login-title">
                                      <h3>Sign Up</h3>
                                      <p>Please Sign Up with one of your existing third party accounts </p>
                                  </div>
                                  <form>
                                      <div className="form-group">
                                          <div className="social-media">
                                              <ul>
                                                  <li><a href="#"><img src={GoogleIcon} alt="" /></a></li>
                                                  <li><a className="twitter-icon" href="#"><img src={TwitterIcon} alt="" /></a></li>
                                                  <li><a className="facebook-icon" href="#"><img src={FacebookIcon} alt="" /></a></li>
                                              </ul>
                                          </div>  
                                          <div className="or">
                                              <span>OR</span>
                                          </div>
                                          <h4>Sign Up by providing information below:</h4>
                                      </div>
                                      <div className="form-group">
                                          <label>Username</label>
                                          <input type="text" className="form-control" placeholder="Username" name="userName" value={tempUser.userName} onChange={this.handleChange}/>
                                          {tempSubmitted && !tempUser.userName && <div className="help-block">Username is required</div> }
                                          <p className="user-text">Username may contain only letters, numbers, and @/./+/-/_ characters. Username cannot contain spaces.</p>
                                          
                                      </div>
                                      <div className="form-group ">
                                          <label>Fullname</label>
                                          <input type="text" className="form-control" placeholder="" name="fullName" value={tempUser.fullName} onChange={this.handleChange}/>
                                          {tempSubmitted && !tempUser.fullName && <div className="help-block">Fullname is required</div> } 
                                      </div>
                                      <div className="form-group ">
                                          <label>Email</label>
                                          <input type="text" className="form-control" placeholder="" name="email" value={tempUser.email} onChange={this.handleChange}/>
                                          {tempSubmitted && !tempUser.email && <div className="help-block">Email is required</div> } 
                                      </div>
                                      <div className="form-group" >
                                          <label>Gender</label>
                                          <div className="select-gender">
                                          
                                              <ul>
                                                  <li>
                                                      <label className="radio">Male
                                                          <input type="radio" checked={tempGender === 'male'} name="male" onClick={this.handleRadioClick}/>
                                                          <span className="checkround"></span>
                                                      </label>
                                                  </li>
                                                  <li>
                                                      <label className="radio">Female
                                                          <input type="radio" checked={tempGender === 'female'} name="female" onClick={this.handleRadioClick}/>
                                                          <span className="checkround"></span>
                                                      </label>
                                                  </li>
                                                  <li>
                                                      <label className="radio">Non-Binary
                                                          <input type="radio" checked={tempGender === 'non-binary'} name="non-binary" onClick={this.handleRadioClick}/>
                                                          <span className="checkround"></span>
                                                      </label>
                                                  </li>
                                              </ul>
                                          </div>  
                                      </div>
                                      <div className="form-group ">
                                          <label>Date of Birth</label>
                                          <input type="text" className="form-control" placeholder="mm/dd/yyyy" name="birthday" value={tempUser.birthday} onChange={this.handleChange}/>
                                          {tempSubmitted && !tempUser.birthday && <div className="help-block">Birthday is required</div> }
                                      </div>
                                      <div className="form-group ">
                                          <label>Password</label>
                                          <input type="password" className="form-control" placeholder="" name="password" value={tempUser.password} onChange={this.handleChange}/>
                                          {tempSubmitted && !tempUser.password && <div className="help-block">Password is required</div> } 
                                          <p className="password-must">Your password must contain at least 8 characters.</p>
                                      </div>
                                      <div className="form-group ">
                                          <label>Confirm Password</label>
                                          <input type="password" className="form-control" placeholder="" name="confirmPassword" value={tempUser.confirmPassword} onChange={this.handleChange}/>
                                          {tempSubmitted && !tempUser.confirmPassword && <div className="help-block">Confirmpassword is required</div> }
                                          {tempSubmitted && !(this.state.tempIsMatched === 'true') && <div className="help-block">Confirm Password couldn't match the Password</div> }
                                      </div>
                                      <div className="form-group mb-5">
                                          <label className="check ">I have read and agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                                              <input type="checkbox" name="checkbox" value={this.state.tempCheckValue} onClick={this.handleCheckBox}/>
                                              <span className="checkmark"></span>
                                              {tempSubmitted && !(this.state.tempCheckValue === 'true') && <div className="help-block">Confirm is required</div> }
                                          </label>
                                      </div>
                                      <div className="form-group">
                                          <input type="button" className="btn btn-default" value="Sign Up" onClick={this.handleSignup}/>
                                      </div>
                                      <div className="form-group">
                                          <p className="register-ac">Already have an account?<a href="/login">Login</a></p>
                                      </div>
                                  </form>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </section>
  
        </div>
    );
  }

  
}

SignupContainer.contextTypes = {
    store: PropTypes.object.isRequired
  };
  
SignupContainer.propTypes = {
    user: PropTypes.string,
    loginError: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  };
  

function mapStateToProps(state) {
    const {auth} = state;
    if (auth) {
        return { user: auth.user, loginError: auth.loginError };
      }

      return { user: null };
}

export default connect(mapStateToProps)(SignupContainer);