import { call, delay, put, takeLatest} from "redux-saga/effects";
import { fetchGithubData, setPortfolioList, setError } from "../DataSlice/githubSlice";
import { getData } from "../GetData/githubData";


export function* fetchGithubDataWorker() {
  try {
    yield delay(1200);
    const data = yield call(getData);
    yield put(setPortfolioList(data));
  } catch (error) {
    yield put(setError());
  }
}

export function* githubSaga() {
  yield takeLatest(fetchGithubData.type, fetchGithubDataWorker);
}








