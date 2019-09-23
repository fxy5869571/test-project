import { REQUEST_APP_DETAIL, RECEIVE_APP_DETAIL } from "../actions/";

function appDetail(state = [], action) {
  switch (action.type) {
    case REQUEST_APP_DETAIL:
      return state;
    case RECEIVE_APP_DETAIL:
      return action.data;
    default:
      return state;
  }
}

export default appDetail;
