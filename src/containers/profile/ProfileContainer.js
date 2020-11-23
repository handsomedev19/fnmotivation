import React from "react";
import {connect} from "react-redux";
import {getUser} from "../../actions/auth";
 
class ProfileContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const userId = this.props.auth.id;
        this.props.dispatch(getUser(userId));
    }

    render(){
        const user = this.props.userInfo;

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
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><span>10</span> Story Posts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><span>25</span> Articles</a>
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
                                                    <a href="#"><img src="images/search-icon.svg" alt="" /></a>
                                                </form>
                                                <a className="view-all" href="#">View all posts</a>
                                            </div>
                                            <div className="table-responsive">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Category <img src="images/double-arrow.svg" alt="" /></th>
                                                            <th>Date <img src="images/double-arrow.svg" alt="" /></th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                             <td><p>Former model on childhood trauma, eating disorder...</p></td>
                                                            <td>Weight Issues</td>
                                                            <td>August 11, 2020</td>
                                                            <td>
                                                                <ul>
                                                                    <li><a href="#">Edit</a></li>
                                                                    <li><a className="delet-btn" href="#">Delete</a></li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
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
                                    <div className="tab-pane fade" id="pills-Followers" role="tabpanel" aria-labelledby="pills-Followers-tab">...</div>
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
    
    return {
        auth,
        userInfo
    }
}
export default connect(mapStateToProps)(ProfileContainer);