import React from "react";
import {connect} from "react-redux";
import {getUser} from "../../actions/auth";
import {
    getUserStories, 
    getUserArticles, 
    getUserBookmark, 
    getUserFollower, 
    getUserFollowing, 
    deleteStory,
    deleteBookmark,
    deleteFollowing
} from "../../actions/articles";
import searchIcon from '../../images/search-icon.svg';
import doubleArrowIcon from "../../images/double-arrow.svg";
import {Link} from "react-router-dom";
import {DEFAULT_USER_AVATAR, AVATAR_URL} from "../../utils/apiUtils";
 
class ProfileContainer extends React.Component {
    constructor(props){
        super(props);

        this.handleStoryDelete = this.handleStoryDelete.bind(this);
        this.handleBookmarkDelete = this.handleBookmarkDelete.bind(this);
        this.handleFollowingDelete = this.handleFollowingDelete.bind(this);
    }

    componentDidMount(){
        const userId = this.props.auth.id;
        this.props.dispatch(getUser(userId));
        this.props.dispatch(getUserStories(userId));
        this.props.dispatch(getUserArticles(userId));
        this.props.dispatch(getUserBookmark(userId));
        this.props.dispatch(getUserFollower(userId));
        this.props.dispatch(getUserFollowing(userId));
    }

    handleStoryDelete(event){
        event.preventDefault();

        //console.log(event.target.name);
        const articleId = event.target.name;
        this.props.dispatch(deleteStory(articleId));
    }

    handleBookmarkDelete(event){
        event.preventDefault();
        const userId = this.props.auth.id;
        const articleId = event.target.name;
        console.log(articleId);
        const config = {
            user_id: userId,
            article_id: parseInt(articleId)
        }

        this.props.dispatch(deleteBookmark(config));
    }

    handleFollowingDelete(event){
        event.preventDefault();
        const FromCustomerId = this.props.auth.id;
        const ToCustomerId = parseInt(event.target.name);
        console.log(ToCustomerId);
        const config = {
            from_customer_id: FromCustomerId,
            to_customer_id: ToCustomerId
        }

        this.props.dispatch(deleteFollowing(config));

    }

