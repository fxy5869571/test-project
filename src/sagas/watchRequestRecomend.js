import { put, takeEvery, delay, call } from "redux-saga/effects";
import { RECEIVE_RECOMEND, REQUEST_RECOMEND } from "../actions";
import { getrecomend } from "../api";
export function* requestRecomend(payload) {
  const data = yield call(getrecomend, payload);
  yield delay(1000);
  yield put({ type: RECEIVE_RECOMEND, data });
}

export default function* watchRequestRecomend() {
  yield takeEvery(REQUEST_RECOMEND, requestRecomend);
}
