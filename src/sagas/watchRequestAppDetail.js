import { put, takeEvery, delay, call } from "redux-saga/effects";
import { RECEIVE_APP_DETAIL, REQUEST_APP_DETAIL } from "../actions";
import { getlookUp } from "../api";
export function* requestRecomend(payload) {
  const data = yield call(getlookUp, payload);

  yield delay(1);
  yield put({ type: RECEIVE_APP_DETAIL, data });
}

export default function* watchRequestRecomend() {
  yield takeEvery(REQUEST_APP_DETAIL, requestRecomend);
}
