import { call, delay, put, takeLatest} from "redux-saga/effects";
import { fetchGithubData, setPortfolioList } from "../DataSlice/githubSlice";
import { getData } from "../GetData/githubData";


export function* fetchGithubDataWorker() {
  try {
    yield delay(1000);
    const data = yield call(getData);
    yield put(setPortfolioList(data));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* githubSaga() {
  yield takeLatest(fetchGithubData.type, fetchGithubDataWorker);
}








