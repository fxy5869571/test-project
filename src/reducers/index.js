import { combineReducers } from "redux";
import recomend from "./recomend";
import appList from "./appList";

const reducers = combineReducers({
  appList,
  recomend
});
export default reducers;
