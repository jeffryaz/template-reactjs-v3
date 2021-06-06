import { all } from "redux-saga/effects";
import LoadSagas from "./Saga";

export default function* reduxSaga() {
  yield all([LoadSagas]);
}
