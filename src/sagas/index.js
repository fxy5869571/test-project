import { all } from "redux-saga/effects";
import watchRequestAppList from "./watchRequestAppList";
import watchRequestRecomend from "./watchRequestRecomend";

export default function* rootSaga() {
  yield all([watchRequestRecomend(), watchRequestAppList()]);
}
