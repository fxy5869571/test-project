import { combineReducers } from "redux";
import recomend from "./recomend";
import appList from "./appList";
import searchApp from "./searchApp";
import appDetail from "./appDetail";

const reducers = combineReducers({
  appList,
  recomend,
  searchApp,
  appDetail
});
export default reducers;
