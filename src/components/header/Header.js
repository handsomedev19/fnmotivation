import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {Container, Row, Col, Nav, Navbar, Collapse} from 'react-bootstrap'
import UserProfile from "./UserProfile";
import Alerts from "./Alerts";
import "./header.scss";
import logo from '../../images/logo.png';
import searchIcon from '../../images/search-icon.svg';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
        open: false,
        searchValue: ""
    }
    this.setOpen = this.setOpen.bind(this);
    this.handleSearchChnage = this.handleSearchChnage.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchChnage(event){
    event.preventDefault();
    const {name, value} = event.target;
    //console.log(value);
    this.setState({searchValue: value}); 
  }

  handleSearchClick(event){
      event.preventDefault();
      const value = this.state.searchValue;
      console.log(value);
      if(value != ""){
        this.props.history.push("/search?" + value);
      }   
  }

  setOpen(){
      this.setState({open: !this.state.open});
  }

  onLogoutClick = event => {
    event.preventDefault();
    this.props.handleLogout();
    this.props.history.replace("/login");
  };

  render() {
    const { auth } = this.props;
    const { user } = auth;
    const isAuthenticated = true && auth.token;
    //console.log("isAuthenticated: " + isAuthenticated);
    const pathname = this.props.history.location.pathname;
    const isLoginPage = pathname.indexOf("login") > -1;
    const isSignupPage = pathname.indexOf("signup") > -1;
    const isAboutPage = pathname.indexOf("about") > -1;
    const isUsersPage = pathname.indexOf("users") > -1;
    const isReposPage = pathname.indexOf("repos") > -1;

    return (

      
      <header className="header">
          <Container fluid>
              <Row>
                  <Col lg={12}>
                      <div className="navigation">
                              <a className="navbar-brand" href="/"><img src={logo} alt="" className="img-fluid" /></a>
                              
                              <div className="fn-navbar-wrapper">
                                  <div className="fn-navbar-innerwrapper">
                                  <Navbar bg="" expand="lg" className="fn-navbar">
                                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                      <Navbar.Collapse id="basic-navbar-nav">
                                      <Nav className="">
                                          <div className="nav-item"><Nav.Link href="/">Home</Nav.Link></div>
                                          <div className="nav-item"><Nav.Link href="/post-story">Post Story</Nav.Link></div>
                                          <div className="nav-item"><Nav.Link href="/post-new-article">Post News Article</Nav.Link></div>
                                          <div className="nav-item"><Nav.Link href="/communities">Communities</Nav.Link></div>
                                      </Nav>
                                      </Navbar.Collapse>
                                  </Navbar>
                                  </div>

                                  <div className="header-right">
                                      <form onSubmit={this.handleSearchClick}>
                                          <input type="text" className="form-control" placeholder="Search" onChange={this.handleSearchChnage}/>
                                          <a href="" ><img src={searchIcon} alt="" /></a>
                                      </form>
                                      
                                      
                                      
                                      <ul className="acount-btn">
                                          { isAuthenticated ?
                                          <UserProfile auth={auth} handleLogout={this.onLogoutClick} /> :
                                          <>
                                            <li className={isLoginPage ? 'login-btn' : ''}><a href="/login">Login</a></li>
                                            <li  className={isSignupPage ? 'login-btn' : ''}><a href="/signup">Sign Up</a></li>
                                          </>
                                      }
                                      </ul> 

                                       
                                  </div>

                                  <div className="mobile-btn">
                                          <div className="header-right">
                                              <form> 
                                                  <a href="#"><img src={searchIcon} alt="" 
                                                      onClick={this.setOpen}
                                                      aria-controls="example-collapse-text"
                                                      aria-expanded={this.state.open}
                                                  /></a>
                                              </form>
                                              <ul className="acount-btn">
                                                  { isAuthenticated ?
                                                  <UserProfile auth={auth} handleLogout={this.onLogoutClick} /> :
                                                  <li>
                                                      <div className="use-profile"> 
                                                          <div className="text-box">
                                                              <a href="/login"> <h3>Login</h3></a>
                                                          </div>

                                                      </div>
                                                  </li>}
                                              </ul>
                                          </div>
                                      </div>  
                              </div>
                      
                      </div>
                      <Collapse in={this.state.open}>
                          <div id="example-collapse-text">
                              <div className="mobile-search-collapse"> 
                                  <form>
                                          <input type="text" className="form-control" placeholder="Search" />
                                          <a href="#"><img src={searchIcon} alt="" /></a>
                                  </form>
                              </div>
                          
                          </div>
                      </Collapse>
                  </Col>
              </Row>
          
              <Alerts/>
          </Container>
      </header>
      
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

export default withRouter(Header);
