import React from "react";
import PropTypes from "prop-types";
import {NavDropdown} from "react-bootstrap";

const UserProfile = ({ user, handleLogout }) => {
  return (
    <NavDropdown title={
      <>
        <span className="fa fa-user" style={{ marginRight: "0.5em" }} />
        {user || "Anonymous"}
        <span className="caret" />
     </>
    } id="basic-nav-dropdown" >
        <NavDropdown.Item href="#" onClick={handleLogout}>
          Log out &nbsp; &nbsp;
          <i className="fa fa-sign-out" style={{ marginRight: "0.5em" }} />          
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Profile</NavDropdown.Item>
      </NavDropdown>
  );
};

UserProfile.propTypes = {
  user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

export default UserProfile;
