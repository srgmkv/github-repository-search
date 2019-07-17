import { takeEvery, call, put } from "redux-saga/effects";
import axios from 'axios';

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}
function* workerSaga(action) {
  try {
    const response = yield call(fetchRepos, action.payload);
    console.log('response', response)

    yield put({ type: "DATA_LOADED", payload: response.data.items });
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error });
  }

}

function fetchRepos(request) {
  return axios.get(`https://api.github.com/search/repositories?q=${request}`)
  
}
