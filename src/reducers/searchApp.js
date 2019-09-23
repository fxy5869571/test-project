import { RECEIVE_SEARCH_APP, REQUEST_SEARCH_APP } from "../actions";

function searchApp(state = [], action) {
  switch (action.type) {
    case REQUEST_SEARCH_APP:
      return state;
    case RECEIVE_SEARCH_APP:
      return action.data;
    default:
      return state;
  }
}

export default searchApp;
