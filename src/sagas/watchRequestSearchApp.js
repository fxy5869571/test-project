import { put, takeEvery, delay, call } from "redux-saga/effects";
import { REQUEST_SEARCH_APP, RECEIVE_SEARCH_APP } from "../actions";
import { searchApp } from "../api";
export function* requestSearchApp(payload) {
  const data = yield call(searchApp, payload);
  yield delay(1);

  yield put({ type: RECEIVE_SEARCH_APP, data });
}

export default function* watchRequestSearchApp() {
  yield takeEvery(REQUEST_SEARCH_APP, requestSearchApp);
}
