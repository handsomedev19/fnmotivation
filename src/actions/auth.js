import axios from "axios";
import { SERVER_URL } from "../utils/apiUtils"
import {
  callApi,
  ID_TOKEN,
  loadIdToken,
  setIdToken,
  removeIdToken,
  decodeUserProfile,
  removeIdUser,
  setIdUser
} from "../utils/apiUtils";
import { alert } from "./alerts";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

function loginRequest(user) {
  return {
    type: LOGIN_REQUEST,
    user
  };
}

function loginSuccess(payload) {
  //const idToken = payload[ID_TOKEN];
  //setIdToken(idToken);
  //const profile = decodeUserProfile(idToken);
  const { user } = payload;
  const { jwt } = payload;
  const { role } = user;

  setIdToken(jwt);
  setIdUser(user.username);

  console.log("loggin user: " + user.username);
  console.log("loggin user role: " + role.id);
  console.log("loggin user token: " + jwt);

  return {
    type: LOGIN_SUCCESS,
    user: user.username,
    role: role.id,
    token: jwt
  };
}

function loginFailure(error) {
  removeIdToken();
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export function login(user, password) {
  const config = {
    identifier: user,
    password: password
  };

  return callApi(
    SERVER_URL + "/auth/local",
    config,
    loginRequest(user),
    loginSuccess,
    loginFailure
  );
}

function logoutRequest(user) {
  removeIdToken();
  return {
    type: LOGOUT_REQUEST,
    user
  };
}

function logoutSuccess(payload) {
  removeIdToken();
  removeIdUser();
  return {
    type: LOGOUT_SUCCESS,
    user: payload.user
  };
}

function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error
  };
}

export function logout(user) {
  // const idToken = loadIdToken();
  // const config = {
  //   method: "post",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${idToken}`
  //   },
  //   body: JSON.stringify({
  //     user
  //   })
  // };

  // return callApi(
  //   "/api/logout",
  //   config,
  //   logoutRequest,
  //   logoutSuccess,
  //   logoutFailure
  // );

    return dispatch => {
      dispatch(logoutRequest);
      return dispatch(logoutSuccess(user));
    }
}

export function signup(username, fullname, email, gender, birthday, password){

  return dispatch => {

    console.log("signupdata: " + username);
    console.log(fullname);
    console.log(email);
    console.log(gender);
    console.log(birthday);
    console.log(password);
    axios                
    .post(SERVER_URL + '/auth/local/register', {
        username: username,
        fullname: fullname,
        email: email,
        gender: gender,
        birthday: birthday,
        password: password,
    })
    .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        //alert("Signup Success");

        
        dispatch(loginSuccess(response.data));
        dispatch(alert("Signup Success."));
        
    })
    .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
  
        dispatch(loginFailure(error));
        dispatch(alert("Signup Failed, Please Try Again"));

    });
  }
}
