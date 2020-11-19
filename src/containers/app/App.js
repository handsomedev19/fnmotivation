import React, { Component } from "react";
import PropTypes from "prop-types";

/////////////////////////////////////////////////////////////////////////
// BrowserRouter would be preferred over HashRouter, but BrowserRouter
// would require configuring the server. So we will use HashRouter here.
// Please change to BrowserRouter if you have your own backend server.
///////////////////////////////////////////////////////////////////////////
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Login from "../login/Login";
import PrivateRoute from "../misc/PrivateRoute";
import NotFound from "../misc/NotFound";
import HomeContainer from "../home1/HomeContainer"
import PostNewArticleContainer from "../postnewarticle/PostNewArticleContainer"
import PostStoryContainer from "../poststory/PostStoryContainer"
import CommunitiesContainer from "../communities/CommunitiesContainer"
import SignupContainer from "../signup/SignupContainer"
import ArticleContainer from "../article/ArticleContainer";

import { logout } from "../../actions/auth";
import auth from "../../reducers/auth";

class App extends Component {
  handleLogout() {
    const { auth } = this.props;
    const { user } = auth;
    this.props.dispatch(logout(user));
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;

    console.log(auth);
    console.log("user token: " + auth.token);
    console.log("user username: " + user);

    const isAuthenticated = !!auth.token;
    console.log("isAuthenticated: " + isAuthenticated);
    
    return (
      <Router>
        <div>
          <div>
            <Header auth ={auth} handleLogout={() => this.handleLogout()} />
            <div className="appContent">
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/communities" component={CommunitiesContainer} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignupContainer} />
                <Route path="/articles/:articleId" component={ArticleContainer}/>
                <PrivateRoute
                  path="/post-story"
                  isAuthenticated={isAuthenticated}
                  component={PostStoryContainer}
                />
                <PrivateRoute
                  path="/post-new-article"
                  isAuthenticated={isAuthenticated}
                  component={PostNewArticleContainer}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

App.contextTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  console.log(auth);
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
