import { RECEIVE_RECOMEND, REQUEST_RECOMEND } from "../actions/";

function Recomend(state = [], action) {
  switch (action.type) {
    case REQUEST_RECOMEND:
      return state;
    case RECEIVE_RECOMEND:
      return { ...state, ...action.data.feed };
    default:
      return state;
  }
}

export default Recomend;
