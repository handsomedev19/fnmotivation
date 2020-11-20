import "isomorphic-fetch";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { alert } from "../actions/alerts";

export function checkStatus(response) {
  if (!response.ok) {
    // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

export function parseJSON(response) {
  return response.json();
}

/**
 * A utility to call a restful service.
 *
 * @param url The restful service end point.
 * @param config The config object of the call. Can be null.
 * @param request The request action.
 * @param onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @param onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
export function callApi(
  url,
  config,
  request,
  onRequestSuccess,
  onRequestFailure
) {
  return dispatch => {
    dispatch(request);

    return axios.post(url, config)
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      //alert("Login Success");
      dispatch(onRequestSuccess(response.data));
      dispatch(alert("Login Success!"));
    })
    .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
        //alert("Login Failed");
        dispatch(onRequestFailure(error.response));
        dispatch(alert("Login Failed!"));
    });
    
     /* .then(checkStatus)
      .then(parseJSON)
      .then(json => {
        dispatch(onRequestSuccess(json));
      })
      .catch(error => {
        const response = error.response;
        if (response === undefined) {
          dispatch(onRequestFailure(error));
        } else {
          error.status = response.status;
          error.statusText = response.statusText;
          response.text().then(text => {
            try {
              const json = JSON.parse(text);
              error.message = json.message;
            } catch (ex) {
              error.message = text;
            }
            dispatch(onRequestFailure(error));
          });
        }
      }); */
  };
}

export const ID_TOKEN = "id_token";
export const ID_USER = "id_user";
export const ID_ID = "id_id";
export const ID_AVATAR = "id_avatar";

export const SERVER_URL = "http://localhost:1337";
//export const SERVER_URL = "http://fnmotivation.com:1337";

export const DEFAULT_USER_AVATAR = SERVER_URL + "/uploads/avatar/user-icon.png";
export const AVATAR_URL = SERVER_URL + "/uploads/";
export const NOTIFICATION_URL = SERVER_URL + "/uploads/assets/notification-icon.svg";
export const ARTICLE_THUMB_URL = SERVER_URL + "/uploads/";
export const ARTICLE_CATEGORY_THUMB_URL = SERVER_URL + "/uploads/";

export function setIdToken(idToken) {
  localStorage.setItem(ID_TOKEN, idToken);
}

export function removeIdToken() {
  localStorage.removeItem(ID_TOKEN);
}

export function loadIdToken() {
  return localStorage.getItem(ID_TOKEN);
}


export function setIdUser(idUser) {
  localStorage.setItem(ID_USER, idUser);
}

export function removeIdUser() {
  localStorage.removeItem(ID_USER);
}

export function loadIdUser() {
  return localStorage.getItem(ID_USER);
}


export function setIdId(idId) {
  localStorage.setItem(ID_ID, idId);
}

export function removeIdId() {
  localStorage.removeItem(ID_ID);
}

export function loadIdId() {
  return localStorage.getItem(ID_ID);
}


export function setIdAvatar(idAvatar) {
  localStorage.setItem(ID_AVATAR, idAvatar);
}

export function removeIdAvatar() {
  localStorage.removeItem(ID_AVATAR);
}

export function loadIdAvatar() {
  return localStorage.getItem(ID_AVATAR);
}


export function decodeUserProfile(idToken) {
  try {
    return jwt_decode(idToken);
  } catch (err) {
    return null;
  }
}

export function loadUserProfile() {
  try {
    const idToken = localStorage.getItem(ID_TOKEN);
    const userProfile = jwt_decode(idToken);
    const now = new Date().getTime() / 1000; // Date().getTime() returns milliseconds.
    // So divide by 1000 to get seconds
    if (now > userProfile.exp) {
      // user profile has expired.
      removeIdToken();
      return null;
    }
    return userProfile;
  } catch (err) {
    return null;
  }
}
