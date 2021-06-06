import { actionTypes } from "./ConfigAuth";
import { actions } from "./ActionAuth";
import { getUserByToken } from "./CrudAuth";
import { takeLatest, put } from "redux-saga/effects";
export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const { data: user } = yield getUserByToken();

    yield put(actions.fulfillUser(user));
  });
}