    render(){
        var that = this;
        const user = this.props.userInfo;
        let userStories = this.props.userStories; if(userStories == null){userStories = {};}
        let userArticles = this.props.userArticles; if(userArticles == null){userArticles = {};}

        return(
            <section className="profile-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="profile-inner">
                                <div className="image-holder">
                                    {
                                        user.avatar == null ? <img src={DEFAULT_USER_AVATAR} alt="" className="img-fluid" />
                                                    : <img src={AVATAR_URL + user.avatar} alt="" className="img-fluid" />
                                    }
                                    
                                </div>
                                <div className="profile-right">
                                    <div className="text-box">
                                        <h3>{user.fullname}</h3>
                                        <h4>{user.email}</h4>
                                        <ul>
                                            <li><a className="edit-btn" href="">Edit</a></li>
                                            <li><a href="">Reports</a></li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                            <div className="profile-posts">
                                <div className="table-responsive">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><span>{this.props.userStories.length}</span> Story Posts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><span>{this.props.userArticles.length}</span> Articles</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><span>{this.props.userBookmarks.length}</span> Favorites</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-Followers-tab" data-toggle="pill" href="#pills-Followers" role="tab" aria-controls="pills-Followers" aria-selected="false"><span>{this.props.followers.length}</span> Followers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-Following-tab" data-toggle="pill" href="#pills-Following" role="tab" aria-controls="pills-Following" aria-selected="false"><span>{this.props.followings.length}</span> Followings</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade  show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="profile-posts-inner">
                                            <div className="profile-posts-view">
                                                <form>
                                                    <input type="text" className="form-control" placeholder="Search Post" />
                                                    <a href="#"><img src={searchIcon} alt="" /></a>
                                                </form>
                                                <a className="view-all" href="#">View all posts</a>
                                            </div>
                                            <div className="table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Category <img src={doubleArrowIcon} alt="" /></th>
                                                            <th>Date <img src={doubleArrowIcon} alt="" /></th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        { userStories.length && userStories.slice(0, 10).map(function(story){
                                                            return (
                                                                <tr>
                                                                    <td><p>{story.title}</p></td>
                                                                    <td>{story.article_category.title}</td>
                                                                    <td>{story.published_at}</td>
                                                                    <td>
                                                                        <ul>
                                                                            <li><Link to={`/editstory/${story.id}`}>Edit</Link></li>
                                                                            <li><a className="delet-btn" href="#" name={story.id} onClick={that.handleStoryDelete}>Delete</a></li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpane1" aria-labelledby="pills-profile-tab">
                                    <div className="profile-posts-inner">
                                            <div className="profile-posts-view">
                                                <form>
                                                    <input type="text" className="form-control" placeholder="Search Post" />
                                                    <a href="#"><img src={searchIcon} alt="" /></a>
                                                </form>
                                                <a className="view-all" href="#">View all posts</a>
                                            </div>
                                            <div className="table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Category <img src={doubleArrowIcon} alt="" /></th>
                                                            <th>Date <img src={doubleArrowIcon} alt="" /></th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        { userArticles.length && userArticles.map(function(story){
                                                            return (
                                                                <tr>
                                                                    <td><p>{story.title}</p></td>
                                                                    <td>{story.article_category.title}</td>
                                                                    <td>{story.published_at}</td>
                                                                    <td>
                                                                        <ul>                                                                            
                                                                            <li><a className="delet-btn" href="#" onClick={that.handleStoryDelete}>Delete</a></li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="profile-posts-inner"> 
                                            <div className="table-responsive">
                                                <table> 
                                                    <tbody>
                                                        {this.props.userBookmarks.length > 0 && this.props.userBookmarks.map(function(article){
                                                            return (
                                                                <tr>
                                                                    <td><p>{article.title}</p></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <ul style={{justifyContent: "flex-end"}}> 
                                                                            <li><a className="delet-btn" href="" name={article.id} onClick={that.handleBookmarkDelete}>Delete</a></li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}                                                    
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Followers" role="tabpanel" aria-labelledby="pills-Followers-tab">
                                        <div className="profile-posts-inner"> 
                                            <div className="table-responsive">
                                                <table> 
                                                    <tbody>
                                                        {this.props.followers.length > 0 && this.props.followers.map(function(user){
                                                            return (
                                                                <tr>
                                                                    <td><p></p></td>
                                                                    <td><p>{user.username}</p></td>
                                                                    <td></td>
                                                                    <td>
                                                                        
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}                                                    
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Following" role="tabpanel" aria-labelledby="pills-Following-tab">
                                        <div className="profile-posts-inner"> 
                                            <div className="table-responsive">
                                                <table> 
                                                    <tbody>
                                                        {this.props.followings.length > 0 && this.props.followings.map(function(user){
                                                            return (
                                                                <tr>
                                                                    <td><p></p></td>
                                                                    <td><p>{user.username}</p></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <ul style={{justifyContent: "flex-end"}}> 
                                                                            <li><a className="delet-btn" href="" name={user.id} onClick={that.handleFollowingDelete}>Delete</a></li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}                                                    
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
function mapStateToProps(state){
    const {auth} = state || {};
    const {userInfo} = state.auth || {};
    const {userStories} = state.articles || {};
    const {userArticles} = state.articles || {};
    const {userBookmarks} = state.articles || {};
    const {followers} = state.articles || {};
    const {followings} = state.articles || {};
    
    return {
        auth,
        userInfo,
        userStories,
        userArticles,
        userBookmarks,
        followers,
        followings
    }
}
export default connect(mapStateToProps)(ProfileContainer);