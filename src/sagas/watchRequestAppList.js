import { put, takeEvery, delay, call } from "redux-saga/effects";
import { REQUEST_APP_LIST, RECEIVE_APP_LIST } from "../actions";
import { getAppList } from "../api";
export function* requestAppList(payload) {
  const data = yield call(getAppList, payload);
  yield delay(1);
  yield put({ type: RECEIVE_APP_LIST, data });
}

export default function* watchRequestAppList() {
  yield takeEvery(REQUEST_APP_LIST, requestAppList);
}
