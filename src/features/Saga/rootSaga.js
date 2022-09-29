import { all } from "redux-saga/effects";
import {githubSaga} from "./githubSaga";

export default function* rootSaga() {
  yield all([
    githubSaga(),
  ]);
}
