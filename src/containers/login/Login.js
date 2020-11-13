import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
            identifier: '',
            password: ''
        },
        checkValue: false,
        submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

    const { user } = this.state;

    //console.log("event target name: " + name);
    //console.log("event target value : " + value);

    this.setState({
        user: {
            ...user,
            [name]: value
        }
    });
}

  handleLogin(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    //console.log(user.identifier);
    //console.log(user.password);

    this.props.dispatch(login(user.identifier, user.password));
    user.identifier = "";
    user.password = "";

    this.setState({ submitted: false });
  }

  render() {
    const { user, loginError } = this.props;
    return (
      <div className="wrapper">
      
      <section className="login-sec">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-12">
                      <div className="login-inner">
                          <h3>Login</h3>
                          <form onSubmit={this.handleSubmit}>
                              <div className="form-group mb-5">
                                  <label>Email</label>
                                  <input type="text" className="form-control" placeholder="aamir91@gmail.com" name="identifier" onChange={this.handleChange}/>
                              </div>
                              <div className="form-group ">
                                  <label>Password</label>
                                  <input type="password" className="form-control" placeholder="......" name="password" onChange={this.handleChange}/>
                                  {/*<span className="arror-sms">Wrong password. Please enter a correct password</span> */}
                              </div>
                              <div className="form-group mb-5">
                                  <label className="check ">Remember Me
                                      <input type="checkbox"  name="is_name"/>
                                      <span className="checkmark"></span>
                                  </label>
                              </div>
                              <div className="form-group">
                                  <input type="button" className="btn btn-default" value="Login" onClick={this.handleLogin}/>
                              </div>
                              <div className="form-group">
                                  <p>Reset Password</p>
                                  <div className="or">
                                      <span>OR</span>
                                  </div>
                                  <div className="social-btn">
                                      <ul>
                                          <li><a href="#">Login with Google</a></li>
                                          <li><a className="facebook-btn" href="#">Login with Facebook</a></li>
                                      </ul>
                                  </div>
                                  <p className="register-ac">Don't have an account? <a href="/signup">Register</a></p>
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

Login.contextTypes = {
  store: PropTypes.object.isRequired
};

Login.propTypes = {
  user: PropTypes.string,
  loginError: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { auth } = state;
  if (auth) {
    return { user: auth.user, loginError: auth.loginError };
  }

  return { user: null };
}

export default connect(mapStateToProps)(Login);
