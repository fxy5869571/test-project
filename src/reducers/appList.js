import { REQUEST_APP_LIST, RECEIVE_APP_LIST } from "../actions/";

function AppList(state = [], action) {
  switch (action.type) {
    case REQUEST_APP_LIST:
      return state;
    case RECEIVE_APP_LIST:
      return { ...state, ...action.data.feed };
    default:
      return state;
  }
}

export default AppList;
