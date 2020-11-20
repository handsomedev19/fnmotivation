import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../actions/auth";

import { loadUserProfile, loadIdToken, loadIdUser, loadIdId, loadIdAvatar } from "../utils/apiUtils";

const initialState = {
  user: loadIdUser(),
  password: null,
  userRole: null,
  loggingIn: false,
  loggingOut: false,
  loginError: null,
  token: loadIdToken(),
  id: loadIdId(),
  avatar: loadIdAvatar()
};

function initializeState() {
  const userProfile = loadUserProfile();
  return Object.assign({}, initialState, userProfile);
}

export default function auth(state = initializeState(), action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, { loggingIn: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggingIn: false,
        user: action.user,
        userRole: action.role,
        token: action.token,
        id: action.id,
        avatar: action.avatar
      });
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        user: null,
        userRole: null,
        loginError: action.error
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null,
        userRole: null,
        loginError: null,
        token: null,
        id: null,
        avatar: null
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}
