import {
  CONNECT_SUCCESS,
  CONNECT_ERROR,
  ALERT,
  DISMISS,
  HIDE_ALERT
} from "../actions/alerts";

const initialState = {
  alerts: [],
  hasError: false,
  showAlert: false,
  message: null
};

export default function alerts(state = initialState, action = {}) {
  switch (action.type) {
    case CONNECT_SUCCESS: {
      const payload = {
        type: "info",
        message: "Socket connection success. Waiting for alerts.",
        time: new Date().toString()
      };
      const alerts = state.alerts || [];
      return Object.assign(
        {},
        state,
        { hasError: false },
        {
          alerts: [payload, ...alerts]
        }
      );
    }
    case CONNECT_ERROR: {
      const payload = {
        type: "error",
        message: "Socket connection error.",
        time: new Date().toString()
      };
      const alerts = state.alerts || [];
      return Object.assign(
        {},
        state,
        { hasError: true },
        {
          alerts: [payload, ...alerts]
        }
      );
    }
    /*case ALERT: {
      const alerts = state.alerts || [];
      return Object.assign(
        {},
        state,
        { hasError: false },
        {
          alerts: [action.payload, ...alerts]
        }
      );
    }*/
    case DISMISS: {
      return Object.assign({}, state, { alerts: [] });
    }

    case ALERT: {
      return {
        ...state,
        showAlert: true,
        message: action.payload
      }
    }

    case HIDE_ALERT: {
      return {
        ...state,
        showAlert: false,
        message: null
      }
    }

    default:
      return state;
  }
}
