import React from "react";
import PropTypes from "prop-types";
import {NavDropdown} from "react-bootstrap";
import { DEFAULT_USER_AVATAR, AVATAR_URL, NOTIFICATION_URL } from "../../utils/apiUtils";

const UserProfile = ({ auth, handleLogout }) => {

  //console.log(auth.avatar);
  
  return (
    <NavDropdown title={
      <>
        <ul>
            <li className="notification-icon"><a href="#"><img src={NOTIFICATION_URL} alt="" /></a></li>
            <li>
                <div className="use-profile"> 
                    <div className="text-box">
                        <h3>{auth.user}</h3>
                    </div>
                    <div className="image-holder">
                        {
                          auth.avatar == null ?
                          <img className="img-fluid" src={DEFAULT_USER_AVATAR} alt="avatar1" />
                          :
                          <img className="img-fluid" src={AVATAR_URL + auth.avatar} alt="avatar2" />
                        }                        
                    </div>
                </div>
            </li>
        </ul>

        {/*<span className="fa fa-user" style={{ marginRight: "0.5em" }} />
        {user || "Anonymous"}
        <span className="caret" />*/}
     </>
    } id="basic-nav-dropdown" >
        <NavDropdown.Item href="#" onClick={handleLogout}>
          Log out &nbsp; &nbsp;
          <i className="fa fa-sign-out" style={{ marginRight: "0.5em" }} />          
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
      </NavDropdown>
  );
};

UserProfile.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

export default UserProfile;
