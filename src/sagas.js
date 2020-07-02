import { call, put, takeEvery } from "redux-saga/effects";
import { fetchData } from "./fetchData";
function* initializeAsync() {
  const data = yield call(fetchData);
  yield put({
    type: "initializeAsync",
    payload: {
      value: data,
    },
  });
}

export function* watchInitialize() {
  yield takeEvery("initialize", initializeAsync);
}
