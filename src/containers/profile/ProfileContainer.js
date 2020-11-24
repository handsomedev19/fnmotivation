import React from "react";
import {connect} from "react-redux";
import {getUser} from "../../actions/auth";
import {getUserStories, getUserArticles} from "../../actions/articles";
import searchIcon from '../../images/search-icon.svg';
import doubleArrowIcon from "../../images/double-arrow.svg";
 
class ProfileContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const userId = this.props.auth.id;
        this.props.dispatch(getUser(userId));
        this.props.dispatch(getUserStories(userId));
        this.props.dispatch(getUserArticles(userId));

    }

    render(){
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
                                    <img src="images/profile-img.png" alt="" className="img-fluid" />
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
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><span>5</span> Favorites</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-Followers-tab" data-toggle="pill" href="#pills-Followers" role="tab" aria-controls="pills-Followers" aria-selected="false"><span>20</span> Followers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-Following-tab" data-toggle="pill" href="#pills-Following" role="tab" aria-controls="pills-Following" aria-selected="false"><span>20</span> Following</a>
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
                                                        { userStories.length && userStories.map(function(story){
                                                            return (
                                                                <tr>
                                                                    <td><p>{story.title}</p></td>
                                                                    <td>{story.article_category.title}</td>
                                                                    <td>{story.published_at}</td>
                                                                    <td>
                                                                        <ul>
                                                                            <li><a href="#">Edit</a></li>
                                                                            <li><a className="delet-btn" href="#">Delete</a></li>
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
                                                                            <li><a href="#">Edit</a></li>
                                                                            <li><a className="delet-btn" href="#">Delete</a></li>
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
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <ul style={{justifyContent: "flex-end"}}> 
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <ul style={{justifyContent: "flex-end"}}> 
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <ul style={{justifyContent: "flex-end"}}>  
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <ul style={{justifyContent: "flex-end"}}> 
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                <ul style={{justifyContent: "flex-end"}}> 
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Followers" role="tabpanel" aria-labelledby="pills-Followers-tab">
                                        
                                    </div>
                                    <div className="tab-pane fade" id="pills-Following" role="tabpanel" aria-labelledby="pills-Following-tab">...</div>
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
    
    return {
        auth,
        userInfo,
        userStories,
        userArticles
    }
}
export default connect(mapStateToProps)(ProfileContainer);