import { all } from "redux-saga/effects";
import watchRequestAppList from "./watchRequestAppList";
import watchRequestRecomend from "./watchRequestRecomend";
import watchRequestSearchApp from "./watchRequestSearchApp";
import watchRequestAppDetail from "./watchRequestAppDetail";

export default function* rootSaga() {
  yield all([
    watchRequestRecomend(),
    watchRequestAppList(),
    watchRequestSearchApp(),
    watchRequestAppDetail()
  ]);
}
